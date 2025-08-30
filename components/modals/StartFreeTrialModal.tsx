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
import { ArrowRight } from "lucide-react";

export default function StartFreeTrialModal() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    restaurantType: "",
    covers: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Merci, ${formData.name}! Votre essai gratuit commence maintenant.`);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="lg" className="bg-orange-500 hover:bg-orange-400 text-white rounded-full shadow-lg">
          Démarrer gratuitement
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold text-gray-900">
            Essai gratuit 14 jours
          </DialogTitle>
          <DialogDescription className="text-gray-600">
            Aucune carte bancaire requise. Annulez à tout moment.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="name" className="font-medium">
                Nom complet
              </Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Ex: Jean Dupont"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email" className="font-medium">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="exemple@restaurant.fr"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="phone" className="font-medium">
                Téléphone
              </Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => {
                  const formatted = e.target.value.replace(/(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/, "$1 $2 $3 $4 $5");
                  setFormData({ ...formData, phone: formatted });
                }}
                placeholder="Ex: 06 12 34 56 78"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="restaurantType" className="font-medium">
                Type d'établissement
              </Label>
              <select
                id="restaurantType"
                value={formData.restaurantType}
                onChange={(e) => setFormData({ ...formData, restaurantType: e.target.value })}
                className="border rounded-md p-2"
                required
              >
                <option value="">Sélectionnez...</option>
                <option value="restaurant">Restaurant</option>
                <option value="cafe">Café</option>
                <option value="bar">Bar</option>
                <option value="hotel">Hôtel</option>
              </select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="covers" className="font-medium">
                Nombre de couverts
              </Label>
              <Input
                id="covers"
                type="number"
                value={formData.covers}
                onChange={(e) => setFormData({ ...formData, covers: e.target.value })}
                placeholder="Ex: 50"
                min="1"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" className="w-full bg-orange-600 hover:bg-orange-700">
              Commencer l'essai gratuit
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
