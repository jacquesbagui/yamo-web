"use client";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  TrendingUp,
  Clock,
  CreditCard,
  Users,
  BarChart3,
  Shield
} from "lucide-react";

const BRAND = {
  orange: "#F0AB3C",
  red: "#EB622B",
  navy: "#121827"
};

const MAIN_BENEFITS = [
  {
    icon: <TrendingUp className="h-6 w-6" />,
    title: "Augmentez votre chiffre d'affaires",
    description:
      "Boostez vos ventes avec des commandes plus rapides et un panier moyen plus élevé.",
    badge: "Rentabilité"
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: "Réduisez les temps d'attente",
    description:
      "Optimisez votre service avec la commande autonome et accélérez la rotation.",
    badge: "Efficacité"
  },
  {
    icon: <CreditCard className="h-6 w-6" />,
    title: "Paiements Mobile Money",
    description:
      "Solution adaptée au marché africain avec Orange Money, MTN MoMo et Wave.",
    badge: "Afrique"
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Fidélisez vos clients",
    description:
      "Programme de fidélité avec points et recommandations personnalisées.",
    badge: "Fidélisation"
  },
  {
    icon: <BarChart3 className="h-6 w-6" />,
    title: "Analytics en temps réel",
    description:
      "Dashboard complet avec métriques de vente et insights clients.",
    badge: "Analytics"
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Sécurité maximale",
    description:
      "Données sécurisées avec encryption et conformité aux standards bancaires.",
    badge: "Sécurité"
  }
];

const STATS = [
  { value: "500+", label: "Restaurants" },
  { value: "50K+", label: "Commandes" },
  { value: "8", label: "Pays" },
  { value: "99.9%", label: "Uptime" }
];

export default function RealBenefitsSection() {
  return (
    <section id="bénéfices" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <Badge
            className="mb-4 px-4 py-1 rounded-full text-white text-sm font-medium"
            style={{ backgroundColor: BRAND.red }}
          >
            Solution Complète
          </Badge>

          <h2
            className="text-4xl sm:text-5xl font-bold mb-4"
            style={{ color: BRAND.navy }}
          >
            Transformez votre{" "}
            <span style={{ color: BRAND.red }}>restaurant</span>
          </h2>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Une solution SaaS élégante et performante, adaptée aux restaurateurs
            africains.
          </p>
        </motion.div>

        {/* Benefits */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {MAIN_BENEFITS.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
            >
              <Card className="p-6 h-full border border-gray-200 bg-white hover:shadow-lg transition">
                <div className="flex items-start gap-4 mb-4">
                  {/* Icon cercle accent */}
                  <div
                    className="flex items-center justify-center rounded-full p-3 text-white shadow"
                    style={{ backgroundColor: BRAND.navy }}
                  >
                    {b.icon}
                  </div>
                  <div className="flex-1">
                    <h3
                      className="text-lg font-semibold mb-1"
                      style={{ color: BRAND.navy }}
                    >
                      {b.title}
                    </h3>
                    <p className="text-sm text-gray-600">{b.description}</p>
                  </div>
                </div>

              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <Card
            className="p-8 text-center"
            style={{ backgroundColor: BRAND.navy, color: "white" }}
          >
            <h3 className="text-xl font-semibold mb-8">
              La confiance des restaurateurs
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {STATS.map((s, idx) => (
                <div key={idx}>
                  <div
                    className="text-3xl font-bold mb-1"
                    style={{ color: BRAND.red }}
                  >
                    {s.value}
                  </div>
                  <div className="text-gray-200 text-sm">{s.label}</div>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
