import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { ArrowDown, Sparkles, Camera, Video, Package, Droplet } from "lucide-react";
import client from "../../../api/client";

// Import new product images (Fallback)
import productSleek from "@/assets/newimages/Picsart_25-11-21_15-58-05-945.jpg";
import productCurl from "@/assets/newimages/Picsart_25-11-21_16-36-56-513.jpg";
import productElixir from "@/assets/newimages/Gemini_Generated_Image_94jrh494jrh494jr.jpeg.jpg";
import productHeat from "@/assets/newimages/Gemini_Generated_Image_pqr8ghpqr8ghpqr8.jpeg.jpg";
import productPrep from "@/assets/newimages/Picsart_25-11-24_09-50-01-686.jpg";
import collectionImage from "@/assets/newimages/Gemini_Generated_Image_e94hyje94hyje94h.jpeg.jpg";
import galleryUpdate1 from "@/assets/newimages/gallery-update-1.jpg";
import galleryUpdate2 from "@/assets/newimages/gallery-update-2.jpg";
import journal1 from "@/assets/journal1.png";
import journal2 from "@/assets/journal2.png";

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

// Fallback gallery items
const fallbackGalleryItems = [
  {
    image: galleryUpdate1,
    alt: "Dorasilk ritual moment",
    icon: Camera,
  },
  {
    image: productSleek,
    alt: "Sleek Fusion application moment",
    icon: Droplet,
  },
  {
    image: journal1,
    alt: "Behind the scenes luxury",
    icon: Video,
  },
  {
    image: productCurl,
    alt: "Curl Fusion application moment",
    icon: Droplet,
  },
  {
    image: productHeat,
    alt: "HeatLuxe Cap activation",
    icon: Sparkles,
  },
  {
    image: galleryUpdate2,
    alt: "Dorasilk experience",
    icon: Sparkles,
  },
  {
    image: journal2,
    alt: "Motion video snippet",
    icon: Video,
  },
  {
    image: productElixir,
    alt: "Elixir Serum droplet texture",
    icon: Droplet,
  },
  {
    image: productPrep,
    alt: "Luxury packaging display",
    icon: Package,
  },
  {
    image: collectionImage,
    alt: "The Ultimate Wig Care Collection",
    icon: Sparkles,
  },
];

interface GalleryItem {
  image: string;
  alt: string;
  icon: any;
}

const API_BASE_URL = (import.meta.env.VITE_API_URL || "http://localhost:3000/api").replace('/api', '');

const GallerySection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [items, setItems] = useState<GalleryItem[]>(fallbackGalleryItems);
  const [loading, setLoading] = useState(true);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  useEffect(() => {
    const fetchGallery = async () => {
        try {
            const response = await client.get('/content?section=gallery');
            if (response.data && response.data.length > 0) {
                const mappedItems = response.data.map((item: any) => ({
                    image: `${API_BASE_URL}${item.url}`,
                    alt: item.altText || "Dorasilk Gallery Image",
                    icon: Sparkles // Default icon for dynamic images
                }));
                setItems(mappedItems);
            }
        } catch (error) {
            console.error("Failed to fetch gallery images, using fallback", error);
        } finally {
            setLoading(false);
        }
    };

    fetchGallery();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative py-16 md:py-24 overflow-hidden bg-black"
    >
      {/* Section header */}
      <div className="px-6 md:px-12 lg:px-24 mb-12">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          custom={1}
          className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6"
        >

          <span className="bg-gradient-to-r from-yellow-100 via-gold-2 to-yellow-100 bg-clip-text text-transparent brightness-150">
            Dorasilk Experience
          </span>
        </motion.h2>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          custom={2}
          className="text-lg md:text-xl text-white/60 text-center max-w-3xl mx-auto"
        >
          A visual journey into our beauty-tech world — capturing early ritual moments, luxury behind-the-scenes, product artistry and motion that defines the Dorasilk ritual universe.
        </motion.p>
      </div>

      {/* Horizontal scroll gallery */}
      <motion.div style={{ opacity }} className="relative">
        <div
          ref={scrollRef}
          className="flex gap-4 md:gap-5 overflow-x-auto pb-6 px-6 md:px-12 lg:px-24 scrollbar-hide"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                className="group relative flex-shrink-0"
              >
                <div className="relative w-[280px] md:w-[320px] lg:w-[360px] aspect-[4/5] overflow-hidden shadow-lg shadow-black/50">
                  {/* Image */}
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => {
                        // Fallback if dynamic image fails to load
                        e.currentTarget.src = fallbackGalleryItems[index % fallbackGalleryItems.length].image;
                    }}
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Icon badge */}
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm border border-gold-2/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                    <Icon size={18} className="text-gold-2" />
                  </div>

                  {/* Decorative corner accents */}
                  <div className="absolute top-3 left-3 w-6 h-6 border-l-2 border-t-2 border-gold-2/0 group-hover:border-gold-2/50 transition-all duration-500 rounded-tl-lg" />
                  <div className="absolute bottom-3 right-3 w-6 h-6 border-r-2 border-b-2 border-gold-2/0 group-hover:border-gold-2/50 transition-all duration-500 rounded-br-lg" />
                </div>
              </motion.div>
            );
          })}

          {/* Animated placeholder cards for missing assets (Only show if no items) */}
          {items.length === 0 && [...Array(4)].map((_, index) => (
            <motion.div
              key={`placeholder-${index}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: (items.length + index) * 0.08, duration: 0.5 }}
              className="group relative flex-shrink-0"
            >
              {/* ... placeholder content ... */}
               <div className="relative w-[280px] md:w-[320px] lg:w-[360px] aspect-[4/5] rounded-xl overflow-hidden shadow-lg shadow-black/50 bg-gradient-to-br from-neutral-900 to-neutral-950 border border-white/5">
                {/* Animated gradient background */}
                <div className="absolute inset-0 overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-gold-2/10 via-transparent to-gold-2/5"
                    animate={{
                      backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />

                  {/* Floating particles */}
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-gold-2/40 rounded-full"
                      style={{
                        left: `${20 + i * 15}%`,
                        top: `${30 + (i % 3) * 20}%`,
                      }}
                      animate={{
                        y: [0, -20, 0],
                        opacity: [0.3, 0.8, 0.3],
                      }}
                      transition={{
                        duration: 3 + i * 0.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.4,
                      }}
                    />
                  ))}
                </div>

                {/* Center icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="w-16 h-16 rounded-full bg-gold-2/10 border border-gold-2/20 flex items-center justify-center"
                  >
                    <Sparkles size={28} className="text-gold-2/60" />
                  </motion.div>
                </div>

                {/* Coming soon text */}
                <div className="absolute bottom-6 left-0 right-0 text-center">
                  <p className="text-gold-2/50 text-sm tracking-widest uppercase">Coming Soon</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Scroll indicators */}
        <div className="absolute left-0 top-0 bottom-6 w-12 bg-gradient-to-r from-black to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-6 w-12 bg-gradient-to-l from-black to-transparent pointer-events-none" />
      </motion.div>

      {/* CTA */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        custom={3}
        className="text-center mt-12 px-6"
      >
        <a
          href="https://shop.dorasilk.com"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-gold-2 to-yellow-600 rounded-full text-black font-semibold text-lg transition-all duration-500 hover:shadow-[0_0_40px_rgba(212,175,55,0.4)] hover:scale-105"
        >
          Discover the Ritual
          <ArrowDown size={20} className="group-hover:translate-y-1 transition-transform" />
        </a>
      </motion.div>

      {/* Hide scrollbar styles */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default GallerySection;
