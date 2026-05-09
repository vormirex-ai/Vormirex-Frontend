import { subjects } from "@/components/data/onboardingData";

const StepSubjects = ({
  formData,
  toggleSubject,
}: any) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-2">
        Select Subjects
      </h2>

      <p className="text-gray-400 mb-8">
        Pick subjects you want to learn.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {subjects.map((subject) => {
          const selected =
            formData.subjects.includes(subject);

          return (
            <button
              key={subject}
              onClick={() => toggleSubject(subject)}
              className={`p-5 rounded-2xl border transition-all
              ${selected
                  ? "bg-sky-500/10 border-sky-400"
                  : "bg-white/5 border-white/10"
                }`}
            >
              {subject}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default StepSubjects;