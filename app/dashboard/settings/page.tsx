"use client";

/**
 * Settings Page
 * 
 * User settings and preferences management.
 * Includes profile settings, notifications, security, and billing.
 * 
 * @packageDocumentation
 */

import React, { useState } from "react";
import { DashboardLayout } from "@/components/layout";
import { cn } from "@/lib/utils";
import {
  User,
  Bell,
  Shield,
  CreditCard,
  Palette,
  Globe,
  Camera,
  Save,
  Check,
  Lock,
  Mail,
  Phone,
  MapPin,
  Link as LinkIcon,
} from "lucide-react";

/**
 * Settings tab configuration
 */
const settingsTabs = [
  { id: "profile", label: "Profile", icon: User },
  { id: "notifications", label: "Notifications", icon: Bell },
  { id: "security", label: "Security", icon: Shield },
  { id: "billing", label: "Billing", icon: CreditCard },
  { id: "appearance", label: "Appearance", icon: Palette },
];

/**
 * Settings page component
 */
export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("profile");
  const [saved, setSaved] = useState(false);

  /**
   * Handle save action
   */
  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  /**
   * Render tab content based on active tab
   */
  const renderTabContent = () => {
    switch (activeTab) {
      case "profile":
        return <ProfileSettings />;
      case "notifications":
        return <NotificationSettings />;
      case "security":
        return <SecuritySettings />;
      case "billing":
        return <BillingSettings />;
      case "appearance":
        return <AppearanceSettings />;
      default:
        return null;
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-4 sm:space-y-6">
        {/* Page Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">Settings</h1>
            <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 mt-1">
              Manage your account settings and preferences
            </p>
          </div>
          <button
            onClick={handleSave}
            className="w-full sm:w-auto px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors inline-flex items-center justify-center gap-2"
          >
            {saved ? (
              <>
                <Check className="h-4 w-4 shrink-0" />
                <span className="hidden sm:inline">Saved!</span>
              </>
            ) : (
              <>
                <Save className="h-4 w-4 shrink-0" />
                <span className="hidden sm:inline">Save Changes</span>
                <span className="sm:hidden">Save</span>
              </>
            )}
          </button>
        </div>

        {/* Settings Container */}
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Tabs Sidebar */}
            <aside className="w-full md:w-64 border-b md:border-b-0 md:border-r border-gray-200 dark:border-gray-800">
              <nav className="p-3 sm:p-4 space-y-1 overflow-x-auto md:overflow-visible flex md:block">
                {settingsTabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={cn(
                        "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors whitespace-nowrap",
                        activeTab === tab.id
                          ? "bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400"
                          : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                      )}
                    >
                      <Icon className="h-5 w-5 shrink-0" />
                      <span className="font-medium text-sm">{tab.label}</span>
                    </button>
                  );
                })}
              </nav>
            </aside>

            {/* Tab Content */}
            <main className="flex-1 p-4 sm:p-6">{renderTabContent()}</main>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

/**
 * Profile Settings Component
 */
function ProfileSettings() {
  return (
    <div className="space-y-4 sm:space-y-6">
      <div>
        <h2 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">Profile Information</h2>
        <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1">
          Update your profile information and display settings
        </p>
      </div>

      {/* Profile Picture */}
      <div className="flex items-center gap-3 sm:gap-4">
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-linear-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
          <User className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
        </div>
        <div>
          <button className="px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg hover:bg-indigo-100 dark:hover:bg-indigo-900/30 transition-colors inline-flex items-center gap-2">
            <Camera className="h-4 w-4" />
            Change Photo
          </button>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            JPG, GIF or PNG. Max size 2MB.
          </p>
        </div>
      </div>

      {/* Form Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
        <div>
          <label className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            First Name
          </label>
          <input
            type="text"
            defaultValue="John"
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-300 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
          />
        </div>
        <div>
          <label className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Last Name
          </label>
          <input
            type="text"
            defaultValue="Doe"
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-300 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
          />
        </div>
        <div>
          <label className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Email
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="email"
              defaultValue="john.doe@example.com"
              className="w-full pl-11 pr-3 py-2.5 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-300"
            />
          </div>
        </div>
        <div>
          <label className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Phone
          </label>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="tel"
              defaultValue="+1 (555) 123-4567"
              className="w-full pl-11 pr-3 py-2.5 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-300"
            />
          </div>
        </div>
        <div className="md:col-span-2">
          <label className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Location
          </label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              defaultValue="San Francisco, CA"
              className="w-full pl-11 pr-3 py-2.5 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-300"
            />
          </div>
        </div>
        <div className="md:col-span-2">
          <label className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Website
          </label>
          <div className="relative">
            <LinkIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="url"
              defaultValue="https://johndoe.com"
              className="w-full pl-11 pr-3 py-2.5 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-300"
            />
          </div>
        </div>
        <div className="md:col-span-2">
          <label className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Bio
          </label>
          <textarea
            rows={4}
            defaultValue="Product designer and entrepreneur based in San Francisco."
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-300 resize-none bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
          />
        </div>
      </div>

      {/* Update Profile Button */}
      <div className="flex items-center justify-end gap-2 sm:gap-3 pt-4 sm:pt-6 border-t border-gray-200 dark:border-gray-800">
        <button className="px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
          Cancel
        </button>
        <button className="px-4 sm:px-6 py-2 text-xs sm:text-sm font-medium text-white bg-linear-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 rounded-lg transition-colors inline-flex items-center gap-2 shadow-lg shadow-indigo-500/30">
          <Save className="h-4 w-4" />
          <span className="hidden sm:inline">Update Profile</span>
          <span className="sm:hidden">Update</span>
        </button>
      </div>
    </div>
  );
}

/**
 * Notification Settings Component
 */
function NotificationSettings() {
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    sms: false,
    marketing: false,
    security: true,
    updates: true,
  });

  return (
    <div className="space-y-4 sm:space-y-6">
      <div>
        <h2 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">Notification Preferences</h2>
        <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1">
          Manage how you receive notifications
        </p>
      </div>

      <div className="space-y-3 sm:space-y-4">
        <div className="flex items-center justify-between py-3 border-b border-gray-200 dark:border-gray-800">
          <div>
            <p className="font-medium text-gray-900 dark:text-white text-xs sm:text-sm">Email Notifications</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">Receive updates via email</p>
          </div>
          <Toggle
            enabled={notifications.email}
            onChange={() =>
              setNotifications((prev) => ({ ...prev, email: !prev.email }))
            }
          />
        </div>
        <div className="flex items-center justify-between py-3 border-b border-gray-200 dark:border-gray-800">
          <div>
            <p className="font-medium text-gray-900 dark:text-white text-xs sm:text-sm">Push Notifications</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">Receive push notifications</p>
          </div>
          <Toggle
            enabled={notifications.push}
            onChange={() =>
              setNotifications((prev) => ({ ...prev, push: !prev.push }))
            }
          />
        </div>
        <div className="flex items-center justify-between py-3 border-b border-gray-200 dark:border-gray-800">
          <div>
            <p className="font-medium text-gray-900 dark:text-white text-xs sm:text-sm">SMS Notifications</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">Receive text messages</p>
          </div>
          <Toggle
            enabled={notifications.sms}
            onChange={() =>
              setNotifications((prev) => ({ ...prev, sms: !prev.sms }))
            }
          />
        </div>
        <div className="flex items-center justify-between py-3 border-b border-gray-200 dark:border-gray-800">
          <div>
            <p className="font-medium text-gray-900 dark:text-white text-xs sm:text-sm">Security Alerts</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">Get notified about security events</p>
          </div>
          <Toggle
            enabled={notifications.security}
            onChange={() =>
              setNotifications((prev) => ({ ...prev, security: !prev.security }))
            }
          />
        </div>
        <div className="flex items-center justify-between py-3 border-b border-gray-200 dark:border-gray-800">
          <div>
            <p className="font-medium text-gray-900 dark:text-white text-xs sm:text-sm">Product Updates</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">Learn about new features</p>
          </div>
          <Toggle
            enabled={notifications.updates}
            onChange={() =>
              setNotifications((prev) => ({ ...prev, updates: !prev.updates }))
            }
          />
        </div>
        <div className="flex items-center justify-between py-3">
          <div>
            <p className="font-medium text-gray-900 dark:text-white text-xs sm:text-sm">Marketing Emails</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">Receive promotional content</p>
          </div>
          <Toggle
            enabled={notifications.marketing}
            onChange={() =>
              setNotifications((prev) => ({ ...prev, marketing: !prev.marketing }))
            }
          />
        </div>
      </div>
    </div>
  );
}

/**
 * Security Settings Component
 */
function SecuritySettings() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-semibold text-gray-900">Security Settings</h2>
        <p className="text-sm text-gray-500 mt-1">
          Manage your password and security preferences
        </p>
      </div>

      {/* Change Password */}
      <div className="space-y-4">
        <h3 className="font-medium text-gray-900">Change Password</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Current Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="password"
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-300"
                placeholder="••••••••"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              New Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="password"
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-300"
                placeholder="••••••••"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Confirm New Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="password"
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-300"
                placeholder="••••••••"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Two-Factor Authentication */}
      <div className="pt-6 border-t border-gray-200">
        <h3 className="font-medium text-gray-900 mb-2">Two-Factor Authentication</h3>
        <p className="text-sm text-gray-500 mb-4">
          Add an extra layer of security to your account
        </p>
        <button className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors">
          Enable 2FA
        </button>
      </div>

      {/* Active Sessions */}
      <div className="pt-6 border-t border-gray-200">
        <h3 className="font-medium text-gray-900 mb-4">Active Sessions</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div>
              <p className="font-medium text-gray-900">Chrome on MacOS</p>
              <p className="text-sm text-gray-500">San Francisco, CA • Current session</p>
            </div>
            <span className="w-2 h-2 bg-green-500 rounded-full" />
          </div>
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div>
              <p className="font-medium text-gray-900">Safari on iPhone</p>
              <p className="text-sm text-gray-500">San Francisco, CA • 2 hours ago</p>
            </div>
            <button className="text-sm text-red-600 hover:text-red-700">Revoke</button>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Billing Settings Component
 */
function BillingSettings() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-semibold text-gray-900">Billing & Plans</h2>
        <p className="text-sm text-gray-500 mt-1">
          Manage your subscription and payment methods
        </p>
      </div>

      {/* Current Plan */}
      <div className="p-4 bg-linear-to-br from-indigo-500 to-purple-600 rounded-xl text-white">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-indigo-100">Current Plan</p>
            <h3 className="text-2xl font-bold mt-1">Pro Plan</h3>
            <p className="text-indigo-100 mt-1">$29/month • Renews on Jan 1, 2026</p>
          </div>
          <button className="px-4 py-2 text-sm font-medium bg-white/20 hover:bg-white/30 rounded-lg transition-colors">
            Upgrade Plan
          </button>
        </div>
      </div>

      {/* Payment Method */}
      <div>
        <h3 className="font-medium text-gray-900 mb-4">Payment Method</h3>
        <div className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg">
          <CreditCard className="h-10 w-10 text-gray-400" />
          <div className="flex-1">
            <p className="font-medium text-gray-900">•••• •••• •••• 4242</p>
            <p className="text-sm text-gray-500">Expires 12/2027</p>
          </div>
          <button className="text-sm text-indigo-600 hover:text-indigo-700">Edit</button>
        </div>
      </div>

      {/* Billing History */}
      <div>
        <h3 className="font-medium text-gray-900 mb-4">Billing History</h3>
        <div className="space-y-2">
          {[
            { date: "Dec 1, 2025", amount: "$29.00", status: "Paid" },
            { date: "Nov 1, 2025", amount: "$29.00", status: "Paid" },
            { date: "Oct 1, 2025", amount: "$29.00", status: "Paid" },
          ].map((invoice, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
            >
              <div>
                <p className="font-medium text-gray-900">{invoice.date}</p>
                <p className="text-sm text-gray-500">{invoice.status}</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="font-medium text-gray-900">{invoice.amount}</span>
                <button className="text-sm text-indigo-600 hover:text-indigo-700">
                  Download
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/**
 * Appearance Settings Component
 */
function AppearanceSettings() {
  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState("en");

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-semibold text-gray-900">Appearance Settings</h2>
        <p className="text-sm text-gray-500 mt-1">
          Customize how the application looks and feels
        </p>
      </div>

      {/* Theme Selection */}
      <div>
        <h3 className="font-medium text-gray-900 mb-4">Theme</h3>
        <div className="grid grid-cols-3 gap-4">
          {[
            { id: "light", label: "Light" },
            { id: "dark", label: "Dark" },
            { id: "system", label: "System" },
          ].map((option) => (
            <button
              key={option.id}
              onClick={() => setTheme(option.id)}
              className={cn(
                "p-4 border-2 rounded-xl text-center transition-colors",
                theme === option.id
                  ? "border-indigo-600 bg-indigo-50"
                  : "border-gray-200 hover:border-gray-300"
              )}
            >
              <p className="font-medium text-gray-900">{option.label}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Language Selection */}
      <div>
        <h3 className="font-medium text-gray-900 mb-4">Language</h3>
        <div className="relative">
          <Globe className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-300"
          >
            <option value="en">English</option>
            <option value="es">Español</option>
            <option value="fr">Français</option>
            <option value="de">Deutsch</option>
            <option value="zh">中文</option>
          </select>
        </div>
      </div>

      {/* Density */}
      <div>
        <h3 className="font-medium text-gray-900 mb-4">Density</h3>
        <div className="grid grid-cols-3 gap-4">
          {[
            { id: "comfortable", label: "Comfortable" },
            { id: "normal", label: "Normal" },
            { id: "compact", label: "Compact" },
          ].map((option) => (
            <button
              key={option.id}
              className={cn(
                "p-2 border-2 rounded-xl text-center transition-colors",
                "border-gray-200 hover:border-gray-300"
              )}
            >
              <p className="font-medium text-gray-900">{option.label}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

/**
 * Toggle Switch Component
 */
function Toggle({
  enabled,
  onChange,
}: {
  enabled: boolean;
  onChange: () => void;
}) {
  return (
    <button
      onClick={onChange}
      className={cn(
        "relative w-11 h-6 rounded-full transition-colors",
        enabled ? "bg-indigo-600" : "bg-gray-200"
      )}
    >
      <span
        className={cn(
          "absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform",
          enabled ? "translate-x-5" : "translate-x-0"
        )}
      />
    </button>
  );
}
