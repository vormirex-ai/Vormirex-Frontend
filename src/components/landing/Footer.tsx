import React from "react";
import logo from "../../assets/logo.png";

const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-white/5 bg-[#070B16] px-8 py-8 text-sm text-slate-500">
      <div className="mx-auto flex  px-4 sm:px-6 lg:px-10 flex-col items-center justify-between gap-6 md:flex-row">

        <div className="flex items-center gap-3">
          <img src={logo} alt="Vormirex Logo" className="h-7 w-7 object-contain" />
          <span className="text-sm font-semibold tracking-wide text-white">
            VORMIREX
          </span>
        </div>


        <p className="text-center text-sm text-slate-500">
          © 2026 Vormirex. All rights reserved.
        </p>


        <div className="flex items-center gap-5 text-sm">
          <a
            href="#"
            className="transition-colors duration-300 hover:text-primary"
          >
            Privacy
          </a>
          <a
            href="#"
            className="transition-colors duration-300 hover:text-primary"
          >
            Terms
          </a>
          <a
            href="#"
            className="transition-colors duration-300 hover:text-primary"
          >
            Support
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;