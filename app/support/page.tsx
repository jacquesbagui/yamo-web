"use client";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TopBar from "@/components/TopBar";
import { Button } from "@/components/ui/button";
import { HelpCircle, Mail, Phone, MessageSquare, BookOpen } from "lucide-react";

const supportOptions = [
  {
    icon: <HelpCircle className="h-8 w-8" />,
    title: "Centre d'aide",
    description: "Consultez notre base de connaissances et nos guides.",
    link: "#",
  },
  {
    icon: <Mail className="h-8 w-8" />,
    title: "Contact par email",
    description: "Envoyez-nous un message, nous répondons sous 24h.",
    link: "mailto:support@yamo.app",
  },
  {
    icon: <Phone className="h-8 w-8" />,
    title: "Support téléphonique",
    description: "Appelez-nous du lundi au vendredi, 9h-18h.",
    link: "tel:+33123456789",
  },
  {
    icon: <MessageSquare className="h-8 w-8" />,
    title: "Chat en direct",
    description: "Discutez avec notre équipe en temps réel.",
    link: "#",
  },
];

const faqs = [
  {
    question: "Comment commencer avec Yamo ?",
    answer: "Vous pouvez commencer en créant un compte gratuit sur notre site. Nous offrons un essai de 14 jours sans engagement.",
  },
  {
    question: "Quels sont les moyens de paiement acceptés ?",
    answer: "Nous acceptons les cartes bancaires (Visa, Mastercard), PayPal, Apple Pay, Google Pay, et les paiements en espèces (avec notre terminal).",
  },
  {
    question: "Puis-je annuler mon abonnement à tout moment ?",
    answer: "Oui, vous pouvez annuler votre abonnement à tout moment depuis votre tableau de bord, sans frais.",
  },
  {
    question: "Comment configurer mon menu digital ?",
    answer: "Notre équipe vous guide pas à pas lors de l'onboarding. Vous pouvez aussi consulter notre guide détaillé dans le centre d'aide.",
  },
];

export default function Support() {
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
              <HelpCircle className="h-8 w-8" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold text-gray-900 sm:text-5xl mb-6"
            >
              Support <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Yamo</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto mb-12"
            >
              Nous sommes là pour vous aider à tirer le meilleur parti de Yamo.
              Choisissez votre méthode de contact préférée.
            </motion.p>
          </div>
        </section>

        {/* Support Options */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Comment pouvons-nous vous aider ?</h2>
            <div className="grid lg:grid-cols-4 gap-8">
              {supportOptions.map((option, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a href={option.link} className="block h-full">
                    <div className="p-8 rounded-xl bg-white hover:shadow-lg transition-shadow h-full border border-gray-100">
                      <div className="flex items-center justify-center h-16 w-16 rounded-xl bg-blue-100 text-blue-600 mb-6 mx-auto">
                        {option.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 text-center mb-2">{option.title}</h3>
                      <p className="text-gray-600 text-center">{option.description}</p>
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Questions fréquentes</h2>
            <div className="space-y-8">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="p-6 rounded-xl border border-gray-100">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Documentation Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
              <div className="mb-12 lg:mb-0">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Documentation complète</h2>
                <p className="text-gray-600 mb-4">
                  Accédez à notre documentation détaillée pour configurer et utiliser Yamo comme un pro.
                  Des guides pas à pas aux tutoriels vidéo, tout est là.
                </p>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Consulter la documentation
                </Button>
              </div>
              <div className="bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl p-8 text-white">
                <h3 className="text-2xl font-semibold mb-4">Guides populaires</h3>
                <ul className="space-y-3">
                  {[
                    "Configuration initiale",
                    "Gestion des menus",
                    "Intégration des paiements",
                    "Analyse des ventes",
                    "Programme de fidélité",
                  ].map((guide, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className="h-2 w-2 rounded-full bg-white"></span>
                      {guide}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-500 to-purple-500 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Besoin d'aide supplémentaire ?</h2>
            <p className="text-xl mb-8">Notre équipe est disponible pour répondre à toutes vos questions.</p>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-medium px-8 py-3 rounded-full">
              Contacter le support
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
