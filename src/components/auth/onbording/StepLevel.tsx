import { levels } from "@/components/data/onboardingData";

const StepLevel = ({
  formData,
  setFormData,
}: any) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-2">
        Experience Level
      </h2>

      <div className="grid md:grid-cols-3 gap-5 mt-8">
        {levels.map((level) => (
          <button
            key={level}
            onClick={() =>
              setFormData({
                ...formData,
                level,
              })
            }
            className={`p-6 rounded-2xl border
            ${formData.level === level
                ? "bg-sky-500/10 border-sky-400"
                : "bg-white/5 border-white/10"
              }`}
          >
            {level}
          </button>
        ))}
      </div>
    </div>
  );
};

export default StepLevel;