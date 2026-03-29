/**
 * Root Layout
 * 
 * The root layout component that wraps all pages in the application.
 * Sets up the HTML structure, metadata, and global providers.
 * 
 * @packageDocumentation
 */

import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "@/contexts/ThemeContext";
import "./globals.css";

/**
 * Application viewport configuration
 * Controls responsive behavior and initial scale
 */
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#6366f1",
};

/**
 * Application metadata for SEO
 * This information appears in search results and social media previews
 */
export const metadata: Metadata = {
  /** Application title */
  title: "FinanceFlow - Finance SaaS Dashboard",
  /** Meta description for SEO */
  description: "A modern, responsive finance dashboard built with Next.js 16, Tailwind CSS v4, and TypeScript. Perfect for SaaS applications.",
  /** Keywords for SEO */
  keywords: ["finance", "dashboard", "saas", "nextjs", "tailwind", "typescript"],
  /** Author information */
  authors: [{ name: "Your Name", url: "https://yourwebsite.com" }],
  /** Open Graph metadata for social sharing */
  openGraph: {
    title: "FinanceFlow - Finance SaaS Dashboard",
    description: "A modern, responsive finance dashboard built with Next.js 16, Tailwind CSS v4, and TypeScript.",
    type: "website",
    locale: "en_US",
  },
  /** Twitter card metadata */
  twitter: {
    card: "summary_large_image",
    title: "FinanceFlow - Finance SaaS Dashboard",
    description: "A modern, responsive finance dashboard built with Next.js 16, Tailwind CSS v4, and TypeScript.",
  },
};

/**
 * Root layout props interface
 */
interface RootLayoutProps {
  /** Child pages/components */
  children: React.ReactNode;
}

/**
 * Root layout component
 * Wraps all pages with common HTML structure and providers
 */
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        <ThemeProvider defaultTheme="light" storageKey="financeflow-theme">
          {/* 
            Main application content
            All pages are rendered within this layout
          */}
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
