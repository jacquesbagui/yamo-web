"use client";
import { motion } from "framer-motion";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import PricingCard from "@/components/PricingCard";
import ContactSalesModal from "@/components/modals/ContactSalesModal";

export default function Pricing({
  yearly,
  setYearly,
}: {
  yearly: boolean;
  setYearly: (value: boolean) => void;
}) {
  const pricingPlans = [
    {
      name: "Starter",
      price: yearly ? "20€" : "25€",
      period: yearly ? "/mois (facturé annuellement)" : "/mois",
      features: ["Menu digital", "QR codes", "Support email"],
    },
    {
      name: "Business",
      price: yearly ? "69€" : "79€",
      period: yearly ? "/mois (facturé annuellement)" : "/mois",
      features: ["Tout du Starter", "Commandes autonomes", "Paiements intégrés"],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Sur mesure",
      period: "",
      features: ["Tout du Business", "API personnalisée", "Support 24/7"],
      modal: <ContactSalesModal />,
    },
  ];

  return (
    <section id="tarifs" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Des tarifs adaptés à tous
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Sans engagement, résiliable à tout moment.
          </p>
        </motion.div>
        <div className="flex justify-center mb-8">
          <div className="flex items-center gap-4 bg-gray-100 p-2 rounded-full">
            <span className={!yearly ? "font-medium" : "text-gray-500"}>Mensuel</span>
            <Switch checked={yearly} onCheckedChange={setYearly} />
            <span className={yearly ? "font-medium" : "text-gray-500"}>
              Annuel <Badge className="ml-1 bg-green-100 text-green-800">-20%</Badge>
            </span>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <PricingCard {...plan} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
