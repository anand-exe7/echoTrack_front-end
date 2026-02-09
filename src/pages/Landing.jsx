import Navbar from "../components/landing/Navbar";
import Hero from "../components/landing/Hero";
import Philosophy from "../components/landing/Philosophy";
import FeatureGrid from "../components/landing/FeatureGrid";
import WhyEchoTrack from "../components/landing/WhyEchoTrack";
import GrowthPatterns from "../components/landing/GrowthPatterns";
import ProductPreview from "../components/landing/ProductPreview";
import FinalCTA from "../components/landing/FinalCTA";
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

      <ScrollReveal delay={0.15}>
        <FeatureGrid />
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <WhyEchoTrack />
      </ScrollReveal>

      <ScrollReveal delay={0.25}>
        <GrowthPatterns />
      </ScrollReveal>

      <ScrollReveal delay={0.3}>
        <ProductPreview />
      </ScrollReveal>

      <ScrollReveal delay={0.35}>
        <FinalCTA />
      </ScrollReveal>

      <Footer />
    </>
  );
}
