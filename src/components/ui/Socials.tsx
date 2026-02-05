import { socialLinks } from "@/lib/utils";
import SocialIcon from "./SocialIcon";

const Socials = () => {
  return (
    <div className="mt-8 max-w-[480px] w-fit items-center">
      {socialLinks.map((linkTypes, index) => {
        const { fullLinks, iconLinks } = linkTypes;

        return (
          <div key={index}>
            <div className="flex gap-6 mb-4 lg:mb-6">
              {iconLinks.map((socialLink, index) => {
                const { icon, ref, account } = socialLink;
                return (
                  <SocialIcon
                    icon={icon}
                    ref={ref}
                    account={account}
                    key={index}
                  />
                );
              })}
            </div>

            <div className="">
              {fullLinks.map((socialLink, index) => {
                const { icon, ref, account, text } = socialLink;
                return (
                  <div
                    className="flex gap-3 items-center mb-2 lg:mb-4"
                    key={index}
                  >
                    <SocialIcon icon={icon} ref={ref} account={account} />
                    <a
                      href={ref}
                      target="_blank"
                      className="hover:underline text-sm lg:text-lg"
                    >
                      {text}
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Socials;
