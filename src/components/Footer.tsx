
/**
 * @copyright 2025 jonadab-whatlead
 * @license Apache-2.0
 */

"use client";

import { motion } from "framer-motion";
import { Shield, Mail, Phone, Instagram, Facebook, Linkedin, Youtube } from "lucide-react";
import Selo1 from "../assets/selo-1.svg";
import Selo from "../assets/selo.svg";
import Selo2 from "../assets/selo-2.svg";

// Componente Separator simples inline
const Separator = ({ className = "" }: { className?: string }) => (
  <hr className={`border-0 h-px ${className}`} />
);

export const Footer = () => {
  const links = {
    legal: [
      { label: "Política de Privacidade", href: "#" },
      { label: "Termos de Uso", href: "#" },
      { label: "Política de Reembolso", href: "#" },
    ],
    social: [
      { label: "Instagram", href: "#" },
      { label: "Facebook", href: "#" },
      { label: "LinkedIn", href: "#" },
      { label: "YouTube", href: "#" },
    ],
  };

  return (
    <footer className="bg-gray-900 py-8 sm:py-12 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h3 className="text-xl sm:text-2xl font-black text-[#00a8cc] mb-3 sm:mb-4">
              UROLASER
            </h3>
            <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
              Transformando carreiras no setor médico-hospitalar desde 2015.
              Mais de 2.500 alunos capacitados com excelência.
            </p>
            <div className="flex items-center justify-center md:justify-start gap-2 text-white/60 text-xs sm:text-sm">
              <Shield className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>Cursos certificados e reconhecidos</span>
            </div>
          </motion.div>

          {/* Links legais */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-center md:text-left"
          >
            <h4 className="text-white font-bold mb-3 sm:mb-4 text-sm sm:text-base">Informações Legais</h4>
            <ul className="space-y-2">
              {links.legal.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-[#00a8cc] text-xs sm:text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contato e Redes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center md:text-left"
          >
            <h4 className="text-white font-bold mb-3 sm:mb-4 text-sm sm:text-base">Contato</h4>
            <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
              <a
                href="mailto:contato@urolaser.cloud"
                className="flex items-center justify-center md:justify-start gap-2 text-white/70 hover:text-[#00a8cc] text-xs sm:text-sm transition-colors"
              >
                <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
                contato@urolaser.cloud
              </a>
              <a
                href="tel:+5511999999999"
                className="flex items-center justify-center md:justify-start gap-2 text-white/70 hover:text-[#00a8cc] text-xs sm:text-sm transition-colors"
              >
                <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
                (11) 99999-9999
              </a>
            </div>
            <h4 className="text-white font-bold mb-3 sm:mb-4 text-sm sm:text-base">Redes Sociais</h4>
            <div className="flex flex-wrap justify-center md:justify-start gap-3 sm:gap-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="group relative p-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 transition-all duration-300 shadow-lg hover:shadow-pink-500/25"
              >
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300" />
              </motion.a>

              <motion.a
                href="#"
                whileHover={{ scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
                className="group relative p-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
              >
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-blue-800 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300" />
              </motion.a>

              <motion.a
                href="#"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="group relative p-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-400 hover:to-cyan-500 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
              >
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-cyan-600 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300" />
              </motion.a>

              <motion.a
                href="#"
                whileHover={{ scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
                className="group relative p-2 rounded-full bg-gradient-to-r from-red-500 to-red-700 hover:from-red-400 hover:to-red-600 transition-all duration-300 shadow-lg hover:shadow-red-500/25"
              >
                <Youtube className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-red-500 to-red-700 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300" />
              </motion.a>
            </div>
          </motion.div>
        </div>

        <Separator className="my-6 sm:my-8 bg-white/10" />

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center relative"
        >
          {/* Selos adicionais no canto esquerdo */}
          <div className="absolute left-0 bottom-0 flex gap-2 items-center">
            <img src={Selo1} alt="Selo 1" className="w-6 h-6 sm:w-8 sm:h-8" />
            <img src={Selo} alt="Selo" className="w-6 h-6 sm:w-8 sm:h-8" />
            <img src={Selo2} alt="Selo 2" className="w-6 h-6 sm:w-8 sm:h-8" />
          </div>

          <p className="text-white/60 text-xs sm:text-sm mb-3 sm:mb-4">
            © 2025 Urolaser. Todos os direitos reservados.
          </p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 text-xs text-white/50">
            <span className="flex items-center gap-1">
              🔒 Site seguro - SSL certificado
            </span>
            <span className="flex items-center gap-1">
              💳 Pagamentos processados com segurança
            </span>
            <span className="flex items-center gap-1">
              ✅ Empresa legalmente constituída
            </span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
