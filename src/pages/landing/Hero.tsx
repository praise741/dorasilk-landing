import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import GoldenText from "@/components/ui/GoldenText";

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.25, duration: 0.7 },
  }),
};

const Hero = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  useEffect(() => {
    if (!sessionStorage.getItem("dorasilkModalShown")) {
      setShowOverlay(true);
    }
  }, []);

  const handleClose = () => {
    setShowOverlay(false);
    sessionStorage.setItem("dorasilkModalShown", "true");
  };

  const handleButtonClick = () => {
    if (clickCount < 1) {
      setClickCount(clickCount + 1);
    } else {
      setShowOverlay(false);
      sessionStorage.setItem("dorasilkModalShown", "true");
    }
  };

  return (
    <motion.div
      className="lg:mt-0 min-h-screen flex flex-col px-12 md:px-25 py-12"
      initial="hidden"
      animate={showOverlay ? "hidden" : "visible"}
      variants={fadeLeft}
      custom={0}
    >
      <Dialog open={showOverlay} onOpenChange={handleClose}>
        <DialogContent
          className="w-4/5 max-w-xl mx-auto text-center text-black border"
          showCloseButton={false}
        >
          <DialogTitle>
            <GoldenText className="text-2xl">Our Philosophy</GoldenText>
          </DialogTitle>
          <div className="mt-4 text-sm md:text-base lg:text-base text-left">
            <p className="mb-2">
              At <GoldenText>Dorasilk™</GoldenText>, we honor the artistry and
              creativity of professional stylists. What we've built isn't here
              to replace them — but to bring their level of care closer to every
              woman's routine, even in her own home.
            </p>
            <p className="mb-2">
              For the woman who doesn't have time for salon visits. For the one
              tired of trial-and-error treatments. For the stylist who wants
              clients to return with better-maintained wigs between sessions.
              This system was built for convenience, not competition.
            </p>
            <p>
              Together, it's a win-win: Longer-lasting results. Revived
              confidence. Stylists whose work is supported — not substituted.
              Let's <em>Restore</em>, <em>Revive</em>, <em>Revamp</em>, together
              through the Science of Wig <GoldenText>Revamp™</GoldenText>, where
              every ritual is driven by science, technology, and luxury.
            </p>
            <p className="mt-4 text-center">
              <GoldenText>Dorasilk™</GoldenText> - Built for Convenience, Not
              Competition
            </p>
          </div>
          <Button
            type="button"
            className="w-fit mx-auto rounded-full bg-gold-2 ease-in-out duration-350 hover:shadow-[0_0_20px_#D4AF37] hover:bg-gold-2 hover:-translate-y-1"
            onClick={handleButtonClick}
          >
            Unlock your rituals
          </Button>
        </DialogContent>
      </Dialog>

      <div className="flex-1 flex items-center justify-start">
        <div className="max-w-[900px] flex items-start flex-col justify-center gap-6 md:gap-12">
          <motion.h1
            className="font-medium text-5xl md:text-7xl lg:text-[100px] leading-16 md:leading-24 lg:leading-[116px] font-playfair"
            variants={fadeLeft}
            custom={1}
          >
            The First Intelligent Wig Revamp Ritual System
            <GoldenText>™</GoldenText>
          </motion.h1>
          <motion.p
            className="text-xl md:text-4xl leading-12"
            variants={fadeLeft}
            custom={2}
          >
            A new era in luxury wig care — where science meets ritual, and every
            strand finds its rhythm again.
          </motion.p>
          <motion.div
            className="flex justify-center items-center gap-6 w-fit"
            variants={fadeLeft}
            custom={3}
          >
            <button className="font-semibold text-sm md:text-2xl py-3 px-6 h-full bg-gold-2 text-white hover:scale-105 transition-transform duration-350 ease-in-out rounded-full hover:shadow-[0_0_20px_#D4AF37]">
              Discover the Ritual
            </button>
          </motion.div>
        </div>
      </div>


    </motion.div>
  );
};

export default Hero;
