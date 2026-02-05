import { motion } from "framer-motion";
import collectionImage from "@/assets/newimages/Gemini_Generated_Image_e94hyje94hyje94h.jpeg.jpg";

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

const ProductIntroSection = () => {
  return (
    <section className="relative py-24 md:py-32 px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-950 to-black" />

      {/* Decorative gold accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent via-gold-2/50 to-gold-2/20" />
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-gradient-radial from-gold-2/5 via-transparent to-transparent rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-gradient-radial from-gold-2/5 via-transparent to-transparent rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Main title */}
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          custom={1}
          className="font-playfair text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-8"
        >
          <span className="text-white">Meet the </span>
          <span className="bg-gradient-to-r from-gold-2 via-yellow-200 to-gold-2 bg-clip-text text-transparent">
            Dorasilk
          </span>
          <br />
          <span className="text-white">Intelligent Ritual System</span>
          <span className="text-gold-2">™</span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          custom={2}
          className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-3xl mx-auto"
        >
          A curated suite powered by{" "}
          <span className="text-gold-2 font-medium">beauty-tech innovation</span> for{" "}
          <span className="text-white/90">bone straight</span>,{" "}
          <span className="text-white/90">curly</span>, and{" "}
          <span className="text-white/90">silky donor hair</span>.
        </motion.p>

        {/* Full Collection Image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-16 relative"
        >
          <div className="relative overflow-hidden rounded-2xl border border-gold-2/20 shadow-2xl shadow-gold-2/10">
            <img
              src={collectionImage}
              alt="The Ultimate Dorasilk Wig Care Collection"
              className="w-full h-auto object-cover"
            />
            {/* Subtle overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          </div>
        </motion.div>

        {/* Decorative elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-12 flex justify-center"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-gold-2/50" />
            <div className="w-2 h-2 rounded-full bg-gold-2/60" />
            <div className="w-24 h-px bg-gradient-to-r from-gold-2/50 via-gold-2 to-gold-2/50" />
            <div className="w-2 h-2 rounded-full bg-gold-2/60" />
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-gold-2/50" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductIntroSection;
