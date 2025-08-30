"use client";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TopBar from "@/components/TopBar";
import { Button } from "@/components/ui/button";
import { Plug, Code, Server, Zap, Cloud, Database } from "lucide-react";

const integrations = [
  { icon: <Plug className="h-8 w-8" />, name: "Systèmes de caisse", description: "Intégration avec tous les principaux POS du marché." },
  { icon: <Code className="h-8 w-8" />, name: "API Développeur", description: "Connectez Yamo à vos outils internes via notre API complète." },
  { icon: <Server className="h-8 w-8" />, name: "ERP", description: "Synchronisation avec vos systèmes de gestion." },
  { icon: <Zap className="h-8 w-8" />, name: "Zapier", description: "Automatisez vos workflows avec des milliers d'apps." },
  { icon: <Cloud className="h-8 w-8" />, name: "Cloud Storage", description: "Sauvegarde automatique de vos données." },
  { icon: <Database className="h-8 w-8" />, name: "Bases de données", description: "Export et import de données simplifiés." },
];

export default function Integrations() {
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
              className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-gradient-to-br from-gray-500 to-gray-700 text-white mb-6 mx-auto"
            >
              <Plug className="h-8 w-8" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold text-gray-900 sm:text-5xl mb-6"
            >
              Intégrations <span className="bg-gradient-to-r from-gray-600 to-gray-800 bg-clip-text text-transparent">Sans Limites</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto mb-12"
            >
              Connectez Yamo à vos outils existants pour une gestion unifiée et optimisée de votre restaurant.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Button size="lg" className="bg-gray-700 hover:bg-gray-800 text-white rounded-full shadow-lg">
                Explorer les intégrations
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Integrations Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Nos intégrations</h2>
            <div className="grid lg:grid-cols-3 gap-8">
              {integrations.map((integration, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="p-8 rounded-xl bg-white hover:shadow-lg transition-shadow border border-gray-100">
                    <div className="flex items-center justify-center h-16 w-16 rounded-xl bg-gray-100 text-gray-600 mb-6 mx-auto">
                      {integration.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 text-center mb-2">{integration.name}</h3>
                    <p className="text-gray-600 text-center">{integration.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* API Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
              <div className="mb-12 lg:mb-0">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Notre API</h2>
                <p className="text-gray-600 mb-4">
                  Notre API vous permet de connecter Yamo à vos systèmes internes,
                  de créer des applications personnalisées ou d'automatiser vos processus.
                </p>
                <div className="flex flex-wrap gap-2 mt-6">
                  {['REST', 'GraphQL', 'Webhooks', 'OAuth 2.0'].map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-gray-800 rounded-xl p-8 text-white">
                <pre className="text-sm">
{`// Exemple d'appel API pour récupérer les commandes
fetch('https://api.yamo.app/v1/orders', {
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  }
})
.then(response => response.json())
.then(data => console.log(data));`}
                </pre>
                <Button className="mt-6 bg-white text-gray-800 hover:bg-gray-100">
                  Voir la documentation
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-gray-600 to-gray-800 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Intégrez Yamo à votre écosystème</h2>
            <p className="text-xl mb-8">Que vous ayez besoin d'une intégration standard ou d'une solution sur mesure, nous sommes là pour vous aider.</p>
            <Button size="lg" className="bg-white text-gray-800 hover:bg-gray-100 font-medium px-8 py-3 rounded-full">
              Parler à un expert
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
