import 'package:flutter/material.dart';
import '../widgets/ui_components.dart';

class AboutPage extends StatelessWidget {
  const AboutPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Center(
      child: ConstrainedBox(
        constraints: const BoxConstraints(maxWidth: 1000),
        child: Padding(
          padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 80),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              const SectionHeader(
                title: 'What Is DOER DAPP',
                subtitle: 'Vision, Mission, and Principles.',
              ),
              const SizedBox(height: 60),

              const SectionHeader(title: 'The Problem'),
              const SizedBox(height: 20),
              _Paragraph(
                'Today, interacting with crypto often means choosing between two extremes: Manual, repetitive approval of every single action, or Handing over broad, indefinite permissions to automated systems.',
              ),
              _Paragraph(
                'Neither is ideal. Manual approval is secure but tedious. Broad automation is convenient but risky. DOER DAPP bridges this gap.',
              ),

              const SizedBox(height: 60),

              const SectionHeader(title: 'What DOER DAPP Is'),
              const SizedBox(height: 20),
              _Paragraph(
                'DOER DAPP is a system for granular, conditional execution.',
              ),
              _Paragraph(
                'It allows users to grant specific, limited authority to automated agents (Doers) to perform actions on their behalf, without giving up custody or control of their assets.',
              ),
              _Paragraph(
                'Think of it as a "smart outbox" for your wallet. You don\'t just send transactions; you define intents—conditions under which transactions are allowed to happen.',
              ),

              const SizedBox(height: 60),

              const SectionHeader(title: 'What DOER DAPP Is Not'),
              const SizedBox(height: 20),
              _BulletPoint(
                title: 'DOER DAPP is not a custodial wallet.',
                text: 'We do not hold your keys or your funds.',
              ),
              _BulletPoint(
                title: 'DOER DAPP is not a "trading bot".',
                text:
                    'It is the infrastructure that allows *you* to define trading rules safely.',
              ),
              _BulletPoint(
                title: 'DOER DAPP is not an AI.',
                text:
                    'It is a deterministic protocol for enforcing permissions.',
              ),

              const SizedBox(height: 60),

              const SectionHeader(title: 'Vision'),
              const SizedBox(height: 20),
              _HighlightQuote(
                'A world where users can automate their financial lives without surrendering sovereignty.',
              ),

              const SizedBox(height: 60),

              const SectionHeader(title: 'Mission'),
              const SizedBox(height: 20),
              _Paragraph(
                'To build the standard for safe, intent-based execution on-chain, making "conditional permission" as common and easy as "sending a token."',
              ),

              const SizedBox(height: 60),

              const SectionHeader(title: 'Core Design Principles'),
              const SizedBox(height: 20),
              _DefinitionList(
                term: 'Explicit Intent',
                definition: 'Nothing happens unless you explicitly defined it.',
              ),
              _DefinitionList(
                term: 'Bounded Authority',
                definition:
                    'Every permission has a limit (time, amount, scope).',
              ),
              _DefinitionList(
                term: 'User Sovereignty',
                definition: 'You can always revoke permission. Instantly.',
              ),
              _DefinitionList(
                term: 'Credible Neutrality',
                definition:
                    ' The protocol enforces rules, it does not pick winners.',
              ),

              const SizedBox(height: 60),

              const SectionHeader(title: 'Who Is This For?'),
              const SizedBox(height: 20),
              _BulletPoint(
                title: 'For Users:',
                text:
                    'Who want to automate DCA, limit orders, or portfolio rebalancing without trusting a centralized exchange.',
              ),
              _BulletPoint(
                title: 'For DAOs:',
                text:
                    'Who want to delegate spending authority to working groups with strict spending limits.',
              ),
              _BulletPoint(
                title: 'For Developers:',
                text:
                    'Who want to build automation tools without taking on the liability of holding user keys.',
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
        style: Theme.of(
          context,
        ).textTheme.bodyLarge?.copyWith(fontSize: 18, height: 1.6),
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
      padding: const EdgeInsets.symmetric(vertical: 8),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Padding(
            padding: const EdgeInsets.only(top: 10),
            child: Icon(
              Icons.circle,
              size: 6,
              color: Theme.of(context).primaryColor,
            ),
          ),
          const SizedBox(width: 12),
          Expanded(
            child: RichText(
              text: TextSpan(
                style: Theme.of(
                  context,
                ).textTheme.bodyLarge?.copyWith(fontSize: 18, height: 1.6),
                children: [
                  TextSpan(
                    text: title,
                    style: TextStyle(
                      fontWeight: FontWeight.bold,
                      color: Theme.of(context).primaryColor,
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

class _HighlightQuote extends StatelessWidget {
  final String text;
  const _HighlightQuote(this.text);

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 16),
      decoration: BoxDecoration(
        border: Border(
          left: BorderSide(color: Theme.of(context).primaryColor, width: 4),
        ),
      ),
      child: Text(
        text,
        style: Theme.of(context).textTheme.displaySmall?.copyWith(
          fontSize: 24,
          fontStyle: FontStyle.italic,
        ),
      ),
    );
  }
}

class _DefinitionList extends StatelessWidget {
  final String term;
  final String definition;

  const _DefinitionList({required this.term, required this.definition});

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.only(bottom: 16),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            term,
            style: Theme.of(context).textTheme.bodyLarge?.copyWith(
              fontWeight: FontWeight.bold,
              color: Theme.of(context).primaryColor,
            ),
          ),
          const SizedBox(height: 4),
          Text(
            definition,
            style: Theme.of(
              context,
            ).textTheme.bodyLarge?.copyWith(fontSize: 18, height: 1.6),
          ),
        ],
      ),
    );
  }
}
