import { Button } from "@/components/ui/button";
import { generateRoadmap } from "@/services/roadmap";
import { Map } from "lucide-react";


export function RoadmapHeader() {


  // const hendleGenerateRoadmap = async () => {
  //   try {
  //     const response = await generateRoadmap();
  //     console.log("Generated Roadmap:", response);
  //   }
  //   catch (error) {
  //     console.error("Error generating roadmap:", error);
  //   }
  // }


  return (
    <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between mb-6 lg:mb-8">

      <div className="min-w-0">
        <div className="flex items-start sm:items-center gap-3 mb-2">
          <Map
            className="text-cyan-400 shrink-0 mt-1 sm:mt-0"
            size={22}
          />
          <h1 className="text-2xl md:text-4xl  font-bold leading-snug">
            Learning Roadmap
          </h1>
        </div>
        <p className="text-sm sm:text-base text-textColor leading-relaxed">
          Your personalized weekly learning plan, crafted by AI.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center gap-3 w-full lg:w-auto">
        <div className="px-4 py-2 rounded-full bg-green-500/10 text-green-400 text-xs sm:text-sm font-medium border border-green-500/20 text-center">
          Week 3 of 8
        </div>
        {/* <Button className="w-full sm:w-auto bg-primary-gradient text-black font-semibold">
          Regenerate Plan
        </Button> */}
        <Button
          // onClick={hendleGenerateRoadmap}
          className="w-full sm:w-auto bg-primary-gradient text-black font-semibold"
        >
          Regenerate Plan
        </Button>
      </div>
    </div>
  );
}