import { Play, SkipBack, SkipForward, Volume2, Maximize } from "lucide-react"
import { Slider } from "@/components/ui/slider"

export function VideoPlayer() {
  return (
    <div className="bg-card rounded-xl overflow-hidden border border-cyan-500/10 shadow-2xl transition-all duration-300 hover:shadow-[0_0_25px_rgba(34,211,238,0.25)] hover:border-cyan-400/50">
      <div className="aspect-video rounded-xl relative flex items-center justify-center bg-card">
        <div className="absolute top-4 right-4 text-xs text-slate-500 font-mono">
          ∫f(x)dx = F(x) + C
        </div>
        <button className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition">
          <Play className="fill-white text-white w-8 h-8 ml-1" />
        </button>
        <div className="absolute bottom-4 right-4 text-xs text-white bg-black/50 px-2 py-1 rounded">
          07:55 / 45:00
        </div>
      </div>

      <div className="p-4 bg-border backdrop-blur">
        <Slider defaultValue={[20]} max={100} step={1} className="mb-4 cursor-pointer h-2 rounded-xl bg-card" />
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6 text-slate-300">
            <Play className="w-5 h-5 cursor-pointer hover:text-white" />
            <SkipBack className="w-5 h-5 cursor-pointer hover:text-white" />
            <SkipForward className="w-5 h-5 cursor-pointer hover:text-white" />
            <Volume2 className="w-5 h-5 cursor-pointer hover:text-white" />
          </div>
          <div className="flex items-center gap-4 text-slate-400 text-sm">
            <span className="cursor-pointer hover:text-white">1× Speed</span>
            <Maximize className="w-5 h-5 cursor-pointer hover:text-white" />
          </div>
        </div>
      </div>
    </div>
  )
}