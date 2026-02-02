import SectionHeader from "@/components/UI/SectionHeader";
import styles from "./page.module.css";
import { Circle } from "lucide-react";

export default function AboutPage() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <SectionHeader
                    title="What Is DOER DAPP"
                    subtitle="Vision, Mission, and Principles."
                />

                <div className={styles.section}>
                    <SectionHeader title="The Problem" />
                    <p className={styles.text}>
                        Today, interacting with crypto often means choosing between two extremes: Manual, repetitive approval of every single action, or Handing over broad, indefinite permissions to automated systems.
                    </p>
                    <p className={styles.text}>
                        Neither is ideal. Manual approval is secure but tedious. Broad automation is convenient but risky. DOER DAPP bridges this gap.
                    </p>
                </div>

                <div className={styles.section}>
                    <SectionHeader title="What DOER DAPP Is" />
                    <p className={styles.text}>
                        DOER DAPP is a system for granular, conditional execution.
                    </p>
                    <p className={styles.text}>
                        It allows users to grant specific, limited authority to automated agents (Doers) to perform actions on their behalf, without giving up custody or control of their assets.
                    </p>
                    <p className={styles.text}>
                        Think of it as a &quot;smart outbox&quot; for your wallet. You don&apos;t just send transactions; you define intents—conditions under which transactions are allowed to happen.
                    </p>
                </div>

                <div className={styles.section}>
                    <SectionHeader title="What DOER DAPP Is Not" />
                    <BulletPoint
                        title="DOER DAPP is not a custodial wallet."
                        text="We do not hold your keys or your funds."
                    />
                    <BulletPoint
                        title='DOER DAPP is not a &quot;trading bot&quot;.'
                        text="It is the infrastructure that allows *you* to define trading rules safely."
                    />
                    <BulletPoint
                        title="DOER DAPP is not an AI."
                        text="It is a deterministic protocol for enforcing permissions."
                    />
                </div>

                <div className={styles.section}>
                    <SectionHeader title="Vision" />
                    <blockquote className={styles.quote}>
                        &quot;A world where users can automate their financial lives without surrendering sovereignty.&quot;
                    </blockquote>
                </div>

                <div className={styles.section}>
                    <SectionHeader title="Mission" />
                    <p className={styles.text}>
                        To build the standard for safe, intent-based execution on-chain, making &quot;conditional permission&quot; as common and easy as &quot;sending a token.&quot;
                    </p>
                </div>

                <div className={styles.section}>
                    <SectionHeader title="Core Design Principles" />
                    <Definition
                        term="Explicit Intent"
                        definition="Nothing happens unless you explicitly defined it."
                    />
                    <Definition
                        term="Bounded Authority"
                        definition="Every permission has a limit (time, amount, scope)."
                    />
                    <Definition
                        term="User Sovereignty"
                        definition="You can always revoke permission. Instantly."
                    />
                    <Definition
                        term="Credible Neutrality"
                        definition="The protocol enforces rules, it does not pick winners."
                    />
                </div>

                <div className={styles.section}>
                    <SectionHeader title="Who Is This For?" />
                    <BulletPoint
                        title="For Users:"
                        text="Who want to automate DCA, limit orders, or portfolio rebalancing without trusting a centralized exchange."
                    />
                    <BulletPoint
                        title="For DAOs:"
                        text="Who want to delegate spending authority to working groups with strict spending limits."
                    />
                    <BulletPoint
                        title="For Developers:"
                        text="Who want to build automation tools without taking on the liability of holding user keys."
                    />
                </div>
            </div>
        </div>
    );
}

function BulletPoint({ title, text }: { title: string; text: string }) {
    return (
        <div className={styles.bulletPoint}>
            <Circle size={8} className={styles.bulletIcon} />
            <p className={styles.text}>
                <span className={styles.bold}>{title}</span> {text}
            </p>
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
