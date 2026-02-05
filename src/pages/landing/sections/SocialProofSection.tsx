import { motion } from "framer-motion";
import { Award, FlaskConical, Globe, Sparkles } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: "easeOut" as const,
    },
  }),
};



const SocialProofSection = () => {
  return (
    <section className="relative py-24 md:py-32 px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-950 to-black" />

      {/* Gold accent glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-radial from-gold-2/8 via-transparent to-transparent rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-20">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            custom={0}
            className="font-playfair text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-8 max-w-5xl mx-auto"
          >
            <span className="text-white">Built for </span>
            <span className="text-gold-2">Wig Lovers. </span>
            <span className="text-white">Crafted for </span>
            <span className="text-gold-2">Stylists. </span>
            <br className="hidden md:block" />
            <span className="text-white">Inspired by </span>
            <span className="bg-gradient-to-r from-gold-2 via-yellow-200 to-gold-2 bg-clip-text text-transparent">
              Beauty-Tech Innovation.
            </span>
          </motion.h2>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            custom={1}
            className="text-lg md:text-xl text-white/70 leading-relaxed max-w-3xl mx-auto"
          >
            Dorasilk is redefining wig care through science, craft and innovation — engineered for donor hair and trusted by early adopters who value luxury and longevity.
          </motion.p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: Sparkles,
              title: "Patent-pending ritual innovation",
              description: "Our intelligent revamp system is engineered exclusively for luxury wigs and donor hair.",
            },
            {
              icon: FlaskConical,
              title: "Extensively tested on premium donor hair",
              description: "Multiple fibre types, textures and real-world scenarios — refined for performance and consistency.",
            },
            {
              icon: Globe,
              title: "Nigerian-born, globally inspired",
              description: "A beauty-tech system created in Africa, influenced by global luxury standards.",
            },
            {
              icon: Award,
              title: "The future of pro-grade wig care",
              description: "Luxury results, reduced heat fatigue and science-backed longevity for every strand.",
            },
          ].map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
                custom={index + 2}
                className="group h-full"
              >
                <div className="h-full p-8 rounded-2xl bg-gradient-to-br from-white/[0.03] to-transparent border border-white/5 hover:border-gold-2/30 transition-all duration-500 hover:bg-gold-2/[0.02] text-center flex flex-col items-center">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-full bg-gold-2/10 flex items-center justify-center mb-6 group-hover:bg-gold-2/20 group-hover:shadow-[0_0_25px_rgba(212,175,55,0.3)] transition-all duration-500 shrink-0">
                    <Icon size={32} className="text-gold-2" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-playfair text-white font-bold mb-4 min-h-[3.5rem] flex items-center justify-center">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/60 text-sm leading-relaxed group-hover:text-white/80 transition-colors duration-500">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
