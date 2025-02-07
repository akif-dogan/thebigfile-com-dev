import {createActor, greet_backend} from "../../declarations/greet_backend";
import {AuthClient} from "@dfinity/auth-client";
import {HttpAgent} from "@dfinity/agent";
import {DelegationIdentity, Ed25519PublicKey, ECDSAKeyIdentity, DelegationChain} from "@dfinity/identity";
import {fromHexString} from "@dfinity/identity/lib/cjs/buffer";

let appPublicKey;

var url = window.location.href;
var publicKeyIndex = url.indexOf("sessionkey=");
if (publicKeyIndex !== -1) {
    // Parse the public key.
    var publicKeyString = url.substring(publicKeyIndex + "sessionkey=".length);
    appPublicKey = Ed25519PublicKey.fromDer(fromHexString(publicKeyString));
}

let actor = greet_backend;
let delegationChain;

const loginButton = document.getElementById("login");
loginButton.onclick = async (e) => {
    e.preventDefault();

    // Here we generated a middle key.
    // Then the II identity delegates to the middle key, and the middle key delegates to the app key.
    // This is a good way to avoid the issue that II delegation is not confidential due to:
    //   1. II delegation can’t be considered as confidential. An attacker could craft a delegation by observing state changes of the II canister;
    //   2. A malicious replica might leak the II delegation.
    // So here we generate a frontend only delegation which is only exposed to the Unity app.
    var middleKeyIdentity = await ECDSAKeyIdentity.generate();

    // Create an auth client.
    let authClient = await AuthClient.create({
        identity: middleKeyIdentity,
    });

    // Start the login process and wait for it to finish.
    await new Promise((resolve) => {
        authClient.login({
            identityProvider: "https://identity.ic0.app/#authorize",
            onSuccess: resolve,
        });
    });

    // At this point we're authenticated, and we can get the identity from the auth client.
    const middleIdentity = authClient.getIdentity();

    // Using the identity obtained from the auth client to create an agent to interact with the BIG.
    const agent = new HttpAgent({identity: middleIdentity});
    actor = createActor(process.env.GREET_BACKEND_CANISTER_ID, {
        agent,
    });

    // Create another delegation with the app public key, then we have two delegations on the chain.
    if (appPublicKey != null && middleIdentity instanceof DelegationIdentity ) {
        let middleToApp = await DelegationChain.create(
            middleKeyIdentity,
            appPublicKey,
            new Date(Date.now() + 15 * 60 * 1000),
            { previous: middleIdentity.getDelegation() },
        );

        delegationChain = middleToApp;
    }

    return false;
};

const openButton = document.getElementById("open");
openButton.onclick = async (e) => {
    e.preventDefault();

    if (delegationChain == null){
        console.log("Invalid delegation chain.");
        return false;
    }
    
    var url = "https://ms43p-uaaaa-aaaan-qixeq-cai.icp0.io/authorize?";
    var delegationString = JSON.stringify(delegationChain.toJSON());    
    url = url + "delegation=" + encodeURIComponent(delegationString);
    //console.log(url);

    window.open(url, "_self");

    return false;
};

const greetButton = document.getElementById("greet");
greetButton.onclick = async (e) => {
    e.preventDefault();

    greetButton.setAttribute("disabled", true);

    // Interact with backend actor, calling the greet method
    const greeting = await actor.greet();

    greetButton.removeAttribute("disabled");

    document.getElementById("greeting").innerText = greeting;

    return false;
};
