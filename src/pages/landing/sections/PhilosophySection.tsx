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
      delay: 0.2,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  },
};

const PhilosophySection = () => {
  return (
    <section className="relative py-32 md:py-40 px-6 md:px-12 lg:px-24 bg-background overflow-hidden grain-overlay">
      {/* Subtle Radial Glow */}
      <div className="absolute inset-0 radial-glow pointer-events-none" />

      {/* Decorative Geometric Element */}
      <div className="absolute top-32 left-0 w-64 h-64 border border-accent/5 rotate-45 -translate-x-32" />

      <div className="relative max-w-[90rem] mx-auto grid md:grid-cols-5 gap-12 md:gap-20 items-center">
        {/* Text Left (60%) with Enhanced Typography */}
        <motion.div
          className="md:col-span-3 space-y-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInLeft}
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
            <div className="w-12 h-[1px] bg-accent/30" />
            <span className="text-accent font-mono uppercase tracking-[0.3em] text-xs font-light">
              ABOUT DORASILK™
            </span>
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
            The Future of{" "}
            <span className="italic text-gradient-gold">Wig Revamp</span>{" "}
            Has Arrived
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
            Dorasilk™ pioneered the world's first-of-its-kind{" "}
            <span className="font-mono text-accent text-sm">Intelligent Wig Revamp Ritual System™</span>{" "}
            (Patent-pending) — a groundbreaking beauty-tech category where innovation meets artistry.{" "}
            Designed for modern luxury, Dorasilk bridges science and ritual to restore, protect,{" "}
            and personalise every wig with precision care.
          </motion.p>
        </motion.div>

        {/* Image Right (40%) with Enhanced Treatment */}
        <motion.div
          className="md:col-span-2 relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInRight}
        >
          {/* Decorative Frame */}
          <div className="absolute -top-6 -right-6 w-full h-full border border-accent/20 z-0" />

          {/* Image with Luxury Shadow */}
          <div className="relative z-10 shadow-luxury overflow-hidden">
            <img
              src="/lifestyle/model-lineup-box.jpg"
              alt="Model with Heatluxe box and Dorasilk products"
              className="w-full object-cover aspect-[3/4] transition-transform duration-700 hover:scale-105"
            />
            {/* Subtle Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent pointer-events-none" />
          </div>

          {/* Floating Accent Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 1, duration: 0.8 }}
            className="absolute -bottom-4 -left-4 w-24 h-24 bg-accent/10 backdrop-blur-sm border border-accent/20 flex items-center justify-center z-20"
          >
            <span className="font-mono text-accent text-xs tracking-wider">EST.<br/>2024</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PhilosophySection;
