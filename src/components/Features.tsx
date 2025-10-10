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
import { cn } from "@/lib/utils";

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
      description: "Aprenda com os equipamentos mais modernos do mercado de representação hospitalar",
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
      description: "Certificado válido em todo território nacional e aceito pelos principais empresas",
      icon: "Shield"
    },
    {
      id: 4,
      title: "Inserção Rápida no Mercado",
      description: "Metodologia prática e tranquila que prepara você para atuar com segurança em tempo recorde",
      icon: "Stethoscope"
    },
    {
      id: 5,
      title: "Material Didático Completo",
      description: "Acesso a apostilas, vídeos, provas e IA personalizada que acelera seu aprendizado em até 3×",
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
            <div className="py-1 px-4 sm:px-6 md:px-8 relative z-10">
              <motion.h2
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                Por que escolher nosso curso?
              </motion.h2>
              <motion.p
                className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                Oferecemos a formação mais completa em Representação Hospitalar do Brasil,
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-10 max-w-7xl mx-auto px-4 sm:px-6"
        >
          {features.map((feature, index) => {
            const IconComponent = iconMap[feature.icon as keyof typeof iconMap];

            return (
              <motion.div
                key={feature.id}
                variants={itemVariants}
                className={cn(
                  "flex flex-col lg:border-r py-8 sm:py-10 relative group/feature dark:border-neutral-800",
                  (index === 0 || index === 3) && "lg:border-l dark:border-neutral-800",
                  index < 3 && "lg:border-b dark:border-neutral-800"
                )}
              >
                {index < 3 && (
                  <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-[#85c5c7]/10 to-transparent pointer-events-none" />
                )}
                {index >= 3 && (
                  <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-[#85c5c7]/10 to-transparent pointer-events-none" />
                )}

                <div className="mb-4 relative z-10 px-6 sm:px-10 text-[#85c5c7]">
                  <IconComponent className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>

                <div className="text-base sm:text-lg font-bold mb-2 relative z-10 px-6 sm:px-10">
                  <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-[#85c5c7] transition-all duration-200 origin-center" />
                  <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
                    {feature.title}
                  </span>
                </div>

                <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-6 sm:px-10">
                  {feature.description}
                </p>
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
          className="mt-12 sm:mt-16 md:mt-20 bg-gradient-to-r from-[#85c5c7]/10 to-[#85c5c7]/5 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 mx-4 sm:mx-6"
        >
        </motion.div>
      </div>
    </section>
  );
};

export default Features;