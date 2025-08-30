"use client";
import { motion } from "framer-motion";
import { ChefHat, Smartphone, CreditCard } from "lucide-react";
import FeatureCard from "@/components/FeatureCard";

export default function Features() {
  const features = [
    {
      icon: <ChefHat className="h-8 w-8" />,
      title: "Menu digital intelligent",
      description: "QR codes personnalisés, photos HD, mises à jour en temps réel.",
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Commandes autonomes",
      description: "Vos clients commandent et paient depuis leur smartphone.",
    },
    {
      icon: <CreditCard className="h-8 w-8" />,
      title: "Paiements unifiés",
      description: "Cartes, portefeuilles digitaux, cash – tout centralisé.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Pourquoi les restaurants adorent Yamo
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Une solution tout-en-un pour digitaliser votre restaurant.
          </p>
        </motion.div>
        <div className="grid lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <FeatureCard {...feature} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
