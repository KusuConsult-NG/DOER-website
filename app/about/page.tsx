import SectionHeader from "@/components/UI/SectionHeader";
import styles from "./page.module.css";
import { Circle } from "lucide-react";

export default function AboutPage() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>

                {/* --- WHY DOER DAPP EXISTS SECTION --- */}

                <SectionHeader
                    title="Why DOER DAPP Exists"
                    subtitle="The wallet problem Web3 never truly solved."
                />

                <div className={styles.section}>
                    <p className={styles.text}>
                        Crypto wallets were originally designed for a simple task: sign transactions and hold keys.
                    </p>
                    <p className={styles.text} style={{ marginTop: 20 }}>
                        Over time, the ecosystem evolved. Users began interacting with decentralized exchanges, staking protocols, NFT markets, governance systems, and complex DeFi strategies. But wallets never fundamentally evolved with this complexity. They remained transaction signers, not coordination systems.
                    </p>
                    <p className={styles.text} style={{ marginTop: 20 }}>
                        This created a structural problem in how people interact with Web3.
                    </p>
                </div>

                <div className={styles.section}>
                    <SectionHeader title="The Two Broken Models of Web3 Interaction" />
                    <p className={styles.text}>Today, most users are forced into one of two models.</p>

                    <h3 className={styles.stepTitle} style={{ marginTop: 24, marginBottom: 16 }}>Model 1 — Manual Control</h3>
                    <p className={styles.text}>Every action requires a new approval.</p>
                    <div style={{ marginLeft: 10, marginTop: 10, marginBottom: 20 }}>
                        <BulletPoint text="You approve a swap." />
                        <BulletPoint text="You approve a staking claim." />
                        <BulletPoint text="You approve a governance action." />
                        <BulletPoint text="Then you approve the same thing again the next day." />
                    </div>
                    <p className={styles.text}>
                        This model is secure but inefficient. Users spend time approving repetitive actions that could be safely automated.
                    </p>

                    <h3 className={styles.stepTitle} style={{ marginTop: 24, marginBottom: 16 }}>Model 2 — Unlimited Permissions</h3>
                    <p className={styles.text}>To avoid constant approvals, many tools request broad permissions. These permissions often include:</p>
                    <div style={{ marginLeft: 10, marginTop: 10, marginBottom: 20 }}>
                        <BulletPoint text="Unlimited token approvals" />
                        <BulletPoint text="Long-lived contract access" />
                        <BulletPoint text="Automation with few restrictions" />
                    </div>
                    <p className={styles.text}>
                        This model improves convenience but introduces risk. Users may forget which contracts have permission. Permissions may remain active indefinitely. A compromised contract can cause unexpected losses.
                    </p>
                </div>

                <div className={styles.section}>
                    <SectionHeader title="The Missing Layer" />
                    <p className={styles.text}>
                        Both models are flawed because they lack something fundamental: <span style={{ fontWeight: 600, color: "#fff" }}>Bounded authority.</span>
                    </p>
                    <p className={styles.text} style={{ marginTop: 20 }}>What users actually want is simple. They want to say:</p>
                    <div style={{ paddingLeft: 16, borderLeft: "2px solid rgba(139, 92, 246, 0.5)", margin: "16px 0" }}>
                        <p className={styles.text} style={{ fontStyle: "italic", color: "rgba(255,255,255,0.8)" }}>“Allow this action to happen, but only within limits I define.”</p>
                    </div>
                    <p className={styles.text}>
                        Until now, most wallets could not express this idea clearly. You could either approve a transaction once, or approve a contract forever. There was no middle ground.
                    </p>
                </div>

                <div className={styles.section}>
                    <SectionHeader title="The DOER DAPP Approach" />
                    <p className={styles.text}>
                        DOER DAPP introduces a new interaction model based on intent and policy enforcement. Instead of signing transactions one by one, users define:
                    </p>
                    <div style={{ marginTop: 20 }}>
                        <Definition term="Intent" definition="What outcome they want." />
                        <Definition term="Conditions" definition="When the action is allowed to occur." />
                        <Definition term="Limits" definition="How much authority automation receives." />
                    </div>
                    <p className={styles.text} style={{ marginTop: 20 }}>
                        Once defined, these rules are enforced automatically. Automation becomes possible without giving away control.
                    </p>
                </div>

                <div className={styles.section}>
                    <SectionHeader title="From Transaction Signing to Policy Wallets" />
                    <p className={styles.text}>
                        Traditional wallets act as passive tools. They wait for the user to sign each transaction.
                    </p>
                    <p className={styles.text} style={{ marginTop: 20 }}>
                        DOER DAPP introduces the concept of a <span style={{ fontWeight: 600, color: "#fff" }}>policy-driven wallet.</span> A wallet that can enforce rules such as:
                    </p>
                    <div style={{ marginLeft: 10, marginTop: 10, marginBottom: 20 }}>
                        <BulletPoint text="Claim staking rewards daily but never exceed a gas limit." />
                        <BulletPoint text="Swap tokens only on approved contracts." />
                        <BulletPoint text="Allow execution only within a defined time window." />
                    </div>
                    <p className={styles.text}>Every automated action must satisfy those rules.</p>
                </div>

                <div className={styles.section}>
                    <SectionHeader title="Transparency Before Signing" />
                    <p className={styles.text}>
                        Another major problem with current wallets is lack of clarity. Many users sign transactions without fully understanding what they allow.
                    </p>
                    <p className={styles.text} style={{ marginTop: 20 }}>
                        DOER DAPP introduces <span style={{ fontWeight: 600, color: "#fff" }}>transaction risk previews.</span> Before signing, users see clear explanations such as:
                    </p>
                    <div style={{ backgroundColor: "rgba(255,255,255,0.05)", padding: 16, borderRadius: 8, margin: "16px 0", fontFamily: "monospace", color: "rgba(255,255,255,0.8)" }}>
                        Asset: USDC<br />
                        Spending Limit: Unlimited<br />
                        Contract Risk Level: Medium
                    </div>
                    <p className={styles.text}>This allows users to make informed decisions instead of guessing.</p>
                </div>

                <div className={styles.section}>
                    <SectionHeader title="Wallets Should Also Enable Participation" />
                    <p className={styles.text}>
                        Most wallets today only focus on asset management. But Web3 is not just about holding tokens. It is about participating in decentralized systems.
                    </p>
                    <p className={styles.text} style={{ marginTop: 20 }}>
                        DOER DAPP introduces a new capability: <span style={{ fontWeight: 600, color: "#fff" }}>on-chain work.</span>
                    </p>
                    <p className={styles.text} style={{ marginTop: 20 }}>
                        Projects and DAOs can publish tasks that users complete directly from their wallet. Examples include:
                    </p>
                    <div style={{ marginLeft: 10, marginTop: 10, marginBottom: 20 }}>
                        <BulletPoint text="Testing new applications" />
                        <BulletPoint text="Participating in governance" />
                        <BulletPoint text="Completing community tasks" />
                        <BulletPoint text="Contributing development work" />
                    </div>
                    <p className={styles.text}>
                        Once verified, rewards are distributed on-chain. Over time, users build a reputation record tied to their wallet. Your wallet becomes more than storage. It becomes a record of your activity and contribution in Web3.
                    </p>
                </div>

                <div className={styles.section}>
                    <SectionHeader title="A New Category of Wallet" />
                    <p className={styles.text}>
                        DOER DAPP introduces a new category of infrastructure: <span style={{ fontWeight: 600, color: "#fff" }}>Intent-driven automation wallets.</span>
                    </p>
                    <p className={styles.text} style={{ marginTop: 20 }}>
                        Instead of simply signing transactions, the wallet becomes a system that can:
                    </p>
                    <div style={{ marginLeft: 10, marginTop: 10, marginBottom: 20 }}>
                        <BulletPoint text="Enforce execution policies" />
                        <BulletPoint text="Automate safe on-chain actions" />
                        <BulletPoint text="Provide transaction risk visibility" />
                        <BulletPoint text="Enable users to earn through participation" />
                    </div>
                    <p className={styles.text}>This shifts the wallet from a passive tool to a programmable Web3 agent.</p>
                </div>

                <div className={styles.section}>
                    <SectionHeader title="Why This Matters" />
                    <p className={styles.text}>
                        Web3 will continue to grow in complexity. More protocols, more automation, more coordination between users and applications.
                    </p>
                    <p className={styles.text} style={{ marginTop: 20 }}>
                        Without better permission systems, users will continue to face the same tradeoff: Security or convenience.
                    </p>
                    <p className={styles.text} style={{ margin: "20px 0", fontWeight: 600, color: "#fff" }}>
                        DOER DAPP exists to remove that tradeoff.
                    </p>
                    <p className={styles.text}>Automation should not require surrendering control.</p>
                </div>

                <div className={styles.section}>
                    <SectionHeader title="The Long-Term Vision" />
                    <p className={styles.text}>
                        The long-term vision for DOER DAPP is simple. A future where users can interact with blockchain systems by defining what they want to happen, not by manually approving every step.
                    </p>
                    <p className={styles.text} style={{ marginTop: 20 }}>Where authority is:</p>
                    <div style={{ marginLeft: 10, marginTop: 10, marginBottom: 20 }}>
                        <BulletPoint text="explicit" />
                        <BulletPoint text="limited" />
                        <BulletPoint text="revocable" />
                        <BulletPoint text="enforceable" />
                    </div>
                    <p className={styles.text}>
                        And where wallets become intelligent coordination tools rather than simple signing interfaces.
                    </p>
                </div>

                <div style={{ padding: "40px 0", borderTop: "1px solid rgba(255,255,255,0.1)", marginTop: 40 }}>
                    <h3 className={styles.stepTitle} style={{ marginBottom: 16 }}>The Core Vision</h3>
                    <p style={{ fontSize: 18, color: "rgba(255,255,255,0.6)", fontStyle: "italic", lineHeight: 1.6, whiteSpace: "pre-line" }}>
                        &quot;DOER DAPP exists to transform the wallet from a transaction signer into a policy-driven execution system for safe on-chain automation and participation.&quot;
                    </p>
                </div>

                <div style={{ borderTop: "2px solid rgba(255,255,255,0.1)", margin: "60px 0" }} />

                {/* --- WHAT MAKES DOER DAPP NEW SECTION --- */}

                <SectionHeader
                    title="What Makes DOER DAPP New"
                    subtitle="A new category of wallet infrastructure."
                />

                <div className={styles.section}>
                    <p className={styles.text}>
                        Many Web3 projects claim innovation, but most improvements fall into familiar patterns: faster transactions, better interfaces, or additional integrations.
                    </p>
                    <p className={styles.text} style={{ marginTop: 20 }}>
                        DOER DAPP is different because it changes how authority, automation, and execution are structured at the wallet level. Instead of focusing only on storage or transaction signing, DOER DAPP introduces a policy-driven architecture that allows wallets to enforce programmable rules.
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
                    <SectionHeader title="The DOER DAPP Innovation" />
                    <p className={styles.text}>
                        DOER DAPP introduces a system where wallets enforce programmable authority rules. Instead of approving transactions individually or granting open-ended permissions, users define:
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
                    <SectionHeader title="Four Innovations Introduced by DOER DAPP" />
                    <p className={styles.text}>
                        DOER DAPP combines several ideas that previously existed separately across different parts of the Web3 ecosystem. Bringing them together inside the wallet layer creates a new architecture.
                    </p>

                    <h3 className={styles.stepTitle} style={{ marginTop: 40, marginBottom: 16 }}>1. Intent-Based Wallet Interaction</h3>
                    <p className={styles.text}>
                        Most wallets ask users to approve actions transaction by transaction. DOER DAPP allows users to describe desired outcomes instead. Examples include:
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
                        DOER DAPP introduces a transaction risk analysis layer that evaluates:
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
                        Wallets traditionally focus only on asset storage. DOER DAPP expands the wallet into a participation platform. Projects and DAOs can publish tasks directly on-chain.
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
                        DOER DAPP integrates them into one coordinated architecture. The result is a wallet that can:
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
                    <h3 className={styles.stepTitle} style={{ marginBottom: 16 }}>The DOER DAPP Paradigm</h3>
                    <p style={{ fontSize: 18, color: "rgba(255,255,255,0.6)", fontStyle: "italic", lineHeight: 1.6, whiteSpace: "pre-line" }}>
                        &quot;DOER DAPP introduces the Intent Automation Wallet, a new architecture where users define goals, enforce execution policies, and safely automate blockchain interactions while maintaining full control over their assets.&quot;
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
