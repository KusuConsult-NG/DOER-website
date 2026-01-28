import 'package:flutter/material.dart';
import '../widgets/ui_components.dart';

class DocumentationPage extends StatelessWidget {
  const DocumentationPage({super.key});

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
                title: 'Protocol Reference',
                subtitle: 'Core classes and methods.',
              ),
              const SizedBox(height: 60),

              const SectionHeader(title: 'IntentBuilder', subtitle: null),
              const SizedBox(height: 20),
              const Text(
                'Builder pattern for creating valid intent objects.',
                style: TextStyle(fontSize: 16, color: Color(0xFFD1D5DB)),
              ),
              const SizedBox(height: 20),
              const CodeSnippet(
                language: 'typescript',
                code: '''
const intent = new IntentBuilder()
  .setTarget('0x...')
  .setAction('swap')
  .setInput(amount)
  .build();
''',
              ),

              const SizedBox(height: 60),

              const SectionHeader(title: 'NetworkClient', subtitle: null),
              const SizedBox(height: 20),
              const Text(
                'Handles broadcasting intents to the gossip network.',
                style: TextStyle(fontSize: 16, color: Color(0xFFD1D5DB)),
              ),
              const SizedBox(height: 20),
              const CodeSnippet(
                language: 'typescript',
                code: '''
const client = new NetworkClient(config);
await client.broadcast(intent);
''',
              ),
            ],
          ),
        ),
      ),
    );
  }
}
