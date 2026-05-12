import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

import { navGroups } from "../data/sidebar-Items";
import { Search, Bell, Terminal, Menu } from "lucide-react";
import { ThemeToggle } from "../theme/theme-toggle";
import { Button } from "../ui/button";

const allNavItems = navGroups.flatMap((group) => group.items);

const DashboardNavbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useSelector((state: RootState) => state.auth);

  const currentPage = allNavItems.find(
    (item) => item.path === location.pathname
  );

  const firstLetter =
    user?.name?.charAt(0)?.toUpperCase() ||
    user?.email?.charAt(0)?.toUpperCase() ||
    "A";

  return (
    <header className="h-16 fixed top-0 left-64 right-0 bg-background/90 backdrop-blur-xl border-b border-border px-6 flex items-center justify-between z-40">

      <div className="flex items-center gap-4">
        <Button variant="secondary" size="icon">
          <Menu size={18} />
        </Button>

        <div>
          <h2 className="text-lg font-bold text-foreground">
            {currentPage?.title || "Dashboard"}
          </h2>
          <p className="text-xs text-muted-foreground">
            AI Tutor / {currentPage?.title || "Dashboard"}
          </p>
        </div>
      </div>


      <div className="flex items-center gap-4">

        <div className="hidden lg:flex items-center gap-2 bg-orange-500/10 text-orange-500 px-3 py-1.5 rounded-full border border-orange-500/20 text-xs font-bold">
          🔥 12 day streak
        </div>


        <div className="relative hidden md:block">
          <Search
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
          />
          <input
            placeholder="Search anything..."
            className="bg-card border border-border text-foreground text-sm pl-10 pr-4 py-2 rounded-xl w-64 outline-none"
          />
        </div>

        <Button variant="secondary" size="icon">
          <Bell size={18} />
        </Button>


        <ThemeToggle />

        <Button variant="secondary" size="icon">
          <Terminal size={18} />
        </Button>

        <div
          onClick={() => navigate("/account/profile")}
          className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-sm font-bold cursor-pointer hover:opacity-80 transition"
        >
          {firstLetter}
        </div>
      </div>
    </header>
  );
};

export default DashboardNavbar;