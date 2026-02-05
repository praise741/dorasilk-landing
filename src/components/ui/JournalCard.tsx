import { ArrowUpRight } from "lucide-react";
import olivia from "@/assets/olivia.png";
import type { ChildrenProps } from "@/types";

const JournalCard:React.FC<ChildrenProps> = ({ children }) => {
  return (
    <div className="rounded-4xl px-3 py-3 flex flex-col items-start gap-4 w-full lg:w-[22%] bg-white min-w-[280px] max-w-[320px] relative overflow-hidden group">
      <div className="absolute w-full h-full bg-black/50 top-0 left-0 items-center justify-center hidden group-hover:flex">
        <p className="text-3xl">View details</p>
      </div>
      <div className="rounded-3xl overflow-hidden h-[240px] w-full">{children}</div>

      <p className="uppercase font-playfair-display text-deepbrown font-bold text-sm border-black self-start">
        Design
      </p>
      <div className="flex items-center w-full justify-between text-black">
        <p className="font-semibold text-lg leading-6">
          UX review presentations
        </p>
        <ArrowUpRight className="" size={24} />
      </div>

      <p className="text-sm leading-6 text-gray-2/70 w-9/10 mr-auto prose">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, cumque
        adipisci et!
      </p>

      <div className="flex gap-2.5 text-black">
        <div className="w-10 h-10 rounded-full overflow-hidden bg-purple-1">
          <img src={olivia} alt="" />
        </div>
        <div className="flex flex-col text-sm">
          <p className="font-semibold">Olivia Rhye</p>
          <p className="text-gray-2/70">20 Jan 2025</p>
        </div>
      </div>
    </div>
  );
};

export default JournalCard;
