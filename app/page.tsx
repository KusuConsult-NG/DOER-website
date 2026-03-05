import Image from "next/image";
import { AlertCircle, Lightbulb, ScrollText, Shield, Gavel, Timer, Eye, Wallet } from "lucide-react";
import AppStoreBadge from "@/components/UI/AppStoreBadge";
import SectionHeader from "@/components/UI/SectionHeader";
import InfoCard from "@/components/UI/InfoCard"; // Will create this shortly
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      {/* HERO SECTION */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Do More <br />
            On-Chain, <br />
            <span className={styles.heroHighlight}>With Control.</span>
          </h1>
          <p className={styles.heroSubtitle}>
            DOER DAPP lets you tell your wallet what you want done, set clear
            limits, and let actions happen safely without watching every
            transaction.
          </p>

          <div className={styles.heroBadges}>
            <AppStoreBadge
              storeName="Solana DApp store"
              href="https://apps.apple.com"
            />
            <AppStoreBadge
              storeName="Google Play"
              href="https://play.google.com/store/apps/details?id=com.kusuconsult.doer"
            />
          </div>
        </div>

        <div className={styles.heroVisual}>
          <div className={styles.logoWrapper}>
            <Image
              src="/logo.png"
              alt="DOER DAPP Floating Logo"
              width={400}
              height={400}
              className={styles.floatingLogo}
              priority
            />
          </div>
        </div>
      </section>

      {/* PROBLEM SECTION */}
      <section className={styles.section}>
        <SectionHeader title="The Problem" subtitle="Why traditional wallets fail us." />
        <div className={styles.singleCardWrapper}>
          <InfoCard
            title="The Tradeoff"
            description={`Using crypto today usually means one of two things: You either approve everything manually (exhausting), or give tools broad permissions (risky).\n\nThis is not just a convenience issue. It is about who stays in control.`}
            icon={<AlertCircle size={32} />}
          />
        </div>
      </section>

      {/* APPROACH SECTION (Row of 3) */}
      <section className={styles.section}>
        <SectionHeader title="The DOER DAPP Approach" />
        <div className={styles.grid3}>
          <InfoCard
            title="Intent"
            description="What you want to happen."
            icon={<Lightbulb size={32} />}
          />
          <InfoCard
            title="Conditions"
            description="Under what conditions."
            icon={<ScrollText size={32} />}
          />
          <InfoCard
            title="Limits"
            description="Within what limits."
            icon={<Shield size={32} />}
          />
        </div>
      </section>

      {/* PRINCIPLES SECTION (Grid of 2x2) */}
      <section className={styles.section}>
        <SectionHeader title="Core Principles" />
        <div className={styles.grid2}>
          <InfoCard
            title="You Decide the Rules"
            description="Every action follows rules you define in advance."
            icon={<Gavel size={32} />}
          />
          <InfoCard
            title="Nothing Runs Forever"
            description="Permissions expire and can be stopped at any time."
            icon={<Timer size={32} />}
          />
          <InfoCard
            title="No Hidden Access"
            description="If something can act on your behalf, you can see exactly what it is allowed to do."
            icon={<Eye size={32} />}
          />
          <InfoCard
            title="Your Assets Stay Yours"
            description="DOER DAPP never takes custody of your funds."
            icon={<Wallet size={32} />}
          />
        </div>
      </section>

      <div style={{ height: 120 }} /> {/* Bottom Spacing */}
    </div>
  );
}
