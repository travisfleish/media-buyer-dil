import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import logo from "@/assets/genius-sports-logo.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-[70vh] flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Subtle radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
          "radial-gradient(ellipse 60% 40% at 50% 40%, hsl(234 100% 50% / 0.05), transparent)",
        }}
      />

      <motion.div
        className="relative z-10 max-w-3xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.img
          src={logo}
          alt="Genius Sports"
          className="h-12 md:h-16 mx-auto mb-12 object-contain"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        />

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
          A Day in the Life of a{" "}
          <span className="genius-gradient-text">Media Buyer</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4 leading-relaxed">
          How Genius is embedded in the daily media buying that powers a $500B+ global ad market — from client brief to daily execution.
        </p>

        <p className="text-sm text-muted-foreground/70 mb-16">
          Scroll to follow the journey
        </p>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="w-6 h-6 text-muted-foreground mx-auto" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
