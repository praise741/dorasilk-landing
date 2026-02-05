import { motion } from "framer-motion";
import CustomerCard from "@/components/ui/CustomerCard";
import david from "@/assets/david-avatar.png";
import john from "@/assets/john-avatar.png";

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.25, duration: 0.7 },
  }),
};

const customerCards = [
  {
    styles: "bg-white-1 text-deepbrown",
    info: "Real-time chat monitoring has transformed our customer support. We respond to queries instantly, and our customers love it",
    name: "Rachel",
    role: "Support Manager",
    quoteColor: "text-deepbrown",
  },
  {
    styles: "bg-gold-1 text-white-1 lg:col-span-2",
    info: "The live chat feature has increased our sales conversions by 30%. We can engage with customers in real-time and address their concerns",
    name: "David",
    role: "Freelancer",
    image: david,
    quoteColor: "text-gold-2",
  },
  {
    styles: "bg-gradient-to-r from-[#1A1102] to-[#482E04] text-white-1",
    info: "The live chat feature has increased our sales conversions by 30%. We can engage with customers in real-time and address their concerns",
    name: "David",
    role: "Freelancer",
    image: david,
    quoteColor: "text-white-1",
  },
  {
    styles: "bg-white-1 text-deepbrown",
    info: "The live chat feature has increased our sales conversions by 30%. We can engage with customers in real-time and address their concerns",
    name: "John",
    role: "Freelancer",
    image: john,
    quoteColor: "text-deepbrown",
  },
  {
    styles: "bg-white text-black",
    info: "The live chat feature has increased our sales conversions by 30%. We can engage with customers in real-time and address their concerns",
    name: "Micheal",
    role: "CEO",
    quoteColor: "text-black",
  },
];

const CustomerLove = () => {
  return (
    <div className="py-12 bg-white-2 lg:px-25 px-12">
      <motion.h2
        className="font-medium text-center text-4xl md:text-left lg:text-6xl font-playfair-display text-deepbrown"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeLeft}
        custom={0}
      >
        Customer Love
      </motion.h2>

      <div className="grid grid-cols-1 gap-10 mt-10 lg:grid-cols-3 items-center">
        {customerCards.map((card, idx) => (
          <motion.div
            key={card.name + idx}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeLeft}
            custom={idx + 1}
            className={`overflow-hidden ${card.styles} rounded-3xl`}
          >
            <CustomerCard {...card} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CustomerLove;
