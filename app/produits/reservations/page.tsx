"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TopBar from "@/components/TopBar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  CalendarDays, 
  Clock, 
  Users, 
  Phone, 
  MessageCircle,
  CheckCircle,
  ArrowRight,
  Star,
  TrendingUp,
  Shield,
  Zap,
  Bell,
  BarChart3,
  UserCheck,
  Calendar,
  Smartphone,
  Settings,
  Play
} from "lucide-react";
import StartFreeTrialModal from "@/components/modals/StartFreeTrialModal";

const primaryOrange = "#F0AB3C";
const accentOrange = "#EB622B";
const darkBlue = "#121827";

const features = [
  {
    title: "Réservations en ligne",
    description: "Interface client intuitive pour réserver une table 24/7, même quand vous êtes fermés.",
    icon: <Calendar className="h-6 w-6" />,
    highlight: "24/7",
    color: primaryOrange
  },
  {
    title: "Gestion intelligente",
    description: "Dashboard complet pour gérer toutes vos réservations avec vue calendrier et timeline.",
    icon: <Settings className="h-6 w-6" />,
    highlight: "Smart",
    color: accentOrange
  },
  {
    title: "Notifications automatiques",
    description: "SMS et WhatsApp automatiques pour confirmations, rappels et modifications.",
    icon: <Bell className="h-6 w-6" />,
    highlight: "Auto",
    color: primaryOrange
  },
  {
    title: "Analytics avancés",
    description: "Statistiques détaillées sur vos réservations, taux de show-up et performance.",
    icon: <BarChart3 className="h-6 w-6" />,
    highlight: "Insights",
    color: accentOrange
  },
  {
    title: "Synchronisation temps réel",
    description: "Mises à jour instantanées entre app client et dashboard staff.",
    icon: <Zap className="h-6 w-6" />,
    highlight: "Real-time",
    color: primaryOrange
  },
  {
    title: "Gestion des no-shows",
    description: "Système intelligent pour minimiser les tables vides et optimiser votre planning.",
    icon: <UserCheck className="h-6 w-6" />,
    highlight: "Intelligent",
    color: accentOrange
  }
];

const benefits = [
  {
    title: "Réduction no-shows",
    metric: "-60%",
    description: "Diminution drastique des réservations non honorées grâce aux rappels automatiques.",
    icon: <UserCheck className="h-8 w-8" />
  },
  {
    title: "Optimisation planning",
    metric: "+35%",
    description: "Augmentation de l'occupation des tables grâce à la gestion intelligente.",
    icon: <Calendar className="h-8 w-8" />
  },
  {
    title: "Satisfaction client",
    metric: "95%",
    description: "Taux de satisfaction élevé avec l'expérience de réservation simplifiée.",
    icon: <Star className="h-8 w-8" />
  },
  {
    title: "Gain de temps",
    metric: "4h/jour",
    description: "Temps économisé quotidiennement sur la gestion manuelle des réservations.",
    icon: <Clock className="h-8 w-8" />
  }
];

const useCases = [
  {
    title: "Pour les Clients",
    subtitle: "Réservation simplifiée",
    features: [
      "Réservation en ligne 24/7",
      "Confirmation instantanée",
      "Rappels automatiques",
      "Modification/annulation facile",
      "Historique des réservations"
    ],
    mockup: "client"
  },
  {
    title: "Pour le Staff",
    subtitle: "Gestion centralisée", 
    features: [
      "Dashboard temps réel",
      "Vue calendrier complète",
      "Gestion des tables",
      "Analytics détaillés",
      "Notifications staff"
    ],
    mockup: "staff"
  }
];

const stats = [
  { value: "2min", label: "Installation", sublabel: "Prêt à utiliser" },
  { value: "99.9%", label: "Fiabilité", sublabel: "Uptime garanti" },
  { value: "24/7", label: "Support", sublabel: "Assistance continue" }
];

export default function ReservationsFeaturePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeUseCase, setActiveUseCase] = useState(0);

  return (
    <>
      <TopBar />
      <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      
      <main className="bg-white">
        
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-gray-50 via-orange-50/30 to-blue-50/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              
              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-8"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="inline-flex bg-gradient-to-br from-orange-500 to-red-500 items-center gap-2 px-4 py-2 rounded-full"
                >
                  <CalendarDays className="text-white h-4 w-4" />
                  <span className="text-white text-sm font-medium">Système de Réservations</span>
                </motion.div>
                
                <div>
                  <h1 className="text-6xl font-black leading-tight mb-6" style={{ color: darkBlue }}>
                    Réservations Intelligentes
                  </h1>
                  
                  <p className="text-xl leading-relaxed mb-8" style={{ color: "#6B7280" }}>
                    Transformez la gestion de vos réservations avec un système automatisé 
                    qui optimise votre planning et améliore l'expérience client.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <StartFreeTrialModal />
                </div>
              </motion.div>

              {/* Visual Demo */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                className="relative"
              >
                <div className="relative">
                  {/* Main Device */}
                  <div className="w-120 h-[600px] bg-white rounded-3xl shadow-2xl border-4 border-gray-100 overflow-hidden">
                    <div className="h-8 flex items-center justify-center" style={{ backgroundColor: darkBlue }}>
                      <div className="w-20 h-1 bg-gray-600 rounded-full"></div>
                    </div>
                    
                    <div className="p-6 h-full">
                      {/* Header */}
                      <div className="text-center mb-8">
                        <div 
                          className="bg-gradient-to-br from-orange-500 to-red-500 w-16 h-16 mx-auto rounded-2xl mb-4 flex items-center justify-center text-white"
                        >
                          <CalendarDays className="h-8 w-8" />
                        </div>
                        <h3 className="font-bold text-xl" style={{ color: darkBlue }}>Mes Réservations</h3>
                        <p className="text-sm text-gray-600">Le Baobab Restaurant</p>
                      </div>

                      {/* Reservations List */}
                      <div className="space-y-4">
                        <div className="p-4 rounded-2xl border-2" style={{ borderColor: primaryOrange + '30', backgroundColor: primaryOrange + '08' }}>
                          <div className="flex justify-between items-start mb-3">
                            <div>
                              <p className="font-semibold" style={{ color: darkBlue }}>Aujourd'hui</p>
                              <p className="text-sm text-gray-600">20h00 • 4 personnes</p>
                            </div>
                            <Badge style={{ backgroundColor: primaryOrange, color: 'white' }}>
                              Confirmée
                            </Badge>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Users className="h-4 w-4" />
                            <span>Famille Kouamé</span>
                          </div>
                        </div>

                        <div className="p-4 rounded-2xl bg-gray-50 border">
                          <div className="flex justify-between items-start mb-3">
                            <div>
                              <p className="font-semibold" style={{ color: darkBlue }}>Demain</p>
                              <p className="text-sm text-gray-600">19h30 • 2 personnes</p>
                            </div>
                            <Badge variant="outline">
                              En attente
                            </Badge>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Users className="h-4 w-4" />
                            <span>M. et Mme Diallo</span>
                          </div>
                        </div>

                        <div className="p-4 rounded-2xl bg-green-50 border border-green-200">
                          <div className="flex justify-between items-start mb-3">
                            <div>
                              <p className="font-semibold text-green-800">Vendredi</p>
                              <p className="text-sm text-green-600">20h30 • 6 personnes</p>
                            </div>
                            <Badge style={{ backgroundColor: '#10B981', color: 'white' }}>
                              Confirmée
                            </Badge>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-green-600">
                            <Users className="h-4 w-4" />
                            <span>Groupe Asante</span>
                          </div>
                        </div>
                      </div>

                      <Button 
                        className="w-full mt-6 py-3 rounded-2xl text-white font-semibold"
                        style={{ backgroundColor: accentOrange }}
                      >
                        Nouvelle Réservation
                        <CalendarDays className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Floating Elements */}
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute bg-gradient-to-br from-orange-500 to-red-500 -top-4 -right-4 w-14 h-14 rounded-2xl shadow-lg flex items-center justify-center text-white"
                  >
                    <Bell className="h-6 w-6" />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6" style={{ color: darkBlue }}>
                Impact Immédiat
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Des résultats mesurables dès la première semaine d'utilisation
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="text-center h-full border-0 shadow-lg hover:shadow-xl transition-shadow">
                    <CardContent className="pt-8">
                      <div 
                        className="w-16 h-16 mx-auto bg-red-500 rounded-2xl flex items-center justify-center text-white mb-4"
                      >
                        {benefit.icon}
                      </div>
                      <div className="text-3xl font-black mb-2" style={{ color: accentOrange }}>
                        {benefit.metric}
                      </div>
                      <h3 className="font-bold mb-2" style={{ color: darkBlue }}>
                        {benefit.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {benefit.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl text-orange-600 font-bold mb-6">
                Fonctionnalités Complètes
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Tout ce dont vous avez besoin pour gérer vos réservations efficacement
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow border-0 shadow-sm">
                    <CardContent className="p-8">
                      <div className="flex items-start justify-between mb-6">
                        <div 
                          className="w-14 h-14 rounded-2xl flex items-center justify-center text-white"
                          style={{ backgroundColor: feature.color }}
                        >
                          {feature.icon}
                        </div>
                        <Badge 
                          style={{ 
                            backgroundColor: feature.color + '20', 
                            color: feature.color,
                            border: 'none'
                          }}
                        >
                          {feature.highlight}
                        </Badge>
                      </div>
                      <h3 className="text-xl font-bold mb-3" style={{ color: darkBlue }}>
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 text-orange-600">
                Conçu pour Tous
              </h2>
              <p className="text-xl text-gray-900 max-w-3xl mx-auto">
                Interface optimisée pour clients et staff, chacun avec ses fonctionnalités dédiées
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-gray-900 text-2xl">{useCase.title}</CardTitle>
                      <CardDescription className="text-gray-700 text-lg">
                        {useCase.subtitle}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {useCase.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-3 text-gray-300">
                            <CheckCircle className="h-5 w-5" style={{ color: accentOrange }} />
                            <span className="text-gray-900">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-r from-orange-500 to-red-500 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">
                Prêt à Optimiser vos Réservations ?
              </h2>
              <p className="text-xl mb-10 max-w-2xl mx-auto">
                Rejoignez les restaurateurs qui ont déjà transformé leur gestion des réservations 
                et amélioré leur rentabilité.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                  <StartFreeTrialModal />
              </div>

              <div className="flex flex-wrap justify-center gap-8 text-sm text-white">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4" style={{ color: accentOrange }} />
                  <span>Installation en 2 minutes</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4" style={{ color: accentOrange }} />
                  <span>Essai gratuit 14 jours</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4" style={{ color: accentOrange }} />
                  <span>Support premium inclus</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        
      </main>
      
      <Footer />
    </>
  );
}