import { motion } from "framer-motion";
import founderImage from "@/assets/newimages/IMG_0557.jpg";

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

const FounderSection = () => {
  return (
    <section className="relative py-24 md:py-32 px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-950 to-black" />

      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-gradient-radial from-gold-2/5 via-transparent to-transparent rounded-full blur-3xl" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-gold-2/30 to-gold-2/10" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section badge */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          custom={0}
          className="text-center mb-12"
        >
          <span className="inline-block px-5 py-2.5 rounded-full border border-gold-2/30 bg-gold-2/5 backdrop-blur-sm">
            <span className="text-gold-2 text-sm font-bold leading-tight uppercase">
              Founder's Note
            </span>
          </span>
        </motion.div>

        {/* Main content */}
        <div className="grid lg:grid-cols-3 gap-12 items-center">
          {/* Founder image */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            custom={1}
            className="lg:col-span-1 flex justify-center"
          >
            <div className="relative">
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-2 border-gold-2/30">
                <img
                  src={founderImage}
                  alt="Onaopemipo Monica Akintunde - Founder & CEO"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-full border border-gold-2/20 scale-110" />
              <div className="absolute inset-0 rounded-full border border-gold-2/10 scale-125" />
            </div>
          </motion.div>

          {/* Quote */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            custom={2}
            className="lg:col-span-2"
          >
            <div className="relative">
              {/* Founder Story Content */}
              <div className="space-y-6 text-lg md:text-xl text-white/80 leading-relaxed">
                <h3 className="text-gold-2 font-playfair text-2xl md:text-3xl mb-4">
                  Meet Our Founder
                </h3>
                <p>
                  <span className="text-gold-2 font-medium">Dorasilk™</span> was founded by Onaopemipo Monica Akintunde, whose passion for quality wigs and donor hair led her to challenge the industry’s norms.
                </p>
                <p>
                  After witnessing how quickly premium donor hair could lose its brilliance, she created a new category entirely — a first-of-its-kind <span className="text-gold-2">Ritual System™</span> designed to restore, protect, and extend the life of wigs and donor hair.
                </p>
                <div className="pt-4">
                  <p className="font-medium text-white mb-2">Her vision is simple:</p>
                  <p className="italic text-gold-2/90 text-xl md:text-2xl font-playfair">
                    To give every wig lover the confidence of authenticity, longevity, and luxury care.
                  </p>
                </div>
              </div>

              {/* Signature */}
              <div className="mt-8 pt-6 border-t border-gold-2/20">
                <p className="text-gold-2 font-playfair text-xl md:text-2xl">
                  — Onaopemipo Monica Akintunde
                </p>
                <p className="text-white/60 mt-1 mb-8">
                  Founder & CEO, Dorasilk™
                </p>

                {/* Button */}
                <a
                  href="#science" // Assuming there's a science section or anchor, otherwise just a placeholder or link to shop/about
                  className="inline-block px-8 py-3 border border-gold-2/50 rounded-full text-gold-2 font-semibold transition-all duration-300 hover:bg-gold-2 hover:text-black hover:border-transparent"
                >
                  Discover the Science
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
