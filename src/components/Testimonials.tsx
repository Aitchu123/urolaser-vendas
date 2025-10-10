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

const Testimonials = () => {
  // Componente para um card de depoimento otimizado para carrossel vertical
  const TestimonialCard = ({ testimonial }: { testimonial: any }) => (
    <div className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#85c5c7]/30 w-full max-w-sm mx-auto mb-4 flex-shrink-0">
      {/* Quote icon */}
      <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
        <Quote className="w-8 h-8 text-[#85c5c7]" />
      </div>

      {/* Stars */}
      <div className="flex items-center mb-3">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className="w-4 h-4 text-yellow-400 fill-current"
          />
        ))}
      </div>

      {/* Testimonial content */}
      <blockquote className="text-gray-700 mb-4 leading-relaxed relative z-10 text-sm">
        "{testimonial.content}"
      </blockquote>

      {/* Author info */}
      <div className="flex items-center">
        <div className="relative w-10 h-10 rounded-full overflow-hidden mr-3">
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <div className="font-semibold text-gray-900 text-sm">
            {testimonial.name}
          </div>
          <div className="text-xs text-gray-600">
            {testimonial.role}
          </div>
        </div>
      </div>

      {/* Hover effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#85c5c7]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  );

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4 font-heading">
            O Que Nossos <span style={{ color: "#6ed5d5" }}>Alunos Dizem</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Resultados reais de quem já transformou sua carreira
          </p>
        </motion.div>

        {/* Carrossel infinito vertical com múltiplas colunas */}
        <div className="flex gap-6 h-[600px] overflow-hidden">
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

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-[#85c5c7]/10 rounded-3xl p-8 md:p-12 border border-[#85c5c7]/20">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Junte-se a centenas de profissionais de sucesso
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Não perca a oportunidade de se especializar na tecnologia mais avançada
              da urologia moderna. Sua carreira merece esse investimento.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#85c5c7] text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-[#85c5c7]/90"
              onClick={() => {
                const enrollmentSection = document.getElementById('enrollment');
                if (enrollmentSection) {
                  enrollmentSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Quero me inscrever agora
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;