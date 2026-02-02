import styles from './SectionHeader.module.css';

interface SectionHeaderProps {
    title: string;
    subtitle?: string;
    align?: 'left' | 'center';
}

export default function SectionHeader({
    title,
    subtitle,
    align = 'left',
}: SectionHeaderProps) {
    return (
        <div className={`${styles.container} ${styles[align]}`}>
            <div className={styles.divider} />
            <h2 className={styles.title}>{title}</h2>
            {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </div>
    );
}
