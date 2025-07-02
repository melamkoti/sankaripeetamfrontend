import signinimg from "../../assets/images/signinimg.png";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import axios from "axios";
import { useState } from "react";
import eyehide from "../../assets/svg/eyehide.svg";
import eyeshow from "../../assets/svg/eyeshow.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { UserModuleAPI } from "../../services/AppEndPoints";
const schema = z.object({
  role: z.string().nonempty("Role is required"), // Role validation
  email: z
    .string()
    .nonempty("Email is required")
    .email("Invalid email address"),
  name: z.string().min(3, "Name must be at least 3 letters"),
  password: z.string().min(6, "Must contain at least 6 characters"),
  secretKey: z.string().optional(), // Secret Key is optional
});

type FormFields = z.infer<typeof schema>;

function SignUpCreate() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [selectedRole, setSelectedRole] = useState("User"); // Default role
  const UserApiService = UserModuleAPI.RegisterPost;
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormFields>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormFields) => {
    try {
      const payload = {
        ...data,
        selectedRole,
      };
      if (selectedRole === "Admin" && !data.secretKey) {
        toast.error("Secret Key is required for admin registration");
        return;
      }
      console.log(data);
      const response = await axios.post(UserApiService, payload);
      if (response.status === 201) {
        navigate("/login");
        toast.success("Signup successful!");
      }
      reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Signup failed. Please try again.");
    }
  };

  function togglePassword() {
    setShowPassword(!showPassword);
  }

  return (
    <div className="main_head">
      <div
        className="h-screen flex justify-end items-center"
        style={{
          backgroundImage: `url(${signinimg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="flex flex-col lg:w-2/6 w-4/6 md:w-3/6 justify-center items-center bg-white opacity-90 gap-2 p-4 z-10 md:mr-32 mx-4 rounded-xl">
          <p className="text-2xl font-semibold text-center mb-1">
            Create an account
          </p>

          <form
            className="w-full flex flex-col md:gap-1"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="mb-4">
              <span className="text-lg font-semibold">Register As:</span>
              <label className="ml-2">
                <input
                  type="radio"
                  value="User"
                  {...register("role")}
                  checked={selectedRole === "User"}
                  onChange={() => setSelectedRole("User")}
                  className="mr-1"
                />
                User
              </label>
              <label className="ml-4">
                <input
                  type="radio"
                  value="Admin"
                  {...register("role")}
                  checked={selectedRole === "Admin"}
                  onChange={() => setSelectedRole("Admin")}
                  className="mr-1"
                />
                Admin
              </label>
              {errors.role && (
                <p className="text-red-600 text-xs mt-1">
                  {errors.role.message}
                </p>
              )}
            </div>

            {selectedRole === "Admin" && (
              <div className="flex flex-col gap-1 relative">
                <label
                  htmlFor="secretKey"
                  className="text-sm font-normal text-[#666]"
                >
                  Secret Key
                </label>
                <input
                  {...register("secretKey")}
                  placeholder="Enter your Secret Key"
                  id="secretKey"
                  className="border outline-none border-slate-400 focus:border-[#FFA12B] rounded-md p-2 bg-transparent"
                />
                {errors.secretKey && (
                  <p className="text-red-600 text-xs absolute -bottom-4 left-1">
                    {errors.secretKey.message}
                  </p>
                )}
              </div>
            )}

            <div className="flex flex-col gap-1 relative">
              <label htmlFor="name" className="text-sm font-normal text-[#666]">
                Full Name
              </label>
              <input
                {...register("name")}
                placeholder="Enter your Name"
                id="name"
                className="border outline-none border-slate-400 focus:border-[#FFA12B] rounded-md p-2 bg-transparent"
              />
              {errors.name && (
                <p className="text-red-600 text-xs absolute -bottom-4 left-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-1 relative">
              <label
                htmlFor="email"
                className="text-sm font-normal text-[#666]"
              >
                Email Address
              </label>
              <input
                {...register("email")}
                placeholder="Enter your Email"
                id="email"
                className="border outline-none border-slate-400 focus:border-[#FFA12B] rounded-md p-2 bg-transparent"
              />
              {errors.email && (
                <p className="text-red-600 text-xs absolute -bottom-4 left-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-1 relative">
              <label
                htmlFor="password"
                className="text-sm font-normal text-[#666]"
              >
                Password
              </label>
              <div className="relative">
                <input
                  {...register("password")}
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter Your Password"
                  id="password"
                  className="border outline-none border-slate-400 focus:border-[#FFA12B] w-full p-2 rounded-md bg-transparent"
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
              {errors.password && (
                <p className="text-red-600 text-xs absolute -bottom-4 left-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            <p className="text-sm">
              By Signing Up, you agree to the{" "}
              <a
                href="#"
                className="text-[#FFA12B] underline underline-offset-2"
              >
                Terms of Use
              </a>{" "}
              and{" "}
              <a
                href="#"
                className="text-[#FFA12B] underline underline-offset-2"
              >
                Privacy Policy
              </a>
              .
            </p>
            <motion.button
              className="bg-[#FFA12B] w-full rounded-3xl p-2 font-semibold text-white mt-2"
              type="submit"
              whileHover={{ scale: 1.04, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.95, transition: { duration: 0.1 } }}
            >
              Create Account
            </motion.button>
          </form>

          <p className="text-center md:mt-1 mt-2 text-sm">
            Already have an account?{" "}
            <NavLink
              to={"/login"}
              className="text-[#FFA12B] underline underline-offset-2"
            >
              Sign In
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUpCreate;
