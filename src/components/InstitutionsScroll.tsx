"use client";

import React from "react";
import { ScrollVelocityContainer, ScrollVelocityRow } from "./ui/scroll-based-velocity";
import { motion } from "framer-motion";

// Lista de instituições de saúde renomadas
const healthInstitutions = [
  "Hospital Albert Einstein",
  "Hospital das Clínicas",
  "Rede D'Or",
  "Hospital Sírio-Libanês",
  "Hospital Israelita",
  "Hospital Alemão Oswaldo Cruz",
  "Hospital Samaritano",
  "Hospital do Coração",
  "Hospital Santa Catarina",
  "Hospital Beneficência Portuguesa",
  "Hospital São Luiz",
  "Hospital Moinhos de Vento",
  "Hospital Mater Dei",
  "Hospital São Camilo",
  "Hospital Santa Paula"
];

const InstitutionsScroll = () => {
  return (
    <section className="py-8 sm:py-12 bg-white overflow-hidden">
      <div className="container mx-auto px-4 text-center mb-6 sm:mb-8">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2">
          Nossos alunos trabalham nas maiores instituições de saúde do Brasil
        </h2>
        <p className="text-base sm:text-lg text-gray-600">
          Profissionais formados pela Urolaser atuam em hospitais referência
        </p>
      </div>

      <div className="relative w-full">
        <ScrollVelocityContainer className="py-6 sm:py-8 bg-gradient-to-r from-[#f8f9fa] via-white to-[#f8f9fa] overflow-visible">
          <ScrollVelocityRow baseVelocity={1} direction={-1} className="py-3 sm:py-4">
            {healthInstitutions.map((institution, index) => (
              <motion.div
                key={index}
                className="mx-2 sm:mx-4 px-3 sm:px-6 py-3 sm:py-4 bg-white rounded-lg shadow-md border border-gray-100 flex items-center transform-gpu"
                whileHover={{ 
                  scale: 1.05, 
                  rotateY: 5,
                  z: 20,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                style={{ 
                  perspective: "1000px",
                  transformStyle: "preserve-3d"
                }}
              >
                <span className="text-sm sm:text-lg font-medium text-gray-800 whitespace-nowrap">{institution}</span>
              </motion.div>
            ))}
          </ScrollVelocityRow>
          
          <ScrollVelocityRow baseVelocity={1.2} direction={1} className="py-3 sm:py-4">
            {healthInstitutions.slice().reverse().map((institution, index) => (
              <motion.div
                key={index}
                className="mx-2 sm:mx-4 px-3 sm:px-6 py-3 sm:py-4 bg-white rounded-lg shadow-md border border-gray-100 flex items-center transform-gpu"
                whileHover={{ 
                  scale: 1.05, 
                  rotateY: -5,
                  z: 20,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                style={{ 
                  perspective: "1000px",
                  transformStyle: "preserve-3d"
                }}
              >
                <span className="text-sm sm:text-lg font-medium text-gray-800 whitespace-nowrap">{institution}</span>
              </motion.div>
            ))}
          </ScrollVelocityRow>
        </ScrollVelocityContainer>
        
        {/* Gradientes para suavizar as bordas */}
        <div className="absolute inset-y-0 left-0 w-8 sm:w-16 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-8 sm:w-16 bg-gradient-to-l from-white to-transparent z-10"></div>
      </div>
    </section>
  );
};

export default InstitutionsScroll;