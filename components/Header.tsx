"use client";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import DemoModal from "@/components/modals/DemoModal";

export default function Header({
  mobileMenuOpen,
  setMobileMenuOpen,
}: {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (value: boolean) => void;
}) {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-xl supports-[backdrop-filter]:bg-white/80 border-b border-gray-100/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center gap-3">
            <a href="/">
              <span className="text-2xl tracking-tight">Yamo</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 text-md font-medium">
            {['Produits', 'Solutions', 'Tarifs', 'Ressources', 'Demo'].map((item) => (
              <a
                key={item}
                href={`/#${item.toLowerCase()}`}
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200 py-2 px-1"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <DemoModal />
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-gray-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="lg:hidden absolute top-20 left-0 right-0 bg-white shadow-lg py-4 border-t border-gray-100">
              <nav className="flex flex-col space-y-4 px-4">
                {['Produits', 'Solutions', 'Tarifs', 'Ressources'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-600 hover:text-gray-900 py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
