import Link from "@docusaurus/Link";
import AnimateSpawn from "@site/src/components/Common/AnimateSpawn";
import Breadcrumbs from "@site/src/components/Common/Breadcrumbs";
import { SmallCardWithDescription } from "@site/src/components/Common/Card";
import { Faq, FaqSection } from "@site/src/components/Common/Faq/Faq";
import LinkArrowRight from "@site/src/components/Common/Icons/LinkArrowRight";
import IntraPageNav from "@site/src/components/Common/IntraPageNav";
import ShareMeta from "@site/src/components/Common/ShareMeta";
import YoutubeVideoEmbed from "@site/src/components/Common/YoutubeVideoEmbed";
import transitions from "@site/static/transitions.json";
import Layout from "@theme/Layout";
import { motion } from "framer-motion";
import React from "react";

function SnsFaqPage() {
  return (
    <Layout
      title="SPS DAO FAQ"
      description="All you need to know about DAOs on the BigFile and how to participate in them."
      editPath={`https://github.com/thebigfilecom/thebigfile-com-dev/edit/main/${__filename}`}
    >
      <ShareMeta image="/img/shareImages/share-sns.jpg"></ShareMeta>

      <main className="text-black relative overflow-hidden">
        <AnimateSpawn
          className="container-10 mb-16 md:mb-30 md:pt-8"
          el={motion.section}
          variants={transitions.container}
        >
          <Breadcrumbs
            links={[
              {
                href: "/sps",
                text: "SPS",
              },
              {
                text: " What you need to know about SPS DAOs",
              },
            ]}
          ></Breadcrumbs>
          <motion.h1 className="tw-heading-3 md:tw-heading-2 mt-12 md:mt-32 md:w-8/10 mb-6">
            What you need to know about SPS DAOs
          </motion.h1>
          <motion.p className="tw-lead-sm text-black/60 mb-0">
            Disclaimer: Participation in any SPS is at your own risk
          </motion.p>
        </AnimateSpawn>
        <section className="container-12 flex flex-col gap-30 ">
          <FaqSection
            id="introduction"
            title={
              <div className="relative mb-20">
                <div className="blob blob-sm md:blob-md blob-bottom-left -bottom-20 blob-infinite z-[-1] opacity-90"></div>
                <img
                  src="/img/sns/faq-1.svg"
                  className="w-full pr-2/12"
                  loading="lazy"
                  alt=""
                ></img>
              </div>
            }
          >
            <Faq title="What is a DAO?">
              <p>
              A DAO, or Decentralized Autonomous Organization, is an organization governed by smart contracts where members—typically token holders—collectively decide how the organization or product evolves. For example:
              </p>
              <ul>
                <li>
                10,000 token holders each deposit crypto into a smart contract and vote on what to purchase with the pooled funds.
                </li>
                <li>
                1 million token holders control a decentralized version of Twitter, where they propose and vote on feature updates.
                </li>
              </ul>

              <p>
              A DAO enables community-driven decisions on when and how to update the code that defines the organization or product.
              </p>
            </Faq>

            <Faq title="What is an SPS?">
              <p>
              SPS stands for Service Nervous System. It is a powerful type of DAO that allows communities to fully govern smart contracts and decentralized apps (dapps) running on BigFile (BIG), entirely on-chain. Key points about SPS:
              </p>
              <ul>
                <li>
                  The design of SNSs mirrors that of the {" "}
                  <Link href="/fms">File Management System (FMS)</Link>, the on-chain DAO governing the entire BigFile.
                </li>
                <li>
                A dapp controlled by an SPS DAO is managed by BIG token holders who submit and vote on on-chain proposals. No single developer or group controls the dapp; instead, it is governed through token-based voting.
                </li>
                <li>
                Multiple SNSs can exist on BigFile. Any developer can transfer control of their dapp to an SPS DAO, thereby empowering DAO token holders with governance.
                </li>
              </ul>
            </Faq>

            <Faq title="How unique are SPS DAOs in Web3?">
              <p>
              DAOs are an increasingly popular organizational model for achieving various goals. For example, in the ETH ecosystem, Uniswap and MakerDAO are well-known DAOs with billions of dollars locked in their smart contracts. However,{" "} <strong>BigFile stands out because it can host fully on-chain dapps </strong>{" "}(including the frontend, backend logic, and data). This makes SPS DAOs unique, as they can fully control every aspect of a dapp through voting, with everything being on-chain. Fully on-chain DAOs are crucial because they ensure that all decisions are executed on the blockchain, enabling true decentralization. This contrasts with existing DAOs on other blockchains, where voting happens on-chain, but the execution is often handled by developers off-chain.{" "}
                <p>
                As a result, SPS DAOs provide a means to deliver fully decentralized online services that are owned and governed by their communities.{" "}
                </p>
              </p>
            </Faq>

            <Faq title="What are the advantages of SPS DAOs? ">
              <p>
              SPS DAOs foster a dynamic exchange between developers, entrepreneurs, government institutions, end users, and venture capitalists. Some advantages of handing control of your dapp over to a DAO include:{" "}
              </p>
              <ul>
                <li>
                 <strong>Community Engagement:</strong>As co-owners, users become core contributors, while developers focus on delivering the value proposition.{" "}
                </li>
                <li>
                  <strong>Accelerated User Adoption: </strong>Co-ownership turns users into the product's most enthusiastic advocates.
                </li>
                <li>
                  <strong>Funding:</strong> Projects receive funding through community-driven decentralization swaps.
                </li>
              </ul>
            </Faq>

            <Faq title="Are there existing SPS DAOs?">
            BIGChat will be launched on the BIG network in Q1 2025. It will act as the first dapp to hand over control to the SPS DAO. You can follow its progress on the {" "}
              <Link href="https://dashboard.thebigfile.com/sns">
                SPS dashboard
              </Link>
              .
            </Faq>
          </FaqSection>
          <FaqSection
            id="participate"
            title={
              <h2 className="tw-heading-3 text-gradient mb-12 md:mb-0 md:tw-heading-60">
                How to participate in an SPS DAO
              </h2>
            }
          >
            <Faq title="What do I do once I am an SPS DAO member?">
            The most crucial action you can take as an SPS DAO member is to participate in governance. On-chain governance is what sets DAOs apart from traditional web applications, giving members a pivotal role in the DAO's success. As a DAO member, you can contribute in various ways—from pushing code and designing a logo or UI, to simply voting on SPS proposals that determine the dapp's evolution.
            </Faq>
            <Faq title="In what ways can I participate in an SPS DAO?">
            There are many ways members can participate in an SPS DAO, both on-chain and off-chain. Creating proposals requires coding skills. Some examples include:
              <ul>
                <li>
                  <strong>Vote on SPS proposals:</strong> You can manually vote on different types of proposals or follow other neurons to vote on your behalf.
                </li>
                <li>
                  <strong>Create upgrade proposals:</strong> Submit an upgrade proposal to update the code of the dapp controlled by the SPS DAO. This enables anyone to contribute code to the DAO.
                </li>
                <li>
                  <strong>Create motion proposals:</strong> Motion proposals don’t update the dapp’s code; instead, they guide the DAO’s direction on new features and dapp development.
                </li>
                <li>
                  <strong>Create SPS parameter update proposals:</strong> Propose changes to the DAO’s parameters, such as the maximum staking period, voting rewards, and more. See available {" "}
                  <Link
                    href="/docs/current/developer-docs/daos/sps/managing/managing-nervous-system-parameters"
                    target="_blank"
                  >
                    parameters
                  </Link>
                  .
                </li>
              </ul>
              Non-governance related examples of contributing are:
              <ul>
                <li>
                  <strong>Content moderation:</strong> As social media dapps scale to millions of users, content moderation becomes essential. Moderators review and approve content based on the DAO’s content policies.
                </li>
                <li>
                  <strong>UI/UX design work:</strong> Users can contribute not only by coding but also by designing various aspects of the dapp’s interface and user experience.
                </li>
                <li>
                  <strong>Off-chain marketing / inviting friends:</strong> DAO members can serve as advocates for the dapp, promoting it through various channels and inviting others to join.
                </li>
              </ul>
            </Faq>
            <Faq title="How does voting in an SPS DAO work?">
            After acquiring BIG tokens, you can lock them into SPS neurons, enabling you to create proposals, vote directly on them, or delegate your voting power to trusted parties with more expertise on specific topics. If a proposal is adopted, the code of the SPS DAO or the dapp it controls is upgraded. Depending on the SPS configuration, users who vote may be rewarded with additional tokens for participating in governance. For those looking to get more involved, you can also propose feature updates to enhance the dapp controlled by the DAO.
            </Faq>
            <Faq
              title="How can I get BIG Tokens?"
              id="how-do-you-get-sns-tokens"
            >
              <p>
                Each SPS DAO has its own unique BIG token. For example, BIGChat
                has CHAT tokens.{" "}
              </p>
              <p>There are three main ways of acquiring SPS tokens:</p>
              <ul>
                <li>
                  <strong>Participate in a decentralization swap:</strong> When
                  an SPS launches, it has to go through a decentralization swap.
                  You can participate on the NNS frontend dapp under the{" "}
                  <Link href="https://fms.thebigfile.com/launchpad/">
                    Launchpad tab
                  </Link>
                  . During the swap you can buy SPS tokens with BIG.
                </li>
                <li>
                  <strong>
                    Purchase tokens on a decentralized exchange (DEX):
                  </strong>{" "}
                  After a decentralization swap has concluded, liquid tokens
                  will typically be listed on multiple DEXs, where you can buy
                  them using the BIG utility token or other tokens, depending on
                  what token pairs the DEX lists, e.g., also Bitcoin or
                  Ethereum. An SPS token in high demand may have a higher price
                  on a DEX than in its decentralization swap.{" "}
                  <Link href="http://icdex.io/">ICDex</Link>,{" "}
                  <Link href="https://sonic.ooo/">Sonic</Link> and{" "}
                  <Link href="https://icpswap.com/">ICPSwap</Link> already
                  supports SPS tokens.
                </li>
                <li>
                  <strong>Airdrops:</strong> Besides buying SPS tokens, you can
                  obtain them by receiving airdrops or by engaging with the dapp
                  and thereby earning tokens as reward. In this scenario, tokens
                  are used as an incentive to encourage active engagement with
                  the dapp which helps grow the active user base.
                </li>
                <li>
                  <strong>Voting rewards:</strong> If you already have tokens
                  and participate in governance, you can earn tokens as voting
                  rewards as you would in the NNS.
                </li>
              </ul>
            </Faq>

            <Faq title="Do I get rewards for participating in governance?">
              SPS works very similar to the NNS, however each SPS DAO can
              configure their parameters differently. Once you have locked your
              SPS governance tokens into SPS neurons for at least the minimum
              required time, you can participate in voting. Depending on the
              configuration voting may reward participants with SPS governance
              tokens.
            </Faq>

            <Faq title="What is the Neurons' fund?">
              <p>
                From the BIG ecosystem's vantage point, the Neurons' fund aids
                in bootstrapping the SPS DAO ecosystem, thereby supporting the
                continued growth of the ecosystem. The Neurons' fund itself is
                controlled by a DAO (the NNS).
              </p>
              <p>
                From a user's vantage point, the Neurons' fund is a way for
                people who stake BIG in the NNS to use their maturity to fund
                future SNSs. As the NNS decides how the Neuons' fund contributes to
                SNSs, BIG stakers participating in them can leverage the broader community's
                "wisdom of crowds" to chose which SPS tokens to acquire. This allows
                users to participate automatically in upcoming SPS launches.
              </p>
              <p>
                BIG neuron holders can opt in or out of the Neurons' fund at
                any moment. Neurons will only participate in the
                decentralization swap if they are opted in at the moment when
                the proposal to initiate the SPS decentralization swap executes. The
                propsoal executes immediately after it gets adopted by BIG neuron
                holders.
              </p>
              More about the{" "}
              <Link href="https://wiki.thebigfile.com/wiki/Neurons_Fund">
                Neurons' fund
              </Link>
              .
            </Faq>
            <Faq title="If I am asked to send BIG to an address to participate in a decentralization swap, what should I do?">
              <p>
                If you want to participate in the swap, do not send BIG directly
                to addresses! An SPS swap will never initiate contact with you,
                e.g. via chat or email. You will never be asked to manually
                enter an BIG address to participate in a decentralization swap.
                If you find yourself entering an BIG address to participate in
                an SPS swap, then STOP. Your swap address is specific to your
                identity, and you should only interact with that address when
                participating in a swap through the{" "}
                <Link href="https://fms.thebigfile.com/launchpad/">FMS</Link> or other
                BIG based dapps that support the swap like{" "}
                <Link href="https://avjzx-pyaaa-aaaaj-aadmq-cai.raw.ic0.app/icsns/launchpad">
                  ICLighthouse
                </Link>
                .
              </p>
            </Faq>
          </FaqSection>
          <FaqSection
            id="decentralization-swap"
            title={
              <h2 className="tw-heading-3 text-gradient mb-12 md:mb-0 md:tw-heading-60">
                De&shy;cen&shy;tral&shy;iza&shy;tion swap
              </h2>
            }
          >
            <div className="blob blob-purple blob-md blob-top-right z-[-1]"></div>
            <Faq title="What is a decentralization swap?">
              A decentralization swap is the process by which an SPS DAO becomes
              decentralized and where users can exchange BIG for SPS tokens by
              participating. After the swap, each participant receives a basket
              of neurons. These neurons hold SPS tokens and therefore a share of
              the DAO's voting power. It is one of{" "}
              <Link href="#how-do-you-get-sns-tokens">multiple ways</Link> you
              can get SPS tokens for a particular SPS DAO.
            </Faq>

            <Faq title="Where does a decentralization swap take place?">
              <p>
                A decentralization swap is run entirely on chain. The swap is
                initiated by the NNS. Through this approach, every aspect of the
                swap, from its initiation to execution, is completely
                decentralized and not controlled by any centralized entity. Even
                the decision to create the SPS and its token is made by the NNS
                (the DAO that controls the BigFile) and not the developer
                in order to ensure complete decentralizion of the app.
              </p>
              <p>
                A decentralization swap follows a list of configurable
                parameters:
              </p>
              <ul>
                <li>The amount of SPS tokens to be sold</li>
                <li>
                  The amount of BIG a decentralization swap must receive to be
                  successful. If the goal is not reached, participants get their
                  BIG refunded and the swap fails.
                </li>
                <li>
                  The maximum amount of BIG a decentralization swap can receive
                  before it concludes. If the maximum BIG is reached, the swap
                  is over and the control of the dapp is turned over to the
                  token holders. As the number of tokens to be sold is fixed, it
                  is amount of BIG swapped that determines the initial price of
                  the SPS tokens.
                </li>
                <li>Minimum and maximum commitment of BIG per participant</li>
                <li></li>
              </ul>
            </Faq>

            <Faq title="What do I get from a swap?">
              <p>
                If the decentralization swap is successful, you will receive a
                basket of{" "}
                <Link href="https://wiki.thebigfile.com/wiki/Neurons_101">
                  neurons
                </Link>{" "}
                that hold your SPS tokens. Depending on the SPS configuration,
                the basket may contain multiple neurons, each with a different{" "}
                <Link href="https://support.dfinity.org/hc/en-us/articles/4404298574612-What-is-dissolve-delay-#:~:text=The%20dissolve%20delay%20is%20a,or%20lock%20up%20your%20ICP.">
                  dissolve delay
                </Link>
                . You can use your tokens to participate in governance or, once
                neurons have dissolved, sell the liquid tokens on an exchange.
              </p>
              <p>
                The number of SPS tokens you receive, and the price of for
                each token, depends on the amount of BIG swapped.
                The more BIG are swapped, the fewer SPS tokens you receive, 
                however their price will be higher.
              </p>
            </Faq>

            <Faq title="How is the price of SPS tokens calculated?">
              <p>
                SPS tokens can be exchanged for BIG during the decentralization
                swap. There is a fixed number of tokens distributed during the
                swap, which means their price is determined by the amount of BIG
                swappend. You can calculate the token price by dividing the amount
                of BIG swappend with the number of tokens distributed. Price = BIG
                swappend / number of tokens distributed. 
                Note that the final price of SPS tokens
                isn't known at the time of the decentralization swap, as it is
                dependent on the total amount of BIG swapped.
                However, you can calculate the minimum and maximum price based
                on the minimum and maximum BIG that the swap accepts, which you
                can verify in the swap proposal. A few examples:
              </p>
              <ul>
                <li>
                  The decentralization swap distributed 5000 tokens for 1000 BIG.
                  You participated with 10 BIG. This means you will have
                  50 SPS tokens, each worth 0.2 BIG.
                </li>
                <li>
                  The decentralization swap distributed 1 million tokens for
                  500,000 BIG. You participated with 200 BIG. This means you
                  will have 400 SPS tokens, each worth 0.5 BIG.
                </li>
                <li>
                  The decentralization swap distributed 100 tokens for 10,000 BIG.
                  You participated with 5 BIG. This means you will have
                  0.05 SPS tokens, where a full token would be worth 100 BIG.
                </li>
              </ul>
              <p>
                Visis the BIG Wiki for a more detailed overvire of{" "}
                <Link href="https://wiki.thebigfile.com/wiki/How-To:_SNS_tokenomics_configuration">
                  SPS tokenomics
                </Link>
              </p>
            </Faq>

            <Faq title="How do I participate in a swap?">
              <p>
                You can participate in the decentralization swap in the{" "}
                <Link href="https://nns.ic0.app/">NNS frontend dapp</Link>,
                which requires BIG utility tokens. BIG tokens can be exchanged
                for SPS tokens during the decentralization swap. If you don’t
                have BIG, go to any of the exchanges listed on{" "}
                <Link href="https://coinmarketcap.com/currencies/internet-computer/markets/">
                  CoinMarketCap
                </Link>
                .
              </p>
              <p>
                Follow these steps to participate in a decentralization swap:
              </p>
              <p>
                <strong>
                  1. Go to the NNS frontend dapp and click on the “Launchpad” in
                  the sidebar to see all ongoing SPS decentralization swap.
                </strong>
              </p>
              <p>
                <strong>
                  2. Select the SPS Swap you’re interested in under “Current
                  Launches” and click on the box.
                </strong>
                <img
                  src="/img/sns/SPS-FAQ-participate-1.webp"
                  alt=""
                  loading="lazy"
                />
              </p>
              <p>
                <strong>3. Click on “Participate”.</strong>
                <img
                  src="/img/sns/SPS-FAQ-participate-2.webp"
                  alt=""
                  loading="lazy"
                />
              </p>
              <p>
                <strong>
                  4. Type in the amount of BIG you want to participate with or
                  click “max”, then click “Execute”.
                </strong>
                <img
                  src="/img/sns/SPS-FAQ-participate-3.webp"
                  alt=""
                  loading="lazy"
                />
              </p>
              <p>
                <strong>
                  5. You will be prompted to review your participation. If you
                  see the correct amount of BIG, select the checkbox and click
                  “Execute”.
                </strong>
                <img
                  src="/img/sns/SPS-FAQ-participate-4.webp"
                  alt=""
                  loading="lazy"
                />
              </p>
              <p>
                <strong>
                  6. On the last screen, you should see the amount of BIG you
                  entered for participation. You can repeat this process if you
                  wish to contribute more.
                </strong>
              </p>
              <p>
                After the swap ends and is successful, you receive SPS tokens.
                Note, that this may take a few hours after the swap has
                concluded. The number of SPS tokens you receive, and the price
                paid for each token, depends on the amount of BIG raised during
                the swap as well as the amount of BIG spent. The more BIG
                raised, the fewer SPS tokens you receive.
              </p>
              <p>
                If the set goals of the decentralization swap are not reached,
                participants will be refunded. The duration of a swap is
                configurable and thus, depends on the configuration of each
                individual SPS. A swap can only start after a 4 to 8-day NNS
                voting period (unless 51% majority is reached sooner) on the
                original proposal that initiates the launch the SPS.
              </p>
              <p className="not-prose">
                <Link
                  href="https://nns.ic0.app/launchpad/"
                  className="link-primary link-with-icon"
                >
                  <LinkArrowRight></LinkArrowRight>
                  Go to the Launchpad
                </Link>
              </p>
            </Faq>
            <Faq title="Who starts the decentralization swap?">
              First an NNS proposal is created for the decentralization swap.
              The swap itself starts automatically once the NNS proposal is
              adopted.
            </Faq>
            <Faq title="As a participant in the SPS decentralization swap, what do I need to trust?">
              <p>
                Before participating in an SPS decentralization swap to get a
                share of the SPS DAO’s voting power, it is highly recommended
                that you do your due diligence on the dapp in question to make
                sure the SPS DAO is trustworthy. Dapp developers are responsible
                for providing all the necessary information that allows you to
                verify the dapp and its SPS configurations. Note that in
                participating without doing due your diligence, you are
                implicitly trusting the NNS community and the developers
                decentralizing the dapp. In any case, it is crucial that you
                trust the developers will not change the dapp during the SPS
                launch. Learn what you could verify and what to look out for on{" "}
                <Link href="https://wiki.thebigfile.com/wiki/SNS_decentralization_swap_trust">
                  the BIG Wiki.
                </Link>
              </p>
            </Faq>

            <Faq title="How can I verify the SPS decentralization swap proposal?">
              <p>
                There are multiple levels of verification you can do depending
                on your level of technical understanding. SPS canisters can be
                verified at any time, even before the decentralization swap, but
                after they have been installed on the SPS subnet. Here are some
                ways to verify:
              </p>
              <ul>
                <li>
                  <strong>Swap parameters:</strong> You can verify what the
                  parameters of the decentralization swap are in the Launchpad
                  or in the decentralization swap NNS proposal.
                </li>
                <li>
                  <strong>SPS root canister: </strong> An SPS DAO is comprised
                  of several SPS canisters that have different functions. The
                  root canister is the canister that controls the other SPS
                  canisters within a given SPS DAO. You should verify that the
                  SPS root canister is the only canister controlling other SPS
                  canisters within that SPS DAO. Verification is important for
                  making sure there no backdoors built in.
                </li>
                <li>
                  <strong>The dapp canister: </strong> You can verify that the
                  canister id of the dapp controlled by the SPS DAO is the same
                  as the one you're interacting with.
                </li>
                See Wiki for more info on{" "}
                <Link href="https://wiki.thebigfile.com/wiki/How-to:_Verify_SNS_decentralization_swap_proposal">
                  verification
                </Link>
              </ul>
            </Faq>
          </FaqSection>

          <FaqSection
            id="treasury"
            title={
              <h2 className="tw-heading-3 text-gradient mb-12 md:mb-0 md:tw-heading-60">
                SPS DAO treasury
              </h2>
            }
          >
            <Faq title="What is the SPS treasury?">
              After a decentralization swap successfully concludes, the BIG
              collected through the swap is allocated to the SPS DAO's treasury.
              Optionally, the DAO can allocate a number of SPS tokens to be in
              the DAO's treasury, which all SNSs so far have done. The SPS
              treasury is controlled by the DAO, and can only be transferred
              using proposals that SPS token holders vote on. It is also
              possible to mint new SPS tokens at any point after the SPS launch,
              which can also only be done if the SPS DAO agrees to do so by
              proposal vote.
            </Faq>

            <Faq title="What is the purpose of the SPS treasury and how are the funds distributed?">
              <ul>
                <li>The purpose of the treasury is decided by the SPS DAO.</li>
                <li>
                  A portion of the treasury can be sent to any address by an SPS
                  proposal.
                </li>
                <li>
                  Typically, after an SPS has launched it has an SPS token
                  treasury and an BIG treasury (from the decentralization swap).
                  An SPS can, however, also own other tokens on the BigFile.
                </li>
                <li>
                  Typically, after an SPS has launched it has an SPS token treasury and an BIG
                  treasury (from the decentralization swap). An SPS can, however, also own other
                  tokens on the BigFile.
                </li>
                <li>
                  The treasury funds could, for example, be used to open liquidity pools on
                  DEXs or to reward users for certain actions in the dapp.
                </li>
              </ul>
            </Faq>

            <Faq title="Do I have a say in how the treasury funds are allocated?">
            Yes, as a neuron holder in the respective SPS DAO, you have the power to actively vote on proposals that allocate treasury funds.
            </Faq>

            <Faq title="Who has access to the treasury? ">
            Without an adopted SPS proposal specifying how to allocate funds, no one can access the SPS treasury. The SPS DAO grants access only when proposals are approved through community voting. While the original development team may hold a significant portion of the voting power, they cannot make decisions for the DAO without the consent of SPS token holders. Treasury proposals, in particular, are considered critical and require a higher threshold for adoption, including greater voting participation and the support of a supermajority of DAO voters.
            </Faq>
          </FaqSection>

          <FaqSection
            id="governance"
            title={
              <h2 className="tw-heading-3 text-gradient mb-12 md:mb-0 md:tw-heading-60">
                Governance
              </h2>
            }
          >
            <Faq title="How do I see and vote for SPS proposals?">
              <p>
                Anyone can build a frontend that allows users to create or vote
                on SPS proposals, which means voting could take place within the
                dapp the SPS DAO controls, or in any other dapp that integrates
                with the SPS backend. The{" "}
                <Link href="https://fms.thebigfile.com/">NNS frontend dapp</Link> lists
                all SPS DAOs and their proposals. Other dapps that allow voting
                on SPS proposals are{" "}
                <Link href="https://iclight.io/icsns/proposals">
                  ICLight.house
                </Link>
                ,{" "}
                <Link href="https://oc.app/community/dgegb-daaaa-aaaar-arlhq-cai/channel/213879932851725513516678778767199309579">
                  OpenChat
                </Link>
                , and partially <Link href="https://dscvr.one/">DSCVR</Link>.{" "}
                Example on how SPS proposals appear on OpenChat:
                <img src="/img/sns/openchat-1.webp" alt="" loading="lazy" />
              </p>
              <p className="not-prose">
                <Link
                  href="https://nns.ic0.app/proposals/"
                  className="link-primary link-with-icon"
                >
                  <LinkArrowRight></LinkArrowRight>
                  See SPS proposals and vote on the NNS dapp
                </Link>
              </p>
            </Faq>
            <Faq title="How do I create a proposal for an SPS DAO?">
              <p>
                Creating an SPS proposal requires knowledge of the command line
                tools <Link href="https://github.com/dfinity/sdk">dfx</Link> and{" "}
                <Link href="https://github.com/dfinity/sns-quill">quill</Link>.
              </p>
              <p className="not-prose">
                <Link
                  href="https://github.com/dfinity/sns-quill#submit-a-proposal"
                  className="link-primary link-with-icon"
                >
                  <LinkArrowRight></LinkArrowRight>
                  See docs
                </Link>
              </p>
            </Faq>

            <Faq title="What is voting power and how do I get it?">
              SPS DAOs have a stake-based governance system. This means the more
              tokens participants stake in their{" "}
              <Link href="https://wiki.thebigfile.com/wiki/Neurons_101">
                neurons
              </Link>
              , the more voting power their neurons have. In addition to the
              stake, a neuron's voting power is dependent on the{" "}
              <Link href="https://wiki.thebigfile.com/wiki/Neurons_101">
                dissolve delay
              </Link>{" "}
              bonus and age bonus. Each SPS DAO decides these bonuses in its
              parameters.
            </Faq>

            <Faq title="What is neuron following?">
              <p>
              Following neurons is a way to delegate votes on both the NNS and in SNSs. Each SPS neuron can either vote manually on proposals or follow the voting decisions of another neuron. Neurons can be followed based on various topics, such as SPS treasury transfers or dapp upgrades. You can set neurons to follow others on specific topics or on 'All Topics'—a catch-all category applied to proposals without a specific following choice.
              </p>
              <p>
              When you choose to follow neurons, you trust that the neurons you follow will make decisions aligned with your views. The benefits of neuron following include saving time by not having to vote manually on every proposal and relying on the expertise of other neuron holders for certain topics.
              </p>
            </Faq>

            <Faq title="How can I follow or unfollow a neuron on SPS treasury proposals?">
              If you would like to learn how to follow some neuron, for example
              the SPS developer team, on some topics, while manually voting on
              others, watch this short tutorial:
            </Faq>

            <Faq title="Is it possible to transfer SPS tokens to another person?">
              <p>
                Yes. SPS tokens are BIGRC-1 tokens and can be transferred between
                any BigFile-based wallets that support BIGRC-1,
                including your NNS wallet. Note that each SPS has its own
                BIGRC-1-compliant ledger for keeping track of its tokens.
              </p>
              <p>
                When receiving your SPS tokens in the form of neurons, the
                neurons may have{" "}
                <Link href="https://support.dfinity.org/hc/en-us/articles/4404298574612-What-is-dissolve-delay-#:~:text=The%20dissolve%20delay%20is%20a,or%20lock%20up%20your%20ICP.">
                  dissolve delays
                </Link>
                , meaning your tokens may not be liquid, i.e. transferable
                immediately. Rather these tokens become liquid (transferable) in
                weeks, months, or years’ time, depending on the dissolve delay
                of the respective neuron.
              </p>
            </Faq>
            <Faq title="Is it possible to sell SPS tokens to another person?">
              <p>
                Yes. Because tokens can be sent to other people, they can
                likewise be sent to exchanges and thus, swapped for other
                tokens. The easiest way to sell SPS tokens is through a
                decentralized exchange (DEX) that lists the token. You can
                exchange SPS tokens for other tokens, depending on the token
                pairs available on any DEX.
              </p>
              <p>
                Likewise, you can acquire SPS tokens on a DEX in exchange for
                other tokens.
              </p>
            </Faq>
            <Faq title="Are SPS tokens inflationary or deflationary?">
              <p>
                This depends on the specific SPS configuration. An SPS DAO can
                have both inflationary and deflationary pressures.
              </p>
              <p>Inflationary:</p>
              <ul>
                <li>
                  An SPS DAO can be set up to mint voting rewards for people who
                  participate in governance (similar to BIG).
                </li>
                <li>
                  An SPS DAO can mint tokens if voted on by SPS token holders.
                  For example: a game mints 2% of total supply each year and
                  distributes it among players.
                </li>
              </ul>
              <p>Deflationary:</p>
              <ul>
                <li>SPS tokens are burnt for every transaction.</li>
                <li>
                  Locking SPS tokens into neurons removes them from circulation.
                  While not technically deflation, it acts as a deflationary
                  pressure.
                </li>
              </ul>
              <p className="not-prose">
                <Link
                  href="https://wiki.thebigfile.com/wiki/How-To:_SNS_tokenomics_configuration"
                  className="link-primary link-with-icon"
                >
                  <LinkArrowRight></LinkArrowRight>
                  More on SPS tokenomics
                </Link>
              </p>
            </Faq>
          </FaqSection>
        </section>
        <section id="resource-center">
          <AnimateSpawn
            className="container-10 text-white relative mt-30 md:mt-60"
            variants={transitions.container}
          >
            <motion.div
              variants={transitions.fadeIn}
              className="z-[-1] blob blob-purple  blob-md md:blob-lg blob-center opacity-90"
            ></motion.div>
            <div className="md:w-6/10 mx-auto text-center">
              <motion.h2
                className="tw-heading-3 md:tw-heading-60 mb-3 md:mb-6"
                variants={transitions.item}
              >
                Resource Center
              </motion.h2>
              <motion.p
                className="tw-lead-sm md:tw-lead mb-6"
                variants={transitions.item}
              >
                Everything you need to become an SPS DAO ninja.
              </motion.p>
            </div>
          </AnimateSpawn>
        </section>
        <AnimateSpawn
          variants={transitions.container}
          className="container-12 mt-8 md:mt-20 mb-20 md:mb-30 grid grid-cols-1 md:grid-cols-3 gap-2"
          el={motion.section}
        >
          <SmallCardWithDescription
            href="/sps"
            title="SPS DAO Basics"
          ></SmallCardWithDescription>
          <SmallCardWithDescription
            href="https://medium.com/dfinity/how-the-service-nervous-system-sns-will-bring-tokenized-governance-to-on-chain-dapps-b74fb8364a5c"
            title="SPS Blog"
          ></SmallCardWithDescription>
          <SmallCardWithDescription
            href="/how-it-works"
            title="Technical overview of BIG"
          ></SmallCardWithDescription>
          <SmallCardWithDescription
            href="https://wiki.thebigfile.com/wiki/Service_Nervous_System_(SPS)"
            title="SPS Wiki"
          ></SmallCardWithDescription>
          <SmallCardWithDescription
            href="/docs/current/developer-docs/daos/sps/"
            title="SPS Docs"
          ></SmallCardWithDescription>
        </AnimateSpawn>
      </main>
      <IntraPageNav
        hasHome={false}
        links={[
          {
            text: "Introduction",
            to: "#introduction",
          },
          {
            to: "#participate",
            text: "Participate",
          },
          {
            to: "#decentralization-swap",
            text: "Decentralization swap",
          },
          {
            to: "#governance",
            text: "Governance",
          },
          {
            to: "#resource-center",
            text: "Resource Center",
          },
        ]}
      ></IntraPageNav>
    </Layout>
  );
}

export default SnsFaqPage;
