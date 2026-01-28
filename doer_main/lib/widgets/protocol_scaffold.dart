import 'dart:ui';
import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:url_launcher/url_launcher.dart';
import 'ui_components.dart';

class ProtocolScaffold extends StatelessWidget {
  final Widget child;

  const ProtocolScaffold({super.key, required this.child});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Theme.of(context).scaffoldBackgroundColor,
      extendBodyBehindAppBar: true,
      body: Column(
        children: [
          const _NavBar(),
          Expanded(
            child: SingleChildScrollView(
              child: Column(children: [child, const _Footer()]),
            ),
          ),
        ],
      ),
    );
  }
}

class _NavBar extends StatelessWidget {
  const _NavBar();

  @override
  Widget build(BuildContext context) {
    return ClipRect(
      child: BackdropFilter(
        filter: ImageFilter.blur(sigmaX: 10, sigmaY: 10),
        child: Container(
          height: 90, // Taller navbar
          decoration: BoxDecoration(
            color: Theme.of(context).scaffoldBackgroundColor.withValues(
              alpha: 0.6,
            ), // More transparent for glass
            border: Border(
              bottom: BorderSide(color: Colors.white.withValues(alpha: 0.05)),
            ),
          ),
          padding: const EdgeInsets.symmetric(horizontal: 24),
          child: Center(
            child: ConstrainedBox(
              constraints: const BoxConstraints(maxWidth: 1200),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  // Logo
                  InkWell(
                    onTap: () => context.go('/'),
                    child: Image.asset(
                      'assets/logo.jpg',
                      height: 90, // Huge logo as requested
                      width: 90,
                      fit: BoxFit.contain,
                    ),
                  ),

                  // Nav Links
                  Row(
                    children: [
                      // Modern Nav Links
                      const _NavLink(
                        label: 'How It Works',
                        path: '/how-it-works',
                      ),
                      const _NavLink(label: 'Intents', path: '/intents'),
                      const _NavLink(label: 'Mandates', path: '/mandates'),
                      const _NavLink(label: 'Security', path: '/security'),
                      const _NavLink(label: 'About', path: '/about'),

                      // Docs Link (External style)
                      Padding(
                        padding: const EdgeInsets.only(left: 12, right: 24),
                        child: TextButton(
                          onPressed: () async {
                            const url = 'http://localhost:8090'; // Docs URL
                            if (await canLaunchUrl(Uri.parse(url))) {
                              await launchUrl(
                                Uri.parse(url),
                                mode: LaunchMode.externalApplication,
                              );
                            }
                          },
                          child: Row(
                            children: [
                              Text(
                                'Getting Started',
                                style: GoogleFonts.outfit(
                                  color: Colors.white70,
                                ),
                              ),
                              const SizedBox(width: 4),
                              const Icon(
                                Icons.arrow_outward,
                                size: 14,
                                color: Colors.white70,
                              ),
                            ],
                          ),
                        ),
                      ),

                      // "Download App" CTA
                      Container(
                        decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(30),
                          gradient: const LinearGradient(
                            colors: [
                              Color(0xFF2563EB),
                              Color(0xFF10B981),
                            ], // Blue -> Green gradient
                          ),
                          boxShadow: [
                            BoxShadow(
                              color: const Color(
                                0xFF10B981,
                              ).withValues(alpha: 0.3),
                              blurRadius: 12,
                              offset: const Offset(0, 4),
                            ),
                          ],
                        ),
                        child: ElevatedButton(
                          onPressed: () {
                            const url = 'https://apps.apple.com';
                            launchUrl(
                              Uri.parse(url),
                              mode: LaunchMode.externalApplication,
                            );
                          },
                          style: ElevatedButton.styleFrom(
                            backgroundColor: Colors.transparent,
                            shadowColor: Colors.transparent,
                            padding: const EdgeInsets.symmetric(
                              horizontal: 24,
                              vertical: 16,
                            ),
                            shape: RoundedRectangleBorder(
                              borderRadius: BorderRadius.circular(30),
                            ),
                          ),
                          child: const Text('Download App'),
                        ),
                      ),
                    ],
                  ),
                ],
              ),
            ),
          ),
        ),
      ),
    );
  }
}

class _NavLink extends StatelessWidget {
  final String label;
  final String path;

  const _NavLink({required this.label, required this.path});

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 8),
      child: TextButton(
        onPressed: () => context.go(path),
        style: TextButton.styleFrom(
          foregroundColor: Colors.white,
          textStyle: GoogleFonts.outfit(
            fontWeight: FontWeight.w500,
            fontSize: 15,
          ),
        ),
        child: Text(label),
      ),
    );
  }
}

class _Footer extends StatelessWidget {
  const _Footer();

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.symmetric(vertical: 60),
      color: Colors.black, // Dark footer
      child: Center(
        child: ConstrainedBox(
          constraints: const BoxConstraints(maxWidth: 1200),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Divider(color: Colors.white.withValues(alpha: 0.1)),
              const SizedBox(height: 40),
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                        'DOER',
                        style: GoogleFonts.outfit(
                          fontSize: 24,
                          fontWeight: FontWeight.bold,
                          color: Colors.white,
                        ),
                      ),
                      const SizedBox(height: 12),
                      Text(
                        'Your outcome-driven wallet.',
                        style: TextStyle(
                          color: Colors.white.withValues(alpha: 0.5),
                        ),
                      ),
                      const SizedBox(height: 24),
                      Row(
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
                          const SizedBox(width: 12),
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
                  Row(
                    children: [
                      _FooterLink('Twitter', 'https://twitter.com/doer'),
                      _FooterLink('GitHub', 'https://github.com/doer'),
                      _FooterLink('Discord', 'https://discord.gg/doer'),
                    ],
                  ),
                ],
              ),
              const SizedBox(height: 40),
              Text(
                '© 2026 DOER. All rights reversed.',
                style: TextStyle(
                  color: Colors.white.withValues(alpha: 0.3),
                  fontSize: 12,
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}

class _FooterLink extends StatelessWidget {
  final String label;
  final String url;
  const _FooterLink(this.label, this.url);

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.only(left: 24),
      child: TextButton(
        onPressed: () {
          launchUrl(Uri.parse(url), mode: LaunchMode.externalApplication);
        },
        child: Text(
          label,
          style: TextStyle(color: Colors.white.withValues(alpha: 0.7)),
        ),
      ),
    );
  }
}
