import { motion } from "framer-motion";
import { containerStagger, fadeUpItem } from "@/lib/motion";
import { SubjectCard } from "@/components/dashboard/subjects/subject-cards";
import { SubjectHeader } from "@/components/dashboard/subjects/subject-header";

const subjectsData = [
  { title: "Mathematics", icon: "📐", topics: 156, lessons: 48, progress: 72, timeStudied: "42h", status: "In Progress", color: "#6366f1" },
  { title: "Python Programming", icon: "💻", topics: 203, lessons: 32, progress: 48, timeStudied: "28h", status: "In Progress", color: "#ec4899" },
  { title: "Physics", icon: "🔬", topics: 178, lessons: 38, progress: 61, timeStudied: "35h", status: "In Progress", color: "#3b82f6" },
  { title: "Chemistry", icon: "🧪", topics: 142, lessons: 6, progress: 22, timeStudied: "4h", status: "New", color: "#10b981" },
  { title: "History", icon: "📜", topics: 98, lessons: 0, progress: 0, timeStudied: "—", status: "Not Started", color: "#94a3b8" },
  { title: "Geography", icon: "🌍", topics: 88, lessons: 0, progress: 0, timeStudied: "—", status: "Not Started", color: "#94a3b8" },
];


export default function SubjectPage() {
  return (
    <div className="min-h-screen  p-4 lg:p-10">
      <div className=" mx-auto space-y-10">

        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
          <SubjectHeader />
        </motion.div>

        <motion.div
          variants={containerStagger(0.12)}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {subjectsData.map((subject, index) => (
            <motion.div key={index} variants={fadeUpItem}>
              <SubjectCard {...subject as any} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}