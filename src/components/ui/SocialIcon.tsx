import React from "react";

type SocialIconProps = {
  ref: string;
  icon: string;
  account: string;
}

const SocialIcon:React.FC<SocialIconProps> = ({ ref, icon, account }) => {
  return (
    <div className="p-1 md:p-2 bg-secondary dark:bg-dark-secondary rounded-full hover:scale-110 transition duration-200 w-fit">
      <a href={ref} target="_blank">
        <img src={icon} alt={`${account} icon`} className="w-4 md:w-6" />
      </a>
    </div>
  );
};

export default SocialIcon;
