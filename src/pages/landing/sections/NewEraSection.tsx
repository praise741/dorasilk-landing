import { motion } from "framer-motion";

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

const NewEraSection = () => {
  return (
    <section
      className="relative py-32 md:py-48 px-6 bg-fixed bg-cover bg-center"
      style={{ backgroundImage: "url('/lifestyle/model-hair.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 max-w-3xl mx-auto text-center text-white">
        <motion.h2
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="font-editorial text-4xl md:text-5xl lg:text-6xl leading-tight mb-8"
        >
          A New Era of Luxury Hair Care
        </motion.h2>
        <motion.p
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="font-luxury text-lg md:text-xl leading-relaxed mb-10 text-white/90"
        >
          Born from the belief that every strand carries its own rhythm, Dorasilk is redefining beauty through connection — between innovation and intention, between hair and heritage.
        </motion.p>
        <motion.div
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <a
            href="https://shop.dorasilk.com/#products"
            className="inline-block px-10 py-4 bg-white text-primary font-luxury text-sm font-medium tracking-widest uppercase transition-all duration-500 hover:bg-accent hover:text-primary"
          >
            Shop the Collection
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default NewEraSection;
