import { useLocation } from "react-router-dom";
// @ts-ignore
import { HashLink } from "react-router-hash-link";

const navList = [
  { label: "Products", to: "/#products", hashlink: true },
  { label: "Shop", to: "https://shop.dorasilk.com", external: true },
  { label: "Ritual", to: "https://rituals.dorasilk.com", external: true },
  { label: "About", to: "/#about", hashlink: true },
];

type NavbarProps = {
  style?: string;
};

const Navbar: React.FC<NavbarProps> = ({ style }) => {
  const location = useLocation();

  return (
    <nav className={`flex py-6 flex-col md:flex-row md:py-0 gap-6 md:gap-10 lg:gap-12 items-center ${style}`}>
      {navList.map((nav) =>
        nav.hashlink ? (
          <HashLink
            key={nav.to}
            to={nav.to}
            className={`relative font-luxury font-medium text-xs tracking-[0.2em] uppercase text-primary/80 hover:text-accent transition-colors duration-300 text-nowrap group ${location.hash === nav.to.replace("/", "") ? "text-accent" : ""
              }`}
            smooth
          >
            {nav.label}
            <span className={`absolute -bottom-1 left-0 h-px bg-accent transition-all duration-300 ${location.hash === nav.to.replace("/", "") ? "w-full" : "w-0 group-hover:w-full"
              }`} />
          </HashLink>
        ) : (
          <a
            key={nav.to}
            href={nav.to}
            target={nav.external ? "_blank" : "_self"}
            rel="noopener noreferrer"
            className="relative font-luxury font-medium text-xs tracking-[0.2em] uppercase text-primary/80 hover:text-accent transition-colors duration-300 text-nowrap group"
          >
            {nav.label}
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full" />
          </a>
        )
      )}
    </nav>
  );
};

export default Navbar;
