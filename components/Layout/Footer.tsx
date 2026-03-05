import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.topSection}>
                    {/* Brand & App Badges */}
                    <div className={styles.brandColumn}>
                        <h3 className={styles.brandName}>DOER DAPP</h3>
                        <p className={styles.brandTagline}>Your outcome-driven wallet.</p>

                        <div className={styles.badges}>
                            {/* Placeholder App Store Badges - Styling only for now or external links */}
                            <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" className={styles.storeLink}>
                                App Store
                            </a>
                            <a href="https://play.google.com" target="_blank" rel="noopener noreferrer" className={styles.storeLink}>
                                Google Play
                            </a>
                        </div>
                    </div>

                    {/* Links */}
                    <div className={styles.linksColumn}>
                        <FooterLink label="X" href="https://x.com/DoerDApp" />
                        <FooterLink label="GitHub" href="https://github.com/DoerDApp" />
                        <FooterLink label="Contact Us" href="mailto:info@doerdapp.com" />
                    </div>
                </div>

                <div className={styles.bottomSection}>
                    <p className={styles.copyright}>© 2026 DOER DAPP. All rights reversed.</p>
                </div>
            </div>
        </footer>
    );
}

function FooterLink({ label, href }: { label: string; href: string }) {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={styles.footerLink}>
            {label}
            <ArrowUpRight size={14} className={styles.icon} />
        </a>
    );
}
