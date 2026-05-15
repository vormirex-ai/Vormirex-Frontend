import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Check, Circle, ThumbsUp } from "lucide-react";

interface FlashCardResultProps {
  onBackToDecks: () => void;
}

export const FlashCardResult = ({ onBackToDecks }: FlashCardResultProps) => {

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="flex min-h-[40vh] items-center justify-center"
    >
      <div className="w-full p-10 text-center">

        <div className="mb-6 flex justify-center text-5xl">
          👍
        </div>

        <h2 className="text-xl font-bold text-primary">
          Deck Complete!
        </h2>

        <p className="mt-3 text-slate-400">
          5 cards reviewed
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <div className="flex items-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-emerald-400">
            <Check size={18} />
            Easy: 1
          </div>

          <div className="flex items-center gap-2 rounded-xl border border-yellow-500/30 bg-yellow-500/10 px-4 py-3 text-yellow-400">
            <Circle size={16} fill="currentColor" />
            OK: 4
          </div>

          <div className="flex items-center gap-2 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-red-400">
            <Circle size={16} fill="currentColor" />
            Hard: 0
          </div>
        </div>

        <h3 className="mt-10 text-4xl font-bold text-cyan-400">
          Score: 60%
        </h3>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Button className="rounded-xl py-5">
            Review Again
          </Button>

          <Button
            variant="secondary"
            className="rounded-xl py-5"
            onClick={onBackToDecks}
          >
            Back to Decks
          </Button>
        </div>
      </div>
    </motion.div>
  );
};