"use client";
import Link from "next/link";

const footerLinks = {
  produit: [
    { name: "Menu Digital", href: "/produits/menu-digital" },
    { name: "Order & Pay", href: "/produits/order-pay" },
    { name: "Analytics", href: "/produits/analytics" },
    { name: "Intégrations", href: "/produits/integrations" },
  ],
  support: [
    { name: "Centre d'aide", href: "/support" },
    { name: "Documentation", href: "/docs" },
    { name: "Contact", href: "/contact" },
    { name: "À propos de nous", href: "/about" },
  ],
};

const legalLinks = [
  { name: "Conditions générales", href: "/cgu" },
  { name: "Politique de confidentialité", href: "/privacy" },
  { name: "Cookies", href: "/cookies" },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        {/* Section principale */}
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Description de l'entreprise */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl font-light tracking-tight">Yamo</span>
            </div>
            <p className="text-gray-600 font-light max-w-md">
              La suite complète pour digitaliser et moderniser votre restaurant.
            </p>
          </div>

          {/* Liens Produits et Support */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-medium text-gray-900 mb-4 capitalize">
                {category}
              </h4>
              <ul className="space-y-2 text-gray-600 font-light">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="hover:text-gray-900 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Séparateur et liens légaux en inline */}
        <div className="mt-12 pt-8 border-t border-gray-100">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6">
            {/* Liens légaux en inline */}
            <div className="flex flex-wrap gap-6 justify-center md:justify-start">
              {legalLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-500 hover:text-gray-900 text-sm font-light transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Copyright */}
            <p className="text-gray-500 font-light text-sm text-center md:text-right">
              © 2025 Yamo. Tous droits réservés.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
