"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const features = [
  { title: "Click & Collect", subtitle: "Commandes en ligne à emporter", imageUrl: "https://sundayapp.com/app/uploads/2024/03/Click-Collect-Slider-card-LanguageUS@2x-1-min-1.png", link: "/features/click-and-collect" },
  { title: "Précommande", subtitle: "Commandes de groupe à l'avance", imageUrl: "https://sundayapp.com/app/uploads/2024/03/Slider-card-LanguageUS@2x-3-min-1.png", link: "/features/pre-order" },
  { title: "Pré-paiement", subtitle: "Acptes via un lien de paiement", imageUrl: "https://sundayapp.com/app/uploads/2024/03/Payment-link-Slider-card-LanguageUS@2x-min-1.png", link: "/features/pre-payment" },
  { title: "QR Code Menus", subtitle: "Menus digitaux accessibles en un scan", imageUrl: "https://sundayapp.com/app/uploads/2024/03/Digital-tab-Slider-card-LanguageUS@2x-2-min-1.png", link: "/features/qr-code" },
  { title: "Order & Pay", subtitle: "Commandez et payez depuis votre table", imageUrl: "https://sundayapp.com/app/uploads/2024/03/Slider-card-LanguageUS@2x-3-min-1.png", link: "/features/order-pay" },
  { title: "Réservations", subtitle: "Gérez les réservations et listes d'attente", imageUrl: "https://sundayapp.com/app/uploads/2024/03/Slider-card-LanguageUS@2x-3-min-1.png", link: "/features/reservations" },
  { title: "Livraison Intégrée", subtitle: "Connectez-vous à des plateformes de livraison", imageUrl: "https://sundayapp.com/app/uploads/2024/03/Payment-link-Slider-card-LanguageUS@2x-min-1.png", link: "/features/delivery" },
];

export default function FeaturesCarousel() {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [visible, setVisible] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  // Calcul du nombre de slides visibles
  useEffect(() => {
    const calcVisible = () => {
      const w = window.innerWidth;
      let v = 1;
      if (w >= 1200) v = 4; // 4 slides sur grand écran
      else if (w >= 992) v = 3;
      else if (w >= 768) v = 2;
      v = Math.min(v, features.length);
      setVisible(v);
    };
    calcVisible();
    window.addEventListener("resize", calcVisible);
    return () => window.removeEventListener("resize", calcVisible);
  }, []);

  // Observation de la largeur du conteneur
  useEffect(() => {
    const update = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.clientWidth);
      }
    };
    update();
    const ro = new ResizeObserver(update);
    if (containerRef.current) ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, []);

  // Assure que l'index est valide
  useEffect(() => {
    const maxIndex = Math.max(0, features.length - visible);
    setIndex((prev) => Math.min(prev, maxIndex));
  }, [visible, containerWidth]);

  const maxIndex = Math.max(0, features.length - visible);

  // Autoplay
  useEffect(() => {
    const play = () => {
      setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    };
    if (!isPaused && features.length > visible) {
      autoplayRef.current = setInterval(play, 8000);
    }
    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [isPaused, visible, maxIndex]);

  // Calcul des largeurs en pixels
  const cardWidth = containerWidth ? containerWidth / visible : 320; // Largeur par défaut si non calculée
  const innerWidth = cardWidth * features.length;
  const x = -index * cardWidth;

  // Gestion du drag
  const handleDragEnd = (_: any, info: any) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;
    const threshold = Math.max(50, cardWidth * 0.2);
    if (offset < -threshold || velocity < -500) {
      setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    } else if (offset > threshold || velocity > 500) {
      setIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    }
  };

  return (
    <section id="produits" className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center mb-4 text-white">
        Découvrez nos <span className="text-[#EB622B]">fonctionnalités</span>
        </h2>
        <p className="text-lg text-gray-300 text-center max-w-2xl mx-auto mb-12">
        Une solution complète pensée pour simplifier l’expérience client et
        optimiser vos opérations au quotidien.
        </p>
    <div
        className="relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        >
      <div ref={containerRef} className="overflow-hidden rounded-2xl" style={{ width: "100%" }}>
            <motion.div
              ref={innerRef}
              className="flex"
              style={{
                width: `${innerWidth}px`,
                cursor: "grab",
              }}
              drag="x"
              dragConstraints={{
                left: -(innerWidth - containerWidth),
                right: 0,
              }}
              dragElastic={0.1}
              onDragEnd={handleDragEnd}
              animate={{ x }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {features.map((feature, i) => (
                <div key={i} className="px-3" style={{ width: `${cardWidth}px`, flexShrink: 0 }}>
                  <Link href={feature.link} className="block h-full">
                    <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-lg">
                      <Image
                        src={feature.imageUrl}
                        alt={feature.title}
                        fill
                        className="object-cover"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = `https://via.placeholder.com/800x600?text=${encodeURIComponent(feature.title)}`;
                        }}
                        priority={i < visible}
                      />
                      <div className="absolute inset-0 bg-black/30" />
                      <div className="absolute top-0 left-0 p-6 text-white">
                        <h3 className="text-2xl font-bold mb-1">{feature.title}</h3>
                        <p className="text-lg opacity-90">{feature.subtitle}</p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </motion.div>
          </div>
          {/* Contrôles */}
          <div className="flex items-center justify-center mt-6 space-x-3">
            <button
              aria-label="Précédent"
              onClick={() => setIndex((prev) => (prev <= 0 ? maxIndex : prev - 1))}
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white"
            >
              ◀
            </button>
            <div className="flex gap-2">
              {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`w-3 h-3 rounded-full ${i === index ? "bg-white" : "bg-white/30"}`}
                  aria-label={`Aller à la position ${i + 1}`}
                />
              ))}
            </div>
            <button
              aria-label="Suivant"
              onClick={() => setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))}
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white"
            >
              ▶
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
