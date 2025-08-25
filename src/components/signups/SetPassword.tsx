import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import axios from "axios";
import eyehide from "../../assets/svg/eyehide.svg";
import eyeshow from "../../assets/svg/eyeshow.svg";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { UserModuleAPI } from "../../services/AppEndPoints";

const schema = z
  .object({
    newpassword: z
      .string()
      .min(6, "Password must contain at least 6 characters"),
    confirmPassword: z.string().min(6, "Please confirm your password"),
  })
  .refine((data) => data.newpassword === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type FormFields = z.infer<typeof schema>;

function SetPassword() {
  const [showPassword, setShowPassword] = useState(false);
  const [showReenterPassword, setShowReenterPassword] = useState(false);

  const navigate = useNavigate();

  const email = localStorage.getItem("userEmail");
  const otp = localStorage.getItem("OTP");
  const UserResetPasswordService = UserModuleAPI.ResetPasswordPost;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormFields>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormFields) => {
    try {
      const response = await axios.post(UserResetPasswordService, {
        email,
        otp,
        newpassword: data.newpassword,
      });
      console.log(data.newpassword, "daddd");
      if (response.status === 200) {
        setTimeout(() => {
          navigate("/complete");
        }, 2000);
        toast.success("Password set successfully ");

        navigate("/login");
      }

      reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to set password ");
    }
  };

  function togglePassword() {
    setShowPassword((prev) => !prev);
  }
  function toggleReenterPassword() {
    setShowReenterPassword((prev) => !prev);
  }

  return (
    <div className="lg:mt-[110px] h-screen flex justify-center items-center bg-gradient-to-br from-[#f3d1c1] via-[#e9a17c] to-[#d6785d]">
      <div className="flex flex-col lg:w-2/6 w-5/6 md:w-3/6 justify-center items-center bg-white opacity-90 gap-6 p-8 z-10 md:mr-32 m-6 rounded-xl relative">
        <div className="w-full flex flex-col justify-center items-center gap-2">
          <p className="text-2xl font-semibold self-start py-2">Set New Password</p>
          <p className="text-lg text-[#666] font-normal">
            Password must be at least 6 characters
          </p>
        </div>

        <form
          className="w-full flex flex-col gap-6"
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* New Password */}
          <div className="flex flex-col gap-1 relative">
            <label
              htmlFor="newpassword"
              className="text-sm font-normal text-[#202020]"
            >
              Password
            </label>
            <div className="relative">
              <input
                {...register("newpassword")}
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                id="newpassword"
                  className="text-sm text-[#939393] bg-[#F7F6F4] outline-none w-full    rounded-md px-[20px] py-[12px] bg-transparent"
              />
              <button
                type="button"
                onClick={togglePassword}
                className="absolute right-4 bottom-3.5"
              >
                <img
                  src={showPassword ? eyeshow : eyehide}
                  alt=""
                  className="w-4"
                />
              </button>
            </div>
            {errors.newpassword && (
              <p className="text-red-600 text-xs absolute -bottom-4 left-1">
                {errors.newpassword.message}
              </p>
            )}
          </div>

          {/* Confirm Password */}
          <div className="flex flex-col gap-1 relative">
            <label
              htmlFor="confirmPassword"
              className="text-sm font-normal text-[#202020]"
            >
              Re-enter Password
            </label>
            <div className="relative">
              <input
                {...register("confirmPassword")}
                type={showReenterPassword ? "text" : "password"}
                placeholder="Re-enter your password"
                id="confirmPassword"
                  className="text-sm text-[#939393] bg-[#F7F6F4] outline-none w-full    rounded-md px-[20px] py-[12px] bg-transparent"
              />
              <button
                type="button"
                onClick={toggleReenterPassword}
                className="absolute right-4 bottom-3.5"
              >
                <img
                  src={showReenterPassword ? eyeshow : eyehide}
                  alt=""
                  className="w-4"
                />
              </button>
            </div>
            {errors.confirmPassword && (
              <p className="text-red-600 text-xs absolute -bottom-4 left-1">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          <motion.button
            type="submit"
            className="bg-[#8E512C] md:w-3/6 w-full mx-auto rounded-md p-2 font-semibold text-white"
            whileHover={{ scale: 1.04, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.95, transition: { duration: 0.1 } }}
          >
            Set New Password
          </motion.button>
        </form>
      </div>
    </div>
  );
}

export default SetPassword;
