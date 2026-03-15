import Image from "next/image";
import { AlertCircle, Lightbulb, ScrollText, Shield, Gavel, Timer, Eye, Wallet, Cpu, FileDigit, Briefcase, ShieldCheck } from "lucide-react";
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
            DOER DAPP lets you tell your wallet what you want done, define clear
            limits, and let actions happen safely without watching every
            transaction.<br /><br />
            With the DOER Intent Engine, automation happens only within rules you set. Your wallet becomes programmable, transparent, and secure.
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
            title="Why traditional wallets fail us"
            description={`Using crypto today usually means choosing between two extremes:\n• Approving every action manually (secure but exhausting)\n• Granting broad permissions to automation tools (convenient but risky)\n\nNeither option truly respects user control.\nManual approvals slow everything down.\nUnlimited permissions create hidden risk.\nThe result is a system where convenience often comes at the cost of security.`}
            icon={<AlertCircle size={32} />}
          />
        </div>
      </section>

      {/* APPROACH SECTION (Row of 3) */}
      <section className={styles.section}>
        <SectionHeader title="The DOER DAPP Approach" subtitle="DOER introduces intent-driven execution. Instead of approving transactions one by one, you define what should happen and the limits within which it can happen. Every automated action follows three rules:" />
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
            description="The exact boundaries the action cannot exceed."
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
            description="Every automated action follows limits you define in advance."
            icon={<Gavel size={32} />}
          />
          <InfoCard
            title="Nothing Runs Forever"
            description="Permissions expire and can be stopped instantly."
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

      {/* NEW CAPABILITIES SECTION */}
      <section className={styles.section}>
        <SectionHeader title="New Capabilities in DOER DAPP" />
        <div className={styles.grid2}>
          <InfoCard
            title="Intent Engine"
            description={`The DOER Intent Engine allows users to interact with their wallet using natural instructions.\n\nInstead of navigating complex interfaces, users can define actions such as:\n"Claim staking rewards every day."\nwait, or\n"Swap tokens if the price reaches a specific level."\n\nThe system converts these instructions into structured policies that control execution. Automation becomes safe because every action must pass on-chain policy validation.`}
            icon={<Cpu size={32} />}
          />
          <InfoCard
            title="Policy-Driven Automation"
            description={`Traditional wallets execute transactions immediately.\nDOER allows users to define execution policies that govern when and how transactions can occur.\n\nExample policy:\n"Claim rewards daily but never spend more than 0.1 SOL in gas."\n\nEvery automated transaction must pass the policy rules before execution. This prevents automation from exceeding user-defined limits.`}
            icon={<FileDigit size={32} />}
          />
          <InfoCard
            title="On-Chain Work and Reputation"
            description={`DOER introduces a new way to participate in Web3.\nUsers can complete tasks posted by DAOs, developers, and protocols directly from their wallet.\n\nExamples include:\n• testing applications\n• contributing to communities\n• completing development tasks\n• participating in governance\n\nOnce work is verified, rewards are distributed on-chain. Each completed task contributes to a verifiable on-chain work history. Your wallet becomes a decentralized reputation profile.`}
            icon={<Briefcase size={32} />}
          />
          <InfoCard
            title="Transaction Risk Intelligence"
            description={`Signing transactions in Web3 often requires blind trust.\nDOER introduces transaction risk analysis before approval.\nEvery transaction is analyzed and explained before signing.\n\nExample preview:\nTransaction Approval\nAsset: USDC\nSpending Limit: Unlimited\nContract Risk Level: Medium\n\nThis transparency helps users understand exactly what they are approving before committing.`}
            icon={<ShieldCheck size={32} />}
          />
        </div>
      </section>

      <div style={{ height: 120 }} /> {/* Bottom Spacing */}
    </div>
  );
}
