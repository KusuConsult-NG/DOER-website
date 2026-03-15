import SectionHeader from "@/components/UI/SectionHeader";
import styles from "./page.module.css";
import { Circle } from "lucide-react";

export default function DustSweepPage() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <SectionHeader
                    title="Dust Sweep"
                    subtitle="Consolidate your small balances easily."
                />

                <div className={styles.section}>
                    <SectionHeader title="Consolidate Small Balances" />
                    <p className={styles.text}>
                        Over time, wallets accumulate small leftover balances called dust.
                    </p>
                    <p className={styles.text}>
                        DOER allows users to consolidate these small assets into a single usable token.
                    </p>
                </div>

                <div className={styles.section}>
                    <SectionHeader title="How It Works" />
                    <BulletPoint
                        title="Identify Dust"
                        text="The protocol scans the wallet for small balances."
                    />
                    <BulletPoint
                        title="Approve Conversion"
                        text="Users define an intent allowing dust consolidation."
                    />
                    <BulletPoint
                        title="Consolidate"
                        text="Doer agents convert small assets into a preferred token such as USDC."
                    />
                </div>

                <div className={styles.section}>
                    <SectionHeader title="Coming Soon" />
                    <p className={styles.text}>
                        This feature is currently under active development. Stay tuned for more updates on when the Dust Sweep functionality will be available in the DOER DAPP ecosystem.
                    </p>
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
