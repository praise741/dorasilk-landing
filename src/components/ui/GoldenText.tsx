import { cn } from "@/lib/utils";
import type { ChildrenProps } from "@/types";
import React from "react";

const GoldenText: React.FC<ChildrenProps & { className?: string }> = ({
  children,
  className,
}) => {
  return (
    <span className={cn("text-gold-2 font-bold", className)}>{children}</span>
  );
};

export default GoldenText;
