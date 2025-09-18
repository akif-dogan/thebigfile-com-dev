import Link from "@docusaurus/Link";
import DarkHeroStyles from "@site/src/components/Common/DarkHeroStyles";
import transitions from "@site/static/transitions.json";
import Layout from "@theme/Layout";
import { motion } from "framer-motion";
import React, { useRef } from "react";
import AnimateSpawn from "../components/Common/AnimateSpawn";
import LinkArrowRight from "../components/Common/Icons/LinkArrowRight";
import LinkArrowUpRight from "../components/Common/Icons/LinkArrowUpRight";
import LinkCardsSection from "../components/Common/LinkCardsSection";
import ShareMeta from "../components/Common/ShareMeta";
import { useFontsLoaded } from "@site/src/utils/use-fonts-loaded";
import VideoCard from "../components/Common/VideoCard/index";
// import youtubeData from "@site/.docusaurus/youtube/default/youtube.json";
import { NewsCard } from "../components/NewsPage/Cards";
import clsx from "clsx";
import CodeBlockString from "../theme/CodeBlock/Content/String";
import { useDarkHeaderInHero } from "../utils/use-dark-header-in-hero";

interface TrustCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: React.ReactNode;
  link?: string;
  linkText?: string;
}

const MotionLink = motion(Link);

const trustCards = [
  {
    imageSrc: "/img/decentralized-ai/trust-icon-1.svg",
    imageAlt: "Verifiable & Trustless icon",
    title: "Verifiable & Trustless",
    description:
      "We replace blind trust with mathematical certainty. Using ZK-Rollup technology, every critical operation, from a file being stored to an AI job being executed, is backed by a verifiable cryptographic proof. You don't need to trust providers; you only need to trust the math.",
  },
  {
    imageSrc: "/img/decentralized-ai/trust-icon-2.svg",
    imageAlt: "Extremely Scalable icon",
    title: "Extremely Scalable",
    description:
      "By operating as a dedicated Layer 2 on Polygon, BigFile offloads computation from the congested Ethereum mainnet. This allows our network to handle thousands of transactions per second at a fraction of the cost, enabling high-volume use cases that are impossible on a Layer 1.",
  },
  {
    imageSrc: "/img/decentralized-ai/trust-icon-3.svg",
    imageAlt: "Community-Owned DePIN icon",
    title: "Community-Owned DePIN",
    description:
      "BigFile is not owned by a corporation; it's powered by its users. Our DePIN (Decentralized Physical Infrastructure Network) model allows anyone, anywhere to contribute their idle hardware (disk space or GPUs) and become a foundational part of the network, earning rewards for their service.",
  },
  {
    imageSrc: "/img/decentralized-ai/trust-icon-4.svg",
    imageAlt: "Sustainable Tokenomics icon",
    title: "Sustainable Tokenomics",
    description:
      "The BIG token is designed for long-term health. A small transaction tax on large trades perpetually funds the protocol's liquidity pool (Auto-Liquidity) and distributes passive income in USDC to holders (USDC Reflection), creating a self-sustaining economic engine.",
  },
  {
    imageSrc: "/img/decentralized-ai/trust-icon-5.svg",
    imageAlt: "Interoperable by Design icon",
    title: "Interoperable by Design",
    description:
      "BigFile will not be an isolated island. By connecting to Polygon's Aggregation Layer (AggLayer), our network will seamlessly share liquidity and communicate with hundreds of other chains, positioning BigFile as a foundational data and compute layer for the entire Web3 ecosystem. ",
  },
];

const shortTermRoadmapItems = [
  "Faster deterministic floating-point operations",
  "Wasm SIMD (Single-instruction multiple data)",
  "Upgrade Wasm memory to 64-bit",
];

const longTermRoadmapItems = [
  "Explore API for deterministic AI computation on GPUs.",
  "Develop public specification for nodes with GPUs.",
  "Add subnets with the new nodes to BigFile.",
];

const TrustCard: React.FC<TrustCardProps> = ({
  imageSrc,
  imageAlt,
  title,
  description,
  link,
  linkText,
}) => (
  <div className="flex flex-col text-white">
    <img src={imageSrc} alt={imageAlt} className="w-3/10" />
    <div className="mt-6 tw-heading-5 md:tw-heading-4 font-bold leading-8">
      {title}
    </div>
    {link && linkText ? (
      <div className="mt-2 text-base leading-6 font-[450]">
        {description}
        <Link
          className="text-white underline hover:no-underline hover:text-white hover:opacity-80 duration-200 ease-in-out"
          to={link}
          target="_blank"
        >
          {linkText}
        </Link>{" "}
        in their smart contracts.
      </div>
    ) : (
      <div className="mt-2 text-base leading-6 font-[450]">{description}</div>
    )}
  </div>
);

const RoadMapList: React.FC<{ items: string[] }> = ({ items }) => {
  return (
    <ul className="list-none m-0 p-0">
      {items.map((item, index) => (
        <li key={index} className="flex items-center my-2">
          <img
            src={"/img/decentralized-ai/icon-check.svg"}
            alt=""
            className="h-6 w-6 mr-2 select-none"
          />
          {item}
        </li>
      ))}
    </ul>
  );
};

function AIPage() {
  const fontLoaded = useFontsLoaded();
  const heroRef = useRef<HTMLDivElement>(null);
  const isDark = useDarkHeaderInHero(heroRef);

  return (
    <Layout
      title="Decentralized AI on BigFile - Secure and Trustworthy AI Solutions"
      description="Explore how the BigFile leverages blockchain technology to offer decentralized AI solutions, ensuring model integrity, data confidentiality, and resilience against disruptions. Discover how AI smart contracts on BIG can transform trust and security in artificial intelligence."
    >
      <ShareMeta image="/img/shareImages/share-ai.jpg"></ShareMeta>

      <main
        className="text-black relative overflow-hidden"
        style={{
          marginTop: `calc(var(--ifm-navbar-height) * -1)`,
        }}
      >
        {isDark && <DarkHeroStyles bgColor="transparent"></DarkHeroStyles>}
        <section
          className="text-white pt-20 mb-[10vw] lg:mb-3"
          style={{
            background: "linear-gradient(54deg, #3B00B9 0%, #D38ED7 153.06%)",
          }}
          ref={heroRef}
        >
          <div className="container-10 pt-20 pb-12 sm:pb-40 md:pb-40 md:pt-36 relative z-10">
            <motion.h1
              className="tw-heading-3 md:tw-heading-2 mb-2 md:mb-6 md:w-8/10 "
              variants={transitions.item}
            >
              The Global Supercomputer <br /> Owned by Everyone.
            </motion.h1>
            <div className="relative  md:w-5/10">
              <motion.p
                className="tw-lead-sm md:tw-lead mb-8"
                variants={transitions.item}
              >
                BigFile liberates artificial intelligence from centralized data centers. We are building a global, on-demand marketplace for GPU power, making high-performance computing accessible, affordable, and verifiable for all.
              </motion.p>
              {/* <MotionLink
                className="button-white"
                href="/ai"
                target="_blank"
                rel="noopener noreferrer"
                variants={transitions.item}
              >
                EXPLORE AI ON BigFile
              </MotionLink> */}
            </div>
          </div>
          <div className="container-12 relative z-1 h-[200px] md:h-0 pointer-events-none">
            <div className="absolute w-10/12 sm:w-5/12 left-1/2 translate-y-1/2 -translate-x-[50%] bottom-1/2 md:left-0 md:absolute md:w-5/12 md:bottom-0 md:translate-x-[130%] md:translate-y-2/12">
              <img
                src="/img/decentralized-ai/aiheader.svg"
                alt="Start building on BigFile"
                className="w-full max-w-none"
                loading="lazy"
              />
            </div>
          </div>
        </section>
        
        <section className="container-12 relative mt-24 sm:mt-52 md:mt-40">
          <AnimateSpawn variants={transitions.container}>
            <aside className="container-10 md:mt-40 md:flex md:items-center !pl-0 !pr-0	">
              <div className=" w-[115%] -ml-6 md:-ml-0 md:w-2/3 relative mt-6 md:mt-64 md:mb-64">
                <div className="pointer-events-none md:absolute w-full right-0 md:right-20 md:top-1/2  md:-translate-y-1/2">
                  <motion.img
                    variants={transitions.fadeIn}
                    src="/img/decentralized-ai/trust-img-1.webp"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className=" md:w-1/3">
                <motion.h3
                  className="tw-heading-4 md:tw-heading-60 mb-6 md:mb-12"
                  variants={transitions.item}
                >
                  The Walled Gardens of AI
                </motion.h3>
                <motion.p className="text-2xl mb-0 ">
                Today, immense computational power is a privilege, locked away by a few tech giants. This creates critical bottlenecks:
                <br />
                <b>Prohibitive Costs:</b> Renting high-end GPUs is incredibly expensive, stifling innovation for startups and researchers.
                <br />
                <b>Limited Access:</b> Resources are scarce, leading to long waiting lists and geographic restrictions.
                <br />
                <b>Centralized Control:</b> A handful of corporations dictate the price, availability, and terms of use for the world's most critical resource.
                </motion.p>
              </div>
            </aside>
          </AnimateSpawn>
        </section>
        <section className="container-12  relative mt-24 mb-24 sm:mt-52 md:mt-40">
          <motion.h4 className="tw-heading-4 md:tw-heading-60 text-gradient text-left md:text-center my-12  md:mb-16 md:w-5/10 md:mx-auto">
          What is required to establish trust?
          </motion.h4>
          <AnimateSpawn
            className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-5"
            variants={transitions.container}
          >
            <motion.div
              className="flex flex-col text-center backdrop-blur-2xl rounded-xl border border-white border-solid bg-white/90 p-8"
              variants={transitions.item}
            >
              <img
                src="/img/decentralized-ai/icon-1.svg"
                alt=""
                className="h-24"
              />
              <h3 className="tw-lead my-3 md:tw-title-sm ">Verifiable Computation with ZK-Proofs</h3>
              <p className="tw-paragraph-sm text-black/60 md:tw-paragraph mb-0">
              How can you be sure your AI job was executed correctly and not manipulated? We replace blind trust with mathematical certainty. BigFile's ZK-Rollup architecture allows compute providers to generate a cryptographic proof (a ZK-proof) that a specific computation was performed correctly, without revealing the underlying data. This is "Proof of Computation," delivered.
              </p>
            </motion.div>
            <motion.div
              className="flex flex-col text-center backdrop-blur-2xl rounded-xl border border-white border-solid bg-white/90 p-8"
              variants={transitions.item}
            >
              <img
                src="/img/decentralized-ai/icon-2.svg"
                alt=""
                className="h-24"
              />
              <h3 className="tw-lead my-3 md:tw-title-sm">
              End-to-End Encryption & Privacy
              </h3>
              <p className="tw-paragraph-sm text-black/60  mb-0">
              Your data and AI models are yours alone. All data is encrypted on the client-side before it is sent to the BigFile network for storage or computation. Providers only interact with encrypted data fragments, meaning they have zero knowledge of the content. You are the sole holder of the keys.
              </p>
            </motion.div>
            <motion.div
              className="flex flex-col text-center backdrop-blur-2xl rounded-xl border border-white border-solid bg-white/90 p-8"
              variants={transitions.item}
            >
              <img
                src="/img/decentralized-ai/icon-3.svg"
                alt=""
                className="h-24"
              />
              <h3 className="tw-lead my-3 md:tw-title-sm">Unstoppable, Censorship-Resistant Infrastructure</h3>
              <p className="tw-paragraph-sm text-black/60  mb-0">
              Centralized servers can be shut down. BigFile cannot. Our DePIN (Decentralized Physical Infrastructure Network) is powered by thousands of independent nodes across the globe. This distributed architecture ensures there is no single point of failure, providing unparalleled resilience and guaranteeing that your data and applications remain available, always.
              </p>
            </motion.div>
          </AnimateSpawn>
        </section>

        <AnimateSpawn variants={transitions.container}>
          <section className="bg-infinite text-white pt-6 pb-20" ref={heroRef}>
            <article className="container-10 mt-12 md:mt-20">
              <h3 className="tw-heading-4 md:tw-heading-60  text-left md:text-center text-gradient-purple mb-0 md:w-5/10 md:mx-auto">
               A Permissionless Compute Marketplace
              </h3>
              <aside className="container-10 mt-12 md:mt-32 md:flex md:items-center !pl-0	!pr-0">
                <div className="md:w-1/3">
                  <motion.h3 className="tw-heading-5 md:tw-heading-4">
                   A Global Supercomputer, Owned by Everyone.
                  </motion.h3>
                  <motion.p className="text-2xl mb-0 ">
                    <motion.span className="font-bold">BigFile </motion.span>
                    liberates artificial intelligence from centralized data centers. We are building a global, on-demand marketplace for GPU power, making high-performance computing accessible, affordable, and verifiable for all. By connecting a permissionless network of providers with developers and researchers, we power the next generation of AI innovation, together.
                  </motion.p>
                </div>
                <div className="md:w-2/3 relative mt-6  md:mt-64 md:mb-64">
                  <div className="pointer-events-none md:absolute w-full  md:-right-24 md:top-1/2  md:-translate-y-1/2">
                    <motion.div
                      className="absolute blob blob-white blob-md md:blob-lg blob-x-8 md:blob-x-9 blob-y-15 -z-1"
                      variants={transitions.fadeIn}
                    ></motion.div>
                    <motion.img
                      variants={transitions.fadeIn}
                      src="/img/decentralized-ai/trust-img-2.webp"
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </aside>
              <aside className="mt-20 md:mt-40 grid grid-cols-1 md:grid-cols-3 gap-x-[4.5rem] gap-y-20">
                {trustCards.map((card, index) => (
                  <TrustCard key={index} {...card} />
                ))}
              </aside>
            </article>
          </section>
        </AnimateSpawn>


           




        <section className="container-10 mt-12 md:mt-44 md:mb-44">
          <AnimateSpawn
            className="mt-16 md:mt-24 mb-60 md:mb-24 relative"
            variants={transitions.container}
          >
            <motion.h4 className="tw-heading-4 md:tw-heading-60 text-gradient ">
            Building the Autonomous AI Cloud
            </motion.h4>
            <motion.p className="mt-6 mb-4 md:mb-6 md:w-[55%]">
            The launch of our on-demand compute marketplace is just the beginning. The future of BigFile is a fully autonomous, community-governed ecosystem for artificial intelligence. Our roadmap includes:
            <br />
            <b>Verifiable AI Models:</b> Implementing advanced ZK-proofs to not only verify computation but also the integrity of the specific AI model being used.
            <br />
<b>Protocol-Governed Model Libraries:</b> Creating a decentralized library where developers can submit their own open-source AI models for others to use, with revenue-sharing managed by the protocol.
            <br />
<b>Seamless Interoperability:</b> Leveraging the Polygon AggLayer to allow smart contracts on any chain to natively call and utilize the AI compute power of the BigFile network.
<br />
<b>Full DAO Governance:</b> Progressively transitioning all control of the AI marketplace parameters and treasury to the BigFile DAO.
            </motion.p>
            <motion.div className="">
              <motion.p className="tw-lead-sm mb-2 my-2 font-bold">
                Detailed roadmap coming soon.
              </motion.p>
            </motion.div>
            {/* <motion.div>
              <motion.p className="tw-lead-sm mb-2 my-2">Short-term</motion.p>
              <RoadMapList items={shortTermRoadmapItems} />
            </motion.div>
            <motion.div>
              <motion.p className="tw-lead-sm mb-2 mt-4">Long-term</motion.p>
              <RoadMapList items={longTermRoadmapItems} />
            </motion.div> */}
            <div
              className=" w-[120%] sm:w-7/10 md:w-[85%]
              absolute
              bottom-0
              
              translate-y-[110%] translate-x-[-10%] md:translate-y-[45%] md:translate-x-[55%]
              sm:translate-y-[80%] sm:translate-x-[20%]
              select-none 
            "
            >
              <img
                src="/img/what-is-the-bigfile/hero.svg"
                alt=""
                className="w-full max-w-none"
              />
            </div>
          </AnimateSpawn>
        </section>

        <LinkCardsSection
          className="mb-20 md:mb-30 mt-30 md:mt-40"
          title="Explore AI on BigFile"
          cards={[
            {
              label: "Read the Technical Docs",
              href: "https://thebigfile.com/docs",
            },
            {
              label: "Discover Use Cases",
              href: "/docs/current/developer-docs/ai/overview",
            },
            {
              label: "Rent On-Demand GPU Power",
              href: "/",
            },
            {
              label: "Become a Compute Provider",
              href: "https://forum.thebigfile.com/",
            },
          ]}
        />
      </main>
    </Layout>
  );
}

export default AIPage;
