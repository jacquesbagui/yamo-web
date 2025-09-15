// components/modals/DemoModal.tsx
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
import { toast } from "sonner"

export default function DemoModal() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      date: "",
      time: "",
    });
  }

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
          note: `Demande de démo planifiée pour ${formData.date} à ${formData.time}.`,
          value: 0, // Pas de valeur monétaire pour une démo
        }),
      });

      const data = await res.json();
      if (data.success) {
        toast("Succès !",{
          description: `Votre démo a été planifiée pour ${formData.date} à ${formData.time}.`,
        });
        setOpen(false);
        resetForm();
      } else {
        throw new Error(data.error || "Échec de la création du lead.");
      }
    } catch (err) {
      toast.error("Erreur", {
        description: "Une erreur est survenue. Veuillez réessayer."
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="cursor-pointer rounded-full font-bold border-gray-300 hover:bg-gray-50">
          Voir une démo
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold text-gray-900">
            Planifier une démo
          </DialogTitle>
          <DialogDescription className="text-gray-600">
            Découvrez Yamo en 15 minutes avec un expert.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="demo-name" className="font-medium">
                  Nom *
                </Label>
                <Input
                  id="demo-name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Ex: Marie"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="demo-email" className="font-medium">
                  Email *
                </Label>
                <Input
                  id="demo-email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="exemple@restaurant.fr"
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="demo-date" className="font-medium">
                  Date *
                </Label>
                <Input
                  id="demo-date"
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="demo-time" className="font-medium">
                  Heure *
                </Label>
                <Input
                  id="demo-time"
                  type="time"
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  required
                />
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" disabled={isLoading} className="w-full bg-gray-900 hover:bg-gray-800 text-white">
              {isLoading ? "Envoi en cours..." : "Confirmer la démo"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
