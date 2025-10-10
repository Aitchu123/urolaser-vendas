/**
 * @copyright 2025 jonadab-whatlead
 * @license Apache-2.0
 */

"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { testimonials } from "@/constants";
import Image from "next/image";
import { Marquee } from "@/components/ui/marquee";

interface TestimonialType {
  content: string;
  name: string;
  image: string;
  role?: string;
}

const Testimonials = () => {
  // Componente para um card de depoimento otimizado para carrossel vertical
  const TestimonialCard = ({ testimonial }: { testimonial: TestimonialType }) => (
    <div className="group relative bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#85c5c7]/30 w-full max-w-xs sm:max-w-sm mx-auto mb-3 sm:mb-4 flex-shrink-0">
      {/* Quote icon */}
      <div className="absolute top-3 sm:top-4 right-3 sm:right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
        <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-[#85c5c7]" />
      </div>

      {/* Stars */}
      <div className="flex items-center mb-2 sm:mb-3">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current"
          />
        ))}
      </div>

      {/* Testimonial content */}
      <blockquote className="text-gray-700 mb-3 sm:mb-4 leading-relaxed relative z-10 text-xs sm:text-sm">
        &ldquo;{testimonial.content}&rdquo;
      </blockquote>

      {/* Author info */}
      <div className="flex items-center">
        <div className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden mr-2 sm:mr-3">
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <div className="font-semibold text-gray-900 text-xs sm:text-sm">
            {testimonial.name}
          </div>
          <div className="text-xs text-gray-600">
            {testimonial.role}
          </div>
        </div>
      </div>

      {/* Hover effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#85c5c7]/5 to-transparent rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  );

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-3 sm:mb-4 font-heading px-4">
            O Que Nossos <span style={{ color: "#6ed5d5" }}>Alunos Dizem</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground px-4">
            Resultados reais de quem já transformou sua carreira
          </p>
        </motion.div>

        {/* Carrossel infinito vertical com múltiplas colunas */}
        <div className="flex gap-3 sm:gap-6 h-[400px] sm:h-[500px] md:h-[600px] overflow-hidden">
          {/* Primeira coluna - direção normal */}
          <div className="flex-1">
            <Marquee vertical pauseOnHover className="[--duration:30s] h-full">
              {testimonials.slice(0, 4).map((testimonial, index) => (
                <TestimonialCard key={index} testimonial={testimonial} />
              ))}
            </Marquee>
          </div>

          {/* Segunda coluna - direção reversa */}
          <div className="flex-1">
            <Marquee vertical reverse pauseOnHover className="[--duration:25s] h-full">
              {testimonials.slice(2, 6).map((testimonial, index) => (
                <TestimonialCard key={index} testimonial={testimonial} />
              ))}
            </Marquee>
          </div>

          {/* Terceira coluna - direção normal, velocidade diferente */}
          <div className="flex-1">
            <Marquee vertical pauseOnHover className="[--duration:35s] h-full">
              {testimonials.slice(1, 5).map((testimonial, index) => (
                <TestimonialCard key={index} testimonial={testimonial} />
              ))}
            </Marquee>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <div className="inline-flex flex-col items-center gap-2 bg-muted rounded-2xl px-8 py-6">
            <p className="text-4xl font-black text-foreground">20.100+</p>
            <p className="text-lg text-muted-foreground">
              Alunos satisfeitos e transformados
            </p>
            <div className="flex gap-1 mt-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-sm font-semibold text-primary mt-1">
              98% de satisfação
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;