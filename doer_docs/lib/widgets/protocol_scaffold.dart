import 'dart:ui';
import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:url_launcher/url_launcher.dart';

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
              child: Column(
                children: [
                  // Main Content
                  child,
                  const _Footer(),
                ],
              ),
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
          height: 80,
          decoration: BoxDecoration(
            color: Theme.of(
              context,
            ).scaffoldBackgroundColor.withValues(alpha: 0.6),
            border: Border(
              bottom: BorderSide(color: Colors.white.withValues(alpha: 0.05)),
            ),
          ),
          padding: const EdgeInsets.symmetric(horizontal: 24),
          child: Center(
            child: ConstrainedBox(
              constraints: const BoxConstraints(maxWidth: 1400),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  // Logo / Brand
                  InkWell(
                    onTap: () => context.go('/'),
                    child: Row(
                      children: [
                        Image.asset(
                          'assets/logo.jpg',
                          height: 60,
                          fit: BoxFit.contain,
                        ),
                        const SizedBox(width: 12),
                        Container(
                          padding: const EdgeInsets.symmetric(
                            horizontal: 8,
                            vertical: 4,
                          ),
                          decoration: BoxDecoration(
                            color: Colors.white.withValues(alpha: 0.1),
                            borderRadius: BorderRadius.circular(4),
                          ),
                          child: Text(
                            'DOCS',
                            style: GoogleFonts.outfit(
                              fontSize: 12,
                              fontWeight: FontWeight.bold,
                              color: Colors.white70,
                            ),
                          ),
                        ),
                      ],
                    ),
                  ),
                  // Navigation
                  Row(
                    children: [
                      const _NavLink(label: 'Home', path: '/'),
                      const _NavLink(
                        label: 'Getting Started',
                        path: '/getting-started',
                      ),
                      const _NavLink(
                        label: 'Architecture',
                        path: '/architecture',
                      ),

                      const SizedBox(width: 24),

                      // Back to Main Site
                      // Main Site Button (Premium Pill)
                      Padding(
                        padding: const EdgeInsets.only(left: 24),
                        child: Container(
                          decoration: BoxDecoration(
                            borderRadius: BorderRadius.circular(30),
                            border: Border.all(
                              color: Colors.white.withValues(alpha: 0.1),
                            ),
                            gradient: LinearGradient(
                              colors: [
                                Colors.white.withValues(alpha: 0.05),
                                Colors.white.withValues(alpha: 0.02),
                              ],
                            ),
                          ),
                          child: TextButton(
                            onPressed: () {
                              const url = 'https://doer-website.vercel.app';
                              launchUrl(
                                Uri.parse(url),
                                mode: LaunchMode.externalApplication,
                              );
                            },
                            style: TextButton.styleFrom(
                              padding: const EdgeInsets.symmetric(
                                horizontal: 20,
                                vertical: 12,
                              ),
                              foregroundColor: Colors.white,
                              shape: RoundedRectangleBorder(
                                borderRadius: BorderRadius.circular(30),
                              ),
                            ),
                            child: Row(
                              children: [
                                Text(
                                  'Main Site',
                                  style: GoogleFonts.outfit(
                                    fontWeight: FontWeight.w600,
                                    fontSize: 14,
                                  ),
                                ),
                                const SizedBox(width: 8),
                                const Icon(
                                  Icons.arrow_outward,
                                  size: 14,
                                  color: Colors.white70,
                                ),
                              ],
                            ),
                          ),
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
      padding: const EdgeInsets.symmetric(horizontal: 12),
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
      padding: const EdgeInsets.symmetric(vertical: 80),
      color: Colors.black, // Professional Dark Footer
      child: Center(
        child: ConstrainedBox(
          constraints: const BoxConstraints(maxWidth: 1200),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Divider(color: Colors.white.withValues(alpha: 0.1)),
              const SizedBox(height: 60),
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  // Brand Column
                  Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                        'DOER Developers',
                        style: GoogleFonts.outfit(
                          fontSize: 24,
                          fontWeight: FontWeight.bold,
                          color: Colors.white,
                        ),
                      ),
                      const SizedBox(height: 12),
                      Text(
                        'Build the future of outcome-driven intents.',
                        style: TextStyle(
                          color: Colors.white.withValues(alpha: 0.5),
                          fontSize: 14,
                        ),
                      ),
                    ],
                  ),
                  // Links Column
                  Row(
                    children: [
                      _FooterLink('Twitter', 'https://twitter.com/doer'),
                      _FooterLink('GitHub', 'https://github.com/doer'),
                      _FooterLink('Discord', 'https://discord.gg/doer'),
                    ],
                  ),
                ],
              ),
              const SizedBox(height: 60),
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
      padding: const EdgeInsets.only(left: 32),
      child: TextButton(
        onPressed: () {
          launchUrl(Uri.parse(url), mode: LaunchMode.externalApplication);
        },
        child: Text(
          label,
          style: TextStyle(
            color: Colors.white.withValues(alpha: 0.7),
            fontSize: 14,
          ),
        ),
      ),
    );
  }
}
