---
title: The BIG Token Economy
abstract: A deep dive into the tokenomics of the BIG token, its dual-phase lifecycle, and its role as the economic engine for the BigFile ecosystem.
shareImage: /img/how-it-works/tokenomics.600.jpg
slug: tokenomics
---

## The `BIG` Token: The Economic Engine of the BigFile Ecosystem

The `BIG` token is the multi-faceted utility asset that powers all operations, incentivizes participation, and governs the future of the BigFile network. Our tokenomics are built on a pragmatic, two-phased strategy designed for immediate community building in Phase 1 and deep, sustainable utility in Phase 2.

---

### Phase 1: The Autonomous ERC-20 on Polygon PoS

Our journey begins with the `BIG` token launching as a sophisticated, upgradeable ERC-20 on the robust and highly liquid Polygon PoS network. This initial phase is designed to build a strong community, establish a stable economic base, and fund the development of our Layer 2.

#### The Economic Engine: The 2% Transaction Tax

The core of the Phase 1 economy is a 2% universal tax applied to all `BIG` token transactions (buys, sells, and transfers). This tax is not a fee that disappears; it is the fuel that powers a self-sustaining economic flywheel with two key mechanisms:

**1. The Auto-Liquidity Mechanism (1%):**
* **What it is:** Half of every tax (1%) is sent to the smart contract's holding address. When this accumulated amount reaches a predefined threshold, the function `_addLiquidityAutomatically` is triggered.
* **How it works:** The function takes the accumulated `BIG` tokens, swaps half for `MATIC` (POL) on a DEX, and pairs the remaining `BIG` with the newly acquired `MATIC` to create a new Liquidity Pool (LP) token. These LP tokens are then sent to a burn address (`0x0...dEaD`), permanently locking them and adding to the token's price floor.
* **Why it matters:** This creates a constantly rising liquidity floor, ensuring deeper markets, greater price stability, and reduced volatility over time. It is a perpetual, automated investment in the project's own health.

**2. The USDC Reflection Mechanism (1%):**
* **What it is:** The other half of every tax (1%) is allocated to reward long-term holders.
* **How it works:** When the accumulated reflection amount reaches its threshold, the `_distributeReflections` function is triggered. It swaps the collected `BIG` tokens for `USDC` (or another stablecoin) and distributes this `USDC` proportionally to all `BIG` token holders. Holders can then claim their accumulated USDC rewards through our dApp dashboard.
* **Why it matters:** This provides a direct, tangible, and stable passive income stream to our community, rewarding long-term belief in the project over short-term speculation.

#### Fair Launch & Security Mechanics

The Phase 1 contract is built with multiple layers of protection:
* **Anti-Whale:** Limits on maximum transaction and wallet sizes prevent market manipulation.
* **Anti-Bot:** A transfer cooldown mechanism mitigates the impact of sniper bots at launch.
* **Upgradeable & Secure:** The contract is a UUPS proxy, secured with `ReentrancyGuard`, `Pausable` functions, and its ownership is transferred to a `TimelockController` for transparent governance.

---

### Phase 2: The Native Coin of the BigFile L2 Chain

The ultimate purpose of the `BIG` token is realized with the launch of the BigFile Chain, our sovereign Layer 2 network. The ERC-20 `BIG` token will be seamlessly migrated via a secure 1:1 bridge to become the native coin of this new, high-performance ecosystem, unlocking its true utility.

#### Core Utilities on the L2:

* **Gas Token: The Fuel for Transactions**
    Every single transaction on the BigFile L2—from a user uploading a file to a developer deploying a smart contract—will require `BIG` to be paid as a gas fee. This creates a fundamental and perpetual demand for the token.

* **Staking Asset: The Pillar of Security**
    To participate in the network as a provider (Storage or Compute) or as a validator/sequencer, operators will be required to stake a significant amount of `BIG` tokens. This stake acts as a security deposit, ensures honest behavior, and allows them to earn staking rewards from the protocol.

* **Payment Currency: The Medium of Exchange**
    `BIG` will be the exclusive currency for all services within the ecosystem. Users will pay `BIG` to store data and rent GPU power. This revenue is then distributed to the providers, creating a closed-loop, self-sustaining economy.

* **Governance Right: The Voice of the Community**
    Staked `BIG` will grant voting power in the BigFile DAO. Holders will have direct control over the protocol's future, including treasury spending, technical upgrades, and strategic direction.

---
### Supply & Distribution

The `BIG` token has a fixed, non-inflatable total supply of **200,000,000** tokens. The distribution is strategically allocated as follows:

* **Ecosystem & Treasury:** 35%
* **Staking & Provider Rewards:** 20%
* **Team & Advisors:** 15% (Subject to a 24-month vesting schedule)
* **Strategic Round:** 10%
* **Liquidity & Market Making:** 10%
* **Legacy Holder Swap & Airdrop:** 10%

This balanced allocation ensures we have the resources for long-term development and growth while empowering our community and fairly rewarding all participants.