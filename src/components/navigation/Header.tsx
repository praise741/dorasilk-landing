import { useState, useEffect } from "react";
import logo from "@/assets/dorasilk-logo.png";
import Navbar from "./Navbar";
import { AlignJustify, ShoppingBag } from "lucide-react";
import Sidebar from "./Sidebar";

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`py-4 transition-all duration-300 w-full fixed top-0 left-0 z-40 bg-background/80 backdrop-blur-md border-b ${scrolled ? "border-border shadow-sm" : "border-transparent"
        }`}
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-24 flex items-center justify-between">
        <a href="/" className="flex-shrink-0">
          <img src={logo} alt="Dorasilk" className="h-8 md:h-10 w-auto invert" />
        </a>

        <div className="hidden md:flex items-center gap-8">
          <Navbar style="" />

          {/* Cart Button */}
          <a
            href="https://shop.dorasilk.com/cart"
            target="_blank"
            rel="noopener noreferrer"
            className="relative p-2 text-primary hover:text-accent transition-colors group"
          >
            <ShoppingBag size={20} />
            <span className="absolute top-1 right-0 w-2 h-2 bg-accent rounded-full opacity-100 animate-pulse"></span>
          </a>
        </div>

        <button
          className="md:hidden flex items-center justify-center p-2 text-primary"
          onClick={() => setSidebarOpen(true)}
          aria-label="Open menu"
        >
          <AlignJustify size={24} />
        </button>

        <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)}>
          <Navbar />
        </Sidebar>
      </div>
    </header>
  );
};

export default Header;
