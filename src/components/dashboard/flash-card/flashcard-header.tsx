import { Button } from "@/components/ui/button";

export const FlashCardHeader = () => {
  return (
    <div className="space-y-6 flex justify-between">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="sm:text-xl  text-3xl font-bold  flex items-center gap-2">
            🎴 Flashcards
          </h1>
          <p className="text-textColor mt-1">AI-generated flashcards with spaced repetition.</p>
        </div>
      </div>


      <Button>AI Generate Cards</Button>
    </div>
  );
};