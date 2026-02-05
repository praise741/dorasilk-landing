import { Quote } from "lucide-react";

type CustomerCardProps = {
  // styles?: string;
  info: string;
  name: string;
  role: string;
  image?: string;
  quoteColor: string;
};

const CustomerCard: React.FC<CustomerCardProps> = ({
  // styles,
  info,
  name,
  role,
  image,
  quoteColor,
}) => {
  return (
    <div className={`p-10 flex flex-col gap-2.5`}>
      <div className="mb-6">
        <Quote className={`${quoteColor} fill-current`} />
      </div>
      <p className="text-sm md:text-lg leading-wide max-w-[540px]">{info}</p>
      <div className="flex items-center gap-2.5">
        {image && <img src={image} alt="" className="rounded-full" />}
        <div className="flex flex-col">
          <p className="text-xl leading-[28.5px] font-semibold">{name}</p>
          <p className="text-xl leading-[28.5px] font-light">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default CustomerCard;
