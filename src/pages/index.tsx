import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import StartBuildingSection from "@site/src/components/LandingPage/StartBuilding";
import Layout from "@theme/Layout";
import React from "react";

import FeaturesSection from "../components/LandingPage/FeaturesSection/FeaturesSection";
import { CardsSection } from "../components/LandingPage/Hero/Cards";
import Hero from "../components/LandingPage/Hero/Hero";
import IntroCards from "../components/LandingPage/Hero/IntroCards";
import {
  CollapsedVisionSection,
  VisionSection,
} from "../components/LandingPage/Hero/VisionSection";
import NewsletterSection from "../components/LandingPage/NewsletterSection/NewsletterSection";
import SectionsBar from "../components/LandingPage/SectionsBar";
import Sustainable from "../components/LandingPage/Sustainable/Sustainable";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title="Home"
      description={siteConfig.tagline}
      editPath={`https://github.com/thebigfilecom/thebigfile-com-dev/edit/main/${__filename}`}
    >
      <Hero
        headline={<>BIGFILE ON BLOCKCHAIN{" "}</>}
      >
        <CardsSection />
        
        <VisionSection>
        BigFile is a DePIN (Decentralized Physical Infrastructure Network) that unites global idle disk space and GPU power. We provide permanent, verifiable data storage and an accessible marketplace for AI computation, building the foundational cloud infrastructure for a decentralized future. 
        </VisionSection>
        <IntroCards />
      </Hero>

      <main className="w-full relative bg-[#F1EEF5] z-[0]">
        <div className="overflow-hidden">
          
          <FeaturesSection />
          <Sustainable id="sustainable"></Sustainable>
          <StartBuildingSection
            id="startBuilding"
            title="Build the Future of Decentralized Infrastructure"
            body="Leverage our robust DePIN platform to create the next generation of applications. Whether you're building on our Polygon-based token or preparing for our upcoming ZK-Rollup L2, our tools and community are here to support you."
            cta="Start Building Now"
            ctaLink="/developers"
            cards={[
              {
                title: "Join Our Developer Community",
                body: "You're not building alone. Engage with the core BigFile team and fellow developers on Discord and our forums. Ask questions, propose new features, and participate in our upcoming Grants Program to get funding for your ideas.",
                link: "https://forum.thebigfile.com",
              },
              {
                title: "Core Concepts",
                body: "Start here. Understand the fundamental architecture of BigFile, from our dual-marketplace DePIN model for storage and AI, to our long-term vision for a unified ecosystem with the Polygon AggLayer.",
                link: "/docs/current/home",
              },
              {
                title: "Quickstart & SDKs",
                body: "From interacting with the BIG token on Polygon to preparing your first dApp for our L2 testnet. Find the tools, software development kits (SDKs), and code samples you need to get started in minutes.",
                link: "/samples",
              },
              {
                title: "The L2 & ZK-Rollup Tech",
                body: "Go deeper. Explore the technical specifications of our upcoming Layer 2, built on the Polygon CDK. Learn how ZK-proofs will be used to mathematically verify off-chain storage and computation.",
                link: "/ai",
              },
            ]}
          />
          

          <NewsletterSection formUrl="https://thebigfile.us14.list-manage.com/subscribe/post?u=c077aedaaac14cbbf2fb9522b&amp;id=38a1cc340f&amp;f_id=00647ae0f0">
            Sign up for email updates{" "}
            <span className="text-white-60">
              to keep up to date with the BigFile
            </span>
          </NewsletterSection>
        </div>
      </main>
      <SectionsBar />
    </Layout>
  );
}
