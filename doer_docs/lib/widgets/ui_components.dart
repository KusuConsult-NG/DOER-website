import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

class SectionHeader extends StatelessWidget {
  final String title;
  final String? subtitle;
  final bool center;

  const SectionHeader({
    super.key,
    required this.title,
    this.subtitle,
    this.center = false,
  });

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: center
          ? CrossAxisAlignment.center
          : CrossAxisAlignment.start,
      children: [
        // Gradient Title if desired, but stick to clean white for readable sections
        Text(
          title,
          style: Theme.of(context).textTheme.displayMedium,
          textAlign: center ? TextAlign.center : TextAlign.start,
        ),
        if (subtitle != null) ...[
          const SizedBox(height: 16),
          Text(
            subtitle!,
            style: Theme.of(context).textTheme.bodyLarge?.copyWith(
              color: const Color(0xFF9CA3AF), // Secondary text color
            ),
            textAlign: center ? TextAlign.center : TextAlign.start,
          ),
        ],
      ],
    );
  }
}

class InfoCard extends StatelessWidget {
  final String title;
  final String description;
  final IconData? icon;

  const InfoCard({
    super.key,
    required this.title,
    required this.description,
    this.icon,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(32),
      decoration: BoxDecoration(
        gradient: LinearGradient(
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
          colors: [
            const Color(0xFF1F2937).withValues(alpha: 0.6),
            const Color(0xFF1F2937).withValues(alpha: 0.3),
          ],
        ),
        border: Border.all(color: Colors.white.withValues(alpha: 0.08)),
        borderRadius: BorderRadius.circular(24),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          if (icon != null) ...[
            Container(
              padding: const EdgeInsets.all(14),
              decoration: BoxDecoration(
                color: Theme.of(context).primaryColor.withValues(alpha: 0.1),
                borderRadius: BorderRadius.circular(16),
                border: Border.all(
                  color: Theme.of(context).primaryColor.withValues(alpha: 0.2),
                ),
              ),
              child: Icon(
                icon,
                size: 32,
                color: Theme.of(context).primaryColor,
              ),
            ),
            const SizedBox(height: 24),
          ],
          Text(
            title,
            style: Theme.of(context).textTheme.displaySmall?.copyWith(
              fontSize: 24,
              fontWeight: FontWeight.bold,
            ),
          ),
          const SizedBox(height: 16),
          Text(
            description,
            style: Theme.of(context).textTheme.bodyMedium?.copyWith(
              color: const Color(0xFFD1D5DB),
              height: 1.6,
              fontSize: 16,
            ),
          ),
        ],
      ),
    );
  }
}

class CodeSnippet extends StatelessWidget {
  final String code;
  final String language;

  const CodeSnippet({super.key, required this.code, this.language = 'json'});

  @override
  Widget build(BuildContext context) {
    return Container(
      width: double.infinity,
      decoration: BoxDecoration(
        color: const Color(0xFF0F0F12),
        border: Border.all(color: Colors.white.withValues(alpha: 0.1)),
        borderRadius: BorderRadius.circular(12),
        boxShadow: [
          BoxShadow(
            color: Colors.black.withValues(alpha: 0.3),
            blurRadius: 20,
            offset: const Offset(0, 10),
          ),
        ],
      ),
      child: Column(
        children: [
          // "Terminal" Header
          Container(
            padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 12),
            decoration: BoxDecoration(
              border: Border(
                bottom: BorderSide(color: Colors.white.withValues(alpha: 0.05)),
              ),
            ),
            child: Row(
              children: [
                _MacDot(Colors.red[400]!),
                const SizedBox(width: 8),
                _MacDot(Colors.yellow[400]!),
                const SizedBox(width: 8),
                _MacDot(Colors.green[400]!),
              ],
            ),
          ),
          Padding(
            padding: const EdgeInsets.all(24),
            child: SelectableText(
              code,
              style: GoogleFonts.firaCode(
                // More coding font
                color: const Color(0xFF10B981),
                fontSize: 14,
                height: 1.6,
                letterSpacing: 0.5,
              ),
            ),
          ),
        ],
      ),
    );
  }
}

class _MacDot extends StatelessWidget {
  final Color color;
  const _MacDot(this.color);

  @override
  Widget build(BuildContext context) {
    return Container(
      width: 12,
      height: 12,
      decoration: BoxDecoration(color: color, shape: BoxShape.circle),
    );
  }
}
