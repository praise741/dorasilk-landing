import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 1,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

const TechnologySection = () => {
  return (
    <section className="relative py-32 px-6 md:px-12 lg:px-24 bg-secondary/30 overflow-hidden">
      <div className="max-w-[90rem] mx-auto grid md:grid-cols-5 gap-12 md:gap-16 items-center">
        {/* Image Left (40%) */}
        <motion.div
          className="md:col-span-2 order-2 md:order-1"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <img
            src="/lifestyle/science-pour.jpg"
            alt="Dorasilk product pouring into hand"
            className="w-full rounded-lg shadow-xl object-cover aspect-[3/4]"
          />
        </motion.div>

        {/* Text Right (60%) */}
        <motion.div
          className="md:col-span-3 order-1 md:order-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          custom={0}
        >
          <span className="text-accent font-luxury uppercase tracking-[0.25em] text-xs font-medium block mb-8">
            INNOVATION
          </span>
          <h2 className="font-editorial text-4xl md:text-5xl lg:text-6xl text-primary leading-tight mb-8">
            Where Technology Meets Ritual
          </h2>
          <div className="w-24 h-[1px] bg-accent mb-8" />
          <p className="font-luxury text-lg md:text-xl text-foreground/80 leading-relaxed">
            At the heart of Dorasilk lies an intelligent ecosystem that transforms wig maintenance into a sensory experience. Each product is paired with smart NFC technology and a secure digital ritual that guides you step by step — verifying authenticity, unlocking tailored care instructions, and ensuring your wig receives the treatment it deserves. It's more than maintenance; it's a mindful moment of renewal.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TechnologySection;
