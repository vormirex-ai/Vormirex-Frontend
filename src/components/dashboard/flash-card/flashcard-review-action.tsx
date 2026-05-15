import { Button } from "@/components/ui/button";

interface FlashcardReviewActionsProps {
  onSelect: (type: "wrong" | "close" | "correct") => void;
}

export const FlashcardReviewActions = ({
  onSelect,
}: FlashcardReviewActionsProps) => {
  return (
    <div className="grid grid-cols-3 gap-4">

      <Button
        variant="outline"
        onClick={() => onSelect("wrong")}
        className="h-16 flex flex-col items-center justify-center rounded-xl
        border border-red-500/20
        bg-red-500/5 dark:bg-red-950/20
        hover:bg-red-500/10
        text-red-600 dark:text-red-400 transition-all"
      >
        <span className="text-base font-semibold">
          😫 Wrong
        </span>

        <span className="text-[10px] opacity-70">
          Didn&apos;t know it
        </span>
      </Button>

      <Button
        variant="outline"
        onClick={() => onSelect("close")}
        className="h-16 flex flex-col items-center justify-center rounded-xl
        border border-yellow-500/20
        bg-yellow-500/5 dark:bg-yellow-950/20
        hover:bg-yellow-500/10
        text-yellow-600 dark:text-yellow-400 transition-all"
      >
        <span className="text-base font-semibold">
          🤨 Close
        </span>

        <span className="text-[10px] opacity-70">
          Partially correct
        </span>
      </Button>

      <Button
        variant="outline"
        onClick={() => onSelect("correct")}
        className="h-16 flex flex-col items-center justify-center rounded-xl
        border border-emerald-500/20
        bg-emerald-500/5 dark:bg-emerald-950/20
        hover:bg-emerald-500/10
        text-emerald-600 dark:text-emerald-400 transition-all"
      >
        <span className="text-base font-semibold">
          😊 Correct!
        </span>

        <span className="text-[10px] opacity-70">
          Nailed it
        </span>
      </Button>

    </div>
  );
};