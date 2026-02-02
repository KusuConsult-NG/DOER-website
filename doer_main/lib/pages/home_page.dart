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

              // --- HERO SECTION (SPLIT LAYOUT) ---
              Row(
                crossAxisAlignment: CrossAxisAlignment.center,
                children: [
                  // LEFT: Typography
                  Expanded(
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
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
                            ],
                          ),
                        ),
                        const SizedBox(height: 32),
                        SizedBox(
                          width: 600,
                          child: Text(
                            'DOER DAPP lets you tell your wallet what you want done, set clear limits, and let actions happen safely without watching every transaction.',
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
                      ],
                    ),
                  ),

                  // RIGHT: Massive Floating Logo
                  SizedBox(
                    height: 500,
                    width: 500,
                    child: Center(child: _FloatingHeroLogo()),
                  ),
                ],
              ),
              const SizedBox(height: 120),

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
              const SectionHeader(title: 'The DOER DAPP Approach'),
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
                      description:
                          'DOER DAPP never takes custody of your funds.',
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

class _FloatingHeroLogo extends StatefulWidget {
  const _FloatingHeroLogo();

  @override
  State<_FloatingHeroLogo> createState() => _FloatingHeroLogoState();
}

class _FloatingHeroLogoState extends State<_FloatingHeroLogo>
    with SingleTickerProviderStateMixin {
  late final AnimationController _controller;

  @override
  void initState() {
    super.initState();
    _controller = AnimationController(
      vsync: this,
      duration: const Duration(seconds: 4),
    )..repeat(reverse: true);
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return AnimatedBuilder(
      animation: _controller,
      builder: (context, child) {
        return Transform.translate(
          offset: Offset(0, 20 * _controller.value), // Float up/down 20px
          child: Container(
            height: 400, // Massive 400px
            width: 400,
            decoration: BoxDecoration(
              shape: BoxShape.circle,
              boxShadow: [
                BoxShadow(
                  color: const Color(0xFF3B82F6).withValues(alpha: 0.3),
                  blurRadius: 60,
                  spreadRadius: -10,
                  offset: const Offset(0, 20),
                ),
                BoxShadow(
                  color: const Color(0xFF10B981).withValues(alpha: 0.2),
                  blurRadius: 40,
                  spreadRadius: 5,
                  offset: const Offset(0, 10),
                ),
              ],
            ),
            child: Image.asset('assets/logo.png', fit: BoxFit.contain),
          ),
        );
      },
    );
  }
}
