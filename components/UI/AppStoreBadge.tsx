import Link from "next/link";
import { Download } from "lucide-react";
import styles from "./AppStoreBadge.module.css";

interface AppStoreBadgeProps {
    storeName: string;
    icon?: React.ReactNode;
    href: string;
}

export default function AppStoreBadge({
    storeName,
    icon,
    href,
}: AppStoreBadgeProps) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.badge}
        >
            <div className={styles.iconWrapper}>{icon || <Download size={20} />}</div>
            <div className={styles.textWrapper}>
                <span className={styles.label}>Download on the</span>
                <span className={styles.storeName}>{storeName}</span>
            </div>
        </a>
    );
}
