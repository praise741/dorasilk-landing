import { motion } from "framer-motion";
import hairmaking from "@/assets/hairmaking.jpg";
import HeaderText from "@/components/ui/HeaderText";
import { fadeLeft } from "@/lib/utils";
import GoldenText from "@/components/ui/GoldenText";

const WhoWeAre = () => {
  return (
    <div className="py-12" id="about">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeLeft}
        custom={0}
      >
        <HeaderText>Who we are</HeaderText>
      </motion.div>

      <div className="flex justify-between items-center lg:px-25 px-6 md:px-12 flex-col gap-12 mt-8">
        <motion.div
          className="flex flex-col gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeLeft}
          custom={1}
        >
          <div className="bg-white-1 text-black text-lg leading-relaxed font-light p-3 sm:p-6 w-full flex flex-col gap-4 sm:gap-6 prose lg:prose-lg">
            <GoldenText className="text-center text-xl">
              About Dorasilk™
            </GoldenText>

            <p className="font-semibold">
              The Future of Wig Revamp Has Arrived
            </p>

            <p>
              <GoldenText>Dorasilk™</GoldenText> pioneered the world's
              first-of-its-kind Intelligent Wig Revamp Ritual System™
              (Patent-pending)— a groundbreaking beauty-tech category where
              innovation meets artistry. Designed for modern luxury, Dorasilk
              bridges science and ritual to restore, protect, and personalise
              every wig with precision care.
            </p>

            <p className="font-semibold text-right">Where Technology Meets Ritual</p>

            <p>
              At the heart of Dorasilk lies an intelligent ecosystem that
              transforms wig maintenance into a sensory experience. Each product
              is paired with smart NFC technology and a secure digital ritual
              that guides you step by step — verifying authenticity, unlocking
              tailored care instructions, and ensuring your wig receives the
              treatment it deserves.
            </p>

            <p>It's more than maintenance; it's a mindful moment of renewal.</p>

            <p className="font-semibold">A New Era of Luxury Hair Care</p>

            <p>
              Born from the belief that every strand carries its own rhythm,
              Dorasilk is redefining beauty through connection — between
              innovation and intention, between hair and heritage.
            </p>
            <p>
              Our mission is simple: to empower confidence through intelligent
              design, giving every wig a second life that looks, feels, and
              smells extraordinary.
            </p>
            <p className="text-right">
              <GoldenText>Dorasilk™</GoldenText> — The Science of Wig{" "}
              <GoldenText>Revamp™</GoldenText>
            </p>
          </div>
        </motion.div>
        <motion.div
          className="max-w-[600px] overflow-hidden relative group h-[300px] lg:h-[560px] w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeLeft}
          custom={2}
        >
          <img
            src={hairmaking}
            alt="who we are"
            className="object-cover object-center w-full h-full"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default WhoWeAre;
