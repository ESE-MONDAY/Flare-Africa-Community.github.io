---
title: "Mastering FTSOv2: Fast Price Feeds in 5 Minutes"
author: "Ese Monday"
date: "2026-01-06"
description: "Learn how to use FTSOv2 on Flare Network to access fast, secure price feeds. This beginner-friendly guide covers Feed IDs, oracle architecture, and a simple Solidity example for real-world dApps."
summary: "FTSOv2 is Flare Network’s high-performance oracle system for fast, decentralized price feeds. This article explains how it works and how to integrate finalized pricing data into smart contracts using official Feed IDs."
---

# **Mastering FTSOv2: Fast Price Feeds in 5 Minutes**



Reliable price data is the backbone of DeFi, gaming, prediction markets, and any application that reacts to real-world value. Flare’s **[FTSOv2 (Flare Time Series Oracle v2)](https://dev.flare.network/ftso/guides)** is designed to solve three major problems:

*  **Latency** — fast price updates
*  **Security** — decentralized, incentive-aligned providers
*  **Accuracy** — weighted median aggregation

Unlike traditional oracles that push prices on-chain at fixed intervals, **FTSOv2 separates data availability from consumption**, allowing contracts to access prices efficiently and securely.



## **FTSOv2 in One Minute (High-Level Overview)**

Here’s the mental model:

1. **Data providers** submit price data off-chain
2. Prices are **aggregated using a weighted median**
3. Results are **made available on-chain**
4. Smart contracts **pull the latest finalized price** when needed

>  Key shift in FTSOv2:
> Instead of every contract triggering oracle updates, **prices are already finalized and ready to consume**.



## **Key Concepts You Must Know**

### **1. Feeds Are Identified by [Feed IDs](https://dev.flare.network/ftso/feeds/)**

Each price feed (e.g., FLR/USD, BTC/USD) is identified by a **`bytes21 feedId`**, not a string.

This keeps lookups efficient and gas-optimized.



### **2. Finalized vs Non-Finalized Prices**

FTSOv2 exposes **finalized prices**, meaning:

* They are already aggregated
* They cannot be manipulated retroactively
* They are safe for on-chain logic

> ✅ Always use finalized prices for DeFi logic
> ❌ Never rely on raw or intermediate submissions





### **3. Pull-Based Consumption**

Your contract **does not request a price update**.
Instead, it reads the latest available value from the oracle contract.

This is why FTSOv2 is:

* Faster
* Cheaper
* Easier to integrate





## **The Core Contract You’ll Use**

You’ll interact with the **FTSOv2 Price Feed interface**, exposed via a registry.

Conceptually:

```solidity
IFlareContractRegistry → IFtsoV2PriceFeed
```

You:

1. Ask the registry for the oracle address
2. Call `getFeedById()`






## **Minimal Solidity Example (Copy-Paste Ready)**

Below is a **simple contract that reads a price from FTSOv2**.

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

interface IFtsoV2PriceFeed {
    function getFeedById(bytes21 _feedId)
        external
        view
        returns (
            uint256 value,
            int8 decimals,
            uint64 timestamp
        );
}

contract PriceReader {
    IFtsoV2PriceFeed public priceFeed;

    constructor(address _priceFeed) {
        priceFeed = IFtsoV2PriceFeed(_priceFeed);
    }

    function getPrice(bytes21 feedId) external view returns (uint256, int8) {
        (uint256 value, int8 decimals, ) = priceFeed.getFeedById(feedId);
        return (value, decimals);
    }
}
```






### How to Interpret the Result

If you get:

* `value = 250000`
* `decimals = -2`

Then the real price is:

```
250000 × 10⁻² = 2500.00
```

> 💡 Always apply decimals — never assume 8 or 18.





## **Where Do Feed IDs Come From?**

[Feed IDs](https://dev.flare.network/ftso/feeds/) are **published by Flare** and are chain-specific.

Typical examples:

* FLR / USD
* BTC / USD
* ETH / USD

> 💡 Best practice:
> Define feed IDs as `constant` values in your contract to avoid mistakes.






## **Gas & Performance Considerations**

FTSOv2 is optimized for:

* 🟢 **Low gas reads**
* 🟢 **No per-request updates**
* 🟢 **Deterministic results**

Still, you should:

* Cache prices if used multiple times in one transaction
* Avoid reading prices inside tight loops





## **Security Best Practices**

Before using FTSOv2 in production:

### ✅ Always Check Timestamp

Ensure the price is recent enough for your use case.

```solidity
require(block.timestamp - timestamp < MAX_DELAY, "Stale price");
```

### ✅ Avoid Price Assumptions

Different feeds use different decimals.

### ❌ Don’t Use for Instant Arbitrage

FTSOv2 is finalized data — not designed for ultra-high-frequency trading.






## **Common Use Cases**

FTSOv2 is ideal for:

*  Lending & borrowing protocols
*  On-chain games with real-world pricing
*  Synthetic assets
*  Risk scoring & liquidation logic
*  Cross-chain value references








## **FTSOv2 vs Traditional Oracles (Quick Comparison)**

| Feature      | Traditional Oracles | FTSOv2      |
| ------------ | ------------------- | ----------- |
| Update model | Push                | Pull        |
| Gas cost     | Higher              | Lower       |
| Latency      | Variable            | Low         |
| Aggregation  | Often opaque        | Transparent |
| Finalization | Sometimes delayed   | Guaranteed  |






## **What You’ve Learned (5-Minute Recap)**

✅ What FTSOv2 is

✅ Why it’s fast and secure

✅ How price feeds are identified

✅ How to read prices in Solidity

✅ Best practices for production use







## **What to Learn Next**

To go deeper:

* Using **FTSOv2 with Hardhat tests**
* Combining FTSOv2 with **liquidation logic**
* Building a **frontend price dashboard**
* Exploring **delegation & data providers**







## **Final Thoughts**

FTSOv2 is one of Flare’s strongest primitives. Once you understand that prices are **already finalized and ready to consume**, integration becomes simple, fast, and safe.

If you can read from a contract, you can use FTSOv2.


