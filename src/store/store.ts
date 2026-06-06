import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "./slice/authSlice";
import onboardingReducer from "./slice/onboardingSlice";
// import notificationsReducer from "./slice/notificationSlice";
import subjectReducer from "./slice/subjectSlice";
import themeReducer from "./slice/themeSlice";
import loaderReducer from "./slice/loaderSlice";
import { apiSlice } from "./api/apiSlice";

const persistConfig = {
  key: "root",
  storage,

  whitelist: ["onboarding", "subject", "theme"],
};

const rootReducer = combineReducers({
  auth: authReducer,
  onboarding: onboardingReducer,
  // notifications: notificationsReducer,
  subject: subjectReducer,
  theme: themeReducer,
  loader: loaderReducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(apiSlice.middleware),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
