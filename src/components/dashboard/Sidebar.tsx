import { NavLink } from "react-router-dom";
import { navGroups } from "../data/sidebar-Items";
import logo from "../../assets/logo.png";
import { MoreVertical } from "lucide-react";
import { motion } from "framer-motion";

const Sidebar = () => {
  return (
    <aside className="w-64 h-screen fixed left-0 top-0 flex flex-col border-r border-border z-50">

      <div className="h-16 px-6 flex items-center gap-3 border-b border-border">
        <div className="w-9 h-9 rounded-xl flex items-center justify-center">
          <img alt="logo" src={logo} className="w-5 h-5" />
        </div>
        <span className="font-bold text-foreground">Vormirex</span>
      </div>

      <div className="flex-1 overflow-y-auto hide-scrollbar py-6 px-3 space-y-8">
        {navGroups.map((group) => (
          <div key={group.groupLabel}>
            <h3 className="px-4 text-[11px] text-muted-foreground uppercase tracking-widest mb-2">
              {group.groupLabel}
            </h3>

            <div className="space-y-1">
              {group.items.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end
                  className={({ isActive }) =>
                    `relative flex items-center gap-3 p-4 rounded-xl transition-all
    ${isActive
                      ? "bg-primary-gradient text-primary-foreground"
                      : "text-foreground hover:text-foreground hover:bg-muted"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <item.icon size={18} />
                      <span className="text-sm font-medium">{item.title}</span>

                      {item.isNew && (
                        <span className="ml-auto text-[10px] bg-primary-gradient text-primary-foreground px-2 py-0.5 rounded-full">
                          New
                        </span>
                      )}

                      {isActive && (
                        <motion.div
                          layoutId="active"
                          className="absolute right-0 -translate-y-1/2 w-1 h-6 bg-primary-gradient rounded-l-full"
                        />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </div>
          </div>
        ))}
      </div>


      <div className="p-4 border-t border-border">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
            AJ
          </div>

          <div className="flex-1">
            <h4 className="text-sm font-medium text-foreground">Alex Johnson</h4>
            <p className="text-xs text-muted-foreground">Pro Plan ✨</p>
          </div>

          <MoreVertical size={16} className="text-muted-foreground" />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;