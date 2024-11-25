import Link from "@docusaurus/Link";
import DarkHeroStyles from "@site/src/components/Common/DarkHeroStyles";
import transitions from "@site/static/transitions.json";
import Layout from "@theme/Layout";
import { motion } from "framer-motion";
import React, { useRef } from "react";
import AnimateSpawn from "../components/Common/AnimateSpawn";
import { CardWithDescription } from "../components/Common/Card";
import LinkArrowRight from "../components/Common/Icons/LinkArrowRight";
import ShareMeta from "../components/Common/ShareMeta";
import TranslatedLayout from "../components/Common/TranslatedLayout/TranslatedLayout";
import { useDarkHeaderInHero } from "../utils/use-dark-header-in-hero";
import LinkArrowUpRight from "../components/Common/Icons/LinkArrowUpRight";

function WhatIsBigPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const isDark = useDarkHeaderInHero(heroRef);

  return (
    <Layout
      title="What is BigFile"
      description={`The BigFile adds autonomous serverless cloud functionality to the public Internet - making it possible to build almost any system or service entirely on a decentralized network using “canister software,” an evolution of smart contracts.`}
      editPath={`https://github.com/thebigfilecom/thebigfile-com-dev/edit/main/${__filename}`}
    >
      <ShareMeta image="/img/shareImages/share-what-is-the-big.jpg"></ShareMeta>

      <main
        className="text-black relative overflow-hidden"
        style={{
          marginTop: `calc(var(--ifm-navbar-height) * -1)`,
        }}
      >
        {isDark && <DarkHeroStyles bgColor="transparent"></DarkHeroStyles>}

        <section className=" bg-infinite text-white pt-20" ref={heroRef}>
          <AnimateSpawn
            className="container-10 pt-20 pb-14 md:pb-24 md:pt-36 relative"
            variants={transitions.container}
          >
            <div className="blob blob-white blob-md blob-x-4 blob-y-8 md:blob-xl md:blob-x-8 md:blob-y-10 opacity-100"></div>
            <div
              className="
              -mt-30 md:-mt-24
              w-[700px] sm:w-[900px] md:w-[1600px]
              absolute
              -left-16 sm:left-auto
              bottom-0
              translate-y-2/3 md:translate-y-[55%]

              sm:right-0
              sm:translate-x-3/10
            "
            >
              <img
                src="/img/what-is-the-big-file/hero.svg"
                alt=""
                className="w-full max-w-none"
              />
            </div>
            <div className="sm:w-8/10 md:w-6/10 relative">
              <motion.h1
                className="tw-heading-3 md:tw-heading-2 mb-8 md:mb-6"
                variants={transitions.item}
              >
                What is the
                <br className="hidden md:block" /> BigFile
              </motion.h1>
              <motion.p
                className="pb-[15%] sm:pb-0 tw-lead-sm md:tw-lead mb-0"
                variants={transitions.item}
              >
                BigFile (BIG) is an open and secure AI-powered blockchain network capable of hosting programs, files, data, and Big Data in the form of smart contracts. It securely performs computations on smart contracts and offers infinite scalability.
              </motion.p>
            </div>
          </AnimateSpawn>
        </section>

        <AnimateSpawn
          className="container-8 mt-80 md:mt-[540px] relative"
          el={motion.section}
          variants={transitions.container}
        >
          <div className="">
            <motion.h2
              className="tw-heading-5 sm:tw-heading-4 md:tw-heading-3 mb-8 md:mb-10 text-gradient"
              variants={transitions.item}
            >
              Web3 services and enterprise systems can be built directly on BigFile—a public, decentralized network that scales.
              <br />
              Host social networks, media streaming platforms, and more that support Web3 functionality, are tamperproof, and can trustlessly interact with the outside world.
            </motion.h2>

            <motion.p
              className="mb-0 flex flex-col items-start gap-6 md:gap-8"
              variants={transitions.item}
            >
              <Link className="button-primary text-center" href="/capabilities">
                BigFile capabilities
              </Link>
              <Link
                className="link-primary link-with-icon"
                href="https://wiki.thebigfile.com/wiki/History"
              >
                <span>
                  <span className="hidden sm:inline">Wiki history </span>
                  <span className="sm:hidden">History </span>
                  of the BigFile
                </span>
                <LinkArrowUpRight />
              </Link>
            </motion.p>
          </div>
        </AnimateSpawn>

        <section
          className="mt-20 md:mt-48
          bg-[linear-gradient(180deg,transparent_0%,transparent_97%,#3b00b9_97%,#3b00b9_100%)]
          sm:bg-[linear-gradient(180deg,transparent_0%,transparent_87%,#3b00b9_87%,#3b00b9_100%)]
          md:bg-[linear-gradient(180deg,transparent_0%,transparent_77%,#3b00b9_77%,#3b00b9_100%)]
          relative "
        >
          <div className="blob blob-white blob-sm md:blob-xl blob-x-7 blob-y-8"></div>

          <div className="container-12">
            <AnimateSpawn
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-5"
              variants={transitions.container}
            >
              <motion.div
                className="flex flex-col text-center backdrop-blur-2xl rounded-xl border border-white border-solid bg-white/90 p-12"
                variants={transitions.item}
              >
                <img
                  src="/img/what-is-the-big-file/icon-tamperproof.svg"
                  alt=""
                  className="h-24"
                />
                <h3 className="tw-lead my-3 md:tw-title-sm">Tamperproof</h3>
                <p className="tw-paragraph-sm text-black/60 md:tw-paragraph mb-0">
                Cube software is tamperproof, does not require firewall protection, and cannot be infected with ransomware. Because BigFile is built on advanced mathematics, it has no backdoors.
                </p>
              </motion.div>
              <motion.div
                className="flex flex-col text-center backdrop-blur-2xl rounded-xl border border-white border-solid bg-white/90 p-12"
                variants={transitions.item}
              >
                <img
                  src="/img/what-is-the-big-file/icon-autonomous.svg"
                  alt=""
                  className="h-24"
                />
                <h3 className="tw-lead my-3 md:tw-title-sm">Autonomous</h3>
                <p className="tw-paragraph-sm text-black/60  mb-0">
                A Cube can be made unmodifiable, establishing permanent logic on the network, or placed under the control of autonomous governance—empowering communities to run Web3 applications or securing an enterprise.
                </p>
              </motion.div>
              <motion.div
                className="flex flex-col text-center backdrop-blur-2xl rounded-xl border border-white border-solid bg-white/90 p-12"
                variants={transitions.item}
              >
                <img
                  src="/img/what-is-the-big-file/icon-simple.svg"
                  alt=""
                  className="h-24"
                />
                <h3 className="tw-lead my-3 md:tw-title-sm">Simple</h3>
                <p className="tw-paragraph-sm text-black/60  mb-0">
                Global spending on IT personnel now exceeds $1.8 trillion. Cube software significantly simplifies the development and maintenance of online systems and services, leading to cost savings and faster time to market.
                </p>
              </motion.div>
              <motion.div
                className="flex flex-col text-center backdrop-blur-2xl rounded-xl border border-white border-solid bg-white/90 p-12"
                variants={transitions.item}
              >
                <img
                  src="/img/what-is-the-big-file/icon-sovereign.svg"
                  alt=""
                  className="h-24"
                />
                <h3 className="tw-lead my-3 md:tw-title-sm">Sovereign</h3>
                <p className="tw-paragraph-sm text-black/60  mb-0">
                If your enterprise, government, or Web3 service relies on centralized traditional IT, there are kill switches and backdoors that compromise your true sovereignty. Instead, build on a decentralized network.
                </p>
              </motion.div>
              <motion.div
                className="flex flex-col text-center backdrop-blur-2xl rounded-xl border border-white border-solid bg-white/90 p-12"
                variants={transitions.item}
              >
                <img
                  src="/img/what-is-the-big-file/icon-web3-ois.svg"
                  alt=""
                  className="h-24"
                />
                <h3 className="tw-lead my-3 md:tw-title-sm">Web3 + BIG</h3>
                <p className="tw-paragraph-sm text-black/60  mb-0">
                Smart contracts support more advanced tokenization models, driving the evolution of Web3. 
                </p>
              </motion.div>
              <motion.div
                className="flex flex-col text-center backdrop-blur-2xl rounded-xl border border-white border-solid bg-white/90 p-12"
                variants={transitions.item}
              >
                <img
                  src="/img/what-is-the-big-file/icon-next-gen-ai.svg"
                  alt=""
                  className="h-24"
                />
                <h3 className="tw-lead my-3 md:tw-title-sm">ErisAI</h3>
                <p className="tw-paragraph-sm text-black/60  mb-0">
                BigFile is currently adding support for Web3 and Web2 "AI Models." AI will run on the network, supporting native Web3 integrations, smart contract creation processes, bureaucratic operations, and trustless combinations of models and data.
                </p>
              </motion.div>
            </AnimateSpawn>
          </div>
        </section>

        <section className="bg-infinite text-white pt-20 md:pt-44">
          <div className="container-10 md:w-6/10 md:mx-auto">
            <motion.h2
              className="tw-heading-3 md:tw-heading-60 text-center mb-0"
              variants={transitions.item}
            >
              How is the BigFile created through a specific protocol?
            </motion.h2>
          </div>
          <div className=" container-12 flex flex-col gap-16 md:gap-40 relative pt-20">
            <TranslatedLayout imageUrl="/img/what-is-the-big-file/node-providers.webp">
              <h2 className="tw-heading-4 md:tw-heading-3 md:mb-6">
                Node providers
              </h2>

              <p className="tw-lead-sm">
              Standardized hardware devices called node machines are operated by independent parties known as node providers, who are located in various data centers, geographies, and jurisdictions around the world. These node providers run their hardware to earn tokenized rewards, similar to how independent ISPs and backbone providers operate routing devices to earn peering fees.
              </p>
              <p>
                <Link
                  href="/node-providers"
                  className="link-white link-with-icon"
                >
                  <LinkArrowRight />
                  Sovereign hardware network
                </Link>
              </p>
            </TranslatedLayout>
            <TranslatedLayout
              imageUrl="/img/what-is-the-big-file/subnet-blockchains.webp"
              reverse={true}
            >
              <h2 className="tw-heading-4 md:tw-heading-3 md:mb-6">
                Subnet blockchains
              </h2>
              <p className="tw-lead-sm">
              The BigFile combines node machines into highly efficient subnet blockchains, which enhance the capacity for hosting tamperproof smart contracts. BigFile also features a permissionless automated governance system called the Network Nervous System, which directs nodes to join or leave subnets.
              </p>
              <p>
                <Link
                  href="/how-it-works#Architecture"
                  className="link-white link-with-icon"
                >
                  <LinkArrowRight />
                  BigFile architecture
                </Link>
              </p>
            </TranslatedLayout>
            <TranslatedLayout imageUrl="/img/what-is-the-big-file/smart-contracts.webp">
              <h2 className="tw-heading-4 md:tw-heading-3 md:mb-6">
                Cube smart contracts
              </h2>
              <p className="tw-lead-sm">
              Smart contracts are a new form of software that runs on blockchain networks. They are tamperproof, unstoppable, optionally autonomous, can process tokens, and are easily composable. Cubes are a high-performance form of smart contracts that can be used to build almost anything. They interact with HTTP to deliver user experiences, can integrate with Web2, and can natively interact with external blockchains. Because they scale, a social network or complex enterprise system can run directly from the network, simplifying development and paving the way for a future without firewalls and trust. They offer a compelling alternative to building on centralized traditional IT.
              </p>
              <p>
                <Link
                  href="https://forum.thebigfile.com/t/webassembly-on-the-bigfile/24"
                  className="link-white link-with-icon"
                >
                  <LinkArrowUpRight />
                  WebAssembly smart contracts
                </Link>
              </p>
            </TranslatedLayout>
          </div>
        </section>
        <AnimateSpawn
          className="pt-30 md:pt-40 bg-[linear-gradient(180deg,#3b00b9_0%,#3b00b9_75%,transparent_75%,transparent_100%)] text-white relative"
          el={motion.section}
          variants={transitions.container}
        >
          <div className="blob blob-lg md:blob-xl blob-white md:blob-white-dense blob-x-5 blob-y-8 z-0 md:opacity-60"></div>
          
          
        </AnimateSpawn>
        <section className="container-12 pt-10 md:pt-16 pb-30 md:pb-20 relative">
          <div className="text-center mb-16 md:mb-20">
            <AnimateSpawn
              className="container-12"
              variants={transitions.container}
            >
              
            </AnimateSpawn>
          </div>

          <div className="flex flex-col gap-16 md:gap-40">
            <TranslatedLayout imageUrl="/img/what-is-the-big-file/big-wallet.webp">
              <h3 className="tw-heading-4 md:tw-heading-60 mb-6">
                BIG ID
              </h3>
              <p className="tw-paragraph md:tw-lead-sm mb-6 md:mb-10">
              BIG ID allows users to quickly and securely authenticate to online systems and services using their devices, such as a laptop fingerprint sensor or FaceID on their phone. Behind the scenes, the framework leverages TPM chips within modern hardware to securely manage keys and signing, the WebAuthn protocol to connect code inside the web browser to these TPMs, and advanced chain-key cryptography running on the BIG network.
              </p>
              <Link
                className="link-primary link-with-icon"
                href="/big-id"
              >
                <LinkArrowRight /> Wallet on BIG
              </Link>
            </TranslatedLayout>
            <TranslatedLayout
              imageUrl="/img/what-is-the-big-file/open-internet-services.webp"
              reverse={true}
            >
              <h3 className="tw-heading-4 md:tw-heading-60 mb-6">
                Decentralized Services and Voting System
              </h3>
              <p className="tw-paragraph md:tw-lead-sm mb-6 md:mb-10">
              Decentralized Services and Voting Systems are services that operate autonomously under the exclusive control of a decentralized governance system called a Service Nervous System (SPS), an evolution of DAO technology. This enables a Web3 service to be transparently managed by a community of thousands, allowing services to "founderize" users by granting them governance tokens, for example, for creating viral content, thereby inverting the traditional Big Tech model. Enterprises can leverage the same technology to distribute control over system updates and configurations, significantly enhancing security.
              </p>
              <Link className="link-primary link-with-icon" href="/sps">
                <LinkArrowRight /> User-run Web3
              </Link>
            </TranslatedLayout>
            <TranslatedLayout imageUrl="/img/what-is-the-big-file/sovereign-infrastructure.webp">
              <h3 className="tw-heading-4 md:tw-heading-60 mb-6">
                Sovereign infrastructure
              </h3>
              <p className="tw-paragraph md:tw-lead-sm mb-6 md:mb-10">
              When the systems and services that power society are built on centralized traditional IT infrastructure—such as cloud services, closed-source software, and security hardware—they inherently include backdoors for spying and kill switches. With no alternatives, governments have been forced to surrender sovereignty over the digital foundations that society relies on. Now, BigFile is introducing specialized localized sovereign subnets designed for governments, NGOs, and enterprises with unique needs: an unstoppable, secure, and transparent sovereign platform infrastructure.
              </p>
              <Link
                className="link-primary link-with-icon"
                href="/node-providers"
              >
                <LinkArrowRight /> IT beyond cloud
              </Link>
            </TranslatedLayout>

            <TranslatedLayout
              imageUrl="/img/what-is-the-big-file/reverse-gas-model.webp"
              reverse={true}
            >
              <h3 className="tw-heading-4 md:tw-heading-60 mb-6">
                Reverse gas model
              </h3>
              <p className="tw-paragraph md:tw-lead-sm mb-6 md:mb-10">
              Unlike most EVM-compatible blockchains, BigFile uses a reverse gas model. This allows end users to interact with smart contracts without needing to set up a wallet or hold tokens—a standard web browser is all they need. Developers charge their smart contracts with "cycles," the gas on BigFile, which are then burned to pay for computation and memory usage. This model simplifies user entry into Web3 and gives developers the flexibility to create custom tokenomics models that align with mass adoption strategies.
              </p>
              <Link
                className="link-primary link-with-icon"
                href="/capabilities/reverse-gas"
              >
                <LinkArrowRight /> Gas-free Web3
              </Link>
            </TranslatedLayout>

            <TranslatedLayout imageUrl="/img/what-is-the-big-file/multi-chain.webp">
              <h3 className="tw-heading-4 md:tw-heading-60 mb-6">
                Native multi-chain
              </h3>
              <p className="tw-paragraph md:tw-lead-sm mb-6 md:mb-10">
              Cube smart contracts on the BigFile are the glue between the world’s most important blockchains. BigFile Bitcoin Network, and native ETH integration is underway. Inter-chain communication and innovations such as chain-key ECDSA allow Cube smart contracts to directly hold, receive and send BTC and ETH seamlessly across chains, creating a trustless multi-chain environment that allows end users to transfer crypto assets at the speed of a chat message without bridges or third-party intermediaries.
              </p>
              <p className="mb-3">
                <Link
                  className="link-primary link-with-icon"
                  href="/bitcoin-integration"
                >
                  <LinkArrowRight /> Bitcoin
                </Link>
              </p>
              <p className="mb-3">
                <Link
                  className="link-primary link-with-icon"
                  href="/ethereum-integration"
                >
                  <LinkArrowRight /> Ethereum
                </Link>
              </p>
            </TranslatedLayout>
          </div>
        </section>

        <section className="max-w-page relative mx-auto mb-20 px-6 md:mb-40 md:px-15 mt-30">
          <AnimateSpawn
            className=" relative text-white"
            variants={transitions.container}
          >
            <motion.div
              className="blob blob-purple blob-sm blob-x-5 blob-y-7 z-[-1] md:blob-lg"
              variants={transitions.fadeIn}
            ></motion.div>
            <motion.h2
              className="tw-heading-3 text-center mb-2 w-full mx-auto md:tw-heading-60 md:mb-6 lg:w-6/12"
              variants={transitions.item}
            >
              Get familiar with the BigFile
            </motion.h2>
          </AnimateSpawn>

          <AnimateSpawn
            className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-8 md:mt-16"
            variants={transitions.container}
          >
            <CardWithDescription
              title="Tech insights"
              description=""
              href="/how-it-works"
            />

            <CardWithDescription
              title="BigFile community events"
              description=""
              href="https://thebigfile.com/community"
            />
            <CardWithDescription
              title="Developer docs"
              description=""
              href="/docs/current/home"
            />
            <CardWithDescription
              title="BigFile dapps"
              description=""
              href="/ecosystem"
            />
          </AnimateSpawn>
        </section>
      </main>
    </Layout>
  );
}

export default WhatIsBigPage;
