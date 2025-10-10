/**
 * @copyright 2025 jonadab-whatlead
 * @license Apache-2.0
 */

"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Zap, Users, Shield, TrendingUp, Stethoscope, Award, BookOpen, Clock } from "lucide-react";
import { courseFeatures } from "@/constants";
import { WavyBackground } from "./ui/wavy-background";
import { useRef } from "react";

const iconMap = {
  Zap,
  Users,
  Shield,
  TrendingUp,
  Stethoscope,
  Award,
  BookOpen,
  Clock
};

const Features = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  // Referência para a seção para efeito de paralaxe
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  // Transformações para efeito de paralaxe
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0.6, 1, 1, 0.6]);

  const features = [
    {
      id: 1,
      title: "Tecnologia de Ponta",
      description: "Aprenda com os equipamentos mais modernos do mercado de urologia laser",
      icon: "Zap"
    },
    {
      id: 2,
      title: "Instrutores Especialistas",
      description: "Professores com mais de 15 anos de experiência em procedimentos urológicos",
      icon: "Users"
    },
    {
      id: 3,
      title: "Certificação Reconhecida",
      description: "Certificado válido em todo território nacional e aceito pelos principais hospitais",
      icon: "Shield"
    },
    {
      id: 4,
      title: "Aulas Práticas",
      description: "Mais de 80% do curso é focado em prática clínica com pacientes reais",
      icon: "Stethoscope"
    },
    {
      id: 5,
      title: "Metodologia Avançada",
      description: "Ensino baseado em casos clínicos reais e simulações de alta fidelidade",
      icon: "BookOpen"
    },
    {
      id: 6,
      title: "Suporte Contínuo",
      description: "Acompanhamento personalizado durante e após a conclusão do curso",
      icon: "Clock"
    }
  ];

  return (
    <section ref={sectionRef} className="bg-white -mt-16 md:-mt-24 relative overflow-hidden w-screen">
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="text-center relative"
          style={{ y, opacity }}
        >
          <WavyBackground
            colors={["#85c5c7", "#9bd1d3", "#b1dddf", "#c7e9eb", "#ddf5f7"]}
            waveWidth={50}
            backgroundFill="white"
            blur={10}
            speed="slow"
            waveOpacity={0.6}
            className="w-screen"
          >
            <div className="py-8 px-4 md:px-8 relative z-10">
              <motion.h2 
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                Por que escolher nosso curso?
              </motion.h2>
              <motion.p 
                className="text-xl text-gray-600 max-w-3xl mx-auto"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                Oferecemos a formação mais completa em tecnologia Urolaser do Brasil,
                acessível tanto para profissionais de saúde quanto para interessados em ingressar na área cirúrgica.
              </motion.p>
            </div>
          </WavyBackground>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature) => {
            const IconComponent = iconMap[feature.icon as keyof typeof iconMap];

            return (
              <motion.div
                key={feature.id}
                variants={itemVariants}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#85c5c7]/30"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#85c5c7]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-[#85c5c7]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#85c5c7]/20 transition-colors duration-300">
                    <IconComponent className="w-8 h-8 text-[#85c5c7]" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#85c5c7] transition-colors duration-300">
                    {feature.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Hover effect border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#85c5c7]/20 transition-colors duration-300"></div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 bg-gradient-to-r from-[#85c5c7]/10 to-[#85c5c7]/5 rounded-3xl p-8 md:p-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#85c5c7] mb-2">500+</div>
              <div className="text-gray-600 font-medium">Profissionais Formados</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#85c5c7] mb-2">98%</div>
              <div className="text-gray-600 font-medium">Taxa de Satisfação</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#85c5c7] mb-2">15+</div>
              <div className="text-gray-600 font-medium">Anos de Experiência</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#85c5c7] mb-2">24/7</div>
              <div className="text-gray-600 font-medium">Suporte Disponível</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;