import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import prepImg from "@/assets/product-prep+purify.jpg";
import sleekImg from "@/assets/product-sleekfusion.jpg";
import curlImg from "@/assets/product-curlfusion.jpg";
import elixirImg from "@/assets/product-elixirserum.jpg";
import heatluxeImg from "@/assets/product-heatluxe.jpg";

const BACKEND_URL = "https://dorasilk-backend.onrender.com";

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.1,
            duration: 1,
            ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
        },
    }),
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
        fetch(`${BACKEND_URL}/api/products`)
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
        <section id="products" className="relative py-32 px-6 md:px-12 lg:px-24 bg-background overflow-hidden border-t border-border/50">
            <div className="max-w-[90rem] mx-auto">

                {/* Section Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeUp}
                        custom={0}
                    >
                        <span className="text-accent font-luxury uppercase tracking-[0.25em] text-xs font-medium block mb-4">
                            The Collection
                        </span>
                        <h2 className="font-editorial text-4xl md:text-5xl text-primary">
                            Shop the System
                        </h2>
                    </motion.div>

                    <motion.a
                        href="https://shop.dorasilk.com"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeUp}
                        custom={1}
                        className="text-primary font-luxury text-sm uppercase tracking-widest border-b border-primary/20 pb-1 hover:border-primary transition-colors"
                    >
                        View All Products
                    </motion.a>
                </div>

                {/* Product Grid */}
                {loading ? (
                    <div className="grid md:grid-cols-3 gap-x-8 gap-y-12">
                        {[1, 2, 3].map(i => (
                            <div key={i} className="aspect-[4/5] bg-secondary/20 animate-pulse" />
                        ))}
                    </div>
                ) : (
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12">
                        {products.map((product, i) => (
                            <motion.a
                                key={product.id}
                                href={`https://shop.dorasilk.com/products/${product.slug}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                custom={i + 2}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-50px" }}
                                variants={fadeUp}
                                className="group cursor-pointer block"
                            >
                                <div className="relative aspect-[4/5] overflow-hidden bg-secondary/10 mb-6">
                                    <img
                                        src={getProductImage(product)}
                                        alt={product.name}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <span className="bg-accent/90 backdrop-blur text-primary px-8 py-3 font-luxury text-xs uppercase tracking-widest">
                                            Shop Now
                                        </span>
                                    </div>
                                </div>

                                <div className="space-y-1">
                                    <h3 className="font-editorial text-xl text-primary">{product.name}</h3>
                                    <p className="font-luxury text-sm text-accent">₦{Number(product.basePrice).toLocaleString()}</p>
                                </div>
                            </motion.a>
                        ))}
                    </div>
                )}

            </div>
        </section>
    );
};

export default CollectionSection;
