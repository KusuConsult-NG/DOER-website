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
                        title="You Define an Intent"
                        description={`An intent describes what goal you want achieved.\n\nExample:\nBuy an asset\nSwap tokens\nClaim rewards`}
                    />
                    <Step
                        number="02"
                        title="You Set Boundaries"
                        description={`You define limits including:\n• approved contracts\n• maximum spending\n• execution frequency\n• expiration time\n\nThese limits are enforced rules.`}
                    />
                    <Step
                        number="03"
                        title="DOER DAPP Prepares Execution"
                        description="Automation executors monitor intents and prepare transactions when conditions are met."
                    />
                    <Step
                        number="04"
                        title="Rules Are Checked"
                        description={`Before execution:\n• limits are verified\n• expiration is checked\n• permissions are validated\n\nIf something does not match, the transaction simply does not run.`}
                    />
                    <Step
                        number="05"
                        title="Action Happens On-Chain"
                        description="Only after all rules pass does execution occur. Every action can be traced back to the policy you defined."
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
