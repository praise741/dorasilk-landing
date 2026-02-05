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

const PhilosophySection = () => {
  return (
    <section className="relative py-32 px-6 md:px-12 lg:px-24 bg-background overflow-hidden">
      <div className="max-w-[90rem] mx-auto grid md:grid-cols-5 gap-12 md:gap-16 items-center">
        {/* Text Left (60%) */}
        <motion.div
          className="md:col-span-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          custom={0}
        >
          <span className="text-accent font-luxury uppercase tracking-[0.25em] text-xs font-medium block mb-8">
            ABOUT DORASILK™
          </span>
          <h2 className="font-editorial text-4xl md:text-5xl lg:text-6xl text-primary leading-tight mb-8">
            The Future of Wig Revamp Has Arrived
          </h2>
          <div className="w-24 h-[1px] bg-accent mb-8" />
          <p className="font-luxury text-lg md:text-xl text-foreground/80 leading-relaxed">
            Dorasilk™ pioneered the world's first-of-its-kind Intelligent Wig Revamp Ritual System™ (Patent-pending) — a groundbreaking beauty-tech category where innovation meets artistry. Designed for modern luxury, Dorasilk bridges science and ritual to restore, protect, and personalise every wig with precision care.
          </p>
        </motion.div>

        {/* Image Right (40%) */}
        <motion.div
          className="md:col-span-2"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <img
            src="/lifestyle/model-lineup-box.jpg"
            alt="Model with Heatluxe box and Dorasilk products"
            className="w-full rounded-lg shadow-xl object-cover aspect-[3/4]"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default PhilosophySection;
