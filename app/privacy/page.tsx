"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TopBar from "@/components/TopBar";
import { motion } from "framer-motion";
import { FileText } from "lucide-react";

export default function CGU() {
  return (
    <>
      <TopBar />
      <Header mobileMenuOpen={false} setMobileMenuOpen={() => {}} />
      <main className="bg-gray-50">
        <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-gray-100">
                <FileText className="h-6 w-6 text-gray-600" />
              </div>
              <h1 className="text-3xl font-bold text-gray-900">Conditions Générales d'Utilisation</h1>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-gray-600 mb-8"
            >
              Dernière mise à jour : 1er janvier 2025
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white p-8 rounded-xl shadow-sm"
            >
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptation des conditions</h2>
              <p className="text-gray-600 mb-6">
                En utilisant les services de Yamo (ci-après "le Service"), vous acceptez d'être lié par les présentes Conditions Générales d'Utilisation (ci-après "CGU").
                Si vous n'acceptez pas ces CGU, veuillez ne pas utiliser le Service.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Description du service</h2>
              <p className="text-gray-600 mb-6">
                Yamo fournit une plateforme de digitalisation pour les restaurants, incluant des outils de menu digital, de commande en ligne, de paiement et d'analyse.
                Le Service est destiné uniquement à un usage professionnel par des établissements de restauration.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Inscription et compte</h2>
              <p className="text-gray-600 mb-6">
                Pour utiliser certains aspects du Service, vous devrez créer un compte. Vous êtes responsable de maintenir la confidentialité de vos identifiants de connexion et de toutes les activités qui se produisent sous votre compte.
              </p>

              {/* Ajoutez d'autres sections selon vos besoins */}
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
