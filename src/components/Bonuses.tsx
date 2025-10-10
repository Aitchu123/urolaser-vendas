/**
 * @copyright 2025 jonadab-whatlead
 * @license Apache-2.0
 */

"use client";

import React from "react";
import { motion } from "framer-motion";
import { Gift, FileText, Table, Mail, Users } from "lucide-react";

// Componente Card simples inline
const Card = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`bg-white rounded-lg shadow-lg ${className}`}>
    {children}
  </div>
);

const CardContent = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`p-6 ${className}`}>
    {children}
  </div>
);

export const Bonuses = () => {
  const bonuses = [
    {
      icon: FileText,
      title: "Script de Abordagem Campeão",
      description: "Frases e perguntas poderosas testadas por milhares de representantes para quebrar objeções e fechar mais vendas",
      value: "497",
    },
    {
      icon: Table,
      title: "Planilha de Gestão de Carteira",
      description: "Sistema completo em Excel para organizar seus clientes, acompanhar negociações e nunca perder follow-up",
      value: "297",
    },
    {
      icon: Mail,
      title: "30 Templates de Email",
      description: "Modelos prontos para primeiro contato, follow-up, proposta comercial e pós-venda. Basta personalizar!",
      value: "197",
    },
    {
      icon: Users,
      title: "Acesso Vitalício ao Grupo VIP",
      description: "Comunidade exclusiva no WhatsApp com networking, troca de experiências e suporte contínuo da equipe Urolaser",
      value: "997",
    },
  ];

  const totalValue = bonuses.reduce((sum, bonus) => sum + parseInt(bonus.value), 0);

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 sm:top-20 left-4 sm:left-10 w-20 h-20 sm:w-32 sm:h-32 bg-[#00a8cc]/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 sm:bottom-20 right-4 sm:right-10 w-24 h-24 sm:w-40 sm:h-40 bg-[#e84e3c]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-[#e84e3c]/10 border-2 border-[#e84e3c]/30 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-4 sm:mb-6"
          >
            <Gift className="w-5 h-5 sm:w-6 sm:h-6 text-[#e84e3c] animate-pulse" />
            <span className="text-[#e84e3c] font-bold text-sm sm:text-lg">BÔNUS EXCLUSIVOS</span>
          </motion.div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-3 sm:mb-4">
            Ganhe <span className="text-[#00a8cc]">4 Bônus Premium</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
            Ferramentas essenciais para acelerar seus resultados
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-6xl mx-auto mb-8 sm:mb-12">
          {bonuses.map((bonus, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, rotateY: -20 }}
              whileInView={{ opacity: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
            >
              <Card className="relative p-4 sm:p-6 h-full hover:shadow-2xl transition-all duration-500 border-2 hover:border-[#00a8cc]/30 group overflow-hidden bg-white">
                {/* Bonus badge */}
                <div className="absolute -top-2 sm:-top-3 -right-2 sm:-right-3 bg-gradient-to-br from-[#e84e3c] to-[#e84e3c]/80 text-white px-2 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-bold shadow-lg rotate-12 group-hover:rotate-0 transition-transform">
                  BÔNUS #{index + 1}
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-[#00a8cc] to-[#00a8cc]/70 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <bonus.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 group-hover:text-[#00a8cc] transition-colors">
                      {bonus.title}
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base mb-3 sm:mb-4 leading-relaxed">
                      {bonus.description}
                    </p>
                    <div className="flex items-center gap-2 sm:gap-3">
                      <span className="text-gray-500 line-through text-base sm:text-lg">
                        R$ {bonus.value}
                      </span>
                      <span className="text-xl sm:text-2xl font-black text-[#e84e3c]">
                        GRÁTIS
                      </span>
                    </div>
                  </div>
                </div>

                {/* Shine effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Total value */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <Card className="p-6 sm:p-8 bg-gradient-to-br from-[#00a8cc]/5 to-[#00a8cc]/10 border-2 border-[#00a8cc]/20">
            <div className="text-center">
              <p className="text-gray-600 mb-2 text-sm sm:text-base">VALOR TOTAL DOS BÔNUS</p>
              <motion.p
                initial={{ scale: 0.5 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", delay: 0.8 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 line-through decoration-[#e84e3c] decoration-4 mb-4"
              >
                R$ {totalValue.toLocaleString("pt-BR")}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1 }}
                className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-[#e84e3c] to-[#e84e3c]/80 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl shadow-2xl"
              >
                <Gift className="w-6 h-6 sm:w-8 sm:h-8" />
                <div className="text-left">
                  <p className="text-xs sm:text-sm font-semibold">HOJE VOCÊ GANHA</p>
                  <p className="text-2xl sm:text-3xl font-black">100% GRÁTIS 🎉</p>
                </div>
              </motion.div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Bonuses;
