import React from "react";
import type { ChildrenProps } from "@/types";

type PillProps = ChildrenProps & {
  selected?: boolean;
};

const Pill: React.FC<PillProps> = ({ children, selected }) => {
  return (
    <div
      className={`rounded-full py-2 px-3 md:py-4 md:px-4.5 border w-fit capitalize text-xs md:text-base font-medium ${
        selected
          ? "border-deepbrown bg-brown-1 text-white-1"
          : "border-gold-2 text-black bg-white-1"
      }`}
    >
      {children}
    </div>
  );
};

export default Pill;
