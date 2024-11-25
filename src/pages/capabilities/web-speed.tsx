import Link from "@docusaurus/Link";
import { CardWithDescription } from "@site/src/components/Common/Card";
import DarkHeroStyles from "@site/src/components/Common/DarkHeroStyles";
import RightPointer from "@site/static/img/svgIcons/rightPointer.svg";
import Layout from "@theme/Layout";
import React from "react";

function FeaturePage() {
  return (
    <Layout
      title="Web Speed"
      // fill in meta description
      description=""
      editPath={`https://github.com/thebigfilecom/thebigfile-com-dev/edit/main/${__filename}`}
    >
      <main className="text-black relative">
        <section className="overflow-hidden bg-infinite text-white">
          <DarkHeroStyles></DarkHeroStyles>
          <div className="container-10 pt-12 mb-30 md:mb-52 md:pt-36 relative">
            <div className="md:w-7/10">
              <h1 className="tw-heading-3 md:tw-heading-2 mb-6">Web speed</h1>
              <p className="tw-lead-sm md:tw-lead mb-0">
              Users can interact with dapps on the BigFile (BIG) with speeds comparable to traditional web applications. Developers can therefore build a much broader range of fully on-chain dapps without relying on cloud services and risking single points of failure.
                <br />
                
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
          <div className="sm:order-2 sm:shrink-0 sm:flex-1 mb-10">
            <img
              src="/img/features/ic-generic.png"
              alt=""
              className="w-full block"
            />
          </div>

          <div
            className="
            sm:flex-1 
            prose 
            prose-h2:tw-heading-5 prose-h2:md:tw-heading-3 prose-h2:mb-2 prose-h2:md:mb-6
            prose-h3:tw-heading-7 prose-h3:mb-2
            prose-p:tw-paragraph prose-p:mb-4
            prose-a:underline prose-a:text-infinite hover:prose-a:text-black hover:prose-a:no-underline
            "
          >
            <h2>How It Works</h2>

            <h3>Read vs Write calls</h3>
            <p>
            In computer science and databases, it is common practice to separate tasks into read and write operations. Since read tasks are generally less 'expensive' in terms of time, categorizing these operations can significantly enhance a program's efficiency. Given that a blockchain functions in part as a distributed database, this separation of tasks is also valuable here. In line with this approach, BigFile supports two types of transactions: query calls (read-only) and update (write) calls.
              <br />
              <br />
              
            </p>
            <h3>Chain Key Cryptography</h3>
            <p>
            The main advantage of using a blockchain or decentralized protocol is that the central point of trust is removed. This advantage comes at a cost; trust is not removed, it's decentralized which means that multiple people (or machines or nodes) need to agree on the 'truth' at a given point in time. For multiple people/nodes to agree, they each sign their version of the truth, and each verify all of the others' signatures.
              <br />
              <br />
              
              In most blockchain protocols, a significant source of inefficiency is the slow process of verifying numerous individual signatures. One of the key innovations of BIG is the introduction of {" "}
              <Link href="https://forum.thebigfile.com/t/chain-key-cryptography-bigfile/32">
                Chain Key (CK) Cryptography
              </Link>{" "}, which enables BIG signatures to be verified with a single public key. This reduces friction for all types of devices—whether node machines, laptops, or mobile phones—allowing them to interact with the blockchain as efficiently and securely as Web2, but without the centralization.  
            </p>

            <p className="mb-3 mt-6">
              <Link
                href="https://thebigfile.com/showcase/"
                className="tw-heading-6 flex gap-2 items-center"
              >
                <RightPointer className="w-6 h-6"></RightPointer>
                See other 100% on-chain dapps
              </Link>
            </p>
          </div>
        </section>

        <section className="max-w-page relative mx-auto mb-20 px-6 md:mb-40 md:px-15">
          <p className="tw-heading-4 text-center mb-2 w-full mx-auto md:tw-heading-2 md:mb-6 lg:w-8/12">
            Build fast dapps. Quickly.
          </p>
          <p className="tw-lead-sm mb-2 text-center mx-auto md:mb-6 md:w-6/12">
            Get started today.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-8 md:mt-20">
            {/* add or remove CardWithDescription components on demand */}

            <CardWithDescription
              title="Deploy a 'Hello World' Dapp in 10 Minutes"
              description="Get started with your first BIG dapp"
              href="/docs/current/tutorials/developer-journey/"
            />
            <CardWithDescription
              title="Build dapps with the language of your choice"
              description="Learch about programming languages on the BigFile."
              href="/docs/current/developer-docs/smart-contracts/write/overview"
            />
            <CardWithDescription
              title="BIG Wiki"
              description="Take a deep dive into the BIG's performance"
              href="https://wiki.thebigfile.com/wiki/Internet_Computer_performance_%26_power_consumption"
            />
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default FeaturePage;
