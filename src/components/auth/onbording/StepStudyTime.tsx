import { studyTimes } from "@/components/data/onboardingData";

const StepStudyTime = ({
  formData,
  setFormData,
}: any) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-2">
        Daily Study Time
      </h2>

      <div className="grid md:grid-cols-2 gap-5 mt-8">
        {studyTimes.map((time) => (
          <button
            key={time}
            onClick={() =>
              setFormData({
                ...formData,
                studyTime: time,
              })
            }
            className={`p-6 rounded-2xl border
            ${formData.studyTime === time
                ? "bg-sky-500/10 border-sky-400"
                : "bg-white/5 border-white/10"
              }`}
          >
            {time}
          </button>
        ))}
      </div>
    </div>
  );
};

export default StepStudyTime;