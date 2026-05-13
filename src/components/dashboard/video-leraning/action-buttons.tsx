import { Button } from "@/components/ui/button";

const actions = [
  { label: "Explain Simply", icon: "🧠" },
  { label: "Give Example", icon: "💡" },
  { label: "Exam Answer", icon: "📝" },
  { label: "Summarize", icon: "📋" },
];

export function ActionButtons() {
  return (
    <div className="grid grid-cols-4 gap-4 my-4 border border-cyan-500/10 shadow-2xl transition-all duration-300 hover:shadow-[0_0_25px_rgba(34,211,238,0.25)] hover:border-cyan-400/5">
      {actions.map((item) => (
        <Button
          key={item.label}
          variant="outline"
          className="bg-card border-slate-700 text-white hover:bg-slate-800 transition-all py-6"
        >
          <span className="mr-2">{item.icon}</span>
          {item.label}
        </Button>
      ))}
    </div>
  );
}