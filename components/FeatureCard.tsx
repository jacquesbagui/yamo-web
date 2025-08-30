"use client";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <div className="hover:shadow-lg transition-shadow rounded-2xl duration-300 h-full">
        <div className="p-6 text-center space-y-4 h-full flex flex-col items-center justify-center">
          <div className="flex items-center justify-center h-16 w-16 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 text-white">
            {icon}
          </div>
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
          <p className="text-gray-600 font-light">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}