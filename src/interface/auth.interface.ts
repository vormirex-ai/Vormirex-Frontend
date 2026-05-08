// export interface LearningPreferences {
//   dailyGoal: number;
//   focusAreas: string[];
//   currentSkillLevel?: string;
//   profileImage?: string;
// }

// export interface User {
//   id: string;
//   name: string;
//   email: string;
//   learningPreferences?: LearningPreferences;
// }

// export interface AuthResponse {
//   success: boolean;
//   accessToken?: string;
//   refreshToken?: string;
//   user?: User;
//   requireTwoFactor?: boolean;
//   message?: string;
// }

// export interface SignupResponse {
//   success: boolean;
//   message: string;
// }

// export interface CommonResponse {
//   success: boolean;
//   message: string;
// }

// export interface UpdateProfilePayload {
//   name: string;
//   timezone?: string;
// }

export interface User {
  id?: string;
  name: string;
  email: string;
}

export interface LoginDateType {
  email: string;
  password: string;
}

export interface SignupDataType {
  name: string;
  email: string;
  password: string;
}

export interface AuthResponse {
  success: boolean;
  message?: string;
  accessToken?: string;
  user?: User;
}

export interface ApiErrorResponse {
  success: false;
  message: string;
}
