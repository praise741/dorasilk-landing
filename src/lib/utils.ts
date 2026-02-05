import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import phone from "../assets/phone.svg";
import instagram from "../assets/instagram.svg";
import facebook from "../assets/facebook.svg";
import whatsapp from "../assets/whatsapp.svg";
import tiktok from "../assets/tiktok.svg";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.25, duration: 0.7 },
  }),
};

export const socialLinks = [
  {
    fullLinks: [
      {
        icon: phone,
        ref: "tel:+2347016244864",
        account: "phone",
        text: "+234 701 624 4864",
      },
    ],

    iconLinks: [
      {
        icon: whatsapp,
        ref: "https://wa.me/2347016244864",
        account: "whatsapp",
        text: "+234 701 624 4864",
      },
      {
        icon: instagram,
        ref: "https://www.instagram.com/dorasilkbeauty_?igsh=eXc1eXI3emFybWh2",
        account: "instagram",
      },
      {
        icon: facebook,
        ref: "https://www.facebook.com/share/1GC3P37Kxr/",
        account: "facebook",
      },
      {
        icon: tiktok,
        ref: "https://www.tiktok.com/@dorasilk?_r=1&_t=ZM-91yb7FUeaF6",
        account: "tiktok",
      },
    ],
  },
];
