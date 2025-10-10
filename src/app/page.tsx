/**
 * @copyright 2025 jonadab-whatlead
 * @license Apache-2.0
 */

import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import EnrollmentForm from "@/components/EnrollmentForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Features />
      <Benefits />
      <Testimonials />
      <EnrollmentForm />
    </main>
  );
}
