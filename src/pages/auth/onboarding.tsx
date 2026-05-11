import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import {
  resetOnboarding,
  setStep,
  updateFormData,
} from "@/store/slice/onboardingSlice";

import StepGoal from "@/components/auth/onbording/StepGoal";
import StepSubjects from "@/components/auth/onbording/StepSubjects";
import StepStudyTime from "@/components/auth/onbording/StepStudyTime";
import StepLevel from "@/components/auth/onbording/StepLevel";

import ProgressBar from "@/components/auth/onbording/ProgressBar";
import NavigationButtons from "@/components/auth/onbording/NavigationButtons";

const OnboardingPage = () => {
  const dispatch = useDispatch();

  const { step, formData } = useSelector(
    (state: RootState) => state.onboarding
  );

  const toggleSubject = (subject: string) => {
    const updatedSubjects = formData.subjects.includes(subject)
      ? formData.subjects.filter((s: string) => s !== subject)
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
    // console.log(formData);
    dispatch(resetOnboarding());
  };

  const canProceed = () => {
    if (step === 1) return !!formData.level;
    if (step === 2) return formData.subjects.length > 0;
    if (step === 3) return !!formData.goal;
    if (step === 4) return !!formData.studyTime;
    return false;
  };

  return (
    <div className="bg-[#030712] flex justify-center my-7">
      <div className="absolute top-[-120px] left-[-120px] h-[350px] w-[350px] rounded-full bg-primary/20 blur-[140px]" />
      <div className="absolute bottom-[-120px] right-[-120px] h-[350px] w-[350px] rounded-full bg-violet-500/20 blur-[140px]" />

      <div className="relative w-full max-w-2xl rounded-[32px] border border-white/10 bg-[#070f1d]/90 backdrop-blur-xl px-6 py-8 md:px-12 md:py-10 shadow-[0_0_80px_rgba(0,0,0,0.6)]">

        <ProgressBar step={step} />

        <div className="mt-10">
          {step === 1 && (
            <StepLevel
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
            <StepGoal
              formData={formData}
              updateFormData={(data: any) =>
                dispatch(updateFormData(data))
              }
            />
          )}

          {step === 4 && (
            <StepStudyTime
              formData={formData}
              updateFormData={(data: any) =>
                dispatch(updateFormData(data))
              }
            />
          )}
        </div>

        <NavigationButtons
          step={step}
          prevStep={prevStep}
          nextStep={nextStep}
          handleSubmit={handleSubmit}
          canProceed={canProceed()}
        />
      </div>
    </div>
  );
};

export default OnboardingPage;