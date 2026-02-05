import { motion } from "framer-motion";
import { Play } from "lucide-react";
import hairmakingImg from "../../../assets/hairmaking.jpg"; // Fallback image

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.25 + 0.3,
      duration: 1.4,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number], // Dramatic luxury easing
    },
  }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 1.1 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 2,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  },
};

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-primary text-primary-foreground flex items-center justify-center pt-20">
      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0 select-none">
        {/* Layered Sophisticated Overlay */}
        <div className="absolute inset-0 z-10" style={{
          background: 'radial-gradient(ellipse 120% 100% at 50% 0%, rgba(74, 44, 23, 0.3), transparent 60%), linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.7) 100%)'
        }} />

        {/* Film Grain */}
        <div className="absolute inset-0 grain-overlay z-20 pointer-events-none" />

        {/* Background Image with Ken Burns Effect */}
        <motion.img
          initial="hidden"
          animate="visible"
          variants={scaleIn}
          src={hairmakingImg}
          alt="Dorasilk Ritual"
          className="w-full h-full object-cover opacity-90"
        />

        {/* Decorative Geometric Elements */}
        <div className="absolute top-24 right-12 w-32 h-32 border border-gold-2/20 rounded-full opacity-30 z-20" />
        <div className="absolute bottom-32 left-16 w-48 h-48 border border-gold-2/10 z-20" style={{ transform: 'rotate(45deg)' }} />
      </div>

      <div className="relative z-20 max-w-[90rem] mx-auto px-6 md:px-12 w-full text-center flex flex-col items-center">

        {/* Decorative Line Above Brand */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.5, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-16 h-[1px] bg-gradient-to-r from-transparent via-gold-2 to-transparent mb-8"
        />

        {/* Brand Name with Refined Styling */}
        <motion.div
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="inline-flex items-center gap-3 mb-8"
        >
          <div className="h-[1px] w-8 bg-gold-2/40" />
          <span className="text-accent font-mono tracking-[0.3em] uppercase text-xs md:text-sm font-light">
            Dorasilk™
          </span>
          <div className="h-[1px] w-8 bg-gold-2/40" />
        </motion.div>

        {/* Main Headline with Dramatic Typography */}
        <motion.h1
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="font-editorial text-3xl md:text-5xl lg:text-6xl xl:text-7xl text-white leading-[1.12] mb-10 tracking-tight max-w-5xl"
        >
          Dorasilk™ — The First-of-Its-Kind{" "}
          <span className="italic text-gradient-gold inline-block" style={{
            textShadow: '0 2px 20px rgba(201, 161, 74, 0.3)'
          }}>
            Intelligent Wig Revamp Ritual System™
          </span>
        </motion.h1>

        {/* Subcopy with Better Spacing */}
        <motion.p
          custom={2}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="font-luxury text-base md:text-lg text-white/75 max-w-2xl font-light tracking-wide mb-14 leading-relaxed"
        >
          A new era in luxury wig care — where science meets ritual,
          <br className="hidden md:block" />
          and every strand finds its rhythm again.
        </motion.p>

        {/* CTAs with Elevated Design */}
        <motion.div
          custom={3}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="flex flex-col sm:flex-row items-center gap-6 md:gap-8"
        >
          <a
            href="https://shop.dorasilk.com"
            className="group relative px-12 py-5 bg-accent text-primary font-luxury text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-700 overflow-hidden shadow-luxury hover:shadow-2xl"
          >
            {/* Shimmer Effect on Hover */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shimmer" />
            <span className="relative z-10">Discover the Ritual</span>
          </a>

          <button className="group flex items-center gap-4 text-white/70 hover:text-accent transition-all duration-500 font-luxury text-xs tracking-[0.15em] uppercase">
            <span className="relative p-4 border border-white/30 rounded-full group-hover:border-accent group-hover:bg-accent/10 transition-all duration-500 group-hover:rotate-90">
              <Play size={10} fill="currentColor" className="relative left-[1px]" />
            </span>
            <span className="group-hover:tracking-[0.2em] transition-all duration-500">Watch the Film</span>
          </button>
        </motion.div>
      </div>

      {/* Decorative Bottom Elements */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ delay: 1.5, duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-16 left-1/2 -translate-x-1/2 flex items-center gap-3"
      >
        <div className="w-8 h-[1px] bg-accent/30" />
        <div className="w-1 h-1 rounded-full bg-accent" />
        <div className="w-24 h-[1px] bg-gradient-to-r from-accent/50 to-transparent" />
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-accent/50 to-transparent" />
      </motion.div>
    </section>
  );
};

export default HeroSection;

