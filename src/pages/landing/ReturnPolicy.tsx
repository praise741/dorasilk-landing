import HeaderText from "@/components/ui/HeaderText";
import ListItem from "@/components/ui/ListItem";
import { fadeLeft } from "@/lib/utils";
import { motion } from "framer-motion";

const terms = [
  {
    label:
      "We do not accept returns once a product has been opened, used or the access code has been used.",
  },
  {
    label: "Returns are only accepted for:",
    info: [
      "Products that arrive damaged, defective, or incorrect.",
      "Products returned unopened, unused, and in original packaging within 48 hours of delivery.",
    ],
  },
  {
    label:
      "If your product qualifies for a refund, a full or partial refund will be processed back to your original payment method within 7 business days.",
  },
  {
    label: "Shipping fees are non-refundable.",
  },
  {
    label:
      "Damaged or defective products may be exchanged for the same item at no additional cost.",
  },
  {
    label:
      "To request an exchange, please contact our customer care team (+2347016844864) within 24 hours of delivery with photo proof of the issue.",
  },
  {
    label: "Dorasilk is not liable for damage done while in transit.",
  },
  {
    label:
      "Gift cards, promotional items, or sale products are final sale and cannot be refunded or exchanged.",
  },
];

const ReturnPolicy = () => {
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
        <HeaderText>REFUND & RETURN POLICY</HeaderText>
      </motion.div>

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
            {term.label}
            {term.info && (
              <ul className="ml-8 mt-2">
                {term.info.map((info, idx) => (
                  <ListItem key={idx} index={index + 2}>
                    {info}
                  </ListItem>
                ))}
              </ul>
            )}
          </motion.p>
        );
      })}
    </div>
  );
};

export default ReturnPolicy;
