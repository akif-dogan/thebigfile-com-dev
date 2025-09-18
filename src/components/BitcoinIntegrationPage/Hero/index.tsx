import Link from "@docusaurus/Link";
import AnimateSpawn from "@site/src/components/Common/AnimateSpawn";
import transitions from "@site/static/transitions.json";
import { motion } from "framer-motion";
import React, { forwardRef } from "react";

const Hero = forwardRef<HTMLDivElement, {}>((_, ref) => {
  return (
    <div className="overflow-hidden" ref={ref}>
      <div className="bg-black">
        <AnimateSpawn
          variants={transitions.container}
          className="container-10 relative text-white pt-36  md:pt-60 pb-40 "
        >
          <div className="blob blob-white blob-md md:blob-xl right-0 translate-x-3/10 translate-y-5/10 md:translate-x-4/10 top-auto bottom-0"></div>
          <motion.h1
            variants={transitions.item}
            className="tw-heading-3 mb-2 w-5/6 md:tw-heading-2 md:mb-6 md:w-7/12"
          >
            Your Data, Stored Forever. Truly Yours.
          </motion.h1>
          <motion.p
            variants={transitions.item}
            className="tw-lead-sm md:tw-lead md:w-7/12 mb-0"
          >
            Welcome to the future of data storage. BigFile provides a decentralized, permanent, and mathematically verifiable storage layer for your most important digital assets. Say goodbye to recurring fees, censorship, and the risk of data loss. This is data sovereignty, delivered.
          </motion.p>
        </AnimateSpawn>
      </div>
    </div>
  );
});

export default Hero;
