import SectionHeader from "@/components/UI/SectionHeader";
import InfoCard from "@/components/UI/InfoCard";
import styles from "@/components/Layout/ContentPage.module.css";
import { Circle, CheckCircle, XCircle } from "lucide-react";

export default function GettingStartedPage() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <SectionHeader
                    title="Getting Started with DOER DAPP"
                    subtitle="How to use DOER DAPP safely, even if you are new to Web3."
                />

                <div className={styles.section}>
                    <p className={styles.text}>
                        This guide explains the basics of using DOER DAPP without needing technical knowledge. You do not need to understand smart contracts, automation systems, or blockchain architecture to use DOER DAPP safely.
                    </p>
                    <p className={styles.text}>
                        You only need to understand what you are allowing and why.
                    </p>
                </div>

                <div className={styles.section}>
                    <SectionHeader title="What DOER DAPP Helps You Do" />
                    <p className={styles.text}>
                        DOER DAPP helps reduce repetitive on-chain actions while keeping you in control.
                    </p>
                    <p className={styles.text}>It is useful when:</p>
                    <BulletPoint text="You perform similar actions often" />
                    <BulletPoint text="You want to avoid approving the same type of transaction repeatedly" />
                    <BulletPoint text="You want permissions that automatically expire" />
                    <BulletPoint text="You want clear limits on what can happen on your behalf" />
                    <BulletPoint text="You want to automate actions without giving unlimited access" />

                    <p className={styles.text} style={{ marginTop: 20 }}>
                        DOER DAPP does not take control away from you. It allows you to define rules once and enforce them automatically through policy-driven automation.
                    </p>
                </div>

                <div className={styles.section}>
                    <SectionHeader title="What DOER DAPP Does Before Anything Happens" />
                    <p className={styles.text} style={{ whiteSpace: "pre-line" }}>
                        {`Before DOER DAPP can do anything, two things must exist:\n1. An intent describing what should happen\n2. A policy defining the limits\n\nNothing executes until both are clearly defined.\nAutomation only happens inside the boundaries you set.`}
                    </p>
                </div>

                <Step number="1" title="Connect Your Wallet" content={`To begin, connect your wallet to DOER DAPP.\n\nThis does not give DOER DAPP access to your funds. It only allows DOER DAPP to read your public account and register your instructions.\n\nAt this stage:\n• No permissions are granted\n• No actions can occur\n• Nothing is automated\n\nYour wallet remains the sole owner of your assets.`} />

                <Step number="2" title="Describe What You Want to Do" content={`Next, you describe an intent.\n\nAn intent is a clear description of the outcome you want.\n\nExamples include:\n• Claim staking rewards automatically\n• Swap tokens if conditions are met\n• Consolidate small balances (Dust Sweep)\n• Complete on-chain tasks to earn rewards\n\nThink of an intent as saying: "I am comfortable with this type of action happening, as long as it follows my rules."\n\nAt this stage, you are not approving a transaction yet. You are defining expectations.`} />

                <Step number="3" title="Set Your Limits" content={`This is the most important step.\n\nYou define boundaries that automation cannot exceed. These limits may include:\n• Which apps or contracts are allowed\n• Maximum amounts that can be used\n• How often actions can happen\n• Gas limits for transactions\n• How long permission should last\n\nThese limits are enforced automatically through the DoerPolicy system. If a limit is reached, execution stops immediately. You are always in control of these boundaries.`} />

                <Step number="4" title="Allow Limited Execution" content={`Once intent and limits are defined, you can allow execution through a mandate.\n\nA mandate is permission with rules and an expiration. It answers questions like: Who can act on this intent? How often can it run? When does permission end?\n\nMandates never transfer ownership of your assets. They only allow specific actions to occur within the rules you created.`} />

                <Step number="5" title="Let DOER DAPP Enforce Your Rules" content={`Once a mandate becomes active:\n• Actions occur only if they match your intent\n• Policies are verified before every execution\n• Expired permissions cannot be used\n• Revoked permissions stop immediately\n\nAutomation is executed by the DOER DAPP executor network, but every action must pass policy validation first. Nothing runs outside the rules you defined. You do not need to watch every transaction, but you can review or stop execution anytime.`} />

                <div className={styles.section}>
                    <SectionHeader title="Understanding Transaction Safety" />
                    <p className={styles.text}>
                        Before you approve a transaction, DOER DAPP provides a risk preview. This helps you understand what the transaction is doing.
                    </p>
                    <div style={{ backgroundColor: "rgba(255,255,255,0.05)", padding: 20, borderRadius: 8, margin: "16px 0" }}>
                        <p className={styles.text} style={{ fontFamily: "monospace", margin: 0 }}>
                            Transaction Approval<br />
                            Asset: USDC<br />
                            Spending Limit: Unlimited<br />
                            Contract Risk Level: Medium
                        </p>
                    </div>
                    <p className={styles.text} style={{ whiteSpace: "pre-line" }}>
                        {`This allows you to see important information such as:\n• spending permissions\n• contract verification status\n• potential risks\n\nYou always decide whether to approve or reject.`}
                    </p>
                </div>

                <div className={styles.section}>
                    <SectionHeader title="Earning Through On-Chain Tasks" />
                    <p className={styles.text} style={{ whiteSpace: "pre-line" }}>
                        {`DOER DAPP also allows users to participate in on-chain work.\nProjects, developers, and communities can post tasks directly on the platform.\n\nExamples include:\n• testing applications\n• participating in governance\n• community contributions\n• development work\n\nWhen a task is completed and verified, rewards are paid directly to your wallet. Each completed task contributes to your on-chain reputation, creating a verifiable record of your work.\n\nYour wallet becomes more than a storage tool. It becomes a Web3 activity profile.`}
                    </p>
                </div>

                <div className={styles.section}>
                    <SectionHeader title="How to Stay Safe When Using DOER DAPP" />
                    <p className={styles.text}>
                        DOER DAPP is designed to protect users, but safe use still requires attention. Keep these principles in mind:
                    </p>
                    <BulletPoint text="Only allow applications you recognize" />
                    <BulletPoint text="Set limits you are comfortable with" />
                    <BulletPoint text="Use expiration times whenever possible" />
                    <BulletPoint text="Revoke mandates you no longer need" />
                    <p className={styles.text} style={{ marginTop: 20 }}>
                        DOER DAPP enforces your rules. It cannot correct unclear or risky choices.
                    </p>
                </div>

                <div className={styles.grid2}>
                    <InfoCard
                        title="When You Should Use DOER DAPP"
                        description={`• You want fewer approvals without open-ended permissions\n• You interact with crypto frequently\n• You want automation with strict limits\n• You want to earn through on-chain tasks\n• You want more transparency when signing transactions`}
                        icon={<CheckCircle size={32} />}
                    />
                    <InfoCard
                        title="When You Should NOT Use DOER DAPP"
                        description={`• You do not understand what you are allowing\n• You want unlimited “set and forget” automation\n• You prefer manually approving every action yourself\n\nDOER prioritizes control over convenience.`}
                        icon={<XCircle size={32} />}
                    />
                </div>

                <div className={styles.section}>
                    <SectionHeader title="You Can Always Stop" />
                    <p className={styles.text} style={{ whiteSpace: "pre-line" }}>
                        {`At any time, you can:\nView your active permissions\nAdjust your limits\nPause automation\nRevoke execution rights instantly\n\nNothing is permanent unless you choose it to be.`}
                    </p>
                </div>

                <div className={styles.section}>
                    <SectionHeader title="Where to Go Next" />
                    <p className={styles.text}>If you want to explore further:</p>
                    <BulletPoint text="Learn how Intents work" />
                    <BulletPoint text="Understand Mandates and permissions" />
                    <BulletPoint text="Review the Security model" />
                    <BulletPoint text="Explore on-chain tasks and earning" />
                    <p className={styles.text} style={{ marginTop: 20 }}>
                        Or simply begin by creating a small intent with strict limits and a short duration.
                    </p>
                </div>

                <div style={{ padding: "40px 0", borderTop: "1px solid rgba(255,255,255,0.1)", marginTop: 40 }}>
                    <h3 className={styles.stepTitle} style={{ marginBottom: 16 }}>Final Reminder</h3>
                    <p style={{ fontSize: 18, color: "rgba(255,255,255,0.6)", fontStyle: "italic", lineHeight: 1.6 }}>
                        &quot;DOER DAPP is not about doing more automatically. It is about doing the right things, within boundaries you understand. When your rules are clear, automation stays safe.&quot;
                    </p>
                </div>
            </div>
        </div>
    );
}

function Step({ number, title, content }: { number: string; title: string; content: string }) {
    return (
        <div className={styles.step}>
            <span className={styles.stepNumber} style={{ color: "#E5E7EB" }}>{number}</span>
            <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>{title}</h3>
                <p className={styles.text} style={{ whiteSpace: "pre-line" }}>{content}</p>
            </div>
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
