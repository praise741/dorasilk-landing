import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import HeaderText from "@/components/ui/HeaderText";
// @ts-ignore
import { HashLink } from "react-router-hash-link";

type FAQS = {
  question: string;
  answer: string;
};

const faqs: FAQS[] = [
  {
    question: "What is Dorasilk?",
    answer:
      "A pro-grade, scientifically backed brand for revamping donor hair, wigs, and bundles — from home",
  },
  {
    question: "Can I use it on natural hair or scalp?",
    answer:
      "No. Dorasilk is strictly for wigs, bundles, and donor hair — not for the scalp.",
  },
  {
    question: "How often should I reapply treatments?",
    answer:
      "Every 6-10 wears or every 6-8 weeks, depending on buildup or dryness.",
  },
  {
    question: "Do I wash the hair first?",
    answer:
      "Yes. Always cleanse with our Prep+Purify Shampoo before treatment.",
  },
  {
    question: "How do I use it?",
    answer: "Tap your phone to the bottle to unlock your digital ritual guide",
  },
  {
    question: "Can I use other shampoos?",
    answer:
      "Yes, but ensure its sulphate-free for routine washes. But for re-treatment, always use our Prep+Purify Shampoo",
  },
  {
    question: "Can I use the Elixir Serum daily?",
    answer:
      "Yes. Apply to dry or damp hair for shine, frizz control, and heat protection.",
  },
  {
    question: "What's in the kit?",
    answer:
      "Treatment + Ritual Access. Some kits include our Heatluxe™ Cap or SilkLeaf™ Brush.",
  }
];

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.25, duration: 0.7 },
  }),
};

const FAQs = () => {
  return (
    <div className="py-25 flex flex-col items-center justify-center gap-6 md:gap-12 px-6 md:px-12" id="faq">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeLeft}
        custom={0}
        className="rounded-full text-deepbrown border-2 border-white-1 bg-gradient-to-r from-gold-2 to-white-2 py-2 px-5 text-sm font-medium"
      >
        FAQs
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeLeft}
        custom={1}
        className="max-w-[620px]"
      >
        <HeaderText>Frequently Asked Questions</HeaderText>
        <p className="text-[20px] text-center max-w-[800px] mt-6 md:mt-12">
          Everything you need to know before you start creating your aesthetic
          masterpiece.
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeLeft}
        custom={2}
        className="w-full flex flex-col items-center"
      >
        <Accordion
          type="single"
          collapsible
          defaultValue="item-1"
          className="md:w-[90%] flex flex-col gap-4 p-2 md:p-6 max-w-220"
        >
          {faqs.map((faq, index) => {
            return (
              <AccordionItem
                value={`item-${index + 1}`}
                className="border bg-white-1 rounded-2xl text-black p-3 md:p-6"
                key={index + 1}
              >
                <AccordionTrigger className="md:text-xl lg:text-2xl text-deepbrown">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance text-xs md:text-sm lg:text-base">
                  <p>{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </motion.div>

      <motion.p
        className="tracking-wider md:text-xl lg:text-2xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeLeft}
        custom={3}
      >
        Still have questions?{" "}
        <HashLink
          className="text-gold-2 hover:underline underline-offset-4 cursor-pointer"
          to="#contact"
          smooth
        >
          Contact us.
        </HashLink>
      </motion.p>
    </div>
  );
};

export default FAQs;
