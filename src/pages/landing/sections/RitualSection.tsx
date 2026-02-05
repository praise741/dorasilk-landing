import { motion } from "framer-motion";
import seal from "@/assets/product-elixirserum.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 1,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
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
    <section className="relative py-32 px-6 md:px-12 lg:px-24 bg-background overflow-hidden">

      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-24">
        <motion.span
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="text-accent font-luxury uppercase tracking-[0.25em] text-xs font-medium block mb-6"
        >
          The System
        </motion.span>

        <motion.h2
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="font-editorial text-4xl md:text-5xl lg:text-6xl text-primary leading-tight"
        >
          The Dorasilk Ritual
        </motion.h2>

        <motion.p
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="mt-6 font-luxury text-lg text-foreground/70 max-w-xl mx-auto"
        >
          A refined three-step system created to work in harmony.
        </motion.p>
      </div>

      {/* 3-Step Grid */}
      <div className="max-w-[90rem] mx-auto grid md:grid-cols-3 gap-8">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            custom={i + 2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
            className="group cursor-pointer"
          >
            {/* Image Container */}
            <div className="relative aspect-[3/4] overflow-hidden bg-secondary/20 mb-8">
              <img
                src={step.image}
                alt={step.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              {/* Step Number Overlay */}
              <div className="absolute top-0 left-0 p-6">
                <span className="font-editorial text-4xl text-white group-hover:text-accent transition-colors duration-500">
                  {step.number}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-3 border-t border-border pt-6 group-hover:border-accent transition-colors duration-500">
              <h3 className="font-editorial text-3xl text-primary">
                {step.title}
              </h3>
              <p className="font-luxury text-sm font-medium uppercase tracking-widest text-accent">
                {step.product}
              </p>
              <p className="font-luxury text-base text-foreground/70 leading-relaxed block pt-2">
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.p
        custom={6}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeUp}
        className="text-center font-editorial text-xl md:text-2xl text-primary italic mt-24 max-w-3xl mx-auto"
      >
        "Together, these steps deliver a controlled, salon-grade transformation — at home."
      </motion.p>

    </section>
  );
};

export default RitualSection;

