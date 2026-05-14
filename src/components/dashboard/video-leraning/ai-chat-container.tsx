import { Bot, Trash2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function AIChatSidebar() {
  return (
    <div className="w-full lg:w-[400px] h-[85vh] border border-cyan-500/10 bg-card rounded-xl flex flex-col shadow-2xl transition-all duration-300 hover:shadow-[0_0_25px_rgba(34,211,238,0.25)] hover:border-cyan-400/5">

      <div className="p-4 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-blue-600 p-2 rounded-lg text-white"><Bot size={20} /></div>
          <div>
            <h3 className="text-sm font-bold text-white">AI Tutor Assistant</h3>
            <span className="text-[10px] text-green-500 flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full" /> Online
            </span>
          </div>
        </div>
        <Button variant="ghost" size="icon" className="text-slate-500"><Trash2 size={18} /></Button>
      </div>


      <div className="flex-1 p-4 overflow-y-auto">
        <div className="flex gap-3 items-start">
          <div className="bg-slate-800 p-2 rounded-full"><Bot size={16} className="text-blue-400" /></div>
          <div className="bg-slate-800/50 p-4 rounded-2xl text-xs md:text-sm text-slate-200 border border-slate-700">
            👋 Hi! I'm watching this lesson with you. Ask me anything...
          </div>
        </div>
      </div>


      <div className="p-4 border-t border-slate-800 bg-slate-900/30">
        <div className="relative">
          <Input className="bg-slate-950 border-slate-700 text-white pr-10" placeholder="Ask about this topic..." />
          <Button size="icon" className="absolute right-1 top-1 h-8 w-8 bg-blue-600"><Send size={14} /></Button>
        </div>
      </div>
    </div>
  );
}