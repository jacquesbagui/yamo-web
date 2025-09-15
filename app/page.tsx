"use client";
import { useState } from "react";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import ProductsTabs from "@/components/sections/ProductsTabs";
import Testimonials from "@/components/sections/Testimonials";
import Pricing from "@/components/sections/Pricing";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/Footer";
import Benefits from "@/components/sections/Benefits";
import PlansComparison from "@/components/sections/PlansComparison";
import FeaturesSection from "@/components/sections/FeaturesSection";
import { toast } from "sonner";

export default function HomePage() {
  const [yearly, setYearly] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <main className="overflow-hidden">
      <TopBar />
      <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <Hero />
      <Features />
      <FeaturesSection />
      <Benefits />
      <Pricing yearly={yearly} setYearly={setYearly} />
      <PlansComparison />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
