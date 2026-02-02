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
                    subtitle="How to use DOER DAPP safely, without technical knowledge."
                />

                <div className={styles.section}>
                    <p className={styles.text}>
                        This page explains how to use DOER DAPP at a high level. You do not need to understand smart contracts or automation systems to use DOER DAPP safely. You only need to understand what you are allowing and why.
                    </p>
                </div>

                <div className={styles.section}>
                    <SectionHeader title="What DOER DAPP Helps You Do" />
                    <p className={styles.text}>
                        DOER DAPP helps you reduce repetitive on-chain actions while staying in control.
                    </p>
                    <p className={styles.text}>It is useful when:</p>
                    <BulletPoint text="You perform similar actions often" />
                    <BulletPoint text="You want to avoid approving the same type of transaction repeatedly" />
                    <BulletPoint text="You want permissions to automatically expire" />
                    <BulletPoint text="You want clear limits on what can happen on your behalf" />

                    <p className={styles.text} style={{ marginTop: 20 }}>
                        DOER DAPP does not take control away from you. It helps you set rules once and enforce them automatically.
                    </p>
                </div>

                <div className={styles.section}>
                    <SectionHeader title="What DOER DAPP Does Before Anything Happens" />
                    <p className={styles.text} style={{ whiteSpace: "pre-line" }}>
                        {`Before DOER DAPP can do anything, you must define two things:\n1. What you want to happen\n2. What is allowed and what is not\n\nNothing executes until these are clearly defined.`}
                    </p>
                </div>

                <Step number="1" title="Connect Your Wallet" content={`To begin, you connect your wallet to DOER DAPP.\n\nThis does not give DOER DAPP access to your funds. It simply allows DOER DAPP to read your public account and register your instructions.\n\nAt this stage:\n• No permissions are granted\n• No actions can occur\n• Nothing is automated`} />

                <Step number="2" title="Describe What You Want to Do" content={`Next, you describe an intent.\n\nAn intent is a clear description of an outcome you want, such as allowing certain actions to happen under specific conditions.\n\nThink of an intent as: "I am okay with this kind of action happening, as long as it stays within these rules."\n\nYou are not approving a transaction yet. You are describing expectations.`} />

                <Step number="3" title="Set Your Limits" content={`This is the most important step.\n\nYou define boundaries such as:\n• Which apps or contracts are allowed\n• Maximum amounts that can be used\n• How often actions can happen\n• How long permission should last\n\nThese limits are enforced automatically. If a limit is reached, execution stops. You are always in control of these limits.`} />

                <Step number="4" title="Allow Limited Execution" content={`After defining intent and limits, you can allow execution through a mandate.\n\nA mandate is permission with rules and an expiration. It answers questions like: Who can act on this intent? For how long? Under what limits?\n\nA mandate does not transfer ownership of your assets. It only allows specific actions within your rules.`} />

                <Step number="5" title="Let DOER DAPP Enforce Your Rules" content={`Once a mandate is active:\n• Actions can occur only if they match your intent\n• Limits are checked every time\n• Expired or revoked permissions cannot be used\n\nNothing runs outside the rules you defined. You do not need to watch constantly. You can always review or stop execution.`} />

                <div className={styles.section}>
                    <SectionHeader title="How to Stay Safe When Using DOER DAPP" />
                    <p className={styles.text}>
                        DOER DAPP is designed to protect users, but safe use still requires attention. Keep these principles in mind:
                    </p>
                    <BulletPoint text="Only allow apps you recognize" />
                    <BulletPoint text="Set limits you are comfortable with" />
                    <BulletPoint text="Use expiration times whenever possible" />
                    <BulletPoint text="Revoke mandates you no longer need" />
                    <p className={styles.text} style={{ marginTop: 20 }}>
                        DOER DAPP enforces your rules. It cannot fix unclear or risky choices.
                    </p>
                </div>

                <div className={styles.grid2}>
                    <InfoCard
                        title="When You Should Use DOER DAPP"
                        description={`• You want fewer approvals without open-ended permissions\n• You interact with crypto frequently\n• You care about keeping control while saving time`}
                        icon={<CheckCircle size={32} />}
                    />
                    <InfoCard
                        title="When You Should NOT Use DOER DAPP"
                        description={`• You do not understand what you are allowing\n• You want “set and forget” automation without limits\n• You prefer to manually approve every action\n\nDOER DAPP prioritizes control over convenience.`}
                        icon={<XCircle size={32} />}
                    />
                </div>

                <div className={styles.section}>
                    <SectionHeader title="You Can Always Stop" />
                    <p className={styles.text} style={{ whiteSpace: "pre-line" }}>
                        {`At any time, you can: View your active permissions, Change limits, or Revoke execution rights instantly.\n\nNothing is permanent unless you choose it to be.`}
                    </p>
                </div>

                <div className={styles.section}>
                    <SectionHeader title="Where to Go Next" />
                    <p className={styles.text}>If you want to learn more:</p>
                    <BulletPoint text="Read how Intents work" />
                    <BulletPoint text="Learn about Mandates and permissions" />
                    <BulletPoint text="Review the Security model" />
                    <p className={styles.text} style={{ marginTop: 20 }}>
                        If you prefer to explore hands-on, you can start by creating a simple intent with strict limits and short duration.
                    </p>
                </div>

                <div style={{ padding: "40px 0", borderTop: "1px solid rgba(255,255,255,0.1)", marginTop: 40 }}>
                    <h3 className={styles.stepTitle} style={{ marginBottom: 16 }}>Final Reminder</h3>
                    <p style={{ fontSize: 18, color: "rgba(255,255,255,0.6)", fontStyle: "italic", lineHeight: 1.6 }}>
                        &quot;DOER DAPP is not about doing more automatically. It is about doing the right things, within boundaries you understand. If you stay deliberate, DOER DAPP stays safe.&quot;
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
