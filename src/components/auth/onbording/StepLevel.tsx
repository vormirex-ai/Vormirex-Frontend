import SelectableCard from "./onboardingCard";
import { levels } from "@/components/data/onboardingData";

const StepLevel = ({ formData, updateFormData }: any) => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-white">What is your level? 🎓</h2>

      <p className="mt-3 text-textColor">
        This helps us personalize your learning experience and roadmap.
      </p>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {levels.map((level) => (
          <SelectableCard
            key={level.title}
            title={level.title}
            description={level.desc}
            icon={level.icon}
            selected={formData.level === level.title}
            onClick={() =>
              updateFormData({ level: level.title })
            }
          />
        ))}
      </div>
    </div>
  );
};

export default StepLevel;