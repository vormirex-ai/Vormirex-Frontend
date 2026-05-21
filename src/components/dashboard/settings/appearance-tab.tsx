import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Compass } from "lucide-react";
import { useState } from "react";

export function AppearanceTab() {
  const [fontSize, setFontSize] = useState("medium");
  const [accent, setAccent] = useState("blue-indigo");

  const colors = [
    { id: "blue-indigo", bg: "bg-gradient-to-r from-indigo-500 to-purple-500" },
    { id: "pink", bg: "bg-gradient-to-r from-pink-500 to-purple-400" },
    { id: "cyan", bg: "bg-gradient-to-r from-cyan-400 to-blue-500" },
    { id: "emerald", bg: "bg-gradient-to-r from-emerald-400 to-teal-500" },
    { id: "orange", bg: "bg-gradient-to-r from-orange-400 to-amber-500" },
  ];

  return (
    <div className="space-y-6">

      <div className="custom-surface p-6 rounded-2xl shadow-xl space-y-6">
        <h3 className="text-lg font-semibold">Appearance</h3>

        <div className="divide-y divide-slate-800/50 space-y-4">
          <div className="flex items-center justify-between pt-2">
            <div>
              <p className="text-sm font-medium text-slateText dark:text-slate-200">Dark Mode</p>
              <p className="text-xs text-slate-400">Use dark theme across the app</p>
            </div>
            <Switch />
          </div>

          <div className="flex items-center justify-between pt-4">
            <div>
              <p className="text-sm font-medium text-slateText dark:text-slate-200">Compact Sidebar</p>
              <p className="text-xs text-slate-400">Show only icons in the sidebar</p>
            </div>
            <Switch />
          </div>

          <div className="flex items-center justify-between pt-4">
            <div>
              <p className="text-sm font-medium text-slateText dark:text-slate-200">Reduced Animations</p>
              <p className="text-xs text-slate-400">Minimize motion effects</p>
            </div>
            <Switch />
          </div>

          <div className="flex items-center justify-between pt-4">
            <div>
              <p className="text-sm font-medium text-slateText dark:text-slate-200">Font Size</p>
              <p className="text-xs text-slate-400">Adjust text size for readability</p>
            </div>
            <div className="flex p-1 bg-[#dff4f7] dark:bg-[#154249] border-primary border border-primary/10 rounded-lg">
              {["small", "medium", "large"].map((size) => (
                <button
                  key={size}
                  onClick={() => setFontSize(size)}
                  className={`text-xs px-3 py-1.5 rounded-md capitalize font-medium transition ${fontSize === size
                    ? "bg-primary-gradient text-slateText"
                    : "text-slate-400 dark:hover:text-slate-200 hover:text-primary"
                    }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>


      <div className="custom-surface p-6 rounded-2xl shadow-xl flex items-center justify-between">
        <div>
          <h3 className="text-sm font-medium text-slateText dark:text-slate-200">Interactive Tour</h3>
          <p className="text-xs text-slate-400">Replay the guided walkthrough of all features</p>
        </div>
        <Button className="rounded-xl gap-2 text-xs">
          <Compass className="w-4 h-4" /> Start Tour
        </Button>
      </div>


      <div className="custom-surface p-6 rounded-2xl shadow-xl space-y-3">
        <h3 className="text-sm font-medium text-slateText dark:text-slate-200">Accent Color</h3>
        <div className="flex items-center gap-3">
          {colors.map((color) => (
            <button
              key={color.id}
              onClick={() => setAccent(color.id)}
              className={`w-8 h-8 rounded-full ${color.bg} transition-transform ${accent === color.id ? "scale-110 ring-2 ring-indigo-500 ring-offset-2 ring-offset-[#0d111c]" : "hover:scale-105"
                }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}