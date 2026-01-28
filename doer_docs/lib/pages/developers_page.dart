import 'package:flutter/material.dart';
import '../widgets/ui_components.dart';

class DevelopersPage extends StatelessWidget {
  const DevelopersPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Center(
      child: ConstrainedBox(
        constraints: const BoxConstraints(maxWidth: 900),
        child: Padding(
          padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 80),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              const SectionHeader(
                title: 'Built for the Ecosystem',
                subtitle:
                    'DOER is designed as shared infrastructure, not a closed product.',
              ),
              const SizedBox(height: 40),

              _Paragraph(
                'While DOER introduces new ways to express intent and manage execution, it is built to serve the broader crypto ecosystem, not just developers writing code. Its goal is to make safe, repeatable on-chain actions accessible across many types of users and tools.',
              ),
              _Paragraph(
                'Whether you interact with crypto through a wallet, a trading interface, a DAO tool, or a custom application, DOER is designed to fit into that flow rather than replace it.',
              ),

              const SizedBox(height: 60),

              _UserSegment(
                title: 'For Wallet Users',
                content:
                    'For everyday wallet users, DOER improves how actions are authorized.\n\nInstead of approving similar transactions repeatedly or leaving old permissions active, users can define clear rules once and let actions occur only within those limits. This reduces both friction and risk, especially for users who interact frequently with DeFi, NFTs, or governance tools.\n\nYou do not need to understand how DOER is implemented to benefit from it. If you understand what you are allowing and why, DOER works in your favor.',
              ),

              _UserSegment(
                title: 'For Power Users',
                content:
                    'Power users often combine multiple tools, strategies, and workflows. This increases both efficiency and exposure.\n\nDOER gives power users a way to:\n• Reduce repetitive approvals\n• Limit downside when automating actions\n• Keep execution transparent and auditable\n\nRather than relying on trust in external bots or scripts, power users can rely on enforceable rules that remain under their control.',
              ),

              _UserSegment(
                title: 'For Tool Builders',
                content:
                    'For builders, DOER provides a foundation for safer automation.\n\nInstead of asking users for broad permissions, tools can integrate with DOER to:\n• Act only within user-defined constraints\n• Make execution rules explicit\n• Reduce the risk of over-authorization\n\nThis allows developers to build powerful features without requiring users to blindly trust their software.',
              ),

              _UserSegment(
                title: 'For DAO Participants',
                content:
                    'DAOs frequently rely on recurring actions, delegated execution, and shared operational tools.\n\nDOER supports DAO workflows by enabling:\n• Clear delegation boundaries\n• Time-limited execution authority\n• Transparent tracking of what was allowed and executed\n\nThis helps DAOs balance efficiency with accountability.',
              ),

              const SizedBox(height: 80),

              const SectionHeader(title: 'Open by Design', subtitle: null),
              const SizedBox(height: 20),
              _Paragraph('DOER is intentionally open and composable.'),
              const SizedBox(height: 10),
              _BulletPoint(
                title: 'Understandable',
                text: 'without deep protocol knowledge',
              ),
              _BulletPoint(title: 'Enforceable', text: 'on-chain'),
              _BulletPoint(
                title: 'Integratable',
                text: 'into existing tools and interfaces',
              ),
              const SizedBox(height: 20),
              _Paragraph(
                'The goal is not to create a new silo, but to offer primitives that others can build on safely.',
              ),

              const SizedBox(height: 60),

              const SectionHeader(
                title: 'Not Just for Engineers',
                subtitle: null,
              ),
              const SizedBox(height: 20),
              _Paragraph(
                'Although DOER exposes technical interfaces for developers, its purpose is broader.',
              ),
              _Paragraph(
                'Even if you never write code, DOER affects how you interact with crypto by making permissions clearer, making automation safer, and making authority easier to reason about.',
              ),
              _Paragraph(
                'It is infrastructure designed to serve users first, while remaining usable by builders.',
              ),

              const SizedBox(height: 60),

              const SectionHeader(title: 'Where to Go Next', subtitle: null),
              const SizedBox(height: 20),
              _BulletPoint(
                title: 'A user:',
                text: 'explore how DOER changes approvals and permissions',
              ),
              _BulletPoint(
                title: 'A builder:',
                text: 'explore how intents and mandates work',
              ),
              _BulletPoint(
                title: 'A DAO contributor:',
                text: 'explore controlled delegation models',
              ),
              const SizedBox(height: 20),
              _Paragraph(
                'The documentation is structured to meet you where you are, without assuming a single role.',
              ),
              const SizedBox(height: 40),
            ],
          ),
        ),
      ),
    );
  }
}

class _Paragraph extends StatelessWidget {
  final String text;
  const _Paragraph(this.text);

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.only(bottom: 16),
      child: Text(
        text,
        style: Theme.of(context).textTheme.bodyLarge?.copyWith(
          fontSize: 18,
          height: 1.6,
          color: Colors.white70,
        ),
      ),
    );
  }
}

class _UserSegment extends StatelessWidget {
  final String title;
  final String content;

  const _UserSegment({required this.title, required this.content});

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.only(bottom: 40),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            title,
            style: Theme.of(context).textTheme.headlineSmall?.copyWith(
              fontWeight: FontWeight.bold,
              color: Colors.white,
            ),
          ),
          const SizedBox(height: 16),
          Text(
            content,
            style: Theme.of(context).textTheme.bodyLarge?.copyWith(
              fontSize: 18,
              height: 1.6,
              color: Colors.white70,
            ),
          ),
        ],
      ),
    );
  }
}

class _BulletPoint extends StatelessWidget {
  final String title;
  final String text;

  const _BulletPoint({required this.title, required this.text});

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 4),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          const Padding(
            padding: EdgeInsets.only(top: 10),
            child: Icon(Icons.circle, size: 6, color: Colors.white70),
          ),
          const SizedBox(width: 12),
          Expanded(
            child: RichText(
              text: TextSpan(
                style: Theme.of(
                  context,
                ).textTheme.bodyLarge?.copyWith(fontSize: 18, height: 1.6),
                children: [
                  // "Explicit Intent"
                  TextSpan(
                    text: title,
                    style: const TextStyle(
                      fontWeight: FontWeight.bold,
                      color: Colors.white,
                    ),
                  ),
                  const TextSpan(text: ' '),
                  TextSpan(text: text),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }
}
