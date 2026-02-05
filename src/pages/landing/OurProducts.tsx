import ProductCard from "@/components/ui/ProductCard";
import product1 from "@/assets/product-curlfusion.jpg";
import product2 from "@/assets/product-elixirserum.jpg";
import product3 from "@/assets/product-heatluxe.jpg";
import product4 from "@/assets/product-prep+purify.jpg";
import product5 from "@/assets/product-sleekfusion.jpg";
import Pill from "@/components/ui/Pill";
import { motion } from "framer-motion";

const products = [
  {
    img: product1,
    name: "Curl Fusion",
    description: "Bounce-defining revival for curly wigs and bundles",
    to: "https://www.dorasilk.com/products/curlfusion",
  },
  {
    img: product2,
    name: "Elixir Serum",
    description: "Daily silk-boosting oil with Golden Veil™ scent",
    to: "https://www.dorasilk.com/products/elixir-serum",
  },
  {
    img: product3,
    name: "Heat Luxe",
    description: " Thermal-powered cap to activate revamp rituals",
    to: "https://www.dorasilk.com/products/heatluxe-cap",
  },
  {
    img: product4,
    name: "Prep + Purify",
    description: "Opens fibres for maximum treatment absorption",
    to: "https://www.dorasilk.com/products/prep-purify-shampoo",
  },
  {
    img: product5,
    name: "Sleek Fusion",
    description: "Pro-grade smoothing ritual for bone straight perfection",
    to: "https://www.dorasilk.com/products/sleekfusion",
  },
];

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.25, duration: 0.7 },
  }),
};

const OurProducts = () => {
  return (
    <div
      className="flex items-center flex-col gap-10 md:px-25 px-12 py-12"
      id="products"
    >
      <motion.div
        className="w-full flex justify-between flex-col lg:flex-row gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeLeft}
        custom={0}
      >


        <div className="flex gap-2.5 flex-wrap">
          <Pill>All</Pill>
          <Pill selected>Sleek fusion</Pill>
          <Pill>Curl Fusion</Pill>
          <Pill>Prep+Purify Shampoo</Pill>
          <Pill>Tools</Pill>
          <Pill>Elixir Serum</Pill>
        </div>
      </motion.div>

      <div className="flex flex-wrap gap-2.5 gap-y-8 justify-center w-fit">
        {products.map((product, index) => {
          const { img, name, description, to } = product;

          return (
            <ProductCard key={index} label={name} description={description} to={to}>
              <img src={img} alt="" className="rounded-md w-full" />
            </ProductCard>
          );
        })}
      </div>
    </div>
  );
};

export default OurProducts;
