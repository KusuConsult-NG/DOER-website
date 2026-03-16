import SectionHeader from "@/components/UI/SectionHeader";
import styles from "@/components/Layout/ContentPage.module.css";
import { Circle } from "lucide-react";

export default function ArchitecturePage() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <SectionHeader
                    title="Technical Architecture"
                    subtitle="System design for engineers, protocol designers, and auditors."
                />

                <div className={styles.section}>
                    <p className={styles.text}>
                        This section describes DOER DAPP as a protocol system, not simply a wallet product. It explains how authority, automation, validation, and risk analysis are handled across both on-chain and off-chain components.
                    </p>
                    <p className={styles.text} style={{ marginTop: 10 }}>This document assumes familiarity with:</p>
                    <BulletPoint text="wallet-based account models" />
                    <BulletPoint text="on-chain permission systems" />
                    <BulletPoint text="smart contract execution" />
                    <BulletPoint text="off-chain orchestration systems" />
                </div>

                <div className={styles.section}>
                    <SectionHeader title="1. Design Objective Revisited" />
                    <p className={styles.text}>
                        The primary objective of DOER DAPP is to enable safe programmable wallet behavior through bounded authority and deterministic enforcement.
                    </p>
                    <p className={styles.text} style={{ marginTop: 10 }}>
                        Most automation systems fail because authority is either:
                    </p>
                    <BulletPoint text="too granular (requiring constant user approval), or" />
                    <BulletPoint text="too coarse (granting long-lived permissions that cannot be safely constrained)." />

                    <p className={styles.text} style={{ marginTop: 10 }}>
                        DOER DAPP introduces a third model: <span className={styles.heroHighlight}>policy-driven intent execution.</span><br />
                        Automation is allowed, but only within strict user-defined boundaries.
                    </p>
                    <p className={styles.text} style={{ marginTop: 10 }}>
                        Key architectural invariants:
                    </p>
                    <BulletPoint text="Authority cannot silently expand" />
                    <BulletPoint text="Execution cannot occur outside declared intent" />
                    <BulletPoint text="Revocation is immediate and irreversible" />
                    <BulletPoint text="Off-chain logic cannot override on-chain enforcement" />
                    <BulletPoint text="Every automated action must pass policy validation" />
                    <p className={styles.text} style={{ marginTop: 10 }}>
                        These guarantees are enforced by the DoerPolicy system.
                    </p>
                </div>

                <div className={styles.section}>
                    <SectionHeader title="2. Authority Model" />
                    <p className={styles.text}>
                        DOER DAPP separates authority into multiple layers to prevent privilege escalation and authority collapse.
                    </p>

                    <SubHeader text="2.1 Authority Layers" />
                    <Definition term="Ownership Authority" definition="Retained entirely by the user. Ownership authority governs asset control and key management. This authority is never delegated to DOER DAPP." />
                    <Definition term="Intent Authority" definition="Defines what outcomes are acceptable. An intent describes a goal and a constraint set that determines when execution is allowed. Intent authority is passive until paired with execution authority." />
                    <Definition term="Execution Authority" definition="Granted through mandates. Execution authority allows a designated executor to attempt transaction proposals under strict limits. Execution authority is always subordinate to intent authority." />

                    <h4 style={{ fontFamily: "var(--font-inter)", fontSize: 18, fontWeight: 700, color: "#fff", marginBottom: 4, marginTop: 16 }}>Policy Authority</h4>
                    <p className={styles.text} style={{ color: "rgba(255,255,255,0.7)" }}>
                        Policies enforce operational constraints on execution. Examples include:
                    </p>
                    <div style={{ marginLeft: 10 }}>
                        <BulletPoint text="gas limits" />
                        <BulletPoint text="execution frequency" />
                        <BulletPoint text="contract allowlists" />
                        <BulletPoint text="spending ceilings" />
                    </div>
                    <p className={styles.text} style={{ color: "rgba(255,255,255,0.7)", marginTop: 8 }}>
                        Policy checks occur during every execution attempt.
                    </p>

                    <p className={styles.text} style={{ marginTop: 20 }}>
                        No system component ever holds both ownership authority and execution authority simultaneously.
                    </p>

                    <SubHeader text="2.2 Authority Invariants" />
                    <p className={styles.text}>The following invariants are enforced at the protocol level:</p>
                    <BulletPoint text="Execution authority must reference a valid intent" />
                    <BulletPoint text="Mandates cannot outlive their declared expiry" />
                    <BulletPoint text="Revoked mandates cannot be resurrected" />
                    <BulletPoint text="Execution cannot mutate intent state" />
                    <BulletPoint text="Automation cannot bypass policy constraints" />
                    <BulletPoint text="Off-chain components possess zero authority" />
                    <p className={styles.text} style={{ marginTop: 10 }}>Any violation of these rules results in deterministic execution failure.</p>
                </div>

                <div className={styles.section}>
                    <SectionHeader title="3. Intent Model (Formal Perspective)" />
                    <p className={styles.text}>
                        An intent is a declarative object that defines permissible state transitions. It describes:
                    </p>
                    <BulletPoint text="a target outcome" />
                    <BulletPoint text="a constraint system" />
                    <BulletPoint text="temporal validity rules" />

                    <SubHeader text="3.1 Intent as a Constraint System" />
                    <p className={styles.text} style={{ whiteSpace: "pre-line" }}>
                        {`Conceptually, an intent defines the predicate:\nExecute(action) ⇒ Constraints(action) == true`}
                    </p>
                    <p className={styles.text}>Constraints may include:</p>
                    <BulletPoint text="program allowlists" />
                    <BulletPoint text="asset allowlists" />
                    <BulletPoint text="amount ceilings" />
                    <BulletPoint text="time windows" />
                    <BulletPoint text="state predicates" />
                    <p className={styles.text} style={{ marginTop: 10 }}>Only actions satisfying the full constraint set are valid.</p>

                    <SubHeader text="3.2 Immutability and Auditability" />
                    <p className={styles.text}>Once registered:</p>
                    <BulletPoint text="Intent constraints cannot be modified" />
                    <BulletPoint text="Every execution can be traced back to the originating intent" />
                    <BulletPoint text="Observers can independently verify authorization" />
                    <p className={styles.text} style={{ marginTop: 10 }}>This provides deterministic auditability for automation systems.</p>
                </div>

                <div className={styles.section}>
                    <SectionHeader title="4. Mandate Model (Execution Rights)" />
                    <p className={styles.text}>
                        Mandates are the only mechanism through which execution authority is granted. They bind:
                    </p>
                    <BulletPoint text="an intent" />
                    <BulletPoint text="an executor identity" />
                    <BulletPoint text="a scope of execution" />

                    <SubHeader text="4.1 Mandatory Mandate Properties" />
                    <p className={styles.text}>Each mandate includes enforced limits.</p>
                    <Definition term="Executor Scope" definition="Single executor or bounded executor set." />
                    <Definition term="Temporal Scope" definition="Start time and hard expiration." />
                    <Definition term="Usage Limits" definition="Maximum executions and optional rate limits." />
                    <Definition term="Value Limits" definition="Per-execution spending caps and aggregate ceilings." />
                    <p className={styles.text} style={{ marginTop: 10 }}>All limits are enforced on-chain.</p>

                    <SubHeader text="4.2 Mandate Lifecycle" />
                    <p className={styles.text} style={{ whiteSpace: "pre-line" }}>
                        {`Mandates follow a strict lifecycle:\nCreated\nActive\nExpired or Revoked\nTerminal\n\nTerminal mandates cannot be reactivated.`}
                    </p>
                </div>

                <div className={styles.section}>
                    <SectionHeader title="5. Execution Model" />
                    <p className={styles.text}>Execution in DOER DAPP is proposal-based, not imperative. Executors do not perform actions directly. They propose transactions that must pass protocol validation.</p>

                    <SubHeader text="5.1 Execution Proposal" />
                    <p className={styles.text}>An executor submits a proposal referencing:</p>
                    <BulletPoint text="intent" />
                    <BulletPoint text="mandate" />
                    <BulletPoint text="proposed transaction" />
                    <p className={styles.text} style={{ marginTop: 10 }}>The proposal asserts: “This transaction satisfies all constraints.”</p>

                    <SubHeader text="5.2 Deterministic Validation" />
                    <p className={styles.text}>Before execution occurs:</p>
                    <BulletPoint text="intent constraints are evaluated" />
                    <BulletPoint text="mandate validity is verified" />
                    <BulletPoint text="policy limits are enforced" />
                    <BulletPoint text="usage counters are updated" />
                    <p className={styles.text} style={{ marginTop: 10 }}>
                        Validation is deterministic and executed entirely on-chain. If any check fails, execution aborts atomically.
                    </p>
                </div>

                <div className={styles.section}>
                    <SectionHeader title="6. On-Chain vs Off-Chain Responsibilities" />

                    <SubHeader text="6.1 On-Chain (Authoritative Layer)" />
                    <p className={styles.text}>The protocol layer enforces:</p>
                    <BulletPoint text="authority validation" />
                    <BulletPoint text="policy enforcement" />
                    <BulletPoint text="mandate lifecycle" />
                    <BulletPoint text="execution settlement" />
                    <BulletPoint text="revocation guarantees" />
                    <BulletPoint text="task reward settlement" />
                    <BulletPoint text="reputation updates" />
                    <p className={styles.text} style={{ marginTop: 10 }}>This layer is the final arbiter of execution validity.</p>

                    <SubHeader text="6.2 Off-Chain (Executor Network)" />
                    <p className={styles.text}>Off-chain services perform orchestration tasks. They may:</p>
                    <BulletPoint text="monitor intents and policies" />
                    <BulletPoint text="detect trigger conditions" />
                    <BulletPoint text="schedule executions" />
                    <BulletPoint text="submit execution proposals" />
                    <p className={styles.text} style={{ marginTop: 10 }}>They cannot:</p>
                    <BulletPoint text="bypass validation" />
                    <BulletPoint text="expand permissions" />
                    <BulletPoint text="alter policies" />
                    <BulletPoint text="execute transactions directly" />
                    <p className={styles.text} style={{ marginTop: 10 }}>Executors are treated as untrusted infrastructure.</p>
                </div>

                <div className={styles.section}>
                    <SectionHeader title="7. Transaction Risk Intelligence Layer" />
                    <p className={styles.text}>
                        DOER DAPP introduces a transaction risk analysis system to improve user visibility before signing transactions. Before approval, the wallet evaluates:
                    </p>
                    <BulletPoint text="token approval amounts" />
                    <BulletPoint text="contract verification status" />
                    <BulletPoint text="contract deployment age" />
                    <BulletPoint text="program reputation" />
                    <BulletPoint text="interaction type" />
                    <p className={styles.text} style={{ marginTop: 10 }}>
                        A risk score is generated using heuristic evaluation. Example model:
                    </p>
                    <div style={{ backgroundColor: "rgba(255,255,255,0.05)", padding: 16, borderRadius: 8, margin: "16px 0", fontFamily: "monospace", color: "rgba(255,255,255,0.8)" }}>
                        riskScore = 0<br />
                        if unlimitedApproval: +3<br />
                        if contractUnknown: +4<br />
                        if contractNew: +2<br /><br />
                        Risk levels:<br />
                        0–2 → Low<br />
                        3–5 → Medium<br />
                        6+ → High
                    </div>
                    <p className={styles.text}>Users receive a clear preview before signing. Example:</p>
                    <div style={{ backgroundColor: "rgba(255,255,255,0.05)", padding: 16, borderRadius: 8, margin: "16px 0", fontFamily: "monospace", color: "rgba(255,255,255,0.8)" }}>
                        Asset: USDC<br />
                        Spending Limit: Unlimited<br />
                        Contract Risk Level: Medium
                    </div>
                    <p className={styles.text}>
                        This improves transparency and reduces accidental approvals.
                    </p>
                </div>

                <div className={styles.section}>
                    <SectionHeader title="8. On-Chain Work & Task System" />
                    <p className={styles.text}>
                        DOER DAPP expands beyond automation by introducing a task and reward protocol. Projects and DAOs can post tasks directly on-chain. Users can complete tasks and receive rewards from escrow.
                    </p>

                    <h4 style={{ fontFamily: "var(--font-inter)", fontSize: 18, fontWeight: 700, color: "#fff", marginBottom: 4, marginTop: 16 }}>Core Accounts</h4>

                    <div style={{ marginTop: 16 }}>
                        <h5 style={{ fontFamily: "var(--font-inter)", fontSize: 16, fontWeight: 600, color: "#fff", marginBottom: 4 }}>TaskAccount</h5>
                        <p className={styles.text} style={{ color: "rgba(255,255,255,0.7)" }}>Represents an on-chain job or bounty. Fields include:</p>
                        <div style={{ marginLeft: 10 }}>
                            <BulletPoint text="creator" />
                            <BulletPoint text="reward token" />
                            <BulletPoint text="reward amount" />
                            <BulletPoint text="deadline" />
                            <BulletPoint text="task metadata" />
                        </div>
                    </div>

                    <div style={{ marginTop: 16 }}>
                        <h5 style={{ fontFamily: "var(--font-inter)", fontSize: 16, fontWeight: 600, color: "#fff", marginBottom: 4 }}>WorkerSubmission</h5>
                        <p className={styles.text} style={{ color: "rgba(255,255,255,0.7)" }}>Represents proof of task completion. Fields include:</p>
                        <div style={{ marginLeft: 10 }}>
                            <BulletPoint text="worker" />
                            <BulletPoint text="task reference" />
                            <BulletPoint text="proof URI" />
                            <BulletPoint text="verification status" />
                        </div>
                    </div>

                    <div style={{ marginTop: 16 }}>
                        <h5 style={{ fontFamily: "var(--font-inter)", fontSize: 16, fontWeight: 600, color: "#fff", marginBottom: 4 }}>RewardVault</h5>
                        <p className={styles.text} style={{ color: "rgba(255,255,255,0.7)" }}>Escrow holding reward tokens until work verification.</p>
                    </div>

                    <h4 style={{ fontFamily: "var(--font-inter)", fontSize: 18, fontWeight: 700, color: "#fff", marginBottom: 4, marginTop: 24 }}>Reputation System</h4>
                    <p className={styles.text}>
                        A lightweight on-chain reputation record tracks work history. WorkerReputation includes:
                    </p>
                    <div style={{ marginLeft: 10 }}>
                        <BulletPoint text="tasks_completed" />
                        <BulletPoint text="tasks_failed" />
                        <BulletPoint text="total_earned" />
                    </div>
                    <p className={styles.text} style={{ marginTop: 10 }}>
                        Over time, this creates a verifiable on-chain work profile.
                    </p>
                </div>

                <div className={styles.section}>
                    <SectionHeader title="9. Failure Modes and Guarantees" />
                    <Definition term="Executor Misbehavior" definition="If an executor submits an invalid proposal: Execution fails. No state change occurs." />
                    <Definition term="Off-Chain Compromise" definition="Even if off-chain systems fail or behave maliciously: Policies remain enforced. Users retain revocation authority." />
                    <Definition term="User Error" definition="DOER DAPP enforces constraints exactly as defined. It does not infer user intent or protect against unclear rule definitions." />
                </div>

                <div className={styles.section}>
                    <SectionHeader title="10. Integration Patterns" />
                    <Definition term="Wallet Integrations" definition="Wallets can visualize: active intents, policy limits, risk analysis, execution history. Wallets do not require execution logic." />
                    <Definition term="Automation Tool Integrations" definition="External tools may propose execution. They must respect policy constraints. They never receive permanent permissions." />
                    <Definition term="DAO Integrations" definition="DAOs can: delegate spending authority, enforce operational budgets, enable time-bounded execution authority. This enables safer treasury automation." />
                </div>

                <div className={styles.section}>
                    <SectionHeader title="11. Security Assumptions" />
                    <p className={styles.text} style={{ whiteSpace: "pre-line" }}>
                        {`The system assumes the following adversarial conditions:\n• executors may be malicious\n• off-chain systems may fail\n• users may misunderstand permissions`}
                    </p>
                    <p className={styles.text} style={{ marginTop: 10 }}>Therefore the protocol enforces:</p>
                    <BulletPoint text="minimized authority" />
                    <BulletPoint text="explicit constraints" />
                    <BulletPoint text="deterministic validation" />
                    <BulletPoint text="absolute revocation guarantees" />
                </div>

                <div className={styles.section}>
                    <SectionHeader title="12. What DOER DAPP Deliberately Does Not Solve" />
                    <p className={styles.text}>Certain risks remain outside the protocol scope. These include:</p>
                    <BulletPoint text="market volatility" />
                    <BulletPoint text="vulnerabilities in external smart contracts" />
                    <BulletPoint text="poor user judgment" />
                    <BulletPoint text="fully autonomous financial agents" />
                    <p className={styles.text} style={{ marginTop: 10 }}>The protocol enforces authority boundaries, not economic correctness.</p>
                </div>

                <div className={styles.section}>
                    <SectionHeader title="13. Mental Model for Builders" />
                    <p className={styles.text}>Think of DOER DAPP as:</p>
                    <BulletPoint text="a permission firewall" />
                    <BulletPoint text="a rule engine for execution authority" />
                    <BulletPoint text="a policy layer for wallet behavior" />
                    <p className={styles.text} style={{ marginTop: 10 }}>Your system proposes actions. DOER DAPP decides whether they are allowed.</p>
                </div>

                <div className={styles.section}>
                    <SectionHeader title="14. Evaluation Checklist for Builders" />
                    <p className={styles.text}>Before integrating with DOER DAPP:</p>
                    <BulletPoint text="What authority does your system require?" />
                    <BulletPoint text="Can that authority be bounded?" />
                    <BulletPoint text="Can users revoke it safely?" />
                    <BulletPoint text="Can failures be handled gracefully?" />
                    <p className={styles.text} style={{ marginTop: 10 }}>If the answer is no, DOER DAPP may not be appropriate for your architecture.</p>
                </div>

                <div style={{ padding: "40px 0", borderTop: "1px solid rgba(255,255,255,0.1)", marginTop: 40 }}>
                    <h3 className={styles.stepTitle} style={{ marginBottom: 16 }}>Architectural Summary</h3>
                    <p style={{ fontSize: 18, color: "rgba(255,255,255,0.6)", fontStyle: "italic", lineHeight: 1.6, whiteSpace: "pre-line" }}>
                        {`DOER DAPP is designed to make authority explicit, limited, and enforceable.\n\nFor developers and protocol designers, this enables powerful automation systems without introducing hidden permission risk.\n\nThe constraint is intentional.\nSafety is part of the architecture.`}
                    </p>
                </div>

            </div>
        </div>
    );
}

function SubHeader({ text }: { text: string }) {
    return <h3 className={styles.stepTitle} style={{ marginBottom: 16, marginTop: 24 }}>{text}</h3>
}

function Definition({ term, definition }: { term: string; definition: string }) {
    return (
        <div style={{ marginBottom: 16 }}>
            <h4 style={{ fontFamily: "var(--font-inter)", fontSize: 18, fontWeight: 700, color: "#fff", marginBottom: 4 }}>{term}</h4>
            <p className={styles.text} style={{ color: "rgba(255,255,255,0.7)" }}>{definition}</p>
        </div>
    )
}

function BulletPoint({ text }: { text: string }) {
    return (
        <div className={styles.bulletPoint}>
            <Circle size={6} className={styles.bulletIcon} style={{ fill: "rgba(255,255,255,0.7)", color: "transparent", marginTop: 8 }} />
            <p className={styles.text}>{text}</p>
        </div>
    );
}
