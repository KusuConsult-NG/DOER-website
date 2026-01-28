import 'package:flutter/material.dart';
import '../widgets/ui_components.dart';

class GettingStartedPage extends StatelessWidget {
  const GettingStartedPage({super.key});

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
                title: 'Getting Started with DOER',
                subtitle:
                    'How to use DOER safely, without technical knowledge.',
              ),
              const SizedBox(height: 40),

              _Paragraph(
                'This page explains how to use DOER at a high level. You do not need to understand smart contracts or automation systems to use DOER safely. You only need to understand what you are allowing and why.',
              ),

              const SizedBox(height: 60),

              const SectionHeader(title: 'What DOER Helps You Do'),
              const SizedBox(height: 20),
              _Paragraph(
                'DOER helps you reduce repetitive on-chain actions while staying in control.',
              ),
              _Paragraph('It is useful when:'),
              _BulletPoint(text: 'You perform similar actions often'),
              _BulletPoint(
                text:
                    'You want to avoid approving the same type of transaction repeatedly',
              ),
              _BulletPoint(
                text: 'You want permissions to automatically expire',
              ),
              _BulletPoint(
                text: 'You want clear limits on what can happen on your behalf',
              ),
              const SizedBox(height: 20),
              _Paragraph(
                'DOER does not take control away from you. It helps you set rules once and enforce them automatically.',
              ),

              const SizedBox(height: 60),

              const SectionHeader(
                title: 'What DOER Does Before Anything Happens',
              ),
              const SizedBox(height: 20),
              _Paragraph(
                'Before DOER can do anything, you must define two things:\n1. What you want to happen\n2. What is allowed and what is not\n\nNothing executes until these are clearly defined.',
              ),

              const SizedBox(height: 60),

              _Step(
                number: '1',
                title: 'Connect Your Wallet',
                content:
                    'To begin, you connect your wallet to DOER.\n\nThis does not give DOER access to your funds. It simply allows DOER to read your public account and register your instructions.\n\nAt this stage:\n• No permissions are granted\n• No actions can occur\n• Nothing is automated',
              ),

              _Step(
                number: '2',
                title: 'Describe What You Want to Do',
                content:
                    'Next, you describe an intent.\n\nAn intent is a clear description of an outcome you want, such as allowing certain actions to happen under specific conditions.\n\nThink of an intent as: "I am okay with this kind of action happening, as long as it stays within these rules."\n\nYou are not approving a transaction yet. You are describing expectations.',
              ),

              _Step(
                number: '3',
                title: 'Set Your Limits',
                content:
                    'This is the most important step.\n\nYou define boundaries such as:\n• Which apps or contracts are allowed\n• Maximum amounts that can be used\n• How often actions can happen\n• How long permission should last\n\nThese limits are enforced automatically. If a limit is reached, execution stops. You are always in control of these limits.',
              ),

              _Step(
                number: '4',
                title: 'Allow Limited Execution',
                content:
                    'After defining intent and limits, you can allow execution through a mandate.\n\nA mandate is permission with rules and an expiration. It answers questions like: Who can act on this intent? For how long? Under what limits?\n\nA mandate does not transfer ownership of your assets. It only allows specific actions within your rules.',
              ),

              _Step(
                number: '5',
                title: 'Let DOER Enforce Your Rules',
                content:
                    'Once a mandate is active:\n• Actions can occur only if they match your intent\n• Limits are checked every time\n• Expired or revoked permissions cannot be used\n\nNothing runs outside the rules you defined. You do not need to watch constantly. You can always review or stop execution.',
              ),

              const SizedBox(height: 60),

              const SectionHeader(title: 'How to Stay Safe When Using DOER'),
              const SizedBox(height: 20),
              _Paragraph(
                'DOER is designed to protect users, but safe use still requires attention. Keep these principles in mind:',
              ),
              _BulletPoint(text: 'Only allow apps you recognize'),
              _BulletPoint(text: 'Set limits you are comfortable with'),
              _BulletPoint(text: 'Use expiration times whenever possible'),
              _BulletPoint(text: 'Revoke mandates you no longer need'),
              const SizedBox(height: 20),
              _Paragraph(
                'DOER enforces your rules. It cannot fix unclear or risky choices.',
              ),

              const SizedBox(height: 60),

              const Wrap(
                spacing: 24,
                runSpacing: 24,
                crossAxisAlignment: WrapCrossAlignment.start,
                children: [
                  SizedBox(
                    width: 400,
                    child: InfoCard(
                      title: 'When You Should Use DOER',
                      description:
                          '• You want fewer approvals without open-ended permissions\n• You interact with crypto frequently\n• You care about keeping control while saving time',
                      icon: Icons.check_circle_outline,
                    ),
                  ),
                  SizedBox(
                    width: 400,
                    child: InfoCard(
                      title: 'When You Should NOT Use DOER',
                      description:
                          '• You do not understand what you are allowing\n• You want “set and forget” automation without limits\n• You prefer to manually approve every action\n\nDOER prioritizes control over convenience.',
                      icon: Icons.highlight_off,
                    ),
                  ),
                ],
              ),

              const SizedBox(height: 60),

              const SectionHeader(title: 'You Can Always Stop'),
              const SizedBox(height: 20),
              _Paragraph(
                'At any time, you can: View your active permissions, Change limits, or Revoke execution rights instantly.\n\nNothing is permanent unless you choose it to be.',
              ),

              const SizedBox(height: 60),

              const SectionHeader(title: 'Where to Go Next'),
              const SizedBox(height: 20),
              _Paragraph('If you want to learn more:'),
              _BulletPoint(text: 'Read how Intents work'),
              _BulletPoint(text: 'Learn about Mandates and permissions'),
              _BulletPoint(text: 'Review the Security model'),
              const SizedBox(height: 20),
              _Paragraph(
                'If you prefer to explore hands-on, you can start by creating a simple intent with strict limits and short duration.',
              ),

              const SizedBox(height: 40),
              const Divider(),
              const SizedBox(height: 40),

              Text(
                'Final Reminder',
                style: Theme.of(
                  context,
                ).textTheme.titleLarge?.copyWith(fontWeight: FontWeight.bold),
              ),
              const SizedBox(height: 16),
              const Text(
                'DOER is not about doing more automatically. It is about doing the right things, within boundaries you understand.\n\nIf you stay deliberate, DOER stays safe.',
                style: TextStyle(
                  fontSize: 18,
                  color: Color(0xFF6B7280),
                  fontStyle: FontStyle.italic,
                ),
              ),
              const SizedBox(height: 80),
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

class _BulletPoint extends StatelessWidget {
  final String text;
  const _BulletPoint({required this.text});

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
            child: Text(
              text,
              style: Theme.of(context).textTheme.bodyLarge?.copyWith(
                fontSize: 18,
                height: 1.6,
                color: Colors.white70,
              ),
            ),
          ),
        ],
      ),
    );
  }
}

class _Step extends StatelessWidget {
  final String number;
  final String title;
  final String content;

  const _Step({
    required this.number,
    required this.title,
    required this.content,
  });

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.only(bottom: 40),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            number,
            style: Theme.of(
              context,
            ).textTheme.displayMedium?.copyWith(color: const Color(0xFFE5E7EB)),
          ),
          const SizedBox(width: 24),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  title,
                  style: Theme.of(context).textTheme.headlineSmall?.copyWith(
                    fontWeight: FontWeight.bold,
                  ),
                ),
                const SizedBox(height: 12),
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
          ),
        ],
      ),
    );
  }
}
