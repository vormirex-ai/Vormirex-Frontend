import { useState } from "react";
import {
  useNavigate,
  useSearchParams,
} from "react-router-dom";
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
  LockKeyhole,
  ShieldCheck,
  Eye,
  EyeOff,
  CheckCircle2,
  XCircle,
} from "lucide-react";
import { toast } from "sonner";
import { ResetPassword } from "@/services/auth";
import logo from "../../assets/logo.png";

const ResetPasswordPage = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const token = searchParams.get("token");
  const passwordsMatch = password && confirmPassword && password === confirmPassword;
  const passwordsNotMatch = confirmPassword && password !== confirmPassword;

  const handleResetPassword =
    async () => {

      if (!token) {
        toast.error("Invalid or expired reset link");
        return;
      }

      if (!password.trim()) {
        toast.error("Password is required");
        return;
      }

      if (password.length < 6) {
        toast.error("Password must be at least 6 characters");
        return;
      }

      if (!confirmPassword.trim()) {
        toast.error("Confirm Password is required");
        return;
      }

      if (password !== confirmPassword) {
        toast.error("Passwords do not match");
        return;
      }

      try {
        setLoading(true);

        const response = await ResetPassword({ token, password });

        if (response?.success) {

          toast.success(
            "Password reset successful ✅"
          );

          navigate("/login");

        } else {

          toast.error(
            response?.message ||
            "Something went wrong ❌"
          );
        }

      } catch (error: any) {

        toast.error(
          error?.response?.data
            ?.message ||
          "Something went wrong ❌"
        );

      } finally {

        setLoading(false);
      }
    };

  return (
    <div className="min-h-screen w-full flex items-center justify-center  px-4">

      <Card className="w-full max-w-md bg-card backdrop-blur-xl border border-cyan-500/10 text-white shadow-[0_0_40px_rgba(56,189,248,0.15)] p-2 md:p-6">
        <CardHeader className="space-y-1 flex flex-col items-center">

          <div className="flex items-center gap-2 cursor-pointer my-5">

            <img
              src={logo}
              alt="Logo"
              className="w-6 h-6"
            />

            <span className="font-bold text-xl tracking-tight bg-primary bg-clip-text text-transparent">
              VORMIREX
            </span>

          </div>

          <div className="flex flex-col items-center justify-center">
            <div className="bg-[#1a2235] p-3 rounded-xl border border-white/10 shadow-inner mb-4">
              <ShieldCheck className="w-6 h-6 text-green-400" />
            </div>
            <CardTitle className="text-2xl font-bold tracking-tight">
              Create New Password
            </CardTitle>
            <CardDescription className="text-gray-400 text-sm mt-2 mb-4 text-center">
              Enter your new password below to secure your account.
            </CardDescription>
          </div>

        </CardHeader>

        <CardContent className="space-y-5">
          <div className="space-y-2">

            <Label htmlFor="password" className="text-gray-400">
              New Password
            </Label>

            <div className="relative">
              <LockKeyhole className="absolute left-3 top-4 h-4 w-4 text-gray-500" />
              <Input
                id="password"
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                placeholder="Enter new password"
                value={password}
                onChange={(e) =>
                  setPassword(
                    e.target.value
                  )
                }
                className="bg-white/5 border-white/10 pl-10 pr-10 py-6"
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword(
                    !showPassword
                  )
                }
                className="absolute right-3 top-4 text-gray-400 hover:text-white transition"
              >

                {showPassword ? (
                  <EyeOff className="w-4 h-4" />
                ) : (
                  <Eye className="w-4 h-4" />
                )}

              </button>
            </div>
          </div>


          <div className="space-y-2">

            <Label htmlFor="confirmPassword" className="text-gray-400">
              Confirm Password
            </Label>

            <div className="relative">
              <LockKeyhole className="absolute left-3 top-4 h-4 w-4 text-gray-500" />
              <Input
                id="confirmPassword"
                type={
                  showConfirmPassword
                    ? "text"
                    : "password"
                }
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={(e) =>
                  setConfirmPassword(
                    e.target.value
                  )
                }
                className="bg-white/5 border-white/10 pl-10 pr-16 py-6"
              />

              <div className="absolute right-10 top-4">

                {passwordsMatch && (
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                )}

                {passwordsNotMatch && (
                  <XCircle className="w-4 h-4 text-red-400" />
                )}

              </div>

              <button
                type="button"
                onClick={() =>
                  setShowConfirmPassword(
                    !showConfirmPassword
                  )
                }
                className="absolute right-3 top-4 text-gray-400 hover:text-white transition"
              >

                {showConfirmPassword ? (
                  <EyeOff className="w-4 h-4" />
                ) : (
                  <Eye className="w-4 h-4" />
                )}

              </button>

            </div>

            {passwordsMatch && (
              <p className="text-xs text-green-400">
                Passwords match
              </p>
            )}

            {passwordsNotMatch && (
              <p className="text-xs text-red-400">
                Passwords do not match
              </p>
            )}

          </div>

          <Button
            onClick={
              handleResetPassword
            }
            className="py-6 text-lg w-full"
          >
            {loading ? "Resetting..." : "Reset Password"}
          </Button>

          <button
            className="text-xs text-gray-500 hover:text-white transition-colors mb-6 m-auto flex"
            onClick={() => navigate("/")}
          >
            ← Back to home
          </button>
        </CardContent>

      </Card>
    </div>
  );
};

export default ResetPasswordPage;