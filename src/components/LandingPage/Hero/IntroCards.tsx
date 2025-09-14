import Link from "@docusaurus/Link";
import React from "react";
import AnimateSpawn from "../../Common/AnimateSpawn";
import transitions from "@site/static/transitions.json";
import { motion } from "framer-motion";

const IntroCards: React.FC = () => {
  return (
    <>
      <AnimateSpawn
        variants={transitions.container}
        className="container-12 mb-6"
      >
        <motion.div
          variants={transitions.item}
          className="
          relative
          md:col-span-3 flex rounded-3xl
        text-white bg-[linear-gradient(263deg,#C772EF_0%,#6A85F1_100%)]
        "
        >
          <div className="md:container-10 w-full">
            <div className="px-6 md:w-1/2 pt-12 pb-4 md:py-20 flex flex-col justify-centeritems-start">
              <h2 className="tw-heading-5 md:tw-heading-3 mb-3 md:mb-6">
                What is the BigFile
              </h2>
              <p className="tw-paragraph-sm md:tw-lead mb-6 text-white/60">
              BigFile is a DePIN (Decentralized Physical Infrastructure Network) that creates a two-sided marketplace for the core resources of the digital world: storage and compute. We empower anyone to contribute their idle disk space and GPU power, and in return, provide the world with a secure, censorship-resistant, and radically cost-effective cloud infrastructure.
              </p>
              <p className="mb-0 self-stretch sm:self-auto">
                <Link
                  className="w-full sm:w-auto button-white"
                  href="/what-is-big-file"
                >
                  <span className="hidden sm:inline">Explore</span> The Power of
                  BigFile
                </Link>
              </p>
            </div>
            <div className="relative w-full aspect-[1074/713] overflow-hidden md:overflow-visible md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2 bottom-0 md:w-1/2 text-right">
              <div className="absolute md:static top-0 -left-16 -bottom-10 right-0">
                <img
                  src="/img/home/what-is-big-file.webp"
                  alt=""
                  className=" object-contain  max-w-none max-h-none w-full"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </AnimateSpawn>
      <div
        className="
          bg-[linear-gradient(180deg,transparent_0%,transparent_83.3%,#3B00B9_83.3%,#3B00B9_100%)]
          md:bg-[linear-gradient(180deg,transparent_0%,transparent_50%,#3B00B9_50%,#3B00B9_100%)]
        "
      >
        <AnimateSpawn
          className="container-12 grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={transitions.container}
        >
          <motion.div
            className="rounded-3xl bg-white px-6 py-8 md:p-15 flex flex-col gap-4 md:gap-6"
            variants={transitions.item}
          >
            <h2 className="tw-heading-4 md:tw-heading-3 mb-0">
             Sovereign Storage Layer
            </h2>
            <p className="tw-paragraph md:tw-lead-sm mb-0 flex-1">
            Reclaim ownership of your digital world. BigFile provides a censorship-resistant and permanent storage layer by encrypting, sharding, and distributing your data across a global network of independent nodes. Providers are rewarded in <strong>BIG</strong> for contributing the backbone of this new data economy.
            </p>
            <p className="mb-0">
              <Link className="button-outline" href="/bigdrive">
              Explore Storage Layer
              </Link>
            </p>
          </motion.div>
          <motion.div
            className="rounded-3xl bg-white px-6 py-8 md:p-15 flex flex-col gap-4 md:gap-6"
            variants={transitions.item}
          >
            <h2 className="tw-heading-4 md:tw-heading-3 mb-0">
            Decentralized AI Compute Cloud
            </h2>
            <p className="tw-paragraph md:tw-lead-sm mb-0 flex-1">
            The future of Artificial Intelligence shouldn't be confined to the data centers of a few corporations. BigFile aggregates a global network of underutilized GPUs, creating a powerful, on-demand marketplace for high-performance computing. Train complex AI models or perform intensive data analysis at a fraction of the cost.
            </p>
            <p className="mb-0">
              <Link className="button-outline" href="/">
              Access On-Demand GPUs
              </Link>
            </p>
          </motion.div>
          <motion.div
            className="rounded-3xl bg-white px-6 py-8 md:p-15 flex flex-col gap-4 md:gap-6"
            variants={transitions.item}
          >
            <h2 className="tw-heading-4 md:tw-heading-3 mb-0">You Are The Network</h2>
            <p className="tw-paragraph md:tw-lead-sm mb-0 flex-1">
            Monetize your idle hardware and become a foundational part of the decentralized internet. Whether you have spare disk space or underutilized GPU cycles, you can connect to the BigFile network. Our autonomous protocol matches your resources with user demand, rewarding you with BIG tokens for every service provided. Participation is permissionless.
            </p>
            <p className="mb-0">
              <Link className="button-outline" href="/big-id">
               Become a Provider
              </Link>
            </p>
          </motion.div>
        </AnimateSpawn>
      </div>
    </>
  );
};

export default IntroCards;
