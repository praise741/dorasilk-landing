import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import prepImg from "@/assets/product-prep+purify.jpg";
import sleekImg from "@/assets/product-sleekfusion.jpg";
import curlImg from "@/assets/product-curlfusion.jpg";
import elixirImg from "@/assets/product-elixirserum.jpg";
import heatluxeImg from "@/assets/product-heatluxe.jpg";

const BACKEND_URL = import.meta.env.VITE_API_URL?.replace(/\/api$/, '') || "https://72.62.237.251.sslip.io";

const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.12,
            duration: 1.2,
            ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
        },
    }),
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
        },
    },
};

// Fallback images mapped by slug keywords
const fallbackImages: Record<string, string> = {
    "prep": prepImg,
    "purify": prepImg,
    "sleek": sleekImg,
    "curl": curlImg,
    "elixir": elixirImg,
    "serum": elixirImg,
    "heatluxe": heatluxeImg,
};

const getFallbackImage = (slug: string) => {
    for (const [key, img] of Object.entries(fallbackImages)) {
        if (slug.toLowerCase().includes(key)) return img;
    }
    return prepImg;
};

interface Product {
    id: string;
    name: string;
    slug: string;
    basePrice: number;
    images: string[];
}

const CollectionSection = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`${BACKEND_URL}/api/products`, { headers: { 'Accept': 'application/json' } })
            .then(res => res.json())
            .then(data => {
                const items = data?.items || data || [];
                if (Array.isArray(items) && items.length > 0) {
                    setProducts(items);
                }
            })
            .catch(() => {})
            .finally(() => setLoading(false));
    }, []);

    const getProductImage = (product: Product) => {
        if (product.images?.[0]) {
            const img = product.images[0];
            return img.startsWith("http") ? img : `${BACKEND_URL}${img}`;
        }
        return getFallbackImage(product.slug);
    };

    return (
        <section id="products" className="relative py-32 md:py-40 px-6 md:px-12 lg:px-24 bg-background overflow-hidden border-t border-accent/10 grain-overlay">
            {/* Radial Glow */}
            <div className="absolute inset-0 radial-glow pointer-events-none" />

            {/* Decorative Corner Element */}
            <div className="absolute top-0 right-0 w-64 h-64 border-r border-t border-accent/5" />

            <div className="relative max-w-[90rem] mx-auto">

                {/* Section Header with Enhanced Layout */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeUp}
                        custom={0}
                        className="space-y-6"
                    >
                        {/* Label with Line */}
                        <div className="flex items-center gap-4">
                            <div className="h-[1px] w-16 bg-accent/30" />
                            <span className="text-accent font-mono uppercase tracking-[0.3em] text-xs font-light">
                                The Collection
                            </span>
                        </div>

                        {/* Headline */}
                        <h2 className="font-editorial text-5xl md:text-6xl lg:text-7xl text-primary leading-[1.1]">
                            Shop the <span className="italic text-gradient-gold">System</span>
                        </h2>

                        {/* Decorative Line */}
                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            className="w-32 h-[2px] bg-gradient-to-r from-accent to-accent/30"
                        />
                    </motion.div>

                    {/* View All Link */}
                    <motion.a
                        href="https://shop.dorasilk.com"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeUp}
                        custom={1}
                        className="group flex items-center gap-3 text-primary font-luxury text-xs uppercase tracking-[0.2em] hover:text-accent transition-all duration-500"
                    >
                        <span className="border-b border-primary/30 pb-1 group-hover:border-accent transition-colors">
                            View All Products
                        </span>
                        <div className="flex items-center gap-1">
                            <div className="w-8 h-[1px] bg-primary/30 group-hover:bg-accent group-hover:w-12 transition-all duration-500" />
                            <div className="w-1 h-1 rounded-full bg-primary/30 group-hover:bg-accent transition-colors" />
                        </div>
                    </motion.a>
                </div>

                {/* Product Grid with Enhanced Cards */}
                {loading ? (
                    <div className="grid md:grid-cols-3 gap-x-8 gap-y-16">
                        {[1, 2, 3].map(i => (
                            <div key={i} className="space-y-4">
                                <div className="aspect-[4/5] bg-gradient-to-br from-secondary/20 to-secondary/10 animate-pulse shadow-luxury" />
                                <div className="h-6 w-3/4 bg-secondary/20 animate-pulse" />
                                <div className="h-4 w-1/2 bg-secondary/10 animate-pulse" />
                            </div>
                        ))}
                    </div>
                ) : (
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                        className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-16"
                    >
                        {products.map((product, i) => (
                            <motion.a
                                key={product.id}
                                href={`https://shop.dorasilk.com/products/${product.slug}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                variants={fadeUp}
                                custom={i}
                                className="group relative block"
                            >
                                {/* Decorative Corner Accent */}
                                <div className="absolute -top-4 -left-4 w-12 h-12 border-l border-t border-accent/10 z-10 transition-all duration-500 group-hover:border-accent/40 group-hover:scale-110" />

                                {/* Product Image Container */}
                                <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-br from-secondary/10 to-secondary/5 mb-6 shadow-luxury">
                                    <img
                                        src={getProductImage(product)}
                                        alt={product.name}
                                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                                    />

                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-700" />

                                    {/* Shop Now Overlay */}
                                    <div className="absolute inset-0 bg-primary/90 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                                        <div className="text-center space-y-3">
                                            <span className="block font-mono text-accent text-xs tracking-[0.3em] uppercase">
                                                Available Now
                                            </span>
                                            <span className="inline-block bg-accent text-primary px-8 py-3 font-luxury text-xs font-semibold uppercase tracking-[0.2em] transform transition-transform duration-500 group-hover:scale-105">
                                                Shop Now
                                            </span>
                                        </div>
                                    </div>

                                    {/* Bottom Accent Line */}
                                    <motion.div
                                        initial={{ scaleX: 0 }}
                                        whileInView={{ scaleX: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 + 0.5, duration: 0.8 }}
                                        className="absolute bottom-0 left-0 right-0 h-1 bg-accent origin-left opacity-0 group-hover:opacity-100 transition-opacity"
                                    />
                                </div>

                                {/* Product Info with Enhanced Typography */}
                                <div className="space-y-2 px-1">
                                    <h3 className="font-editorial text-xl md:text-2xl text-primary group-hover:text-accent transition-colors duration-500 leading-tight">
                                        {product.name}
                                    </h3>
                                    <div className="flex items-center gap-3">
                                        <p className="font-mono text-xs text-accent tracking-wider">
                                            ₦{Number(product.basePrice).toLocaleString()}
                                        </p>
                                        <div className="h-[1px] flex-1 bg-accent/20 max-w-[40px] opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </div>
                                </div>
                            </motion.a>
                        ))}
                    </motion.div>
                )}

            </div>
        </section>
    );
};

export default CollectionSection;
