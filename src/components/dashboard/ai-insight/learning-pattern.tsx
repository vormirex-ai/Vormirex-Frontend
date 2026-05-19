import { Card, CardContent, CardHeader } from "@/components/ui/card";

const data = [
  { day: "Mon", value: 2.1 },
  { day: "Tue", value: 3.4 },
  { day: "Wed", value: 2.8 },
  { day: "Thu", value: 4.1 },
  { day: "Fri", value: 3.2 },
  { day: "Sat", value: 2.6 },
  { day: "Today", value: 3.2 },
];

export default function LearningPattern() {
  return (
    <Card className="border border-cyan-500/10 h-full">
      <CardHeader>
        <h3 className="text-lg font-semibold">
          📈 Learning Pattern (Last 7 Days)
        </h3>
      </CardHeader>

      <CardContent className="h-full flex flex-col justify-between">
        {/* Chart */}
        <div className="flex items-end gap-4 h-[260px] mt-4">
          {data.map((item) => (
            <div
              key={item.day}
              className="flex flex-1 flex-col items-center gap-3"
            >
              <div className="flex h-[220px] items-end w-full">
                <div
                  className="w-full rounded-t-md bg-primary-gradient"
                  style={{
                    height: `${item.value * 45}px`,
                  }}
                />
              </div>

              <span
                className={`text-xs ${item.day === "Today"
                  ? "px-4 py-1 border border-blue-500 rounded-md text-blue-400"
                  : "text-slate-500"
                  }`}
              >
                {item.day}
              </span>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-8 flex items-center justify-between text-sm text-slate-500 border-t border-white/5 pt-5">
          <p>Peak: Thursday (4.1h)</p>
          <p>Avg: 3.2h/day</p>
        </div>
      </CardContent>
    </Card>
  );
}