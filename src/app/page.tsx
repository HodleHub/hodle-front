import Header from "../components/Header";
import Hero from "../components/Hero";
import Features from "../components/Features";
import dynamic from 'next/dynamic'

const PlatformShowcase = dynamic(() => import('../components/PlatformShowcase'), { ssr: false })
import Articles from "../components/Articles";
import HowItWorks from "../components/HowItWorks";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Features />
      <PlatformShowcase />
      <Articles />
      <HowItWorks />
      <CTA />
      <Footer />
    </div>
  );
}