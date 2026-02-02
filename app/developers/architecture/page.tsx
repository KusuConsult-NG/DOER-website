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
                        This section describes DOER DAPP as a system, not a product. It is written for those who need to understand how authority, execution, and failure are handled within DOER DAPP.
                    </p>
                    <p className={styles.text}>
                        This document assumes familiarity with: Wallet-based account models, On-chain permissioning, Smart contract execution, and Off-chain orchestration.
                    </p>
                </div>

                <div className={styles.section}>
                    <SectionHeader title="1. Design Objective Revisited" />
                    <p className={styles.text}>
                        The primary design objective of DOER DAPP is to enable conditional execution under user-defined authority constraints, without relying on persistent trust assumptions.
                    </p>
                    <p className={styles.text}>
                        Most automation systems fail because authority is either too granular (forcing constant user involvement) or too coarse (granting long-lived, opaque permissions).
                    </p>
                    <p className={styles.text}>
                        DOER DAPP introduces a third model: explicit, bounded, revocable authority.
                    </p>
                    <BulletPoint text="Authority cannot silently expand" />
                    <BulletPoint text="Execution cannot occur outside declared intent" />
                    <BulletPoint text="Revocation is final and immediate" />
                    <BulletPoint text="Off-chain logic can never override on-chain enforcement" />
                    <p className={styles.text} style={{ marginTop: 10 }}>
                        These are not UX decisions. They are architectural invariants.
                    </p>
                </div>

                <div className={styles.section}>
                    <SectionHeader title="2. Authority Model" />
                    <p className={styles.text}>
                        DOER DAPP separates authority into distinct layers to prevent authority collapse.
                    </p>

                    <SubHeader text="2.1 Authority Layers" />
                    <Definition term="Ownership Authority" definition="Retained entirely by the user. Governs asset ownership and ultimate control. Never delegated to DOER DAPP." />
                    <Definition term="Intent Authority" definition="Defines what outcomes are acceptable. Passive until bound to execution authority. Immutable once registered (except revocation)." />
                    <Definition term="Execution Authority" definition="Granted via mandates. Explicit, scoped, and temporary. Always subordinate to intent authority." />

                    <p className={styles.text} style={{ marginTop: 10 }}>No component ever holds both ownership and execution authority.</p>

                    <SubHeader text="2.2 Authority Invariants" />
                    <BulletPoint text="Execution authority must reference a valid intent" />
                    <BulletPoint text="Mandates cannot outlive their declared expiry" />
                    <BulletPoint text="Revoked mandates cannot be resurrected" />
                    <BulletPoint text="Execution cannot mutate intent state" />
                    <BulletPoint text="Off-chain components have zero authority" />
                    <p className={styles.text} style={{ marginTop: 10 }}>Any violation of these invariants results in execution failure.</p>
                </div>

                <div className={styles.section}>
                    <SectionHeader title="3. Intent Model (Formal Perspective)" />
                    <p className={styles.text}>
                        An intent is a declarative object that encodes permissible state transitions. It defines a target outcome space, a constraint set over that space, and temporal validity rules.
                    </p>

                    <SubHeader text="3.1 Intent as a Constraint System" />
                    <p className={styles.text} style={{ whiteSpace: "pre-line" }}>
                        {`Conceptually, an intent defines a predicate:\nExecute(action) ⇒ Constraints(action) == true`}
                    </p>
                    <p className={styles.text}>Constraints may include:</p>
                    <BulletPoint text="Program allowlists" />
                    <BulletPoint text="Asset allowlists" />
                    <BulletPoint text="Amount ceilings" />
                    <BulletPoint text="State predicates" />
                    <BulletPoint text="Time windows" />

                    <SubHeader text="3.2 Immutability and Auditability" />
                    <p className={styles.text}>
                        Once registered: An intent’s constraints cannot be modified. Any execution can be traced back to its intent. Observers can independently verify authorization.
                    </p>
                </div>

                {/* Sections 4-12 omitted for brevity in this response, but would be included 1:1 in production code. Assuming "..." to keep response short but implying full port */}
                {/* For full fidelity, I will paste the rest now to be safe.*/}

                <div className={styles.section}>
                    <SectionHeader title="4. Mandate Model (Execution Rights)" />
                    <p className={styles.text}>
                        Mandates are the only mechanism by which execution authority is granted. They bind: An intent, An executor identity, and A scope of execution.
                    </p>
                    <SubHeader text="4.1 Mandatory Mandate Properties" />
                    <Definition term="Executor Scope" definition="Single executor or bounded set." />
                    <Definition term="Temporal Scope" definition="Start time, Hard expiry." />
                    <Definition term="Usage Limits" definition="Max executions, Optional rate limits." />
                    <Definition term="Value Limits" definition="Per-execution caps, Aggregate caps." />
                    <p className={styles.text} style={{ marginTop: 10 }}>All fields are enforced on-chain.</p>

                    <SubHeader text="4.2 Mandate Lifecycle" />
                    <p className={styles.text}>
                        Mandates move through a strict lifecycle: Created → Active → Expired or Revoked → Terminal (irreversible). There is no “paused” state.
                    </p>
                </div>

                <div className={styles.section}>
                    <SectionHeader title="5. Execution Model" />
                    <p className={styles.text}>Execution in DOER DAPP is proposal-based, not imperative.</p>
                    <SubHeader text="5.1 Execution Proposal" />
                    <p className={styles.text}>An executor submits a proposed action with references to intent and mandate. This proposal asserts: “This action satisfies all declared constraints.”</p>
                    <SubHeader text="5.2 Deterministic Validation" />
                    <p className={styles.text} style={{ whiteSpace: "pre-line" }}>
                        {`Before execution: Intent constraints are evaluated, Mandate validity is checked, Usage/Value limits are enforced.\n\nValidation is deterministic, stateless beyond counters, and fully on-chain. Failure at any step aborts execution atomically.`}
                    </p>
                </div>

                <div className={styles.section}>
                    <SectionHeader title="6. On-Chain vs Off-Chain" />
                    <SubHeader text="6.1 On-Chain (Authoritative)" />
                    <p className={styles.text}>Responsible for: Authority enforcement, Constraint validation, Mandate lifecycle, Revocation, Execution settlement.</p>
                    <SubHeader text="6.2 Off-Chain (Advisory Only)" />
                    <p className={styles.text} style={{ whiteSpace: "pre-line" }}>
                        {`Can: Monitor, Propose, Interpret, Schedule.\nCannot: Bypass validation, Extend authority, Modify constraints, Execute directly.\n\nOff-chain components are treated as untrusted.`}
                    </p>
                </div>

                <div className={styles.section}>
                    <SectionHeader title="7. Failure Modes and Guarantees" />
                    <Definition term="Executor Misbehavior" definition="If invalid proposal or limits exceeded: Execution fails, No state change." />
                    <Definition term="Off-Chain Compromise" definition="Constraints still apply. Users retain revocation power. No additional authority gained." />
                    <Definition term="User Error" definition="DOER DAPP enforces constraints exactly. It does not infer intent. It does not protect against unclear user decisions." />
                </div>

                <div className={styles.section}>
                    <SectionHeader title="8. Integration Patterns" />
                    <Definition term="Wallet Integrations" definition="Visualize intents, surface expiries, enable revocation. No execution logic needed." />
                    <Definition term="Tool Integrations" definition="Propose executions and respect constraints. Tools never receive permanent permissions." />
                    <Definition term="DAO Integrations" definition="Delegate operational authority, enforce budgets, ensure time-bounded execution." />
                </div>

                <div className={styles.section}>
                    <SectionHeader title="9. Security Assumptions" />
                    <p className={styles.text} style={{ whiteSpace: "pre-line" }}>
                        {`DOER DAPP assumes: Executors may be malicious, Off-chain logic may fail, Users may misunderstand permissions.\n\nTherefore: Authority is minimized, Rules are explicit, Enforcement is deterministic, Revocation is absolute.`}
                    </p>
                </div>

                <div className={styles.section}>
                    <SectionHeader title="10. What DOER DAPP Deliberately Does Not Solve" />
                    <BulletPoint text="Market risk" />
                    <BulletPoint text="Contract-level exploits in allowed programs" />
                    <BulletPoint text="Poor user judgment" />
                    <BulletPoint text="Fully autonomous agents" />
                    <p className={styles.text} style={{ marginTop: 10 }}>These are outside the system’s scope.</p>
                </div>

                <div className={styles.section}>
                    <SectionHeader title="11. Mental Model for Builders" />
                    <p className={styles.text} style={{ whiteSpace: "pre-line" }}>
                        {`Think of DOER DAPP as: A permission firewall, A rule engine for execution authority, A guardrail not a driver.\n\nYour system proposes actions. DOER DAPP decides whether they are allowed.`}
                    </p>
                </div>

                <div className={styles.section}>
                    <SectionHeader title="12. Evaluation Checklist for Builders" />
                    <BulletPoint text="What authority do I actually need?" />
                    <BulletPoint text="Can that authority be bounded?" />
                    <BulletPoint text="Can users revoke it safely?" />
                    <BulletPoint text="Can failures be handled gracefully?" />
                    <p className={styles.text} style={{ marginTop: 10 }}>If the answer is no, DOER DAPP may not be appropriate.</p>
                </div>

                <div style={{ padding: "40px 0", borderTop: "1px solid rgba(255,255,255,0.1)", marginTop: 40 }}>
                    <h3 className={styles.stepTitle} style={{ marginBottom: 16 }}>Closing Statement</h3>
                    <p style={{ fontSize: 18, color: "rgba(255,255,255,0.6)", fontStyle: "italic", lineHeight: 1.6, whiteSpace: "pre-line" }}>
                        {`DOER DAPP is designed to make authority explicit, limited, and enforceable.\n\nFor developers, this means building systems that can be powerful without being dangerous.\n\nThat constraint is intentional.`}
                    </p>
                </div>

            </div>
        </div>
    );
}

function SubHeader({ text }: { text: string }) {
    return <h3 className={styles.stepTitle} style={{ marginBottom: 16 }}>{text}</h3>
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
