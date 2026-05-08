import { useState } from "react";
import { Button } from "../ui/button";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router";

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#03060F]/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">


          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <img src={logo} alt="Logo" className="w-8 h-8" />
            <span className="text-white font-bold text-xl tracking-tight">
              VORMIREX
            </span>
          </div>


          <div className="hidden md:flex items-center space-x-8">
            {["Features", "Testimonials", "Pricing"].map((item) => (
              <a
                key={item}
                href="#"
                className="relative text-slate-300 hover:text-white transition-colors text-sm font-medium
                after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0
                after:bg-gradient-to-r after:from-purple-500 after:to-blue-500
                after:transition-all after:duration-300 hover:after:w-full"
              >
                {item}
              </a>
            ))}

            <Button
              onClick={() => navigate("/login")}
              variant="secondary" className="border-white/20">
              Sign In
            </Button>

            <Button onClick={() => navigate("/login")}>Get Started Free</Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              className="text-slate-300"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  // Close icon
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  // Hamburger icon
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#03060F]/95 backdrop-blur-md border-t border-slate-800 px-4 py-4 space-y-4">

          {["Features", "Testimonials", "Pricing"].map((item) => (
            <a
              key={item}
              href="#"
              className="block text-slate-300 hover:text-white text-sm font-medium "
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}

          <Button
            variant="secondary"
            onClick={() => navigate("/login")}
            className="w-full border-white/20"
          >
            Sign In
          </Button>

          <Button className="w-full" onClick={() => navigate("/login")}>
            Get Started Free
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;