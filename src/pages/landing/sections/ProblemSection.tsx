import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  }),
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.4,
      delay: 0.2,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.4,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  },
};

const TechnologySection = () => {
  return (
    <section className="relative py-32 md:py-40 px-6 md:px-12 lg:px-24 bg-secondary/30 overflow-hidden grain-overlay">
      {/* Subtle Radial Glow */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 100% 60% at 30% 50%, rgba(201, 161, 74, 0.06), transparent 70%)'
      }} />

      {/* Decorative Circle Element */}
      <div className="absolute top-40 right-0 w-96 h-96 border border-accent/5 rounded-full translate-x-48" />

      <div className="relative max-w-[90rem] mx-auto grid md:grid-cols-5 gap-12 md:gap-20 items-center">
        {/* Image Left (40%) with Enhanced Treatment */}
        <motion.div
          className="md:col-span-2 order-2 md:order-1 relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInLeft}
        >
          {/* Decorative Frame - Different Style */}
          <div className="absolute -top-8 -left-8 w-full h-full z-0">
            <div className="w-32 h-32 border-l-2 border-t-2 border-accent/30" />
          </div>

          {/* Image with Luxury Shadow */}
          <div className="relative z-10 shadow-luxury overflow-hidden">
            <img
              src="/lifestyle/science-pour.jpg"
              alt="Dorasilk product pouring into hand"
              className="w-full object-cover aspect-[3/4] transition-transform duration-700 hover:scale-105"
            />
            {/* Subtle Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent pointer-events-none" />
          </div>

          {/* Floating Tech Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 1, duration: 0.8 }}
            className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground px-6 py-4 z-20 shadow-luxury"
          >
            <span className="font-mono text-accent text-xs tracking-widest block mb-1">SMART NFC</span>
            <span className="font-editorial text-xl text-white">TECHNOLOGY</span>
          </motion.div>
        </motion.div>

        {/* Text Right (60%) with Enhanced Typography */}
        <motion.div
          className="md:col-span-3 order-1 md:order-2 space-y-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInRight}
        >
          {/* Label with Decorative Elements */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            custom={0}
            className="flex items-center gap-4"
          >
            <span className="text-accent font-mono uppercase tracking-[0.3em] text-xs font-light">
              INNOVATION
            </span>
            <div className="flex-1 h-[1px] bg-accent/20 max-w-[60px]" />
          </motion.div>

          {/* Headline with Dramatic Sizing */}
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            custom={1}
            className="font-editorial text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-primary leading-[1.1] tracking-tight"
          >
            Where{" "}
            <span className="italic text-gradient-gold">Technology</span>{" "}
            Meets Ritual
          </motion.h2>

          {/* Decorative Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.6, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="w-32 h-[2px] bg-gradient-to-r from-accent to-accent/30"
          />

          {/* Body Copy with Refined Typography */}
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            custom={2}
            className="font-luxury text-base md:text-lg text-foreground/70 leading-relaxed max-w-2xl"
          >
            At the heart of Dorasilk lies an intelligent ecosystem that transforms wig maintenance into a sensory experience. Each product is paired with{" "}
            <span className="font-mono text-accent text-sm">smart NFC technology</span>{" "}
            and a secure digital ritual that guides you step by step — verifying authenticity, unlocking tailored care instructions, and ensuring your wig receives the treatment it deserves.{" "}
            <span className="italic">It's more than maintenance; it's a mindful moment of renewal.</span>
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default TechnologySection;
