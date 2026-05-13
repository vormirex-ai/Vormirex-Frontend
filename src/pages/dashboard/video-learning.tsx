import { motion } from "framer-motion";
import { containerStagger, fadeUpItem } from "@/lib/motion";
import { LessonHeader } from "@/components/dashboard/video-leraning/lession-header";
import { VideoPlayer } from "@/components/dashboard/video-leraning/video-player";
import { ActionButtons } from "@/components/dashboard/video-leraning/action-buttons";
import { TranscriptSection } from "@/components/dashboard/video-leraning/transcript-view";
import { AIChatSidebar } from "@/components/dashboard/video-leraning/ai-chat-container";

export default function VideoLearning() {
  return (
    <motion.div
      variants={containerStagger(0.12)}
      initial="hidden"
      animate="show"
      className="min-h-screen p-8 flex gap-8"
    >
      <div className="flex-1 flex flex-col space-y-6">
        <motion.div variants={fadeUpItem}>
          <LessonHeader />
        </motion.div>

        <div className="flex gap-6">
          <div>
            <motion.div variants={fadeUpItem}>
              <div className="relative rounded-2xl overflow-hidden border border-cyan-500/10 ">
                <VideoPlayer />
              </div>
            </motion.div>

            <motion.div variants={fadeUpItem}>
              <ActionButtons />
            </motion.div>

            <motion.div variants={fadeUpItem}>
              <div className="bg-card rounded-xl p-6 border border-cyan-500/10  h-64 overflow-hidden  shadow-2xl transition-all duration-300 hover:shadow-[0_0_25px_rgba(34,211,238,0.25)] hover:border-cyan-400/5">
                <TranscriptSection />
              </div>
            </motion.div>
          </div>

          <motion.div variants={fadeUpItem}>
            <aside className="shrink-0">
              <AIChatSidebar />
            </aside>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}