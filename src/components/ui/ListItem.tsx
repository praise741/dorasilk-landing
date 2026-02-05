import React from "react";
import { DotIcon } from "lucide-react";
import { motion } from "framer-motion";
import { fadeLeft } from "@/lib/utils";
import type { ChildrenProps } from "@/types";

const ListItem: React.FC<ChildrenProps & { index: number }> = ({
  children,
  index,
}) => {
  return (
    <motion.li
      key={index}
      className="w-full group-hover:text-gold-2 mb-4 list-none"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeLeft}
      custom={index}
    >
      <div className="flex gap-6">
        <DotIcon size={36} className="text-gold-2 shrink-0" />
        <span className="">{children}</span>
      </div>
    </motion.li>
  );
};

export default ListItem;
