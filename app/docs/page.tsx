"use client";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TopBar from "@/components/TopBar";
import { Button } from "@/components/ui/button";
import { BookOpen, Search, FileText, Video, Code, Download } from "lucide-react";

const docCategories = [
  {
    icon: <FileText className="h-6 w-6" />,
    title: "Guides de démarrage",
    description: "Configurer votre compte et vos premiers outils.",
    docs: ["Création de compte", "Configuration initiale", "Premier menu digital"],
  },
  {
    icon: <Video className="h-6 w-6" />,
    title: "Tutoriels vidéo",
    description: "Apprenez en regardant nos vidéos détaillées.",
    docs: ["Présentation générale", "Gestion des commandes", "Analyse des ventes"],
  },
  {
    icon: <Code className="h-6 w-6" />,
    title: "API Développeur",
    description: "Intégrez Yamo à vos systèmes existants.",
    docs: ["Introduction à l'API", "Authentification", "Endpoints principaux"],
  },
  {
    icon: <Download className="h-6 w-6" />,
    title: "Ressources",
    description: "Téléchargez nos modèles et outils.",
    docs: ["Modèle de menu", "Guide des allergènes", "Checklist d'onboarding"],
  },
];

export default function Documentation() {
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
              <BookOpen className="h-8 w-8" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold text-gray-900 sm:text-5xl mb-6"
            >
              Documentation <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Yamo</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
            >
              Tout ce dont vous avez besoin pour configurer et utiliser Yamo comme un pro.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="max-w-md mx-auto"
            >
              <div className="relative">
                <input
                  type="text"
                  placeholder="Rechercher dans la documentation..."
                  className="w-full px-4 py-3 rounded-full border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <Search className="h-5 w-5" />
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Par où commencer ?</h2>
            <div className="grid lg:grid-cols-4 gap-8">
              {docCategories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="p-6 rounded-xl bg-white hover:shadow-lg transition-shadow h-full border border-gray-100">
                    <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-blue-100 text-blue-600 mb-4">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{category.title}</h3>
                    <p className="text-gray-600 mb-4">{category.description}</p>
                    <ul className="space-y-2">
                      {category.docs.map((doc, i) => (
                        <li key={i} className="text-sm text-gray-500 hover:text-blue-600 transition-colors">
                          <a href="#">{doc}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Guides Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">Guides populaires</h2>
            <div className="space-y-4">
              {[
                { title: "Configuration initiale de votre compte", category: "Démarrage", views: "12.5k" },
                { title: "Création et gestion de votre menu digital", category: "Menu", views: "9.8k" },
                { title: "Intégration des paiements", category: "Paiements", views: "8.2k" },
                { title: "Analyse des ventes et rapports", category: "Analytics", views: "7.6k" },
                { title: "Programme de fidélité", category: "Marketing", views: "6.4k" },
              ].map((guide, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{guide.title}</h3>
                        <p className="text-sm text-gray-500">{guide.category}</p>
                      </div>
                      <span className="text-sm text-gray-500">{guide.views} vues</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-500 to-purple-500 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Besoin d'aide supplémentaire ?</h2>
            <p className="text-xl mb-8">Notre équipe est disponible pour vous accompagner.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-medium px-8 py-3 rounded-full">
                Contacter le support
              </Button>
              <Button size="lg" variant="outline" className="text-orange-500 border-white hover:bg-white/10 font-medium px-8 py-3 rounded-full">
                Parler à un expert
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
