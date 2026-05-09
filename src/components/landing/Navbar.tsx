import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

import UserMenu from "./userMenu";

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useSelector((state: any) => state.auth);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`
    fixed top-0 left-0 w-full z-50
    transition-all duration-300

    ${scrolled
          ? "bg-[#040812]/60 backdrop-blur-xl border-b border-white/20 shadow-lg"
          : "bg-transparent"
        }
  `}
    >

      <div className="mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex justify-between items-center h-16">

          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <img src={logo} className="w-8 h-8" />
            <span className="text-white font-bold text-xl">
              VORMIREX
            </span>
          </div>

          {/* ================= DESKTOP ================= */}
          <div className="hidden md:flex items-center space-x-8">

            {["Features", "Testimonials", "Pricing"].map((item) => (
              <a
                key={item}
                href="#"
                className="
      relative text-slate-300 text-sm
      hover:text-[#6aece1]
      transition-colors duration-300
      group
    "
              >
                {item}

                {/* underline */}
                <span
                  className="
        absolute left-0 -bottom-1 h-[2px] w-0
        bg-[#6aece1]
        group-hover:w-full
        transition-all duration-300
      "
                />
              </a>
            ))}
            {user && (
              <button
                onClick={() => navigate("/dashboard")}
                className="
      relative text-sm text-slate-300
      hover:text-[#6aece1]
      transition-colors duration-300
      group
    "
              >
                Dashboard

                {/* underline */}
                <span
                  className="
        absolute left-0 -bottom-1 h-[2px] w-0
        bg-[#6aece1]
        group-hover:w-full
        transition-all duration-300
      "
                />
              </button>
            )}
            {user ? (
              <UserMenu />
            ) : (
              <>
                <Button
                  onClick={() => navigate("/login")}
                  variant="secondary"
                >
                  Sign In
                </Button>

                <Button onClick={() => navigate("/login")}>
                  Get Started Free
                </Button>
              </>
            )}

          </div>

          {/* ================= MOBILE ================= */}
          <div className="md:hidden flex items-center gap-3">

            {user && <UserMenu />}

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white text-2xl"
            >
              {isOpen ? "✕" : "☰"}
            </button>

          </div>

        </div>
      </div>


      {isOpen && (
        <div className="md:hidden bg-[#03060F] border-t border-slate-800 px-4 py-4 space-y-4">

          {["Features", "Testimonials", "Pricing"].map((item) => (
            <a
              key={item}
              href="#"
              className="block text-slate-300"
              onClick={() => setIsOpen(false)}
            >
              {item}

            </a>
          ))}

          {user && (
            <button
              onClick={() => {
                navigate("/dashboard");
                setIsOpen(false);
              }}
              className="flex items-center gap-2 text-slate-300 hover:text-white w-full"
            >
              📊 Dashboard
            </button>
          )}

          {!user && (
            <>
              <Button
                className="w-full"
                variant="secondary"
                onClick={() => navigate("/login")}
              >
                Sign In
              </Button>

              <Button
                className="w-full"
                onClick={() => navigate("/login")}
              >
                Get Started Free
              </Button>
            </>
          )}

        </div>
      )}

    </nav>
  );
};

export default Navbar;