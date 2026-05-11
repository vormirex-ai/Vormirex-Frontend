import { useLocation } from "react-router-dom";
import { navGroups } from "../data/dasboard-navItems";
import { Search, Bell, Moon, Terminal, Menu } from "lucide-react";
import { ThemeToggle } from "../theme/theme-toggle";
import { Button } from "../ui/button";

const allNavItems = navGroups.flatMap((group) => group.items);

const DashboardNavbar = () => {
  const location = useLocation();

  const currentPage = allNavItems.find(
    (item) => item.path === location.pathname
  );

  return (
    <header className="h-16 fixed top-0 left-64 right-0 bg-[#070B18]/80 backdrop-blur-xl border-b border-white/5 px-6 flex items-center justify-between z-40">

      {/* Left */}
      <div className="flex items-center gap-4">
        <Button variant="secondary" className="h-8 w-5">
          <Menu size={20} className="text-slate-400" />
        </Button>

        <div>
          <h2 className="text-white text-lg font-bold">
            {currentPage?.title || "Dashboard"}
          </h2>
          <p className="text-slate-500 text-[11px] mt-1">
            AI Tutor / {currentPage?.title || "Home"}
          </p>
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">

        <div className="hidden lg:flex items-center gap-2 bg-orange-500/10 text-orange-500 px-3 py-1.5 rounded-full border border-orange-500/20 text-xs font-bold">
          🔥 12 day streak
        </div>

        <div className="relative hidden md:block">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
          <input
            placeholder="Search..."
            className="bg-slate-900/50 border border-white/5 text-white text-sm pl-10 pr-4 py-2 rounded-xl w-64"
          />
        </div>

        <div className="flex items-center gap-2 pl-4">

          <Button variant="secondary">
            <Bell size={18} />
          </Button>

      <ThemeToggle/>
          <Button variant="secondary">
            <Terminal size={18} />
          </Button>
        </div>

        <div className="w-9 h-9 rounded-full bg-indigo-600 flex items-center justify-center text-white text-[10px] font-bold">
          AJ
        </div>
      </div>
    </header>
  );
};

export default DashboardNavbar;