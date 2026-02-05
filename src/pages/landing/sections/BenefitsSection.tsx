import { motion } from "framer-motion";
import { Check, Crown } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.6,
      ease: "easeOut" as const,
    },
  }),
};

const benefits = [
  "Revives lifeless donor hair instantly",
  "90-minute ritual, 90-day visible results",
  "Restores shine, movement, softness and bounce",
  "Scientifically reduces heat fatigue",
  "Brings old wigs back to life — even severely dull ones",
  "Perfect for at-home self-care and stylist use",
  "A complete pro-grade beauty-tech system",
];

const BenefitsSection = () => {
  return (
    <section className="relative py-24 md:py-32 px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-950 to-black" />
      
      {/* Decorative gold glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-gold-2/8 via-transparent to-transparent rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            custom={0}
            className="inline-flex items-center gap-2 mb-6"
          >
            <span className="px-5 py-2.5 rounded-full border border-gold-2/30 bg-gold-2/5 backdrop-blur-sm">
              <span className="flex items-center gap-2 text-gold-2 text-base font-bold tracking-widest uppercase brightness-110">
                <Crown size={14} />
                Key Benefits
                <Crown size={14} />
              </span>
            </span>
          </motion.div>

          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            custom={1}
            className="font-playfair text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-12"
          >
            <span className="bg-gradient-to-r from-gold-2 via-yellow-200 to-gold-2 bg-clip-text text-transparent">
              Engineered for Longevity.
            </span>
            <br />
            <span className="text-white">Designed for Luxury.</span>
          </motion.h2>
        </div>

        {/* Benefits list */}
        <div className="space-y-4">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              custom={index + 2}
              className="group"
            >
              <div className="flex items-center gap-5 p-5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-gold-2/30 hover:bg-gold-2/[0.02] transition-all duration-500">
                {/* Check icon */}
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gold-2/10 flex items-center justify-center group-hover:bg-gold-2/20 group-hover:shadow-[0_0_15px_rgba(212,175,55,0.3)] transition-all duration-500">
                  <Check size={20} className="text-gold-2" />
                </div>
                
                {/* Text */}
                <p className="text-lg md:text-xl text-white/80 group-hover:text-white transition-colors duration-500">
                  {benefit}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Highlight box */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          custom={benefits.length + 2}
          className="mt-12 text-center"
        >
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="inline-block p-6 md:p-8 rounded-2xl bg-gradient-to-br from-gold-2/15 via-gold-2/5 to-transparent border border-gold-2/30"
          >
            <p className="text-2xl md:text-3xl font-playfair text-gold-2 font-medium">
              90 Minutes. 90 Days.
            </p>
            <p className="text-white/60 mt-2">
              One ritual. Lasting transformation.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection;
