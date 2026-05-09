import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import StepGoal from "@/components/auth/onbording/StepGoal";
import StepSubjects from "@/components/auth/onbording/StepSubjects";
import StepStudyTime from "@/components/auth/onbording/StepStudyTime";
import StepLevel from "@/components/auth/onbording/StepLevel";
import ProgressBar from "@/components/auth/onbording/ProgressBar";
import NavigationButtons from "@/components/auth/onbording/NavigationButtons";
import { resetOnboarding, setStep, updateFormData } from "@/store/slice/onboardingSlice";

const OnboardingPage = () => {

  const dispatch = useDispatch();

  const { step, formData } = useSelector(
    (state: RootState) => state.onboarding
  );

  const toggleSubject = (subject: string) => {

    const updatedSubjects =
      formData.subjects.includes(subject)
        ? formData.subjects.filter(
          (s: string) => s !== subject
        )
        : [...formData.subjects, subject];

    dispatch(
      updateFormData({
        subjects: updatedSubjects,
      })
    );
  };

  const nextStep = () => {
    if (step < 4) {
      dispatch(setStep(step + 1));
    }
  };

  const prevStep = () => {
    if (step > 1) {
      dispatch(setStep(step - 1));
    }
  };

  const handleSubmit = () => {

    console.log(formData);

    dispatch(resetOnboarding());
  };

  return (
    <div className="min-h-screen bg-[#020817] flex items-center justify-center p-4 text-white">

      <div className="w-full max-w-3xl bg-[#0c1425]/80 border border-white/10 rounded-3xl p-8 shadow-[0_0_50px_rgba(56,189,248,0.1)]">

        <div className="mb-8">

          <div className="flex justify-between items-center mb-4">

            <h1 className="text-3xl font-bold">
              Welcome to VORMIREX
            </h1>

            <span className="text-sm text-gray-400">
              Step {step}/4
            </span>

          </div>

          <ProgressBar step={step} />

        </div>

        {step === 1 && (
          <StepGoal
            formData={formData}
            updateFormData={(data: any) =>
              dispatch(updateFormData(data))
            }
          />
        )}

        {step === 2 && (
          <StepSubjects
            formData={formData}
            toggleSubject={toggleSubject}
          />
        )}

        {step === 3 && (
          <StepStudyTime
            formData={formData}
            updateFormData={(data: any) =>
              dispatch(updateFormData(data))
            }
          />
        )}

        {step === 4 && (
          <StepLevel
            formData={formData}
            updateFormData={(data: any) =>
              dispatch(updateFormData(data))
            }
          />
        )}

        <NavigationButtons
          step={step}
          prevStep={prevStep}
          nextStep={nextStep}
          handleSubmit={handleSubmit}
        />

      </div>
    </div>
  );
};

export default OnboardingPage;