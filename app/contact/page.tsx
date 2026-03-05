import SectionHeader from "@/components/UI/SectionHeader";
import styles from "./page.module.css";
import { Send } from "lucide-react";

export default function ContactPage() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <SectionHeader
                    title="Contact Us"
                    subtitle="Have questions about DOER DAPP? Send us a message."
                />

                {/* FormSubmit.co Integration */}
                <form
                    action="https://formsubmit.co/info@doerdapp.com"
                    method="POST"
                    className={styles.form}
                >
                    {/* Disable reCAPTCHA visually for better UX */}
                    <input type="hidden" name="_captcha" value="false" />

                    {/* Return URL after submission */}
                    <input type="hidden" name="_next" value="https://doerdapp.com" />

                    {/* Disable automatic template, only send values */}
                    <input type="hidden" name="_template" value="table" />

                    <div className={styles.inputGroup}>
                        <label htmlFor="name" className={styles.label}>Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className={styles.input}
                            placeholder="Your Name"
                            required
                        />
                    </div>

                    <div className={styles.inputGroup}>
                        <label htmlFor="email" className={styles.label}>Email Address</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className={styles.input}
                            placeholder="you@example.com"
                            required
                        />
                    </div>

                    <div className={styles.inputGroup}>
                        <label htmlFor="message" className={styles.label}>Message</label>
                        <textarea
                            id="message"
                            name="message"
                            className={styles.textarea}
                            placeholder="How can we help?"
                            required
                        />
                    </div>

                    <button type="submit" className={styles.button}>
                        Send Message
                        <Send size={16} />
                    </button>
                </form>
            </div>
        </div>
    );
}
