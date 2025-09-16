"use client";
import { Badge } from "@/components/ui/badge";

export default function TopBar() {
  return (
    <div className="bg-gradient-to-r from-orange-600 via-orange-500 to-white text-white text-center py-2 px-3 relative overflow-hidden">
      {/* Overlay pour un meilleur contraste */}
      <div className="absolute inset-0 bg-black/15"></div>

      <div className="relative z-10 container mx-auto">
        <div className="flex items-center justify-center gap-1 sm:gap-2">
          {/* Badge visible sur tous les écrans */}
          <Badge
            variant="secondary"
            className="bg-white/20 text-white border-white/30 hover:bg-white/30 text-[10px] sm:text-xs"
          >
            Nouveau
          </Badge>

          {/* Texte principal - version mobile simplifiée */}
          <span className="text-[11px] sm:text-sm font-medium">
            Suite Restaurant
          </span>

          {/* Texte détaillé - caché sur mobile */}
          <span className="hidden sm:inline text-[11px] sm:text-sm">
            : Menu Digital + Commande + Paiement
          </span>

          {/* Bouton - texte plus court sur mobile */}
          <a
            href="/demo"
            className="ml-1 sm:ml-2 underline underline-offset-2 hover:no-underline text-[11px] sm:text-sm font-medium whitespace-nowrap"
          >
            Planifier une démo →
          </a>
        </div>
      </div>
    </div>
  );
}
