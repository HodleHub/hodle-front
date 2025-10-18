import AnimatedSection from "../components/AnimatedSection";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import IntroSection from "../components/IntroSection";
import PlatformShowcase from "../components/DynamicPlatformShowcase";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <AnimatedSection>
        <IntroSection />
      </AnimatedSection>
      <AnimatedSection>
        <Hero />
      </AnimatedSection>
      <AnimatedSection>
        <Features />
      </AnimatedSection>
      <AnimatedSection>
        <PlatformShowcase />
      </AnimatedSection>
      {/* <Articles /> */}
      <AnimatedSection>
        <HowItWorks />
      </AnimatedSection>
      {/* <CTA /> */}
      <Footer />
    </div>
  );
}