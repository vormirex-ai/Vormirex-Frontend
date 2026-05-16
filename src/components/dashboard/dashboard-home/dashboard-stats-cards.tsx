import { useEffect, useState } from "react";
import { motion, animate } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

type Props = {
  title: string;
  value: any;
  suffix?: string;
  badge?: string;
  icon?: any;
  iconBg?: string;
  iconColor?: string;
};

export function StatCard({
  title,
  value,
  suffix,
  badge,
  icon: Icon,
  iconBg,
  iconColor,
}: Props) {


  const numericValue = parseInt(
    value.toString().replace(/,/g, ""),
    10
  );
  const [count, setCount] = useState(0);

  useEffect(() => {
    const controls = animate(0, numericValue, {
      duration: 2,
      ease: "easeOut",
      onUpdate(latest) {
        setCount(Math.floor(latest));
      },
    });

    return () => controls.stop();
  }, [numericValue]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card
        className="group relative overflow-hidden cursor-pointer"
      >
        <div
          className=" absolute left-0 top-0 h-[2px] w-0 bg-gradient-to-r from-[#63E7DC] via-[#46D3C9] to-[#26BDB3] transition-al duration-50 ease-out group-hover:w-full"
        />
        <CardContent className="p-5">
          <div className="flex items-start justify-between">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 12,
              }}
              className={`flex h-12 w-12 items-center justify-center rounded-2xl shadow-lg ${iconBg}`}
            >
              <Icon className={`h-5 w-5 ${iconColor}`} />
            </motion.div>

            {badge && (
              <div className="flex h-7 items-center rounded-lg bg-emerald-500/10 px-3 text-xs font-medium text-emerald-400">
                ↗ {badge}
              </div>
            )}
          </div>


          <div className="mt-6">
            <p className="text-sm text-slate-400">{title}</p>

            <div className="mt-1 flex items-end gap-1">
              <motion.h2
                className="text-3xl font-bold"
              >
                {count.toLocaleString()}
              </motion.h2>

              <span className="mb-1 text-sm text-slate-400">
                {suffix}
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}