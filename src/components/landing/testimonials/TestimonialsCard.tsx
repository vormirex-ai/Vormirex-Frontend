import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
// Shadcn UI components ko import krna zaroori hai
import { Card, CardContent } from "@/components/ui/card";

interface TestimonialProps {
  name: string;
  role: string;
  content: string;
  initials: string;
  avatarColor: string;
}

const TestimonialCard = ({ name, role, content, initials, avatarColor }: TestimonialProps) => {
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
      className="h-full"
    >
      <Card className="group relative h-full bg-[#0d1117]/40 backdrop-blur-xl border border-white/10 hover:border-blue-500/50 transition-all duration-500 overflow-hidden cursor-pointer 
        shadow-[0_0_15px_rgba(59,130,246,0.05)] 
        hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] rounded-2xl">

        {/* Padding ke liye CardContent use kiya hai */}
        <CardContent className="p-6 flex flex-col gap-5 h-full">

          {/* Stars */}
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} className="fill-orange-400 text-orange-400" />
            ))}
          </div>

          {/* Testimonial Text */}
          <p className="text-gray-300 text-[15px] leading-relaxed italic flex-grow">
            "{content}"
          </p>

          {/* User Profile Info */}
          <div className="flex items-center gap-3 pt-2">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg ${avatarColor}`}>
              {initials}
            </div>
            <div className="flex flex-col">
              <h4 className="text-white font-semibold text-sm leading-none">{name}</h4>
              <p className="text-gray-500 text-xs mt-1">{role}</p>
            </div>
          </div>

        </CardContent>

        {/* Optional: Card bottom highlight effect like in the screenshot */}
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </Card>
    </motion.div>
  );
};

export default TestimonialCard;