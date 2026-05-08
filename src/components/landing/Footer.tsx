import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { defaultFooterConfig } from "../data/footerData";

const Footer: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const finalConfig = defaultFooterConfig;

  return (
    <footer className="w-full bg-[#0A0B14] text-[#94a3b8] px-5 pt-20 pb-14 border-t border-white/5">
      <div className="max-w-[1200px] mx-auto">

        <div className="flex flex-wrap justify-between gap-10 mb-[8rem] items-start md:flex-row flex-col ">

          {/* BRAND */}
          <div className="w-full max-w-[380px] mx-auto md:mx-0 text-center md:text-left">
            <div className="flex items-center gap-3 mb-6 justify-center md:justify-start">
              <img src={logo} alt="Logo" className="w-11 h-11" />
              <span className="text-[22px] font-bold text-white">
                {finalConfig.companyName}
              </span>
            </div>

            <p className="text-sm text-[#64748b] mb-6">
              {finalConfig.description}
            </p>

            {/* Social Icons */}
            <div className="flex gap-3 justify-center md:justify-start">
              {finalConfig.socialLinks.map((social, i) => {
                const Icon = social.icon;

                return (
                  <a
                    key={i}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      w-10 h-10 flex items-center justify-center
                      bg-slate-800/50 rounded-xl
                      hover:text-[#6aece1]
                      hover:shadow-[0_0_15px_rgba(106,236,225,0.4)]
                      transition-all duration-300
                    "
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* LINKS */}
          <div className="flex md:flex-row flex-col gap-10 md:gap-16">
            {finalConfig.sections.map((section, idx) => (
              <div key={idx} className="min-w-[160px]">
                <h4 className="text-white text-sm font-semibold mb-6 uppercase tracking-widest">
                  {section.title}
                </h4>

                <ul className="space-y-3.5">
                  {section.links.map((link, i) => (
                    <li key={i}>
                      <Link
                        to={link.href}
                        onClick={(e) => {
                          if ((link as any).isComingSoon) {
                            e.preventDefault();
                            setIsModalOpen(true);
                          }
                        }}
                        className="text-sm text-[#64748b] hover:text-[#6aece1] transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>

        <div className="border-t border-slate-800 pt-10 text-center text-xs text-[#475569]">
          {finalConfig.copyright}
        </div>

      </div>
    </footer>
  );
};

export default Footer;