"use client";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, X, Star, Zap } from "lucide-react";
import StartFreeTrialModal from "@/components/modals/StartFreeTrialModal";
import ContactSalesModal from "@/components/modals/ContactSalesModal";

// Plans avec fonctionnalités détaillées basées sur votre backend
const PLANS_COMPARISON = [
  {
    id: "free",
    name: "Gratuit",
    description: "Pour tester la plateforme",
    price: "Gratuit",
    period: "",
    isPopular: false,
    color: "green",
    limits: {
      maxRestaurants: "1",
      maxStaffAccounts: "3",
      maxMenuItems: "50",
      maxMonthlyOrders: "100",
      maxTables: "10"
    }
  },
  {
    id: "starter", 
    name: "Starter",
    description: "Pour restaurants en croissance",
    price: "15 000",
    period: "FCFA/mois",
    isPopular: true,
    color: "orange",
    limits: {
      maxRestaurants: "1",
      maxStaffAccounts: "10",
      maxMenuItems: "200",
      maxMonthlyOrders: "500",
      maxTables: "25"
    }
  },
  {
    id: "professional",
    name: "Professional",
    description: "Pour chaînes et multi-sites",
    price: "35 000",
    period: "FCFA/mois",
    isPopular: false,
    color: "blue",
    limits: {
      maxRestaurants: "3",
      maxStaffAccounts: "50",
      maxMenuItems: "1000",
      maxMonthlyOrders: "2000",
      maxTables: "100"
    }
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "Solution sur mesure",
    price: "Sur devis",
    period: "",
    isPopular: false,
    color: "purple",
    limits: {
      maxRestaurants: "Illimité",
      maxStaffAccounts: "Illimité",
      maxMenuItems: "Illimité",
      maxMonthlyOrders: "Illimité",
      maxTables: "Illimité"
    }
  }
];

// Fonctionnalités organisées par catégories (basées sur votre entity)
const FEATURES_CATEGORIES = [
  {
    name: "Gestion de Base",
    features: [
      {
        key: "digitalMenu",
        name: "Menu digital avec QR codes",
        free: true, starter: true, professional: true, enterprise: true
      },
      {
        key: "staffManagement", 
        name: "App Staff PWA",
        free: true, starter: true, professional: true, enterprise: true
      },
      {
        key: "ownerDashboard",
        name: "Dashboard propriétaire",
        free: true, starter: true, professional: true, enterprise: true
      },
      {
        key: "multiLocation",
        name: "Gestion multi-restaurants",
        free: false, starter: false, professional: true, enterprise: true
      }
    ]
  },
  {
    name: "Paiements",
    features: [
      {
        key: "mobileMoneyIntegration",
        name: "Mobile Money (Orange, MTN, Wave)",
        free: false, starter: true, professional: true, enterprise: true
      },
      {
        key: "CardIntegration",
        name: "Cartes bancaires (Visa, MasterCard)",
        free: false, starter: true, professional: true, enterprise: true
      },
      {
        key: "splitPayments",
        name: "Partage de factures",
        free: false, starter: true, professional: true, enterprise: true
      },
      {
        key: "cashPayments",
        name: "Paiements cash",
        free: true, starter: true, professional: true, enterprise: true
      }
    ]
  },
  {
    name: "Analytics & Rapports",
    features: [
      {
        key: "basicAnalytics",
        name: "Analytics de base",
        free: true, starter: true, professional: true, enterprise: true
      },
      {
        key: "advancedAnalytics",
        name: "Analytics avancés IA",
        free: false, starter: false, professional: true, enterprise: true
      },
      {
        key: "customReports",
        name: "Rapports personnalisés",
        free: false, starter: false, professional: true, enterprise: true
      },
      {
        key: "exportData",
        name: "Export données (CSV, Excel)",
        free: false, starter: true, professional: true, enterprise: true
      }
    ]
  },
  {
    name: "Intégrations & API",
    features: [
      {
        key: "whatsappIntegration",
        name: "WhatsApp Business",
        free: false, starter: true, professional: true, enterprise: true
      },
      {
        key: "apiAccess",
        name: "Accès API REST",
        free: false, starter: false, professional: true, enterprise: true
      },
      {
        key: "webhooks",
        name: "Webhooks personnalisés",
        free: false, starter: false, professional: true, enterprise: true
      },
      {
        key: "customDomain",
        name: "Domaine personnalisé",
        free: false, starter: false, professional: true, enterprise: true
      }
    ]
  },
  {
    name: "Support & Services",
    features: [
      {
        key: "standardSupport",
        name: "Support email",
        free: true, starter: true, professional: true, enterprise: true
      },
      {
        key: "WhatsappSupport",
        name: "Support WhatsApp",
        free: true, starter: true, professional: true, enterprise: true
      },
      {
        key: "phoneSupport",
        name: "Support téléphone",
        free: false, starter: true, professional: true, enterprise: true
      },
      {
        key: "prioritySupport",
        name: "Support prioritaire",
        free: false, starter: false, professional: true, enterprise: true
      },
      {
        key: "dedicatedSupport",
        name: "Support dédié 24/7",
        free: false, starter: false, professional: false, enterprise: true
      },
      {
        key: "onboardingSupport",
        name: "Onboarding personnalisé",
        free: true, starter: true, professional: true, enterprise: true
      }
    ]
  }
];

export default function PlansComparison() {
  const getFeatureIcon = (planId: string, hasFeature: boolean) => {
    if (hasFeature) {
      const colorMap = {
        free: "text-green-600",
        starter: "text-orange-500", 
        professional: "text-blue-600",
        enterprise: "text-purple-600"
      };
      return <Check className={`w-5 h-5 ${colorMap[planId as keyof typeof colorMap]}`} />;
    }
    return <X className="w-5 h-5 text-gray-300" />;
  };

  const getBadgeColor = (color: string) => {
    const colorMap = {
      green: "bg-green-100 text-green-800",
      orange: "bg-orange-100 text-orange-800", 
      blue: "bg-blue-100 text-blue-800",
      purple: "bg-purple-100 text-purple-800"
    };
    return colorMap[color as keyof typeof colorMap];
  };

  return (
    <section id="comparaison" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="bg-yellow-500 text-white px-6 py-2 mb-6">
            <Zap className="w-4 h-4 mr-2" />
            Comparaison détaillée
          </Badge>

          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Choisissez le <span className="text-orange-500">plan parfait</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Toutes les fonctionnalités détaillées pour vous aider à faire le bon choix.
          </p>
        </motion.div>

        {/* Plans en cartes mobiles */}
        <div className="lg:hidden space-y-8 mb-12">
          {PLANS_COMPARISON.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className={`p-6 ${plan.isPopular ? 'border-2 border-orange-300 shadow-xl' : 'border shadow-lg'}`}>
                {plan.isPopular && (
                  <div className="text-center mb-4">
                    <Badge className="bg-orange-500 text-white px-4 py-2">
                      <Star className="w-4 h-4 mr-1" />
                      Plus populaire
                    </Badge>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="text-3xl font-bold text-gray-900">
                    {plan.price}
                    {plan.period && <span className="text-lg text-gray-500 ml-1">{plan.period}</span>}
                  </div>
                </div>

                {/* Limites */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Limites incluses</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Restaurants</span>
                      <span className="font-medium">{plan.limits.maxRestaurants}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Comptes staff</span>
                      <span className="font-medium">{plan.limits.maxStaffAccounts}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Articles menu</span>
                      <span className="font-medium">{plan.limits.maxMenuItems}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Commandes/mois</span>
                      <span className="font-medium">{plan.limits.maxMonthlyOrders}</span>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  {plan.id === "free" ? (
                    <StartFreeTrialModal />
                  ) : plan.id === "enterprise" ? (
                    <ContactSalesModal />
                  ) : (
                    <StartFreeTrialModal />
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Table de comparaison desktop */}
        <div className="hidden lg:block">
          <Card className="overflow-hidden">
            <div>
              <table className="w-full">
                {/* Header des plans */}
                <thead>
                  <tr>
                    <th className="text-left p-6 font-semibold text-gray-900 w-1/4">
                      Fonctionnalités
                    </th>
                    {PLANS_COMPARISON.map((plan) => (
                      <th key={plan.id} className="text-center p-10 min-w-[200px] relative">
                        {plan.isPopular && (
                          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                            <Badge className="bg-orange-500 text-white px-3 py-1 text-xs">
                              <Star className="w-3 h-3 mr-1" />
                              Populaire
                            </Badge>
                          </div>
                        )}
                        <div className="mt-2">
                          <Badge className={`${getBadgeColor(plan.color)} mb-2`}>
                            {plan.name}
                          </Badge>
                          <div className="text-2xl font-bold text-gray-900">
                            {plan.price}
                          </div>
                          {plan.period && (
                            <div className="text-sm text-gray-500">{plan.period}</div>
                          )}
                          <p className="text-sm text-gray-600 mt-2">{plan.description}</p>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">
                  {/* Limites */}
                  <tr className="bg-gray-50">
                    <td colSpan={5} className="p-4 font-semibold text-gray-900 text-center">
                      Limites incluses
                    </td>
                  </tr>
                  {Object.keys(PLANS_COMPARISON[0].limits).map((limitKey) => (
                    <tr key={limitKey} className="hover:bg-gray-50">
                      <td className="p-4 font-medium text-gray-900">
                        {limitKey === 'maxRestaurants' && 'Restaurants'}
                        {limitKey === 'maxStaffAccounts' && 'Comptes staff'} 
                        {limitKey === 'maxMenuItems' && 'Articles menu'}
                        {limitKey === 'maxMonthlyOrders' && 'Commandes par mois'}
                        {limitKey === 'maxTables' && 'Tables'}
                      </td>
                      {PLANS_COMPARISON.map((plan) => (
                        <td key={`${plan.id}-${limitKey}`} className="text-center p-4">
                          <span className="font-semibold text-gray-700">
                            {plan.limits[limitKey as keyof typeof plan.limits]}
                          </span>
                        </td>
                      ))}
                    </tr>
                  ))}

                  {/* Fonctionnalités par catégorie */}
                  {FEATURES_CATEGORIES.map((category) => (
                    <>
                      <tr key={category.name} className="bg-gray-50">
                        <td colSpan={5} className="p-4 font-semibold text-gray-900">
                          {category.name}
                        </td>
                      </tr>
                      {category.features.map((feature) => (
                        <tr key={feature.key} className="hover:bg-gray-50">
                          <td className="p-4 font-medium text-gray-900">
                            {feature.name}
                          </td>
                          <td className="text-center p-4">
                            {getFeatureIcon("free", feature.free)}
                          </td>
                          <td className="text-center p-4">
                            {getFeatureIcon("starter", feature.starter)}
                          </td>
                          <td className="text-center p-4">
                            {getFeatureIcon("professional", feature.professional)}
                          </td>
                          <td className="text-center p-4">
                            {getFeatureIcon("enterprise", feature.enterprise)}
                          </td>
                        </tr>
                      ))}
                    </>
                  ))}

                  {/* Boutons CTA */}
                  <tr>
                    <td className="p-4 font-semibold text-gray-900">Choisir ce plan</td>
                    {PLANS_COMPARISON.map((plan) => (
                      <td key={`cta-${plan.id}`} className="text-center p-4">
                        {plan.id === "free" ? (
                          <StartFreeTrialModal />
                        ) : plan.id === "enterprise" ? (
                          <ContactSalesModal />
                        ) : (
                          <StartFreeTrialModal />
                        )}
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-4">
            <strong>Garantie 30 jours satisfait ou remboursé</strong> • Sans engagement • Migration gratuite
          </p>
          <p className="text-sm text-gray-500">
            Tous les prix en Franc CFA (XOF). Support technique inclus dans tous les plans.
          </p>
        </motion.div>
      </div>
    </section>
  );
}