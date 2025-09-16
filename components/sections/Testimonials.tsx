"use client";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "Yamo a réduit nos temps d'attente de 30% et augmenté notre chiffre d'affaires.",
    author: "Le Bistrot Parisien",
    logo: "https://avatar.iran.liara.run/public/37",
    role: "Gérant",
  },
  {
    quote: "L'intégration a été fluide et nos clients adorent la simplicité.",
    author: "Café des Arts",
    logo: "https://avatar.iran.liara.run/public/33",
    role: "Directeur",
  },
  {
    quote: "Un outil indispensable pour notre restaurant étoilé.",
    author: "Le Grand Michelin",
    logo: "https://avatar.iran.liara.run/public/99",
    role: "Chef",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Ils nous font confiance
          </h2>
        </motion.div>
            <div className="grid lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Adjoa Mensah",
                  restaurant: "Chez Mama Adjoa - Abidjan",
                  comment: "Yamo a réduit nos temps d'attente de 30% et augmenté notre chiffre d'affaires.",
                  rating: 5,
                  avatar: "👩🏿"
                },
                {
                  name: "Kwame Asante",
                  restaurant: "Golden Spoon - Accra",
                  comment: "L'intégration a été fluide et nos clients adorent la simplicité.",
                  rating: 5,
                  avatar: "👨🏿"
                },
                {
                  name: "Fatou Diallo",
                  restaurant: "Le Palmier - Dakar",
                  comment: "Interface parfaite pour nos clients. Même ceux moins à l'aise avec la technologie s'y adaptent facilement.",
                  rating: 5,
                  avatar: "👩🏿"
                }
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="bg-white p-8 rounded-2xl shadow-lg"
                >
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">"{testimonial.comment}"</p>
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-12 h-12 rounded-full flex items-center justify-center text-2xl"
                      style={{ backgroundColor: '#E0E7FF' }}
                    >
                      {testimonial.avatar}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.restaurant}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
      </div>
    </section>
  );
}
