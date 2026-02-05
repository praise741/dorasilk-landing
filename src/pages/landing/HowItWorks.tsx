import womanVideo from "@/assets/woman-video.jpg";
import play from "@/assets/play.png";
import HeaderText from "@/components/ui/HeaderText";
import verify from "@/assets/verify.jpg";
import seal from "@/assets/seal.jpg";
import prep from "@/assets/prep.jpg";
import treat from "@/assets/treat.jpg";
import { motion } from "framer-motion";
// @ts-ignore
import { HashLink } from "react-router-hash-link";

// type Step = {
//   label: string;
//   image: string;
//   copy?: string;
// };

const steps = [
  {
    label: "verify",
    image: verify,
    copy: "Unlock your unique ritual access using NFC or product code.",
  },
  {
    label: "prep",
    image: prep,
    copy: "Deep-clean with Dorasilk's Prep+Purify Shampoo.",
  },
  {
    label: "treat",
    image: treat,
    copy: "Activate transformation with Curl/Sleek Fusion.",
  },
  {
    label: "seal",
    image: seal,
    copy: "Finish with Elixir Serum for softness and longevity.",
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

const HowItWorks = () => {
  return (
    <div className="py-12 flex justify-between items-center lg:px-25 px-12 flex-col gap-12" id="ritual-access">
      <div className="flex gap-6 md:gap-12 flex-col">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeLeft}
          custom={0}
        >
          <HeaderText styles="lg:text-center">How it works</HeaderText>
        </motion.div>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeLeft}
          custom={1}
          className="text-xl md:text-3xl text-center font-semibold"
        >
          4-step Ritual Journey:{" "}
        </motion.p>

        <ol className="text-2xl md:text-3xl flex flex-col gap-6 flex-wrap items-center md:items-start w-full md:grid md:grid-cols-2 md:gap-8 lg:gap-16">
          {steps.map((step, index) => (
            <motion.li
              key={index}
              className="flex gap-3 w-full group flex-col"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeLeft}
              custom={index + 2}
            >
              <div className="flex items-center gap-5 w-60 justify-between">
                <span className="group-hover:text-gold-2 cursor-pointer capitalize transition duration-300 ease-in-out">
                  {step.label}
                </span>
                <div className="w-20 h-20 border border-gold-2 rounded-full overflow-hidden group-hover:scale-105 transition duration-300 ease-in-out">
                  <img src={step.image} alt={step.label} />
                </div>
              </div>
              <p className="text-sm md:text-lg group-hover:text-gold-2  transition duration-300 ease-in-out">
                {step.copy}
              </p>
            </motion.li>
          ))}
        </ol>
      </div>

      <motion.div
        className="lg:w-[45%] h-full rounded-t-4xl overflow-hidden relative group"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeLeft}
        custom={steps.length + 2}
      >
        <div className="w-full h-full absolute bg-gradient-to-t from-black/90 to-[#D9D9D9]/0 group-hover:block hidden" />
        <img
          src={play}
          alt=""
          className="group-hover:block hidden absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] hover:scale-105"
        />
        <img src={womanVideo} alt="" className="object-cover object-center" />
      </motion.div>

      <motion.p
        className="tracking-wider md:text-xl lg:text-2xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeLeft}
        custom={steps.length + 3}
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

export default HowItWorks;
