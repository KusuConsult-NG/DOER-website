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
                        While DOER introduces new ways to express intent, automate actions, and enforce transaction policies, its purpose is not to replace existing tools. Instead, it acts as a coordination layer that improves how users authorize and execute on-chain actions.
                    </p>
                    <p className={styles.text} style={{ marginTop: 20 }}>
                        Whether someone interacts with crypto through a wallet, a trading interface, a DAO dashboard, or a custom application, DOER is designed to fit into that flow rather than compete with it.
                    </p>
                    <p className={styles.text} style={{ marginTop: 20 }}>
                        The protocol focuses on one goal: <span style={{ fontWeight: 600, color: "#fff" }}>Make automation, permissions, and execution safer, clearer, and programmable across the ecosystem.</span>
                    </p>
                </div>

                <UserSegment
                    title="For Wallet Users"
                    content={`For everyday users, DOER improves how on-chain actions are authorized.\n\nMost wallets today require one of two behaviors:\n• Approve similar transactions repeatedly, or\n• Grant broad permissions that remain active indefinitely.\n\nDOER introduces a third option. Users can define intents and policies once, then allow actions to execute automatically within clearly defined limits.\n\nThis reduces both friction and risk for people who frequently interact with:`}
                >
                    <div style={{ marginLeft: 10, marginTop: 10, marginBottom: 20 }}>
                        <BulletPoint text="DeFi protocols" />
                        <BulletPoint text="NFT marketplaces" />
                        <BulletPoint text="staking and reward systems" />
                        <BulletPoint text="governance tools" />
                    </div>
                    <p className={styles.text}>
                        You do not need to understand how the protocol works internally to benefit from it. If you understand what you are allowing and why, DOER works in your favor.
                    </p>
                </UserSegment>

                <UserSegment
                    title="For Power Users"
                    content={`Power users often combine multiple tools, strategies, and automation scripts. While this increases efficiency, it also increases exposure to permission risk.\n\nDOER provides a safer structure for these workflows. Power users can:`}
                >
                    <div style={{ marginLeft: 10, marginTop: 10, marginBottom: 20 }}>
                        <BulletPoint text="automate repeated on-chain actions" />
                        <BulletPoint text="limit the maximum value that can be executed" />
                        <BulletPoint text="restrict execution to specific contracts" />
                        <BulletPoint text="enforce expiration times for permissions" />
                    </div>
                    <p className={styles.text}>
                        This makes automation more predictable and auditable. Instead of relying entirely on external bots or scripts, users rely on on-chain policy enforcement that cannot be bypassed.
                    </p>
                </UserSegment>

                <UserSegment
                    title="For Tool Builders"
                    content={`For developers building Web3 tools, DOER provides a safer automation foundation.\n\nMany tools today request permissions that are broader than necessary. This increases risk for users and liability for developers.\n\nBy integrating with DOER, tools can:`}
                >
                    <div style={{ marginLeft: 10, marginTop: 10, marginBottom: 20 }}>
                        <BulletPoint text="operate only within user-defined constraints" />
                        <BulletPoint text="make automation rules explicit" />
                        <BulletPoint text="reduce the need for persistent permissions" />
                        <BulletPoint text="allow users to revoke authority at any time" />
                    </div>
                    <p className={styles.text}>
                        Developers gain powerful capabilities without needing to hold custody of user assets or request unlimited approvals. This encourages the development of more responsible automation systems.
                    </p>
                </UserSegment>

                <UserSegment
                    title="For DAOs and Communities"
                    content={`DAOs frequently rely on shared operational workflows. Examples include:`}
                >
                    <div style={{ marginLeft: 10, marginTop: 10, marginBottom: 20 }}>
                        <BulletPoint text="treasury operations" />
                        <BulletPoint text="governance execution" />
                        <BulletPoint text="reward distribution" />
                        <BulletPoint text="recurring operational tasks" />
                    </div>
                    <p className={styles.text} style={{ marginBottom: 10 }}>
                        These workflows often require delegated authority, which can be difficult to manage safely. DOER allows DAOs to delegate execution authority without losing control.
                    </p>
                    <p className={styles.text}>DAO participants can define:</p>
                    <div style={{ marginLeft: 10, marginTop: 10, marginBottom: 20 }}>
                        <BulletPoint text="time-limited authority" />
                        <BulletPoint text="spending limits" />
                        <BulletPoint text="execution frequency" />
                        <BulletPoint text="contract allowlists" />
                    </div>
                    <p className={styles.text}>
                        This makes delegation transparent and auditable while preserving operational efficiency.
                    </p>
                </UserSegment>

                <UserSegment
                    title="For Web3 Contributors"
                    content={`DOER also introduces on-chain work infrastructure. Projects can publish tasks directly through the protocol, allowing contributors to complete work and receive rewards on-chain.\n\nExamples include:`}
                >
                    <div style={{ marginLeft: 10, marginTop: 10, marginBottom: 20 }}>
                        <BulletPoint text="testing applications" />
                        <BulletPoint text="community participation" />
                        <BulletPoint text="development tasks" />
                        <BulletPoint text="governance contributions" />
                    </div>
                    <p className={styles.text}>
                        Each completed task contributes to an on-chain reputation record, allowing contributors to build a verifiable Web3 work history. This creates new opportunities for participation across the ecosystem.
                    </p>
                </UserSegment>

                <div className={styles.section}>
                    <SectionHeader title="Open by Design" />
                    <p className={styles.text} style={{ marginBottom: 10 }}>DOER is intentionally designed to be open and composable. It is:</p>
                    <div style={{ marginLeft: 10, marginBottom: 20 }}>
                        <BulletPoint text="understandable without deep protocol knowledge" />
                        <BulletPoint text="enforceable through on-chain rules" />
                        <BulletPoint text="integratable into existing tools and interfaces" />
                    </div>
                    <p className={styles.text}>
                        The goal is not to create another isolated platform. The goal is to provide safe primitives that other systems can build on.
                    </p>
                </div>

                <div className={styles.section}>
                    <SectionHeader title="Not Just for Engineers" />
                    <p className={styles.text}>
                        Although DOER exposes technical interfaces for developers, its purpose is broader.
                    </p>
                    <p className={styles.text} style={{ marginTop: 20, marginBottom: 10 }}>
                        Even if you never write code, DOER changes how you interact with crypto by:
                    </p>
                    <div style={{ marginLeft: 10, marginBottom: 20 }}>
                        <BulletPoint text="making permissions clearer" />
                        <BulletPoint text="making automation safer" />
                        <BulletPoint text="making transaction risk visible" />
                        <BulletPoint text="making authority easier to reason about" />
                    </div>
                    <p className={styles.text}>
                        It is infrastructure designed to serve users first, while remaining powerful for builders.
                    </p>
                </div>

                <div className={styles.section}>
                    <SectionHeader title="Where to Go Next" />
                    <div style={{ marginLeft: 10 }}>
                        <BulletPoint text="If you are a user, explore how DOER changes approvals and permissions." />
                        <BulletPoint text="If you are a builder, learn how intents, policies, and mandates work together." />
                        <BulletPoint text="If you are a DAO contributor, explore controlled delegation and automated execution models." />
                    </div>
                    <p className={styles.text} style={{ marginTop: 20 }}>
                        The documentation is structured to meet you where you are, without assuming a single role.
                    </p>
                </div>
            </div>
        </div>
    );
}

function UserSegment({ title, content, children }: { title: string; content: string, children?: React.ReactNode }) {
    return (
        <div className={styles.section} style={{ marginBottom: 40 }}>
            <h3 className={styles.stepTitle}>{title}</h3>
            <p className={styles.text} style={{ whiteSpace: "pre-line" }}>{content}</p>
            {children}
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
