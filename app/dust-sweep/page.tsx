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
                    <SectionHeader title="What is Dust Sweep?" />
                    <p className={styles.text}>
                        Over time, as you interact with various DApps and tokens, you may accumulate small, leftover balances known as &quot;dust.&quot; These amounts are often too small to be transferred or traded individually due to gas costs.
                    </p>
                    <p className={styles.text}>
                        The DOER DAPP Dust Sweep feature allows you to seamlessly consolidate these small balances into a single, usable asset. This helps keep your wallet organized and maximizes the value of your portfolio.
                    </p>
                </div>

                <div className={styles.section}>
                    <SectionHeader title="How It Works" />
                    <BulletPoint
                        title="Identify Dust:"
                        text="The protocol automatically scans your wallet for balances below a customizable threshold."
                    />
                    <BulletPoint
                        title="Approve Conversion:"
                        text='You define an intent to allow the "sweeping" of these assets.'
                    />
                    <BulletPoint
                        title="Consolidate:"
                        text="The Doer agents execute the trades optimally to convert your dust into your preferred core asset (e.g., ETH or USDC)."
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
