import { motion } from "framer-motion";
import seal from "@/assets/product-elixirserum.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.18,
      duration: 1.3,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  }),
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const steps = [
  {
    number: "01",
    title: "Cleanse",
    product: "Prep + Purify Shampoo",
    image: "/lifestyle/prep-purify-hand.jpg",
    description: "Purify and open fibre cuticles for maximum absorption.",
  },
  {
    number: "02",
    title: "Treat",
    product: "Sleek Fusion / Curl Fusion",
    image: "/lifestyle/curlfusion-hand.jpg",
    description: "Activate transformation with proprietary complexes engineered for luxury fibres.",
  },
  {
    number: "03",
    title: "Seal",
    product: "Elixir Serum",
    image: seal,
    description: "Lock in softness and longevity with the Golden Veil™ scent.",
  },
];

const RitualSection = () => {
  return (
    <section className="relative py-32 md:py-48 px-6 md:px-12 lg:px-24 bg-background overflow-hidden grain-overlay">

      {/* Radial Glow Background */}
      <div className="absolute inset-0 radial-glow pointer-events-none" />

      {/* Decorative Geometric Accent */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent via-accent/20 to-transparent" />

      {/* Header */}
      <div className="relative max-w-4xl mx-auto text-center mb-32">
        {/* Label with Refined Styling */}
        <motion.div
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="inline-flex items-center gap-3 mb-8"
        >
          <div className="h-[1px] w-12 bg-accent/30" />
          <span className="text-accent font-mono uppercase tracking-[0.3em] text-xs font-light">
            The System
          </span>
          <div className="h-[1px] w-12 bg-accent/30" />
        </motion.div>

        {/* Main Headline */}
        <motion.h2
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="font-editorial text-5xl md:text-6xl lg:text-7xl text-primary leading-[1.1] mb-6"
        >
          The <span className="italic text-gradient-gold">Dorasilk</span> Ritual
        </motion.h2>

        {/* Decorative Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.8, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-24 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mb-8"
        />

        {/* Subheading */}
        <motion.p
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="font-luxury text-base md:text-lg text-foreground/60 max-w-xl mx-auto leading-relaxed"
        >
          A refined three-step system created to work in harmony.
        </motion.p>
      </div>

      {/* 3-Step Grid with Staggered Animation */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="relative max-w-[90rem] mx-auto grid md:grid-cols-3 gap-8 md:gap-12"
      >
        {steps.map((step, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            custom={i}
            className="group relative"
          >
            {/* Decorative Corner Element */}
            <div className="absolute -top-4 -right-4 w-16 h-16 border-r border-t border-accent/10 z-20 transition-all duration-500 group-hover:border-accent/40 group-hover:scale-110" />

            {/* Image Container with Enhanced Overlay */}
            <div className="relative aspect-[3/4] overflow-hidden bg-gradient-to-br from-secondary/10 to-secondary/30 mb-8 shadow-luxury">
              <img
                src={step.image}
                alt={step.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-700" />

              {/* Step Number with Dramatic Styling */}
              <div className="absolute top-8 left-8">
                <span className="font-editorial text-6xl md:text-7xl text-white/90 group-hover:text-accent transition-all duration-500 drop-shadow-lg">
                  {step.number}
                </span>
              </div>

              {/* Animated Indicator */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 + 1, duration: 0.8 }}
                className="absolute bottom-0 left-0 right-0 h-1 bg-accent origin-left"
              />
            </div>

            {/* Content with Enhanced Layout */}
            <div className="space-y-4 border-t-2 border-border pt-8 group-hover:border-accent transition-all duration-500">
              <h3 className="font-editorial text-3xl md:text-4xl text-primary group-hover:text-accent transition-colors duration-500">
                {step.title}
              </h3>

              <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent/80">
                {step.product}
              </p>

              <p className="font-luxury text-sm md:text-base text-foreground/60 leading-relaxed pt-2">
                {step.description}
              </p>

              {/* Hover Arrow Indicator */}
              <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 pt-2">
                <div className="w-8 h-[1px] bg-accent" />
                <div className="w-1 h-1 bg-accent rounded-full" />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Closing Quote with Elevated Typography */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeUp}
        custom={6}
        className="relative text-center mt-32 max-w-3xl mx-auto"
      >
        {/* Decorative Quotes */}
        <div className="absolute -top-8 left-0 font-editorial text-8xl text-accent/20">"</div>

        <p className="relative font-editorial text-2xl md:text-3xl lg:text-4xl text-primary italic leading-relaxed px-12">
          Together, these steps deliver a controlled, salon-grade transformation — at home.
        </p>

        {/* Attribution Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 1 }}
          className="w-16 h-[1px] bg-accent mx-auto mt-8"
        />
      </motion.div>

    </section>
  );
};

export default RitualSection;

