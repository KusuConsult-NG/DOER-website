import 'package:flutter/material.dart';
import '../widgets/ui_components.dart';

class MandatesPage extends StatelessWidget {
  const MandatesPage({super.key});

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
                title: 'Mandates',
                subtitle: 'Permission with an expiration date.',
              ),
              const SizedBox(height: 60),

              const SectionHeader(title: 'What Is a Mandate?'),
              const SizedBox(height: 20),
              Text(
                'A mandate answers the question: Who is allowed to act, and for how long?',
                style: Theme.of(
                  context,
                ).textTheme.bodyLarge?.copyWith(fontSize: 18),
              ),
              const SizedBox(height: 40),

              const SectionHeader(title: 'What Mandates Control'),
              const SizedBox(height: 20),
              Text(
                'A mandate defines who can trigger actions, how often actions can occur, and when permission ends. Mandates do not transfer ownership. They only allow limited action.',
                style: Theme.of(
                  context,
                ).textTheme.bodyLarge?.copyWith(fontSize: 18),
              ),

              const SizedBox(height: 60),

              Wrap(
                spacing: 24,
                runSpacing: 24,
                children: const [
                  SizedBox(
                    width: 450,
                    child: InfoCard(
                      title: 'You Can Stop It Anytime',
                      description:
                          'You can revoke a mandate instantly. No waiting. No negotiations. No locked permissions.',
                      icon: Icons.block_outlined,
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
