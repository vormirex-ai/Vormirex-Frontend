import { goals } from "@/components/data/onboardingData";

const StepGoal = ({ formData, setFormData }: any) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-2">
        Choose Your Goal
      </h2>

      <p className="text-gray-400 mb-8">
        Select your learning objective.
      </p>

      <div className="grid md:grid-cols-2 gap-5">
        {goals.map((goal) => (
          <button
            key={goal.title}
            onClick={() =>
              setFormData({
                ...formData,
                goal: goal.title,
              })
            }
            className={`p-6 rounded-2xl border transition-all duration-300 text-left
            ${formData.goal === goal.title
                ? "border-sky-400 bg-sky-500/10"
                : "border-white/10 bg-white/5"
              }`}
          >
            <div className="text-4xl mb-4">
              {goal.icon}
            </div>

            <h3 className="text-lg font-semibold">
              {goal.title}
            </h3>

            <p className="text-sm text-gray-400 mt-2">
              {goal.description}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default StepGoal;