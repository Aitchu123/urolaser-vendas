/**
 * @copyright 2025 jonadab-whatlead
 * @license Apache-2.0
 */

"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { LayoutTextFlip } from "@/components/ui/layout-text-flip";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { AuroraText } from "./ui/aurora-text";
import {
  type Variants,
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { CirclePlay, Star, Users, Shield, Zap, TrendingUp, CheckCircle, Stethoscope } from "lucide-react";
import { useRef } from "react";
import ReactPlayer from "react-player";
import { heroData } from "@/constants";
import { HeroVideoDialog } from "@/components/ui/hero-video-dialog";

/**
 * Framer motion variants
 */
const heroVariant: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const heroChildVariants: Variants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const imageVariants: Variants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      delay: 0.5,
    },
  },
};

const Hero = () => {
  const heroImageRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroImageRef,
    offset: ["start 1080px", "50% start"],
  });

  const scrollYTransform = useTransform(scrollYProgress, [0, 1], [0.85, 1.1]);

  const scale = useSpring(scrollYTransform, {
    stiffness: 300,
    damping: 30,
    restDelta: 0.001,
  });

  const handleEnrollClick = () => {
    // Scroll to enrollment form
    const enrollmentSection = document.getElementById('enrollment');
    if (enrollmentSection) {
      enrollmentSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Função removida pois o botão agora redireciona para o WhatsApp

  return (
    <div className="py-20 md:py-32 min-h-screen overflow-hidden relative flex justify-center items-center">
      <motion.div
        variants={heroVariant}
        initial="hidden"
        animate="visible"
        className="container text-center relative z-10"
      >
        <div className="max-w-screen-md mx-auto">
          <motion.div
            variants={heroChildVariants}
            className="text-sm uppercase tracking-wider bg-[#85c5c7]/10 max-w-max mx-auto px-4 py-2 rounded-full border border-[#85c5c7]/20 backdrop-blur-3xl mb-6 md:mb-10"
          >
            <AnimatedShinyText className="font-semibold text-[#85c5c7]" shimmerWidth={150}>
              🏥 Curso #1 em Representação Hospitalar
            </AnimatedShinyText>
          </motion.div>

          <motion.h2
            variants={heroChildVariants}
            className="text-4xl font-semibold !leading-tight mb-4 md-text-5xl md:mb-5 lg:text-6xl"
          >
            Ganhe até{" "}
            <AuroraText
              colors={["#00a8cc", "#85c5c7", "#d1d1d1", "#00a8cc", "#85c5c7", "#ffffff"]}
              speed={2.5}
              className="drop-shadow-lg animate-glow font-extrabold"
            >
              R$7.000
            </AuroraText>
            <motion.span
              className="relative isolate ms-4 inline-block"
              initial={{ rotate: -5 }}
              animate={{ rotate: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <LayoutTextFlip
                text=""
                words={["Sem Faculdade", "Com a Urolaser"]}
                duration={3000}
                className="font-black"
              />
              <motion.span
                className="absolute -z-10 top-2 -left-6 -right-4 bottom-0.5 bg-gradient-to-r from-[#85c5c7]/40 to-[#00a8cc]/30 rounded-full px-8 ms-3 border-t border-[#85c5c7]/30 shadow-[inset_0px_0px_30px_0px] shadow-[#85c5c7]/30 md:top-3 md:bottom-1 lg:top-4 lg:bottom-2"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
              ></motion.span>
            </motion.span>
          </motion.h2>

          <motion.p
            variants={heroChildVariants}
            className="text-gray-600 md:text-xl mb-6 leading-relaxed"
          >
            <strong className="text-[#85c5c7] text-xl md:text-2xl">Transforme sua vida em 8 semanas!</strong> Acompanhe cirurgias de alta tecnologia e garanta um salário de <strong className="text-gray-900">R$3.500 a R$7.000</strong> sem precisar de faculdade. Curso com <strong className="text-[#85c5c7]">garantia de primeira colocação</strong> e suporte na conquista do seu primeiro emprego.
          </motion.p>

          {/* Prova Social com Animated Tooltip */}
          <motion.div
            variants={heroChildVariants}
            className="flex items-center justify-center gap-3 mb-8"
          >
            <div className="flex -space-x-2">
              <AnimatedTooltip
                items={[
                  {
                    id: 1,
                    name: "Ana Silva",
                    designation: "Técnica em Enfermagem",
                    image: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
                  },
                  {
                    id: 2,
                    name: "Carlos Santos",
                    designation: "Instrumentador Cirúrgico",
                    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                  },
                  {
                    id: 3,
                    name: "Marina Costa",
                    designation: "Técnica em Radiologia",
                    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                  },
                  {
                    id: 4,
                    name: "Roberto Lima",
                    designation: "Auxiliar de Produção (sem formação médica)",
                    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                  },
                  {
                    id: 5,
                    name: "Lucia Ferreira",
                    designation: "Enfermeira Especialista",
                    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1061&q=80"
                  }
                ]}
              />
            </div>
            <div className="h-3.5 w-[0.85px] bg-gray-300"></div>
            <span className="font-medium text-gray-600 text-sm leading-tight sm:text-base">
              Mais de 20.100 aluno já se especializaram
            </span>
          </motion.div>

          {/* Features com ícones */}
          <motion.div
            variants={heroChildVariants}
            className="flex flex-wrap justify-center gap-4 mb-8 md:gap-6"
          >
            <div className="flex items-center space-x-2 bg-green-500/10 text-green-600 px-4 py-2 rounded-full border border-green-500/20">
              <Shield className="w-5 h-5" />
              <span className="text-sm font-medium">Certificação Reconhecida</span>
            </div>
            <div className="flex items-center space-x-2 bg-[#85c5c7]/10 text-[#85c5c7] px-4 py-2 rounded-full border border-[#85c5c7]/20">
              <Stethoscope className="w-5 h-5" />
              <span className="text-sm font-medium">Aulas Práticas</span>
            </div>
            <div className="flex items-center space-x-2 bg-blue-500/10 text-blue-600 px-4 py-2 rounded-full border border-blue-500/20">
              <CheckCircle className="w-5 h-5" />
              <span className="text-sm font-medium">Suporte Especializado</span>
            </div>
          </motion.div>

          <motion.div
            variants={heroChildVariants}
            className="flex flex-col sm:flex-row justify-center gap-4 mt-6 md:mt-10"
          >
            <Button
              onClick={handleEnrollClick}
              size="lg"
              className="text-lg px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Inscrever-se Agora
            </Button>
            <a
              href="https://wa.me/5512991246207"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-3"
              >
                <CirclePlay className="mr-2" />
                Aula Gratuita
              </Button>
            </a>
          </motion.div>
        </div>

        <motion.div
          variants={imageVariants}
          className="relative mt-12 max-w-screen-xl mx-auto isolate rounded-xl md:mt-16 px-4 sm:px-6"
        >
          <motion.div
            initial={{
              y: 120,
              opacity: 0,
              filter: "blur(5px)",
            }}
            animate={{
              y: 0,
              opacity: 1,
              filter: "blur(0)",
            }}
            transition={{
              duration: 1.5,
              delay: 0.5,
              ease: "backInOut",
            }}
            ref={heroImageRef}
            style={{ scale }}
            className="w-full"
          >
            <div className="w-full rounded-xl shadow-2xl overflow-hidden border-4 border-[#00a8cc]/30">
              <iframe
                src="https://www.youtube.com/embed/vj6naEytGu8?autoplay=1&mute=1&loop=1&playlist=vj6naEytGu8&controls=0&showinfo=0&rel=0"
                title="Tecnologia Urolaser - Vídeo demonstrativo"
                className="w-full aspect-video md:aspect-[16/9] lg:aspect-[16/9]"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                frameBorder="0"
              />
            </div>
          </motion.div>

          {/* Blurry glow effect */}
          <motion.div
            className="absolute bg-gradient-to-r from-[#00a8cc] to-[#85c5c7] inset-5 blur-[50px] -z-10 opacity-70"
            initial={{
              scale: 0.8,
              opacity: 0,
            }}
            animate={{
              opacity: [0.7, 0.9, 0.7],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 5,
              delay: 0.5,
              ease: "backInOut",
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          ></motion.div>
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-[#00a8cc] to-[#85c5c7] blur-[200px] scale-y-75 scale-x-125 rounded-full -z-10 opacity-60"
            initial={{
              scale: 0.4,
              opacity: 0,
            }}
            animate={{
              opacity: [0.6, 0.8, 0.6],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 7,
              delay: 1.5,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              ease: "backInOut",
            }}
          ></motion.div>
        </motion.div>

        {/* Removendo o gradiente de desvanecimento que estava cobrindo o conteúdo */}
      </motion.div>
    </div>
  );
};

export default Hero;