import Link from "@docusaurus/Link";
import DarkHeroStyles from "../components/Common/DarkHeroStyles";
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

        <section className="bg-black text-white pt-20" ref={heroRef}>
          <AnimateSpawn
            className="container-10 pt-10 pb-14 md:pb-24 md:pt-36 relative"
            variants={transitions.container}
          >
        
            <div className="sm:w-8/10 md:w-6/10 relative">
              <motion.h1
                className="tw-heading-3 md:tw-heading-2 mb-8 md:mb-6"
                variants={transitions.item}
              >
                The Foundation for a
                <br className="hidden md:block" /> Decentralized World
              </motion.h1>
              <motion.p
                className="pb-[15%] sm:pb-0 tw-lead-sm md:tw-lead mb-0"
                variants={transitions.item}
              >
                BigFile is more than a project; it's a paradigm shift. We are building the foundational DePIN (Decentralized Physical Infrastructure Network) layer for the next generation of the internet. Our mission is to solve two of the biggest bottlenecks in the digital world: the centralization of data storage and the prohibitive cost of computational power. We achieve this by uniting a global community of resource providers and creating a single, autonomous, and equitable ecosystem for data and intelligence.
              </motion.p>
            </div>
          </AnimateSpawn>
        </section>

        <AnimateSpawn
  className="container-8 mt-20 md:mt-[120px] relative"
  el={motion.section}
  variants={transitions.container}
>
          <div className="">
            <motion.h2
              className="tw-heading-5 sm:tw-heading-4 md:tw-heading-3 mb-8 md:mb-10 text-gradient"
              variants={transitions.item}
            >
              Forget temporary, centralized cloud services. BigFile provides a permanent, censorship-resistant storage layer for your most critical digital assets. By encrypting and distributing your files across a global network of independent providers, we eliminate single points of failure and give you true data sovereignty. It's the ideal solution for hosting dApps, archiving records, and securing your digital identity.
              <br />
              Artificial intelligence requires immense computational power, a resource currently controlled by a few tech giants. BigFile democratizes this by creating a global, on-demand marketplace for GPU power. Train complex AI models, perform intensive data analysis, or render graphics at a fraction of the cost, all powered by a community-driven, decentralized supercomputer.
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
                  src="/img/what-is-big-file/icon-tamperproof.svg"
                  alt=""
                  className="h-24"
                />
                <h3 className="tw-lead my-3 md:tw-title-sm">Data Sovereignty</h3>
                <p className="tw-paragraph-sm text-black/60 md:tw-paragraph mb-0">
                Your data should not be a hostage on corporate servers. With BigFile, you are the sole owner of your data.
                </p>
              </motion.div>
              <motion.div
                className="flex flex-col text-center backdrop-blur-2xl rounded-xl border border-white border-solid bg-white/90 p-12"
                variants={transitions.item}
              >
                <img
                  src="/img/what-is-big-file/icon-autonomous.svg"
                  alt=""
                  className="h-24"
                />
                <h3 className="tw-lead my-3 md:tw-title-sm">Mathematical Guarantee</h3>
                <p className="tw-paragraph-sm text-black/60  mb-0">
                Mathematically verify that providers are storing your data with ZK-proofs. Don't "hope," "know.
                </p>
              </motion.div>
              <motion.div
                className="flex flex-col text-center backdrop-blur-2xl rounded-xl border border-white border-solid bg-white/90 p-12"
                variants={transitions.item}
              >
                <img
                  src="/img/what-is-big-file/icon-simple.svg"
                  alt=""
                  className="h-24"
                />
                <h3 className="tw-lead my-3 md:tw-title-sm">Accessible AI</h3>
                <p className="tw-paragraph-sm text-black/60  mb-0">
                Train AI models using the power of a global GPU network. High costs are no longer a barrier to innovation. 
                </p>
              </motion.div>
              <motion.div
                className="flex flex-col text-center backdrop-blur-2xl rounded-xl border border-white border-solid bg-white/90 p-12"
                variants={transitions.item}
              >
                <img
                  src="/img/what-is-big-file/icon-sovereign.svg"
                  alt=""
                  className="h-24"
                />
                <h3 className="tw-lead my-3 md:tw-title-sm">Contribute & Earn</h3>
                <p className="tw-paragraph-sm text-black/60  mb-0">
                Become the backbone of the ecosystem by providing your idle disk space or GPU power and earn BIG tokens.
                </p>
              </motion.div>
              <motion.div
                className="flex flex-col text-center backdrop-blur-2xl rounded-xl border border-white border-solid bg-white/90 p-12"
                variants={transitions.item}
              >
                <img
                  src="/img/what-is-big-file/icon-web3-ois.svg"
                  alt=""
                  className="h-24"
                />
                <h3 className="tw-lead my-3 md:tw-title-sm">Censorship-Resistant Data</h3>
                <p className="tw-paragraph-sm text-black/60  mb-0">
                Because your data is globally distributed, it cannot be blocked or deleted by a single authority. True freedom of speech.
                </p>
              </motion.div>
              <motion.div
                className="flex flex-col text-center backdrop-blur-2xl rounded-xl border border-white border-solid bg-white/90 p-12"
                variants={transitions.item}
              >
                <img
                  src="/img/what-is-big-file/icon-next-gen-ai.svg"
                  alt=""
                  className="h-24"
                />
                <h3 className="tw-lead my-3 md:tw-title-sm">Interoperability</h3>
                <p className="tw-paragraph-sm text-black/60  mb-0">
                With the Polygon AggLayer vision, BigFile will serve as a foundational data layer for the entire Web3 ecosystem.
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
              Who is BigFile for?
            </motion.h2>
          </div>
          <div className=" container-12 flex flex-col gap-16 md:gap-40 relative pt-20">
            <TranslatedLayout imageUrl="/img/what-is-big-file/node-providers.webp">
              <h2 className="tw-heading-4 md:tw-heading-3 md:mb-6">
              For Developers & Innovators
              </h2>

              <p className="tw-lead-sm">
              Build censorship-resistant social media platforms, permanent NFT storage solutions, decentralized websites, or cost-effective AI applications. BigFile's L2 infrastructure and SDKs give you a solid foundation to build the dApp of your dreams.
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
              imageUrl="/img/what-is-big-file/subnet-blockchains.webp"
              reverse={true}
            >
              <h2 className="tw-heading-4 md:tw-heading-3 md:mb-6">
              For Providers & The Community
              </h2>
              <p className="tw-lead-sm">
              Put your hardware to work for you. Connect anything from the spare disk space on your home computer to idle GPUs in a data center. BigFile automatically matches these resources with demand, creating a passive income stream for you in BIG tokens.
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
            <TranslatedLayout imageUrl="/img/what-is-big-file/big-wallet.webp">
              <h3 className="tw-heading-4 md:tw-heading-60 mb-6">
              The Technology Powering BigFile
              </h3>
              <p className="tw-paragraph md:tw-lead-sm mb-6 md:mb-10">
              BIG ID is a platform enabling users to securely store and manage their data on the BigFile network. It offers the ability to permanently store files in a decentralized and reliable manner.
              </p>
              <Link
                className="link-primary link-with-icon"
                href="/big-id"
              >
                <LinkArrowRight /> Wallet on BIG
              </Link>
            </TranslatedLayout>
            <TranslatedLayout imageUrl="/img/what-is-big-file/sovereign-infrastructure.webp">
              <h3 className="tw-heading-4 md:tw-heading-60 mb-6">
              Built on Polygon CDK
              </h3>
              <p className="tw-paragraph md:tw-lead-sm mb-6 md:mb-10">
              BigFile's L2 chain is built on Polygon's most advanced technology, the Chain Development Kit (CDK). This offers us the security and speed of ZK-Rollups and full integration with the massive Polygon ecosystem.
              </p>
              <Link
                className="link-primary link-with-icon"
                href="/node-providers"
              >
                <LinkArrowRight /> IT beyond cloud
              </Link>
            </TranslatedLayout>

            <TranslatedLayout imageUrl="/img/what-is-big-file/multi-chain.webp">
              <h3 className="tw-heading-4 md:tw-heading-60 mb-6">
              The AggLayer Vision
              </h3>
              <p className="tw-paragraph md:tw-lead-sm mb-6 md:mb-10">
              Our future is built on interoperability. Thanks to Polygon's AggLayer, the BigFile Chain will communicate seamlessly with other L2s, creating a unified liquidity and data market, thus solving Web3's isolated islands problem.
              </p>
              <p className="mb-3">
                <Link
                  className="link-primary link-with-icon"
                  href="/file-storage"
                >
                  <LinkArrowRight /> File Storage
                </Link>
              </p>
              <p className="mb-3">
                <Link
                  className="link-primary link-with-icon"
                  href="/decentralized-ai"
                >
                  <LinkArrowRight /> Decentralized AI
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
              Get with the BigFile
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
              title="BigFile community"
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
