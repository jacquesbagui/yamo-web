"use client";
import { motion } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ChefHat, Smartphone, Rocket, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import StartFreeTrialModal from "@/components/modals/StartFreeTrialModal";
import ContactSalesModal from "@/components/modals/ContactSalesModal";

// Données simplifiées avec charte de couleurs harmonisée
const MODULES = {
  menu: {
    title: "Menu Digital",
    subtitle: "QR codes et gestion temps réel",
    description: "Transformez votre carte papier en expérience digitale avec QR codes personnalisés par table.",
    price: "Inclus dans tous les plans",
    color: "orange-500",
    gradient: "from-orange-400 to-red-500",
    features: [
      "QR codes personnalisés par table",
      "Gestion menu avec photos HD",
      "Mise à jour temps réel des prix",
      "Filtres allergènes et préférences"
    ],
    stats: [
      { value: "3min", label: "Setup", color: "text-orange-500" },
      { value: "+25%", label: "Consultations", color: "text-red-500" },
      { value: "100%", label: "Temps réel", color: "text-blue-900" }
    ],
    integrations: [
      { name: "QR Codes", color: "bg-orange-500" },
      { name: "PWA", color: "bg-red-500" },
      { name: "Offline", color: "bg-blue-900" }
    ]
  },
  
  order: {
    title: "Order & Pay",
    subtitle: "Commande et Mobile Money",
    description: "Commande autonome avec paiements Mobile Money adaptés au marché africain.",
    price: "À partir de 15 000 FCFA/mois",
    color: "red-900",
    gradient: "from-red-900 to-orange-400",
    features: [
      "Interface mobile optimisée",
      "Orange Money, MTN, Wave intégrés",
      "Partage de facture automatique",
      "Notifications WhatsApp et SMS"
    ],
    stats: [
      { value: "<3min", label: "Commande", color: "text-blue-900" },
      { value: "95%", label: "Paiements", color: "text-red-500" },
      { value: "+40%", label: "Rotation", color: "text-orange-500" }
    ],
    integrations: [
      { name: "Orange Money", color: "bg-orange-500" },
      { name: "MTN MoMo", color: "bg-red-500" },
      { name: "Wave", color: "bg-blue-900" }
    ]
  },
  
  suite: {
    title: "Suite Complète",
    subtitle: "Analytics + Multi-locations",
    description: "Solution tout-en-un avec dashboard analytics et gestion multi-restaurants.",
    price: "À partir de 35 000 FCFA/mois",
    color: "red-500",
    gradient: "from-red-500 to-blue-900",
    features: [
      "Dashboard analytics avancé",
      "App Staff PWA dédiée",
      "Gestion multi-locations",
      "API et intégrations POS"
    ],
    stats: [
      { value: "360°", label: "Vue globale", color: "text-red-500" },
      { value: "99.9%", label: "Uptime", color: "text-blue-900" },
      { value: "24/7", label: "Support", color: "text-orange-500" }
    ],
    integrations: [
      { name: "WhatsApp", color: "bg-orange-500" },
      { name: "API REST", color: "bg-red-500" },
      { name: "Analytics", color: "bg-blue-900" }
    ]
  }
};

export default function ProductsTabs() {
  return (
    <section id="produits" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      
      {/* Décoration background subtile */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="bg-gradient-to-r from-orange-400 to-red-500 text-white px-6 py-2 mb-6">
            <Zap className="w-4 h-4 mr-2" />
            Solutions modulaires
          </Badge>

          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-6">
            Votre parcours de <span className="text-orange-500">digitalisation</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Commencez par le menu digital, évoluez vers la solution complète à votre rythme.
          </p>
        </motion.div>

        <Tabs defaultValue="menu" className="space-y-12">
          
          {/* Navigation */}
          <div className="flex justify-center">
            <div className="bg-white rounded-2xl p-2 shadow-lg border border-gray-200">
              <TabsList className="grid grid-cols-3 bg-transparent gap-2 h-auto">
                
                <TabsTrigger
                  value="menu"
                  className="flex flex-col items-center gap-2 p-4 rounded-xl data-[state=active]:bg-orange-500 data-[state=active]:text-white transition-all min-w-[160px] hover:bg-gray-50"
                >
                  <ChefHat className="h-5 w-5" />
                  <div className="text-sm font-medium">Menu Digital</div>
                  <div className="text-xs opacity-70">Base essentielle</div>
                </TabsTrigger>

                <TabsTrigger
                  value="order"
                  className="flex flex-col items-center gap-2 p-4 rounded-xl data-[state=active]:bg-yellow-500 data-[state=active]:text-white transition-all min-w-[160px] hover:bg-gray-50"
                >
                  <Smartphone className="h-5 w-5" />
                  <div className="text-sm font-medium">Order & Pay</div>
                  <div className="text-xs opacity-70">Commande autonome</div>
                </TabsTrigger>

                <TabsTrigger
                  value="suite"
                  className="flex flex-col items-center gap-2 p-4 rounded-xl data-[state=active]:bg-gray-900 data-[state=active]:text-white transition-all min-w-[160px] hover:bg-gray-50"
                >
                  <Rocket className="h-5 w-5" />
                  <div className="text-sm font-medium">Suite Complète</div>
                  <div className="text-xs opacity-70">Solution totale</div>
                </TabsTrigger>

              </TabsList>
            </div>
          </div>

          {/* Contenu des tabs */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {Object.entries(MODULES).map(([key, module]) => (
              <TabsContent key={key} value={key}>
                <Card className="p-8 lg:p-12 shadow-xl border-0 bg-white/95 backdrop-blur-sm">
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    
                    {/* Contenu principal gauche */}
                    <div className="space-y-8">
                      <div>
                        <Badge className={`mb-4 px-4 py-2 bg-${module.color}/10 text-${module.color} border border-${module.color}/20`}>
                          <Zap className="w-4 h-4 mr-2" />
                          {module.price}
                        </Badge>
                        
                        <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                          {module.title}
                        </h3>
                        <p className="text-lg text-gray-600 mb-6">
                          {module.subtitle}
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                          {module.description}
                        </p>
                      </div>

                      {/* Fonctionnalités */}
                      <div className="space-y-4">
                        {module.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-3">
                            <div className={`w-2 h-2 rounded-full bg-${module.color}`}></div>
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* Statistiques */}
                      <div className="flex gap-8">
                        {module.stats.map((stat, idx) => (
                          <div key={idx} className="text-center">
                            <div className={`text-2xl font-bold ${stat.color}`}>
                              {stat.value}
                            </div>
                            <div className="text-sm text-gray-600">{stat.label}</div>
                          </div>
                        ))}
                      </div>

                      {/* Boutons d'action */}
                      <div className="flex gap-4">
                        <Button 
                          size="lg"
                          className={`bg-gradient-to-r ${module.gradient} hover:opacity-90 text-white`}
                        >
                          Voir la démo
                        </Button>
                        <Button 
                          size="lg" 
                          variant="outline"
                          className="border-gray-300 hover:bg-gray-50"
                        >
                          En savoir plus
                        </Button>
                      </div>
                    </div>

                    {/* Intégrations droite */}
                    <div className="space-y-6">
                      <Card className="p-6 bg-gray-50 border-0">
                        <h4 className="font-semibold text-gray-900 mb-4">
                          Intégrations incluses
                        </h4>
                        <div className="grid grid-cols-3 gap-3">
                          {module.integrations.map((integration, idx) => (
                            <div key={idx} className="text-center p-3 bg-white rounded-lg shadow-sm border border-gray-100">
                              <div className={`w-6 h-6 ${integration.color} rounded-full mx-auto mb-2`}></div>
                              <div className="text-xs text-gray-600">{integration.name}</div>
                            </div>
                          ))}
                        </div>
                      </Card>

                      {/* Bénéfices clés */}
                      <Card className="p-6 bg-gradient-to-br from-gray-50 to-white border-0">
                        <h4 className="font-semibold text-gray-900 mb-4">
                          Pourquoi choisir {module.title} ?
                        </h4>
                        <div className="space-y-3 text-sm text-gray-700">
                          {key === 'menu' && (
                            <>
                              <div>• Configuration en 3 minutes seulement</div>
                              <div>• Compatible tous smartphones</div>
                              <div>• Mode offline automatique</div>
                            </>
                          )}
                          {key === 'order' && (
                            <>
                              <div>• Paiements 95% de réussite</div>
                              <div>• Interface adaptée Afrique</div>
                              <div>• Support connectivité faible</div>
                            </>
                          )}
                          {key === 'suite' && (
                            <>
                              <div>• Insights temps réel avec IA</div>
                              <div>• Gestion centralisée multi-sites</div>
                              <div>• Support dédié 24/7</div>
                            </>
                          )}
                        </div>
                      </Card>
                    </div>
                  </div>
                </Card>
              </TabsContent>
            ))}
          </motion.div>
        </Tabs>

        {/* CTA Final */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Card className="p-8 bg-gradient-to-r from-blue-900 to-gray-800 text-white border-0">
            <h3 className="text-2xl font-bold mb-4">
              Prêt à digitaliser votre restaurant ?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Plus de 500 restaurateurs africains nous font déjà confiance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <StartFreeTrialModal />
              <Button size="lg" variant="outline" className="border-gray-400 text-white hover:bg-white/10">
                Planifier une démo
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}