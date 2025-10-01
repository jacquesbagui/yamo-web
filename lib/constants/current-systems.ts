// lib/constants/current-systems.ts

export const CURRENT_SYSTEMS = [
  { 
    value: "none", 
    label: "Aucun système",
    description: "Gestion manuelle complète"
  },
  { 
    value: "paper", 
    label: "Menus papier",
    description: "Menus physiques et commandes manuelles"
  },
  { 
    value: "basic_pos", 
    label: "Caisse enregistreuse basique",
    description: "Caisse simple pour encaissement uniquement"
  },
  { 
    value: "advanced_pos", 
    label: "Caisse enregistreuse avancée",
    description: "Caisse avec gestion de stock et rapports"
  },
  { 
    value: "restaurant_software", 
    label: "Logiciel restaurant",
    description: "Solution dédiée (ex: TouchBistro, Square)"
  },
  { 
    value: "erp_system", 
    label: "Système ERP",
    description: "Solution complète (ex: SAP, Oracle)"
  },
  { 
    value: "custom_solution", 
    label: "Solution personnalisée",
    description: "Développement sur mesure"
  },
  { 
    value: "other", 
    label: "Autre",
    description: "Autre système non listé"
  }
] as const;

export type CurrentSystemType = typeof CURRENT_SYSTEMS[number]['value'];

export const CURRENT_SYSTEM_LABELS: Record<CurrentSystemType, string> = {
  none: 'Aucun système',
  paper: 'Menus papier',
  basic_pos: 'Caisse enregistreuse basique',
  advanced_pos: 'Caisse enregistreuse avancée',
  restaurant_software: 'Logiciel restaurant',
  erp_system: 'Système ERP',
  custom_solution: 'Solution personnalisée',
  other: 'Autre',
};
