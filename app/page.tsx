"use client";

/**
 * Landing Page
 *
 * Public landing page for non-authenticated users.
 * Showcases FinanceFlow features and encourages signups.
 *
 * @packageDocumentation
 */

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion, Variants } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Shield,
  Zap,
  Users,
  CreditCard,
  TrendingUp,
  Lock,
  Clock,
  Headphones,
  Check,
  Play,
  Star,
} from "lucide-react";

/**
 * Animation variants
 */
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const slideInRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const float = {
  y: [0, -10, 0],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

/**
 * Feature item interface
 */
interface FeatureItem {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

/**
 * Features data
 */
const features: FeatureItem[] = [
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Get deep insights into your financial data with beautiful, interactive charts and comprehensive reports.",
  },
  {
    icon: Shield,
    title: "Bank-Level Security",
    description: "Your data is protected with 256-bit SSL encryption, two-factor authentication, and SOC 2 certification.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Experience blazing fast performance with real-time updates and instant transaction syncing.",
  },
  {
    icon: CreditCard,
    title: "Smart Budgeting",
    description: "Create and track budgets automatically with AI-powered suggestions and spending alerts.",
  },
  {
    icon: TrendingUp,
    title: "Growth Tracking",
    description: "Monitor your financial growth with customizable dashboards, KPIs, and performance metrics.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Work together seamlessly with role-based access, shared workspaces, and team notifications.",
  },
];

/**
 * Testimonial interface
 */
interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

/**
 * Testimonials data
 */
const testimonials: Testimonial[] = [
  {
    name: "Sarah Johnson",
    role: "CFO",
    company: "TechStart Inc.",
    content: "FinanceFlow has transformed how we manage our finances. The analytics are incredible and the team collaboration features are a game-changer.",
    avatar: "SJ",
  },
  {
    name: "Michael Chen",
    role: "Founder",
    company: "Growth Labs",
    content: "The best financial dashboard I've used. It's intuitive, powerful, and saves us hours every week. Highly recommended!",
    avatar: "MC",
  },
  {
    name: "Emily Rodriguez",
    role: "Finance Manager",
    company: "Scale Up Co.",
    content: "Finally, a finance tool that doesn't require a PhD to use. Beautiful design, powerful features, and excellent support.",
    avatar: "ER",
  },
];

/**
 * Stat interface
 */
interface Stat {
  value: string;
  label: string;
}

/**
 * Stats data
 */
const stats: Stat[] = [
  { value: "10,000+", label: "Active Users" },
  { value: "$2B+", label: "Transactions Tracked" },
  { value: "99.9%", label: "Uptime" },
  { value: "24/7", label: "Customer Support" },
];

/**
 * Landing page component
 */
export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="sticky top-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-3">
              <motion.div
                whileHover={{ rotate: 180, scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className="w-9 h-9 bg-linear-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/30"
              >
                <span className="text-white text-sm font-bold">F</span>
              </motion.div>
              <span className="text-xl font-bold text-gray-900 dark:text-white">FinanceFlow</span>
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <Link href="#features" className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                Features
              </Link>
              <Link href="#testimonials" className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                Testimonials
              </Link>
              <Link href="/pricing" className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                Pricing
              </Link>
            </div>
            <div className="flex items-center gap-3">
              <Link
                href="/login"
                className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Sign In
              </Link>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/signup"
                className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-500/30"
              >
                Get Started
              </motion.a>
            </div>
          </div>
        </div>
      </motion.nav>

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-950 dark:to-indigo-950" />
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400 text-sm font-medium mb-6"
              >
                <Star className="h-4 w-4 fill-current" />
                Trusted by 10,000+ businesses worldwide
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 dark:text-white tracking-tight mb-6"
              >
                Manage Your Finances
                <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-purple-600">
                  Like a Pro
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8"
              >
                The all-in-one financial dashboard for modern businesses. Track expenses, 
                manage budgets, and make data-driven decisions with confidence.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12"
              >
                <motion.a
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(99, 102, 241, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  href="/signup"
                  className="w-full sm:w-auto px-8 py-3.5 text-sm font-medium text-white bg-indigo-600 rounded-xl hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-500/30 inline-flex items-center justify-center gap-2 cursor-pointer"
                >
                  Start Free Trial
                  <ArrowRight className="h-4 w-4" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#demo"
                  className="w-full sm:w-auto px-8 py-3.5 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-all inline-flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Play className="h-4 w-4" />
                  Watch Demo
                </motion.a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500 dark:text-gray-400"
              >
                <div className="flex items-center gap-1.5">
                  <Check className="h-4 w-4 text-green-600" />
                  No credit card required
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="h-4 w-4 text-green-600" />
                  14-day free trial
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="h-4 w-4 text-green-600" />
                  Cancel anytime
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-16 sm:mt-20 lg:mt-24"
            >
              <div className="relative mx-auto max-w-5xl">
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-2xl overflow-hidden"
                >
                  <div className="aspect-[16/10] bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center">
                    <div className="text-center p-8">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      >
                        <BarChart3 className="h-16 w-16 text-indigo-400 mx-auto mb-4" />
                      </motion.div>
                      <p className="text-gray-500 dark:text-gray-400">Interactive Dashboard Preview</p>
                      <p className="text-sm text-gray-400 dark:text-gray-500 mt-2">Sign up to see the full experience</p>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div
                  animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-4 -right-4 w-72 h-72 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-30"
                />
                <motion.div
                  animate={{ scale: [1.2, 1, 1.2], opacity: [0.4, 0.2, 0.4] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
                  className="absolute -bottom-4 -left-4 w-72 h-72 bg-indigo-300 dark:bg-indigo-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-30"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 sm:py-16 border-y border-gray-200 dark:border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {stats.map((stat, index) => (
                <motion.div key={index} variants={fadeInUp} className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 sm:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Everything You Need to Succeed
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Powerful features to help you manage, track, and grow your finances with confidence.
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    whileHover={{ y: -8, transition: { duration: 0.3 } }}
                    className="group p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-indigo-300 dark:hover:border-indigo-700 transition-all hover:shadow-xl"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-12 h-12 rounded-xl bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mb-4"
                    >
                      <Icon className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                    </motion.div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 sm:py-28 bg-gray-50 dark:bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Get Started in Minutes
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Three simple steps to take control of your finances.
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {[
                {
                  step: "01",
                  title: "Create Account",
                  description: "Sign up for free in less than 2 minutes. No credit card required.",
                },
                {
                  step: "02",
                  title: "Connect Accounts",
                  description: "Link your bank accounts and import transactions automatically.",
                },
                {
                  step: "03",
                  title: "Track & Grow",
                  description: "Monitor your finances and make data-driven decisions.",
                },
              ].map((item, index) => (
                <motion.div key={index} variants={slideInLeft} className="relative">
                  <div className="text-6xl font-bold text-indigo-100 dark:text-indigo-900/30 mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                  {index < 2 && (
                    <div className="hidden md:block absolute top-8 right-0 w-full">
                      <ArrowRight className="h-6 w-6 text-gray-300 dark:text-gray-700 ml-auto" />
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 sm:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Loved by Thousands
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                See what our customers have to say about FinanceFlow.
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  whileHover={{ y: -5, transition: { duration: 0.3 } }}
                  className="p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800"
                >
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      </motion.div>
                    ))}
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-6">&quot;{testimonial.content}&quot;</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-linear-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                      <span className="text-white text-sm font-medium">{testimonial.avatar}</span>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900 dark:text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {testimonial.role}, {testimonial.company}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 sm:py-28">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 sm:p-12 lg:p-16 rounded-3xl bg-linear-to-br from-indigo-600 to-purple-600 relative overflow-hidden"
            >
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-0 w-40 h-40 bg-white rounded-full blur-3xl" />
              </div>

              <div className="relative">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
                  Ready to Transform Your Finances?
                </h2>
                <p className="text-indigo-100 mb-8 max-w-xl mx-auto">
                  Join thousands of satisfied customers who trust FinanceFlow with their financial management.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="/signup"
                    className="w-full sm:w-auto px-8 py-3.5 text-sm font-medium text-indigo-600 bg-white rounded-xl hover:bg-indigo-50 transition-all shadow-lg inline-flex items-center justify-center gap-2 cursor-pointer"
                  >
                    Start Your Free Trial
                    <ArrowRight className="h-4 w-4" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="/pricing"
                    className="w-full sm:w-auto px-8 py-3.5 text-sm font-medium text-white border border-white/30 rounded-xl hover:bg-white/10 transition-all"
                  >
                    View Pricing
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-2 md:col-span-1">
              <Link href="/" className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 bg-linear-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center">
                  <span className="text-white text-sm font-bold">F</span>
                </div>
                <span className="text-xl font-bold text-gray-900 dark:text-white">FinanceFlow</span>
              </Link>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                The all-in-one financial dashboard for modern businesses.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Product</h4>
              <ul className="space-y-2">
                <li><Link href="#features" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Features</Link></li>
                <li><Link href="/pricing" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Pricing</Link></li>
                <li><Link href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Integrations</Link></li>
                <li><Link href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Changelog</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Company</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">About</Link></li>
                <li><Link href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Blog</Link></li>
                <li><Link href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Careers</Link></li>
                <li><Link href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><Link href="/privacy" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Privacy</Link></li>
                <li><Link href="/terms" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Terms</Link></li>
                <li><Link href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Security</Link></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-200 dark:border-gray-800">
            <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
              © 2025 FinanceFlow. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
