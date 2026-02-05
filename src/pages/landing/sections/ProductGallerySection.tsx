import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";
import client from "../../../api/client";
import productSleek from "@/assets/newimages/Picsart_25-11-21_15-58-05-945.jpg";
import productCurl from "@/assets/newimages/Picsart_25-11-21_16-36-56-513.jpg";
import productElixir from "@/assets/newimages/Gemini_Generated_Image_94jrh494jrh494jr.jpeg.jpg";
import productHeat from "@/assets/newimages/Gemini_Generated_Image_pqr8ghpqr8ghpqr8.jpeg.jpg";
import productPrep from "@/assets/newimages/Picsart_25-11-24_09-50-01-686.jpg";

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

const fallbackProducts = [
  {
    name: "Sleek Fusion™",
    variant: "Noir Marine™",
    description: "Pro-grade smoothing ritual for bone straight perfection.",
    image: productSleek,
    cta: "Revamp Now",
    link: "https://shop.dorasilk.com",
    featured: true,
  },
  {
    name: "Curl Fusion™",
    variant: "Pearl Bounce™",
    description: "Bounce-defining revival for curly wigs and bundles.",
    image: productCurl,
    cta: "Revamp Now",
    link: "https://shop.dorasilk.com",
    featured: true,
  },
  {
    name: "Elixir Serum™",
    variant: "Golden Veil™",
    description: "Daily silk-boosting oil for softness, shine and fibre longevity.",
    image: productElixir,
    cta: "Shop Now",
    link: "https://shop.dorasilk.com",
    featured: false,
  },
  {
    name: "HeatLuxe™ Cap",
    variant: "",
    description: "Thermal-powered cap engineered to activate the Dorasilk ritual.",
    image: productHeat,
    cta: "Shop HeatLuxe",
    link: "https://shop.dorasilk.com",
    featured: false,
  },
  {
    name: "Prep+Purify Shampoo™",
    variant: "Aqua Bloom",
    description: "Opens fibres for maximum treatment absorption.",
    image: productPrep,
    cta: "Shop Now",
    link: "https://shop.dorasilk.com",
    featured: false,
  },
];

interface ProductItem {
    name: string;
    variant: string;
    description: string;
    image: string;
    cta: string;
    link: string;
    featured: boolean;
}

const API_BASE_URL = (import.meta.env.VITE_API_URL || "http://localhost:3000/api").replace('/api', '');

const ProductGallerySection = () => {
    const [products, setProducts] = useState<ProductItem[]>(fallbackProducts);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await client.get('/products');
                if (response.data && response.data.items && response.data.items.length > 0) {
                    const mappedProducts = response.data.items.map((p: any) => ({
                        name: p.name,
                        variant: p.variants && p.variants.length > 0 ? p.variants[0].variantName : "",
                        description: p.description,
                        image: p.images && p.images.length > 0 
                            ? (p.images[0].startsWith('http') ? p.images[0] : `${API_BASE_URL}${p.images[0]}`) 
                            : productSleek, // Default fallback
                        cta: "Shop Now",
                        link: `https://shop.dorasilk.com/products/${p.slug}`,
                        featured: p.isFeatured
                    }));
                    setProducts(mappedProducts);
                }
            } catch (error) {
                console.error("Failed to fetch products, using fallback", error);
            }
        };

        fetchProducts();
    }, []);

  return (
    <section id="products" className="relative py-24 md:py-32 px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-950 to-black" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Featured products - larger cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {products.filter(p => p.featured).map((product, index) => (
            <motion.div
              key={product.name}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              custom={index}
              className="group"
            >
              <a
                href={product.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="relative overflow-hidden bg-gradient-to-br from-neutral-900 to-neutral-950 border border-white/5 hover:border-gold-2/30 transition-all duration-500">
                  {/* Image */}
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      onError={(e) => { e.currentTarget.src = fallbackProducts[0].image; }}
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                  </div>

                  {/* Content overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-playfair text-2xl md:text-3xl text-white mb-1">
                          {product.name}
                        </h3>
                        {product.variant && (
                          <p className="text-gold-2 text-base font-bold tracking-widest uppercase mb-3 brightness-110">
                            {product.variant}
                          </p>
                        )}
                        <p className="text-white/70 text-sm md:text-base max-w-xs">
                          {product.description}
                        </p>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="mt-6">
                      <span className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gold-2 to-yellow-600 rounded-full text-black font-semibold text-sm transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] group-hover:scale-105">
                        {product.cta}
                        <ExternalLink size={16} />
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>

        {/* Other products - smaller cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {products.filter(p => !p.featured).map((product, index) => (
            <motion.div
              key={product.name}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              custom={index + 2}
              className="group"
            >
              <a
                href={product.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="relative overflow-hidden bg-gradient-to-br from-neutral-900 to-neutral-950 border border-white/5 hover:border-gold-2/30 transition-all duration-500">
                  {/* Image */}
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      onError={(e) => { e.currentTarget.src = fallbackProducts[0].image; }}
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                  </div>

                  {/* Content overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="font-playfair text-xl text-white mb-1">
                      {product.name}
                    </h3>
                    {product.variant && (
                      <p className="text-gold-2 text-sm font-bold tracking-widest uppercase mb-2 brightness-110">
                        {product.variant}
                      </p>
                    )}
                    <p className="text-white/60 text-sm mb-4 line-clamp-2">
                      {product.description}
                    </p>

                    {/* CTA */}
                    <span className="inline-flex items-center gap-2 px-4 py-2 border border-gold-2/50 rounded-full text-gold-2 text-sm font-medium transition-all duration-500 group-hover:bg-gold-2/10 group-hover:border-gold-2">
                      {product.cta}
                      <ExternalLink size={14} />
                    </span>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGallerySection;
