"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChefHat, Smartphone, Rocket } from "lucide-react";

export default function AdvancedProductCard({
  gradient,
  title,
  subtitle,
  description,
  features,
  stats,
  price,
  demo,
  popular,
  enterprise,
}: {
  gradient: string;
  title: string;
  subtitle: string;
  description: string;
  features: Array<{ title: string; desc: string }>;
  stats: Array<{ value: string; label: string }>;
  price: string;
  demo: string;
  popular?: boolean;
  enterprise?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative"
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-full text-sm font-medium shadow-md">
            Plus populaire
          </div>
        </div>
      )}

      {enterprise && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-medium shadow-md">
            Solution entreprise
          </div>
        </div>
      )}

      <Card className="border-0 overflow-hidden bg-white">
        <div className={`h-2 bg-gradient-to-r ${gradient}`}></div>

        <CardContent className="p-0">
          <div className="p-8 md:p-12 text-center bg-gradient-to-br from-gray-50 to-white">
            <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${gradient} text-white mb-6 shadow-md`}>
              {title.includes('Menu') && <ChefHat className="h-8 w-8" />}
              {title.includes('Order') && <Smartphone className="h-8 w-8" />}
              {title.includes('Suite') && <Rocket className="h-8 w-8" />}
            </div>

            <h3 className="text-3xl font-light text-gray-900 mb-2">{title}</h3>
            <p className={`text-lg bg-gradient-to-r ${gradient} bg-clip-text text-transparent font-medium mb-4`}>
              {subtitle}
            </p>
            <p className="text-gray-600 font-light max-w-2xl mx-auto leading-relaxed">
              {description}
            </p>
          </div>

          <div className="px-8 md:px-12 py-8 bg-white border-t border-gray-100">
            <div className="grid grid-cols-3 gap-6 text-center">
              {stats.map((stat, i) => (
                <div key={i} className="space-y-1">
                  <div className={`text-2xl font-light bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-500 font-normal">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-8 md:p-12 bg-gray-50">
            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, i) => (
                <div key={i} className="flex gap-4">
                  <div>
                    <div className="font-medium text-gray-900 mb-1">{feature.title}</div>
                    <div className="text-sm text-gray-600 font-light">{feature.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-8 md:p-12 bg-white text-center">
            <div className="mb-6">
              <div className="text-2xl font-light text-gray-900 mb-2">{price}</div>
              {!enterprise && <div className="text-sm text-gray-500">Sans engagement • Résiliable à tout moment</div>}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button className={`bg-gradient-to-r ${gradient} hover:shadow-lg font-medium px-8 py-3`}>
                {demo}
              </Button>
              <Button variant="outline" className="border-gray-300 hover:bg-gray-50 font-medium px-8 py-3">
                En savoir plus
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
