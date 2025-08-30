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

export default function ContactSalesModal() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    restaurantName: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Merci, ${formData.name}! Nous vous contactons sous 24h pour discuter de vos besoins.`);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full font-medium bg-gray-900 hover:bg-gray-800 text-white">
          Nous contacter
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold text-gray-900">
            Solution sur mesure
          </DialogTitle>
          <DialogDescription className="text-gray-600">
            Parlez à un expert pour une offre adaptée à vos besoins.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="contact-name" className="font-medium">
                Nom complet
              </Label>
              <Input
                id="contact-name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Ex: Jean Dupont"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="contact-email" className="font-medium">
                Email
              </Label>
              <Input
                id="contact-email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="exemple@restaurant.fr"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="restaurant-name" className="font-medium">
                Nom du restaurant
              </Label>
              <Input
                id="restaurant-name"
                value={formData.restaurantName}
                onChange={(e) => setFormData({ ...formData, restaurantName: e.target.value })}
                placeholder="Ex: Le Bistrot Parisien"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="message" className="font-medium">
                Message
              </Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Décrivez vos besoins..."
                className="min-h-[100px]"
                required
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" className="w-full bg-gray-900 hover:bg-gray-800 text-white">
              Envoyer la demande
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
