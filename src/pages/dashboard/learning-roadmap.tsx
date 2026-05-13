import { motion, Variants } from "framer-motion";

import { AIRecommendations } from "@/components/dashboard/dashboard-home/ai-recommondation";
import { ContinueLearning } from "@/components/dashboard/dashboard-home/continue-leraning";
import { RecentActivity } from "@/components/dashboard/dashboard-home/recent-activity";
import { StatsGrid } from "@/components/dashboard/dashboard-home/stats-grid";
import { SubjectProgress } from "@/components/dashboard/dashboard-home/subject-progress";
import { WeeklyActivity } from "@/components/dashboard/dashboard-home/weekly-activity";
import WelcomeBanner from "@/components/dashboard/dashboard-home/welcome-banner";



const container: Variants = {
  hidden: {},

  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.98,
  },

  show: {
    opacity: 1,
    y: 0,
    scale: 1,

    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};


const DashboardHome = () => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="min-h-screen p-6 text-white"
    >
      <div className="mx-auto space-y-6">
        <motion.div variants={item}>
          <WelcomeBanner />
        </motion.div>

        <motion.div variants={item}>
          <StatsGrid />
        </motion.div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <motion.div
            variants={item}
            className="lg:col-span-2"
          >
            <WeeklyActivity />
          </motion.div>

          <motion.div variants={item}>
            <SubjectProgress />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <motion.div
            variants={item}
            className="lg:col-span-2"
          >
            <ContinueLearning />
          </motion.div>

          <motion.div variants={item}>
            <AIRecommendations />
          </motion.div>
        </div>


        <motion.div variants={item}>
          <RecentActivity />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default DashboardHome;