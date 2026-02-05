import HeaderText from "@/components/ui/HeaderText";
import { fadeLeft } from "@/lib/utils";
import { motion } from "framer-motion";
import { DotIcon } from "lucide-react";

const benefits = [
  "Restore lifeless wigs & donor hair.",
  "Revive confidence with pro-grade care at home.",
  "90-Minute Rituals. Transformative Results.",
];

const KeyBenefits = () => {
  return (
    <div className="py-12 lg:px-25 px-12">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeLeft}
        custom={0}
      >
        <HeaderText>Key Benefits</HeaderText>

        <ul className="sm:text-lg md:text-xl lg:text-3xl mt-12 w-fit mx-auto">
          {benefits.map((benefit, index) => (
            <motion.li
              key={index}
              className="w-full group-hover:text-gold-2 mb-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeLeft}
              custom={index + 2}
            >
              <div className="flex gap-6">
                <DotIcon size={36} className="text-gold-2 shrink-0" />
                <span className="cursor-pointer capitalize">{benefit}</span>
              </div>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default KeyBenefits;
