"use client";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { ArrowUpRight, Clock, CreditCard, Users, BarChart } from "lucide-react";

const benefits = [
  {
    icon: <ArrowUpRight className="h-8 w-8 text-green-600" />,
    title: "Augmentez votre chiffre d'affaires",
    description: "Boostez vos ventes avec des commandes plus rapides et des paniers moyens plus élevés.",
    stat: "+30%",
  },
  {
    icon: <Clock className="h-8 w-8 text-blue-600" />,
    title: "Gagnez du temps",
    description: "Réduisez les temps d'attente et optimisez la rotation des tables.",
    stat: "-40%",
  },
  {
    icon: <CreditCard className="h-8 w-8 text-purple-600" />,
    title: "Paiements simplifiés",
    description: "Offrez une expérience de paiement fluide et sécurisée à vos clients.",
    stat: "100% sécurisé",
  },
  {
    icon: <Users className="h-8 w-8 text-orange-600" />,
    title: "Fidélisez vos clients",
    description: "Créez des programmes de fidélité et des offres personnalisées.",
    stat: "+25% de retour",
  },
  {
    icon: <BarChart className="h-8 w-8 text-red-600" />,
    title: "Analysez vos performances",
    description: "Accédez à des rapports détaillés pour prendre des décisions éclairées.",
    stat: "Données en temps réel",
  },
];

export default function Benefits() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Les bénéfices clés pour votre restaurant
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez comment Yamo transforme votre établissement en une expérience moderne et rentable.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 hover:shadow-lg transition-shadow h-full">
                <div className="flex flex-col items-center text-center h-full">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-gray-100 mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 mb-4 flex-grow">{benefit.description}</p>
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                    {benefit.stat}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
