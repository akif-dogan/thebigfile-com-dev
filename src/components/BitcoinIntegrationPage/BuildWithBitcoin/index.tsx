import React from "react";
import transitions from "@site/static/transitions.json";
import AnimateSpawn from "@site/src/components/Common/AnimateSpawn";
import { motion } from "framer-motion";
import { CardWithDescription } from "@site/src/components/Common/Card";

function Index() {
  const links = [
    {
      title: "For Everyday Users",
      href: "https://bigdrive.thebigfile.com",
    },
    {
      title: "For Developers",
      href: "https://bigdrive.thebigfile.com/api",
    },
    {
      title: "BigFile Docs",
      href: "/docs/current",
    },
    {
      title: "For Providers",
      href: "https://thebigfile.com/samples?term=bitcoin",
    },
  ];
  return (
    <AnimateSpawn
      variants={transitions.container}
      className="max-w-page relative mx-auto mb-20 px-6 md:mb-40 md:px-15"
    >
      <motion.p
        variants={transitions.item}
        className="tw-heading-4 md:tw-heading-60 text-center mb-2 w-full mx-auto md:mb-6 md:w-8/12"
      >
        Radical Cost-Efficiency
      </motion.p>
      <motion.p
        variants={transitions.item}
        className="tw-lead-sm md:tw-lead mb-2 text-center w-5/6 mx-auto md:mb-6 md:w-6/12"
      >
        By cutting out the expensive overhead of centralized data centers, our community-powered network offers storage solutions at a fraction of the cost of traditional cloud providers. Pay only for what you need with the BIG token.
      </motion.p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-8 md:mt-20">
        {links.map((card) => (
          <CardWithDescription
            key={card.title}
            title={card.title}
            description=""
            href={card.href}
          />
        ))}
      </div>
    </AnimateSpawn>
  );
}

export default Index;
