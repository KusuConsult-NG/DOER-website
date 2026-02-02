import SectionHeader from "@/components/UI/SectionHeader";
import InfoCard from "@/components/UI/InfoCard";
import styles from "@/components/Layout/ContentPage.module.css";
import { Ban } from "lucide-react";

export default function MandatesPage() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <SectionHeader
                    title="Mandates"
                    subtitle="Permission with an expiration date."
                />

                <div className={styles.section}>
                    <SectionHeader title="What Is a Mandate?" />
                    <p className={styles.text}>
                        A mandate answers the question: Who is allowed to act, and for how long?
                    </p>
                </div>

                <div className={styles.section}>
                    <SectionHeader title="What Mandates Control" />
                    <p className={styles.text}>
                        A mandate defines who can trigger actions, how often actions can occur, and when permission ends. Mandates do not transfer ownership. They only allow limited action.
                    </p>
                </div>

                <div className={styles.section}>
                    <div className={styles.grid2}>
                        <InfoCard
                            title="You Can Stop It Anytime"
                            description="You can revoke a mandate instantly. No waiting. No negotiations. No locked permissions."
                            icon={<Ban size={32} />}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
