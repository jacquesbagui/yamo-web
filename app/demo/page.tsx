"use client";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TopBar from "@/components/TopBar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Check, Calendar, Clock, Users, Building2, Phone, Mail, Video } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

export default function DemoRequest() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    restaurantName: "",
    restaurantType: "",
    employeeCount: "",
    currentSystem: "",
    preferredDate: "",
    preferredTime: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const restaurantTypes = [
    { value: "traditional", label: "Restaurant traditionnel" },
    { value: "fast_food", label: "Fast food" },
    { value: "cafe", label: "Café/restaurant" },
    { value: "hotel", label: "Hôtel/restaurant" },
    { value: "bar", label: "Bar/restaurant" },
    { value: "food_truck", label: "Food truck" },
    { value: "other", label: "Autre" }
  ];

  const employeeCounts = [
    { value: "1-5", label: "1-5 employés" },
    { value: "6-20", label: "6-20 employés" },
    { value: "21-50", label: "21-50 employés" },
    { value: "50+", label: "Plus de 50 employés" }
  ];

  const currentSystems = [
    { value: "none", label: "Aucun système" },
    { value: "paper", label: "Menus papier" },
    { value: "pos", label: "Caisse enregistreuse" },
    { value: "other_software", label: "Autre logiciel" }
  ];

  const timeSlots = [
    { value: "09:00", label: "09:00" },
    { value: "10:00", label: "10:00" },
    { value: "11:00", label: "11:00" },
    { value: "14:00", label: "14:00" },
    { value: "15:00", label: "15:00" },
    { value: "16:00", label: "16:00" }
  ];

  const formatPhoneNumber = (value: string) => {
    const cleaned = value.replace(/\D/g, '');
    const match = cleaned.match(/^(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})$/);
    return match ? `${match[1]} ${match[2]} ${match[3]} ${match[4]} ${match[5]}` : cleaned;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/pipedrive", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.restaurantName,
          note: `
            Demande de démo pour ${formData.restaurantName} (${restaurantTypes.find(t => t.value === formData.restaurantType)?.label || formData.restaurantType}).
            Type: ${formData.restaurantType}
            Employés: ${formData.employeeCount}
            Système actuel: ${currentSystems.find(s => s.value === formData.currentSystem)?.label || formData.currentSystem}
            Date préférée: ${formData.preferredDate}
            Heure préférée: ${formData.preferredTime}
            Message: ${formData.message}
          `,
          value: 0,
          currency: "EUR",
          customFields: {
            demo_date: formData.preferredDate,
            demo_time: formData.preferredTime,
            restaurant_type: formData.restaurantType,
            employee_count: formData.employeeCount
          }
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus("success");
        toast.success("Demande de démo envoyée avec succès!", {
          description: "Nous vous contacterons sous 24h pour confirmer votre rendez-vous.",
        });

        // Réinitialisation partielle du formulaire (garde le nom et email pour confirmation)
        setFormData(prev => ({
          ...prev,
          phone: "",
          restaurantName: "",
          restaurantType: "",
          employeeCount: "",
          currentSystem: "",
          preferredDate: "",
          preferredTime: "",
          message: ""
        }));
      } else {
        throw new Error(data.error || "Erreur lors de l'envoi");
      }
    } catch (error) {
      setSubmitStatus("error");
      toast.error("Erreur", {
        description: error instanceof Error ? error.message : "Une erreur est survenue. Veuillez réessayer.",
      });
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <TopBar />
      <Header mobileMenuOpen={false} setMobileMenuOpen={() => {}} />

      <main className="bg-gray-50">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 text-white mb-6 mx-auto"
            >
              <Video className="h-8 w-8" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold text-gray-900 sm:text-5xl mb-6"
            >
              Découvrez Yamo en <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">démo personnalisée</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto mb-12"
            >
              Une démonstration gratuite de 30 minutes pour voir comment Yamo peut transformer votre restaurant.
            </motion.p>

            <div className="flex justify-center gap-4 flex-wrap">
              <Card className="p-4 bg-white shadow-sm flex items-center gap-3">
                <Calendar className="h-5 w-5 text-blue-600" />
                <span className="text-sm font-medium">Démo en 30 minutes</span>
              </Card>
              <Card className="p-4 bg-white shadow-sm flex items-center gap-3">
                <Users className="h-5 w-5 text-blue-600" />
                <span className="text-sm font-medium">Adaptée à votre restaurant</span>
              </Card>
              <Card className="p-4 bg-white shadow-sm flex items-center gap-3">
                <Check className="h-5 w-5 text-blue-600" />
                <span className="text-sm font-medium">Sans engagement</span>
              </Card>
            </div>
          </div>
        </section>

        {/* Demo Request Form */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="p-8 bg-white shadow-lg rounded-xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Planifiez votre démo</h2>
              <p className="text-gray-600 mb-8">Remplissez ce formulaire et nous vous contacterons pour organiser une démonstration personnalisée.</p>

              {submitStatus === "success" && (
                <div className="mb-6 p-4 bg-green-50 rounded-lg border border-green-200 flex items-center gap-3">
                  <div className="p-2 bg-green-100 rounded-full text-green-600">
                    <Check className="h-5 w-5" />
                  </div>
                  <div className="text-green-800">
                    <p className="font-medium">Demande envoyée avec succès!</p>
                    <p className="text-sm">Nous vous contacterons sous 24h pour confirmer votre rendez-vous.</p>
                  </div>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="mb-6 p-4 bg-red-50 rounded-lg border border-red-200">
                  <p className="text-red-800 font-medium">
                    Une erreur est survenue. Veuillez réessayer ou nous contacter directement.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="font-medium">Nom complet *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Ex: Jean Dupont"
                      required
                      className="focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="font-medium">Email professionnel *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jean@restaurant.fr"
                      required
                      className="focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="font-medium">Téléphone *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => {
                        const formatted = formatPhoneNumber(e.target.value);
                        setFormData({ ...formData, phone: formatted });
                      }}
                      placeholder="Ex: 06 12 34 56 78"
                      required
                      className="focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="restaurantName" className="font-medium">Nom du restaurant *</Label>
                    <Input
                      id="restaurantName"
                      value={formData.restaurantName}
                      onChange={(e) => setFormData({ ...formData, restaurantName: e.target.value })}
                      placeholder="Ex: Le Bistrot Parisien"
                      required
                      className="focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                  <div className="space-y-2">
                    <Label htmlFor="restaurantType" className="font-medium">Type de restaurant *</Label>
                    <Select
                      value={formData.restaurantType}
                      onValueChange={(value: string) => setFormData({ ...formData, restaurantType: value })}
                      required
                    >
                      <SelectTrigger className="focus:ring-2 focus:ring-blue-500">
                        <SelectValue placeholder="Sélectionnez un type" />
                      </SelectTrigger>
                      <SelectContent>
                        {restaurantTypes.map((type) => (
                          <SelectItem key={type.value} value={type.value}>
                            {type.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="employeeCount" className="font-medium">Nombre d'employés</Label>
                    <Select
                      value={formData.employeeCount}
                      onValueChange={(value: string) => setFormData({ ...formData, employeeCount: value })}
                    >
                      <SelectTrigger className="focus:ring-2 focus:ring-blue-500">
                        <SelectValue placeholder="Sélectionnez" />
                      </SelectTrigger>
                      <SelectContent>
                        {employeeCounts.map((count) => (
                          <SelectItem key={count.value} value={count.value}>
                            {count.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="currentSystem" className="font-medium">Système actuel</Label>
                    <Select
                      value={formData.currentSystem}
                      onValueChange={(value: string) => setFormData({ ...formData, currentSystem: value })}
                    >
                      <SelectTrigger className="focus:ring-2 focus:ring-blue-500">
                        <SelectValue placeholder="Sélectionnez" />
                      </SelectTrigger>
                      <SelectContent>
                        {currentSystems.map((system) => (
                          <SelectItem key={system.value} value={system.value}>
                            {system.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="preferredDate" className="font-medium">Date préférée *</Label>
                    <Input
                      id="preferredDate"
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      required
                      className="focus:ring-2 focus:ring-blue-500"
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="preferredTime" className="font-medium">Heure préférée *</Label>
                    <Select
                      value={formData.preferredTime}
                      onValueChange={(value: string) => setFormData({ ...formData, preferredTime: value })}
                      required
                    >
                      <SelectTrigger className="focus:ring-2 focus:ring-blue-500">
                        <SelectValue placeholder="Sélectionnez une heure" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((slot) => (
                          <SelectItem key={slot.value} value={slot.value}>
                            {slot.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="font-medium">Message (optionnel)</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Quels sont vos principaux défis ? Qu'aimeriez-vous voir lors de la démo ?"
                    className="min-h-[100px] focus:ring-2 focus:ring-blue-500"
                    rows={4}
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 text-lg font-medium transition-all disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <span className="animate-pulse">Envoi en cours</span>
                      <span className="ml-2">...</span>
                    </>
                  ) : (
                    "Planifier ma démo gratuite"
                  )}
                </Button>
              </form>

              <div className="mt-8 text-center text-sm text-gray-500">
                <p>Nous respectons votre vie privée. Vos données ne seront jamais partagées.</p>
              </div>
            </Card>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-12">Questions fréquentes</h2>

            <div className="space-y-8">
              {[
                {
                  question: "Combien de temps dure la démo ?",
                  answer: "Nos démonstrations durent généralement 30 minutes. Nous adaptons cette durée selon vos besoins spécifiques et le temps dont vous disposez."
                },
                {
                  question: "Dois-je installer quelque chose pour la démo ?",
                  answer: "Non, aucune installation n'est nécessaire. La démo se fait en ligne via un partage d'écran. Vous n'aurez besoin que d'une connexion internet et d'un navigateur web."
                },
                {
                  question: "Qui animera la démo ?",
                  answer: "Un de nos experts produits, spécialisé dans les solutions pour restaurants, animera votre démo. Il répondra à toutes vos questions techniques et métiers."
                },
                {
                  question: "Puis-je inviter des collègues à la démo ?",
                  answer: "Bien sûr ! Nous encourageons même la participation de plusieurs membres de votre équipe (gérant, chef, responsable de salle) pour répondre à toutes vos questions."
                },
                {
                  question: "Que se passe-t-il après la démo ?",
                  answer: "Après la démo, nous vous envoyons un récapitulatif des fonctionnalités présentées ainsi qu'une offre personnalisée si vous souhaitez aller plus loin. Aucune obligation d'achat bien sûr !"
                }
              ].map((item, index) => (
                <div key={index} className="border-b border-gray-200 pb-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{item.question}</h3>
                  <p className="text-gray-600">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
