import type { ChildrenProps } from "@/types";
import React from "react";

type HeaderTextProps = ChildrenProps & {
  styles?: string;
};

const HeaderText: React.FC<HeaderTextProps> = ({ children, styles }) => {
  return (
    <h2
      className={`bg-gradient-to-r from-gold-2 to-white-1
           bg-clip-text text-transparent text-5xl leading-16 md:text-[100px] md:leading-[116px] font-medium font-playfair-display text-center ${styles}`}
    >
      {children}
    </h2>
  );
};

export default HeaderText;
