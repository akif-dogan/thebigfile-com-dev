---
title: The BigFile Chain - Our L2 Settlement & Logic Layer
abstract: A deep dive into the architecture of the BigFile Chain, a sovereign ZK-Rollup powered by the Polygon CDK that serves as the ecosystem's core logic and settlement layer.
shareImage: /img/how-it-works/big-architecture.jpg
slug: l2-settlement-layer
---

## The BigFile Chain: Our L2 Settlement & Logic Layer

The heart of the BigFile ecosystem is the **BigFile Chain**, our custom-built, high-performance Layer 2 (L2) network. This is not just a set of smart contracts on a shared blockchain; it is a sovereign, application-specific chain (appchain) that serves as the "brain" for all protocol operations. All marketplace transactions, provider rewards, and core protocol logic execute here instantly and at a fraction of the cost of a traditional Layer 1.

This document details the architecture of our L2, explaining why we chose this path and how it provides a secure, scalable, and verifiable foundation for the future of decentralized infrastructure.

---

### Why a Layer 2? The Architecture of Choice

In designing BigFile, we faced a critical choice: build a new Layer 1 from scratch or leverage the security of an existing one. Building a new L1 requires bootstrapping a global network of validators, a process that is incredibly expensive and takes years to secure.

Instead, we chose the modern, more secure, and capital-efficient approach: building a **Layer 2 ZK-Rollup** with the **Polygon CDK**. This strategy provides the best of both worlds:

* **Ethereum-Grade Security:** Our L2 anchors its security directly to the Ethereum mainnet, the most secure and decentralized smart contract platform in the world.
* **Sovereignty & Customization:** As an appchain, we have full control over our execution environment. This allows us to implement custom features, manage network parameters, and, most importantly, use the `BIG` token as the native gas token for all transactions.
* **Extreme Scalability:** By processing transactions off-chain and only posting proofs to the L1, we can achieve thousands of transactions per second (TPS) at a minimal cost.

---

### The Engine: How Our ZK-Rollup Works

A ZK-Rollup is a sophisticated scaling solution that uses Zero-Knowledge cryptography to prove the validity of transactions without re-executing them on the L1. Here is the lifecycle of a transaction on the BigFile Chain:

#### 1. Transaction Execution (on L2)
- A user initiates a transaction (e.g., paying for storage, claiming rewards) on the BigFile L2. The transaction is processed instantly by the network's nodes.

#### 2. Batching & Ordering (by the Sequencer)
- A specialized node called the **Sequencer** collects thousands of these L2 transactions and orders them into a "batch."

#### 3. Proof Generation (by the Prover)
- Another specialized, high-performance node called the **Prover** takes this batch of transactions and performs the intense computational work of generating a **ZK-proof** (a ZK-SNARK or ZK-STARK). This tiny piece of data is a mathematical guarantee that every single transaction in the batch is valid and was executed correctly.

#### 4. State Update & Settlement (on L1)
- This ZK-proof, along with a summary of the state changes, is submitted to a Verifier smart contract on the **Ethereum mainnet**.
- The Ethereum contract's job is simple and incredibly cheap: it just verifies the mathematical validity of the proof. It doesn't need to re-run the thousands of individual transactions.
- Once the proof is verified, the state of the BigFile Chain is finalized and anchored to the immutable security of Ethereum.

---

### The Role of the `BIG` Token on the L2

In Phase 2, the `BIG` token evolves from a simple ERC-20 into the native lifeblood of the BigFile Chain:

* **Gas Token:** Every transaction on the L2—from a simple transfer to a complex storage agreement—will require a small amount of `BIG` to be paid as a gas fee.
* **Staking Asset:** To become a provider (storage or compute) or a validator/sequencer for the network, users will be required to stake `BIG` tokens. This secures the network and aligns incentives.
* **Governance:** Staked `BIG` will grant voting power in the BigFile DAO, allowing the community to govern the future of the protocol.

### The Benefits of Our L2 Approach

This architecture provides a set of powerful, compounding benefits that make BigFile a superior platform for DePIN.

* **Extreme Scalability & Low Cost:** Enables high-volume micro-transactions that are essential for a thriving storage and compute marketplace.
* **Ethereum-Grade Security:** Users and developers can build with the confidence that their assets and data are protected by the most secure blockchain in the world.
* **Verifiable by Design:** The use of ZK-proofs is not an afterthought; it's the core of our protocol. This allows us to build a truly trustless system where off-chain work is mathematically guaranteed.
* **Future-Proof Interoperability:** Our choice of the Polygon CDK positions us to seamlessly connect with the **AggLayer**, creating a future where BigFile is a foundational infrastructure layer for the entire Web3 ecosystem.