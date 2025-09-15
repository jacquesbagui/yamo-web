// components/modals/ContactSalesModal.tsx
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
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Building2,
  Users,
  Crown,
  Calendar,
  MessageSquare,
  Phone,
  Mail,
} from "lucide-react";
import { toast } from "sonner"

const BUSINESS_SIZES = [
  { value: "single", label: "Restaurant unique", icon: "🏪" },
  { value: "small_chain", label: "Petite chaîne (2-5 restaurants)", icon: "🏢" },
  { value: "medium_chain", label: "Chaîne moyenne (6-20 restaurants)", icon: "🏬" },
  { value: "large_chain", label: "Grande chaîne (20+ restaurants)", icon: "🏭" },
  { value: "franchise", label: "Franchise", icon: "🌐" },
  { value: "hotel_group", label: "Groupe hôtelier", icon: "🏨" },
];

const PRIORITIES = [
  { value: "pricing", label: "Tarification personnalisée" },
  { value: "integration", label: "Intégrations spécifiques" },
  { value: "multi_location", label: "Gestion multi-sites" },
  { value: "white_label", label: "White-labeling" },
  { value: "custom_features", label: "Fonctionnalités sur mesure" },
  { value: "migration", label: "Migration de données" },
  { value: "training", label: "Formation équipes" },
  { value: "sla", label: "SLA et support dédié" },
];

export default function ContactSalesModal() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    position: "",
    businessSize: "",
    currentRevenue: "",
    priorities: [] as string[],
    timeline: "",
    message: "",
    preferredContact: "email",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch("/api/pipedrive", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          note: `
            Demande de solution Enterprise pour ${formData.company}.
            Taille: ${BUSINESS_SIZES.find((s) => s.value === formData.businessSize)?.label}.
            Priorités: ${formData.priorities.join(", ")}.
            Délai: ${formData.timeline}.
            Message: ${formData.message}.
            Contact préféré: ${formData.preferredContact}.
          `,
          value: 5000, // Valeur estimée pour un lead Enterprise
          currency: "XOF",
        }),
      });

      const data = await res.json();
      if (data.success) {
        toast("Merci !",{
          description: `Notre équipe Enterprise vous contactera pour discuter de votre projet.`,
        });
      } else {
        throw new Error(data.error || "Échec de la création du lead.");
      }
    } catch (err) {
      toast("Erreur",{
        description: "Une erreur est survenue. Veuillez réessayer."
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handlePriorityToggle = (priority: string) => {
    setFormData((prev) => ({
      ...prev,
      priorities: prev.priorities.includes(priority)
        ? prev.priorities.filter((p) => p !== priority)
        : [...prev.priorities, priority],
    }));
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="cursor-pointer font-bold w-full font-medium bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90 text-white">
          <Crown className="w-4 h-4 mr-2" />
          Solution Enterprise
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-900 flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
              <Building2 className="w-5 h-5 text-white" />
            </div>
            Solution Enterprise sur mesure
          </DialogTitle>
          <DialogDescription className="text-gray-600">
            Discutons de vos besoins spécifiques pour créer une solution parfaitement adaptée à votre organisation.
            <div className="mt-2 flex gap-2">
              <Badge className="bg-purple-100 text-purple-800">
                <Phone className="w-3 h-3 mr-1" />
                Réponse sous 4h
              </Badge>
              <Badge className="bg-blue-100 text-blue-800">
                <Calendar className="w-3 h-3 mr-1" />
                Démo personnalisée
              </Badge>
            </div>
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Informations personnelles */}
          <div className="grid gap-4">
            <h3 className="font-semibold text-gray-900 flex items-center gap-2">
              <Users className="w-5 h-5" />
              Contact principal
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="contact-name" className="font-medium">
                  Nom complet *
                </Label>
                <Input
                  id="contact-name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Ex: Marie Dubois"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="position" className="font-medium">
                  Fonction *
                </Label>
                <Input
                  id="position"
                  value={formData.position}
                  onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                  placeholder="Ex: Directeur général, COO..."
                  required
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="contact-email" className="font-medium">
                  Email professionnel *
                </Label>
                <Input
                  id="contact-email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="marie@chainerestaurants.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="contact-phone" className="font-medium">
                  Téléphone
                </Label>
                <Input
                  id="contact-phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+225 XX XX XX XX XX"
                />
              </div>
            </div>
          </div>

          {/* Informations entreprise */}
          <div className="grid gap-4">
            <h3 className="font-semibold text-gray-900 flex items-center gap-2">
              <Building2 className="w-5 h-5" />
              Votre organisation
            </h3>
            <div className="grid gap-2">
              <Label htmlFor="company" className="font-medium">
                Nom de l'entreprise/Groupe *
              </Label>
              <Input
                id="company"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                placeholder="Ex: Groupe Restaurants Teranga"
                required
              />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="businessSize" className="font-medium">
                  Taille de l'organisation *
                </Label>
                <select
                  id="businessSize"
                  value={formData.businessSize}
                  onChange={(e) => setFormData({ ...formData, businessSize: e.target.value })}
                  className="border rounded-md p-2 bg-white"
                  required
                >
                  <option value="">Sélectionnez...</option>
                  {BUSINESS_SIZES.map((size) => (
                    <option key={size.value} value={size.value}>
                      {size.icon} {size.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="timeline" className="font-medium">
                  Délai de mise en œuvre
                </Label>
                <select
                  id="timeline"
                  value={formData.timeline}
                  onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                  className="border rounded-md p-2 bg-white"
                >
                  <option value="">Sélectionnez...</option>
                  <option value="immediate">Immédiat (&lt; 1 mois)</option>
                  <option value="short">Court terme (1-3 mois)</option>
                  <option value="medium">Moyen terme (3-6 mois)</option>
                  <option value="long">Long terme (&gt; 6 mois)</option>
                  <option value="exploring">En phase d'exploration</option>
                </select>
              </div>
            </div>
          </div>

          {/* Besoins et priorités */}
          <div className="grid gap-4">
            <h3 className="font-semibold text-gray-900">Vos priorités</h3>
            <div className="grid md:grid-cols-2 gap-3">
              {PRIORITIES.map((priority) => (
                <label
                  key={priority.value}
                  className={`flex items-center gap-3 p-3 border rounded-lg cursor-pointer transition-colors ${
                    formData.priorities.includes(priority.value) ? "border-purple-300 bg-purple-50" : "border-gray-200 hover:bg-gray-50"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={formData.priorities.includes(priority.value)}
                    onChange={() => handlePriorityToggle(priority.value)}
                    className="sr-only"
                  />
                  <div
                    className={`w-4 h-4 rounded border-2 ${
                      formData.priorities.includes(priority.value) ? "bg-purple-600 border-purple-600" : "border-gray-300"
                    }`}
                  >
                    {formData.priorities.includes(priority.value) && (
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-sm"></div>
                      </div>
                    )}
                  </div>
                  <span className="text-sm text-gray-700">{priority.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Message */}
          <div className="grid gap-2">
            <Label htmlFor="message" className="font-medium">
              Décrivez votre projet et vos besoins spécifiques
            </Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Ex: Nous gérons 12 restaurants en Côte d'Ivoire et souhaitons une solution complète avec intégration à notre ERP existant..."
              className="min-h-[120px]"
              required
            />
          </div>

          {/* Contact préféré */}
          <div className="grid gap-3">
            <Label className="font-medium">Méthode de contact préférée</Label>
            <div className="flex gap-4">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  value="email"
                  checked={formData.preferredContact === "email"}
                  onChange={(e) => setFormData({ ...formData, preferredContact: e.target.value })}
                  className="text-purple-600"
                />
                <Mail className="w-4 h-4" />
                <span className="text-sm">Email</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  value="phone"
                  checked={formData.preferredContact === "phone"}
                  onChange={(e) => setFormData({ ...formData, preferredContact: e.target.value })}
                  className="text-purple-600"
                />
                <Phone className="w-4 h-4" />
                <span className="text-sm">Téléphone</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  value="whatsapp"
                  checked={formData.preferredContact === "whatsapp"}
                  onChange={(e) => setFormData({ ...formData, preferredContact: e.target.value })}
                  className="text-purple-600"
                />
                <MessageSquare className="w-4 h-4" />
                <span className="text-sm">WhatsApp</span>
              </label>
            </div>
          </div>

          <DialogFooter>
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90 text-white"
            >
              {isLoading ? "Envoi en cours..." : "Envoyer la demande"}
            </Button>
          </DialogFooter>
        </form>
        <div className="text-center text-xs text-gray-500 pt-4 border-t">
          <div className="flex items-center justify-center gap-4 mb-2">
            <Badge className="bg-green-100 text-green-800">
              <Phone className="w-3 h-3 mr-1" />
              Réponse garantie sous 4h
            </Badge>
            <Badge className="bg-blue-100 text-blue-800">
              <Calendar className="w-3 h-3 mr-1" />
              Démo sur mesure incluse
            </Badge>
          </div>
          Vos données sont sécurisées et ne seront jamais partagées avec des tiers.
        </div>
      </DialogContent>
    </Dialog>
  );
}
