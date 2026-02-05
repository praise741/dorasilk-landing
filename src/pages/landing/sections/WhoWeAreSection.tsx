import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";
import hairmaking from "@/assets/hairmaking.jpg";

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

const WhoWeAreSection = () => {
  return (
    <section id="about" className="relative py-24 md:py-32 px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-950 to-black" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-gradient-radial from-gold-2/5 via-transparent to-transparent rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
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
                  <Heart size={14} />
                  Who We Are
                  <Heart size={14} />
                </span>
              </span>
            </motion.div>

            {/* Main content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              custom={1}
              className="space-y-6"
            >
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                <span className="text-gold-2 font-playfair font-medium">Dorasilk</span> is redefining wig care through{" "}
                <span className="text-gold-2">science</span>,{" "}
                <span className="text-gold-2">sensory indulgence</span> and{" "}
                <span className="text-gold-2">technology</span>.
              </p>

              <p className="text-lg text-white/70 leading-relaxed">
                Built for women who invest in beautiful wigs and deserve products that honour that investment.
              </p>

              <p className="text-lg text-white/70 leading-relaxed">
                Created for the modern African woman who values{" "}
                <span className="text-white/90">luxury</span>,{" "}
                <span className="text-white/90">innovation</span> and{" "}
                <span className="text-white/90">longevity</span>.
              </p>

              <div className="pt-6">
                <div className="inline-block p-6 rounded-xl bg-gradient-to-br from-gold-2/10 via-gold-2/5 to-transparent border border-gold-2/20">
                  <p className="text-xl md:text-2xl font-playfair text-white/90 italic">
                    "Dorasilk is more than a brand —
                  </p>
                  <p className="text-xl md:text-2xl font-playfair text-gold-2 mt-2">
                    it's a ritual of restoration."
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Values */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              custom={2}
              className="mt-10 flex flex-wrap gap-4"
            >
              {["Science", "Ritual", "Luxury", "Innovation"].map((value, index) => (
                <span
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 rounded-full border border-gold-2/20 bg-gold-2/5 text-gold-2/80 text-sm"
                >
                  <Sparkles size={12} />
                  {value}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Image */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            custom={3}
            className="relative"
          >
            <div className="relative overflow-hidden aspect-[4/5]">
              <img
                src={hairmaking}
                alt="Dorasilk - The Art of Wig Care"
                className="w-full h-full object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              {/* Decorative border */}
              <div className="absolute inset-4 border border-gold-2/20 rounded-xl pointer-events-none" />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 md:bottom-8 md:right-8 p-4 md:p-6 rounded-xl bg-black/80 backdrop-blur-sm border border-gold-2/30">
              <p className="text-gold-2 font-playfair text-lg md:text-xl">The Science of</p>
              <p className="text-white font-playfair text-xl md:text-2xl">Wig Revamp™</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
