import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

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

const PromiseSection = () => {
  return (
    <section className="relative py-32 md:py-40 px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Luxurious background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-950 to-black" />
        {/* Gold accent glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-radial from-gold-2/10 via-gold-2/5 to-transparent rounded-full blur-3xl" />
      </div>

      {/* Decorative lines */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-gold-2/50 to-gold-2/20"
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Section badge */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          custom={0}
          className="inline-flex items-center gap-2 mb-8"
        >
          <span className="px-5 py-2.5 rounded-full border border-gold-2/30 bg-gold-2/5 backdrop-blur-sm">
            <span className="flex items-center gap-2 text-gold-2 text-base font-bold tracking-widest uppercase brightness-110">
              <Sparkles size={14} />
              Our Promise
              <Sparkles size={14} />
            </span>
          </span>
        </motion.div>

        {/* Main title */}
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          custom={1}
          className="font-playfair text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-8"
        >
          <span className="bg-gradient-to-r from-yellow-200 via-gold-2 to-yellow-200 bg-clip-text text-transparent font-extrabold">
            Restoring Luxury.
          </span>
          <br />
          <span className="text-white font-extrabold">Reviving Confidence.</span>
        </motion.h2>

        {/* Description */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          custom={2}
          className="space-y-6"
        >
          <p className="text-xl md:text-2xl text-white/80 leading-relaxed">
            Through{" "}
            <span className="text-gold-2 font-medium">beauty-tech innovation</span>,{" "}
            <span className="text-gold-2 font-medium">ritual</span> and{" "}
            <span className="text-gold-2 font-medium">science</span>, Dorasilk brings wigs and donor hair back to their natural softness, shine, movement and life.
          </p>

          <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold-2/50 to-transparent mx-auto" />

          <p className="text-lg md:text-xl text-white/60 italic font-light">
            Because your wigs deserve the same science-backed care as your skin.
          </p>
        </motion.div>

        {/* Decorative elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-16 flex justify-center gap-8"
        >
          {["Softness", "Shine", "Movement", "Life"].map((word, index) => (
            <motion.span
              key={word}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
              className="text-sm md:text-base text-gold-2/70 tracking-widest uppercase font-light"
            >
              {word}
            </motion.span>
          ))}
        </motion.div>
      </div>

      {/* Bottom decorative line */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-t from-transparent via-gold-2/30 to-gold-2/10"
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
      />
    </section>
  );
};

export default PromiseSection;
