import SectionHeader from "@/components/UI/SectionHeader";
import styles from "@/components/Layout/ContentPage.module.css";
import { Circle, ArrowDown } from "lucide-react";

export default function ProtocolOverviewPage() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <SectionHeader
                    title="Protocol Overview"
                    subtitle="A high-level architectural overview of DOER DAPP for engineers, protocol designers, and investors."
                />

                <div className={styles.section}>
                    <p className={styles.text}>
                        This page summarizes how the system works as a protocol. It focuses on the interaction between the major components that allow DOER to support intent-driven automation, policy enforcement, transaction safety, and on-chain work.
                    </p>
                    <p className={styles.text} style={{ marginTop: 20 }}>
                        <span className={styles.heroHighlight}>The goal is simple:</span><br />
                        Enable programmable wallet behavior without sacrificing user sovereignty.
                    </p>
                </div>

                <div className={styles.section}>
                    <SectionHeader title="Core Idea" />
                    <p className={styles.text}>
                        Most wallets only perform one function: Sign transactions.
                    </p>
                    <p className={styles.text}>
                        DOER introduces a programmable layer on top of wallets that allows users to define:
                    </p>
                    <BulletPoint text="what outcomes they want" />
                    <BulletPoint text="when those outcomes are allowed" />
                    <BulletPoint text="how much authority automation receives" />
                    <p className={styles.text} style={{ marginTop: 20 }}>
                        The protocol enforces those rules automatically. Instead of interacting with Web3 transaction-by-transaction, users define intents and policies that govern future actions.
                    </p>
                </div>

                <div className={styles.section}>
                    <SectionHeader title="System Architecture" />
                    <p className={styles.text}>At a high level, DOER consists of five major layers:</p>
                    <div style={{ marginLeft: 10, marginBottom: 20 }}>
                        <BulletPoint text="User Wallet" />
                        <BulletPoint text="Intent Engine" />
                        <BulletPoint text="Policy Layer" />
                        <BulletPoint text="Executor Network" />
                        <BulletPoint text="Protocol Modules" />
                    </div>
                    <p className={styles.text}>Each layer has clearly defined responsibilities.</p>

                    <h3 className={styles.stepTitle} style={{ marginTop: 30, marginBottom: 16 }}>Architecture Flow</h3>

                    <div className={styles.flowContainer} style={{ backgroundColor: "rgba(255,255,255,0.02)", padding: 24, borderRadius: 12, border: "1px solid rgba(255,255,255,0.05)" }}>
                        <FlowStep text="User Wallet" />
                        <FlowArrow />
                        <FlowStep text="Intent Engine" />
                        <FlowArrow />
                        <FlowStep text="DoerPolicy (On-chain rules)" />
                        <FlowArrow />
                        <FlowStep text="Executor Network" />
                        <FlowArrow />
                        <FlowStep text="Protocol Validation" />
                        <FlowArrow />
                        <FlowStep text="Execution" />
                    </div>
                    <p className={styles.text} style={{ marginTop: 16, fontStyle: "italic", color: "rgba(255,255,255,0.6)" }}>
                        No action can occur unless it passes policy validation on-chain.
                    </p>
                </div>

                <div className={styles.section}>
                    <SectionHeader title="Layer 1 — User Wallet" />
                    <p className={styles.text}>
                        The wallet is the primary interface for interacting with DOER. The mobile application provides:
                    </p>
                    <BulletPoint text="wallet management" />
                    <BulletPoint text="intent creation interface" />
                    <BulletPoint text="automation configuration" />
                    <BulletPoint text="transaction risk preview" />
                    <BulletPoint text="task marketplace access" />
                    <p className={styles.text} style={{ marginTop: 20 }}>
                        Importantly, the wallet never transfers custody of user funds. Users remain the sole owners of their assets.
                    </p>
                </div>

                <div className={styles.section}>
                    <SectionHeader title="Layer 2 — Intent Engine" />
                    <p className={styles.text}>
                        The Intent Engine allows users to express goals instead of individual transactions. Examples:
                    </p>
                    <div style={{ paddingLeft: 16, borderLeft: "2px solid rgba(139, 92, 246, 0.5)", margin: "16px 0" }}>
                        <p className={styles.text} style={{ fontStyle: "italic", color: "rgba(255,255,255,0.8)" }}>“Claim staking rewards every day.”</p>
                        <p className={styles.text} style={{ fontStyle: "italic", color: "rgba(255,255,255,0.8)" }}>“Swap tokens when the price reaches a target.”</p>
                        <p className={styles.text} style={{ fontStyle: "italic", color: "rgba(255,255,255,0.8)" }}>“Consolidate small token balances.”</p>
                    </div>
                    <p className={styles.text}>
                        The system converts these instructions into structured intents that describe acceptable outcomes. These intents become inputs for the policy system.
                    </p>
                </div>

                <div className={styles.section}>
                    <SectionHeader title="Layer 3 — DoerPolicy System" />
                    <p className={styles.text}>
                        The DoerPolicy system is the core enforcement mechanism of the protocol. Policies define strict boundaries for automation. Examples of enforced constraints:
                    </p>
                    <BulletPoint text="maximum transaction value" />
                    <BulletPoint text="allowed smart contracts" />
                    <BulletPoint text="gas limits" />
                    <BulletPoint text="execution frequency" />
                    <BulletPoint text="expiration time" />
                    <p className={styles.text} style={{ marginTop: 20 }}>
                        Every automated action must satisfy the policy constraints. If any rule fails, execution is rejected. Policies are stored on-chain and validated deterministically.
                    </p>
                </div>

                <div className={styles.section}>
                    <SectionHeader title="Layer 4 — Executor Network" />
                    <p className={styles.text}>
                        Executors are lightweight off-chain services responsible for monitoring policies and proposing transactions. Executor responsibilities include:
                    </p>
                    <BulletPoint text="watching active policies" />
                    <BulletPoint text="detecting trigger conditions" />
                    <BulletPoint text="constructing valid transactions" />
                    <BulletPoint text="submitting execution proposals" />
                    <p className={styles.text} style={{ marginTop: 20 }}>
                        Executors cannot bypass protocol rules. They simply propose actions. The protocol determines whether those actions are allowed. Executors are treated as untrusted infrastructure.
                    </p>
                </div>

                <div className={styles.section}>
                    <SectionHeader title="Layer 5 — On-Chain Protocol Modules" />
                    <p className={styles.text}>
                        The protocol layer enforces rules and settles outcomes. Key modules include:
                    </p>
                    <BulletPoint text="Policy Validation" />
                    <BulletPoint text="Task & Work Protocol" />
                    <BulletPoint text="Reputation Tracking" />
                    <BulletPoint text="Usage Accounting" />
                    <p className={styles.text} style={{ marginTop: 20 }}>
                        All enforcement happens here.
                    </p>
                </div>

                <div className={styles.section}>
                    <SectionHeader title="Transaction Risk Engine" />
                    <p className={styles.text}>
                        Before any transaction is approved, DOER performs a risk analysis. The system evaluates:
                    </p>
                    <BulletPoint text="token approval limits" />
                    <BulletPoint text="smart contract verification status" />
                    <BulletPoint text="contract age" />
                    <BulletPoint text="interaction type" />
                    <p className={styles.text} style={{ marginTop: 20 }}>
                        Users receive a preview such as:
                    </p>
                    <div style={{ backgroundColor: "rgba(255,255,255,0.05)", padding: 16, borderRadius: 8, margin: "16px 0", fontFamily: "monospace", color: "rgba(255,255,255,0.8)" }}>
                        Transaction Approval<br />
                        Asset: USDC<br />
                        Spending Limit: Unlimited<br />
                        Contract Risk Level: Medium
                    </div>
                    <p className={styles.text}>
                        This helps users understand what they are signing before committing.
                    </p>
                </div>

                <div className={styles.section}>
                    <SectionHeader title="On-Chain Work Protocol" />
                    <p className={styles.text}>
                        DOER extends beyond automation by enabling on-chain work and task rewards. Projects and DAOs can publish tasks directly on the protocol. Users can:
                    </p>
                    <BulletPoint text="discover tasks" />
                    <BulletPoint text="submit work proofs" />
                    <BulletPoint text="receive rewards on-chain" />
                    <p className={styles.text} style={{ marginTop: 20 }}>
                        Rewards are held in escrow until work is verified. This creates a decentralized marketplace for Web3 participation.
                    </p>
                </div>

                <div className={styles.section}>
                    <SectionHeader title="Reputation System" />
                    <p className={styles.text}>
                        Every completed task contributes to a verifiable reputation record. Reputation tracks:
                    </p>
                    <BulletPoint text="completed tasks" />
                    <BulletPoint text="failed submissions" />
                    <BulletPoint text="total rewards earned" />
                    <p className={styles.text} style={{ marginTop: 20 }}>
                        Over time, this becomes a decentralized work history stored on-chain. Your wallet becomes a portable Web3 resume.
                    </p>
                </div>

                <div className={styles.section}>
                    <SectionHeader title="Security Model" />
                    <p className={styles.text}>
                        DOER is designed around a simple principle: <span style={{ fontWeight: 600, color: "#fff" }}>Automation must never exceed explicit user authority.</span>
                    </p>
                    <p className={styles.text} style={{ marginTop: 10 }}>To enforce this, the protocol guarantees:</p>
                    <BulletPoint text="Execution cannot exceed defined limits" />
                    <BulletPoint text="Permissions automatically expire" />
                    <BulletPoint text="Revocation stops execution immediately" />
                    <BulletPoint text="Off-chain systems cannot bypass rules" />
                    <p className={styles.text} style={{ marginTop: 20 }}>
                        All automated actions must pass on-chain validation before execution.
                    </p>
                </div>

                <div className={styles.section}>
                    <SectionHeader title="Why This Architecture Matters" />
                    <p className={styles.text}>
                        Most wallets operate as passive signing tools. DOER introduces a new category: <span style={{ fontWeight: 600, color: "#fff" }}>intent-driven programmable wallets.</span>
                    </p>
                    <p className={styles.text} style={{ marginTop: 10 }}>Users can:</p>
                    <BulletPoint text="automate actions safely" />
                    <BulletPoint text="earn through on-chain work" />
                    <BulletPoint text="interact with smart contracts with clear risk visibility" />
                    <BulletPoint text="build a verifiable work history" />
                    <p className={styles.text} style={{ marginTop: 20 }}>
                        This transforms the wallet from a passive storage tool into a programmable Web3 agent.
                    </p>
                </div>

                <div style={{ padding: "40px 0", borderTop: "1px solid rgba(255,255,255,0.1)", marginTop: 40 }}>
                    <h3 className={styles.stepTitle} style={{ marginBottom: 16 }}>The Protocol in Brief</h3>
                    <p style={{ fontSize: 18, color: "rgba(255,255,255,0.6)", fontStyle: "italic", lineHeight: 1.6, whiteSpace: "pre-line" }}>
                        &quot;DOER DAPP is a policy-driven automation protocol that allows users to define intents, enforce execution limits, and safely automate blockchain interactions while maintaining full control of their assets.&quot;
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

function FlowStep({ text }: { text: string }) {
    return (
        <div style={{ textAlign: "center", padding: "12px 24px", backgroundColor: "rgba(255,255,255,0.05)", borderRadius: 8, fontFamily: "var(--font-inter)", fontWeight: 500, color: "#fff" }}>
            {text}
        </div>
    )
}

function FlowArrow() {
    return (
        <div style={{ display: "flex", justifyContent: "center", margin: "8px 0" }}>
            <ArrowDown size={20} color="rgba(255,255,255,0.3)" />
        </div>
    )
}
