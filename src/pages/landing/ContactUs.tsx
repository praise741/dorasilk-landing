import { motion } from "framer-motion";
import { ContactForm } from "@/components/contact-form";
import HeaderText from "@/components/ui/HeaderText";
import Socials from "@/components/ui/Socials";

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.25, duration: 0.7 },
  }),
};

const ContactUs = () => {
  return (
    <div className="md:px-25 lg:px-12 py-12 px-6" id="contact">
      <div className="flex items-center justify-around flex-col lg:flex-row gap-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeLeft}
          custom={0}
          className="flex flex-col items-center justify-center lg:w-[45%] w-full p-6"
        >
          <HeaderText>Contact us</HeaderText>
          <Socials />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeLeft}
          custom={1}
          className="lg:w-[45%] w-full"
        >
          <ContactForm />
        </motion.div>
      </div>
    </div>
  );
};

export default ContactUs