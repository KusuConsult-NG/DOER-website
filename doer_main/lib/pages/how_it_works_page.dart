import 'package:flutter/material.dart';
import '../widgets/ui_components.dart';

class HowItWorksPage extends StatelessWidget {
  const HowItWorksPage({super.key});

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
                title: 'How It Works',
                subtitle: 'This is how DOER works from a user’s point of view.',
              ),
              const SizedBox(height: 60),

              _Step(
                number: '01',
                title: 'You Say What You Want',
                description:
                    'You describe an outcome you care about. That might be managing repeated actions, allowing limited execution under certain conditions, or reducing manual approvals. You are not approving a transaction yet. You are describing intent.',
              ),
              _Step(
                number: '02',
                title: 'You Set Boundaries',
                description:
                    'Next, you define limits. For example: which apps or contracts are allowed, maximum amounts that can be used, and how long this permission should last. These limits are not suggestions. They are enforced rules.',
              ),
              _Step(
                number: '03',
                title: 'DOER Prepares Execution',
                description:
                    'When conditions are met, an execution is prepared that follows your rules. Nothing happens silently. Nothing can exceed what you allowed.',
              ),
              _Step(
                number: '04',
                title: 'Rules Are Checked',
                description:
                    'Before anything executes: Your limits are checked, expiry is checked, and permissions are verified. If something does not match, it simply does not run.',
              ),
              _Step(
                number: '05',
                title: 'Action Happens On-Chain',
                description:
                    'Only after all rules pass does execution occur. Everything can be traced back to what you allowed, when you allowed it, and under what limits.',
              ),
            ],
          ),
        ),
      ),
    );
  }
}

class _Step extends StatelessWidget {
  final String number;
  final String title;
  final String description;

  const _Step({
    required this.number,
    required this.title,
    required this.description,
  });

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.only(bottom: 50),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            number,
            style: Theme.of(context).textTheme.displaySmall?.copyWith(
              color: const Color(
                0xFF374151,
              ), // Dark grey for numbers in dark mode
              fontSize: 40,
            ),
          ),
          const SizedBox(width: 30),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(title, style: Theme.of(context).textTheme.displaySmall),
                const SizedBox(height: 10),
                Text(
                  description,
                  style: Theme.of(
                    context,
                  ).textTheme.bodyLarge?.copyWith(fontSize: 18),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
