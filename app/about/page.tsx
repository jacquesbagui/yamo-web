"use client";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Users, Award, Heart, Globe } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TopBar from "@/components/TopBar";
import { Button } from "@/components/ui/button";

const teamMembers = [
  { name: "Jean Dupont", role: "Fondateur & CEO", image: "https://via.placeholder.com/150" },
  { name: "Marie Martin", role: "Directrice Marketing", image: "https://via.placeholder.com/150" },
  { name: "Pierre Lambert", role: "CTO", image: "https://via.placeholder.com/150" },
];

const values = [
  {
    icon: <Heart className="h-8 w-8 text-red-500" />,
    title: "Passion pour la restauration",
    description: "Nous sommes des passionnés de gastronomie et de technologie, déterminés à révolutionner l'expérience restaurant.",
  },
  {
    icon: <Globe className="h-8 w-8 text-blue-500" />,
    title: "Innovation accessible",
    description: "Nous croyons que la digitalisation doit être simple, intuitive et accessible à tous les restaurants.",
  },
  {
    icon: <Users className="h-8 w-8 text-green-500" />,
    title: "Relation client au cœur",
    description: "Votre succès est notre priorité. Nous sommes là pour vous accompagner à chaque étape.",
  },
];

export default function AboutUs() {
  return (
    <>
      <TopBar />
      <Header mobileMenuOpen={false} setMobileMenuOpen={() => {}} />
      <main className="bg-gray-50">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold text-gray-900 sm:text-5xl mb-6"
            >
              À propos de <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Yamo</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto mb-12"
            >
              Nous sommes une équipe passionnée, dédiée à transformer l'expérience restaurant grâce à la technologie.
              Notre mission : vous offrir des outils simples, puissants et adaptés à vos besoins.
            </motion.p>
          </div>
        </section>

        {/* Notre Histoire */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
              <div className="mb-12 lg:mb-0">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Notre histoire</h2>
                <p className="text-gray-600 mb-4">
                  Fondé en 2020 par des anciens de la restauration et des experts tech,
                  Yamo est né d'un constat simple : les restaurants méritent des outils
                  modernes, accessibles et conçus pour eux.
                </p>
                <p className="text-gray-600 mb-4">
                  Aujourd'hui, nous accompagnons plus de 1 000 restaurants en France et en Europe,
                  des petits cafés aux établissements étoilés, dans leur transition digitale.
                </p>
                <div className="flex items-center gap-4 mt-6">
                  <Award className="h-10 w-10 text-yellow-500" />
                  <div>
                    <p className="font-semibold">+1000 restaurants partenaires</p>
                    <p className="text-sm text-gray-500">En France et en Europe</p>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl p-8 text-white">
                <blockquote className="text-xl italic">
                  "Notre vision : un monde où chaque restaurant, quel que soit sa taille,
                  peut offrir une expérience client exceptionnelle grâce à la technologie."
                </blockquote>
                <p className="mt-6 font-medium">Jean Dupont, Fondateur</p>
              </div>
            </div>
          </div>
        </section>

        {/* Nos Valeurs */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Nos valeurs</h2>
            <div className="grid lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-8 text-center h-full">
                    <div className="flex justify-center mb-6">{value.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Notre Équipe */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Notre équipe</h2>
            <div className="grid lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-6 text-center h-full">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                    />
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-gray-600">{member.role}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-orange-500 to-red-500 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Rejoignez l'aventure Yamo</h2>
            <p className="text-xl mb-8">
              Vous aussi, faites partie des restaurants qui révolutionnent leur expérience client.
            </p>
            <a href="/contact">
              <Button className="bg-white text-orange-600 hover:bg-gray-100 font-medium px-8 py-3 rounded-full">
                Nous contacter
              </Button>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
