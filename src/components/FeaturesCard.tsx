import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
  iconBg: string;
}

export const FeatureCard = ({ title, description, icon, iconBg }: FeatureCardProps) => {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.02,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <Card className="group relative h-full bg-[#0d1117]/30 backdrop-blur-xl border border-white/10 hover:border-blue-500/50 transition-all duration-500 overflow-hidden cursor-pointer 
        shadow-[0_0_15px_rgba(59,130,246,0.1)] 
        hover:shadow-[0_0_30px_rgba(59,130,246,0.25)]">

        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-transparent to-purple-600/5 opacity-40 group-hover:opacity-100 transition-opacity duration-500" />

        <CardContent className="p-8 flex flex-col items-center text-center relative z-10">

          <motion.div
            whileHover={{ rotate: [0, -10, 10, 0] }}
            transition={{ duration: 0.5 }}
            className={`w-16 h-16 ${iconBg} rounded-2xl flex items-center justify-center text-3xl mb-6 border border-white/10 
              shadow-[0_0_10px_rgba(255,255,255,0.05)]
              group-hover:shadow-blue-500/20 group-hover:border-blue-500/40 transition-all duration-300`}
          >
            {icon}
          </motion.div>

          <h3 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-blue-400 transition-colors">
            {title}
          </h3>

          <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
            {description}
          </p>


          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-500" />
        </CardContent>
      </Card>
    </motion.div>
  );
};