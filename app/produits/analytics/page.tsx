"use client";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TopBar from "@/components/TopBar";
import { Button } from "@/components/ui/button";
import { BarChart, PieChart, TrendingUp, Database, FileText, Share2, Users } from "lucide-react";

const features = [
  { icon: <BarChart className="h-6 w-6" />, title: "Tableau de bord complet", description: "Suivez vos ventes, clients et performances en temps réel." },
  { icon: <PieChart className="h-6 w-6" />, title: "Analyse des ventes", description: "Identifiez vos plats les plus populaires et vos heures d'affluence." },
  { icon: <TrendingUp className="h-6 w-6" />, title: "Prévisions intelligentes", description: "Anticipez vos besoins en stock et en personnel." },
  { icon: <Database className="h-6 w-6" />, title: "Base de données clients", description: "Stockez et analysez les habitudes de vos clients." },
  { icon: <FileText className="h-6 w-6" />, title: "Rapports exportables", description: "Exportez vos données en PDF ou CSV." },
  { icon: <Share2 className="h-6 w-6" />, title: "Partage d'insights", description: "Partagez des rapports avec votre équipe." },
];

export default function Analytics() {
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
              className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-gradient-to-br from-red-500 to-orange-500 text-white mb-6 mx-auto"
            >
              <BarChart className="h-8 w-8" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold text-gray-900 sm:text-5xl mb-6"
            >
              Analytics <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">Avancés</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto mb-12"
            >
              Accédez à des insights détaillés sur vos ventes, vos clients et vos performances
              pour prendre des décisions éclairées et optimiser votre restaurant.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
            <a href="/demo" className="cursor-pointer rounded-full font-medium bg-red-500 text-white px-4 py-2 hover:bg-red-600 transition">
                Planifier une démo
            </a>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Fonctionnalités puissantes</h2>
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
                    <div className="flex items-center justify-center h-12 w-12 rounded-xl text-orange-600 mb-4">
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

        {/* Use Cases Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Cas d'usage</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {[
                {
                  title: "Optimisation des menus",
                  description: "Identifiez vos plats les plus rentables et ajustez votre offre en conséquence.",
                  icon: <PieChart className="h-8 w-8" />,
                },
                {
                  title: "Gestion des stocks",
                  description: "Anticipez vos besoins en ingrédients grâce aux prévisions de ventes.",
                  icon: <Database className="h-8 w-8" />,
                },
                {
                  title: "Fidélisation client",
                  description: "Ciblez vos clients réguliers avec des offres personnalisées.",
                  icon: <Users className="h-8 w-8" />,
                },
                {
                  title: "Performance du personnel",
                  description: "Évaluez l'efficacité de votre équipe et optimisez les plannings.",
                  icon: <TrendingUp className="h-8 w-8" />,
                },
              ].map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="p-6 rounded-xl bg-gray-50 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-red-100 text-orange-600">
                        {useCase.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-1">{useCase.title}</h3>
                        <p className="text-gray-600">{useCase.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-red-500 to-orange-500 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Prenez le contrôle de vos données</h2>
            <p className="text-xl mb-8">Transformez vos données en décisions stratégiques pour votre restaurant.</p>
            <a href="/demo" className="cursor-pointer rounded-full font-medium bg-white text-gray-900 px-4 py-2 hover:bg-primary-700 transition">
                Planifier une démo
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
