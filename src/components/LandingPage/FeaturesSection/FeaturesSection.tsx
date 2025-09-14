import React from "react";
import AnimateSpawn from "../../Common/AnimateSpawn";
import transitions from "@site/static/transitions.json";

import { motion } from "framer-motion";
import Link from "@docusaurus/Link";
import LinkArrowDown from "../../Common/Icons/LinkArrowDown";
import LinkArrowUpRight from "../../Common/Icons/LinkArrowUpRight";
import LinkArrowRight from "../../Common/Icons/LinkArrowRight";

const FeaturesSection = () => {
  return (
    <section className="bg-[radial-gradient(circle_at_center,#13013F_0%,#000000_100%)] text-white pt-30 md:pt-56" id="technology">
      <div className="mb-12 md:mb-30 container-10">
        <h2 className="tw-heading-3 md:tw-title-lg mb-0 md:w-8/10">
          Amazing, you made it this far. Discover more{" "}
          <span className="text-gradient-purple md:tw-heading-60">
            BigFile key features:
          </span>
        </h2>
      </div>

      <AnimateSpawn
        className="container-12 mt-6 md:mt-12 grid grid-cols-1 md:grid-cols-3 gap-5"
        el={motion.section}
        variants={transitions.container}
      >
        <motion.div
          className="flex-1 bg-white rounded-xl text-black p-12 flex flex-col gap-3 md:gap-4 text-center items-center justify-between"
          variants={transitions.item}
        >
          <img
            src="/img/what-is-bigfile/icon-sovereign.svg"
            alt=""
            loading="lazy"
            className="w-30"
          />
          <h3 className="tw-lead md:tw-title-sm mb-0">Democratized AI Compute</h3>
          <p className="mb-0 tw-paragraph-sm text-black/60">
          Access a global supercomputer powered by a distributed network of GPUs. Train AI models, run complex simulations, and render graphics affordably and on-demand.
          </p>
          <p className="mb-0 -mx-3">
            <Link className="link-primary " href="/decentralized-ai">
              <LinkArrowRight />
              Explore AI Marketplace
            </Link>
          </p>
        </motion.div>
        <motion.div
          className="flex-1 bg-white rounded-xl text-black p-12 flex flex-col gap-3 md:gap-4 text-center items-center justify-between"
          variants={transitions.item}
        >
          <img
            src="/img/what-is-bigfile/icon-web3-ois.svg"
            alt=""
            loading="lazy"
            className="w-30"
          />
          <h3 className="tw-lead md:tw-title-sm mb-0">Permanent & Verifiable Storage</h3>
          <p className="mb-0 tw-paragraph-sm text-black/60">
          Go beyond temporary cloud storage. BigFile is architected for permanence, making it ideal for hosting dApps, archiving critical data, and preserving digital heritage. ZK-proofs mathematically guarantee that your data is stored correctly.
          </p>
          <p className="mb-0  -mx-3">
            <Link className="link-primary" href="/capabilities">
              <LinkArrowRight />
              Learn About Our Technology
            </Link>
          </p>
        </motion.div>
        <motion.div
          className="flex-1 bg-white rounded-xl text-black p-12 flex flex-col gap-3 md:gap-4 text-center items-center justify-between"
          variants={transitions.item}
        >
          <img
            src="/img/what-is-bigfile/icon-next-gen-ai.svg"
            alt=""
            loading="lazy"
            className="w-30"
          />
          <h3 className="tw-lead md:tw-title-sm mb-0">Your Data, Your Sovereignty</h3>
          <p className="mb-0 tw-paragraph-sm text-black/60">
          Your files are encrypted, split into fragments, and distributed across a global network of nodes. Only you hold the keys. This provides unparalleled resilience against censorship, single points of failure, and data breaches.
          </p>
          <p className="mb-0 -mx-3 flex flex-col gap-3 items-center">
            <Link className="link-primary" href="/file-storage">
              <LinkArrowRight />
              How We Secure Data
            </Link>
            <Link className="link-primary" href="/ecosystem">
              <LinkArrowRight />
              BigFile Ecosystem
            </Link>
          </p>
        </motion.div>
        <motion.div
          className="flex-1 bg-white rounded-xl text-black p-12 flex flex-col gap-3 md:gap-4 text-center items-center justify-between"
          variants={transitions.item}
        >
          <img
            src="/img/what-is-bigfile/icon-tamperproof.svg"
            alt=""
            loading="lazy"
            className="w-30"
          />
          <h3 className="tw-lead md:tw-title-sm mb-0">An Interoperable Data Hub</h3>
          <p className="mb-0 tw-paragraph-sm text-black/60">
          BigFile is not an isolated island. Built on Polygon and designed for the AggLayer, our network will serve as a foundational data layer for the entire Web3 ecosystem. Smart contracts on other chains can reliably query and access data stored on BigFile.
          </p>
          <p className="mb-0 -mx-3">
            <Link
              className="link-primary"
              href="/how-it-works"
            >
              <LinkArrowRight />
              Discover the Ecosystem
            </Link>
          </p>
        </motion.div>
        <motion.div
          className="flex-1 bg-white rounded-xl text-black p-12 flex flex-col gap-3 md:gap-4 text-center items-center justify-between"
          variants={transitions.item}
        >
          <img
            src="/img/what-is-bigfile/icon-autonomous.svg"
            alt=""
            loading="lazy"
            className="w-30"
          />
          <h3 className="tw-lead md:tw-title-sm mb-0">Power the Network, Earn BIG</h3>
          <p className="mb-0 tw-paragraph-sm text-black/60">
          Become the backbone of the new decentralized internet. Our DePIN model invites you to contribute your idle disk space or GPU power. In return for your service, the protocol rewards you with BIG tokens, creating a sustainable, community-owned infrastructure.
          </p>
          <p className="mb-0">
            <Link className="link-primary" href="/ecosystem">
              <LinkArrowRight />
              Become a Provider
            </Link>
          </p>
        </motion.div>
        <motion.div
          className="flex-1 bg-white rounded-xl text-black p-12 flex flex-col gap-3 md:gap-4 text-center items-center justify-between"
          variants={transitions.item}
        >
          <img
            src="/img/what-is-bigfile/icon-simple.svg"
            alt=""
            loading="lazy"
            className="w-30"
          />
          <h3 className="tw-lead md:tw-title-sm mb-0">Radically Lower Costs</h3>
          <p className="mb-0 tw-paragraph-sm text-black/60">
          By leveraging a global network of independent providers, we cut out the expensive overhead of traditional, centralized cloud giants. Experience a dramatic reduction in costs for both long-term storage and high-performance computing.
          </p>
          <p className="mb-0">
            <Link className="link-primary" href="/ecosystem">
              <LinkArrowRight />
              See Pricing Models
            </Link>
          </p>
        </motion.div>
      </AnimateSpawn>
    </section>
  );
};

export default FeaturesSection;
