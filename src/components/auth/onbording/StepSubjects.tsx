import { subjects } from "@/components/data/onboardingData";
import SelectableCard from "./onboardingCard";

const StepSubjects = ({ formData, toggleSubject }: any) => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-white">
        Select subjects 📚
      </h2>

      <p className="mt-3 text-gray-400">
        Pick subjects you want to master. You can change these later.
      </p>

      <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3">
        {subjects.map((subject) => (
          <SelectableCard
            key={subject.title}
            title={subject.title}
            icon={subject.icon}
            selected={formData.subjects.includes(subject.title)}
            onClick={() => toggleSubject(subject.title)}
          />
        ))}
      </div>
    </div>
  );
};

export default StepSubjects;