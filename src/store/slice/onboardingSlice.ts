import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface OnboardingFormData {
  goal: string;
  subjects: string[];
  studyTime: string;
  level: string;
}

interface OnboardingState {
  step: number;
  formData: OnboardingFormData;
}

const initialState: OnboardingState = {
  step: 1,

  formData: {
    goal: "",
    subjects: [],
    studyTime: "",
    level: "",
  },
};

const onboardingSlice = createSlice({
  name: "onboarding",

  initialState,

  reducers: {
    setStep: (state, action: PayloadAction<number>) => {
      state.step = action.payload;
    },

    updateFormData: (
      state,
      action: PayloadAction<Partial<OnboardingFormData>>,
    ) => {
      state.formData = {
        ...state.formData,
        ...action.payload,
      };
    },

    resetOnboarding: () => initialState,
  },
});

export const { setStep, updateFormData, resetOnboarding } =
  onboardingSlice.actions;

export default onboardingSlice.reducer;
