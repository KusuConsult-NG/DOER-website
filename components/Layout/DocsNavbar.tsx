"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";
import styles from "./DocsNavbar.module.css";

const navLinks = [
    { label: "Home", path: "/developers" },
    { label: "Getting Started", path: "/developers/getting-started" },
    { label: "Architecture", path: "/developers/architecture" },
];

export default function DocsNavbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>
                {/* Logo / Brand */}
                <Link href="/developers" className={styles.logoLink}>
                    <Image
                        src="/logo.png"
                        alt="DOER DAPP Logo"
                        width={40}
                        height={40}
                        className={styles.logo}
                    />
                    <div className={styles.badge}>DOCS</div>
                </Link>

                {/* Desktop Links */}
                <div className={styles.desktopLinks}>
                    {navLinks.map((link) => (
                        <Link key={link.path} href={link.path} className={styles.link}>
                            {link.label}
                        </Link>
                    ))}

                    <Link href="/" className={styles.mainSiteBtn}>
                        <span>Main Site</span>
                        <ArrowUpRight size={14} style={{ opacity: 0.7 }} />
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className={styles.menuToggle}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className={styles.mobileMenu}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            href={link.path}
                            className={styles.mobileLink}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link
                        href="/"
                        className={styles.mobileLink}
                        onClick={() => setIsMenuOpen(false)}
                        style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
                    >
                        Main Site <ArrowUpRight size={14} style={{ display: 'inline', marginLeft: 8 }} />
                    </Link>
                </div>
            )}
        </nav>
    );
}
