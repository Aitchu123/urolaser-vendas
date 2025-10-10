/**
 * @copyright 2025 jonadab-whatlead
 * @license Apache-2.0
 */

"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { HelpCircle, ChevronDown } from "lucide-react";

// Componentes Accordion simples inline
const Accordion = ({ children, type, collapsible, className = "" }: { 
  children: React.ReactNode; 
  type: string; 
  collapsible: boolean; 
  className?: string; 
}) => (
  <div className={className}>
    {children}
  </div>
);

const AccordionItem = ({ children, value, className = "" }: { 
  children: React.ReactNode; 
  value: string; 
  className?: string; 
}) => (
  <div className={className} data-value={value}>
    {children}
  </div>
);

const AccordionTrigger = ({ children, className = "", onClick }: { 
  children: React.ReactNode; 
  className?: string;
  onClick?: () => void;
}) => (
  <button className={className} onClick={onClick}>
    {children}
  </button>
);

const AccordionContent = ({ children, className = "", isOpen }: { 
  children: React.ReactNode; 
  className?: string;
  isOpen?: boolean;
}) => (
  <div className={`${className} ${isOpen ? 'block' : 'hidden'}`}>
    {children}
  </div>
);

export const FAQ = () => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const faqs = [
    {
      question: "Quanto tempo dura o curso?",
      answer:
        "O curso possui mais de 20 horas de conteúdo em vídeo, divididas em 5 módulos. Você pode assistir no seu próprio ritmo. A maioria dos alunos conclui em 4 a 6 semanas estudando 1 hora por dia. Mas você tem acesso vitalício, então pode levar o tempo que precisar!",
    },
    {
      question: "Preciso ter experiência prévia em vendas?",
      answer:
        "Não! O curso é desenhado tanto para iniciantes quanto para profissionais experientes. Começamos do zero, explicando todos os fundamentos, e avançamos para técnicas sofisticadas. Temos alunos que nunca trabalharam com vendas e hoje são top performers.",
    },
    {
      question: "O certificado é reconhecido?",
      answer:
        "Sim! Você receberá um certificado digital de conclusão emitido pela Urolaser, instituição referência em capacitação para o setor médico-hospitalar. O certificado pode ser incluído no seu currículo e LinkedIn.",
    },
    {
      question: "Como funciona o acesso ao curso?",
      answer:
        "Após a confirmação do pagamento (instantâneo no cartão e Pix, até 48h no boleto), você recebe por email seus dados de acesso à plataforma. O curso fica disponível 24/7 para você assistir de qualquer dispositivo (computador, tablet ou celular).",
    },
    {
      question: "E se eu não gostar do curso?",
      answer:
        "Você tem 30 dias de garantia incondicional! Se por qualquer motivo não estiver satisfeito, basta enviar um email solicitando o reembolso e devolvemos 100% do valor pago. Sem burocracia, sem perguntas. Simples assim.",
    },
    {
      question: "Terei suporte durante o curso?",
      answer:
        "Com certeza! Você terá acesso ao suporte prioritário via WhatsApp e também ao grupo VIP de alunos, onde pode tirar dúvidas, trocar experiências e fazer networking com outros representantes hospitalares de todo Brasil.",
    },
    {
      question: "Posso parcelar o pagamento?",
      answer:
        "Sim! Você pode parcelar em até 12x de R$ 97 no cartão de crédito, sem juros. Também aceitamos pagamento à vista (R$ 997) via Pix ou boleto bancário com desconto especial.",
    },
    {
      question: "Por quanto tempo terei acesso ao conteúdo?",
      answer:
        "Acesso VITALÍCIO! Você paga uma única vez e tem acesso para sempre, incluindo todas as atualizações futuras do curso. Pode rever as aulas quantas vezes quiser, sempre que precisar relembrar alguma técnica.",
    },
  ];

  const toggleItem = (value: string) => {
    setOpenItem(openItem === value ? null : value);
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-[#00a8cc]/10 border border-[#00a8cc]/20 rounded-full px-3 sm:px-4 py-2 mb-4 sm:mb-6">
            <HelpCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#00a8cc]" />
            <span className="text-[#00a8cc] font-semibold text-xs sm:text-sm">
              TIRE SUAS DÚVIDAS
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-3 sm:mb-4">
            Perguntas <span className="text-[#00a8cc]">Frequentes</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600">
            Respondemos as principais dúvidas dos nossos alunos
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => {
              const itemValue = `faq-${index}`;
              const isOpen = openItem === itemValue;
              
              return (
                <AccordionItem
                  key={index}
                  value={itemValue}
                  className="bg-white border-2 border-gray-200 rounded-xl shadow-sm hover:shadow-md hover:border-[#00a8cc]/30 transition-all overflow-hidden"
                >
                  <AccordionTrigger 
                    className="px-4 sm:px-6 py-4 sm:py-5 hover:no-underline text-left group w-full"
                    onClick={() => toggleItem(itemValue)}
                  >
                    <div className="flex items-start gap-3 sm:gap-4 pr-2 sm:pr-4 w-full">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#00a8cc]/10 flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-[#00a8cc]/20 transition-colors">
                        <span className="text-[#00a8cc] font-bold text-xs sm:text-sm">
                          {index + 1}
                        </span>
                      </div>
                      <span className="text-base sm:text-lg font-bold text-gray-900 group-hover:text-[#00a8cc] transition-colors text-left flex-1">
                        {faq.question}
                      </span>
                      <ChevronDown className={`w-5 h-5 sm:w-6 sm:h-6 text-gray-400 transition-transform flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 sm:px-6 pb-4 sm:pb-5" isOpen={isOpen}>
                    <div className="pl-10 sm:pl-12">
                      <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                        {faq.answer}
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-8 sm:mt-12"
        >
          <p className="text-gray-600 text-sm sm:text-base">
            Ainda tem dúvidas?{" "}
            <a
              href="#"
              className="text-[#00a8cc] font-semibold hover:underline"
            >
              Entre em contato com nosso suporte
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
