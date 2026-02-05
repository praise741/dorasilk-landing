import HeaderText from "@/components/ui/HeaderText";
import ListItem from "@/components/ui/ListItem";
import { fadeLeft } from "@/lib/utils";
import { motion } from "framer-motion";

const policies = [
  "We do not sell or rent your data.",
  "Data may be shared with trusted partners (e.g., payment processors, logistics partners) solely for order completion.",
  "Information may be disclosed if required by law.",
  "We use industry-standard safeguards to protect your information. However, no online transmission is 100% secure.",
  "Cookies help us personalize your experience. You may disable them in your browser, but some features may not work.",
  "Depending on your location, you may access, update, or delete your personal data; opt out of marketing emails at any time and request details of data we hold about you.",
];

const infoCollected = [
  "Personal Information: Name, email, phone number, shipping/billing address, payment details.",
  "Non-Personal Information: Browser type, IP address, cookies, device data, and site usage patterns.",
];

const useInfo = [
  "Non-Personal Information: Browser type, IP address, cookies, device data, and site usage patterns.",
  "Process and fulfill orders.",
  "Communicate order updates, promotions, and brand news (only with your consent).",
  "Improve our website, products, and customer experience.",
  "Ensure security, prevent fraud, and comply with legal obligations.",
];

const PrivacyPolicy = () => {
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
        <HeaderText>PRIVACY POLICY</HeaderText>
      </motion.div>

      <motion.p
        className="mb-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeLeft}
        custom={1}
      >
        Dorasilk values your trust. This privacy policy explains how we collect,
        use, and safeguard your personal information when you interact with us.
      </motion.p>

      <p>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeLeft}
          custom={2}
        >
          <span className="text-gold-2 font-bold">1.</span> The information we
          collect from you are:
        </motion.p>
        <ul>
          {infoCollected.map((info, index) => (
            <ListItem index={index + 3}>{info}</ListItem>
          ))}
        </ul>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeLeft}
          custom={5}
        >
          We use this information to:
        </motion.p>
        <ul>
          {useInfo.map((info, index) => (
            <ListItem index={index + 6}>{info}</ListItem>
          ))}
        </ul>
      </p>

      {policies.map((policy, index) => {
        return (
          <motion.p
            className="mb-4"
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeLeft}
            custom={index + 8}
          >
            <span className="mr-4 text-gold-2 font-bold">{index + 2}.</span>
            {policy}
          </motion.p>
        );
      })}

      <motion.p
        className="mb-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeLeft}
        custom={14}
      >
        Dorasilk values your trust. This privacy policy explains how we collect,
        use, and safeguard your personal information when you interact with us.
      </motion.p>
    </div>
  );
};

export default PrivacyPolicy;
