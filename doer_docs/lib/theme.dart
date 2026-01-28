import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

class DoerTheme {
  static const Color background = Color(
    0xFF111827,
  ); // Gray 900 - Slightly lighter
  static const Color surface = Color(0xFF1F2937); // Gray 800
  static const Color primaryText = Color(0xFFFFFFFF);
  static const Color secondaryText = Color(0xFF9CA3AF); // Light Grey

  // Brand Colors from Logo (Approximated based on "Blue/Green" description)
  static const Color doerBlue = Color(0xFF2563EB); // Vibrant Royal Blue
  static const Color doerGreen = Color(0xFF10B981); // Emerald Green

  static const Color border = Color(0xFF1F2937); // Dark Grey Border

  static ThemeData get themeData {
    return ThemeData(
      useMaterial3: true,
      brightness: Brightness.dark,
      scaffoldBackgroundColor: background,
      canvasColor: background,
      primaryColor: doerBlue,
      colorScheme: const ColorScheme.dark(
        surface: surface,
        onSurface: primaryText,
        primary: doerBlue,
        secondary: doerGreen,
        outline: border,
      ),
      textTheme: TextTheme(
        displayLarge: GoogleFonts.outfit(
          // Modern Geometric Sans
          fontSize: 64,
          fontWeight: FontWeight.bold,
          color: primaryText,
          height: 1.1,
          letterSpacing: -1.5,
        ),
        displayMedium: GoogleFonts.outfit(
          fontSize: 40,
          fontWeight: FontWeight.w600,
          color: primaryText,
          height: 1.2,
          letterSpacing: -0.5,
        ),
        displaySmall: GoogleFonts.outfit(
          fontSize: 28,
          fontWeight: FontWeight.w600,
          color: primaryText,
          height: 1.3,
        ),
        bodyLarge: GoogleFonts.inter(
          // Highly readable for body
          fontSize: 18,
          fontWeight: FontWeight.w400,
          color: secondaryText,
          height: 1.6,
        ),
        bodyMedium: GoogleFonts.inter(
          fontSize: 16,
          fontWeight: FontWeight.w400,
          color: secondaryText,
          height: 1.5,
        ),
        labelLarge: GoogleFonts.robotoMono(
          fontSize: 14,
          fontWeight: FontWeight.w500,
          color: doerBlue,
        ),
      ),
      dividerTheme: const DividerThemeData(color: border, thickness: 1),
      textButtonTheme: TextButtonThemeData(
        style: TextButton.styleFrom(
          foregroundColor: Colors.white,
          textStyle: GoogleFonts.outfit(
            fontWeight: FontWeight.w500,
            fontSize: 16,
          ),
          padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 12),
        ),
      ),
      elevatedButtonTheme: ElevatedButtonThemeData(
        style: ElevatedButton.styleFrom(
          backgroundColor: doerBlue,
          foregroundColor: Colors.white,
          elevation: 0,
          padding: const EdgeInsets.symmetric(horizontal: 32, vertical: 24),
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(12),
          ),
          textStyle: GoogleFonts.outfit(
            fontWeight: FontWeight.bold,
            fontSize: 16,
          ),
        ),
      ),
      pageTransitionsTheme: PageTransitionsTheme(
        builders: {
          for (final platform in TargetPlatform.values)
            platform: const NoTransitionsBuilder(),
        },
      ),
    );
  }
}

class NoTransitionsBuilder extends PageTransitionsBuilder {
  const NoTransitionsBuilder();

  @override
  Widget buildTransitions<T>(
    PageRoute<T> route,
    BuildContext context,
    Animation<double> animation,
    Animation<double> secondaryAnimation,
    Widget child,
  ) {
    return child;
  }
}
