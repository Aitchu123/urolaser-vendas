/**
 * @copyright 2025 jonadab-whatlead
 * @license Apache-2.0
 */

"use client";

import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Benefits from "@/components/Benefits";
import Bonuses from "@/components/Bonuses";
import FAQ from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import EnrollmentForm from "@/components/EnrollmentForm";
import StickyCallToAction, { useStickyCallToAction } from "@/components/StickyCallToAction";
import InstitutionsScroll from "@/components/InstitutionsScroll";
import Dor from "@/components/Dor";
import FeaturesSectionDemo from "@/components/features-section-demo-3";
import WhatsAppButton from "@/components/WhatsAppButton";
import { FinalCTA } from "@/components/FinalCTA";

export default function Home() {
  const { isVisible, handleDismiss } = useStickyCallToAction();

  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <InstitutionsScroll />
      <Dor />
      <FeaturesSectionDemo />
      <Features />
      <Benefits />
      <Testimonials />
      <Bonuses />
      <EnrollmentForm />
      <FAQ />
      <FinalCTA />
      <Footer />
      <StickyCallToAction
        propIsVisible={isVisible}
        onDismiss={handleDismiss}
        position="bottom"
      />
      <WhatsAppButton
        phoneNumber="5511999999999"
        message="Olá! Gostaria de saber mais sobre o Curso de Representação Hospitalar da Urolaser. Vim através do site!"
      />
    </main>
  );
}
