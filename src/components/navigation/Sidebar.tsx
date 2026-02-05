import { X } from "lucide-react";
import React from "react";

interface SidebarProps {
  open: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ open, onClose, children }) => {
  return (
    <>
      {/* Overlay */}
      {open && (
        <div className="fixed inset-0 bg-black/40 z-[99]" onClick={onClose} />
      )}
      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-black text-white z-[100] transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <X
          className="absolute top-4 right-4 text-gold-2"
          onClick={onClose}
          aria-label="Close sidebar"
          strokeWidth={3}
          size={30}
        />
        <div className="mt-12 px-6">{children}</div>
      </div>
    </>
  );
};

export default Sidebar;
