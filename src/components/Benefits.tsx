/**
 * @copyright 2025 jonadab-whatlead
 * @license Apache-2.0
 */

"use client";

import { motion } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";
import { courseBenefits } from "@/constants";

const Benefits = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -30, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Tudo que você precisa para se tornar um especialista
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Nosso curso oferece uma formação completa e abrangente, 
              adaptada para diferentes níveis de conhecimento e experiência na área da saúde.
            </p>

            <motion.ul
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {courseBenefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  className="flex items-center group"
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-[#85c5c7]/10 rounded-full flex items-center justify-center mr-4 group-hover:bg-[#85c5c7]/20 transition-colors duration-300">
                    <CheckCircle className="w-4 h-4 text-[#85c5c7]" />
                  </div>
                  <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                    {benefit}
                  </span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8"
            >
              <button
                className="inline-flex items-center bg-[#85c5c7] text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-[#85c5c7]/90 group"
                onClick={() => {
                  const enrollmentSection = document.getElementById('enrollment');
                  if (enrollmentSection) {
                    enrollmentSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Garantir minha vaga
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </motion.div>
          </motion.div>

          {/* Right side - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-[#85c5c7]/10 to-[#85c5c7]/5 rounded-3xl p-8 md:p-12">
              {/* Main content card */}
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                <div className="text-center">
                  <div className="w-20 h-20 bg-[#85c5c7]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-[#85c5c7]" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Certificação Completa
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Receba seu certificado reconhecido nacionalmente e 
                    válido em todo território brasileiro.
                  </p>
                  <div className="bg-[#85c5c7]/10 rounded-xl p-4">
                    <div className="text-3xl font-bold text-[#85c5c7] mb-2">100%</div>
                    <div className="text-sm text-gray-600">Taxa de Aprovação</div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-4 -right-4 bg-white rounded-xl p-4 shadow-lg border border-gray-100"
              >
                <div className="text-2xl font-bold text-[#85c5c7]">500+</div>
                <div className="text-xs text-gray-600">Alunos</div>
              </motion.div>

              <motion.div
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute -bottom-4 -left-4 bg-white rounded-xl p-4 shadow-lg border border-gray-100"
              >
                <div className="text-2xl font-bold text-[#85c5c7]">98%</div>
                <div className="text-xs text-gray-600">Satisfação</div>
              </motion.div>
            </div>

            {/* Background glow */}
            <div className="absolute inset-0 bg-[#85c5c7]/20 blur-3xl rounded-3xl -z-10 scale-110"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;