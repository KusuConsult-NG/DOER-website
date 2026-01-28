import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:url_launcher/url_launcher.dart';
import '../widgets/ui_components.dart';

class HomePage extends StatelessWidget {
  const HomePage({super.key});

  @override
  Widget build(BuildContext context) {
    return Center(
      child: ConstrainedBox(
        constraints: const BoxConstraints(maxWidth: 1200),
        child: Padding(
          padding: const EdgeInsets.symmetric(horizontal: 24),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              const SizedBox(height: 80),

              // --- HERO SECTION ---
              // Premium, large typography with subtle gradients
              RichText(
                text: TextSpan(
                  style: GoogleFonts.outfit(
                    fontSize: 100,
                    fontWeight: FontWeight.w800,
                    height: 1.05,
                    letterSpacing: -2.0,
                    color: Colors.white,
                  ),
                  children: [
                    const TextSpan(text: 'Do More\nOn-Chain,\n'),
                    TextSpan(
                      text: 'With Control.',
                      style: TextStyle(
                        color: const Color(0xFF2563EB),
                        shadows: [
                          Shadow(
                            color: const Color(
                              0xFF2563EB,
                            ).withValues(alpha: 0.5),
                            blurRadius: 20,
                          ),
                        ],
                        decoration: TextDecoration.none,
                      ),
                    ),
                    // Note: Gradient text is complex in raw Flutter text spans, simpler to use color or shaders.
                    // For now, let's stick to a vibrant Blue Accent.
                    const TextSpan(
                      text: '',
                      style: TextStyle(color: Color(0xFF2563EB)),
                    ),
                  ],
                ),
              ),
              const SizedBox(height: 32),
              SizedBox(
                width: 700,
                child: Text(
                  'DOER lets you tell your wallet what you want done, set clear limits, and let actions happen safely without watching every transaction.',
                  style: GoogleFonts.inter(
                    fontSize: 20,
                    color: Colors.grey[400],
                    height: 1.6,
                  ),
                ),
              ),
              const SizedBox(height: 48),
              Wrap(
                spacing: 16,
                runSpacing: 16,
                children: [
                  AppStoreBadge(
                    storeName: 'App Store',
                    icon: Icons.apple,
                    onPressed: () {
                      const url = 'https://apps.apple.com';
                      launchUrl(
                        Uri.parse(url),
                        mode: LaunchMode.externalApplication,
                      );
                    },
                  ),
                  AppStoreBadge(
                    storeName: 'Google Play',
                    icon: Icons.android,
                    onPressed: () {
                      const url = 'https://play.google.com';
                      launchUrl(
                        Uri.parse(url),
                        mode: LaunchMode.externalApplication,
                      );
                    },
                  ),
                ],
              ),

              const SizedBox(height: 180),

              // --- PROBLEM SECTION ---
              const SectionHeader(title: 'The Problem'),
              const SizedBox(height: 40),
              const InfoCard(
                title: 'The Tradeoff',
                description:
                    'Using crypto today usually means one of two things: You either approve everything manually (exhausting), or give tools broad permissions (risky).\n\nThis is not just a convenience issue. It is about who stays in control.',
                icon: Icons.error_outline,
              ),

              const SizedBox(height: 140),

              // --- APPROACH SECTION ---
              const SectionHeader(title: 'The DOER Approach'),
              const SizedBox(height: 40),
              Wrap(
                spacing: 24,
                runSpacing: 24,
                children: const [
                  SizedBox(
                    width: 350,
                    child: InfoCard(
                      title: 'Intent',
                      description: 'What you want to happen.',
                      icon: Icons.lightbulb_outline,
                    ),
                  ),
                  SizedBox(
                    width: 350,
                    child: InfoCard(
                      title: 'Conditions',
                      description: 'Under what conditions.',
                      icon: Icons.rule,
                    ),
                  ),
                  SizedBox(
                    width: 350,
                    child: InfoCard(
                      title: 'Limits',
                      description: 'Within what limits.',
                      icon: Icons.shield_outlined,
                    ),
                  ),
                ],
              ),

              const SizedBox(height: 140),

              // --- PRINCIPLES SECTION ---
              const SectionHeader(title: 'Core Principles'),
              const SizedBox(height: 40),
              Wrap(
                spacing: 24,
                runSpacing: 24,
                children: const [
                  SizedBox(
                    width: 550,
                    child: InfoCard(
                      title: 'You Decide the Rules',
                      description:
                          'Every action follows rules you define in advance.',
                      icon: Icons.gavel_outlined,
                    ),
                  ),
                  SizedBox(
                    width: 550,
                    child: InfoCard(
                      title: 'Nothing Runs Forever',
                      description:
                          'Permissions expire and can be stopped at any time.',
                      icon: Icons.timer_outlined,
                    ),
                  ),
                  SizedBox(
                    width: 550,
                    child: InfoCard(
                      title: 'No Hidden Access',
                      description:
                          'If something can act on your behalf, you can see exactly what it is allowed to do.',
                      icon: Icons.visibility_outlined,
                    ),
                  ),
                  SizedBox(
                    width: 550,
                    child: InfoCard(
                      title: 'Your Assets Stay Yours',
                      description: 'DOER never takes custody of your funds.',
                      icon: Icons.account_balance_wallet_outlined,
                    ),
                  ),
                ],
              ),

              const SizedBox(height: 120),
            ],
          ),
        ),
      ),
    );
  }
}
