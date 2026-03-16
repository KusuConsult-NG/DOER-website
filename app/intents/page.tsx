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
                        An intent is how you tell DOER DAPP what you want to happen. It is not a transaction. It defines a goal and the boundaries for achieving it.
                    </p>
                </div>

                <div className={styles.section}>
                    <SectionHeader title="Why Intents Matter" />
                    <p className={styles.text}>
                        Most wallets require constant manual approvals. Intents allow users to define expectations once while keeping strict limits in place. You define the goal. DOER DAPP handles execution safely.
                    </p>
                </div>

                <div className={styles.section}>
                    <SectionHeader title="Limits Are the Point" />
                    <p className={styles.text}>
                        Every intent contains strict boundaries. Execution stops automatically if limits are reached. Examples include:
                    </p>
                    <div className={styles.grid3}>
                        <InfoCard
                            title="Maximum Spending"
                            description="Limits on how much value can be executed."
                            icon={<Coins size={32} />}
                        />
                        <InfoCard
                            title="Allowed Contracts"
                            description="Which apps or contracts are permitted."
                            icon={<AppWindow size={32} />}
                        />
                        <InfoCard
                            title="Execution Frequency"
                            description="How often actions can occur."
                            icon={<Clock size={32} />}
                        />
                        <InfoCard
                            title="Time Windows"
                            description="Specific timeframes for execution."
                            icon={<Clock size={32} />}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
