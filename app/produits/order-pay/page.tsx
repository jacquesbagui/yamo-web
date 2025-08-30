"use client";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TopBar from "@/components/TopBar";
import { Button } from "@/components/ui/button";
import { Smartphone, ShoppingCart, CreditCard, Bell, Clock, Users } from "lucide-react";

const features = [
  { icon: <ShoppingCart className="h-6 w-6" />, title: "Commande en 3 clics", description: "Scan du QR code → Commande → Paiement." },
  { icon: <CreditCard className="h-6 w-6" />, title: "Paiements sécurisés", description: "Cartes, PayPal, Apple Pay, et plus." },
  { icon: <Bell className="h-6 w-6" />, title: "Notifications en temps réel", description: "Vos clients sont informés à chaque étape." },
  { icon: <Clock className="h-6 w-6" />, title: "Rotation des tables optimisée", description: "Réduisez les temps d'attente de 50%." },
  { icon: <Users className="h-6 w-6" />, title: "Split d'addition", description: "Division facile entre convives." },
];

export default function OrderPay() {
  return (
    <>
      <TopBar />
      <Header mobileMenuOpen={false} setMobileMenuOpen={() => {}} />
      <main className="bg-gray-50">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 text-white mb-6 mx-auto"
            >
              <Smartphone className="h-8 w-8" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold text-gray-900 sm:text-5xl mb-6"
            >
              Order & Pay <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Autonome</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto mb-12"
            >
              Permettez à vos clients de commander et payer directement depuis leur smartphone,
              réduisant les files d'attente et optimisant votre service.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg">
                Tester une commande
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Comment ça marche ?</h2>
            <div className="grid lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="p-6 rounded-xl hover:shadow-lg transition-shadow bg-white">
                    <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-blue-100 text-blue-600 mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">Impact mesurable</h2>
            <div className="grid lg:grid-cols-3 gap-8">
              {[
                { value: "52%", label: "Réduction du temps de service" },
                { value: "4.8/5", label: "Satisfaction client" },
                { value: "+31%", label: "Rotation des tables" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="p-6 rounded-xl bg-gray-50">
                    <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                    <p className="text-gray-600">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-500 to-purple-500 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Optimisez votre service dès aujourd'hui</h2>
            <p className="text-xl mb-8">Découvrez comment Order & Pay peut transformer votre restaurant.</p>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-medium px-8 py-3 rounded-full">
              Planifier une démo
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
