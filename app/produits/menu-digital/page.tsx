"use client";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TopBar from "@/components/TopBar";
import { Button } from "@/components/ui/button";
import { Check, ChefHat, QrCode, Image as ImageIcon, AlertCircle, RefreshCw, Globe } from "lucide-react";

const features = [
  { icon: <QrCode className="h-6 w-6" />, title: "QR Codes personnalisés", description: "Un code unique par table avec suivi des consultations." },
  { icon: <ImageIcon className="h-6 w-6" />, title: "Photos haute définition", description: "Images optimisées avec zoom et galerie intégrée." },
  { icon: <AlertCircle className="h-6 w-6" />, title: "Gestion des allergènes", description: "Filtres automatiques et alertes pour sécuriser vos clients." },
  { icon: <RefreshCw className="h-6 w-6" />, title: "Mises à jour instantanées", description: "Modifiez prix et disponibilités en temps réel." },
  { icon: <Globe className="h-6 w-6" />, title: "Support multilingue", description: "Traduction automatique selon la langue du client." },
];

export default function MenuDigital() {
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
              className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 text-white mb-6 mx-auto"
            >
              <ChefHat className="h-8 w-8" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold text-gray-900 sm:text-5xl mb-6"
            >
              Menu Digital <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Intelligent</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto mb-12"
            >
              Remplacez vos menus papier par une solution digitale moderne qui s'adapte en temps réel à votre offre et captive vos clients.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white rounded-full shadow-lg">
                Essayer gratuitement
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Fonctionnalités clés</h2>
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
                    <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-orange-100 text-orange-600 mb-4">
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
            <h2 className="text-3xl font-bold text-gray-900 mb-12">Résultats concrets</h2>
            <div className="grid lg:grid-cols-3 gap-8">
              {[
                { value: "65%", label: "Réduction du temps de consultation" },
                { value: "28%", label: "Augmentation du panier moyen" },
                { value: "2min", label: "Temps de mise en place" },
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
        <section className="py-20 bg-gradient-to-r from-orange-500 to-red-500 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Prêt à digitaliser votre menu ?</h2>
            <p className="text-xl mb-8">Essayez gratuitement pendant 14 jours, sans engagement.</p>
            <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 font-medium px-8 py-3 rounded-full">
              Commencer l'essai gratuit
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
