import dorasilklogo from "@/assets/dorasilk-logo.png";
import { Link } from "react-router";
import Socials from "../ui/Socials";
// @ts-ignore
import { HashLink } from "react-router-hash-link";


interface MenuItem {
  title: string;
  links: {
    text: string;
    url: string;
    hashlink?: boolean;
    discreet?: boolean;
  }[];
}

interface Footer2Props {
  tagline?: string;
  menuItems?: MenuItem[];
  copyright?: string;
}

const Footer = ({
  tagline = "@dorasilkbeauty",
  menuItems = [
    {
      title: "Product",
      links: [
        { text: "My Account", url: "#" },
        { text: "Find Store", url: "#" },
        { text: "My Orders", url: "#" },
      ],
    },
    {
      title: "Legal",
      links: [
        { text: "Terms of Use", url: "/terms-of-use" },
        { text: "Privacy Policy", url: "/privacy-policy" },
        { text: "Refund Policy", url: "/refund-policy" },
        { text: "FAQs", url: "/#faq", hashlink: true },
      ],
    },
    {
      title: "Company",
      links: [
        { text: "About Us", url: "/#about", hashlink: true },
        { text: "Contact Us", url: "/#contact", hashlink: true },
        { text: "Blog", url: "#", hashlink: true },
        { text: "Shop", url: "/#products", hashlink: true },
        // Phase 4: Discreet Trade Link
        { text: "Trade & Partnerships", url: "https://shop.dorasilk.com/partnerships", discreet: true },
      ],
    },
    {
      title: "Support",
      links: [
        { text: "Give Us Feedback", url: "/#contact", hashlink: true },
        { text: "Help Center", url: "/#contact", hashlink: true },
        { text: "Live Chat", url: "#", hashlink: true },
        { text: "Verify Product", url: "https://auth.dorasilk.com" },
      ],
    },
  ],
  copyright = "© 2025 Dorasilk. All rights reserved.",
}: Footer2Props) => {
  return (
    <section className="py-12 bg-primary px-6 md:px-12 lg:px-24 border-t border-white/5">
      <div className="container mx-auto">
        <footer>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-6 mb-16">
            <div className="col-span-2 mb-8 lg:mb-0">
              <div>
                <img src={dorasilklogo} alt="Dorasilk" className="h-8 mb-6 brightness-0 invert opacity-90" />
                <p className="font-luxury text-sm text-white/60 mb-6">{tagline}</p>
                <Socials />
              </div>
            </div>
            {menuItems.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-6 font-luxury text-sm font-semibold uppercase tracking-widest text-accent">
                  {section.title}
                </h3>
                <ul className="space-y-4">
                  {section.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      {link.hashlink ? (
                        <HashLink
                          to={link.url}
                          smooth
                          className={`font-luxury text-sm text-white/60 hover:text-white transition-colors ${link.discreet ? "opacity-50 hover:opacity-100" : ""}`}
                          scroll={(el: HTMLElement) =>
                            el.scrollIntoView({ behavior: "smooth", block: "start" })
                          }
                        >
                          {link.text}
                        </HashLink>
                      ) : link.url.startsWith("http") ? (
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-luxury text-sm text-white/60 hover:text-white transition-colors"
                        >
                          {link.text}
                        </a>
                      ) : (
                        <Link
                          to={link.url}
                          className={`font-luxury text-sm text-white/60 hover:text-white transition-colors ${link.discreet ? "opacity-50 hover:opacity-100" : ""}`}
                          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                        >
                          {link.text}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 font-luxury text-xs">
            <p>Dorasilk™ Ritual System - UKIPO Patent Pending</p>
            <div className="flex flex-col md:flex-row items-center gap-4">
              <p>{copyright}</p>
              <p>The <span className="text-accent">#1</span> Pro-Grade Wig Care Brand</p>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Footer;
