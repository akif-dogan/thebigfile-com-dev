import React from "react";
import AnimateSpawn from "../../Common/AnimateSpawn";
import transitions from "@site/static/transitions.json";
import { motion } from "framer-motion";
import Link from "@docusaurus/Link";
import LinkArrowRight from "../../Common/Icons/LinkArrowRight";

const Content: React.FC = () => {
  return (
    <>
      <AnimateSpawn
        className="container-10 flex flex-col md:flex-row gap-12 md:gap-1/10 mb-20 md:mb-40"
        variants={transitions.container}
        el={motion.section}
      >
        <motion.div className="flex-[4]" variants={transitions.item}>
          <h2 className="tw-heading-4 md:tw-heading-2 text-gradient mb-3">
          Why BigFile Storage?
          </h2>
          <p className="tw-paragraph mb-3">
          Our DePIN model, powered by a global network of providers, is designed for long-term data resilience. We ensure your data remains accessible for generations, making it ideal for archiving critical records, legal documents, and digital heritage.
          </p>
          
          <p className="mb-0 mt-8">
            <Link
              className="link-primary link-with-icon"
              href="/how-it-works/"
            >
              <LinkArrowRight></LinkArrowRight>
              What is BigFile CLI
            </Link>
          </p>
        </motion.div>
        <motion.div className="flex-[5] space-y-5" variants={transitions.item}>
          <div className="bg-white rounded-xl p-6 md:p-8">
            <h3 className="tw-heading-6 md:tw-heading-4 mb-4">
            Mathematical Verifiability
            </h3>
            <p className="tw-paragraph mb-0">
            We don't just promise your data is safe; we prove it. Using ZK-Proofs, our protocol allows for the mathematical verification that your files are being stored correctly by providers, creating a truly trustless system.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 md:p-8">
            <h3 className="tw-heading-6 md:tw-heading-4 mb-4">
             Unbreakable Security & Privacy
            </h3>
            <p className="tw-paragraph mb-0">
            Before your data ever leaves your device, it is encrypted client-side. It is then sharded and distributed across our decentralized network. Only you hold the keys, ensuring no one—not even BigFile or the providers—can access your content.
            </p>
          </div>
        </motion.div>
      </AnimateSpawn>
    </>
  );
};

export default Content;
