import InfiniteTunnel from "../waveParticales";
import LandingNavbar from "../landing/Navbar";
import Hero from "../landing/Hero";
import FeaturesSection from "../landing/FeaturesSection";
import TestimonialSection from "../landing/testimonials/TestimonialSection";
import PricingSection from "../landing/pricingCard";
import Footer from "../landing/Footer";



const LandingLayout = () => {
  return (
    <div className="relative min-h-screen bg-[#020004] text-white overflow-hidden">
      <div className="relative z-10">
        <LandingNavbar />

        <main className="pt-16">

          {/* Hero */}
          <section id="hero">
            <Hero />
          </section>

          {/* Features */}
          <section id="features">
            <FeaturesSection />
          </section>

          {/* Testimonials */}
          <section id="testimonials">
            <TestimonialSection />
          </section>

          {/* Pricing */}
          <section id="pricing">
            <PricingSection />
          </section>

        </main>

        <Footer />
      </div>
    </div>
  );
};

export default LandingLayout;

