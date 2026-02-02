import SectionHeader from "@/components/UI/SectionHeader";
import InfoCard from "@/components/UI/InfoCard";
import styles from "@/components/Layout/ContentPage.module.css";
import { Coins, AppWindow, Clock } from "lucide-react";

export default function IntentsPage() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <SectionHeader
                    title="Intents"
                    subtitle="A clear instruction with boundaries."
                />

                <div className={styles.section}>
                    <SectionHeader title="What Is an Intent?" />
                    <p className={styles.text}>
                        An intent is how you tell DOER DAPP what you want to happen. It is not a transaction. It does not move funds by itself.
                    </p>
                </div>

                <div className={styles.section}>
                    <SectionHeader title="Why Intents Matter" />
                    <p className={styles.text}>
                        Most wallets ask you to approve actions one by one. Intents let you set expectations once, avoid repeated approvals, and keep control without micromanaging. You decide the goal. DOER DAPP handles execution within your limits.
                    </p>
                </div>

                <div className={styles.section}>
                    <SectionHeader title="Limits Are the Point" />
                    <p className={styles.text}>
                        Every intent includes limits. If a limit is reached, execution stops.
                    </p>
                    <div className={styles.grid3}>
                        <InfoCard
                            title="Amounts"
                            description="Maximum amounts that can be used."
                            icon={<Coins size={32} />}
                        />
                        <InfoCard
                            title="Apps"
                            description="Which apps or contracts are allowed."
                            icon={<AppWindow size={32} />}
                        />
                        <InfoCard
                            title="Time"
                            description="Specific time windows for execution."
                            icon={<Clock size={32} />}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
