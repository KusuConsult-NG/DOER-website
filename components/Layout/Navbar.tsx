"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";
import styles from "./Navbar.module.css";

const navLinks = [
    { label: "How It Works", path: "/how-it-works" },
    { label: "Intents", path: "/intents" },
    { label: "Mandates", path: "/mandates" },
    { label: "Security", path: "/security" },
    { label: "Dust Sweep", path: "/dust-sweep" },
    { label: "About", path: "/about" },
];

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>
                {/* Logo */}
                <Link href="/" className={styles.logoLink}>
                    <div className={styles.logoContainer}>
                        <Image
                            src="/logo.png"
                            alt="DOER DAPP Logo"
                            width={50}
                            height={50}
                            className={styles.logo}
                        />
                    </div>
                </Link>

                {/* Desktop Links */}
                <div className={styles.desktopLinks}>
                    {navLinks.map((link) => (
                        <Link key={link.path} href={link.path} className={styles.link}>
                            {link.label}
                        </Link>
                    ))}
                </div>

                {/* CTA & Mobile Toggle */}
                <div className={styles.actions}>
                    <Link
                        href="/developers/getting-started"
                        className={styles.cta}
                    >
                        <span>Getting Started</span>
                        <ArrowUpRight size={16} />
                    </Link>

                    <button
                        className={styles.menuToggle}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
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
                </div>
            )}
        </nav>
    );
}
