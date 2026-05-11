import { studyTimes } from "@/components/data/onboardingData";

const StepStudyTime = ({
  formData,
  updateFormData,
}: any) => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-white">
        Daily study time ⏳
      </h2>

      <p className="mt-3 text-gray-400">
        Choose your preferred learning schedule.
      </p>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {studyTimes.map((time) => {
          const selected =
            formData.studyTime === time;

          return (
            <button
              key={time}
              onClick={() =>
                updateFormData({
                  studyTime: time,
                })
              }
              className={`rounded-[24px] border p-6 text-left transition-all duration-300
              ${
                selected
                  ? "border-primary bg-primary/10 shadow-[0_0_25px_rgba(106,236,225,0.18)]"
                  : "border-white/10 bg-white/[0.03] hover:border-primary/40"
              }`}
            >
              <h3 className="text-xl font-semibold">
                {time}
              </h3>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default StepStudyTime;