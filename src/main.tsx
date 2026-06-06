import "./index.css";
import App from "./App";
import { StrictMode, useEffect, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { Provider, useSelector } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor, RootState } from "./store/store";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "sonner";
import ErrorBoundary from "./components/common/error-boundary";
import SuspenseFallback from "./components/common/suspense-fallback";
import GlobalLoader from "./components/common/global-loader";

function Root() {
  const theme = useSelector((state: RootState) => state.theme.theme);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  return (
    <>
      <Toaster richColors position="top-right" />
      <App />
    </>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
        <ErrorBoundary>
          <Suspense fallback={<SuspenseFallback />}>
            <BrowserRouter>
              <Root />
              <GlobalLoader />
            </BrowserRouter>
          </Suspense>
        </ErrorBoundary>
      </PersistGate>
    </Provider>
  </StrictMode>
);
