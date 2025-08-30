"use client";
import { Badge } from "@/components/ui/badge";

export default function TopBar() {
  return (
    <div className="bg-gradient-to-r from-orange-600 via-orange-600 to-white text-white text-center text-sm py-3 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative z-10 flex items-center justify-center gap-2">
        <Badge variant="secondary" className="bg-white/20 text-white border-white/30 hover:bg-white/30">
          Nouveau
        </Badge>
        <span className="font-medium">
          Suite complète Restaurant : Menu Digital + Commande + Paiement
        </span>
        <a href="#demo" className="ml-2 underline underline-offset-2 hover:no-underline font-medium">
          Essayer gratuitement →
        </a>
      </div>
    </div>
  );
}
