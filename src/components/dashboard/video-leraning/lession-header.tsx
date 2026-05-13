import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Bookmark, Share2 } from "lucide-react"

export function LessonHeader() {
  return (
    <div className="flex items-center justify-between mb-6">
      <div>
        <div className="flex items-center gap-2 mb-1">
          <div className="w-6 h-6 bg-orange-500 rounded flex items-center justify-center">
            <span className="text-white text-xs font-bold">L</span>
          </div>
          <h1 className="text-2xl font-bold text-white">Calculus: Integration Techniques</h1>
        </div>
        <div className="flex items-center gap-3 text-sm text-slate-400">
          <span>Chapter 5 • Lesson 3</span>
          <span>• 45 min</span>
          <Badge variant="secondary" className="bg-blue-900/30 text-blue-400 hover:bg-blue-900/30 border-none">
            In Progress
          </Badge>
        </div>
      </div>
      <div className="flex gap-2">
        <Button variant="secondary" className="bg-slate-800 text-white hover:bg-slate-700">
          <Bookmark className="w-4 h-4 mr-2" /> Save
        </Button>
        <Button variant="secondary" className="bg-slate-800 text-white hover:bg-slate-700">
          <Share2 className="w-4 h-4 mr-2" /> Share
        </Button>
      </div>
    </div>
  )
}