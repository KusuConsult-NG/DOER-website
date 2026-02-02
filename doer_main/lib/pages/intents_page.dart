import 'package:flutter/material.dart';
import '../widgets/ui_components.dart';

class IntentsPage extends StatelessWidget {
  const IntentsPage({super.key});

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
                title: 'Intents',
                subtitle: 'A clear instruction with boundaries.',
              ),
              const SizedBox(height: 60),

              const SectionHeader(title: 'What Is an Intent?'),
              const SizedBox(height: 20),
              Text(
                'An intent is how you tell DOER DAPP what you want to happen. It is not a transaction. It does not move funds by itself.',
                style: Theme.of(
                  context,
                ).textTheme.bodyLarge?.copyWith(fontSize: 18),
              ),
              const SizedBox(height: 40),

              const SectionHeader(title: 'Why Intents Matter'),
              const SizedBox(height: 20),
              Text(
                'Most wallets ask you to approve actions one by one. Intents let you set expectations once, avoid repeated approvals, and keep control without micromanaging. You decide the goal. DOER DAPP handles execution within your limits.',
                style: Theme.of(
                  context,
                ).textTheme.bodyLarge?.copyWith(fontSize: 18),
              ),

              const SizedBox(height: 60),

              const SectionHeader(title: 'Limits Are the Point'),
              const SizedBox(height: 20),
              Text(
                'Every intent includes limits. If a limit is reached, execution stops.',
                style: Theme.of(
                  context,
                ).textTheme.bodyLarge?.copyWith(fontSize: 18),
              ),
              const SizedBox(height: 40),
              Wrap(
                spacing: 24,
                runSpacing: 24,
                children: const [
                  SizedBox(
                    width: 300,
                    child: InfoCard(
                      title: 'Amounts',
                      description: 'Maximum amounts that can be used.',
                    ),
                  ),
                  SizedBox(
                    width: 300,
                    child: InfoCard(
                      title: 'Apps',
                      description: 'Which apps or contracts are allowed.',
                    ),
                  ),
                  SizedBox(
                    width: 300,
                    child: InfoCard(
                      title: 'Time',
                      description: 'Specific time windows for execution.',
                    ),
                  ),
                ],
              ),
            ],
          ),
        ),
      ),
    );
  }
}
