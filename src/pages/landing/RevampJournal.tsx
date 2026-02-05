import JournalCard from "@/components/ui/JournalCard";
import Pill from "@/components/ui/Pill";
import hairmaking from "@/assets/hairmaking.jpg";
import journal1 from "@/assets/journal1.png";
import journal2 from "@/assets/journal2.png";
import journal3 from "@/assets/journal3.png";
import journal4 from "@/assets/journal4.png";
import journal5 from "@/assets/journal5.png";
import { motion } from "framer-motion";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
// import { Card, CardContent } from "@/components/ui/card";

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.25, duration: 0.7 },
  }),
};

const images = [hairmaking, journal1, journal2, journal3, journal4, journal5];

const RevampJournal = () => {
  return (
    <div className="flex items-center flex-col gap-10 py-12 px-12 md:px-25">
      <motion.div
        className="w-full flex justify-between flex-col lg:flex-row gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeLeft}
        custom={0}
      >
        <h2 className="border-b-2 pb-4 w-fit  text-2xl font-playfair-display uppercase">
          The Revamp Journal
        </h2>

        <div className="flex gap-2.5 flex-wrap">
          <Pill>All</Pill>
          <Pill selected>The Revamp journal</Pill>
          <Pill>Industry Trends</Pill>
          <Pill>Dorasilk Behind The Scenes</Pill>
        </div>
      </motion.div>

      <Carousel
        className="w-full"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className="">
          {images.map((image, index) => (
            <CarouselItem
              key={index}
              className=" md:basis-1/2 mlg:basis-1/3 flex items-center justify-center"
            >
              <JournalCard>
                <img
                  src={image}
                  alt=""
                  className="object-cover object-center h-full w-full"
                />
              </JournalCard>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default RevampJournal;
