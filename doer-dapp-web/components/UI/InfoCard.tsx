import styles from './InfoCard.module.css';
import { LucideIcon } from 'lucide-react';

interface InfoCardProps {
    title: string;
    description: string;
    icon?: React.ReactNode;
}

export default function InfoCard({ title, description, icon }: InfoCardProps) {
    return (
        <div className={styles.card}>
            <div className={styles.iconWrapper}>
                {icon}
            </div>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
        </div>
    );
}
