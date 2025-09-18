---
title: "The BigFile AI & Compute Marketplace"
abstract: "A deep dive into the architecture of our DePIN for computational power, explaining how users can rent on-demand GPU resources and how providers can earn BIG rewards."
shareImage: /img/how-it-works/canisters.jpg
slug: ai-compute-marketplace
---

## The BigFile AI & Compute Marketplace: A Global Supercomputer

Welcome to the technical deep dive into the BigFile AI & High-Performance Computing (HPC) Marketplace. Our mission is to democratize access to computational power by creating a global, permissionless, and radically cost-effective alternative to the centralized cloud monopoly.

This document explains the architecture of our DePIN (Decentralized Physical Infrastructure Network) for compute, the lifecycle of a compute job, and the roles of the participants within the ecosystem.

---

### 1. The Core Architecture: A Two-Sided DePIN Model

Our marketplace operates on a simple yet powerful two-sided model, orchestrated by smart contracts on the **BigFile L2 Chain**.

* **The Supply Side (Compute Providers):** Anyone with idle GPU hardware—from individual gamers and miners to large-scale data centers—can connect their resources to the network by running our lightweight node software. These providers form a global, distributed pool of computational power.
* **The Demand Side (Users):** Anyone who needs computational power—AI developers training models, VFX artists rendering scenes, scientists running simulations—can access this global pool on-demand.

The entire system is bound together by the **`BIG` token**, which is used for payments, provider rewards, and staking.

---

### 2. The Lifecycle of a Compute Job

Here’s how a typical job flows through the BigFile network from request to completion:

#### Step 1: Job Submission (by the User)
A user defines their computational needs through our dApp or SDK. This includes:
-   The task to be executed (e.g., a Docker container with an AI model and a dataset).
-   The required hardware specifications (e.g., minimum VRAM, GPU type).
-   The maximum price in `BIG` tokens they are willing to pay.

The user then submits this job to the marketplace smart contract, and the corresponding `BIG` payment is locked in an escrow.

#### Step 2: Scheduling & Provider Matching
A decentralized network of **Schedulers** (which can be run by anyone staking `BIG`) picks up the job request. The scheduler's role is to find an available **Compute Provider** in the network that matches the job's hardware requirements and has a competitive price. Once a match is found, the job is assigned to the provider.

#### Step 3: Off-Chain Execution & Proof Generation
The Compute Provider receives the job, executes the computation in a secure, isolated environment, and produces a result.

Crucially, alongside the result, the provider's node software also generates a **ZK-proof (Zero-Knowledge Proof)**. This is a mathematical proof that guarantees the computation was performed correctly according to the user's specifications.

#### Step 4: Verification & Settlement (On-Chain)
The provider submits both the job's result and the ZK-proof to our **Verifier smart contract** on the BigFile L2.
-   The contract performs a very fast and cheap calculation to verify the mathematical validity of the ZK-proof.
-   If the proof is valid, the contract automatically releases the `BIG` tokens from the escrow to the Compute Provider.
-   The user can then securely download their results, with the mathematical certainty that the work was done correctly and without tampering.

---

### 3. Key Benefits and Innovations

This architecture provides several powerful advantages over traditional systems:

* **Radical Cost Reduction:** By utilizing a global network of idle hardware, we eliminate the massive overhead of centralized data centers, reducing the cost of computation significantly.
* **Permissionless Access:** Anyone, anywhere in the world, can access high-performance computing without needing permission, credit checks, or long-term contracts.
* **Verifiable Trust:** The use of ZK-proofs for computation verification creates a trustless system. You don't need to trust the provider; you only need to trust the math. This is a revolutionary step beyond the "black box" nature of centralized cloud services.
* **Provider Sovereignty:** Providers have full control over their hardware and can choose which jobs to accept based on pricing and their own criteria. They earn directly from the protocol for their contributions.

The BigFile AI & Compute Marketplace is not just a cheaper alternative; it's a more open, fair, and trustworthy foundation for the next generation of artificial intelligence and high-performance computing.