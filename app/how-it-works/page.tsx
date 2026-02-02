import SectionHeader from "@/components/UI/SectionHeader";
import styles from "@/components/Layout/ContentPage.module.css";

export default function HowItWorksPage() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <SectionHeader
                    title="How It Works"
                    subtitle="This is how DOER DAPP works from a user’s point of view."
                />

                <div className={styles.section}>
                    <Step
                        number="01"
                        title="You Say What You Want"
                        description="You describe an outcome you care about. That might be managing repeated actions, allowing limited execution under certain conditions, or reducing manual approvals. You are not approving a transaction yet. You are describing intent."
                    />
                    <Step
                        number="02"
                        title="You Set Boundaries"
                        description="Next, you define limits. For example: which apps or contracts are allowed, maximum amounts that can be used, and how long this permission should last. These limits are not suggestions. They are enforced rules."
                    />
                    <Step
                        number="03"
                        title="DOER DAPP Prepares Execution"
                        description="When conditions are met, an execution is prepared that follows your rules. Nothing happens silently. Nothing can exceed what you allowed."
                    />
                    <Step
                        number="04"
                        title="Rules Are Checked"
                        description="Before anything executes: Your limits are checked, expiry is checked, and permissions are verified. If something does not match, it simply does not run."
                    />
                    <Step
                        number="05"
                        title="Action Happens On-Chain"
                        description="Only after all rules pass does execution occur. Everything can be traced back to what you allowed, when you allowed it, and under what limits."
                    />
                </div>
            </div>
        </div>
    );
}

function Step({ number, title, description }: { number: string; title: string; description: string }) {
    return (
        <div className={styles.step}>
            <span className={styles.stepNumber}>{number}</span>
            <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>{title}</h3>
                <p className={styles.text}>{description}</p>
            </div>
        </div>
    )
}
