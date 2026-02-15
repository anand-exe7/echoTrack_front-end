import Navbar from "../components/landing/Navbar";
import Hero from "../components/landing/Hero";
import Philosophy from "../components/landing/Philosophy";
import FeatureGrid from "../components/landing/FeatureGrid";
import WhyEchoTrack from "../components/landing/WhyEchoTrack";
import GrowthPatterns from "../components/landing/GrowthPatterns";
import ProductPreview from "../components/landing/ProductPreview";
import CalmReflection from "../components/landing/CalmReflection";
import Footer from "../components/landing/Footer";
import ScrollReveal from "../components/ScrollReveal";

export default function Landing() {
  return (
    <>
      <Navbar />

      <Hero />

      <ScrollReveal>
        <Philosophy />
      </ScrollReveal>

      <section id="features">
        <ScrollReveal delay={0.15}>
          <FeatureGrid />
        </ScrollReveal>
      </section>

      <section id="why">
        <ScrollReveal delay={0.2}>
          <WhyEchoTrack />
        </ScrollReveal>
      </section>

      <section id="growth">
        <ScrollReveal delay={0.25}>
          <GrowthPatterns />
        </ScrollReveal>
      </section>

      <section id="preview">
        <ScrollReveal delay={0.3}>
          <ProductPreview />
        </ScrollReveal>
      </section>

      {/* Calm Reflection = Final CTA */}
      <ScrollReveal delay={0.35}>
        <CalmReflection />
      </ScrollReveal>

      <Footer />
    </>
  );
}
