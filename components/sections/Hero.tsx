"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import StartFreeTrialModal from "@/components/modals/StartFreeTrialModal";
import DemoModal from "@/components/modals/DemoModal";
//import cover01 from "@/assets/hero/yamo-cover-01.jpg";
//import cover02 from "@/assets/hero/yamo-cover-02.jpg";

  const heroImages = [
    "/assets/images/hero/yamo-cover-01.jpg",
    "/assets/images/hero/yamo-cover-02.jpg"
  ];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-4 lg:py-14 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
          <div className="text-center lg:text-left space-y-8">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold text-gray-900 tracking-tight sm:text-5xl md:text-6xl"
            >
              <span className="block">Transformez votre</span>
              <span className="block bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                restaurant en expérience digitale
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-3 text-xl text-gray-600"
            >
              Menu intelligent, commandes instantanées, paiements sans friction.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <StartFreeTrialModal />
              <a href="/demo" className="cursor-pointer rounded-full font-medium bg-primary text-white px-4 py-2 hover:bg-primary-700 transition">
                Voir une démo
              </a>
            </motion.div>
          </div>
          <div className="mt-12 lg:mt-0 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[500px]">
              {heroImages.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Solution Yamo ${index + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                    index === currentImageIndex ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                {heroImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`h-2 w-2 rounded-full ${
                      index === currentImageIndex ? "bg-white" : "bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
