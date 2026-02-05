import { motion } from "framer-motion";
import prep from "@/assets/prep.jpg";
import treat from "@/assets/treat.jpg";
import seal from "@/assets/seal.jpg";

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

const products = [
    {
        id: "1",
        title: "Prep + Purify Shampoo",
        slug: "prep-purify",
        image: prep,
    },
    {
        id: "2",
        title: "Sleek Fusion Treatment",
        slug: "sleek-fusion",
        image: treat,
    },
    {
        id: "3",
        title: "Elixir Serum",
        slug: "elixir-serum",
        image: seal,
    },
];

const CollectionSection = () => {
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
                <div className="grid md:grid-cols-3 gap-x-8 gap-y-12">
                    {products.map((product, i) => (
                        <motion.div
                            key={product.id}
                            custom={i + 2}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            variants={fadeUp}
                            className="group cursor-pointer"
                        >
                            <div className="relative aspect-[4/5] overflow-hidden bg-secondary/10 mb-6">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <a
                                        href={`https://shop.dorasilk.com/products/${product.slug}`}
                                        className="bg-white/90 backdrop-blur text-primary px-8 py-3 font-luxury text-xs uppercase tracking-widest hover:bg-white transition-colors"
                                    >
                                        Shop Now
                                    </a>
                                </div>
                            </div>

                            <div className="space-y-1">
                                <h3 className="font-editorial text-2xl text-primary">{product.title}</h3>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default CollectionSection;
