import Link from "@docusaurus/Link";
import DarkHeroStyles from "@site/src/components/Common/DarkHeroStyles";
import transitions from "@site/static/transitions.json";
import Layout from "@theme/Layout";
import { motion } from "framer-motion";
import React, { useRef } from "react";
import AnimateSpawn from "../components/Common/AnimateSpawn";
import LinkArrowDown from "../components/Common/Icons/LinkArrowDown";
import LinkArrowUpRight from "../components/Common/Icons/LinkArrowUpRight";
import Newsletter from "../components/Common/Newsletter/Newsletter";
import ShareMeta from "../components/Common/ShareMeta";
import Globe from "../components/Community/Globe";
import { Hub, HubCard } from "../components/Community/Hubs";
import { useDarkHeaderInHero } from "../utils/use-dark-header-in-hero";
import TelegramLogo from "@site/static/img/community/telegram.svg";

const hubs: Hub[] = [
  {
    name: "BigFile Germany",
    location: "Germany",
    description:
      "Focusing on Web3 development, LinkUp is the go-to community hub for dreamers and creators dedicated to growing the awareness of the BigFile in Germany.",
    image: "/img/community/bigfile-germany.webp",
    link: "https://linktr.ee/",
    coordinates: [51.1657, 10.4515],
  },
  {
    name: "BigFile Turkey",
    location: "Turkey, Cyprus",
    description:
      "The first hub in the Middle East offering a supportive environment for developers, startups, and enthusiasts to build and deploy decentralized applications on the BigFile.",
    image: "/img/community/bigfile-turkey.webp",
    link: "https://linktr.ee/",
    coordinates: [38.9637, 35.2433],
  },
  {
    name: "BigFile France",
    location: "France",
    description:
      "The first hub in the Middle East offering a supportive environment for developers, startups, and enthusiasts to build and deploy decentralized applications on the BigFile.",
    image: "/img/community/bigfile-france.webp",
    link: "https://linktr.ee/",
    coordinates: [38.9637, 35.2433],
  },
  {
    name: "BigFile Dutch",
    location: "Dutch, Belgium",
    description:
      "The first hub in the Middle East offering a supportive environment for developers, startups, and enthusiasts to build and deploy decentralized applications on the BigFile.",
    image: "/img/community/bigfile-dutch.webp",
    link: "https://linktr.ee/",
    coordinates: [38.9637, 35.2433],
  },
  
  
];


const UpcomingHubCard: React.FC<{
  hub: Hub;
}> = ({ hub }) => {
  return (
    <motion.div
      className="overflow-hidden rounded-xl flex flex-col bg-white"
      variants={transitions.item}
    >
      <img
        src={hub.image}
        alt={hub.name}
        loading="lazy"
        className="h-[200px] object-cover"
      />
      <h3 className="tw-heading-5 mb-3 mx-6 mt-8">{hub.name}</h3>
      <p className="flex-1 tw-paragraph-sm text-black/60 mx-6 mb-11">
        {hub.description}
      </p>
      <p className="mb-8 mx-6">
        <Link
          className="button-outline button-small"
          href={hub.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn more
        </Link>
      </p>
    </motion.div>
  );
};



function CommunityPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const isDark = useDarkHeaderInHero(heroRef);

  return (
    <Layout
      title="BigFile Community almost everywhere"
      description={`Be part of the inspiring collective of Web3 creators, builders, educators, and enthusiasts as we set out to explore how the BigFile can address challenges within today's blockchain ecosystem.`}
      editPath={`https://github.com/thebigfilecom/thebigfile-com-dev/edit/main/${__filename}`}
    >
      <ShareMeta image="/img/shareImages/share-community.jpg"></ShareMeta>

      <main
        className="text-black relative overflow-hidden"
        style={{
          marginTop: `calc(var(--ifm-navbar-height) * -1)`,
        }}
      >
        {isDark && <DarkHeroStyles bgColor="transparent"></DarkHeroStyles>}

        <section
          className=" bg-infinite text-white pt-20 relative"
          ref={heroRef}
        >
          <div className="absolute inset-0 overflow-hidden">
            <div className="blob blob-purple blob-lg md:blob-xl blob-x-10 blob-y-10 md:blob-x-6 md:blob-y-10 opacity-40 md:opacity-50"></div>
          </div>
          <AnimateSpawn
            className="container-10 pt-20 md:pt-36 relative md:flex md:-mb-40"
            variants={transitions.container}
          >
            {/* <div className="md:flex-1"></div> */}
            <div className=" md:w-6/10 relative pb-[45%] sm:pb-[20%] md:pb-20 z-1">
              <motion.h1
                className="tw-heading-3 md:tw-heading-2 mb-2 md:mb-6"
                variants={transitions.item}
              >
                The Global Collective
                <br />
                Powering a New Internet
              </motion.h1>
              <motion.p
                className="tw-lead-sm md:tw-lead mb-0"
                variants={transitions.item}
              >
                The BigFile community is a diverse collective of developers, storage providers, GPU owners, researchers, and visionaries united by a common goal: to build a more open, equitable, and efficient digital infrastructure. Whether you are building on our network, powering it with your hardware, or participating in its governance, you are a foundational part of BigFile.
              </motion.p>
            </div>
            <Globe
              hubs={hubs}
              className="
              aspect-square
              min-w-[380px] w-[80vw]
              -mt-8
              absolute 
              -right-3/10
              bottom-0
              translate-y-1/2
              
              sm:min-w-0 
              sm:mt-0
              
              md:w-[650px]
              md:-right-20
              md:bottom-auto 
              md:-mt-60
              md:translate-y-40"
            />
          </AnimateSpawn>
        </section>

        <AnimateSpawn
          className="container-10 md:mt-48 relative"
          el={motion.section}
          variants={transitions.container}
        >
          <div className="md:w-8/10">
            <motion.h2
              className="tw-heading-5 sm:tw-heading-4 md:tw-heading-60 mb-3 md:mb-6 text-gradient"
              variants={transitions.item}
            >
              Explore community initiatives
            </motion.h2>
          </div>
        </AnimateSpawn>

        <AnimateSpawn
          className="container-12 mt-6 md:mt-12 flex flex-col md:flex-row gap-5"
          el={motion.section}
          variants={transitions.container}
        >
          <motion.div
            className="flex-1 card-white p-12 flex flex-col gap-3 md:gap-4 text-center items-center justify-between"
            variants={transitions.item}
          >
            <img
              src="/img/community/icon-education.svg"
              alt=""
              loading="lazy"
              className="w-30"
            />
            <h3 className="tw-lead md:tw-title-sm mb-0">Education</h3>
            <p className="mb-0 tw-paragraph-sm text-black/60">
              Dedicated educational programs designed in cooperation with Web3 learning platforms to empower talented builders and pave the way for their future projects on the BigFile blockchain.
            </p>
            <p className="mb-0">
              <Link className="link-primary link-with-icon" href="#education">
                Start learning
                <LinkArrowDown />
              </Link>
            </p>
          </motion.div>
          <motion.div
            className="flex-1 card-white p-12 flex flex-col gap-3 md:gap-4 text-center items-center justify-between"
            variants={transitions.item}
          >
            <img
              src="/img/community/icon-hubs.svg"
              alt=""
              loading="lazy"
              className="w-30"
            />
            <h3 className="tw-lead md:tw-title-sm mb-0">BigFile Official</h3>
            <p className="mb-0 tw-paragraph-sm text-black/60">
              BigFile Official are flourishing worldwide. With 15 hubs already established and more in the pipeline, a thriving community is actively promoting awareness and adoption, encompassing evangelism, education, strategic partnerships, and project acceleration.
            </p>
            <p className="mb-0">
              <Link className="link-primary link-with-icon" href="#hubs">
                Find BigFile near you
                <LinkArrowDown />
              </Link>
            </p>
          </motion.div>
          <motion.div
            className="flex-1 card-white p-12 flex flex-col gap-3 md:gap-4 text-center items-center justify-between"
            variants={transitions.item}
          >
            <img
              src="/img/community/icon-events.svg"
              alt=""
              loading="lazy"
              className="w-30"
            />
            <h3 className="tw-lead md:tw-title-sm mb-0">Events</h3>
            <p className="mb-0 tw-paragraph-sm text-black/60">
              BigFile Events, you'll find fantastic chances to gather, socialize, celebrate, expand your knowledge, and form lasting bonds with fellow visionaries.
            </p>
            <p className="mb-0">
              <Link
                className="link-primary link-with-icon"
                href="https://bigfile.medium.com/"
              >
                Discover upcoming events
                <LinkArrowUpRight />
              </Link>
            </p>
          </motion.div>
        </AnimateSpawn>

        <AnimateSpawn
          className="container-10 pt-52 md:pt-[400px] relative mb-20"
          el={motion.section}
          variants={transitions.container}
          id="hubs"
        >
          <div className="md:w-7/10 md:mx-auto text-center text-white relative">
            <div className="blob blob-purple blob-xl blob-x-5 blob-y-5 z-[-1] opacity-75 md:opacity-95"></div>

            
            <motion.p
              className="tw-paragraph md:tw-lead-sm mb-4 md:mb-6 md:w-8/10 md:mx-auto"
              variants={transitions.item}
            >
              BigFile communities are forming and taking shape in various regions around the globe, bringing entrepreneurs, developers, venture capitalists, educators, enthusiasts and experts under one regional roof.
            </motion.p>

            <motion.p className="mb-0" variants={transitions.item}>
              <Link className="link-white" href="https://t.me/BigFileOfficial">
                <TelegramLogo className="inline-block align-text-bottom mr-2" />
                Join the official BigFile Telegram Space
              </Link>
            </motion.p>

            <motion.div
              variants={transitions.fadeIn}
              className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 z-[-1] [mask-image:linear-gradient(to_bottom,black_40%,transparent_60%)]"
            >
              <Globe
                hubs={hubs}
                className="w-[320px] md:w-[660px] aspect-square"
              />
            </motion.div>
          </div>
        </AnimateSpawn>
        <AnimateSpawn
          className="container-12 mt-6 md:mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 relative"
          el={motion.section}
          variants={transitions.container}
        >
          {hubs.map((hub) => (
            <HubCard hub={hub} key={hub.name} />
          ))}
        </AnimateSpawn> 

        <Newsletter
          fields={[
            {
              name: "EMAIL",
              placeholder: "Email",
              type: "email",
              required: true,
            },
          ]}
          ctaLabel="Get updates!"
          postUrl="https://thebigfile.us14.list-manage.com/subscribe/post?u=c077aedaaac14cbbf2fb9522b&amp;id=38a1cc340f&amp;f_id=00647ae0f0"
          decoration={
            <img
              src="/img/newsletter/email-image-1.webp"
              alt=""
              loading="lazy"
            />
          }
          className="mb-20"
        >
          <h2 className="text-white tw-heading-5 md:tw-heading-4 mb-6 md:mb-8">
            Want to meet BigFile enthusiasts IRL?
            <br />
            <span className="text-white-60">Sign up to stay connected</span>
          </h2>
        </Newsletter>
      </main>
    </Layout>
  );
}

export default CommunityPage;
