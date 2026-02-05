import { Link } from "react-router";
import Socials from "../ui/Socials";
// @ts-ignore
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  return (
    <section className="py-12 bg-primary px-6 md:px-12 lg:px-24 border-t border-white/5">
      <div className="container mx-auto">
        <footer>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Brand */}
            <div>
              <span className="font-playfair text-xl font-bold text-gold-2 tracking-wide block mb-4">Dorasilk™</span>
              <p className="font-luxury text-sm text-white/60 mb-6">The Science of Wig Revamp™</p>
              <Socials />
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="mb-6 font-luxury text-sm font-semibold uppercase tracking-widest text-accent">
                Quick Links
              </h3>
              <ul className="space-y-3">
                <li>
                  <a href="https://shop.dorasilk.com" target="_blank" rel="noopener noreferrer" className="font-luxury text-sm text-white/60 hover:text-white transition-colors">
                    Shop
                  </a>
                </li>
                <li>
                  <HashLink to="/#about" smooth className="font-luxury text-sm text-white/60 hover:text-white transition-colors">
                    About Us
                  </HashLink>
                </li>
                <li>
                  <HashLink to="/#products" smooth className="font-luxury text-sm text-white/60 hover:text-white transition-colors">
                    Products
                  </HashLink>
                </li>
                <li>
                  <HashLink to="/#contact" smooth className="font-luxury text-sm text-white/60 hover:text-white transition-colors">
                    Contact
                  </HashLink>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="mb-6 font-luxury text-sm font-semibold uppercase tracking-widest text-accent">
                Legal
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/terms-of-use" className="font-luxury text-sm text-white/60 hover:text-white transition-colors" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                    Terms of Use
                  </Link>
                </li>
                <li>
                  <Link to="/privacy-policy" className="font-luxury text-sm text-white/60 hover:text-white transition-colors" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/refund-policy" className="font-luxury text-sm text-white/60 hover:text-white transition-colors" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                    Refund Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 font-luxury text-xs">
            <p>© 2025 Dorasilk™. All rights reserved.</p>
            <p>Patent Pending — UKIPO</p>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Footer;
