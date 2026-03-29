"use client";

/**
 * Help & Support Page
 * 
 * Help center with FAQs, contact form, and support resources.
 * Users can find answers to common questions or contact support.
 * 
 * @packageDocumentation
 */

import React, { useState } from "react";
import { DashboardLayout } from "@/components/layout";
import { cn } from "@/lib/utils";
import {
  Search,
  MessageCircle,
  Mail,
  Phone,
  FileText,
  Video,
  ChevronDown,
  Send,
  HelpCircle,
  BookOpen,
  MessageSquare,
} from "lucide-react";

/**
 * FAQ data
 */
const faqs = [
  {
    id: "1",
    question: "How do I add a new payment method?",
    answer:
      "Go to Settings > Billing > Payment Methods and click 'Add New Card'. Enter your card details and click Save. Your card will be verified instantly.",
  },
  {
    id: "2",
    question: "How can I export my transaction history?",
    answer:
      "Navigate to Transactions page and click the 'Export' button. You can choose between CSV, PDF, or Excel formats. The file will be downloaded to your device.",
  },
  {
    id: "3",
    question: "What is the transaction limit?",
    answer:
      "The default transaction limit is $10,000 per day. You can increase this limit by going to Settings > Security > Transaction Limits and verifying your identity.",
  },
  {
    id: "4",
    question: "How do I change my account email?",
    answer:
      "Visit Settings > Profile > Email and click 'Change Email'. Enter your new email address and verify it through the confirmation link we'll send.",
  },
  {
    id: "5",
    question: "Is my data secure?",
    answer:
      "Yes! We use bank-level 256-bit encryption to protect your data. We're also SOC 2 Type II certified and comply with GDPR regulations.",
  },
];

/**
 * Help categories
 */
const categories = [
  {
    id: "1",
    title: "Getting Started",
    description: "Learn the basics of using FinanceFlow",
    icon: BookOpen,
    articles: 12,
  },
  {
    id: "2",
    title: "Payments & Transactions",
    description: "Manage your money and transfers",
    icon: CreditCardIcon,
    articles: 24,
  },
  {
    id: "3",
    title: "Account Settings",
    description: "Customize your account preferences",
    icon: SettingsIcon,
    articles: 18,
  },
  {
    id: "4",
    title: "Security & Privacy",
    description: "Keep your account safe and secure",
    icon: ShieldIcon,
    articles: 15,
  },
  {
    id: "5",
    title: "Billing & Subscriptions",
    description: "Manage your plan and payments",
    icon: DollarIcon,
    articles: 10,
  },
  {
    id: "6",
    title: "Video Tutorials",
    description: "Watch step-by-step guides",
    icon: Video,
    articles: 8,
  },
];

/**
 * Contact methods
 */
const contactMethods = [
  {
    id: "1",
    title: "Live Chat",
    description: "Chat with our support team",
    icon: MessageCircle,
    availability: "Available 24/7",
    color: "bg-green-100 text-green-600",
  },
  {
    id: "2",
    title: "Email Support",
    description: "Get help via email",
    icon: Mail,
    availability: "Response within 24 hours",
    color: "bg-blue-100 text-blue-600",
  },
  {
    id: "3",
    title: "Phone Support",
    description: "Call us directly",
    icon: Phone,
    availability: "Mon-Fri, 9AM-6PM EST",
    color: "bg-purple-100 text-purple-600",
  },
];

/**
 * Help page component
 */
export default function HelpPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [openFaq, setOpenFaq] = useState<string | null>(null);
  const [contactForm, setContactForm] = useState({
    subject: "",
    message: "",
  });

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            How can we help you?
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-2">
            Search our knowledge base or contact our support team
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search for help articles, guides, FAQs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-300 transition-all"
            />
          </div>
        </div>

        {/* Help Categories */}
        <div>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Browse Categories
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  className="p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-600 hover:shadow-md transition-all text-left"
                >
                  <div className="w-12 h-12 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    {category.description}
                  </p>
                  <p className="text-xs text-gray-400 dark:text-gray-500 mt-3">
                    {category.articles} articles
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Contact Methods */}
        <div>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Contact Support
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {contactMethods.map((method) => {
              const Icon = method.icon;
              return (
                <button
                  key={method.id}
                  className="p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-600 hover:shadow-md transition-all text-center"
                >
                  <div
                    className={cn(
                      "w-12 h-12 rounded-full mx-auto flex items-center justify-center mb-3",
                      method.color
                    )}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {method.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    {method.description}
                  </p>
                  <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">
                    {method.availability}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* FAQs */}
        <div className="pb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4 max-w-3xl">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-sm"
              >
                <button
                  onClick={() =>
                    setOpenFaq(openFaq === faq.id ? null : faq.id)
                  }
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                >
                  <span className="font-medium text-gray-900 dark:text-white pr-8">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 text-gray-400 shrink-0 transition-transform",
                      openFaq === faq.id && "rotate-180"
                    )}
                  />
                </button>
                {openFaq === faq.id && (
                  <div className="px-5 pb-5 pt-0 text-gray-600 dark:text-gray-300 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 max-w-2xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <MessageSquare className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              Send us a Message
            </h2>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Subject
              </label>
              <select
                value={contactForm.subject}
                onChange={(e) =>
                  setContactForm({ ...contactForm, subject: e.target.value })
                }
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-300"
              >
                <option value="">Select a subject</option>
                <option value="technical">Technical Issue</option>
                <option value="billing">Billing Question</option>
                <option value="account">Account Access</option>
                <option value="feature">Feature Request</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Message
              </label>
              <textarea
                rows={5}
                value={contactForm.message}
                onChange={(e) =>
                  setContactForm({ ...contactForm, message: e.target.value })
                }
                placeholder="Describe your issue in detail..."
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-300 resize-none"
              />
            </div>
            <button className="w-full px-4 py-3 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors inline-flex items-center justify-center gap-2">
              <Send className="h-4 w-4" />
              Send Message
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

// Icon components for categories
function CreditCardIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
      />
    </svg>
  );
}

function SettingsIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  );
}

function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
      />
    </svg>
  );
}

function DollarIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}
