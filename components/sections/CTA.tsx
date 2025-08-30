"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import StartFreeTrialModal from "@/components/modals/StartFreeTrialModal";

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-300 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-6"
        >
          Prêt à révolutionner votre restaurant ?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xl mb-8"
        >
          Rejoignez les milliers de restaurateurs qui ont déjà transformé leur business avec Yamo.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-sm mb-8"
        >
          Essai gratuit 14 jours • Aucune carte bancaire requise • Support inclus
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <StartFreeTrialModal />
        </motion.div>
      </div>
    </section>
  );
}
