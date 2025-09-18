---
title: BigFile Architecture Overview
abstract: A comprehensive deep dive into the technical architecture of the BigFile network, a Layer 2 DePIN for storage and AI built with the Polygon CDK.
shareImage: /img/how-it-works/big-architecture.jpg
slug: core-big-overview
---

## 1. BigFile Overview: The Next-Generation Decentralized Infrastructure

BigFile is a **DePIN (Decentralized Physical Infrastructure Network)** architected to be the foundational cloud for a new generation of the internet. Our mission is to solve two of the biggest bottlenecks in the digital world: the centralization of data storage and the prohibitive cost of computational power.

We achieve this by building a **Layer 2 Appchain with the Polygon CDK**. This approach allows us to create a sovereign, high-performance ecosystem that leverages the battle-tested security of Ethereum, rather than attempting to build an isolated, insecure Layer 1 from scratch.

---

## 2. The Core Problem: Bottlenecks of the Centralized Web

The modern internet, despite its advancements, relies on a fragile foundation controlled by a handful of mega-corporations. This creates two fundamental problems:

* **Data Centralization:** Our data—from personal files to critical business records—is held hostage in centralized "walled gardens." This leads to censorship, privacy risks, and ever-increasing costs.
* **The AI Compute Monopoly:** The immense GPU power required for the AI revolution is a privilege, accessible only to those who can afford the exorbitant fees charged by centralized cloud providers. This stifles innovation and concentrates power.

BigFile was born to dismantle these barriers.

---

## 3. Our Solution: A Two-Sided DePIN Marketplace

BigFile solves these problems by creating a self-reinforcing economic flywheel—a two-sided marketplace that connects a global community of providers with users.

1.  **The Supply Side (Providers):** Our protocol uses `BIG` token incentives to encourage a permissionless, global network of individuals and data centers to contribute their idle disk space (**Storage Providers**) and GPU power (**Compute Providers**).
2.  **The Demand Side (Users):** This creates a vast, competitive pool of resources. This abundance of storage and compute attracts users—dApps, developers, AI researchers, and enterprises—who need a cost-effective, censorship-resistant alternative to traditional cloud services.
3.  **The Value Flow:** Users pay for services in `BIG` tokens. This creates organic demand for the token, and the revenue is used to further reward providers, funding a perpetual growth loop.

---

## 4. Technical Architecture: Why a Layer 2 ZK-Rollup?

Our technical stack is chosen for maximum security, scalability, and future-proofing.

### 4.1. Polygon CDK: A Modular and Sovereign Foundation

The BigFile Chain is a custom Layer 2 built with the **Polygon Chain Development Kit (CDK)**. This framework allows us to create a sovereign appchain with full control over our environment, including the ability to use `BIG` as the native gas token, while still benefiting from the vast Polygon and Ethereum ecosystems.

### 4.2. ZK-Rollups: The Guarantee of Mathematical Trust

"Don't trust, verify" is our core principle. We use **ZK-Rollup technology** to provide mathematical certainty.

* **Proof-of-Storage:** Storage Providers must periodically generate ZK-proofs to prove they are correctly storing the data entrusted to them.
* **Proof-of-Computation:** Compute Providers must generate a ZK-proof to prove they correctly executed a specific AI model or task.

This system of verifiable computation eliminates the need to trust anonymous providers, creating a truly trustless foundation for our marketplaces.

### 4.3. The AggLayer Vision: A Future of Interoperability

BigFile is not designed to be an isolated island. By building with the Polygon CDK, we are positioned to connect to Polygon's **Aggregation Layer (AggLayer)**. This will enable seamless, atomic communication and shared liquidity between BigFile and hundreds of other L2 chains, establishing us as a foundational infrastructure layer for the entire Web3 ecosystem.

---

## 5. The `BIG` Token: The Economic Engine of the Ecosystem

The `BIG` token is the multi-faceted utility asset that powers all operations within BigFile. Its role evolves with our phased strategy.

### 5.1. Phase 1: Economic Foundation on Polygon PoS

Initially, the `BIG` token launches as an **upgradeable ERC-20** on the Polygon PoS network with a sophisticated economic engine designed to build our community and treasury:
* **Autonomous Tokenomics:** A 2% tax on all transactions perpetually funds a DEX liquidity pool (**Auto-Liquidity**) and distributes passive income in USDC to holders (**USDC Reflection**).
* **Fair Launch Mechanics:** Built-in Anti-Whale and Anti-Bot rules ensure a fair and stable initial market.
* **Transparent Governance:** The contract's ownership is transferred to a **TimelockController**, ensuring all critical changes are public and time-delayed.

### 5.2. Phase 2: Native Asset on the BigFile Chain

When the BigFile L2 mainnet launches, `BIG` migrates to become the native asset of our sovereign network, unlocking its true utility:
* **Gas Token:** All transaction fees ("gas") on the BigFile L2 will be paid exclusively in `BIG`.
* **Staking Asset:** Providers will be required to stake `BIG` to offer services and secure the network, earning staking rewards.
* **Payment Currency:** `BIG` will be the sole currency for all storage and AI compute services.
* **Governance Right:** `BIG` will grant voting power in the **BigFile DAO**, giving the community full control over the protocol's future.

---

## 6. Conclusion: Building the Future, Together

BigFile represents a new frontier in Web3 infrastructure, combining the proven economic model of DePIN with the cutting-edge security of ZK-Rollups. We are building the tools for a more open, fair, and efficient digital world.

Join us in building the decentralized cloud of tomorrow.