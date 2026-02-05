import { motion } from "framer-motion";
import { Play } from "lucide-react";
import hairmakingImg from "../../../assets/hairmaking.jpg"; // Fallback image

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number], // Custom ease for luxury feel
    },
  }),
};

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-primary text-primary-foreground flex items-center justify-center">
      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0 select-none">
        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-black/60 z-10" />

        {/* Placeholder for Video - using Image for now */}
        <img
          src={hairmakingImg}
          alt="Dorasilk Ritual"
          className="w-full h-full object-cover opacity-80 scale-105 animate-subtle-zoom"
        />
        {/* 
           TODO: Replace with actual video background when available
           <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-60">
             <source src="/assets/hero-video.mp4" type="video/mp4" />
           </video>
        */}
      </div>

      <div className="relative z-20 max-w-[90rem] mx-auto px-6 md:px-12 w-full text-center flex flex-col items-center">
        {/* Brand Name */}
        <motion.span
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="inline-block text-accent font-luxury tracking-[0.2em] uppercase text-sm md:text-base mb-6"
        >
          Dorasilk™
        </motion.span>

        {/* Main Headline */}
        <motion.h1
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="font-editorial text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-white leading-[1.1] mb-8 tracking-tight"
        >
          Dorasilk™ — The First-of-Its-Kind <br />
          <span className="italic text-white">Intelligent Wig Revamp Ritual System™</span>
        </motion.h1>

        {/* Subcopy */}
        <motion.p
          custom={2}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="font-luxury text-lg md:text-xl text-white/80 max-w-2xl font-light tracking-wide mb-12"
        >
          A new era in luxury wig care — where science meets ritual,
          <br className="hidden md:block" />
          and every strand finds its rhythm again.
        </motion.p>

        {/* CTAs */}
        <motion.div
          custom={3}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="flex flex-col sm:flex-row items-center gap-6"
        >
          <a
            href="https://shop.dorasilk.com"
            className="group relative px-10 py-4 bg-white text-primary rounded-none font-luxury text-sm font-medium tracking-widest uppercase transition-all duration-500 hover:bg-accent hover:text-primary"
          >
            Discover the Ritual
          </a>

          <button className="flex items-center gap-3 text-white/80 hover:text-accent transition-colors duration-300 font-luxury text-sm tracking-widest uppercase group">
            <span className="p-3 border border-white/20 rounded-full group-hover:border-accent/50 transition-colors">
              <Play size={12} fill="currentColor" />
            </span>
            Watch the Film
          </button>
        </motion.div>
      </div>

      {/* Decorative Bottom Line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1, duration: 1.5, ease: "easeInOut" }}
        className="absolute bottom-12 w-32 h-[1px] bg-accent/50"
      />
    </section>
  );
};

export default HeroSection;

