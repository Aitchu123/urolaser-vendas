/**
 * @copyright 2025 jonadab-whatlead
 * @license Apache-2.0
 */

"use client";

import { motion, useInView } from "framer-motion";
import { CheckCircle, ArrowRight, Star, Shield, Award } from "lucide-react";
import { courseBenefits } from "@/constants";
import { useRef, useEffect, useState } from "react";

// Hook para animação de contagem
const useCountAnimation = (end: number, duration: number = 2000) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView && !isVisible) {
      setIsVisible(true);
      let startTime: number;
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);

        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        setCount(Math.floor(easeOutQuart * end));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, end, duration, isVisible]);

  return { count, ref };
};

// Componente de estrelas animadas
const AnimatedStars = ({ rating = 5, size = "w-4 h-4" }: { rating?: number; size?: string }) => {
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: i * 0.1,
            duration: 0.3,
            type: "spring",
            stiffness: 200
          }}
        >
          <Star
            className={`${size} ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
          />
        </motion.div>
      ))}
    </div>
  );
};

const Benefits = () => {
  const { count: studentsCount, ref: studentsRef } = useCountAnimation(20100);
  const { count: satisfactionCount, ref: satisfactionRef } = useCountAnimation(98);
  const { count: approvalCount, ref: approvalRef } = useCountAnimation(100);

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
    <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 via-white to-[#85c5c7]/5 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0 bg-gradient-to-r from-[#85c5c7]/5 via-transparent to-[#85c5c7]/5"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(133,197,199,0.1),transparent_50%)]"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-4"
            >
              <div className="inline-flex items-center bg-[#85c5c7]/10 text-[#85c5c7] px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <Award className="w-4 h-4 mr-2" />
                Certificação Premium
              </div>
            </motion.div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Tudo que você precisa para se tornar um{" "}
              <span className="bg-gradient-to-r from-[#00a8cc] via-[#85c5c7] to-[#00a8cc] bg-clip-text text-transparent">
                especialista
              </span>
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
              className="space-y-4 mb-8"
            >
              {courseBenefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  className="flex items-center group cursor-pointer"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-[#85c5c7] to-[#00a8cc] rounded-full flex items-center justify-center mr-4 shadow-lg"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                  >
                    <CheckCircle className="w-5 h-5 text-white" />
                  </motion.div>
                  <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300 font-medium">
                    {benefit}
                  </span>
                </motion.li>
              ))}
            </motion.ul>

            {/* Rating Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 mb-8"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <AnimatedStars rating={5} size="w-5 h-5" />
                    <span className="text-2xl font-bold text-gray-900">5.0</span>
                  </div>
                  <p className="text-gray-600">Avaliação dos nossos alunos</p>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-8 h-8 text-[#85c5c7]" />
                  <div>
                    <div className="text-sm font-semibold text-gray-900">Certificado</div>
                    <div className="text-xs text-gray-600">Reconhecido</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <motion.button
                className="inline-flex items-center bg-gradient-to-r from-[#85c5c7] to-[#00a8cc] text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 group relative overflow-hidden"
                onClick={() => {
                  const enrollmentSection = document.getElementById('enrollment');
                  if (enrollmentSection) {
                    enrollmentSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                  initial={false}
                />
                Garantir minha vaga
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>
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
              <motion.div
                className="bg-white rounded-2xl p-8 shadow-2xl border border-gray-100 relative overflow-hidden"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#85c5c7]/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />

                <div className="text-center relative z-10">
                  <motion.div
                    className="w-20 h-20 bg-gradient-to-br from-[#85c5c7] to-[#00a8cc] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <CheckCircle className="w-10 h-10 text-white" />
                  </motion.div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Certificação Completa
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Receba seu certificado reconhecido nacionalmente e
                    válido em todo território brasileiro.
                  </p>

                  <div className="bg-gradient-to-r from-[#85c5c7]/10 to-[#00a8cc]/10 rounded-xl p-6 border border-[#85c5c7]/20">
                    <motion.div
                      ref={approvalRef}
                      className="text-4xl font-bold bg-gradient-to-r from-[#85c5c7] to-[#00a8cc] bg-clip-text text-transparent mb-2"
                    >
                      {approvalCount}%
                    </motion.div>
                    <div className="text-sm text-gray-600 mb-3">Taxa de Aprovação</div>
                    <AnimatedStars rating={5} size="w-4 h-4" />
                  </div>
                </div>
              </motion.div>

              {/* Floating elements with enhanced animations */}
              <motion.div
                ref={studentsRef}
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-4 -right-4 bg-white rounded-xl p-4 shadow-xl border border-gray-100 backdrop-blur-sm"
                whileHover={{ scale: 1.05, rotate: 5 }}
              >
                <motion.div
                  className="text-3xl font-bold bg-gradient-to-r from-[#85c5c7] to-[#00a8cc] bg-clip-text text-transparent"
                >
                  {studentsCount}+
                </motion.div>
                <div className="text-xs text-gray-600 mb-1">Alunos</div>
                <AnimatedStars rating={5} size="w-3 h-3" />
              </motion.div>

              <motion.div
                ref={satisfactionRef}
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute -bottom-4 -left-4 bg-white rounded-xl p-4 shadow-xl border border-gray-100 backdrop-blur-sm"
                whileHover={{ scale: 1.05, rotate: -5 }}
              >
                <motion.div
                  className="text-3xl font-bold bg-gradient-to-r from-[#85c5c7] to-[#00a8cc] bg-clip-text text-transparent"
                >
                  {satisfactionCount}%
                </motion.div>
                <div className="text-xs text-gray-600 mb-1">Satisfação</div>
                <AnimatedStars rating={5} size="w-3 h-3" />
              </motion.div>

              {/* Additional floating security badge */}
              <motion.div
                animate={{
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-1/2 -left-6 bg-gradient-to-r from-[#85c5c7] to-[#00a8cc] rounded-full p-3 shadow-xl"
                whileHover={{ scale: 1.1 }}
              >
                <Shield className="w-6 h-6 text-white" />
              </motion.div>
            </div>

            {/* Enhanced background glow */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#85c5c7]/20 via-[#00a8cc]/20 to-[#85c5c7]/20 blur-3xl rounded-3xl -z-10 scale-110"
              animate={{
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;