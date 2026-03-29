"use client";

/**
 * Pricing Page
 *
 * Pricing plans and subscription options for FinanceFlow.
 * Shows different tiers with features and billing options.
 *
 * @packageDocumentation
 */

import React, { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion, Variants } from "framer-motion";
import {
  Check,
  X,
  Star,
  Zap,
  Building2,
  Shield,
  Headphones,
  TrendingUp,
  Users,
  CreditCard,
  BarChart3,
  Lock,
  Clock,
  ArrowRight,
  Play,
} from "lucide-react";

/**
 * Animation variants
 */
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer: Variants = {
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
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

/**
 * Pricing plan interface
 */
interface PricingPlan {
  id: string;
  name: string;
  description: string;
  monthlyPrice: number;
  yearlyPrice: number;
  features: string[];
  notIncluded: string[];
  popular?: boolean;
  icon: React.ComponentType<{ className?: string }>;
}

/**
 * Pricing plans data
 */
const pricingPlans: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter",
    description: "Perfect for freelancers and side projects getting started",
    monthlyPrice: 0,
    yearlyPrice: 0,
    features: [
      "Up to 100 transactions/month",
      "Basic financial dashboard",
      "Connect 1 bank account",
      "Monthly financial reports",
      "Email support (48h response)",
      "Mobile app access",
      "Expense categorization",
    ],
    notIncluded: [
      "Advanced analytics",
      "Multiple users",
      "API access",
      "Priority support",
      "Custom integrations",
    ],
    icon: Users,
  },
  {
    id: "pro",
    name: "Pro",
    description: "Everything you need to scale your business finances",
    monthlyPrice: 29,
    yearlyPrice: 290,
    popular: true,
    features: [
      "Unlimited transactions",
      "Advanced dashboard & analytics",
      "Connect up to 5 bank accounts",
      "Weekly automated reports",
      "Smart budget tracking",
      "Invoice creation & management",
      "Priority email support (24h)",
      "Full mobile app access",
      "Tax preparation tools",
      "Recurring transaction rules",
    ],
    notIncluded: [
      "Multiple team users",
      "API access",
      "Custom integrations",
      "Dedicated support",
    ],
    icon: Zap,
  },
  {
    id: "business",
    name: "Business",
    description: "Powerful tools for growing teams and companies",
    monthlyPrice: 79,
    yearlyPrice: 790,
    features: [
      "Everything in Pro, plus:",
      "Connect up to 20 bank accounts",
      "Daily automated reports",
      "Team collaboration (up to 10 users)",
      "Advanced security & permissions",
      "Full API access",
      "Custom integrations",
      "Phone & email priority support",
      "Dedicated account manager",
      "Multi-currency support",
      "Advanced audit logs",
    ],
    notIncluded: [
      "Unlimited users",
      "White-label solution",
      "On-premise deployment",
    ],
    icon: Building2,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "Custom solutions for large organizations",
    monthlyPrice: 199,
    yearlyPrice: 1990,
    features: [
      "Everything in Business, plus:",
      "Unlimited bank accounts",
      "Real-time reporting & alerts",
      "Unlimited team users",
      "Advanced API with webhooks",
      "Custom enterprise integrations",
      "White-label solution",
      "24/7 dedicated phone support",
      "99.9% SLA guarantee",
      "On-premise deployment option",
      "Custom training sessions",
      "Quarterly business reviews",
    ],
    notIncluded: [],
    icon: Star,
  },
];

/**
 * FAQ item interface
 */
interface FAQItem {
  question: string;
  answer: string;
}

/**
 * FAQ data
 */
const faqData: FAQItem[] = [
  {
    question: "Can I change my plan later?",
    answer: "Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.",
  },
  {
    question: "Is there a free trial?",
    answer: "Yes! All paid plans come with a 14-day free trial. No credit card required to start.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards (Visa, Mastercard, Amex), PayPal, and bank transfers for annual plans.",
  },
  {
    question: "Can I cancel my subscription?",
    answer: "Absolutely. You can cancel your subscription at any time. Your account will remain active until the end of your billing period.",
  },
  {
    question: "Do you offer discounts for nonprofits?",
    answer: "Yes, we offer special pricing for registered nonprofits and educational institutions. Contact our sales team for more information.",
  },
  {
    question: "Is my data secure?",
    answer: "Absolutely. We use bank-level 256-bit SSL encryption and are SOC 2 Type II certified. Your data is backed up daily and stored in secure data centers.",
  },
];

/**
 * Pricing page component
 */
export default function PricingPage() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("monthly");
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      {/* Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50"
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
            <div className="flex items-center gap-3 sm:gap-4">
              <Link
                href="/pricing"
                className="hidden sm:block text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Pricing
              </Link>
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
      </motion.header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400 text-sm font-medium mb-6"
          >
            <Star className="h-4 w-4 fill-current" />
            Trusted by 10,000+ businesses worldwide
          </motion.div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Choose the Perfect Plan
            <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-purple-600">
              For Your Business
            </span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            Start free and scale as you grow. All plans include a 14-day free trial with full access to features.
          </p>

          {/* Billing Toggle */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center justify-center gap-3"
          >
            <span
              className={cn(
                "text-sm font-medium",
                billingPeriod === "monthly"
                  ? "text-gray-900 dark:text-white"
                  : "text-gray-500 dark:text-gray-400"
              )}
            >
              Monthly
            </span>
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setBillingPeriod(billingPeriod === "monthly" ? "yearly" : "monthly")}
              className={cn(
                "relative w-14 h-7 rounded-full transition-colors",
                billingPeriod === "yearly" ? "bg-indigo-600" : "bg-gray-300 dark:bg-gray-700"
              )}
            >
              <motion.span
                layout
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className={cn(
                  "absolute top-1 w-5 h-5 bg-white rounded-full",
                  billingPeriod === "yearly" ? "left-8" : "left-1"
                )}
              />
            </motion.button>
            <span
              className={cn(
                "text-sm font-medium",
                billingPeriod === "yearly"
                  ? "text-gray-900 dark:text-white"
                  : "text-gray-500 dark:text-gray-400"
              )}
            >
              Yearly
              <span className="ml-1.5 px-2 py-0.5 text-xs font-semibold text-green-700 dark:text-green-400 bg-green-100 dark:bg-green-900/30 rounded-full">
                Save 17%
              </span>
            </span>
          </motion.div>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {pricingPlans.map((plan) => {
            const Icon = plan.icon;
            const price = billingPeriod === "monthly" ? plan.monthlyPrice : plan.yearlyPrice;

            return (
              <motion.div
                key={plan.id}
                variants={scaleIn}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className={cn(
                  "relative rounded-2xl border p-6 flex flex-col transition-all duration-300 hover:shadow-xl",
                  plan.popular
                    ? "border-indigo-600 bg-indigo-50 dark:bg-indigo-900/10 shadow-lg"
                    : "border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-indigo-300 dark:hover:border-indigo-700"
                )}
              >
                {plan.popular && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute -top-3 left-1/2 -translate-x-1/2"
                  >
                    <span className="px-3 py-1 text-xs font-semibold text-white bg-indigo-600 rounded-full shadow-lg">
                      Most Popular
                    </span>
                  </motion.div>
                )}

                {/* Plan Header */}
                <div className="text-center mb-6">
                  <div
                    className={cn(
                      "w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4",
                      plan.popular
                        ? "bg-indigo-600"
                        : "bg-gray-100 dark:bg-gray-800"
                    )}
                  >
                    <Icon
                      className={cn(
                        "h-6 w-6",
                        plan.popular ? "text-white" : "text-gray-600 dark:text-gray-400"
                      )}
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                    {plan.name}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
                    {plan.description}
                  </p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-bold text-gray-900 dark:text-white">
                      ${price}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      /{billingPeriod === "monthly" ? "mo" : "yr"}
                    </span>
                  </div>
                </div>

                {/* Features */}
                <div className="flex-1 space-y-3 mb-6">
                  {plan.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-start gap-2"
                    >
                      <Check className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">{feature}</span>
                    </motion.div>
                  ))}
                  {plan.notIncluded.length > 0 && (
                    <>
                      <div className="border-t border-gray-200 dark:border-gray-700 my-3" />
                      {plan.notIncluded.map((feature, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <X className="h-5 w-5 text-gray-300 dark:text-gray-600 shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-400 dark:text-gray-500">{feature}</span>
                        </div>
                      ))}
                    </>
                  )}
                </div>

                {/* CTA Button */}
                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  href="/signup"
                  className={cn(
                    "w-full py-2.5 px-4 rounded-lg text-sm font-medium text-center transition-all cursor-pointer",
                    plan.popular
                      ? "bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-500/30"
                      : "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
                  )}
                >
                  {plan.monthlyPrice === 0 ? "Get Started Free" : "Start Free Trial"}
                </motion.a>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Features Comparison */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Why Choose FinanceFlow?
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Everything you need to manage your finances effectively
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: BarChart3,
                title: "Advanced Analytics",
                description: "Get deep insights into your financial data with beautiful charts and reports.",
              },
              {
                icon: Shield,
                title: "Bank-Level Security",
                description: "Your data is protected with 256-bit SSL encryption and SOC 2 certification.",
              },
              {
                icon: CreditCard,
                title: "Smart Budgeting",
                description: "Create and track budgets automatically with AI-powered suggestions.",
              },
              {
                icon: Clock,
                title: "Time Saving",
                description: "Automate repetitive tasks and save hours every month on bookkeeping.",
              },
              {
                icon: Lock,
                title: "Privacy First",
                description: "We never sell your data. Your financial information is yours alone.",
              },
              {
                icon: Headphones,
                title: "24/7 Support",
                description: "Our expert team is always available to help you succeed.",
              },
              {
                icon: TrendingUp,
                title: "Growth Tracking",
                description: "Monitor your financial growth with customizable dashboards and metrics.",
              },
              {
                icon: Users,
                title: "Team Collaboration",
                description: "Work together with your team with role-based access control.",
              },
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="p-6 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-indigo-300 dark:hover:border-indigo-700 transition-all hover:shadow-lg"
                >
                  <div className="w-10 h-10 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mb-4">
                    <Icon className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* FAQ Section */}
        <div>
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Got questions? We&apos;ve got answers.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between gap-4"
                >
                  <span className="font-medium text-gray-900 dark:text-white">
                    {faq.question}
                  </span>
                  <span
                    className={cn(
                      "w-6 h-6 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center transition-transform",
                      openFAQ === index && "rotate-45"
                    )}
                  >
                    <span className="text-gray-600 dark:text-gray-400 text-xl leading-none">+</span>
                  </span>
                </button>
                {openFAQ === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 dark:text-gray-400">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="p-8 sm:p-12 rounded-2xl bg-linear-to-br from-indigo-600 to-purple-600 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full blur-3xl" />
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-white rounded-full blur-3xl" />
            </div>

            <div className="relative">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-indigo-100 mb-6 max-w-xl mx-auto">
                Join thousands of satisfied customers who trust FinanceFlow with their finances.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link
                  href="/signup"
                  className="w-full sm:w-auto px-6 py-3 text-sm font-medium text-indigo-600 bg-white rounded-lg hover:bg-indigo-50 transition-all shadow-lg inline-flex items-center justify-center gap-2"
                >
                  Start Your Free Trial
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/contact"
                  className="w-full sm:w-auto px-6 py-3 text-sm font-medium text-white border border-white/30 rounded-lg hover:bg-white/10 transition-all inline-flex items-center justify-center gap-2"
                >
                  <Headphones className="h-4 w-4" />
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-8">
            {/* Brand Column */}
            <div className="col-span-2 md:col-span-1">
              <Link href="/" className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 bg-linear-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/30">
                  <span className="text-white text-sm font-bold">F</span>
                </div>
                <span className="text-lg font-bold text-gray-900 dark:text-white">FinanceFlow</span>
              </Link>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                The all-in-one financial dashboard for modern businesses.
              </p>
              <div className="flex items-center gap-3">
                <a href="#" className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-indigo-100 dark:hover:bg-indigo-900/30 transition-colors">
                  <svg className="w-4 h-4 text-gray-600 dark:text-gray-400" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                </a>
                <a href="#" className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-indigo-100 dark:hover:bg-indigo-900/30 transition-colors">
                  <svg className="w-4 h-4 text-gray-600 dark:text-gray-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </a>
                <a href="#" className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-indigo-100 dark:hover:bg-indigo-900/30 transition-colors">
                  <svg className="w-4 h-4 text-gray-600 dark:text-gray-400" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
              </div>
            </div>

            {/* Product Column */}
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Product</h4>
              <ul className="space-y-2">
                <li><Link href="#features" className="text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Features</Link></li>
                <li><Link href="/pricing" className="text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Pricing</Link></li>
                <li><Link href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Integrations</Link></li>
                <li><Link href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Changelog</Link></li>
                <li><Link href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">API Docs</Link></li>
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Company</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">About Us</Link></li>
                <li><Link href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Blog</Link></li>
                <li><Link href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Careers</Link></li>
                <li><Link href="/contact" className="text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Contact</Link></li>
                <li><Link href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Partners</Link></li>
              </ul>
            </div>

            {/* Resources Column */}
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Documentation</Link></li>
                <li><Link href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Help Center</Link></li>
                <li><Link href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Community</Link></li>
                <li><Link href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Webinars</Link></li>
                <li><Link href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Status</Link></li>
              </ul>
            </div>

            {/* Legal Column */}
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><Link href="/privacy" className="text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Terms of Service</Link></li>
                <li><Link href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Security</Link></li>
                <li><Link href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">GDPR</Link></li>
                <li><Link href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Cookie Policy</Link></li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-gray-200 dark:border-gray-800">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                © 2025 FinanceFlow. All rights reserved.
              </p>
              <div className="flex items-center gap-6">
                <span className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <Shield className="h-4 w-4" />
                  SOC 2 Type II Certified
                </span>
                <span className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <Lock className="h-4 w-4" />
                  256-bit SSL Encrypted
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
