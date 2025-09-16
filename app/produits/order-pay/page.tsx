"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TopBar from "@/components/TopBar";
import { Button } from "@/components/ui/button";
import { 
  Smartphone, 
  ShoppingCart, 
  CreditCard, 
  Bell, 
  Clock, 
  Users, 
  QrCode,
  Wallet,
  Star,
  ArrowRight,
  Check,
  Zap,
  TrendingUp,
  Shield,
  Play
} from "lucide-react";
import StartFreeTrialModal from "@/components/modals/StartFreeTrialModal";


const primaryOrange = "#F0AB3C";
const accentOrange = "#EB622B";
const darkBlue = "#121827";

const features = [
  { 
    icon: <QrCode className="h-6 w-6" />, 
    title: "Scan & Commandez", 
    description: "Un simple scan du QR code et vos clients accèdent au menu complet.",
    color: primaryOrange
  },
  { 
    icon: <CreditCard className="h-6 w-6" />, 
    title: "Paiements universels", 
    description: "Mobile Money, cartes bancaires - tous les moyens de paiement supportés.",
    color: accentOrange
  },
  { 
    icon: <Bell className="h-6 w-6" />, 
    title: "Notifications temps réel", 
    description: "Vos clients suivent leur commande étape par étape.",
    color: primaryOrange
  },
  { 
    icon: <Clock className="h-6 w-6" />, 
    title: "Service ultra-rapide", 
    description: "Réduction de 40% du temps d'attente moyen.",
    color: accentOrange
  },
  { 
    icon: <Users className="h-6 w-6" />, 
    title: "Split d'addition", 
    description: "Partage facile entre convives, paiement individuel ou groupé.",
    color: primaryOrange
  },
  { 
    icon: <Shield className="h-6 w-6" />, 
    title: "Sécurité maximale", 
    description: "Transactions cryptées et conformes aux standards bancaires.",
    color: accentOrange
  },
];

const processSteps = [
  {
    step: "01",
    title: "Scan du QR Code",
    description: "Client scanne le code QR sur la table",
    icon: <QrCode className="h-8 w-8" />
  },
  {
    step: "02", 
    title: "Parcours du menu",
    description: "Navigation intuitive et personnalisation des plats",
    icon: <ShoppingCart className="h-8 w-8" />
  },
  {
    step: "03",
    title: "Choix du paiement",
    description: "Mobile Money, carte bancaire selon les préférences",
    icon: <Wallet className="h-8 w-8" />
  },
  {
    step: "04",
    title: "Suivi en temps réel",
    description: "Notification à chaque étape de préparation",
    icon: <Bell className="h-8 w-8" />
  }
];

const stats = [
  { value: "40%", label: "Réduction temps d'attente", icon: <Clock className="h-6 w-6" /> },
  { value: "4.8/5", label: "Satisfaction client", icon: <Star className="h-6 w-6" /> },
  { value: "+25%", label: "Chiffre d'affaires", icon: <TrendingUp className="h-6 w-6" /> },
  { value: "99.9%", label: "Disponibilité", icon: <Zap className="h-6 w-6" /> },
];

const paymentMethods = [
  { name: "Orange Money", logo: "🧡", supported: true },
  { name: "MTN MoMo", logo: "💛", supported: true },
  { name: "Wave", logo: "💙", supported: true },
  { name: "Carte bancaire", logo: "💳", supported: true },
];

export default function IntegratedOrderPayPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showDemo, setShowDemo] = useState(false);

  return (
    <>
      <TopBar />
      <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <main className="bg-gray-50">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 via-orange-50 to-blue-50 overflow-hidden relative">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-left"
              >
               
                <h1 className="text-5xl font-bold text-gray-900 mb-6">Order & Pay </h1>
                
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Notre solution de commande mobile permet à vos clients de commander grâce à un QR code.
                </p>
                <p className="text-md text-gray-600 mb-8 leading-relaxed">
                 Interface intuitive, paiements locaux intégrés, performance optimale même avec une connexion limitée.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <StartFreeTrialModal />
                  <a href="/demo" className="cursor-pointer rounded-full font-medium bg-primary text-white px-4 py-2 hover:bg-primary-700 transition">
                      Planifier une démo
                  </a>
                </div>
              </motion.div>

              {/* Demo Preview */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                className="relative"
              >
                <div className="relative mx-auto w-80 h-96 bg-white rounded-3xl shadow-2xl border-8 border-gray-200 overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-6 rounded-t-xl"
                       style={{ backgroundColor: darkBlue }}></div>
                  <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gray-700 rounded-full"></div>
                  
                  <div className="pt-8 px-6">
                    <div className="text-center mb-6">
                      <div 
                        className="w-16 h-16 mx-auto rounded-2xl mb-4 flex items-center justify-center text-white text-2xl"
                        style={{ backgroundColor: primaryOrange }}
                      >
                        🍽️
                      </div>
                      <h3 className="font-bold text-gray-900">Chez Mama</h3>
                      <p className="text-sm text-gray-600">Cocody, Abidjan</p>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between bg-gray-50 p-3 rounded-xl">
                        <div>
                          <p className="font-medium text-sm">Attiéké Poisson</p>
                          <p className="text-xs text-gray-600">Avec sauce claire</p>
                        </div>
                        <span className="font-bold" style={{ color: primaryOrange }}>2500 F</span>
                      </div>
                      <div className="flex items-center justify-between bg-gray-50 p-3 rounded-xl">
                        <div>
                          <p className="font-medium text-sm">Jus de gingembre</p>
                        </div>
                        <span className="font-bold" style={{ color: primaryOrange }}>500 F</span>
                      </div>
                    </div>

                    <div className="mt-6">
                      <Button 
                        onClick={() => setShowDemo(true)}
                        className="w-full text-white rounded-xl cursor-pointer"
                        style={{ backgroundColor: accentOrange }}
                      >
                        Payer 3000 FCFA
                        <Wallet className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -top-4 -right-4 text-white p-3 rounded-full shadow-lg"
                  style={{ backgroundColor: '#10B981' }}
                >
                  <Check className="h-5 w-5" />
                </motion.div>
                
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                  className="absolute -bottom-4 -left-4 text-white p-3 rounded-full shadow-lg"
                  style={{ backgroundColor: primaryOrange }}
                >
                  <Bell className="h-5 w-5" />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Comment ça marche ?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Un processus simplifié en 4 étapes pour une expérience client optimale
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="text-center relative"
                >
                  {index < processSteps.length - 1 && (
                    <div 
                      className="hidden lg:block absolute top-12 left-full w-full h-0.5 z-0"
                      style={{ 
                        background: `linear-gradient(to right, ${primaryOrange}50, ${accentOrange}30)` 
                      }}
                    ></div>
                  )}
                  
                  <div 
                    className="relative z-10 w-20 h-20 mx-auto rounded-2xl text-white mb-4 flex items-center justify-center shadow-lg"
                    style={{ backgroundColor: index % 2 === 0 ? primaryOrange : accentOrange }}
                  >
                    {step.icon}
                  </div>

                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Fonctionnalités avancées</h2>
              <p className="text-xl text-gray-600">Tout ce dont vous avez besoin pour révolutionner votre service</p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className="p-8 rounded-2xl hover:shadow-xl transition-all duration-300 bg-white border border-gray-100 group-hover:border-orange-200">
                    <div 
                      className="flex items-center justify-center h-14 w-14 rounded-xl text-white mb-6 group-hover:scale-110 transition-transform"
                      style={{ backgroundColor: feature.color }}
                    >
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Impact mesurable</h2>
              <p className="text-xl text-gray-600">Des résultats concrets pour votre business</p>
            </motion.div>

            <div className="grid lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center group"
                >
                  <div 
                    className="p-8 rounded-2xl group-hover:shadow-lg transition-shadow"
                    style={{ 
                      background: `linear-gradient(135deg, ${primaryOrange}10, ${accentOrange}15)` 
                    }}
                  >
                    <div 
                      className="flex items-center justify-center h-12 w-12 rounded-xl text-white mx-auto mb-4"
                      style={{ backgroundColor: primaryOrange }}
                    >
                      {stat.icon}
                    </div>
                    <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                    <p className="text-gray-600 font-medium">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Ce que disent nos clients</h2>
              <p className="text-xl text-gray-600">Des restaurateurs satisfaits à travers l'Afrique</p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Adjoa Mensah",
                  restaurant: "Chez Mama Adjoa - Abidjan",
                  comment: "Order & Pay a transformé notre service. Nos clients adorent la simplicité et nous avons réduit l'attente de 40%.",
                  rating: 5,
                  avatar: "👩🏿"
                },
                {
                  name: "Kwame Asante",
                  restaurant: "Golden Spoon - Accra",
                  comment: "L'intégration Mobile Money était exactement ce dont nous avions besoin. Installation rapide, support excellent.",
                  rating: 5,
                  avatar: "👨🏿"
                },
                {
                  name: "Fatou Diallo",
                  restaurant: "Le Palmier - Dakar",
                  comment: "Interface parfaite pour nos clients. Même ceux moins à l'aise avec la technologie s'y adaptent facilement.",
                  rating: 5,
                  avatar: "👩🏿"
                }
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="bg-white p-8 rounded-2xl shadow-lg"
                >
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">"{testimonial.comment}"</p>
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-12 h-12 rounded-full flex items-center justify-center text-2xl"
                      style={{ backgroundColor: primaryOrange + '20' }}
                    >
                      {testimonial.avatar}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.restaurant}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section 
          className="py-20 text-white relative overflow-hidden"
          style={{ backgroundColor: darkBlue }}
        >
          <div 
            className="absolute inset-0 opacity-20"
            style={{ 
              backgroundImage: `linear-gradient(135deg, ${primaryOrange}20, ${accentOrange}20)` 
            }}
          ></div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">Prêt à révolutionner votre restaurant ?</h2>
              <p className="text-xl mb-8 opacity-90">
                Rejoignez les centaines de restaurants qui ont déjà adopté Order & Pay
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <StartFreeTrialModal />
              </div>

              <div className="mt-8 text-sm opacity-75">
                ✓ Essai gratuit 14 jours • ✓ Installation en 24h • ✓ Support dédié
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}