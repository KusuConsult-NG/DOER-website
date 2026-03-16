import SectionHeader from "@/components/UI/SectionHeader";
import styles from "@/components/Layout/ContentPage.module.css";
import { Circle } from "lucide-react";

export default function WhyDoerExistsPage() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>

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
