import SectionHeader from "@/components/UI/SectionHeader";
import styles from "@/components/Layout/ContentPage.module.css";
import { Circle } from "lucide-react";

export default function DevelopersPage() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <SectionHeader
                    title="Built for the Ecosystem"
                    subtitle="DOER DAPP is designed as shared infrastructure, not a closed product."
                />

                <div className={styles.section}>
                    <p className={styles.text}>
                        While DOER DAPP introduces new ways to express intent and manage execution, it is built to serve the broader crypto ecosystem, not just developers writing code. Its goal is to make safe, repeatable on-chain actions accessible across many types of users and tools.
                    </p>
                    <p className={styles.text}>
                        Whether you interact with crypto through a wallet, a trading interface, a DAO tool, or a custom application, DOER DAPP is designed to fit into that flow rather than replace it.
                    </p>
                </div>

                <UserSegment
                    title="For Wallet Users"
                    content={`For everyday wallet users, DOER DAPP improves how actions are authorized.\n\nInstead of approving similar transactions repeatedly or leaving old permissions active, users can define clear rules once and let actions occur only within those limits. This reduces both friction and risk, especially for users who interact frequently with DeFi, NFTs, or governance tools.\n\nYou do not need to understand how DOER DAPP is implemented to benefit from it. If you understand what you are allowing and why, DOER DAPP works in your favor.`}
                />

                <UserSegment
                    title="For Power Users"
                    content={`Power users often combine multiple tools, strategies, and workflows. This increases both efficiency and exposure.\n\nDOER DAPP gives power users a way to:\n• Reduce repetitive approvals\n• Limit downside when automating actions\n• Keep execution transparent and auditable\n\nRather than relying on trust in external bots or scripts, power users can rely on enforceable rules that remain under their control.`}
                />

                <UserSegment
                    title="For Tool Builders"
                    content={`For builders, DOER DAPP provides a foundation for safer automation.\n\nInstead of asking users for broad permissions, tools can integrate with DOER DAPP to:\n• Act only within user-defined constraints\n• Make execution rules explicit\n• Reduce the risk of over-authorization\n\nThis allows developers to build powerful features without requiring users to blindly trust their software.`}
                />

                <UserSegment
                    title="For DAO Participants"
                    content={`DAOs frequently rely on recurring actions, delegated execution, and shared operational tools.\n\nDOER DAPP supports DAO workflows by enabling:\n• Clear delegation boundaries\n• Time-limited execution authority\n• Transparent tracking of what was allowed and executed\n\nThis helps DAOs balance efficiency with accountability.`}
                />

                <div className={styles.section}>
                    <SectionHeader title="Open by Design" />
                    <p className={styles.text}>DOER DAPP is intentionally open and composable.</p>
                    <BulletPoint title="Understandable" text="without deep protocol knowledge" />
                    <BulletPoint title="Enforceable" text="on-chain" />
                    <BulletPoint title="Integratable" text="into existing tools and interfaces" />

                    <p className={styles.text} style={{ marginTop: 20 }}>
                        The goal is not to create a new silo, but to offer primitives that others can build on safely.
                    </p>
                </div>

                <div className={styles.section}>
                    <SectionHeader title="Not Just for Engineers" />
                    <p className={styles.text}>
                        Although DOER DAPP exposes technical interfaces for developers, its purpose is broader.
                    </p>
                    <p className={styles.text}>
                        Even if you never write code, DOER DAPP affects how you interact with crypto by making permissions clearer, making automation safer, and making authority easier to reason about.
                    </p>
                    <p className={styles.text}>
                        It is infrastructure designed to serve users first, while remaining usable by builders.
                    </p>
                </div>

                <div className={styles.section}>
                    <SectionHeader title="Where to Go Next" />
                    <BulletPoint title="A user:" text="explore how DOER DAPP changes approvals and permissions" />
                    <BulletPoint title="A builder:" text="explore how intents and mandates work" />
                    <BulletPoint title="A DAO contributor:" text="explore controlled delegation models" />

                    <p className={styles.text} style={{ marginTop: 20 }}>
                        The documentation is structured to meet you where you are, without assuming a single role.
                    </p>
                </div>
            </div>
        </div>
    );
}

function UserSegment({ title, content }: { title: string; content: string }) {
    return (
        <div className={styles.section} style={{ marginBottom: 40 }}>
            <h3 className={styles.stepTitle}>{title}</h3>
            <p className={styles.text} style={{ whiteSpace: "pre-line" }}>{content}</p>
        </div>
    );
}

function BulletPoint({ title, text }: { title: string; text: string }) {
    return (
        <div className={styles.bulletPoint}>
            <Circle size={6} className={styles.bulletIcon} style={{ fill: "rgba(255,255,255,0.7)", color: "transparent", marginTop: 8 }} />
            <p className={styles.text}>
                <span className={styles.bold} style={{ color: "#fff" }}>{title}</span> {text}
            </p>
        </div>
    );
}
