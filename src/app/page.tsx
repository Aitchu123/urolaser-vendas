/**
 * @copyright 2025 jonadab-whatlead
 * @license Apache-2.0
 */

"use client";

import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import EnrollmentForm from "@/components/EnrollmentForm";
import StickyCallToAction, { useStickyCallToAction } from "@/components/StickyCallToAction";
import InstitutionsScroll from "@/components/InstitutionsScroll";

export default function Home() {
  const { isVisible, handleDismiss } = useStickyCallToAction();

  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <InstitutionsScroll />
      <Features />
      <Benefits />
      <Testimonials />
      <EnrollmentForm />
      <StickyCallToAction 
        isVisible={isVisible}
        onDismiss={handleDismiss}
        position="bottom"
      />
    </main>
  );
}
