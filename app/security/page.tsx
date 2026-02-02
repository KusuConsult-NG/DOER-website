import SectionHeader from "@/components/UI/SectionHeader";
import InfoCard from "@/components/UI/InfoCard";
import styles from "@/components/Layout/ContentPage.module.css";
import { ShieldAlert, TriangleAlert } from "lucide-react";

export default function SecurityPage() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <SectionHeader
                    title="Security"
                    subtitle="Your assets are never held."
                />

                <div className={styles.section}>
                    <p className={styles.text}>
                        DOER DAPP does not hold your funds. Your wallet remains the owner at all times.
                    </p>
                </div>

                <div className={styles.section}>
                    <div className={styles.grid2}>
                        <InfoCard
                            title="What DOER DAPP Prevents"
                            description={`• Unlimited permissions\n• Silent automation\n• Actions beyond what you allowed\n• Forgotten approvals that stay active forever`}
                            icon={<ShieldAlert size={32} />}
                        />
                        <InfoCard
                            title="What DOER DAPP Cannot Fix"
                            description={`• Allowing unsafe apps yourself\n• Setting limits you do not understand\n\nControl comes with responsibility.`}
                            icon={<TriangleAlert size={32} />}
                        />
                    </div>
                </div>

                <div className={styles.section}>
                    <SectionHeader title="Why Transparency Matters" />
                    <p className={styles.text}>
                        DOER DAPP does not hide complexity behind vague approvals. If something can act for you, you should know exactly how.
                    </p>
                </div>
            </div>
        </div>
    );
}
