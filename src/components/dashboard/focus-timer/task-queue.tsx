
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export const tasks = [
  {
    title: "Partial Fractions — Introduction",
    pomodoros: "~2 pomodoros",
    status: "Active",
  },
  {
    title: "Python: OOP Concepts",
    pomodoros: "~3 pomodoros",
    status: "Next",
  },
  {
    title: "Physics: Wave Motion",
    pomodoros: "~1 pomodoro",
    status: "",
  },
];

export function TaskQueue() {
  return (
    <div className="rounded-3xl bg-card border border-cyan-500/10 p-5">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-lg font-semibold">
          📋 Task Queue
        </h2>

        <Button className="flex items-center gap-2 ">
          <Plus className="h-4 w-4" />
          Add
        </Button>
      </div>

      <div className="space-y-4">
        {tasks.map((task) => (
          <div
            key={task.title}
            className="rounded-2xl  border border-primary dark:border-white/10 p-1 bg-card dark:bg-[#154249] p-4"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-medium text-sm md:text-base">
                  {task.title}
                </h3>

                <p className="mt-1 text-sm text-textColor">
                  {task.pomodoros}
                </p>
              </div>

              {task.status && (
                <span className="rounded-full bg-blue-500/20 px-3 py-1 text-xs text-blue-300">
                  {task.status}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}