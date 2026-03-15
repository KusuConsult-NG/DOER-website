import SectionHeader from "@/components/UI/SectionHeader";
import styles from "@/components/Layout/ContentPage.module.css";
import { Circle } from "lucide-react";

export default function WhatMakesDoerNewPage() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>

                <SectionHeader
                    title="What Makes DOER New"
                    subtitle="A new category of wallet infrastructure."
                />

                <div className={styles.section}>
                    <p className={styles.text}>
                        Many Web3 projects claim innovation, but most improvements fall into familiar patterns: faster transactions, better interfaces, or additional integrations.
                    </p>
                    <p className={styles.text} style={{ marginTop: 20 }}>
                        DOER is different because it changes how authority, automation, and execution are structured at the wallet level. Instead of focusing only on storage or transaction signing, DOER introduces a policy-driven architecture that allows wallets to enforce programmable rules.
                    </p>
                    <p className={styles.text} style={{ marginTop: 20 }}>
                        This creates a new category of infrastructure: <span style={{ fontWeight: 600, color: "#fff" }}>the Intent Automation Wallet.</span>
                    </p>
                </div>

                <div className={styles.section}>
                    <SectionHeader title="The Problem With Current Wallets" />
                    <p className={styles.text}>
                        Most crypto wallets today follow the same basic design. They allow users to:
                    </p>
                    <div style={{ marginLeft: 10, marginTop: 10, marginBottom: 20 }}>
                        <BulletPoint text="store assets" />
                        <BulletPoint text="sign transactions" />
                        <BulletPoint text="approve smart contract interactions" />
                    </div>
                    <p className={styles.text}>
                        While this model works for simple transfers, it struggles with modern Web3 workflows. Users now interact with staking protocols, DeFi strategies, governance systems, NFT platforms, and automated services.
                    </p>
                    <p className={styles.text} style={{ marginTop: 20 }}>
                        The wallet still behaves like a manual signing tool, even when users perform the same actions repeatedly. To reduce friction, many tools request unlimited permissions, which introduces risk.
                    </p>
                    <p className={styles.text} style={{ marginTop: 20 }}>
                        The ecosystem currently forces a tradeoff between: Security through constant manual approvals or Convenience through broad permissions. Neither approach solves the underlying problem.
                    </p>
                </div>

                <div className={styles.section}>
                    <SectionHeader title="The DOER Innovation" />
                    <p className={styles.text}>
                        DOER introduces a system where wallets enforce programmable authority rules. Instead of approving transactions individually or granting open-ended permissions, users define:
                    </p>
                    <div style={{ marginTop: 20 }}>
                        <Definition term="Intent" definition="The outcome they want." />
                        <Definition term="Policies" definition="The boundaries under which that outcome may occur." />
                        <Definition term="Mandates" definition="Temporary authority granted to execute those actions." />
                    </div>
                    <p className={styles.text} style={{ marginTop: 20 }}>
                        Every automated action must pass these constraints before execution. Automation becomes possible without removing user control.
                    </p>
                </div>

                <div className={styles.section}>
                    <SectionHeader title="Four Innovations Introduced by DOER" />
                    <p className={styles.text}>
                        DOER combines several ideas that previously existed separately across different parts of the Web3 ecosystem. Bringing them together inside the wallet layer creates a new architecture.
                    </p>

                    <h3 className={styles.stepTitle} style={{ marginTop: 40, marginBottom: 16 }}>1. Intent-Based Wallet Interaction</h3>
                    <p className={styles.text}>
                        Most wallets ask users to approve actions transaction by transaction. DOER allows users to describe desired outcomes instead. Examples include:
                    </p>
                    <div style={{ marginLeft: 10, marginTop: 10, marginBottom: 20 }}>
                        <BulletPoint text="Claim staking rewards automatically." />
                        <BulletPoint text="Execute a swap when certain conditions are met." />
                        <BulletPoint text="Consolidate small token balances." />
                    </div>
                    <p className={styles.text}>
                        These intents are converted into structured policies that the protocol can enforce. The user defines the goal. The protocol ensures execution stays within limits.
                    </p>

                    <h3 className={styles.stepTitle} style={{ marginTop: 40, marginBottom: 16 }}>2. Policy-Enforced Automation</h3>
                    <p className={styles.text}>
                        Automation is not new in Web3. What is new is automation constrained by user-defined rules at the wallet level. Policies can restrict:
                    </p>
                    <div style={{ marginLeft: 10, marginTop: 10, marginBottom: 20 }}>
                        <BulletPoint text="Allowed contracts" />
                        <BulletPoint text="Maximum transaction value" />
                        <BulletPoint text="Gas limits" />
                        <BulletPoint text="Execution frequency" />
                        <BulletPoint text="Expiration times" />
                    </div>
                    <p className={styles.text}>
                        Every automated action must pass policy validation on-chain. Automation cannot expand beyond those boundaries.
                    </p>

                    <h3 className={styles.stepTitle} style={{ marginTop: 40, marginBottom: 16 }}>3. Transaction Risk Intelligence</h3>
                    <p className={styles.text}>
                        A major usability problem in Web3 is the lack of clarity around transaction approvals. Users frequently sign transactions without understanding the permissions they grant.
                    </p>
                    <p className={styles.text} style={{ marginTop: 20 }}>
                        DOER introduces a transaction risk analysis layer that evaluates:
                    </p>
                    <div style={{ marginLeft: 10, marginTop: 10, marginBottom: 20 }}>
                        <BulletPoint text="Approval size" />
                        <BulletPoint text="Contract verification status" />
                        <BulletPoint text="Contract age" />
                        <BulletPoint text="Interaction patterns" />
                    </div>
                    <p className={styles.text}>Before signing, users see a clear preview. Example:</p>
                    <div style={{ backgroundColor: "rgba(255,255,255,0.05)", padding: 16, borderRadius: 8, margin: "16px 0", fontFamily: "monospace", color: "rgba(255,255,255,0.8)" }}>
                        Asset: USDC<br />
                        Spending Limit: Unlimited<br />
                        Contract Risk Level: Medium
                    </div>
                    <p className={styles.text}>This improves transparency and reduces accidental approvals.</p>

                    <h3 className={styles.stepTitle} style={{ marginTop: 40, marginBottom: 16 }}>4. On-Chain Work and Reputation</h3>
                    <p className={styles.text}>
                        Wallets traditionally focus only on asset storage. DOER expands the wallet into a participation platform. Projects and DAOs can publish tasks directly on-chain.
                    </p>
                    <p className={styles.text} style={{ marginTop: 20 }}>Users can:</p>
                    <div style={{ marginLeft: 10, marginTop: 10, marginBottom: 20 }}>
                        <BulletPoint text="Discover tasks" />
                        <BulletPoint text="Submit work" />
                        <BulletPoint text="Receive rewards" />
                        <BulletPoint text="Build a verifiable work history" />
                    </div>
                    <p className={styles.text}>
                        Over time, wallets accumulate a reputation record tied to on-chain activity. This turns the wallet into a portable Web3 work profile.
                    </p>
                </div>

                <div className={styles.section}>
                    <SectionHeader title="Why Combining These Ideas Matters" />
                    <p className={styles.text}>
                        Each of these components exists somewhere in the ecosystem. But they are usually fragmented.
                    </p>
                    <div style={{ marginLeft: 10, marginTop: 10, marginBottom: 20 }}>
                        <BulletPoint text="Automation tools exist separately from wallets." />
                        <BulletPoint text="Task marketplaces exist separately from identity." />
                        <BulletPoint text="Transaction safety tools exist separately from execution." />
                    </div>
                    <p className={styles.text}>
                        DOER integrates them into one coordinated architecture. The result is a wallet that can:
                    </p>
                    <div style={{ marginLeft: 10, marginTop: 10, marginBottom: 20 }}>
                        <BulletPoint text="Enforce execution rules" />
                        <BulletPoint text="Automate safe actions" />
                        <BulletPoint text="Protect users from risky approvals" />
                        <BulletPoint text="Enable participation and earning" />
                    </div>
                    <p className={styles.text}>This creates a more complete interaction model for Web3.</p>
                </div>

                <div className={styles.section}>
                    <SectionHeader title="A New Category: Intent Automation Wallets" />
                    <p className={styles.text}>
                        The long-term implication of this architecture is the emergence of a new wallet category. Instead of passive signing tools, wallets can become programmable coordination systems.
                    </p>
                    <p className={styles.text} style={{ marginTop: 20 }}>Users define:</p>
                    <div style={{ marginLeft: 10, marginTop: 10, marginBottom: 20 }}>
                        <BulletPoint text="What should happen" />
                        <BulletPoint text="Under what conditions" />
                        <BulletPoint text="Within what limits" />
                    </div>
                    <p className={styles.text}>The protocol ensures that those rules are followed.</p>
                </div>

                <div className={styles.section}>
                    <SectionHeader title="Why This Matters for Web3" />
                    <p className={styles.text}>
                        As decentralized ecosystems grow, interactions become more complex. Users need tools that reduce friction without introducing new risk.
                    </p>
                    <p className={styles.text} style={{ marginTop: 20 }}>Intent-driven wallets allow people to:</p>
                    <div style={{ marginLeft: 10, marginTop: 10, marginBottom: 20 }}>
                        <BulletPoint text="Automate routine interactions" />
                        <BulletPoint text="Maintain strict control over permissions" />
                        <BulletPoint text="Understand transaction risk before signing" />
                        <BulletPoint text="Participate in on-chain ecosystems more easily" />
                    </div>
                    <p className={styles.text}>
                        This shifts the wallet from a simple storage interface into a programmable interface for decentralized systems.
                    </p>
                </div>

                <div style={{ padding: "40px 0", borderTop: "1px solid rgba(255,255,255,0.1)", marginTop: 40 }}>
                    <h3 className={styles.stepTitle} style={{ marginBottom: 16 }}>The DOER Paradigm</h3>
                    <p style={{ fontSize: 18, color: "rgba(255,255,255,0.6)", fontStyle: "italic", lineHeight: 1.6, whiteSpace: "pre-line" }}>
                        &quot;DOER introduces the Intent Automation Wallet, a new architecture where users define goals, enforce execution policies, and safely automate blockchain interactions while maintaining full control over their assets.&quot;
                    </p>
                </div>

            </div>
        </div>
    );
}

function BulletPoint({ text }: { text: string }) {
    return (
        <div className={styles.bulletPoint}>
            <Circle size={6} className={styles.bulletIcon} style={{ fill: "rgba(255,255,255,0.7)", color: "transparent", marginTop: 8 }} />
            <p className={styles.text}>{text}</p>
        </div>
    );
}

function Definition({ term, definition }: { term: string; definition: string }) {
    return (
        <div className={styles.definition}>
            <h4 className={styles.term}>{term}</h4>
            <p className={styles.text}>{definition}</p>
        </div>
    );
}
