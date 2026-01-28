import 'package:flutter/material.dart';
import '../widgets/ui_components.dart';

class TechnicalArchitecturePage extends StatelessWidget {
  const TechnicalArchitecturePage({super.key});

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
                title: 'Technical Architecture',
                subtitle:
                    'System design for engineers, protocol designers, and auditors.',
              ),
              const SizedBox(height: 40),

              _Paragraph(
                'This section describes DOER as a system, not a product. It is written for those who need to understand how authority, execution, and failure are handled within DOER.',
              ),
              _Paragraph(
                'This document assumes familiarity with: Wallet-based account models, On-chain permissioning, Smart contract execution, and Off-chain orchestration.',
              ),

              const SizedBox(height: 60),

              const SectionHeader(title: '1. Design Objective Revisited'),
              const SizedBox(height: 20),
              _Paragraph(
                'The primary design objective of DOER is to enable conditional execution under user-defined authority constraints, without relying on persistent trust assumptions.',
              ),
              _Paragraph(
                'Most automation systems fail because authority is either too granular (forcing constant user involvement) or too coarse (granting long-lived, opaque permissions).\n\nDOER introduces a third model: explicit, bounded, revocable authority.',
              ),
              const SizedBox(height: 10),
              _BulletPoint(text: 'Authority cannot silently expand'),
              _BulletPoint(
                text: 'Execution cannot occur outside declared intent',
              ),
              _BulletPoint(text: 'Revocation is final and immediate'),
              _BulletPoint(
                text: 'Off-chain logic can never override on-chain enforcement',
              ),
              const SizedBox(height: 10),
              _Paragraph(
                'These are not UX decisions. They are architectural invariants.',
              ),

              const SizedBox(height: 60),

              const SectionHeader(title: '2. Authority Model'),
              const SizedBox(height: 20),
              _Paragraph(
                'DOER separates authority into distinct layers to prevent authority collapse.',
              ),

              const SizedBox(height: 20),
              _SubHeader('2.1 Authority Layers'),
              const SizedBox(height: 10),
              _DefinitionList(
                term: 'Ownership Authority',
                definition:
                    'Retained entirely by the user. Governs asset ownership and ultimate control. Never delegated to DOER.',
              ),
              _DefinitionList(
                term: 'Intent Authority',
                definition:
                    'Defines what outcomes are acceptable. Passive until bound to execution authority. Immutable once registered (except revocation).',
              ),
              _DefinitionList(
                term: 'Execution Authority',
                definition:
                    'Granted via mandates. Explicit, scoped, and temporary. Always subordinate to intent authority.',
              ),
              _Paragraph(
                'No component ever holds both ownership and execution authority.',
              ),

              const SizedBox(height: 20),
              _SubHeader('2.2 Authority Invariants'),
              const SizedBox(height: 10),
              _BulletPoint(
                text: 'Execution authority must reference a valid intent',
              ),
              _BulletPoint(
                text: 'Mandates cannot outlive their declared expiry',
              ),
              _BulletPoint(text: 'Revoked mandates cannot be resurrected'),
              _BulletPoint(text: 'Execution cannot mutate intent state'),
              _BulletPoint(text: 'Off-chain components have zero authority'),
              const SizedBox(height: 10),
              _Paragraph(
                'Any violation of these invariants results in execution failure.',
              ),

              const SizedBox(height: 60),

              const SectionHeader(
                title: '3. Intent Model (Formal Perspective)',
              ),
              const SizedBox(height: 20),
              _Paragraph(
                'An intent is a declarative object that encodes permissible state transitions. It defines a target outcome space, a constraint set over that space, and temporal validity rules.',
              ),

              const SizedBox(height: 20),
              _SubHeader('3.1 Intent as a Constraint System'),
              _Paragraph(
                'Conceptually, an intent defines a predicate:\nExecute(action) ⇒ Constraints(action) == true',
              ),
              _Paragraph('Constraints may include:'),
              _BulletPoint(text: 'Program allowlists'),
              _BulletPoint(text: 'Asset allowlists'),
              _BulletPoint(text: 'Amount ceilings'),
              _BulletPoint(text: 'State predicates'),
              _BulletPoint(text: 'Time windows'),

              const SizedBox(height: 20),
              _SubHeader('3.2 Immutability and Auditability'),
              _Paragraph(
                'Once registered: An intent’s constraints cannot be modified. Any execution can be traced back to its intent. Observers can independently verify authorization.',
              ),

              const SizedBox(height: 60),

              const SectionHeader(title: '4. Mandate Model (Execution Rights)'),
              const SizedBox(height: 20),
              _Paragraph(
                'Mandates are the only mechanism by which execution authority is granted. They bind: An intent, An executor identity, and A scope of execution.',
              ),

              const SizedBox(height: 20),
              _SubHeader('4.1 Mandatory Mandate Properties'),
              _DefinitionList(
                term: 'Executor Scope',
                definition: 'Single executor or bounded set.',
              ),
              _DefinitionList(
                term: 'Temporal Scope',
                definition: 'Start time, Hard expiry.',
              ),
              _DefinitionList(
                term: 'Usage Limits',
                definition: 'Max executions, Optional rate limits.',
              ),
              _DefinitionList(
                term: 'Value Limits',
                definition: 'Per-execution caps, Aggregate caps.',
              ),
              _Paragraph('All fields are enforced on-chain.'),

              const SizedBox(height: 20),
              _SubHeader('4.2 Mandate Lifecycle'),
              _Paragraph(
                'Mandates move through a strict lifecycle: Created → Active → Expired or Revoked → Terminal (irreversible). There is no “paused” state.',
              ),

              const SizedBox(height: 60),

              const SectionHeader(title: '5. Execution Model'),
              const SizedBox(height: 20),
              _Paragraph(
                'Execution in DOER is proposal-based, not imperative.',
              ),

              const SizedBox(height: 20),
              _SubHeader('5.1 Execution Proposal'),
              _Paragraph(
                'An executor submits a proposed action with references to intent and mandate. This proposal asserts: “This action satisfies all declared constraints.”',
              ),

              const SizedBox(height: 20),
              _SubHeader('5.2 Deterministic Validation'),
              _Paragraph(
                'Before execution: Intent constraints are evaluated, Mandate validity is checked, Usage/Value limits are enforced.\n\nValidation is deterministic, stateless beyond counters, and fully on-chain. Failure at any step aborts execution atomically.',
              ),

              const SizedBox(height: 60),

              const SectionHeader(title: '6. On-Chain vs Off-Chain'),
              const SizedBox(height: 20),
              _SubHeader('6.1 On-Chain (Authoritative)'),
              _Paragraph(
                'Responsible for: Authority enforcement, Constraint validation, Mandate lifecycle, Revocation, Execution settlement.',
              ),

              const SizedBox(height: 20),
              _SubHeader('6.2 Off-Chain (Advisory Only)'),
              _Paragraph(
                'Can: Monitor, Propose, Interpret, Schedule.\nCannot: Bypass validation, Extend authority, Modify constraints, Execute directly.\n\nOff-chain components are treated as untrusted.',
              ),

              const SizedBox(height: 60),

              const SectionHeader(title: '7. Failure Modes and Guarantees'),
              const SizedBox(height: 20),
              _DefinitionList(
                term: 'Executor Misbehavior',
                definition:
                    'If invalid proposal or limits exceeded: Execution fails, No state change.',
              ),
              _DefinitionList(
                term: 'Off-Chain Compromise',
                definition:
                    'Constraints still apply. Users retain revocation power. No additional authority gained.',
              ),
              _DefinitionList(
                term: 'User Error',
                definition:
                    'DOER enforces constraints exactly. It does not infer intent. It does not protect against unclear user decisions.',
              ),

              const SizedBox(height: 60),

              const SectionHeader(title: '8. Integration Patterns'),
              const SizedBox(height: 20),
              _DefinitionList(
                term: 'Wallet Integrations',
                definition:
                    'Visualize intents, surface expiries, enable revocation. No execution logic needed.',
              ),
              _DefinitionList(
                term: 'Tool Integrations',
                definition:
                    'Propose executions and respect constraints. Tools never receive permanent permissions.',
              ),
              _DefinitionList(
                term: 'DAO Integrations',
                definition:
                    'Delegate operational authority, enforce budgets, ensure time-bounded execution.',
              ),

              const SizedBox(height: 60),

              const SectionHeader(title: '9. Security Assumptions'),
              const SizedBox(height: 20),
              _Paragraph(
                'DOER assumes: Executors may be malicious, Off-chain logic may fail, Users may misunderstand permissions.\n\nTherefore: Authority is minimized, Rules are explicit, Enforcement is deterministic, Revocation is absolute.',
              ),

              const SizedBox(height: 60),

              const SectionHeader(
                title: '10. What DOER Deliberately Does Not Solve',
              ),
              const SizedBox(height: 20),
              _BulletPoint(text: 'Market risk'),
              _BulletPoint(text: 'Contract-level exploits in allowed programs'),
              _BulletPoint(text: 'Poor user judgment'),
              _BulletPoint(text: 'Fully autonomous agents'),
              _Paragraph('These are outside the system’s scope.'),

              const SizedBox(height: 60),

              const SectionHeader(title: '11. Mental Model for Builders'),
              const SizedBox(height: 20),
              _Paragraph(
                'Think of DOER as: A permission firewall, A rule engine for execution authority, A guardrail not a driver.\n\nYour system proposes actions. DOER decides whether they are allowed.',
              ),

              const SizedBox(height: 60),

              const SectionHeader(
                title: '12. Evaluation Checklist for Builders',
              ),
              const SizedBox(height: 20),
              _BulletPoint(text: 'What authority do I actually need?'),
              _BulletPoint(text: 'Can that authority be bounded?'),
              _BulletPoint(text: 'Can users revoke it safely?'),
              _BulletPoint(text: 'Can failures be handled gracefully?'),
              _Paragraph('If the answer is no, DOER may not be appropriate.'),

              const SizedBox(height: 40),
              const Divider(),
              const SizedBox(height: 40),

              Text(
                'Closing Statement',
                style: Theme.of(
                  context,
                ).textTheme.titleLarge?.copyWith(fontWeight: FontWeight.bold),
              ),
              const SizedBox(height: 16),
              const Text(
                'DOER is designed to make authority explicit, limited, and enforceable.\n\nFor developers, this means building systems that can be powerful without being dangerous.\n\nThat constraint is intentional.',
                style: TextStyle(
                  fontSize: 18,
                  color: Colors.white60,
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

class _SubHeader extends StatelessWidget {
  final String text;
  const _SubHeader(this.text);

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.only(bottom: 16),
      child: Text(
        text,
        style: Theme.of(context).textTheme.headlineSmall?.copyWith(
          fontWeight: FontWeight.bold,
          color: Colors.white,
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
            style: Theme.of(
              context,
            ).textTheme.bodyLarge?.copyWith(color: Colors.white),
          ),
          const SizedBox(height: 4),
          Text(
            definition,
            style: Theme.of(context).textTheme.bodyLarge?.copyWith(
              fontSize: 18,
              color: Colors.white70,
            ),
          ),
        ],
      ),
    );
  }
}
