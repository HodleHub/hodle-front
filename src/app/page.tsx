"use client";

import { motion } from "framer-motion";
import Header from "../components/Header";
import IntroSection from "../components/IntroSection";
import Hero from "../components/Hero";
import Features from "../components/Features";
import PlatformShowcase from "../components/PlatformShowcase";
import Articles from "../components/Articles";
import HowItWorks from "../components/HowItWorks";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

const sectionAnimation = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <motion.div {...sectionAnimation}>
        <IntroSection />
      </motion.div>
      <motion.div {...sectionAnimation}>
        <Hero />
      </motion.div>
      <motion.div {...sectionAnimation}>
        <Features />
      </motion.div>
      <motion.div {...sectionAnimation}>
        <PlatformShowcase />
      </motion.div>
      {/* <Articles /> */}
      <motion.div {...sectionAnimation}>
        <HowItWorks />
      </motion.div>
      {/* <CTA /> */}
      <Footer />
    </div>
  );
}