import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Mail,
  Lock,
  LogIn,
  Eye,
  EyeOff,
} from "lucide-react";

import logo from "../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import GoogleLoginButton from "@/components/auth/googleLoginButton";
import { AuthenticateLogin } from "@/services/auth";
import { useDispatch, useSelector } from "react-redux";
import { setCredentials } from "@/store/slice/authSlice";
import { toast } from "sonner";
import { RootState } from "@/store/store";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onboardingCompleted = useSelector(
    (state: RootState) => state.onboarding.completed
  );
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [errors, setErrors] = useState<any>({});

  const validate = () => {
    let newErrors: any = {};

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[a-zA-Z0-9][a-zA-Z0-9._%+-]*@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/.test(
        email
      )
    ) {
      newErrors.email = "Enter a valid email";
    }

    if (!password.trim()) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password =
        "Password must be at least 6 characters";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = async () => {
    setError("");

    if (!validate()) return;

    try {
      setLoading(true);

      const response = await AuthenticateLogin({
        email,
        password,
      });
      // console.log("Login Response:", response);

      if (response?.success) {

        dispatch(
          setCredentials({
            user: response.user,
            token: response.accessToken,
          })
        );
        toast.success("Login Successful ✅");
        // navigate("/dashboard");
        if (onboardingCompleted) {
          navigate("/dashboard");
        } else {
          navigate("/onboarding");
        }

      } else {

        setError(response?.message);

        toast.error(
          response?.message || "Login failed ❌"
        );
      }

    } catch (error: any) {
      toast.error(
        error?.response?.data?.message ||
        "Something went wrong ❌"
      );

    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen w-full flex items-center justify-center  relative overflow-hidden px-4">

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full" />

      <Card className="w-full max-w-md bg-card backdrop-blur-xl border border-cyan-500/10 text-white shadow-[0_0_40px_rgba(56,189,248,0.15)] z-10 p-2 md:p-6">

        <CardHeader className="space-y-1 flex flex-col items-center">

          <div className="flex items-center gap-2 cursor-pointer my-5">
            <img src={logo} alt="Logo" className="w-6 h-6" />

            <span className="font-bold text-xl tracking-tight bg-primary bg-clip-text text-transparent">
              VORMIREX
            </span>
          </div>

          <CardTitle className="text-2xl font-bold tracking-tight">
            Welcome back 👋
          </CardTitle>

          <CardDescription className="text-gray-400">
            Sign in to continue your learning journey
          </CardDescription>

        </CardHeader>

        <CardContent className="grid gap-6">

          <GoogleLoginButton />

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-white/10" />
            </div>

            <div className="relative flex justify-center text-xs ">
              <span className="bg-[#0c1425] px-2 text-gray-500">
                or sign in with email
              </span>
            </div>
          </div>

          <div className="grid gap-4">

            <div className="grid gap-2">

              <Label
                htmlFor="email"
                className="text-gray-400 ml-1"
              >
                Email address
              </Label>

              <div className="relative">

                <Mail className="absolute left-3 top-[18px] h-4 w-4 text-gray-500" />

                <Input
                  id="email"
                  value={email}
                  onChange={(e) =>
                    setEmail(e.target.value)
                  }
                  placeholder="user@example.com"
                  className="bg-white/5 border-white/10 pl-10 py-6"
                />
              </div>
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.name}
                </p>
              )}
            </div>

            <div className="grid gap-2">

              <div className="flex items-center justify-between">

                <Label
                  htmlFor="password"
                  className="text-gray-400 ml-1"
                >
                  Password
                </Label>

                <Link
                  to="/forgot-password"
                  className="text-xs text-blue-400 hover:underline"
                >
                  Forgot password?
                </Link>

              </div>

              <div className="relative">

                <Lock className="absolute left-3 top-4 h-4 w-4 text-gray-500" />

                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) =>
                    setPassword(e.target.value)
                  }
                  placeholder="••••••••"
                  className="bg-white/5 border-white/10 pl-10 py-6 "
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword((prev) => !prev)
                  }
                  className="absolute right-3 top-4 text-gray-500 hover:text-white"
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
                {errors.password && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.password}
                  </p>
                )}

              </div>

            </div>

            {error && (
              <p className="text-red-500 text-sm">
                {error}
              </p>
            )}

          </div>

          <Button
            onClick={handleLogin}
            className="py-6 text-lg"
          >
            <LogIn className="mr-2 h-5 w-5 font-bold" />

            {/* {loading ? "Loading..." : "Sign In"} */}
            Sign In
          </Button>

          <p className="text-sm text-gray-400 text-center">
            Don't have an account?{" "}

            <Link
              to="/sign-up"
              className="text-blue-400 hover:underline"
            >
              Create account
            </Link>
          </p>

          <button
            className="text-xs text-gray-500 hover:text-white transition-colors mb-6"
            onClick={() => navigate("/")}
          >
            ← Back to home
          </button>

        </CardContent>
      </Card>
    </div>
  );
};

export default Login;