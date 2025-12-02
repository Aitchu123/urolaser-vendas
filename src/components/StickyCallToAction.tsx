"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { X, Zap, Shield, Star, Gift, GraduationCap, Stethoscope } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { trackCTAClick } from '../lib/analytics';
import { useUTM } from '../lib/utm';

interface StickyCallToActionProps {
  /** Show/hide the sticky CTA */
  propIsVisible?: boolean;
  /** Callback when CTA is clicked */
  onCtaClick?: (action: 'trial' | 'buy') => void;
  /** Callback when sticky is dismissed */
  onDismiss?: () => void;
  /** Custom trial button text */
  trialText?: string;
  /** Custom buy button text */
  buyText?: string;
  /** Show dismiss button */
  showDismiss?: boolean;
  /** Position of the sticky CTA */
  position?: 'top' | 'bottom';
  /** Custom className for styling */
  className?: string;
}

// Hook para gerenciar o estado de visibilidade do CTA
export function useStickyCallToAction() {
  const [isVisible, setIsVisible] = useState(true);

  // Verificar se o CTA foi descartado nas últimas 12 horas
  useEffect(() => {
    const dismissedTime = localStorage.getItem('stickyCtaDismissed');
    if (dismissedTime) {
      const dismissedAt = parseInt(dismissedTime, 10);
      const twelveHoursInMs = 12 * 60 * 60 * 1000;

      if (Date.now() - dismissedAt < twelveHoursInMs) {
        setIsVisible(false);
      }
    }
  }, []);

  const handleDismiss = useCallback(() => {
    setIsVisible(false);
    localStorage.setItem('stickyCtaDismissed', Date.now().toString());
  }, []);

  return { isVisible, handleDismiss };
}

export default function StickyCallToAction({
  propIsVisible = true,
  onCtaClick,
  onDismiss,
  trialText = "🔬 Inscrição Antecipada",
  buyText = "🩺 Garantir Vaga",
  showDismiss = true,
  position = 'bottom',
  className = '',
}: StickyCallToActionProps) {
  const [isDismissed, setIsDismissed] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentOffer, setCurrentOffer] = useState(0);
  const router = useRouter();
  const { params: utmParams } = useUTM();

  // Ofertas rotativas para o curso de representante hospitalar
  const offers = [
    { icon: "🩺", text: "Últimas vagas: 30% OFF", highlight: "TURMA LIMITADA" },
    { icon: "💼", text: "Salários de até R$8.000", highlight: "ALTA DEMANDA" },
    { icon: "🏥", text: "Certificado reconhecido", highlight: "CREDIBILIDADE" },
    { icon: "🔬", text: "Aulas práticas e teóricas", highlight: "COMPLETO" }
  ];

  // Monitorar scroll para mostrar o CTA
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 300;
      setIsScrolled(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Rotacionar ofertas a cada 4 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentOffer((prev) => (prev + 1) % offers.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [offers.length]);

  const handleCtaClick = (action: 'trial' | 'buy') => {
    window.open('https://pay.kiwify.com.br/S70uCPg', '_blank');

    onCtaClick?.(action);
  };

  const handleDismiss = () => {
    setIsDismissed(true);
    onDismiss?.();
  };

  const shouldShow = propIsVisible && !isDismissed && isScrolled;

  const stickyVariants: Variants = {
    hidden: {
      y: position === 'bottom' ? 100 : -100,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
      },
    },
    exit: {
      y: position === 'bottom' ? 100 : -100,
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
  };

  const buttonVariants: Variants = {
    hover: {
      scale: 1.05,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 10,
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  const pulseVariants: Variants = {
    pulse: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <AnimatePresence>
      {shouldShow && (
        <motion.div
          variants={stickyVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className={`
              fixed ${position === 'bottom' ? 'bottom-0' : 'top-0'} left-0 right-0 z-40
              bg-gradient-to-r from-[#00a8cc] via-[#85c5c7] to-[#00a8cc]
              border-t-2 border-gradient-to-r from-[#00a8cc]  via-[#0180b3] to-[#17ddf9]
              shadow-2xl backdrop-blur-lg
              ${className}
            `}
        >
          {/* Background Pattern Animado */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30" />

          {/* Borda animada superior */}
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#4f47e6] to-transparent">
            <motion.div
              className="h-full bg-gradient-to-r from-[#4f47e6]/80 via-blue-400 to-cyan-400"
              animate={{
                x: ['-100%', '100%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          </div>

          <div className="relative px-2 py-3 sm:px-4 sm:py-4 md:px-6 md:py-5">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between max-w-7xl mx-auto gap-3 sm:gap-0">
              {/* Left Side - Logo e Oferta Rotativa */}
              <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4 flex-1 min-w-0 w-full sm:w-auto">
                <motion.div
                  className="flex-shrink-0"
                  variants={pulseVariants}
                  animate="pulse"
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center shadow-lg overflow-hidden">
                    <Image
                      src="/logo.png"
                      alt="UroLaser"
                      width={32}
                      height={32}
                      className="object-contain sm:w-10 sm:h-10"
                    />
                  </div>
                </motion.div>

                <div className="flex-1 min-w-0">
                  <motion.div
                    key={currentOffer}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="flex items-center gap-1 sm:gap-2 mb-1 flex-wrap">
                      <span className="text-sm sm:text-lg">{offers[currentOffer].icon}</span>
                      <span className="text-white font-bold text-xs sm:text-sm md:text-base leading-tight">
                        {offers[currentOffer].text}
                      </span>
                      <motion.span
                        className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-1.5 py-0.5 sm:px-2 rounded-full whitespace-nowrap"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      >
                        {offers[currentOffer].highlight}
                      </motion.span>
                    </div>
                  </motion.div>

                  {/* Badges de credibilidade - Ocultos em telas muito pequenas */}
                  <div className="hidden xs:flex items-center space-x-2 sm:space-x-4 text-xs text-blue-200">
                    <span className="flex items-center space-x-1">
                      <Shield className="w-3 h-3" />
                      <span className="hidden sm:inline">Certificado Reconhecido</span>
                      <span className="sm:hidden">Certificado</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      <span className="hidden sm:inline">4.9/5 (500+ alunos)</span>
                      <span className="sm:hidden">4.9/5</span>
                    </span>
                    <span className="hidden sm:flex items-center space-x-1">
                      <GraduationCap className="w-3 h-3" />
                      <span>Aulas Práticas</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Side - CTAs Modernos */}
              <div className="flex items-center justify-center sm:justify-end space-x-1.5 sm:space-x-2 md:space-x-3 flex-shrink-0 w-full sm:w-auto">
                {/* Trial Button */}
                <motion.button
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  onClick={() => handleCtaClick('trial')}
                  className="
                      relative px-2.5 py-2 sm:px-4 sm:py-2.5 md:px-5 md:py-3 
                      text-xs sm:text-sm font-semibold
                      bg-gradient-to-r from-emerald-500 to-teal-500
                      hover:from-emerald-400 hover:to-teal-400
                      text-white rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl
                      border border-emerald-400/30 hover:border-emerald-300/50
                      transition-all duration-300 overflow-hidden
                      focus:outline-none focus:ring-2 focus:ring-emerald-500/50
                      flex-1 sm:flex-none min-w-0
                    "
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12 translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-700" />
                  <span className="relative flex items-center justify-center gap-1">
                    <Gift className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                    <span className="truncate text-xs sm:text-sm">
                      <span className="hidden sm:inline">{trialText}</span>
                      <span className="sm:hidden">Inscrição</span>
                    </span>
                  </span>
                </motion.button>

                {/* Buy Button - Mais Destacado */}
                <motion.button
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  onClick={() => handleCtaClick('buy')}
                  className="
                      relative px-3 py-2 sm:px-5 sm:py-2.5 md:px-7 md:py-3 
                      text-xs sm:text-sm font-bold
                      bg-gradient-to-r from-[#4f47e6] via-blue-600 to-cyan-600
                      hover:from-[#4f47e6]/90 hover:via-blue-500 hover:to-cyan-500
                      text-white rounded-lg sm:rounded-xl shadow-2xl hover:shadow-[#4f47e6]/25
                      border-2 border-[#4f47e6]/50 hover:border-[#4f47e6]/70
                      transform transition-all duration-300 overflow-hidden
                      focus:outline-none focus:ring-2 focus:ring-[#4f47e6]/50
                      flex-1 sm:flex-none min-w-0
                    "
                >
                  {/* Efeito de brilho animado */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  />

                  <span className="relative flex items-center justify-center gap-1 sm:gap-2">
                    <Stethoscope className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                    <span className="truncate text-xs sm:text-sm">
                      <span className="hidden sm:inline">{buyText}</span>
                      <span className="sm:hidden">Garantir Vaga</span>
                    </span>
                  </span>

                  {/* Badge de desconto - Ajustado para mobile */}
                  <div className="absolute -top-1.5 -right-1.5 sm:-top-2 sm:-right-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-1.5 py-0.5 sm:px-2 rounded-full transform rotate-12">
                    30% OFF
                  </div>
                </motion.button>

                {/* Dismiss Button */}
                {showDismiss && (
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handleDismiss}
                    className="
                        p-1.5 sm:p-2 text-white/60 hover:text-white/90
                        hover:bg-white/10 rounded-full transition-all duration-300
                        focus:outline-none focus:ring-2 focus:ring-[#4f47e6]/50
                        flex-shrink-0
                      "
                    aria-label="Fechar"
                  >
                    <X className="w-4 h-4" />
                  </motion.button>
                )}
              </div>
            </div>
          </div>

          {/* Contador de urgência (opcional) */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500"
            initial={{ scaleX: 1 }}
            animate={{ scaleX: 0 }}
            transition={{ duration: 300, ease: "linear" }} // 5 minutos
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
