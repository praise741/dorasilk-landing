import { motion } from "framer-motion";
import { ArrowRight, ShoppingBag, Sparkles } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.7,
      ease: "easeOut" as const,
    },
  }),
};

const FinalCTASection = () => {
  return (
    <section className="relative py-32 md:py-40 px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Background with gold gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-950 to-black" />

      {/* Decorative gold orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-gradient-radial from-gold-2/15 via-gold-2/5 to-transparent rounded-full blur-3xl" />

      {/* Top decorative line */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent via-gold-2/50 to-gold-2/20"
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Decorative sparkles */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          custom={0}
          className="flex justify-center gap-4 mb-8"
        >
          <Sparkles size={24} className="text-gold-2/60" />
          <Sparkles size={32} className="text-gold-2" />
          <Sparkles size={24} className="text-gold-2/60" />
        </motion.div>

        {/* Main headline */}
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          custom={1}
          className="font-playfair text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-8"
        >
          <span className="text-white">Ready to begin your</span>
          <br />
          <span className="bg-gradient-to-r from-gold-2 via-yellow-200 to-gold-2 bg-clip-text text-transparent">
            transformation?
          </span>
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          custom={2}
          className="text-xl md:text-2xl text-white/60 mb-12 max-w-2xl mx-auto"
        >
          Join thousands of women experiencing the future of wig care.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          custom={3}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          {/* Primary CTA */}
          <a
            href="https://rituals.dorasilk.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-10 py-5 bg-gradient-to-r from-gold-2 to-yellow-600 rounded-full text-black font-bold text-lg overflow-hidden transition-all duration-500 hover:shadow-[0_0_50px_rgba(212,175,55,0.5)] hover:scale-105"
          >
            <span className="relative z-10 flex items-center gap-3">
              Start Your Revamp Ritual
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-gold-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </a>

          {/* Secondary CTA */}
          <a
            href="https://shop.dorasilk.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-10 py-5 border-2 border-gold-2/50 rounded-full text-gold-2 font-bold text-lg transition-all duration-500 hover:border-gold-2 hover:bg-gold-2/10 hover:shadow-[0_0_40px_rgba(212,175,55,0.3)]"
          >
            <span className="flex items-center gap-3">
              <ShoppingBag size={20} />
              Shop Dorasilk Products
            </span>
          </a>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          custom={4}
          className="mt-16 flex flex-wrap justify-center gap-8 text-white/40 text-sm"
        >
          <span className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-gold-2/60" />
            Patent-Pending Technology
          </span>
          <span className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-gold-2/60" />
            5,000+ Ritual Tests
          </span>
          <span className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-gold-2/60" />
            Pro-Grade Results
          </span>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          custom={5}
          className="mt-12 text-gold-2 font-playfair text-xl md:text-2xl italic"
        >
          The Science of Wig Revamp™
        </motion.p>
      </div>

      {/* Bottom decorative line */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-gold-2/50 to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
      />
    </section>
  );
};

export default FinalCTASection;
