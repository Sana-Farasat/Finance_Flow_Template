"use client";

/**
 * Cards Page
 * 
 * Manage credit/debit cards and payment methods.
 * Users can add, remove, and set default cards.
 * 
 * @packageDocumentation
 */

import React from "react";
import { DashboardLayout } from "@/components/layout";
import { cn } from "@/lib/utils";
import { CreditCard, Plus, Trash2, Star, Shield, Globe, Wifi } from "lucide-react";

/**
 * Card data interface
 */
interface CardData {
  id: string;
  cardNumber: string;
  cardHolder: string;
  expiryDate: string;
  cardType: "visa" | "mastercard" | "amex";
  isDefault: boolean;
  color: string;
}

/**
 * Mock cards data
 */
const cardsData: CardData[] = [
  {
    id: "1",
    cardNumber: "•••• •••• •••• 4242",
    cardHolder: "John Doe",
    expiryDate: "12/27",
    cardType: "visa",
    isDefault: true,
    color: "from-indigo-600 to-purple-600",
  },
  {
    id: "2",
    cardNumber: "•••• •••• •••• 8888",
    cardHolder: "John Doe",
    expiryDate: "08/26",
    cardType: "mastercard",
    isDefault: false,
    color: "from-emerald-600 to-teal-600",
  },
  {
    id: "3",
    cardNumber: "•••• •••• •••• 1234",
    cardHolder: "Jane Doe",
    expiryDate: "03/28",
    cardType: "amex",
    isDefault: false,
    color: "from-orange-600 to-pink-600",
  },
];

/**
 * Cards page component
 */
export default function CardsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Cards</h1>
            <p className="text-gray-500 dark:text-gray-400 mt-1">
              Manage your payment methods
            </p>
          </div>
          <button className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors inline-flex items-center gap-2">
            <Plus className="h-4 w-4" />
            Add New Card
          </button>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Add New Card Placeholder */}
          <button className="aspect-[1.586] rounded-2xl border-2 border-dashed border-gray-300 dark:border-gray-600 flex flex-col items-center justify-center gap-3 hover:border-indigo-500 dark:hover:border-indigo-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
            <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
              <Plus className="h-6 w-6 text-gray-400" />
            </div>
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Add New Card
            </span>
          </button>

          {/* Card Components */}
          {cardsData.map((card) => (
            <CardComponent key={card.id} card={card} />
          ))}
        </div>

        {/* Card Settings */}
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Card Settings
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between py-3 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-3">
                <Shield className="h-5 w-5 text-gray-400" />
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">
                    Contactless Payments
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Enable tap-to-pay functionality
                  </p>
                </div>
              </div>
              <ToggleSwitch defaultChecked />
            </div>
            <div className="flex items-center justify-between py-3 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-3">
                <Globe className="h-5 w-5 text-gray-400" />
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">
                    International Transactions
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Allow purchases from foreign merchants
                  </p>
                </div>
              </div>
              <ToggleSwitch />
            </div>
            <div className="flex items-center justify-between py-3">
              <div className="flex items-center gap-3">
                <Wifi className="h-5 w-5 text-gray-400" />
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">
                    Online Payments
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Enable e-commerce transactions
                  </p>
                </div>
              </div>
              <ToggleSwitch defaultChecked />
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

/**
 * Credit Card Component
 */
function CardComponent({ card }: { card: CardData }) {
  const getCardLogo = (type: string) => {
    switch (type) {
      case "visa":
        return "VISA";
      case "mastercard":
        return "Mastercard";
      case "amex":
        return "AMEX";
    }
  };

  return (
    <div
      className={cn(
        "relative aspect-[1.586] rounded-2xl p-6 text-white",
        "bg-linear-to-br",
        card.color,
        "shadow-lg hover:shadow-xl transition-shadow"
      )}
    >
      {/* Card Content */}
      <div className="relative h-full flex flex-col justify-between">
        {/* Top Row */}
        <div className="flex items-start justify-between">
          <CreditCard className="h-8 w-8 opacity-80" />
          <span className="text-xs font-medium opacity-80">
            {getCardLogo(card.cardType)}
          </span>
        </div>

        {/* Card Number */}
        <div className="text-center">
          <p className="text-lg font-mono tracking-wider">{card.cardNumber}</p>
        </div>

        {/* Bottom Row */}
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs opacity-80 mb-1">Card Holder</p>
            <p className="font-medium">{card.cardHolder}</p>
          </div>
          <div>
            <p className="text-xs opacity-80 mb-1">Expires</p>
            <p className="font-medium">{card.expiryDate}</p>
          </div>
        </div>
      </div>

      {/* Default Badge */}
      {card.isDefault && (
        <div className="absolute top-4 right-4">
          <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
        </div>
      )}

      {/* Card Actions */}
      <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 hover:opacity-100 transition-opacity">
        <button className="p-2 bg-white/20 hover:bg-white/30 rounded-lg backdrop-blur-sm transition-colors">
          <Star className="h-4 w-4 text-white" />
        </button>
        <button className="p-2 bg-white/20 hover:bg-white/30 rounded-lg backdrop-blur-sm transition-colors">
          <Trash2 className="h-4 w-4 text-white" />
        </button>
      </div>
    </div>
  );
}

/**
 * Toggle Switch Component
 */
function ToggleSwitch({ defaultChecked = false }: { defaultChecked?: boolean }) {
  const [enabled, setEnabled] = React.useState(defaultChecked);

  return (
    <button
      onClick={() => setEnabled(!enabled)}
      className={cn(
        "relative w-11 h-6 rounded-full transition-colors",
        enabled ? "bg-indigo-600" : "bg-gray-200 dark:bg-gray-700"
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
