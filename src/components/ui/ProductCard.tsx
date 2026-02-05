// import { Heart } from "lucide-react";
// import Rating from "./Rating";
import type { ChildrenProps } from "@/types";
import GoldenText from "./GoldenText";
import { Link } from "react-router";

const ProductCard: React.FC<
  ChildrenProps & { label: string; description: string, to: string }
> = ({ children, label, description, to }) => {
  return (
    <div className="overflow-hidden w-fit">
      <Link to={to} target="_blank">
        <div className="p-6 bg-neutral-900 min-w-[250px] max-w-[295px]  flex flex-col items-center gap-2 hover:scale-105 transition-transform duration-400 ">
          <div className="flex items-center justify-between w-full mb-2">
            <DiscountLabel></DiscountLabel>
            {/* <Heart className="" size={24} color="black" strokeWidth={3} /> */}
          </div>
          <div className="h-60 overflow-hidden rounded-xl relative w-full flex items-center justify-center">
            {children}
          </div>
          <div className="flex flex-col items-center gap-2.5 w-full">
            <p className="font-playfair-display text-md">
              <GoldenText className="text-lg tracking-wider">{label}™</GoldenText>
            </p>
            <p className="text-center text-neutral-200">{description}</p>
            {/* <Rating rating={3.5} /> */}
            <button className="flex items-center justify-center gap-4 border border-gold-2 py-2.5 w-full rounded-full text-neutral-300 text-xl font-playfair-display tracking-wider hover:scale-105 transition-transform duration-250 bg-transparent font-medium">
              Revamp Now
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

const DiscountLabel = () => {
  return (
    <div className="bg-red-1 p-1.5 pr-3 rounded-r-full rounded-l-[8px] font-semibold text-[10px] w-fit">
      -50%
    </div>
  );
};

export default ProductCard;
