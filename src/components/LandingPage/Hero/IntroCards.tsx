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
              BigFile is an AI-powered decentralized blockchain network engineered to provide decentralized, immutable, and scalable data storage solutions. It is designed to securely host applications, files, and Big Data, while facilitating computations on smart contracts at unparalleled scalability.
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
             BigDrive - File Storage
            </h2>
            <p className="tw-paragraph md:tw-lead-sm mb-0 flex-1">
            Streamline your digital world with BigDrive: the app that simplifies file management and inspires creativity with its <strong>Pay Once, Enjoy Forever</strong> model.
            </p>
            <p className="mb-0">
              <Link className="button-outline" href="/bigdrive">
               Get Started BigDrive
              </Link>
            </p>
          </motion.div>
          <motion.div
            className="rounded-3xl bg-white px-6 py-8 md:p-15 flex flex-col gap-4 md:gap-6"
            variants={transitions.item}
          >
            <h2 className="tw-heading-4 md:tw-heading-3 mb-0">
              BigFile Mining
            </h2>
            <p className="tw-paragraph md:tw-lead-sm mb-0 flex-1">
            The BigFile network's mining process is optimized to maximize the replication of datasets, ensuring enhanced redundancy and data availability.
            </p>
            <p className="mb-0">
              <Link className="button-outline" href="/">
                Explore BigFile Gateway
              </Link>
            </p>
          </motion.div>
          <motion.div
            className="rounded-3xl bg-white px-6 py-8 md:p-15 flex flex-col gap-4 md:gap-6"
            variants={transitions.item}
          >
            <h2 className="tw-heading-4 md:tw-heading-3 mb-0">Your BIG ID</h2>
            <p className="tw-paragraph md:tw-lead-sm mb-0 flex-1">
            BIG ID is a platform enabling users to securely store and manage their data on the BigFile network. It offers the ability to permanently store files in a decentralized and reliable manner.
            </p>
            <p className="mb-0">
              <Link className="button-outline" href="/big-id">
                One ID for all services
              </Link>
            </p>
          </motion.div>
        </AnimateSpawn>
      </div>
    </>
  );
};

export default IntroCards;
