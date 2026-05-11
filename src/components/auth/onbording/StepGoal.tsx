import { goals } from "@/components/data/onboardingData";
import SelectableCard from "./onboardingCard";


const StepGoal = ({
  formData,
  updateFormData,
}: any) => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-white">
        Choose your goal 🚀
      </h2>

      <p className="mt-3 text-textColor">
        Select your learning objective.
      </p>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {goals.map((goal) => (
   
          <SelectableCard
            key={goal.title}
            title={goal.title}
            description={goal.description}
            icon={goal.icon}
            selected={formData.level === goal.title}
            onClick={() =>
              updateFormData({ level: goal.title })
            }
          />
        ))}
         
      </div>
    </div>
  );
};

export default StepGoal;