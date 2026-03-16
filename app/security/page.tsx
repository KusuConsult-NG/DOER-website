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
                    <SectionHeader title="Security By Design" />
                    <p className={styles.text}>
                        DOER DAPP is built on the principle that automation should never require surrendering custody. Your wallet remains the owner of your funds at all times.
                    </p>
                </div>

                <div className={styles.section}>
                    <div className={styles.grid2}>
                        <InfoCard
                            title="What DOER DAPP Prevents"
                            description={`• Unlimited permissions\n• Silent automation\n• Actions beyond user limits\n• Forgotten approvals that remain active forever`}
                            icon={<ShieldAlert size={32} />}
                        />
                        <InfoCard
                            title="What DOER DAPP Cannot Fix"
                            description={`• Allowing unsafe applications yourself\n• Setting limits you do not understand\n\nAutomation increases power, but control always remains with the user.`}
                            icon={<TriangleAlert size={32} />}
                        />
                    </div>
                </div>

                <div className={styles.section}>
                    <SectionHeader title="Transaction Transparency" />
                    <p className={styles.text}>
                        Every automated action must match a policy you defined. Users always know:
                        <br /><br />
                        • what is allowed<br />
                        • who can trigger it<br />
                        • when it expires
                    </p>
                </div>
            </div>
        </div>
    );
}
