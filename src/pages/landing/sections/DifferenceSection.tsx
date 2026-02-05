import { motion } from "framer-motion";
import { Check } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const DifferenceSection = () => {
  return (
    <section className="relative py-24 px-6 md:px-12 lg:px-24 bg-white overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          custom={0}
          className="mb-16"
        >
          <span className="text-accent font-luxury uppercase tracking-[0.25em] text-xs font-medium block mb-6">
            The Dorasilk Difference
          </span>
          <h2 className="font-editorial text-4xl md:text-5xl text-primary mb-6">
            Luxury isn’t excess — it’s precision.
          </h2>
        </motion.div>

        {/* Checklist Grid */}
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 text-left max-w-3xl mx-auto">
          {[
            "Developed with scientific intent",
            "Designed for long-term hair health",
            "Created to eliminate guesswork",
            "Trusted for visible, repeatable results"
          ].map((item, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              custom={i + 1}
              className="flex items-center gap-4 group"
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent transition-colors duration-500">
                <Check size={16} className="text-accent group-hover:text-white transition-colors duration-500" />
              </div>
              <span className="font-luxury text-lg text-primary/80 group-hover:text-primary transition-colors duration-300">
                {item}
              </span>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          custom={5}
          className="mt-20"
        >
          <a
            href="https://shop.dorasilk.com"
            className="inline-block px-12 py-4 bg-primary text-white font-luxury text-sm uppercase tracking-[0.2em] hover:bg-accent hover:text-primary transition-all duration-500"
          >
            Begin Your Ritual
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default DifferenceSection;
