import { Link } from "react-router";
import whatsapp from "../../assets/gold_whatsapp.png";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const FloatingBubble = () => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            to="https://wa.me/2347016244864"
            target="_blank"
            className="w-12 h-12 rounded-lg bg-black/90 border border-gold-2/70 fixed right-6 bottom-20 z-40 animate-bounce text-black hover:animate-none hover:-translate-y-3 overflow-hidden p-1 hover:scale-105 transition-all duration-200 opacity-80 hover:opacity-100"
          >
            <img src={whatsapp} alt="Whatsapp" className="" />
          </Link>
        </TooltipTrigger>
        <TooltipContent side="left" className="bg-gold-2 font-semibold">
          <p className="text-black">Contact us on Whatsapp</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default FloatingBubble;
