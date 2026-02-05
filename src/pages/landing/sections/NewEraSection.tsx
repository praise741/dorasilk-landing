import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.25,
      duration: 1.5,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 1.15 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 2.5,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  },
};

const NewEraSection = () => {
  return (
    <section className="relative py-48 md:py-64 px-6 overflow-hidden">
      {/* Parallax Background Image */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={scaleIn}
        className="absolute inset-0 z-0"
      >
        <div
          className="w-full h-full bg-cover bg-center bg-fixed"
          style={{ backgroundImage: "url('/lifestyle/model-hair.jpg')" }}
        />
      </motion.div>

      {/* Sophisticated Layered Overlay */}
      <div className="absolute inset-0 z-10" style={{
        background: 'linear-gradient(180deg, rgba(74, 44, 23, 0.7) 0%, rgba(0, 0, 0, 0.8) 50%, rgba(74, 44, 23, 0.7) 100%)'
      }} />

      {/* Film Grain */}
      <div className="absolute inset-0 grain-overlay z-20 opacity-50" />

      {/* Decorative Geometric Frame */}
      <div className="absolute inset-12 md:inset-24 border border-accent/20 z-20 pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-30 max-w-4xl mx-auto text-center text-white">
        {/* Decorative Top Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="w-32 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mb-12"
        />

        {/* Main Headline with Dramatic Typography */}
        <motion.h2
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="font-editorial text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[1.1] mb-12 tracking-tight"
        >
          A New Era of{" "}
          <span className="italic text-gradient-gold block md:inline" style={{
            textShadow: '0 4px 30px rgba(201, 161, 74, 0.4)'
          }}>
            Luxury Hair Care
          </span>
        </motion.h2>

        {/* Body Copy with Enhanced Styling */}
        <motion.p
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="font-luxury text-lg md:text-xl lg:text-2xl leading-relaxed mb-14 text-white/85 max-w-3xl mx-auto font-light"
        >
          Born from the belief that every strand carries its own rhythm, Dorasilk is redefining beauty through connection —{" "}
          <span className="italic text-accent">between innovation and intention</span>, between hair and heritage.
        </motion.p>

        {/* CTA with Elevated Design */}
        <motion.div
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <a
            href="https://shop.dorasilk.com/#products"
            className="group relative inline-block px-12 py-5 bg-accent text-primary font-luxury text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-700 overflow-hidden shadow-luxury hover:shadow-2xl"
          >
            {/* Shimmer Effect */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shimmer" />
            <span className="relative z-10">Shop the Collection</span>
          </a>
        </motion.div>

        {/* Decorative Bottom Element */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 1.5, duration: 1 }}
          className="flex items-center justify-center gap-3 mt-16"
        >
          <div className="w-12 h-[1px] bg-accent/40" />
          <div className="w-2 h-2 rounded-full bg-accent" />
          <div className="w-12 h-[1px] bg-accent/40" />
        </motion.div>
      </div>
    </section>
  );
};

export default NewEraSection;
