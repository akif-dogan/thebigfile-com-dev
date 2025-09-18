import Link from "@docusaurus/Link";
import useGlobalData from "@docusaurus/useGlobalData";
import Layout from "@theme/Layout";
import React, { useRef } from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import AnimateSpawn from "../components/Common/AnimateSpawn";
import DarkHeroStyles from "../components/Common/DarkHeroStyles";
import LinkArrowRight from "../components/Common/Icons/LinkArrowRight";
import LinkArrowUpRight from "../components/Common/Icons/LinkArrowUpRight";
import ShareMeta from "../components/Common/ShareMeta";
import { getStakingMetrics } from "../utils/network-stats";
import { useDarkHeaderInHero } from "../utils/use-dark-header-in-hero";
import transitions from "@site/static/transitions.json";
import { motion } from "framer-motion";

const queryClient = new QueryClient();

const NnsTvl: React.FC = () => {
  const globalData = useGlobalData();
  const cryptoPrice = globalData["crypto-price"]["default"] as {
    icp: number;
    btc: number;
  };
  const stakingMetricsQuery = useQuery("staking-metrics", getStakingMetrics);

  let tvl = <>&nbsp;</>;

  if (stakingMetricsQuery.isFetched && stakingMetricsQuery.isSuccess) {
    const maybeMetric: string | undefined =
      stakingMetricsQuery.data.metrics.find(
        (d) => d.name === "governance_total_locked_e8s"
      )?.subsets[0]?.value[1];

    if (maybeMetric) {
      tvl = (
        <>
          ${((+maybeMetric * cryptoPrice.icp) / 100000000000000000).toFixed(1)}B
        </>
      );
    }
  }

  return <>{tvl}</>;
};


function TokenHolders(): JSX.Element {
  const globalData = useGlobalData();
  const cryptoPrice = globalData["crypto-price"]["default"] as {
    icp: number;
    btc: number;
  };

  const ref = useRef<HTMLDivElement>(null);
  const isDark = useDarkHeaderInHero(ref);

  return (
    <QueryClientProvider client={queryClient}>
      <Layout
        title="BIG Tokens"
        description="BIG, the native utility token of the BigFile powers computation, staking, voting, governance and ownership."
        editPath={`https://github.com/thebigfilecim/thebigfile-com-dev/edit/main/${__filename}`}
      >
        <main className="overflow-hidden">
          <ShareMeta image="/img/shareImages/share-big-tokens.jpg" />
          {isDark && <DarkHeroStyles />}
          <section className="bg-black text-white overflow-hidden" ref={ref}>
            <AnimateSpawn
              className="container-10 pt-20 md:pt-32 pb-52 md:pb-32 relative "
              variants={transitions.container}
            >
              <div className="blob blob-purple blob-x-5 blob-y-10 blob-md z-0 opacity-50"></div>
              <div className="md:w-7/10">
                <motion.h1
                  className="tw-heading-3 md:tw-heading-2 mb-8 md:mb-6 relative"
                  variants={transitions.item}
                >
                  The Engine of the Decentralized Cloud{" "}
                </motion.h1>
                <motion.p
                  className="tw-lead-sm md:tw-lead mb-0 relative"
                  variants={transitions.item}
                >
                  The BIG token is the multi-faceted utility asset that powers, <br />
                  secures, and governs the entire BigFile ecosystem. It is designed with a dual-phase lifecycle: starting as a feature-rich ERC-20 on the Polygon PoS network to build our community and economy, and evolving into the native coin of our high-performance Layer 2 chain.
                </motion.p>
              </div>
            </AnimateSpawn>
          </section>

          <AnimateSpawn
            el={motion.section}
            variants={transitions.container}
            className="container-10 relative md:pt-52"
          >
            <div className="-mt-40 md:mt-0 md:absolute md:right-0 md:-top-60 text-center">
              <motion.img
                variants={transitions.fadeIn}
                src="/img/big-tokens/hero.webp"
                alt=""
                className="w-full max-w-sm md:max-w-none aspect-[563/492]"
              />
            </div>
            <div className="mb-12 md:w-7/10">
              <motion.h2
                className="tw-heading-4 md:tw-heading-3 mb-6 text-gradient"
                variants={transitions.item}
              >
                Phase 1: The Autonomous Economic Engine on Polygon{" "}
              </motion.h2>
              <motion.p
                className="tw-paragraph md:tw-lead-sm text-black/60 mb-3"
                variants={transitions.item}
              >
                In its initial phase on Polygon, the BIG token operates a self-sustaining economy designed to reward long-term holders and ensure market stability. A 2% tax on large transactions perpetually funds two core protocol functions:
              </motion.p>
            </div>
            <div className="flex flex-col gap-5 md:flex-row md:w-8/10">
              <motion.div
                className="bg-white/80 border border-white border-solid rounded-xl px-6 py-8 md:p-8 md:flex-1"
                variants={transitions.item}
              >
                <h3 className="inline-flex items-center gap-3 mb-6">
                  <img
                    src="/img/big-tokens/big-token-logo.svg"
                    alt="BIG logo"
                    loading="lazy"
                    className="w-16 h-16"
                  />
                  <span className="flex-1 text-gradient tw-heading-5">
                   BIG token utility
                  </span>
                </h3>
                <ul className="checklist space-y-3 mb-0">
                  <li className="checklist-item pl-8">
                    Participate in governance
                  </li>
                  <li className="checklist-item pl-8">Burn for cycles </li>
                  <li className="checklist-item pl-8">
                    Participate in decentralisation swaps
                  </li>
                  <li className="checklist-item pl-8">
                    Reward node machine providers
                  </li>
                </ul>
              </motion.div>
              <motion.div
                className="bg-white/80 border border-white border-solid rounded-xl px-6 py-8 md:p-8 md:flex-1"
                variants={transitions.item}
              >
                <h3 className="inline-flex items-center gap-3 mb-6">
                  <img
                    src="/img/big-tokens/cycles-logo.svg"
                    className="w-16 h-16"
                    loading="lazy"
                    alt="Cycles logo"
                  />
                  <span className="flex-1 text-gradient tw-heading-5">
                    Cycles
                  </span>
                </h3>
                <ul className="checklist space-y-3 mb-0">
                  <li className="checklist-item pl-8">
                    Stable cost of compute & storage
                  </li>
                  <li className="checklist-item pl-8">
                    Fuel storage, compute, & bandwidth
                  </li>
                </ul>
              </motion.div>
            </div>
          </AnimateSpawn>


          <section className="mt-20 md:mt-40">
            <AnimateSpawn
              className="container-10 mb-10"
              variants={transitions.item}
            >
              <h2 className="tw-heading-3 mb-0 md:tw-heading-60">
              Phase 2: The Native Coin of the BigFile L2 Chain
              </h2>
            </AnimateSpawn>
            <div className="container-12 grid grid-cols-1 gap-5 md:grid-cols-2">
              <AnimateSpawn
                className="bg-white/80 border border-white border-solid rounded-xl px-6 py-8 md:p-16 "
                variants={transitions.item}
              >
                <h3 className="tw-heading-5 md:tw-heading-4 mb-6">
                Payment for Services
                </h3>
                <p className="tw-paragraph md:tw-lead-sm mb-6 text-black/60">
                 BIG will be the exclusive currency for all services on the network. Users will pay BIG to store data and rent on-demand GPU power.
                </p>
                <p className="mb-0">
                  <Link
                    href="/"
                    className="link-primary link-with-icon items-center"
                  >
                    <LinkArrowRight />
                    Participate in governance by staking BIG
                  </Link>
                </p>
              </AnimateSpawn>
              <AnimateSpawn
                className="bg-white/80 border border-white border-solid rounded-xl px-6 py-8 md:p-16 "
                variants={transitions.item}
              >
                <h3 className="tw-heading-5 md:tw-heading-4 mb-6">
                 Staking & Security
                </h3>
                <p className="tw-paragraph md:tw-lead-sm mb-6 text-black/60">
                Providers of storage and compute will be required to stake BIG to join the network and earn rewards, securing the protocol and ensuring honest behavior.
                </p>
                <p className="mb-0">
                  <Link
                    href="/"
                    className="link-primary link-with-icon items-center"
                  >
                    <LinkArrowRight />
                    More on the Network Participation and Incentives
                  </Link>
                </p>
              </AnimateSpawn>
              <AnimateSpawn
                variants={transitions.item}
                className="
                bg-white/80 border border-white border-solid rounded-xl px-6 py-8 md:p-16 md:col-span-2
                bg-[url(/img/big-tokens/ecosystem-mobile.webp)] sm:bg-[url(/img/big-tokens/ecosystem.webp)] 
                bg-[center_bottom_-20px] bg-[length:120%] bg-no-repeat 

                sm:bg-[right_-200px_top_-100px] sm:bg-[length:auto_180%]
                md:bg-[right_-160px_top_-100px] md:bg-[length:auto_160%]
                lg:bg-[right_-160px_center] lg:bg-[length:auto_180%]
              "
              >
                <div className="sm:w-6/10 lg:w-4/10">
                  <h3 className="tw-heading-5 md:tw-heading-4 mb-6">
                    Gas & Governance
                  </h3>
                  <p className="tw-paragraph md:tw-lead-sm mb-6 text-black/60">
                  As the native coin, BIG will be used to pay for all transaction fees (gas) on our L2. Staked BIG will also grant voting power in the BigFile DAO.
                  </p>
                  <p className="pb-[100%] sm:pb-0 mb-0">
                    <Link
                      href="/ecosystem"
                      className="link-primary link-with-icon items-center"
                    >
                      <LinkArrowRight />
                      Check out dapps
                    </Link>
                  </p>
                </div>
              </AnimateSpawn>
            </div>
            {/* </div> */}
          </section>

          <AnimateSpawn
            className="container-10 my-30 md:my-40 text-center text-white relative"
            variants={transitions.container}
          >
            <motion.div
              className="blob blob-purple blob-md md:blob-lg blob-x-5 blob-y-5 z-[-1]"
              variants={transitions.fadeIn}
            ></motion.div>
            <motion.h2
              className="tw-heading-3 md:tw-heading-60 mb-8"
              variants={transitions.item}
            >
              Join the BigFile Economy{" "}
            </motion.h2>
            <motion.p className="tw-lead mb-8" variants={transitions.item}>
            Acquire the BIG token on leading decentralized exchanges on the Polygon network. Become a part of our growing ecosystem today.
            </motion.p>
            <motion.p className="mb-0" variants={transitions.item}>
              <Link
                href="https://coinmarketcap.com/community/profile/thebigfile/"
                className="button-outline-white"
              >
                Complete list on CoinMarketCap
              </Link>
            </motion.p>
          </AnimateSpawn>

          <AnimateSpawn
            className="container-12 pt-24 md:pt-40 pb-30 relative"
            el={motion.section}
            variants={transitions.container}
          >
            <div className=" text-white text-center">
              <motion.div
                className="blob blob-purple blob-sm blob-x-5 blob-y-2 z-[-1] md:blob-lg md:blob-y-5"
                variants={transitions.fadeIn}
              ></motion.div>
              <motion.h2
                className="tw-heading-3 md:tw-heading-60 mb-0"
                variants={transitions.item}
              >
                Get more involved
              </motion.h2>
            </div>

            <div className="flex flex-col gap-5 mt-6 md:mt-20 md:flex-row md:items-start">
              <motion.div
                className="flex-1 bg-white/90 border border-white border-solid rounded-xl p-6 text-center md:p-12"
                variants={transitions.item}
              >
                <h3 className="tw-lead-lg md:tw-title-sm mb-3">
                  Exchanges BIG Token
                </h3>
                <p className="tw-paragraph-sm mb-3 text-black/60">
                 The native token of the BigFile network is BIG. BIG will be available for purchase during the Mainnet Period.
                </p>
                <p className="mb-0">
                  <Link href="/" className="link-primary link-with-icon">
                    <LinkArrowRight />
                    Exchanges BIG
                  </Link>
                </p>
              </motion.div>
              <motion.div
                className="flex-1 bg-white/90 border border-white border-solid rounded-xl p-6 text-center md:px-11 md:py-12 md:mt-30"
                variants={transitions.item}
              >
                <h3 className="tw-lead-lg md:tw-title-sm mb-3">
                  DeFi on the BigFile
                </h3>
                <p className="tw-paragraph-sm mb-3 text-black/60">
                  Build and use DeFi apps on the BigFile that are
                  hosted 100% on the blockchain.
                </p>
                {/* TEMPORARILY DISABLED - DEFI PAGE */}
                {/* <p className="mb-0">
                  <Link href="/defi" className="link-primary link-with-icon">
                    <LinkArrowRight />
                    DeFi on BIG
                  </Link>
                </p> */}
              </motion.div>
              <motion.div
                className="flex-1 bg-white/90 border border-white border-solid rounded-xl p-6 text-center md:p-12"
                variants={transitions.item}
              >
                <h3 className="tw-lead-lg md:tw-title-sm mb-3">
                  Join BigFile Community
                </h3>
                <p className="tw-paragraph-sm mb-3 text-black/60">
                  Community discussions around extending the BIG token standard for all ledgers to optimize functionality is ongoing.
                </p>
                <p className="mb-0">
                  <Link
                    href="/community"
                    className="link-primary link-with-icon"
                  >
                    BigFile Community
                    <LinkArrowUpRight />
                  </Link>
                </p>
              </motion.div>
            </div>
          </AnimateSpawn>
        </main>
      </Layout>
    </QueryClientProvider>
  );
}

export default TokenHolders;
