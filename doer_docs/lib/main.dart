import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'theme.dart';
import 'widgets/protocol_scaffold.dart';

import 'pages/developers_page.dart';
import 'pages/documentation_page.dart';
import 'pages/getting_started_page.dart';
import 'pages/technical_architecture_page.dart';

void main() {
  runApp(const DoerDocsApp());
}

CustomTransitionPage buildPageWithNoTransition<T>({
  required BuildContext context,
  required GoRouterState state,
  required Widget child,
}) {
  return CustomTransitionPage<T>(
    transitionDuration: Duration.zero,
    reverseTransitionDuration: Duration.zero,
    key: state.pageKey,
    child: child,
    transitionsBuilder: (context, animation, secondaryAnimation, child) {
      return child;
    },
  );
}

final _router = GoRouter(
  initialLocation: '/',
  routes: [
    ShellRoute(
      builder: (context, state, child) {
        return ProtocolScaffold(key: state.pageKey, child: child);
      },
      routes: [
        GoRoute(
          path: '/',
          pageBuilder: (context, state) => buildPageWithNoTransition(
            context: context,
            state: state,
            child: const DevelopersPage(),
          ),
        ),
        GoRoute(
          path: '/getting-started',
          pageBuilder: (context, state) => buildPageWithNoTransition(
            context: context,
            state: state,
            child: const GettingStartedPage(),
          ),
        ),
        GoRoute(
          path: '/architecture',
          pageBuilder: (context, state) => buildPageWithNoTransition(
            context: context,
            state: state,
            child: const TechnicalArchitecturePage(),
          ),
        ),
        GoRoute(
          path: '/docs',
          pageBuilder: (context, state) => buildPageWithNoTransition(
            context: context,
            state: state,
            child: const DocumentationPage(),
          ),
        ),
      ],
    ),
  ],
);

class DoerDocsApp extends StatelessWidget {
  const DoerDocsApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp.router(
      title: 'DOER Developers',
      theme: DoerTheme.themeData, // Shared Dark Theme
      routerConfig: _router,
      debugShowCheckedModeBanner: false,
    );
  }
}
