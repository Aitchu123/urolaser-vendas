/**
 * @copyright 2025 jonadab-whatlead
 * @license Apache-2.0
 */

"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Clock, Shield, Star, Zap } from "lucide-react";
import { useEffect, useState } from "react";

export const FinalCTA = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 45,
    seconds: 12,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { hours: prev.hours, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const guarantees = [
    { icon: Shield, text: "Satisfação garantida ou seu dinheiro de volta" },
    { icon: Zap, text: "Acesso imediato após pagamento" },
    { icon: Star, text: "Suporte 24/7 via WhatsApp" },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-[#1a365d] via-[#2d3748] to-[#00a8cc] relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-[#00a8cc] rounded-full blur-3xl top-5 sm:top-10 left-5 sm:left-10 animate-pulse" />
        <div className="absolute w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-[#85c5c7] rounded-full blur-3xl bottom-5 sm:bottom-10 right-5 sm:right-10 animate-pulse" style={{ animationDelay: "1.5s" }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto text-center"
        >
          {/* Countdown */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex flex-col sm:flex-row items-center gap-2 sm:gap-3 bg-red-600/20 backdrop-blur-sm border-2 border-red-500/50 rounded-2xl px-4 sm:px-6 lg:px-8 py-3 sm:py-4 mb-6 sm:mb-8"
          >
            <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-red-400 animate-pulse" />
            <div className="text-white text-center sm:text-left">
              <p className="text-xs sm:text-sm font-bold mb-1 text-red-300">⏰ OFERTA POR TEMPO LIMITADO</p>
              <p className="text-lg sm:text-xl lg:text-2xl font-black">
                Expira em:{" "}
                <span className="text-red-400 bg-red-900/30 px-2 py-1 rounded-lg">
                  {String(timeLeft.hours).padStart(2, "0")}:
                  {String(timeLeft.minutes).padStart(2, "0")}:
                  {String(timeLeft.seconds).padStart(2, "0")}
                </span>
              </p>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white mb-4 sm:mb-6 leading-tight"
          >
            Não Perca a Oportunidade de{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00a8cc] to-[#85c5c7]">
              Transformar Sua Carreira
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-6 sm:mb-8 lg:mb-10 leading-relaxed px-2 sm:px-4"
          >
            Garante uma renda de <span className="font-bold text-[#85c5c7] bg-[#85c5c7]/10 px-2 py-1 rounded-lg">5 dígitos</span>{" "}
            como Representante Hospitalar e conquiste a carreira dos seus sonhos
          </motion.p>

          {/* Price Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.45 }}
            className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8 max-w-md mx-auto"
          >
            <p className="text-white/70 text-sm sm:text-base mb-2">De R$ 1.697 por apenas:</p>
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-white/50 line-through text-lg sm:text-xl">R$ 997</span>
              <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#85c5c7]">R$ 927</span>
            </div>
            <p className="text-[#85c5c7] text-sm sm:text-base font-semibold">ou 12x de R$ 91,00</p>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mb-6 sm:mb-8 lg:mb-10"
          >
            <Button
              size="lg"
              className="w-full sm:w-auto bg-gradient-to-r from-[#00a8cc] to-[#85c5c7] hover:from-[#0180b3] hover:to-[#6bb5b7] text-white px-6 sm:px-8 lg:px-12 py-4 sm:py-6 lg:py-8 text-base sm:text-lg md:text-xl lg:text-2xl font-black rounded-2xl shadow-2xl hover:shadow-[#00a8cc]/50 transition-all duration-300 hover:scale-105 group relative overflow-hidden"
              onClick={() => {
                window.open('https://wa.me/5512974022804?text=quero%20saber%20mais', '_blank');
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3">
                🚀 QUERO TRANSFORMAR MINHA CARREIRA AGORA
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 group-hover:translate-x-2 transition-transform" />
              </span>
            </Button>
          </motion.div>

          {/* Guarantees */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 mb-6 sm:mb-8"
          >
            {guarantees.map((guarantee, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="flex items-center gap-2 sm:gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-3 sm:px-4 lg:px-5 py-3 sm:py-4 hover:bg-white/15 transition-colors"
              >
                <guarantee.icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#85c5c7] flex-shrink-0" />
                <span className="text-white font-medium text-xs sm:text-sm lg:text-base text-left">
                  {guarantee.text}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Security badges */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.0 }}
            className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 mt-6 sm:mt-8 text-white/60 text-xs sm:text-sm"
          >
            <div className="flex items-center gap-1">
              <Shield className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>Pagamento 100% Seguro</span>
            </div>
            <div className="flex items-center gap-1">
              <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>SSL Certificado</span>
            </div>
            <div className="flex items-center gap-1">
              <Star className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>Garantia de 7 dias</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
