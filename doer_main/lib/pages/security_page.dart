import 'package:flutter/material.dart';
import '../widgets/ui_components.dart';

class SecurityPage extends StatelessWidget {
  const SecurityPage({super.key});

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
                title: 'Security',
                subtitle: 'Your assets are never held.',
              ),
              const SizedBox(height: 60),

              Text(
                'DOER DAPP does not hold your funds. Your wallet remains the owner at all times.',
                style: Theme.of(
                  context,
                ).textTheme.bodyLarge?.copyWith(fontSize: 18),
              ),
              const SizedBox(height: 60),

              Wrap(
                spacing: 24,
                runSpacing: 24,
                crossAxisAlignment: WrapCrossAlignment.start,
                children: const [
                  SizedBox(
                    width: 450,
                    child: InfoCard(
                      title: 'What DOER DAPP Prevents',
                      description:
                          '• Unlimited permissions\n• Silent automation\n• Actions beyond what you allowed\n• Forgotten approvals that stay active forever',
                      icon: Icons.shield_outlined,
                    ),
                  ),
                  SizedBox(
                    width: 450,
                    child: InfoCard(
                      title: 'What DOER DAPP Cannot Fix',
                      description:
                          '• Allowing unsafe apps yourself\n• Setting limits you do not understand\n\nControl comes with responsibility.',
                      icon: Icons.warning_amber_outlined,
                    ),
                  ),
                ],
              ),

              const SizedBox(height: 60),

              const SectionHeader(title: 'Why Transparency Matters'),
              const SizedBox(height: 20),
              Text(
                'DOER DAPP does not hide complexity behind vague approvals. If something can act for you, you should know exactly how.',
                style: Theme.of(
                  context,
                ).textTheme.bodyLarge?.copyWith(fontSize: 18),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
