import Head from "@docusaurus/Head";
import Link from "@docusaurus/Link";
import DarkHeroStyles from "@site/src/components/Common/DarkHeroStyles";
import BlobGradient from "@site/static/img/gradientBlurredCircle.webp";
import BlobBlue from "@site/static/img/purpleBlurredCircle.webp";
import transitions from "@site/static/transitions.json";
import Layout from "@theme/Layout";
import clsx from "clsx";
import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
import IconBIG from "../../static/img/social-platforms/big.svg";
import IconTokenized from "../../static/img/social-platforms/tokenized.svg";
import AnimateSpawn from "../components/Common/AnimateSpawn";
import { CardWithDescription } from "../components/Common/Card";
import { useElementSize } from "../utils/use-element-size";

const MotionLink = motion(Link);

const ColumnCard: React.FC<{
  title: React.ReactNode;
  children: React.ReactNode;
  icon: React.ReactNode;
}> = ({ title, children, icon }) => {
  return (
    <AnimateSpawn
      className="sm:w-6/10 md:w-4/10 md:even:self-end md:-mt-30 lg:-mt-20 md:first:mt-0 "
      variants={transitions.container}
    >
      <motion.div className="w-30 mb-4" variants={transitions.item}>
        {icon}
      </motion.div>
      <motion.h3
        className="tw-heading-4 mb-4 md:tw-heading-3"
        variants={transitions.item}
      >
        {title}
      </motion.h3>
      {children}
    </AnimateSpawn>
  );
};

const Collapse: React.FC<{
  title: React.ReactNode;
  children: React.ReactNode;
  open: boolean;
  onClick: () => void;
}> = ({ title, children, open, onClick }) => {
  const ref = useRef<HTMLDivElement>();
  const size = useElementSize(ref);

  return (
    <div className="w-[calc(100vw-100px)] flex flex-col sm:block sm:w-auto snap-center">
      <button
        onClick={onClick}
        className={clsx(
          `tw-heading-4  border-none appearance-none whitespace-normal font-circular p-0 transition-colors hover:text-black text-black text-left bg-transparent`,
          open ? "sm:text-black" : "sm:text-black-30"
        )}
      >
        {title}
      </button>
      <div
        className="hidden sm:block sm:overflow-hidden transition-[height]"
        style={{
          height: open && size ? size.height : 0,
        }}
        ref={ref}
      >
        <div className="pt-4">{children}</div>
      </div>
      <div className="sm:hidden pt-4 flex flex-1 flex-col">{children}</div>
    </div>
  );
};

const projects: {
  imageUrl: string;
  title: string;
  body: React.ReactNode;
}[] = [
  {
    title: "BIGChat",
    body: "BIGChat is the first instant messaging service running 100% on the blockchain. This web3 dapp is backed by the security of chain-key cryptography. Plus users can easily send crypto to friends via messages, or vote on BIG governance proposals without leaving the dapp.",
    imageUrl: "/img/social-platforms/BigChat.webp",
  },
];

function SocialMediaDappsPage() {
  const [openProjectIndex, setOpenProjectIndex] = useState(0);

  return (
    <Layout
      title="Social media decentralized"
      description="Take full ownership and control over your social media plaforms."
      editPath={`https://github.com/thebigfilecom/thebigfile-com-dev/edit/main/${__filename}`}
    >
      <Head>
        <meta
          property="og:image"
          content={
            "https://thebigfile.com/img/shareImages/share-social-media.jpg"
          }
        />
        <meta
          name="twitter:image"
          content={
            "https://thebigfile.com/img/shareImages/share-social-media.jpg"
          }
        />
      </Head>
      <main className="text-black relative overflow-hidden">
        <DarkHeroStyles></DarkHeroStyles>
        <AnimateSpawn variants={transitions.container}>
          <section className="overflow-hidden bg-infinite text-white">
            <div className="container-10 pt-12 mb-60 md:mb-52 md:pt-36 relative">
              <div className="md:w-7/10">
                <motion.h1
                  className="tw-heading-3 md:tw-heading-2 mb-6"
                  variants={transitions.item}
                >
                  Social Media Decentralized
                </motion.h1>
                <motion.p
                  className="tw-lead-sm md:tw-lead mb-8"
                  variants={transitions.item}
                >
                  As a blockchain, BigFile inherently provides censorship-resistant storage. Once data is uploaded, it becomes immutable and tamper-proof, ensuring that social platforms can offer users true self-sovereign data access—free from third-party control or government censorship.
                </motion.p>
                <motion.p className="" variants={transitions.item}>
                  <Link href="#web3-dapps" className="button-white">
                    Try BigFile social dapps
                  </Link>
                </motion.p>
              </div>
            </div>
            <div className="container-10 relative">
              <motion.img
                src="/img/whiteBlurredCircle.webp"
                alt=""
                className="absolute pointer-events-none max-w-none w-[800px] aspect-square -right-[200px] bottom-[-300px] md:w-[1500px] md:bottom-[-680px] md:right-[-550px] object-contain object-center"
                variants={transitions.item}
              />
            </div>
          </section>
          <motion.section
            className="container-12 relative h-40 sm:h-0"
            variants={transitions.fadeIn}
          >
            <div className="max-w-[660px] sm:absolute pointer-events-none right-5 -translate-y-[187px] sm:-translate-y-[279px] md:-translate-y-[382px] text-center">
              <img
                src="/img/social-platforms/hero.webp"
                className="w-80 sm:w-[480px] md:w-auto max-w-full"
                alt="Social media dapps"
              />
            </div>
          </motion.section>
        </AnimateSpawn>
        <section className="container-10 sm:pt-56">
          <AnimateSpawn
            className="mb-20 md:mb-40"
            variants={transitions.container}
          >
            <motion.p
              className="tw-heading-4 sm:tw-heading-3 md:tw-heading-2 mb-8 md:mb-10 md:w-8/10 text-transparent bg-clip-text gradient-text"
              variants={transitions.item}
            >
              Developer-Friendly Infrastructure
            </motion.p>
            <motion.p
              className="tw-lead-sm md:tw-lead mb-8 md:mb-12 md:w-6/10"
              variants={transitions.item}
            >
              BigFile gateways revolutionize decentralized app (dApp) development by offering a developer-friendly interface. By eliminating the need for direct interaction with BigFile nodes, developers can accelerate the creation and deployment of cutting-edge social platforms.
            </motion.p>
          </AnimateSpawn>
          <div className="relative z-[-1]">
            <AnimateSpawn
              el={motion.img}
              alt=""
              variants={transitions.item}
              src={BlobGradient}
              className="absolute pointer-events-none z-[-1]
              max-w-none
              w-[1200px]
              top-[-800px]
              left-[-800px]
              sm:w-[1200px]
              sm:top-[-800px]
              sm:left-[-900px]
            "
            />
          </div>
          <div
            className="
          flex
          flex-col
          gap-16 md:gap-0
          "
          >
            <ColumnCard
              title="Immutable and Unstoppable Data"
              icon={<IconTokenized aria-hidden="true" />}
            >
              <motion.p
                className="mb-6 tw-paragraph"
                variants={transitions.item}
              >
                With BigFile, once data is uploaded, it becomes immutable and tamper-proof. This ensures that social platforms can offer users genuine self-sovereign data access, free from the influence of third parties or government censorship.
              </motion.p>
            </ColumnCard>
            <ColumnCard
              title="Creator-Owned Content"
              icon={<IconBIG aria-hidden="true" />}
            >
              <motion.p
                className="mb-6 tw-paragraph"
                variants={transitions.item}
              >
                BigFile empowers true data ownership, enabling creators to monetize their work directly without intermediaries. This gives them complete control over their media and income. Social platforms can leverage BigFile's infrastructure to build innovative business models, rewarding users for their contributions and fostering a more equitable digital ecosystem.
              </motion.p>
            </ColumnCard>
          </div>
        </section>
        <section
          className="container-10 pt-30  md:pt-40 relative"
          id="web3-dapps"
        >
          <AnimateSpawn
            className="md:w-6/10 mb-20 md:mb-40"
            variants={transitions.container}
          >
            <motion.h2
              className="tw-heading-3 md:tw-heading-60 mb-8 md:w-9/10"
              variants={transitions.item}
            >
              Best Decentralized web3 Social Media Platforms
            </motion.h2>
            <motion.p className="tw-lead-sm mb-8" variants={transitions.item}>
             BigFile is a blockchain network designed to host a suite of Web3 Social Media services on a fully decentralized platform.
            </motion.p>
            <MotionLink
              className="link-external"
              href="/ecosystem?tag=Social"
              variants={transitions.item}
            >
              See dapp collection
            </MotionLink>
            <img
              src={BlobBlue}
              alt=""
              className="
                hidden
                md:block
                absolute right-[-800px] w-[1400px] top-[-400px]"
            />
          </AnimateSpawn>
        </section>
        <section className="relative  mb-20 md:mb-40">
          <div className="container-10 xl:min-h-[600px]">
            <AnimateSpawn
              variants={transitions.item}
              className="flex overflow-auto sm:overflow-visible -mx-6 sm:mx-0 sm:gap-2/10 snap-x snap-mandatory xl:relative sm:min-h-[40vw] xl:min-h-[450px]"
            >
              <div className="flex items-stretch gap-6 sm:flex-col sm:gap-10 mx-6 sm:mx-0 mb-6 sm:mb-0 sm:w-5/10 md:w-4/10">
                {projects.map((p, i) => (
                  <Collapse
                    title={p.title}
                    open={openProjectIndex === i}
                    onClick={() => setOpenProjectIndex(i)}
                  >
                    <div className="flex-1 tw-paragraph">{p.body}</div>

                    <img
                      src={projects[i].imageUrl}
                      alt={p.title}
                      className="sm:hidden mt-8"
                    />
                  </Collapse>
                ))}
              </div>
            </AnimateSpawn>
          </div>
          {projects.map((p, i) => (
            <div
              className="
              hidden sm:flex 
              absolute 
              transition-opacity
              top-0 
              -right-6 xl:right-[calc(50%-440px)] xl:translate-x-1/2
              w-4/10 
              max-w-[600px]
              "
              style={{ opacity: i === openProjectIndex ? 1 : 0 }}
            >
              <img src={p.imageUrl} alt={p.title} />
            </div>
          ))}
        </section>
        <section className="container-10 mx-auto relative">
          <img
            src={BlobBlue}
            alt=""
            className="
              absolute 
              right-[-700px] md:right-[-800px] 
              max-w-none w-[1400px] 
              bottom-[-300px] md:bottom-auto 
              md:top-[-250px]
            "
          />
          <AnimateSpawn
            className="flex flex-col md:flex-row gap-12 md:gap-1/10 relative"
            variants={transitions.container}
          >
            <div className="md:w-5/10">
              <motion.h2
                className="tw-heading-3 md:tw-heading-60 mb-6"
                variants={transitions.item}
              >
                Build the next generation of social media services
              </motion.h2>
              <motion.div className="mt-3" variants={transitions.item}>
                <p className="tw-paragraph md:tw-lead-sm mb-4">
                Disrupt the world of social media by creating your own. The BigFile blockchain offers the first complete tech stack for developers to build a new era of DAO-governed social media services, transforming the future of online interaction.
                </p>

                <div className="">
                  <p className="tw-paragraph md:tw-lead-sm mb-4">
                    BigFile is a blockchain that can:
                  </p>
                  <ul className="checklist tw-paragraph md:tw-lead-sm mb-6 space-y-3">
                    <li className="checklist-item leading-6 pl-8">Serve web</li>
                    <li className="checklist-item leading-6 pl-8">
                      Integrate existing web2 APIs without oracles
                    </li>
                    <li className="checklist-item leading-6 pl-8">
                      Provides out of the box anonymous authentication system
                    </li>
                    <li className="checklist-item leading-6 pl-8">
                      Store large amounts of data on-chain
                    </li>
                    <li className="checklist-item leading-6 pl-8">
                      Store private data on-chain
                    </li>
                  </ul>
                  <p>
                    <Link className="link-external" href="/developers">
                      Start coding
                    </Link>
                  </p>
                </div>
              </motion.div>
            </div>
            <div className="md:w-4/10">
              <motion.div variants={transitions.item}>
                <h3 className="tw-heading-7-caps mb-3 uppercase">
                  Cost efficiency
                </h3>
                <div className="bg-white-50 rounded-xl border border-white border-solid p-6">
                  <ul className="list-none pl-0 mb-0 space-y-10">
                    <li className="flex items-center">
                      <img
                        src="/img/basics/logos/logo-big.svg"
                        alt=""
                        className="mr-4 w-11 h-11"
                      />
                      <span className="tw-heading-3">$30</span>
                      <span className="tw-heading-6 pl-2 relative top-2">
                        / GB Forever
                      </span>
                    </li>
                    <li className="flex items-center">
                      <img
                        src="/img/basics/logos/logo-solana.svg"
                        alt=""
                        className="mr-4 w-11 h-11"
                      />
                      <span className="tw-heading-5">$118,000</span>
                      <span className="tw-heading-7 pl-2 relative top-[2px]">
                        / GB per year
                      </span>
                    </li>
                    <li className="flex items-center">
                      <img
                        src="/img/basics/logos/logo-eth.svg"
                        alt=""
                        className="mr-4 w-11 h-11"
                      />
                      <span className="tw-heading-5">$79,000,000</span>
                      <span className="tw-heading-7 pl-2 relative top-[2px]">
                        / GB
                      </span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </AnimateSpawn>
        </section>
        <section className="container-12 my-20 md:my-40">
          <AnimateSpawn variants={transitions.item}>
            <h2 className="tw-heading-4 mb-3 text-center md:tw-heading-60 md:mb-4">
              Dev corner
            </h2>
            <p className="tw-lead-sm mb-8 text-center md:tw-lead md:w-8/12 md:mx-auto md:mb-16">
              This corner is for the pioneers. Developers who are crazy enough to think they can reinvent social media are the ones who do.
            </p>
          </AnimateSpawn>

          <AnimateSpawn
            className="grid gap-2 md:grid-cols-2"
            variants={transitions.item}
          >
            <CardWithDescription
              title="Sample code"
              description="Get inspired by existing social dapps on the BigFile."
              href="/samples"
            ></CardWithDescription>
            <CardWithDescription
              title="Quick start"
              description="New to the BigFile? Learn how to create your first dapp here in 10 minutes."
              href="/docs/current/tutorials/developer-journey/"
            ></CardWithDescription>
            <CardWithDescription
              title="Developer docs"
              description="Get to know the BigFile and how to build on it."
              href="/developers"
              className="md:col-span-2"
            ></CardWithDescription>
          </AnimateSpawn>
        </section>
      </main>
    </Layout>
  );
}

// TEMPORARILY DISABLED - SOCIAL PLATFORMS PAGE
// export default SocialMediaDappsPage;
