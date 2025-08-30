"use client";
import { motion } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ChefHat, Smartphone, Rocket } from "lucide-react";
import AdvancedProductCard from "../AdvancedProductCard";

export default function ProductsTabs() {
  return (
    <section id="produits" className="py-12 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center space-y-6 max-w-4xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full shadow-sm">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="font-medium">Trois modules, une synergie parfaite</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-light tracking-tight text-gray-900">
            Votre parcours de <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">digitalisation</span>
          </h2>

          <p className="text-xl sm:text-xl font-light text-gray-600 max-w-3xl mx-auto">
            Commencez par le module qui correspond à vos besoins actuels, puis évoluez vers la solution complète à votre rythme
          </p>
        </motion.div>

        <Tabs defaultValue="menu" className="space-y-12">
          <div className="flex justify-center">
            <div className="bg-white rounded-2xl p-2 shadow-sm border border-gray-100">
              <TabsList className="grid grid-cols-3 bg-transparent gap-1 h-auto">
                <TabsTrigger
                  value="menu"
                  className="flex flex-col items-center gap-3 p-6 rounded-xl data-[state=active]:bg-gradient-to-br data-[state=active]:from-orange-500 data-[state=active]:to-red-500 data-[state=active]:text-white data-[state=active]:shadow-lg transition-all min-w-[180px]"
                >
                  <div className="p-3 rounded-xl bg-orange-100 data-[state=active]:bg-white/20">
                    <ChefHat className="h-6 w-6 text-orange-600 data-[state=active]:text-white" />
                  </div>
                  <div className="text-center">
                    <div className="font-semibold">Menu Digital</div>
                    <div className="text-xs opacity-75 mt-1">Étape 1</div>
                  </div>
                </TabsTrigger>

                <TabsTrigger
                  value="order"
                  className="flex flex-col items-center gap-3 p-6 rounded-xl data-[state=active]:bg-gradient-to-br data-[state=active]:from-blue-500 data-[state=active]:to-purple-500 data-[state=active]:text-white data-[state=active]:shadow-lg transition-all min-w-[180px]"
                >
                  <div className="p-3 rounded-xl bg-blue-100 data-[state=active]:bg-white/20">
                    <Smartphone className="h-6 w-6 text-blue-600 data-[state=active]:text-white" />
                  </div>
                  <div className="text-center">
                    <div className="font-semibold">Order & Pay</div>
                    <div className="text-xs opacity-75 mt-1">Étape 2</div>
                  </div>
                </TabsTrigger>

                <TabsTrigger
                  value="suite"
                  className="flex flex-col items-center gap-3 p-6 rounded-xl data-[state=active]:bg-gradient-to-br data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 data-[state=active]:text-white data-[state=active]:shadow-lg transition-all min-w-[180px]"
                >
                  <div className="p-3 rounded-xl bg-purple-100 data-[state=active]:bg-white/20">
                    <Rocket className="h-6 w-6 text-purple-600 data-[state=active]:text-white" />
                  </div>
                  <div className="text-center">
                    <div className="font-semibold">Suite Complète</div>
                    <div className="text-xs opacity-75 mt-1">Solution totale</div>
                  </div>
                </TabsTrigger>
              </TabsList>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <TabsContent value="menu">
              <AdvancedProductCard
                gradient="from-orange-500 to-red-500"
                title="Menu Digital Intelligent"
                subtitle="Transformez votre carte en expérience interactive"
                description="Remplacez vos menus papier par une solution digitale moderne qui s'adapte en temps réel à votre offre et captive vos clients."
                features={[
                  { title: "QR Codes personnalisés", desc: "Un code unique par table, avec tracking des consultations" },
                  { title: "Photos haute définition", desc: "Images optimisées qui donnent envie, avec zoom et galerie" },
                  { title: "Gestion allergènes", desc: "Filtres automatiques et alertes pour sécuriser vos clients" },
                  { title: "Mises à jour instantanées", desc: "Modifiez prix et disponibilité en temps réel" },
                  { title: "Recommandations IA", desc: "Suggestions personnalisées basées sur les préférences" },
                  { title: "Support multilingue", desc: "Menu automatiquement traduit selon la langue du client" },
                ]}
                stats={[
                  { value: "65%", label: "Réduction temps de consultation" },
                  { value: "28%", label: "Augmentation panier moyen" },
                  { value: "2min", label: "Temps de mise en place" },
                ]}
                price="À partir de 89€/mois"
                demo="Voir un menu démo"
              />
            </TabsContent>

            <TabsContent value="order">
              <AdvancedProductCard
                gradient="from-blue-500 to-purple-500"
                title="Order & Pay - Commande Autonome"
                subtitle="L'autonomie totale pour vos clients"
                description="Permettez à vos clients de commander et payer directement depuis leur smartphone."
                features={[
                  { title: "Commande directe QR", desc: "Scan → Commande → Paiement en 3 clics" },
                  { title: "Panier intelligent", desc: "Suggestions automatiques d'accompagnements et desserts" },
                  { title: "Split automatique", desc: "Division de l'addition entre convives en un clic" },
                  { title: "Paiements sécurisés", desc: "Cartes, PayPal, Apple Pay - toutes méthodes acceptées" },
                  { title: "Notifications temps réel", desc: "Client informé à chaque étape de sa commande" },
                  { title: "Historique détaillé", desc: "Favoris et récommandes facilitées pour fidéliser" },
                ]}
                stats={[
                  { value: "52%", label: "Réduction temps de service" },
                  { value: "4.8/5", label: "Satisfaction client" },
                  { value: "+31%", label: "Rotation des tables" },
                ]}
                price="À partir de 149€/mois"
                demo="Tester une commande"
                popular
              />
            </TabsContent>

            <TabsContent value="suite">
              <AdvancedProductCard
                gradient="from-purple-500 to-pink-500"
                title="Suite Complète Restaurant"
                subtitle="L'écosystème intégral de digitalisation"
                description="La solution tout-en-un qui révolutionne l'expérience client et optimise la gestion de votre établissement."
                features={[
                  { title: "Intégration Menu + Order", desc: "Synergie parfaite entre tous les modules" },
                  { title: "Dashboard Analytics", desc: "Insights détaillés sur ventes, clients et performances" },
                  { title: "Gestion staff complète", desc: "Rôles, permissions et suivi de performance équipe" },
                  { title: "Intégrations POS", desc: "Compatible avec tous les systèmes de caisse existants" },
                  { title: "Programme fidélité", desc: "Points, récompenses et campagnes marketing automatisées" },
                  { title: "API & Webhooks", desc: "Connectivité totale avec vos outils métier" },
                  { title: "Support prioritaire 24/7", desc: "Équipe dédiée et formation continue incluse" },
                  { title: "Onboarding premium", desc: "Accompagnement personnalisé pour optimiser l'adoption" },
                ]}
                stats={[
                  { value: "340%", label: "ROI moyen sur 12 mois" },
                  { value: "48h", label: "Déploiement complet" },
                  { value: "99.9%", label: "Disponibilité garantie" },
                ]}
                price="Solution sur mesure"
                demo="Planifier une démo"
                enterprise
              />
            </TabsContent>
          </motion.div>
        </Tabs>
      </div>
    </section>
  );
}
