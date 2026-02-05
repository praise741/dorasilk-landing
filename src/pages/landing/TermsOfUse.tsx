import HeaderText from "@/components/ui/HeaderText";
import { fadeLeft } from "@/lib/utils";
import { motion } from "framer-motion";

const terms = [
  "By using our services, you confirm that all information you provide is accurate and up-to-date.",
  "You agree not to misuse or exploit our website in any unlawful way, including transmitting viruses, spam, or engaging in fraudulent activity.",
  "All content on our website - including text, images, videos, and product descriptions - is the property of Dorasilk and protected by copyright laws. You may not copy, distribute, or reproduce without prior written consent.",
  "We make every effort to display accurate product descriptions, availability, and pricing. However, errors may occasionally occur.",
  "Prices are subject to change and orders are processed within 2 business days and shipped via our trusted logistics partners.",
  "Delivery timelines may vary by region. Dorasilk is not liable for delays beyond our control.",
  "Our products are formulated for external use on luxury wigs only, not on scalp or synthetic wigs. Please read product labels and instructions carefully before use. Dorasilk is not liable for allergic reactions, misuse, or failure to follow instructions.",
  "To the maximum extent permitted by the law, Dorasilk shall not be held responsible for indirect, incidental, or consequential damages.",
];

const TermsOfUse = () => {
  return (
    <div className="py-12 lg:px-25 px-12 mt-26 prose md:text-lg lg:text-2xl tracking-wide">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeLeft}
        custom={0}
        className="mb-8"
      >
        <HeaderText>TERMS OF USE</HeaderText>
      </motion.div>

      <motion.p
        className="mb-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeLeft}
        custom={1}
      >
        Dorasilk Beauty Ltd is a luxury-approachable beauty brand dedicated to
        restoring, reviving, and revamping hair through science backed
        high-quality care products. These terms of use govern your access to and
        use of our website, products, and services. Please read carefully.
      </motion.p>

      {terms.map((term, index) => {
        return (
          <motion.p
            className="mb-4"
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeLeft}
            custom={index + 2}
          >
            <span className="mr-4 text-gold-2 font-bold">{index + 1}.</span>
            {term}
          </motion.p>
        );
      })}
    </div>
  );
};

export default TermsOfUse;
