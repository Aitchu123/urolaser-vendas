'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { CheckCircle, Star, Users, TrendingUp, Shield, Clock, ArrowRight, Gift } from 'lucide-react'

export default function LeadCapturePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simular envio do formulário
    await new Promise(resolve => setTimeout(resolve, 1500))

    // Redirecionar para a página de vendas
    router.push('/vendas')
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-blue-800/95 to-indigo-900/90"></div>

      {/* Floating Elements - hidden on small screens to avoid clutter */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-400/20 rounded-full blur-xl animate-pulse hidden sm:block"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-indigo-400/20 rounded-full blur-xl animate-pulse delay-1000 hidden lg:block"></div>
      <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-cyan-400/20 rounded-full blur-xl animate-pulse delay-2000 hidden sm:block"></div>

      <div className="relative z-10 container mx-auto px-4 py-8 min-h-screen flex items-center">
        <div className="w-full max-w-6xl mx-auto grid lg:grid-cols-2 gap-6 lg:gap-8 items-start pt-8 lg:pt-12">

          {/* Left Side - Content */}
          <div className="text-white space-y-4 md:space-y-6">
            {/* Logo */}
            <div className="flex items-center mb-2">
              <Image
                src="/logo.png"
                alt="UroLaser"
                width={160}
                height={160}
                className="rounded-lg w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48"
              />
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <div className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-semibold animate-bounce">
                <Gift className="w-3 h-3 md:w-4 md:h-4 mr-1.5 md:mr-2" />
                REVELAÇÃO GRATUITA
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                O <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">SEGREDO</span> para
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Trabalhar em Cirurgias</span>
                <br />
                <span className="text-xs sm:text-sm md:text-base font-normal text-blue-200">sem ser formado na área da saúde</span>
              </h1>

              <p className="text-base md:text-lg lg:text-xl text-blue-100 leading-relaxed">
                Descubra como se tornar um <strong className="text-yellow-400">Representante Hospitalar</strong> e ganhar de
                <strong className="text-green-400"> R$ 4.000 a R$ 7.000/mês</strong> em uma profissão que 99% das pessoas não conhecem!
              </p>
            </div>

            {/* Benefits */}
            <div className="grid sm:grid-cols-2 gap-2 md:gap-3">
              {[
                { icon: TrendingUp, text: "Mercado em alta com poucos profissionais" },
                { icon: Users, text: "Não precisa ser formado na área da saúde" },
                { icon: Shield, text: "Profissão regulamentada e respeitada" },
                { icon: Clock, text: "Flexibilidade de horários" }
              ].map((benefit, index) => (
                <div key={index} className="flex items-center space-x-2 md:space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-2 md:p-2.5">
                  <benefit.icon className="w-4 h-4 md:w-5 md:h-5 text-yellow-400 flex-shrink-0" />
                  <span className="text-xs md:text-sm">{benefit.text}</span>
                </div>
              ))}
            </div>

            {/* Social Proof */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 md:p-4">
              <div className="flex items-center space-x-1.5 md:space-x-2 mb-1 md:mb-2">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 md:w-4 md:h-4 fill-current" />
                  ))}
                </div>
                <span className="text-white font-semibold text-xs md:text-sm">4.9/5</span>
              </div>
              <p className="text-blue-100 text-xs">
                "Mais de <strong className="text-yellow-400">2.847 pessoas</strong> já descobriram este segredo e estão transformando suas carreiras!"
              </p>
            </div>

            {/* Urgency */}
            <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-xl p-2.5 md:p-3 border border-red-400">
              <div className="flex items-center space-x-1.5 md:space-x-2 mb-0.5 md:mb-1">
                <Clock className="w-3 h-3 md:w-4 md:h-4 text-yellow-400 animate-pulse" />
                <span className="text-white font-bold text-xs md:text-sm">ATENÇÃO: Vagas Limitadas!</span>
              </div>
              <p className="text-red-100 text-xs">
                Esta revelação gratuita será removida em breve. Garante já o seu acesso!
              </p>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="bg-white rounded-2xl shadow-2xl p-4 sm:p-6 md:p-8 lg:p-10 relative mt-6 lg:mt-0 flex flex-col justify-between min-h-full">
            {/* Form Header */}
            <div className="text-center mb-6 md:mb-8">
              <div className="inline-flex items-center bg-gradient-to-r from-green-500 to-emerald-600 text-white px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-semibold mb-2 md:mb-3">
                <CheckCircle className="w-3 h-3 md:w-4 md:h-4 mr-1.5 md:mr-2" />
                100% GRATUITO
              </div>

              <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-800 mb-1 md:mb-2">
                Libere Seu Acesso Agora!
              </h2>

              <p className="text-gray-600 text-xs md:text-sm">
                Preencha os dados abaixo e descubra como milhares de pessoas estão mudando de vida
              </p>
            </div>

            {/* Form */}
            <div className="flex-grow flex flex-col justify-center">
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div>
                <label htmlFor="name" className="block text-xs md:text-sm font-semibold text-gray-700 mb-0.5 md:mb-1">
                  Seu Nome Completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2.5 md:px-4 md:py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 text-sm md:text-base"
                  placeholder="Digite seu nome completo"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs md:text-sm font-semibold text-gray-700 mb-0.5 md:mb-1">
                  Seu Melhor E-mail *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2.5 md:px-4 md:py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 text-sm md:text-base"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label htmlFor="whatsapp" className="block text-xs md:text-sm font-semibold text-gray-700 mb-0.5 md:mb-1">
                  WhatsApp (com DDD) *
                </label>
                <input
                  type="tel"
                  id="whatsapp"
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2.5 md:px-4 md:py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 text-sm md:text-base"
                  placeholder="(11) 99999-9999"
                />
              </div>

              <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-4 md:py-5 px-4 md:px-6 rounded-xl text-sm md:text-base transition-all duration-300 transform hover:scale-105 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-1.5 md:space-x-2 mt-6 md:mt-8"
                >
                  {isSubmitting ? (
                    <div className="animate-spin rounded-full h-4 w-4 md:h-5 md:w-5 border-b-2 border-white"></div>
                  ) : (
                    <>
                      <span className="text-xs sm:text-sm md:text-base">QUERO DESCOBRIR O SEGREDO AGORA!</span>
                      <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Bottom Section - Security and Guarantee */}
            <div className="mt-auto pt-4 md:pt-6">

            {/* Security */}
              <div className="mt-3 md:mt-4 text-center">
                <div className="flex items-center justify-center space-x-1.5 text-gray-500 text-xs">
                  <Shield className="w-2.5 h-2.5 md:w-3 md:h-3" />
                  <span>Seus dados estão 100% seguros e protegidos</span>
                </div>
              </div>

              {/* Guarantee */}
              <div className="mt-2 md:mt-3 bg-green-50 border border-green-200 rounded-lg p-2 md:p-3">
                <div className="flex items-center space-x-1.5">
                  <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-green-600" />
                  <span className="text-green-800 font-semibold text-xs">
                    Garantia: Conteúdo 100% gratuito, sem pegadinhas!
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}