"use client";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

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
        <motion.div
          className="grid lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ y: -5 }}
            >
              <Card className="p-6 shadow-sm hover:shadow-md transition-shadow duration-300 h-full">
                <div className="flex flex-col items-center text-center space-y-4 h-full">
                  <img
                    src={testimonial.logo}
                    alt={testimonial.author}
                    className="h-12 w-auto"
                  />
                  <p className="text-gray-600 italic flex-grow">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-medium text-gray-900">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
