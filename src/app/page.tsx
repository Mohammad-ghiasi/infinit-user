import dynamic from 'next/dynamic';
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Contact from "@/components/Contact";

// Dynamically import Testimonials component
const Testimonials = dynamic(() => import('@/components/Testimonials'), {
  ssr: true, // Disable server-side rendering for this component if needed
});

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <Hero />
      {/* Features Section */}
      <Features />
      {/* Testimonials Section */}
      <Testimonials />
      {/* Contact Section */}
      <Contact />
      {/* Footer */}
      <Footer />
    </div>
  );
}
