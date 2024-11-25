import Link from "@docusaurus/Link";
import { CardWithDescription } from "@site/src/components/Common/Card";
import DarkHeroStyles from "@site/src/components/Common/DarkHeroStyles";
import YoutubeVideoEmbed from "@site/src/components/Common/YoutubeVideoEmbed";
import Layout from "@theme/Layout";
import React from "react";

function FeaturePage() {
  return (
    <Layout
      title="Governance"
      // fill in meta description
      description=""
      editPath={`https://github.com/thebigfilecom/thebigfile-com-dev/edit/main/${__filename}`}
    >
      <main className="text-black relative">
        <section className="overflow-hidden bg-infinite text-white">
          <DarkHeroStyles></DarkHeroStyles>
          <div className="container-10 pt-12 mb-30 md:mb-52 md:pt-36 relative">
            <div className="md:w-7/10">
              <h1 className="tw-heading-3 md:tw-heading-2 mb-6">
                Governance & Rapid Evolution
              </h1>
              <p className="tw-lead-sm md:tw-lead mb-0">
              The File Management System (FMS) is the decentralized autonomous organization (DAO) that governs BigFile (BIG). Operating entirely on-chain, the NNS is responsible for tasks like making protocol upgrades to continually enhance the BigFile. BIG neuron holders vote on proposals to upgrade the network, and once a proposal is accepted, it is automatically executed across the blockchain without any human intervention.
                <br />
                <br />
                The ability to upgrade and iterate quickly is BIG's defining "superpower."
              </p>
            </div>
          </div>
          <div className="container-10 relative">
            <img
              src="/img/whiteBlurredCircle.webp"
              alt=""
              className="absolute pointer-events-none max-w-none w-[800px] aspect-square -right-[200px] bottom-[-400px] md:w-[1500px] md:bottom-[-680px] md:right-[-550px] object-contain object-center"
            />
          </div>
        </section>
        <section className="container-10 relative  mt-20 lg:mt-40 mb-20 md:mb-60 flex flex-col sm:flex-row sm:gap-10 md:gap-48">
          {/* 
            delete this div if image is not needed 
          */}

          <div
            className="
            prose 
            prose-h2:tw-heading-5 prose-h2:md:tw-heading-3 prose-h2:mb-2 prose-h2:md:mb-6
            prose-h3:tw-heading-7 prose-h3:mb-2
            prose-p:tw-paragraph prose-p:mb-4
            prose-a:underline prose-a:text-infinite hover:prose-a:text-black hover:prose-a:no-underline
            "
          >
            <h2>How It Works</h2>
            <p>
            The NNS enables the BIG network to be governed in an open, decentralized, and secure manner, with complete control over every aspect of the network. It can upgrade the protocol and software used by the node machines, create new subnet blockchains to expand network capacity, and much more. The NNS operates by accepting proposals, which are then either adopted or rejected based on voting by "neurons" created by network participants.
            </p>

          </div>
        </section>

        <section className="max-w-page relative mx-auto mb-20 px-6 md:mb-40 md:px-15">
          <p className="tw-heading-4 text-center mb-2 w-full mx-auto md:tw-heading-2 md:mb-6 lg:w-8/12">
            Learn more
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-8 md:mt-20">
            {/* add or remove CardWithDescription components on demand */}

            <CardWithDescription
              title="Upgrading the BigFile"
              description="Medium blog post"
              href="https://forum.thebigfile.com/t/upgrading-the-bigfile/30"
            />
            <CardWithDescription
              title="Diver deeper into the NNS"
              description="Take a deep dive into the BigFile's NNS and upgrading."
              href="https://wiki.thebigfile.com/wiki/NNS_Canisters"
            />
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default FeaturePage;
