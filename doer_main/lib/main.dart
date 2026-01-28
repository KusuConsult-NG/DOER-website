import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'theme.dart';
import 'widgets/protocol_scaffold.dart';

// Pages
import 'pages/home_page.dart';
import 'pages/how_it_works_page.dart';
import 'pages/intents_page.dart';
import 'pages/mandates_page.dart';
import 'pages/security_page.dart';
import 'pages/about_page.dart';

void main() {
  runApp(const DoerApp());
}

// Custom Transition Page that offers no transition (instant) for web-like feel
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
      return child; // No animation, instant switch
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
            child: const HomePage(),
          ),
        ),
        GoRoute(
          path: '/how-it-works',
          pageBuilder: (context, state) => buildPageWithNoTransition(
            context: context,
            state: state,
            child: const HowItWorksPage(),
          ),
        ),
        GoRoute(
          path: '/intents',
          pageBuilder: (context, state) => buildPageWithNoTransition(
            context: context,
            state: state,
            child: const IntentsPage(),
          ),
        ),
        GoRoute(
          path: '/mandates',
          pageBuilder: (context, state) => buildPageWithNoTransition(
            context: context,
            state: state,
            child: const MandatesPage(),
          ),
        ),
        GoRoute(
          path: '/security',
          pageBuilder: (context, state) => buildPageWithNoTransition(
            context: context,
            state: state,
            child: const SecurityPage(),
          ),
        ),
        GoRoute(
          path: '/about',
          pageBuilder: (context, state) => buildPageWithNoTransition(
            context: context,
            state: state,
            child: const AboutPage(),
          ),
        ),
      ],
    ),
  ],
);

class DoerApp extends StatelessWidget {
  const DoerApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp.router(
      title: 'DOER Wallet', // Updated Title
      theme: DoerTheme.themeData, // New Dark Theme
      routerConfig: _router,
      debugShowCheckedModeBanner: false,
    );
  }
}
