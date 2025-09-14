import Link from "@docusaurus/Link";
import RightPointer from "@site/static/img/svgIcons/rightPointer.svg";
import transitions from "@site/static/transitions.json";
import Layout from "@theme/Layout";
import clsx from "clsx";
import { motion } from "framer-motion";
import React from "react";
import AnimateSpawn from "../components/Common/AnimateSpawn";
import ShareMeta from "../components/Common/ShareMeta/ShareMeta";

const SplitCard: React.FC<{
  children: React.ReactNode;
  className?: string;
  imageSideClassName?: string;
  contentSideClassName?: string;
  image: React.ReactNode;
  imageSide: "left" | "right";
}> = ({
  className,
  children,
  image,
  imageSide,
  imageSideClassName,
  contentSideClassName,
}) => {
  return (
    <AnimateSpawn
      className={clsx(
        "bg-white-50 rounded-xl overflow-hidden flex flex-col md:flex-row items-start",
        imageSide === "right"
          ? "flex-row"
          : "flex-col-reverse md:flex-row-reverse",
        className
      )}
      variants={transitions.container}
    >
      <div
        className={clsx(
          "flex-[4] p-6 md:p-16",
          imageSide === "right" ? "md:pr-0" : "md:pl-0",
          contentSideClassName
        )}
      >
        {children}
      </div>
      <motion.div
        className={clsx("flex-[6] self-center text-[0px]", imageSideClassName)}
        variants={transitions.fadeIn}
      >
        {image}
      </motion.div>
    </AnimateSpawn>
  );
};

const SingleCard: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = "bg-white-50" }) => {
  return (
    <AnimateSpawn
      className={clsx("rounded-xl overflow-hidden p-6 md:p-16", className)}
      variants={transitions.container}
    >
      {children}
    </AnimateSpawn>
  );
};

interface CardData {
  title: string;
  description: string;
  image: string;
  href: string | null;
  refText: string | null;
  imageSide: "right" | "left";
}

const SmallCard: React.FC<{
  children: React.ReactNode;
  className?: string;
  href: string;
}> = ({ children, className = "bg-white-50", href }) => {
  return (
    <AnimateSpawn variants={transitions.container}>
      <Link
        className={clsx(
          "rounded-xl overflow-hidden p-6 md:p-8 hover:no-underline hover:text-black translate-y-0 hover:-translate-y-3 transition-transform text-black h-full block",
          className
        )}
        href={href}
      >
        {children}
      </Link>
    </AnimateSpawn>
  );
};

const cardsData: CardData[] = [
  {
    title: "Sovereign Storage for a New Era",
    description:
      "BigFile offers the ultimate solution for secure and permanent file storage. Your data is encrypted, sharded, and distributed across a global network of independent providers who are rewarded in BIG tokens. This architecture provides unparalleled resilience against censorship and data loss, making it the perfect long-term home for everything from personal files to critical business data and dApp assets.",
    image: "/img/features/serve-web.webp",
    href: null,
    refText: null,
    imageSide: "right",
  },
  {
    title: "The On-Demand AI & Compute Marketplace",
    description:
      "BigFile unlocks the world's latent computational power. Our DePIN marketplace connects a global network of GPU providers with developers and researchers, offering high-performance computing at a fraction of the cost of centralized services. Train your AI models, render complex graphics, or run scientific simulations on a scalable, community-powered supercomputer.",
    image: "/img/features/no-oracles-image.webp",
    href: "/",
    refText: null,
    imageSide: "left",
  },
  {
    title: "Unstoppable Websites & dApps",
    description:
      "Host your entire application, from frontend to backend, on BigFile's resilient, decentralized infrastructure. Say goodbye to de-platforming, server downtime, and exorbitant hosting fees. Whether it's a DAO governance portal, a DeFi application, or a censorship-resistant blog, BigFile provides the permanent foundation for a truly decentralized web.",
    image: "/img/features/seo-image.webp",
    href: "https://forum.thebigfile.com/t/sites-and-apps-management-in-bigfile-blockchain-network/42",
    refText: "Learn to Host on BigFile",
    imageSide: "right",
  },
  {
    title: "The brain of the BigFile",
    description:
      "The BigFile is governed by a fully on-chain, permissionless system that regularly upgrades the protocol according to the intentions of BIG token holders, as expressed through their votes.",
    image: "/img/features/nns-image.webp",
    href: "/",
    refText: "Participate in BigFile governance",
    imageSide: "right",
  },
  {
    title: "Turn any Web3 service into a DAO",
    description:
      "The BigFile allows developers to turn their dapps into a DAO to achieve full decentralization — 100% on-chain",
    image: "/img/features/sns-image.webp",
    href: "/",
    refText: "Overview of BigFile DAOs",
    imageSide: "left",
  },
];



const smallCardsData = [
  {
    title: "L2 ZK-Rollup Architecture",
    description:
      "BigFile operates as a dedicated Layer 2 appchain, built with the Polygon CDK. We leverage the power of ZK-Rollups to bundle thousands of transactions into a single proof, which is then secured by the Ethereum mainnet. This gives us the best of both worlds: extreme scalability and low fees of an L2, with the ultimate security of Ethereum.",
    href: "/how-it-works#Chain-key-technology",
  },
  {
    title: "The DePIN Economic Engine",
    description: `Our protocol is powered by a Decentralized Physical Infrastructure Network (DePIN). We incentivize a global, permissionless network of providers to contribute disk space and GPU power. This creates a two-sided marketplace where community-owned resources replace expensive, centralized data centers, fostering a more equitable and efficient digital economy.`,
    href: "",
  },
  {
    title: "Verifiable Off-Chain Compute",
    description: `How do you trust an anonymous node to run your AI model correctly? You don't have to. BigFile uses the power of ZK-proofs to allow compute providers to mathematically prove they executed a specific task correctly. This principle of verifiable computation is the core of our trustless AI marketplace.`,
    href: "",
  },
  {
    title: "Upgradeable Governance w/Timelock",
    description: `BigFile is built for the future. Our smart contracts use the UUPS proxy pattern, allowing them to be securely upgraded. All administrative powers are held by a standard OpenZeppelin TimelockController, meaning any critical change is subject to a public time delay, ensuring full transparency and community oversight.`,
    href: "",
  },
  {
    title: "Autonomous Tokenomics",
    description: `The BIG token contract is a self-sustaining economic engine. A 2% transaction tax automatically funds a perpetual liquidity pool (Auto-Liquidity) and distributes passive income to holders in the form of USDC (USDC Reflection). This system is designed to reward long-term holders and ensure market stability without manual intervention.`,
    href: "/decentralized-ai",
  },
  {
    title: "Advanced MEV & Oracle Protection",
    description: `The protocol's treasury is actively protected from on-chain manipulation. Our automated DEX swaps are shielded from sandwich attacks by integrating an external Price Oracle and enforcing dynamic, strict slippage controls. This ensures that funds generated from taxes are used with maximum efficiency for the benefit of the ecosystem.`,
    href: "/capabilities/sustainability",
  },
];

function FeaturesPage() {
  return (
    <Layout
      title="BigFile capabilities"
      description="The BigFile is 'alien tech' crypto. It extends the
    internet by smashing through historical limitations, unlocking new capabilities
    for Web3 and the world..."
      editPath={`https://github.com/thebigfilecom/thebigfile-com-dev/edit/main/${__filename}`}
    >
      <ShareMeta image="/img/shareImages/share-features.jpg"></ShareMeta>

      <main className="text-black relative overflow-hidden">
        <AnimateSpawn
          variants={transitions.container}
          el={motion.section}
          className="overflow-hidden"
        >
          <div className="container-10 pt-12 mb-40 md:mb-60 md:pt-30 relative">
            <div className="md:w-7/10 lg:w-6/10">
              <motion.h1
                className="tw-heading-3 md:tw-heading-2 mb-6"
                variants={transitions.item}
              >
                BigFile capabilities
              </motion.h1>
              <motion.p
                className="tw-lead-sm md:tw-lead mb-0"
                variants={transitions.item}
              >
                BigFile is a DePIN (Decentralized Physical Infrastructure Network) architected to be the foundational cloud infrastructure for a decentralized future. We unite global idle disk space and GPU power to create a two-sided marketplace, offering permanent, verifiable data storage and an accessible hub for on-demand AI computation.
              </motion.p>
            </div>
          </div>
        </AnimateSpawn>
        <AnimateSpawn
          className="container-10 text-white relative mb-32 md:mb-20"
          el={motion.section}
          variants={transitions.container}
        >
          <motion.div
            variants={transitions.fadeIn}
            className="
              z-[-1]
              blob
              blob-purple 
              blob-md md:blob-lg
              blob-center
            "
          ></motion.div>
          <div className="md:w-6/10 mx-auto text-center">
            <motion.h2
              className="tw-heading-3 md:tw-heading-60 mb-3 md:mb-6"
              variants={transitions.item}
            >
              Where Data Meets Intelligence
            </motion.h2>
            <motion.p
              className="tw-lead-sm md:tw-lead mb-0"
              variants={transitions.item}
            >
              We are pioneering the convergence of decentralized storage, high-performance computing, and verifiable AI. BigFile is not just storing data—it's creating an ecosystem where data can be securely stored, processed, and utilized in a trustless, community-owned environment.
            </motion.p>
          </div>
        </AnimateSpawn>
        <section className="container-12 grid md:grid-cols-2 gap-5">
          {cardsData.slice(0, 2).map((card, index) => (
            <SplitCard
              className="md:col-span-2"
              key={index}
              imageSide={card.imageSide}
              image={<img src={card.image} alt="" loading="lazy"></img>}
            >
              <motion.h3
                className="tw-heading-4 md:tw-heading-3 mb-4"
                variants={transitions.item}
              >
                {card.title}
              </motion.h3>
              <motion.p
                className="tw-paragraph md:tw-lead-sm mb-0 text-black-60 mb-6"
                variants={transitions.item}
              >
                {card.description}
              </motion.p>
              {card.refText && card.href && (
                <motion.p className="mb-0" variants={transitions.item}>
                  <Link
                    href={card.href}
                    className="tw-heading-6 flex gap-2 items-center"
                  >
                    <RightPointer className="w-6 h-6"></RightPointer>
                    {card.refText}
                  </Link>
                </motion.p>
              )}
            </SplitCard>
          ))}
          <SingleCard className="bg-gradient-100 from-[#0E031F] to-[#281447] text-white relative pb-52">
            <img
              src="/img/features/astronaut-image.webp"
              alt=""
              className="absolute w-[194px] bottom-0 right-20 z-0"
              loading="lazy"
            />
            <img
              src="/img/features/astronaut-bg.svg"
              alt=""
              className="absolute w-[512px] -bottom-1/2 -right-10 z-0"
            />
            <div className="relative">
              <motion.h3
                variants={transitions.item}
                className="tw-heading-4 md:tw-heading-3 mb-4 "
              >
                Become a Provider, Power the Network
              </motion.h3>
              <motion.p
                className="tw-paragraph md:tw-lead-sm  mb-6 text-white-80"
                variants={transitions.item}
              >
                You are the backbone of the new decentralized internet. By contributing your idle disk space or GPU power, you do more than just support the network—you become a part of it. Our protocol automatically matches your resources with user demand, allowing you to earn a passive income stream in BIG tokens. Participation is permissionless and setup is simple.
              </motion.p>
              <motion.p className="mb-0" variants={transitions.item}>
                <Link
                  href="/bigdrive"
                  className="tw-heading-6 flex gap-2 items-center text-white hover:text-white-60 hover:no-underline"
                >
                  <RightPointer className="w-6 h-6"></RightPointer>
                  Join as a Provider
                </Link>
              </motion.p>
            </div>
          </SingleCard>
          <SingleCard>
            <motion.h3
              variants={transitions.item}
              className="tw-heading-4 md:tw-heading-3 mb-4 "
            >
              Built on a Foundation of Proof
            </motion.h3>
            <motion.p
              className="tw-paragraph md:tw-lead-sm text-black-60 mb-12"
              variants={transitions.item}
            >
              Trust is earned through mathematical certainty. BigFile is a Layer 2 ZK-Rollup built with the Polygon CDK. This means every operation—from proving a file is stored to verifying an AI computation—is secured by cryptographic ZK-proofs and anchored to the security of Ethereum. We chose this technology to provide our users with unparalleled security, scalability, and transparency.
            </motion.p>

            
          </SingleCard>
          {cardsData.slice(2, 3).map((card, index) => (
            <SplitCard
              key={index}
              className="md:col-span-2"
              imageSide={card.imageSide}
              image={<img src={card.image} alt="" loading="lazy"></img>}
            >
              <motion.h3
                className="tw-heading-4 md:tw-heading-3 mb-4"
                variants={transitions.item}
              >
                {card.title}
              </motion.h3>
              <motion.p
                className="tw-paragraph md:tw-lead-sm mb-0 text-black-60 mb-6"
                variants={transitions.item}
              >
                {card.description}
              </motion.p>
              {card.refText && card.href && (
                <motion.p className="mb-0" variants={transitions.item}>
                  <Link
                    href={card.href}
                    className="tw-heading-6 flex gap-2 items-center"
                  >
                    <RightPointer className="w-6 h-6"></RightPointer>
                    {card.refText}
                  </Link>
                </motion.p>
              )}
            </SplitCard>
          ))}

          <SingleCard>
            <motion.h3
              variants={transitions.item}
              className="tw-heading-4 md:tw-heading-3 mb-4 "
            >
              Verifiable Data Economies
            </motion.h3>
            <motion.p
              className="tw-paragraph md:tw-lead-sm text-black-60 mb-0"
              variants={transitions.item}
            >
              BigFile enables a new paradigm of data-driven smart contracts. Build decentralized science (DeSci) platforms where research data is stored permanently and computations are verified by ZK-proofs. Create transparent supply chain solutions or verifiable credential systems. When data integrity is mathematically guaranteed, the possibilities are endless.
            </motion.p>
          </SingleCard>

          <SingleCard>
            <motion.h3
              variants={transitions.item}
              className="tw-heading-4 md:tw-heading-3 mb-4 "
            >
              The Future of Gaming & Digital Assets
            </motion.h3>
            <motion.p
              className="tw-paragraph md:tw-lead-sm text-black-60 mb-4"
              variants={transitions.item}
            >
              In the world of Web3 gaming and NFTs, permanence is everything. BigFile provides the foundational layer for truly ownable digital assets. Ensure your game's assets, digital art, or virtual worlds are stored forever, independent of any single server or company. Build immersive gaming experiences where in-game items are truly yours, permanently.
            </motion.p>

            <motion.p className="mb-0" variants={transitions.item}>
              <Link
                href="/nft"
                className="tw-heading-6 flex gap-2 items-center"
              >
                <RightPointer className="w-6 h-6"></RightPointer>
                More on Web3 Gaming
              </Link>
            </motion.p>
          </SingleCard>
        </section>


        
        <AnimateSpawn
          className="container-10 text-white relative mb-20 mt-44  md:mt-56"
          el={motion.section}
          variants={transitions.container}
        >
          <motion.div
            variants={transitions.fadeIn}
            className="
              z-[-1]
              blob
              blob-infinite 
              blob-lg
              blob-center
            "
          ></motion.div>
          <div className="md:w-6/10 mx-auto text-center">
            <motion.h2
              className="tw-heading-3 md:tw-heading-60 mb-3 md:mb-6"
              variants={transitions.item}
            >
              The Future of Verifiable Documents & Agreements
            </motion.h2>
            <motion.p
              className="tw-lead-sm md:tw-lead mb-0"
              variants={transitions.item}
            >
              Bureaucracy is fundamentally a problem of trust and data integrity. Traditional systems rely on slow, expensive, and fallible intermediaries to verify documents and agreements. BigFile replaces this outdated model with a decentralized foundation for truth. By leveraging our permanent storage network and ZK-Rollup technology, we provide a single, universal source of truth for critical records, accessible anywhere and verifiable by anyone.
            </motion.p>
          </div>
        </AnimateSpawn>

        <section className="container-12 grid md:grid-cols-2 gap-5">
          <SplitCard
            imageSide="right"
            imageSideClassName="text-center"
            image={
              <img
                src="/img/features/bureaucracy.webp"
                alt=""
                className="my-10 h-[150px] md:h-[280px] aspect-[708/420]"
                loading="lazy"
              ></img>
            }
            className="md:col-span-2 text-white bg-[url(/img/features/bitcoin-bg-mobile.webp)] md:bg-[url(/img/features/bitcoin-bg.webp)] bg-stretch md:bg-cover"
          >
            <motion.h3
              className="tw-heading-4 md:tw-heading-3 mb-4 "
              variants={transitions.item}
            >
              Trust, Mathematically Guaranteed
            </motion.h3>
            <motion.p
              className="tw-paragraph md:tw-lead-sm mb-6 "
              variants={transitions.item}
            >
              The BigFile protocol provides the tools to build a new generation of transparent and efficient bureaucratic systems.
              <br />
              <br />
              <b>Immutable Legal Contracts:</b> Execute and store legal agreements as smart contracts whose integrity is permanently secured on-chain.
              <br />
              <b>Verifiable Credentials:</b> Issue academic diplomas, professional certifications, or licenses as tamper-proof digital assets.
              <br />
              <b>Transparent Supply Chains:</b> Track goods and verify documentation at every step of the supply chain with undeniable, timestamped records. 
              <br />
              BigFile's technology ensures that the authenticity of any document or transaction can be proven with mathematical certainty, eliminating fraud and streamlining processes.
            </motion.p>
            <motion.p className="mb-0" variants={transitions.item}>
              <Link
                href="https://forum.thebigfile.com/t/streamlining-bureaucracy-with-bigfile/41"
                className="tw-heading-6 flex gap-2 items-center text-white hover:text-white-60 hover:no-underline"
              >
                <RightPointer className="w-6 h-6"></RightPointer>
                Explore Verifiable Solutions
              </Link>
            </motion.p>
          </SplitCard>
        </section>

        <AnimateSpawn
          className="container-10  relative mb-6 md:mb-10 mt-30 md:mt-40"
          el={motion.section}
          variants={transitions.container}
        >
          <motion.div
            variants={transitions.fadeIn}
            className="
              z-[-1]
              blob md:hidden
              blob-infinite 
              blob-sm
              blob-top-right
            "
          ></motion.div>
          <div className="md:w-5/10">
            <motion.h2
              className="tw-heading-3 md:tw-heading-60 mb-4 md:mb-8"
              variants={transitions.item}
            >
              Innovative Protocol Features
            </motion.h2>
            <motion.p
              className="tw-lead-sm md:tw-lead mb-0"
              variants={transitions.item}
            >
              BigFile is not built on a fork of legacy technology. Our protocol is engineered from the ground up using a modern, modular stack to deliver unparalleled security, scalability, and economic sustainability. Below are the core technical innovations that make the BigFile ecosystem possible.
            </motion.p>
          </div>
        </AnimateSpawn>
        <section className="container-12 grid sm:grid-cols-2 md:grid-cols-3 gap-5 relative">
          <motion.div
            variants={transitions.fadeIn}
            className="
              z-[-1]
              hidden md:block
              blob
              blob-infinite 
              blob-sm
              blob-top-right
            "
          ></motion.div>
          {smallCardsData.map((card, index) => (
            <SmallCard key={index} href={card.href}>
              <h3 className="tw-heading-6 md:tw-heading-5 mb-3">
                {card.title}
              </h3>
              <p className="tw-paragraph-sm md:tw-paragraph text-black-60 mb-0">
                {card.description}
              </p>
            </SmallCard>
          ))}
        </section>
        <AnimateSpawn
          className="container-10 text-white relative my-44 md:my-56"
          el={motion.section}
          variants={transitions.container}
        >
          <motion.div
            variants={transitions.fadeIn}
            className="
              z-[-1]
              blob
              blob-purple 
              blob-md md:blob-lg
              blob-center
            "
          ></motion.div>
          <div className="md:w-6/10 mx-auto text-center">
            <motion.h2
              className="tw-heading-3 md:tw-heading-60 mb-3 md:mb-6"
              variants={transitions.item}
            >
              Build the Unstoppable Apps of Tomorrow
            </motion.h2>
            <motion.p
              className="tw-lead-sm md:tw-lead mb-6"
              variants={transitions.item}
            >
              BigFile is more than just a protocol—it's a launchpad for innovation. Dive into our architecture to see how our Layer 2 ZK-Rollup, powered by Polygon CDK, provides the scalable and secure foundation for the next generation of DePIN and AI applications. Explore our open-source code, detailed technical documentation, and discover the tools you need to start building today.
            </motion.p>
            <motion.p
              className="tw-lead-sm md:tw-lead mb-0"
              variants={transitions.item}
            >
              <Link className="button-white" href="/how-it-works">
                How BigFile works
              </Link>
            </motion.p>
          </div>
        </AnimateSpawn>
      </main>
    </Layout>
  );
}

export default FeaturesPage;
