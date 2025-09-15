"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight, MapPin, Users, ChefHat } from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const AFRICAN_COUNTRIES = [
  { code: "CI", name: "Côte d'Ivoire", flag: "🇨🇮", phoneCode: "225" },
  { code: "SN", name: "Sénégal", flag: "🇸🇳", phoneCode: "221" },
  { code: "BF", name: "Burkina Faso", flag: "🇧🇫", phoneCode: "226" },
  { code: "ML", name: "Mali", flag: "🇲🇱", phoneCode: "223" },
  { code: "GH", name: "Ghana", flag: "🇬🇭", phoneCode: "233" },
  { code: "TG", name: "Togo", flag: "🇹🇬", phoneCode: "228" },
  { code: "BJ", name: "Bénin", flag: "🇧🇯", phoneCode: "229" },
];

const RESTAURANT_TYPES = [
  { value: "restaurant_traditionnel", label: "Restaurant traditionnel" },
  { value: "maquis", label: "Maquis" },
  { value: "cafe_restaurant", label: "Café-restaurant" },
  { value: "fast_food", label: "Fast-food" },
  { value: "hotel_restaurant", label: "Hôtel-restaurant" },
  { value: "bar_restaurant", label: "Bar-restaurant" },
  { value: "autre", label: "Autre" },
];

export default function StartFreeTrialModal() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "CI",
    city: "",
    restaurantName: "",
    restaurantType: "",
    covers: "",
    currentSystem: "",
  });
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const formatPhoneNumber = (value: string) => {
    const cleaned = value.replace(/\D/g, "");
    const match = cleaned.match(/^(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})$/);
    return match ? `${match[1]} ${match[2]} ${match[3]} ${match[4]} ${match[5]}` : cleaned;
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      country: "CI",
      city: "",
      restaurantName: "",
      restaurantType: "",
      covers: "",
      currentSystem: "",
    });
    setStep(1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const country = AFRICAN_COUNTRIES.find((c) => c.code === formData.country);
    const fullPhone = `+${country?.phoneCode} ${formData.phone}`;

    try {
      const res = await fetch("/api/pipedrive", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: fullPhone,
          company: formData.restaurantName,
          note: `
            Essai gratuit demandé pour ${formData.restaurantName} (${formData.restaurantType}).
            Ville: ${formData.city}, ${country?.name}.
            Nombre de places: ${formData.covers}.
            Système actuel: ${formData.currentSystem || "Aucun"}.
          `,
          value: 0, // Essai gratuit
        }),
      });

      const data = await res.json();

      if (data.success) {
        toast.success("Succès !", {
          description: `Votre essai gratuit de 14 jours est activé. Consultez votre email pour les détails de connexion.`,
        });

        setOpen(false);
        resetForm();
      } else {
        throw new Error(data.error || "Échec de la création du lead.");
      }
    } catch (err) {
      toast.error("Erreur", {
        description: err instanceof Error ? err.message : "Une erreur est survenue. Veuillez réessayer.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="lg" className="cursor-pointer bg-gradient-to-r font-bold from-orange-500 to-red-500 hover:opacity-90 text-white rounded-full shadow-lg">
          Démarrer l'essai gratuit
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
              <ChefHat className="w-4 h-4 text-white" />
            </div>
            Essai gratuit 14 jours
          </DialogTitle>
          <DialogDescription className="text-gray-600">
            <strong>100% gratuit</strong> • Aucune carte bancaire requise • Configuration en moins de 5 minutes • Support WhatsApp inclus
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6">
          {step === 1 && (
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                <Users className="w-5 h-5" />
                Informations personnelles
              </h3>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="name" className="font-medium">
                    Nom complet *
                  </Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Ex: Amadou Diallo"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email" className="font-medium">
                    Email professionnel *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="amadou@restaurant-teranga.ci"
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="country" className="font-medium">
                      Pays *
                    </Label>
                    <select
                      id="country"
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      className="border rounded-md p-2 bg-white"
                      required
                    >
                      {AFRICAN_COUNTRIES.map((country) => (
                        <option key={country.code} value={country.code}>
                          {country.flag} {country.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="city" className="font-medium">
                      Ville *
                    </Label>
                    <Input
                      id="city"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      placeholder="Ex: Abidjan, Dakar..."
                      required
                    />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="phone" className="font-medium">
                    Téléphone WhatsApp
                  </Label>
                  <div className="flex gap-2">
                    <div className="w-20 text-sm bg-gray-100 rounded-md p-2 flex items-center justify-center">
                      +{AFRICAN_COUNTRIES.find((c) => c.code === formData.country)?.phoneCode}
                    </div>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => {
                        const formatted = formatPhoneNumber(e.target.value);
                        setFormData({ ...formData, phone: formatted });
                      }}
                      placeholder="XX XX XX XX XX"
                      className="flex-1"
                    />
                  </div>
                  <p className="text-xs text-gray-500">Pour recevoir les notifications et le support</p>
                </div>
                <Button type="button" onClick={() => setStep(2)} className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:opacity-90">
                  Continuer
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          )}
          {step === 2 && (
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                Votre restaurant
              </h3>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="restaurantName" className="font-medium">
                    Nom de l'établissement *
                  </Label>
                  <Input
                    id="restaurantName"
                    value={formData.restaurantName}
                    onChange={(e) => setFormData({ ...formData, restaurantName: e.target.value })}
                    placeholder="Ex: Restaurant Teranga"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="restaurantType" className="font-medium">
                    Type d'établissement *
                  </Label>
                  <select
                    id="restaurantType"
                    value={formData.restaurantType}
                    onChange={(e) => setFormData({ ...formData, restaurantType: e.target.value })}
                    className="border rounded-md p-2 bg-white"
                    required
                  >
                    <option value="">Sélectionnez...</option>
                    {RESTAURANT_TYPES.map((type) => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="covers" className="font-medium">
                      Nombre de places
                    </Label>
                    <Input
                      id="covers"
                      type="number"
                      value={formData.covers}
                      onChange={(e) => setFormData({ ...formData, covers: e.target.value })}
                      placeholder="Ex: 40"
                      min="1"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="currentSystem" className="font-medium">
                      Système actuel
                    </Label>
                    <select
                      id="currentSystem"
                      value={formData.currentSystem}
                      onChange={(e) => setFormData({ ...formData, currentSystem: e.target.value })}
                      className="border rounded-md p-2 bg-white"
                    >
                      <option value="">Aucun</option>
                      <option value="paper">Menus papier</option>
                      <option value="pos">Caisse enregistreuse</option>
                      <option value="other_software">Autre logiciel</option>
                    </select>
                  </div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-medium text-blue-900 mb-2">Ce qui vous attend dans votre essai :</h4>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>✓ Configuration complète en 5 minutes</li>
                    <li>✓ QR codes personnalisés pour vos tables</li>
                    <li>✓ Menu digital avec photos</li>
                    <li>✓ Commandes et paiements en ligne</li>
                    <li>✓ Support WhatsApp dédié</li>
                  </ul>
                </div>
                <div className="flex gap-3">
                  <Button type="button" onClick={() => setStep(1)} variant="outline" className="flex-1">
                    Retour
                  </Button>
                  <Button type="submit" disabled={isLoading} className="flex-1 bg-gradient-to-r from-orange-500 to-red-500 hover:opacity-90">
                    {isLoading ? "Chargement..." : "Contactez-nous pour démarrer"}
                  </Button>
                </div>
              </div>
            </div>
          )}
        </form>
        <div className="text-center text-xs text-gray-500 pt-4 border-t">
          En continuant, vous acceptez nos conditions d'utilisation et notre politique de confidentialité. Données hébergées en sécurité sur AWS.
        </div>
      </DialogContent>
    </Dialog>
  );
}
