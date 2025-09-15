"use client";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/TopBar";
import TopBar from "@/components/TopBar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock, Check } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    restaurant: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

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
          company: formData.restaurant,
          note: `Demande de contact: ${formData.message}`,
          value: 0, // Pas de valeur monétaire pour un simple contact
          currency: "EUR",
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus("success");
        toast.success("Message envoyé avec succès!", {
          description: "Nous vous contacterons sous 24h.",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          restaurant: "",
          message: "",
        });
      } else {
        throw new Error(data.error || "Erreur lors de l'envoi");
      }
    } catch (error) {
      setSubmitStatus("error");
      toast.error("Erreur", {
        description: "Une erreur est survenue. Veuillez réessayer.",
      });
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const formatPhoneNumber = (value: string) => {
    // Formatage pour les numéros français (ajustez selon vos besoins)
    const cleaned = value.replace(/\D/g, '');
    const match = cleaned.match(/^(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})$/);
    return match ? `${match[1]} ${match[2]} ${match[3]} ${match[4]} ${match[5]}` : cleaned;
  };

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
              <Mail className="h-8 w-8" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold text-gray-900 sm:text-5xl mb-6"
            >
              Contactez <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">l'équipe Yamo</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto mb-12"
            >
              Une question, une demande spécifique ou besoin d'un devis ?
              Notre équipe est là pour vous aider.
            </motion.p>
          </div>
        </section>

        {/* Contact Form and Info */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-16">
              {/* Formulaire */}
              <div className="mb-12 lg:mb-0">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Envoyez-nous un message</h2>

                {submitStatus === "success" && (
                  <div className="mb-6 p-4 bg-green-50 rounded-lg border border-green-200 flex items-center gap-3">
                    <div className="p-2 bg-green-100 rounded-full text-green-600">
                      <Check className="h-5 w-5" />
                    </div>
                    <div className="text-green-800">
                      <p className="font-medium">Message envoyé avec succès!</p>
                      <p className="text-sm">Nous vous contacterons sous 24h.</p>
                    </div>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="mb-6 p-4 bg-red-50 rounded-lg border border-red-200">
                    <p className="text-red-800 font-medium">
                      Une erreur est survenue. Veuillez réessayer.
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
                      <Label htmlFor="email" className="font-medium">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="exemple@restaurant.fr"
                        required
                        className="focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="font-medium">Téléphone</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => {
                          const formatted = formatPhoneNumber(e.target.value);
                          setFormData({ ...formData, phone: formatted });
                        }}
                        placeholder="Ex: 06 12 34 56 78"
                        className="focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="restaurant" className="font-medium">Nom du restaurant</Label>
                      <Input
                        id="restaurant"
                        value={formData.restaurant}
                        onChange={(e) => setFormData({ ...formData, restaurant: e.target.value })}
                        placeholder="Ex: Le Bistrot Parisien"
                        className="focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="font-medium">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Décrivez votre demande..."
                      className="min-h-[120px] focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg transition-colors disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="animate-pulse">Envoi en cours</span>
                        <span className="ml-2">...</span>
                      </>
                    ) : (
                      "Envoyer le message"
                    )}
                  </Button>
                </form>
              </div>

              {/* Informations de contact */}
              <div className="bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl p-8 text-white">
                <h2 className="text-2xl font-bold mb-6">Nos coordonnées</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-white/20">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <a href="mailto:contact@yamo.app" className="hover:underline">contact@yamo.app</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-white/20">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Téléphone</h3>
                      <a href="tel:+33123456789" className="hover:underline">+33 1 23 45 67 89</a>
                      <p className="text-sm opacity-90">Lun-Ven, 9h-18h</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-white/20">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Adresse</h3>
                      <p>123 Rue de Paris</p>
                      <p>75000 Paris, France</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-white/20">
                      <Clock className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Horaires</h3>
                      <p>Lundi - Vendredi</p>
                      <p>9:00 - 18:00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Où nous trouver</h2>
            <div className="aspect-video rounded-xl overflow-hidden border border-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.991615295543!2d2.332269415674538!3d48.86061107925845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sTour%20Eiffel!5e0!3m2!1sfr!2sfr!4v1620000000000!5m2!1sfr!2sfr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
