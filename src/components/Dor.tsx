/**
 * @copyright 2025 jonadab-whatlead
 * @license Apache-2.0
 */

"use client";

import React from "react";
import { motion } from "framer-motion";
import { AlertTriangle, DollarSign, Clock, Briefcase, GraduationCap, HeartCrack } from "lucide-react";
import { BorderBeam } from "@/components/ui/border-beam";
import { GlowingEffect } from "@/components/ui/glowing-effect";

const painPoints = [
  {
    id: 1,
    icon: <DollarSign className="w-6 h-6" />,
    title: "Trabalhar muito e ganhar pouco?",
    description: "Batalhando todos os dias mas o salário não reflete seu esforço."
  },
  {
    id: 2,
    icon: <GraduationCap className="w-6 h-6" />,
    title: "Não consegue colocação no mercado após se formar?",
    description: "Diplomas que não abrem portas e frustração na busca por emprego."
  },
  {
    id: 3,
    icon: <Clock className="w-6 h-6" />,
    title: "Sem tempo para estudar uma nova profissão?",
    description: "Rotina exaustiva que não permite investir em qualificação profissional."
  },
  {
    id: 4,
    icon: <Briefcase className="w-6 h-6" />,
    title: "Cansado de empregos sem perspectiva de crescimento?",
    description: "Estagnação profissional e falta de oportunidades para avançar na carreira."
  },
  {
    id: 5,
    icon: <HeartCrack className="w-6 h-6" />,
    title: "Desmotivado com sua carreira atual?",
    description: "Insatisfação constante e sensação de que poderia estar realizando algo melhor."
  },
  {
    id: 6,
    icon: <AlertTriangle className="w-6 h-6" />,
    title: "Medo de investir em cursos sem garantia de emprego?",
    description: "Receio de gastar tempo e dinheiro em formações que não trazem resultados práticos."
  }
];

// Variantes de animação
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20
    }
  },
  hover: {
    scale: 1.05,
    boxShadow: "0 10px 25px rgb(232, 78, 60, 0.2)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  },
  tap: {
    scale: 0.98
  }
};

const iconVariants = {
  hidden: { scale: 0, rotate: -180 },
  visible: {
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20
    }
  },
  hover: {
    rotate: 15,
    scale: 1.2,
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 10
    }
  }
};

const glowVariants = {
  initial: { opacity: 0 },
  hover: {
    opacity: 1,
    transition: {
      duration: 0.3
    }
  }
};

export default function Dor() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Você está <span className="text-[#e84e3c]">CANSADO</span> de:
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Reconhece algum desses problemas na sua carreira?
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {painPoints.map((point) => (
            <motion.div
              key={point.id}
              variants={cardVariants}
              whileHover="hover"
              whileTap="tap"
              className="relative bg-white rounded-xl p-6 border border-gray-100 overflow-hidden"
              style={{
                transformStyle: "preserve-3d",
                perspective: "1000px"
              }}
            >
              {/* Efeito de brilho no hover */}
              <motion.div
                variants={glowVariants}
                className="absolute inset-0 bg-gradient-to-br from-[#e84e3c]/10 to-transparent rounded-xl"
              />

              {/* Border Beam animação */}
              <BorderBeam
                colorFrom="#e84e3c"
                colorTo="#e84e3c"
                duration={4}
                size={60}
                reverse={true}
                borderWidth={2}
              />

              {/* Efeito de borda animada - mantido como backup */}
              <motion.div
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full opacity-0"
              >
                <svg
                  className="absolute inset-0 w-full h-full"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                >
                  <motion.rect
                    x="0"
                    y="0"
                    width="100"
                    height="100"
                    rx="10"
                    stroke="#e84e3c"
                    strokeWidth="0.5"
                    strokeDasharray="0 1"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
                    fill="none"
                  />
                </svg>
              </motion.div>

              <div className="relative z-10">
                <motion.div
                  variants={iconVariants}
                  className="w-14 h-14 bg-[#e84e3c]/10 rounded-full flex items-center justify-center mb-4 text-[#e84e3c]"
                >
                  {point.icon}
                </motion.div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">{point.title}</h3>
                <p className="text-gray-600">{point.description}</p>
              </div>

              {/* Efeito de brilho animado */}
              <motion.div
                className="absolute -inset-px bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-xl font-semibold text-[#e84e3c]">
            A Urolaser tem a solução para transformar sua carreira em apenas 8 semanas!
          </p>
        </motion.div>

        {/* Nova seção - É hora de MUDAR ESSA HISTÓRIA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-base leading-6 mb-4">
            É hora de <span className="text-[#00a8cc] text-2xl leading-8 font-bold">MUDAR ESSA HISTÓRIA</span> 👇
          </p>
        </motion.div>
      </div>
    </section>
  );
}