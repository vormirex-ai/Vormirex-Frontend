import { NavLink } from "react-router-dom";
import { navGroups } from "../data/dasboard-navItems";
import logo from "../../assets/logo.png";
import { MoreVertical } from "lucide-react";
import { motion } from "framer-motion";

const Sidebar = () => {
  return (
    <aside className="w-64 h-screen fixed left-0 top-0 bg-[#070B18] border-r border-white/5 flex flex-col z-50">

      {/* Logo */}
      <div className="h-16 px-6 flex items-center gap-3 border-b border-white/5">
        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
          <img src={logo} className="w-6 h-6" />
        </div>
        <span className="text-white font-bold">AI Tutor</span>
      </div>

      {/* Nav */}
      <div className="flex-1 overflow-y-auto py-6 px-3 space-y-8">

        {navGroups.map((group) => (
          <div key={group.groupLabel}>

            <h3 className="px-4 text-[11px] text-slate-500 uppercase tracking-widest mb-2">
              {group.groupLabel}
            </h3>

            <div className="space-y-1">
              {group.items.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `relative flex items-center gap-3 px-4 py-2.5 rounded-xl transition ${isActive
                      ? "bg-indigo-600/20 text-white"
                      : "text-slate-400 hover:text-white hover:bg-white/5"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <item.icon size={18} />
                      <span className="text-sm">{item.title}</span>

                      {item.isNew && (
                        <span className="ml-auto text-[10px] bg-indigo-600 px-2 py-0.5 rounded-full">
                          New
                        </span>
                      )}

                      {isActive && (
                        <motion.div
                          layoutId="active"
                          className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-indigo-500 rounded-l-full"
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

      {/* Footer */}
      <div className="p-4 border-t border-white/5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold">
            AJ
          </div>

          <div className="flex-1">
            <h4 className="text-white text-sm">Alex Johnson</h4>
            <p className="text-slate-500 text-xs">Pro Plan</p>
          </div>

          <button>
            <MoreVertical size={16} className="text-slate-500" />
          </button>
        </div>
      </div>

    </aside>
  );
};

export default Sidebar;