"use client";
import { motion } from "framer-motion";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Check, Star } from "lucide-react";
import ContactSalesModal from "@/components/modals/ContactSalesModal";
import StartFreeTrialModal from "@/components/modals/StartFreeTrialModal";

// Plans simplifiés avec charte de couleurs
const PRICING_PLANS = [
  {
    id: "free",
    name: "Gratuit",
    description: "Pour tester la plateforme",
    monthlyPrice: 0,
    yearlyPrice: 0,
    isPopular: false,
    features: [
      "1 restaurant",
      "3 comptes staff",
      "50 articles menu",
      "100 commandes/mois",
      "Menu digital + QR codes",
      "Support email"
    ]
  },
  {
    id: "starter", 
    name: "Starter",
    description: "Pour restaurants en croissance",
    monthlyPrice: 15000,
    yearlyPrice: 150000,
    isPopular: true,
    features: [
      "1 restaurant",
      "10 comptes staff",
      "200 articles menu", 
      "500 commandes/mois",
      "Tout Gratuit +",
      "Mobile Money (Orange, MTN, Wave)",
      "WhatsApp intégration",
      "Support téléphone"
    ]
  },
  {
    id: "professional",
    name: "Professional",
    description: "Pour chaînes et multi-sites",
    monthlyPrice: 35000,
    yearlyPrice: 350000,
    isPopular: false,
    features: [
      "3 restaurants",
      "50 comptes staff",
      "1000 articles menu",
      "2000 commandes/mois",
      "Tout Starter +",
      "Analytics avancés IA",
      "API et Webhooks",
      "Support prioritaire"
    ]
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "Solution sur mesure",
    monthlyPrice: 75000,
    yearlyPrice: 750000,
    isPopular: false,
    isCustom: true,
    features: [
      "Restaurants illimités",
      "Staff illimité",
      "Commandes illimitées",
      "Tout Professional +",
      "White-labeling",
      "SLA 99.9%",
      "Support dédié 24/7",
      "Account Manager"
    ]
  }
];

export default function Pricing({
  yearly,
  setYearly,
}: {
  yearly: boolean;
  setYearly: (value: boolean) => void;
}) {
  const formatPrice = (plan: any) => {
    if (plan.isCustom) return "Sur devis";
    if (plan.monthlyPrice === 0) return "Gratuit";
    
    const price = yearly ? plan.yearlyPrice : plan.monthlyPrice;
    return `${price.toLocaleString()} FCFA`;
  };

  const getPeriod = (plan: any) => {
    if (plan.isCustom || plan.monthlyPrice === 0) return "";
    return yearly ? "/an" : "/mois";
  };

  const getSavings = (plan: any) => {
    if (!yearly || plan.monthlyPrice === 0) return null;
    const monthlyCost = plan.monthlyPrice * 12;
    const savings = monthlyCost - plan.yearlyPrice;
    return Math.round((savings / monthlyCost) * 100);
  };

  return (
    <section id="tarifs" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-6 bg-orange-500 text-white px-6 py-2">
            Tarifs Transparents
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Des <span className="text-orange-500">tarifs adaptés</span> à tous
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Solutions pensées pour les restaurateurs africains. Sans engagement, résiliable à tout moment.
          </p>
        </motion.div>

        {/* Toggle */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center gap-4 bg-white p-3 rounded-2xl shadow-sm border">
            <span className={`text-sm font-medium ${!yearly ? "text-gray-900" : "text-gray-500"}`}>
              Mensuel
            </span>
            <Switch checked={yearly} onCheckedChange={setYearly} />
            <span className={`text-sm font-medium ${yearly ? "text-gray-900" : "text-gray-500"}`}>
              Annuel
              <Badge className="ml-2 bg-green-100 text-green-800 text-xs">
                -17%
              </Badge>
            </span>
          </div>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-4 gap-6">
          {PRICING_PLANS.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className={`p-6 h-full relative ${
                plan.isPopular 
                  ? 'border-2 border-orange-300 shadow-xl scale-105' 
                  : 'border shadow-lg'
              } hover:shadow-xl transition-all`}>
                
                {/* Badge populaire */}
                {plan.isPopular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-orange-500 text-white px-4 py-1.5">
                      <Star className="w-4 h-4 mr-1" />
                      Plus populaire
                    </Badge>
                  </div>
                )}

                {/* Header */}
                <div className="text-center mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
                  
                  <div className="mb-4">
                    <div className="text-3xl font-bold text-gray-900">
                      {formatPrice(plan)}
                    </div>
                    <div className="text-gray-500 text-sm">
                      {getPeriod(plan)}
                      {getSavings(plan) && (
                        <span className="block text-green-600 font-medium mt-1">
                          Économisez {getSavings(plan)}%
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-4 h-4 rounded-full bg-orange-500 flex items-center justify-center">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-auto">
                  {plan.id === "free" ? (
                    <StartFreeTrialModal />
                  ) : plan.isCustom ? (
                    <ContactSalesModal />
                  ) : (
                    <StartFreeTrialModal />
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-4">
            <strong>Garantie 30 jours</strong> • Sans engagement • Support inclus
          </p>
          <p className="text-sm text-gray-500">
            Prix en Franc CFA (XOF). TVA non applicable micro-entreprises.
          </p>
        </motion.div>
      </div>
    </section>
  );
}