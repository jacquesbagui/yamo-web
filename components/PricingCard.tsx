"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function PricingCard({
  name,
  price,
  period,
  features,
  popular,
  modal,
}: {
  name: string;
  price: string;
  period: string;
  features: string[];
  popular?: boolean;
  modal?: React.ReactNode;
}) {
  return (
    <motion.div whileHover={{ y: -5 }}>
      <Card className={`${popular ? "ring-2 ring-orange-500 shadow-xl relative" : "shadow-lg"} h-full`}>
        {popular && (
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <Badge className="bg-orange-600 text-white px-6 py-1">Plus populaire</Badge>
          </div>
        )}
        <CardHeader className="text-center space-y-4 pb-6">
          <h3 className="text-2xl font-medium text-gray-900">{name}</h3>
          <div className="mt-4 space-y-2">
            <div className="text-4xl font-light text-gray-900">{price}</div>
            {period && <div className="text-sm text-gray-500 font-normal">{period}</div>}
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <ul className="space-y-3">
            {features.map((feature, i) => (
              <li key={i} className="flex items-start gap-3">
                <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 font-light">{feature}</span>
              </li>
            ))}
          </ul>
          {modal ? (
            modal
          ) : (
            <Button
              className={`w-full font-medium ${
                popular ? "bg-orange-600 hover:bg-orange-700" : "bg-gray-900 hover:bg-gray-800"
              }`}
              size="lg"
            >
              {price === "Sur mesure" ? "Nous contacter" : "Commencer"}
            </Button>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}
