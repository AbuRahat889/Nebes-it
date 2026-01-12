"use client";

import image from "@/assets/loginPage.png";
import logo2 from "@/assets/Logo-A1.png";
import Loader from "@/components/ui/Loader";
import { handleApiResponse } from "@/lib/handleRTKResponse";
import { useLoginAdminMutation } from "@/redux/api/auth";
import { setUser } from "@/redux/slices/authSlice";
import Cookies from "js-cookie";
import { Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaCheck } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { toast, ToastContainer } from "react-toastify";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [isFocused, setIsFocused] = useState({
    email: false,
    password: false,
  });

  const emailValue = watch("email");
  const passwordValue = watch("password");

  const [loginFN, { isLoading }] = useLoginAdminMutation();

  const onSubmit = async (data: any) => {
    const res = await handleApiResponse(loginFN, data, "Login successful!");

    if (res.success) {
      Cookies.set("token", res?.data?.data?.accessToken);
      Cookies.set("role", res?.data?.data?.role);
      dispatch(
        setUser({
          token: res?.data?.data?.accessToken,
          user: res?.data?.data,
          isAuthenticated: true,
        })
      );
      if (res?.data?.data?.role === "SUPERADMIN") {
        window.location.href = "/";
      } else if (res?.data?.data?.role === "PARTNER") {
        window.location.href = "/partner-dashboard";
      } else {
        toast.error("Unauthorized role");
      }
    }
  };

  return (
    <div className="flex flex-col md:flex-row w-full px-10 md:px-0 ">
      <ToastContainer />
      {/* Left Section */}
      <div className="hidden md:block flex-1 w-1/2 h-screen bg-[#0b1a13]">
        <Image
          src={image}
          alt="Fishing Trip"
          height={800}
          width={800}
          className="h-full w-full object-contain"
        />
      </div>

      {/* Right Section */}
      <div className="flex-1 flex flex-col justify-center items-center w-full  min-w-lg mx-auto py-28 md:py-0">
        <Link
          href={"/"}
          className="h-48 md:h-64 w-48 md:w-64 object-cover bg-[#0d1a13] flex items-center justify-center rounded-full p-4"
        >
          <Image
            src={logo2}
            alt="logo"
            height={500}
            width={500}
            className="h-32 md:h-48 w-32 md:w-48 object-contain"
          />
        </Link>

        <div className="text-start w-full flex flex-col justify-between max-w-lg px-2 md:px-8">
          {/* Form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full pt-6 space-y-4 "
          >
            {/* Email */}
            <div className="relative">
              <label
                htmlFor="email"
                className={`absolute left-3 px-3 transition-all bg-white text-base ${
                  isFocused.email || emailValue
                    ? "-top-3  text-primaryColor"
                    : "top-3 text-primaryColor"
                }`}
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                {...register("email", { required: "email is required" })}
                onFocus={() =>
                  setIsFocused((prev) => ({ ...prev, email: true }))
                }
                onBlur={() =>
                  setIsFocused((prev) => ({ ...prev, email: false }))
                }
                className="w-full border-2 border-primaryColor rounded-[10px] p-3 outline-none text-[#747474]"
                placeholder=" "
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-2">
                  {errors.email.message as string}
                </p>
              )}
            </div>

            {/* Password */}
            <div className="relative">
              <label
                htmlFor="password"
                className={`absolute left-3 px-1 transition-all bg-white text-base ${
                  isFocused.password || passwordValue
                    ? "-top-3  text-primaryColor px-8"
                    : "top-3 text-primaryColor"
                }`}
              >
                Password
              </label>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                {...register("password", { required: "password is required" })}
                onFocus={() =>
                  setIsFocused((prev) => ({ ...prev, password: true }))
                }
                onBlur={() =>
                  setIsFocused((prev) => ({ ...prev, password: false }))
                }
                className="w-full border-2 border-primaryColor rounded-[10px] p-3 outline-none text-[#747474]"
                placeholder=" "
              />
              <div
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-primaryColor cursor-pointer"
              >
                {showPassword ? (
                  <EyeOff size={20} className="text-primaryColor" />
                ) : (
                  <Eye size={20} />
                )}
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm mt-2">
                  {errors.password.message as string}
                </p>
              )}
            </div>
            {/* remember me and forgot password  */}
            <div className="flex items-center justify-between text-sm text-gray-600">
              <label className="flex items-center gap-2 cursor-pointer text-sm md:text-base font-medium text-[#6c7278] py-3">
                <input
                  type="checkbox"
                  {...register("rememberMe")}
                  className="sr-only peer"
                />
                <span className="size-4 md:size-5 flex items-center justify-center border-2 border-[#dce4e8] rounded-sm peer-checked:bg-primaryColor peer-checked:border-primaryColor transition-colors">
                  <FaCheck className="text-white " size={16} />
                </span>
                Remember me
              </label>
              {/* <Link
                href="/auth/forgot-password"
                className="text-sm md:text-base  text-primaryColor hover:underline font-medium"
              >
                Forgot password?
              </Link> */}
            </div>

            <button
              type="submit"
              className="w-full mt-6 font-bold text-base py-3 rounded-lg bg-primaryColor text-white"
            >
              {isLoading ? <Loader /> : "Login"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
