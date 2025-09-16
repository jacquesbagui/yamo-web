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
  Phone,
  MessageCircle,
  CreditCard,
  Package,
  MapPin,
  ChevronRight,
  Play,
  Timer,
  Target,
  Gift,
  BarChart3,
  Sparkles,
  Eye
} from "lucide-react";
import StartFreeTrialModal from "@/components/modals/StartFreeTrialModal";

// Palette raffinée Rouge/Orange/Gris
const colors = {
  primary: "#DC2626", // Rouge moderne
  accent: "#EA580C", // Orange vibrant
  warmOrange: "#F97316", // Orange chaud
  lightRed: "#FCA5A5", // Rouge clair
  darkGray: "#1F2937", // Gris anthracite
  mediumGray: "#6B7280", // Gris moyen
  lightGray: "#F9FAFB", // Gris très clair
  white: "#FFFFFF",
};

const processSteps = [
  {
    step: "01",
    title: "Parcourir le menu",
    subtitle: "Interface optimisée",
    description: "Navigation fluide avec recommandations IA et filtres intelligents",
    icon: <Smartphone className="h-6 w-6" />,
    visual: <QrCode className="h-12 w-12" />
  },
  {
    step: "02",
    title: "Programmer le retrait",
    subtitle: "Flexibilité totale",
    description: "Créneaux temps réel avec estimation précise de préparation",
    icon: <Clock className="h-6 w-6" />,
    visual: <Clock className="h-12 w-12" />
  },
  {
    step: "03",
    title: "Paiement sécurisé",
    subtitle: "Multi-devises",
    description: "Mobile Money, cartes internationales et crypto acceptées",
    icon: <CreditCard className="h-6 w-6" />,
    visual: <Wallet className="h-12 w-12" />
  },
  {
    step: "04",
    title: "Retrait express",
    subtitle: "Suivi temps réel",
    description: "Notifications push et geolocalisation pour un retrait optimal",
    icon: <Package className="h-6 w-6" />,
    visual: <Package className="h-12 w-12" />
  }
];

const benefits = [
  {
    title: "Revenus amplifiés",
    metric: "+35%",
    description: "Augmentation moyenne du chiffre d'affaires grâce aux commandes anticipées et aux recommandations intelligentes.",
    icon: <TrendingUp className="h-8 w-8" />,
    gradient: `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`
  },
  {
    title: "Efficacité opérationnelle", 
    metric: "×3",
    description: "Triple la capacité de service sans personnel supplémentaire. Optimisation complète des flux de travail.",
    icon: <Target className="h-8 w-8" />,
    gradient: `linear-gradient(135deg, ${colors.accent}, ${colors.warmOrange})`
  },
  {
    title: "Satisfaction client",
    metric: "98%",
    description: "Taux de satisfaction exceptionnel avec zéro temps d'attente et expérience personnalisée.",
    icon: <Star className="h-8 w-8" />,
    gradient: `linear-gradient(135deg, ${colors.warmOrange}, ${colors.lightRed})`
  },
  {
    title: "ROI immédiat",
    metric: "4x",
    description: "Retour sur investissement en moins de 3 mois. Réduction drastique des coûts opérationnels.",
    icon: <BarChart3 className="h-8 w-8" />,
    gradient: `linear-gradient(135deg, ${colors.primary}, ${colors.warmOrange})`
  }
];

const features = [
  {
    title: "Prédiction temps réel",
    description: "IA avancée pour estimer précisément les temps de préparation selon l'affluence.",
    icon: <Timer className="h-6 w-6" />,
    category: "Intelligence",
    premium: true
  },
  {
    title: "Inventory sync",
    description: "Synchronisation instantanée des stocks avec mise à jour automatique du menu.",
    icon: <Package className="h-6 w-6" />,
    category: "Gestion",
    premium: false
  },
  {
    title: "Marketing automation",
    description: "Campagnes personnalisées et codes promo intelligents selon le comportement.",
    icon: <Gift className="h-6 w-6" />,
    category: "Marketing",
    premium: true
  },
  {
    title: "Analytics 360°",
    description: "Dashboards avancés avec insights prédictifs et recommandations business.",
    icon: <BarChart3 className="h-6 w-6" />,
    category: "Données",
    premium: true
  },
  {
    title: "Multi-localisation",
    description: "Gestion centralisée pour les chaînes avec personnalisation par point de vente.",
    icon: <MapPin className="h-6 w-6" />,
    category: "Scale",
    premium: true
  },
  {
    title: "Support 24/7",
    description: "Assistance technique experte et formation continue de vos équipes.",
    icon: <Phone className="h-6 w-6" />,
    category: "Support",
    premium: false
  }
];

const stats = [
  { 
    value: "2min", 
    label: "Setup complet", 
    sublabel: "Installation plug & play",
    icon: <Zap className="h-5 w-5" />
  },
  { 
    value: "99.9%", 
    label: "Uptime garanti", 
    sublabel: "Infrastructure cloud native",
    icon: <Shield className="h-5 w-5" />
  },
  { 
    value: "24/7", 
    label: "Support expert", 
    sublabel: "Équipe technique dédiée",
    icon: <Phone className="h-5 w-5" />
  }
];

export default function RefinedClickCollect() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [hoveredBenefit, setHoveredBenefit] = useState<number | null>(null);

  return (
    <>
      <TopBar />
      <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      
      <main className="overflow-hidden">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 via-orange-50 to-blue-50 overflow-hidden relative">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              
              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-left"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-gradient-to-r from-orange-500 to-red-500 text-white inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6"
                >
                  <Package className="h-4 w-4 mr-2" />
                  Click & Collect
                </motion.div>
                
                <h1 className="text-5xl font-bold text-gray-900 mb-6">
                  Le Click & Collect intégré à votre système
                </h1>
                
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Permettez aux clients de commander directement auprès de vous, où qu'ils se trouvent.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                    <StartFreeTrialModal />
                </div>
              </motion.div>

              {/* Visual Demo */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                className="relative"
              >
                <div className="relative mx-auto w-100 h-96 bg-white rounded-3xl shadow-md border-4 border-gray-200 overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-6 rounded-t-xl"
                       style={{ backgroundColor: colors.darkGray}}></div>
                  <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gray-700 rounded-full"></div>
                  
                  <div className="pt-8 px-6">
                    <div className="text-center mb-6 mt-4">
                      <h3 className="font-bold text-gray-900">Maquis Chez Tata</h3>
                      <p className="text-sm text-gray-600">Yopougon, Abidjan</p>
                      <div className="text-xs text-green-600 font-medium">
                        • Ouvert • Livraison 15-25min
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="bg-gray-50 p-3 rounded-xl">
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <p className="font-medium text-sm">Menu Attiéké Poisson</p>
                            <p className="text-xs text-gray-600">Avec légumes et sauce claire</p>
                            <div className="flex items-center gap-2 mt-1">
                              <span className="text-xs" style={{ color: colors.warmOrange }}>
                                <Clock className="inline h-3 w-3 mr-1" />
                                Prêt à 14h30
                              </span>
                            </div>
                          </div>
                          <span className="font-bold" style={{ color: colors.warmOrange }}>3500 F</span>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 p-3 rounded-xl">
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <p className="font-medium text-sm">Bissap glacé</p>
                            <p className="text-xs text-gray-600">Fait maison</p>
                          </div>
                          <span className="font-bold" style={{ color: colors.warmOrange }}>800 F</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6">
                      <Button 
                        className="w-full text-white rounded-xl"
                        style={{ backgroundColor: colors.warmOrange }}
                      >
                        Commander • 4300 FCFA
                        <Wallet className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>


        {/* Benefits Section */}
        <section className="py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl font-black mb-6" style={{ color: colors.accent }}>
                Impact Transformationnel
              </h2>
              <p className="text-xl text-gray-900 max-w-3xl mx-auto">
                Des résultats mesurables qui révolutionnent votre business model et maximisent votre rentabilité.
              </p>
            </motion.div>

            {/* Benefits Grid */}
            <div className="grid lg:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group cursor-pointer"
                  onHoverStart={() => setHoveredBenefit(index)}
                  onHoverEnd={() => setHoveredBenefit(null)}
                >
                  <div 
                    className="relative p-8 rounded-3xl overflow-hidden backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500"
                    style={{ 
                      background: hoveredBenefit === index 
                        ? `linear-gradient(135deg, ${colors.primary}15, ${colors.accent}15)` 
                        : 'rgba(255,255,255,0.05)'
                    }}
                  >
                    {/* Background Gradient */}
                    <div 
                      className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity"
                      style={{ background: benefit.gradient }}
                    ></div>
                    
                    {/* Content */}
                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-6">
                        <div 
                          className="w-16 h-16 rounded-2xl flex items-center justify-center text-white"
                          style={{ background: benefit.gradient }}
                        >
                          {benefit.icon}
                        </div>
                        <div className="text-right">
                          <div 
                            className="text-4xl font-black"
                            style={{ color: colors.accent }}
                          >
                            {benefit.metric}
                          </div>
                        </div>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                      <p className="text-gray-800 leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20" style={{ backgroundColor: colors.white }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl font-black mb-6" style={{ color: colors.darkGray }}>
                Expérience <span style={{ color: colors.accent }}>Seamless</span>
              </h2>
              <p className="text-xl max-w-3xl mx-auto" style={{ color: colors.mediumGray }}>
                Un parcours client optimisé scientifiquement pour maximiser conversion et satisfaction.
              </p>
            </motion.div>

            {/* Process Steps */}
            <div className="grid lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="relative group cursor-pointer"
                  onClick={() => setActiveStep(index)}
                >
                  {/* Connection Line */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gray-200 z-0">
                      <div 
                        className="h-full transition-all duration-1000"
                        style={{ 
                          background: `linear-gradient(to right, ${colors.accent}, ${colors.warmOrange})`,
                          width: activeStep > index ? '100%' : '0%'
                        }}
                      ></div>
                    </div>
                  )}
                  
                  {/* Step Card */}
                  <div 
                    className={`relative z-10 p-8 rounded-3xl border-2 transition-all duration-300 ${
                      activeStep === index 
                        ? 'shadow-2xl border-transparent' 
                        : 'border-gray-100 hover:border-gray-200'
                    }`}
                    style={{
                      background: activeStep === index 
                        ? `linear-gradient(135deg, ${colors.primary}08, ${colors.accent}08)`
                        : colors.white
                    }}
                  >
                    {/* Step Number */}
                    <div 
                      className="w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-6"
                      style={{ 
                        background: activeStep === index 
                          ? `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`
                          : colors.mediumGray
                      }}
                    >
                      {step.visual}
                    </div>
                    
                    {/* Badge */}
                    <div 
                      className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-4"
                      style={{ 
                        backgroundColor: colors.accent + '20',
                        color: colors.accent
                      }}
                    >
                      {step.step}
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-xl font-bold mb-2" style={{ color: colors.darkGray }}>
                      {step.title}
                    </h3>
                    <p className="text-sm font-medium mb-3" style={{ color: colors.accent }}>
                      {step.subtitle}
                    </p>
                    <p className="text-sm leading-relaxed" style={{ color: colors.mediumGray }}>
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-32" style={{ backgroundColor: colors.lightGray }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl font-black mb-6" style={{ color: colors.darkGray }}>
                Technologie <span style={{ color: colors.accent }}>Avancée</span>
              </h2>
              <p className="text-xl max-w-3xl mx-auto" style={{ color: colors.mediumGray }}>
                Intelligence artificielle et automatisation poussée pour une expérience inégalée.
              </p>
            </motion.div>

            {/* Features Grid */}
            <div className="grid lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className={`relative p-8 rounded-3xl transition-all duration-300 h-full ${
                    feature.premium 
                      ? 'bg-gradient-to-br from-gray-900 to-gray-800 text-white border-0 shadow-2xl'
                      : 'bg-white border border-gray-100 hover:shadow-xl hover:border-gray-200'
                  }`}>
                    
                    {/* Category Badge */}
                    <div 
                      className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-6 ${
                        feature.premium 
                          ? 'bg-white/20 text-white' 
                          : 'text-white'
                      }`}
                      style={{ 
                        backgroundColor: feature.premium ? undefined : colors.accent
                      }}
                    >
                      {feature.category}
                    </div>
                    
                    {/* Icon */}
                    <div 
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${
                        feature.premium ? 'text-white' : 'text-white'
                      }`}
                      style={{ 
                        background: feature.premium 
                          ? `linear-gradient(135deg, ${colors.accent}, ${colors.warmOrange})`
                          : `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`
                      }}
                    >
                      {feature.icon}
                    </div>
                    
                    {/* Content */}
                    <h3 className={`text-xl font-bold mb-4 ${
                      feature.premium ? 'text-white' : ''
                    }`} style={{ color: feature.premium ? undefined : colors.darkGray }}>
                      {feature.title}
                    </h3>
                    <p className={`leading-relaxed ${
                      feature.premium ? 'text-gray-300' : ''
                    }`} style={{ color: feature.premium ? undefined : colors.mediumGray }}>
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-24" style={{ backgroundColor: colors.white }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center group"
                >
                  <div className="p-8 rounded-3xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 group-hover:shadow-xl transition-all">
                    <div 
                      className="w-16 h-16 mx-auto rounded-2xl flex items-center justify-center text-white mb-6"
                      style={{ background: `linear-gradient(135deg, ${colors.primary}, ${colors.accent})` }}
                    >
                      {stat.icon}
                    </div>
                    <div className="text-4xl font-black mb-2" style={{ color: colors.darkGray }}>
                      {stat.value}
                    </div>
                    <p className="font-bold mb-1" style={{ color: colors.darkGray }}>
                      {stat.label}
                    </p>
                    <p className="text-sm" style={{ color: colors.mediumGray }}>
                      {stat.sublabel}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section 
          className="py-32 text-white relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div style={{ background: `linear-gradient(135deg, ${colors.primary}, ${colors.accent}, ${colors.warmOrange})` }} className="w-full h-full"></div>
          </div>
          
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-black mb-8" style={{ color: colors.accent }}>
                Prêt à Révolutionner ?
              </h2>
              <p className="text-2xl mb-12 text-gray-900 max-w-2xl mx-auto">
                Transformez votre restaurant dès aujourd'hui avec la solution Click & Collect la plus avancée du marché.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                <StartFreeTrialModal />
                <a href="/demo" className="cursor-pointer rounded-full font-medium bg-primary text-white px-4 py-2 hover:bg-primary-700 transition">
                    Planifier une démo
                </a>
              </div>

              <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5" style={{ color: colors.accent }} />
                  <span>Installation en 2 minutes</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5" style={{ color: colors.accent }} />
                  <span>14 jours d'essai gratuit</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5" style={{ color: colors.accent }} />
                  <span>Support expert 24/7</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5" style={{ color: colors.accent }} />
                  <span>Aucun engagement</span>
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