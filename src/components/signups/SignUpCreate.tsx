// import signinimg from "../../assets/images/signinimg.png";
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
      if (response.status === 400) {
        toast.success("User Allready exit");
      }
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
   
    <div
     className=" lg:mt-[110px] h-screen flex justify-center items-center bg-gradient-to-br from-[#f3d1c1] via-[#e9a17c] to-[#d6785d]">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-lg p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Create an Account
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          {/* Register As */}
          <div className="flex gap-4">
            <span className="block text-[18px] font-medium  mb-1">
              Register As:
            </span>
            <div className="flex items-center space-x-4">
              <label className="flex items-center space-x-1 font-medium cursor-pointer">
                <input
                  type="radio"
                  value="User"
                  {...register("role")}
                  checked={selectedRole === "User"}
                  onChange={() => setSelectedRole("User")}
                  className=" cursor-pointer"
                />
                <span>User</span>
              </label>
              <label className="flex items-center space-x-1 font-medium cursor-pointer">
                <input
                  type="radio"
                  value="Admin"
                  {...register("role")}
                  checked={selectedRole === "Admin"}
                  onChange={() => setSelectedRole("Admin")}
                  className=" cursor-pointer"
                />
                <span>Admin</span>
              </label>
            </div>
            {errors.role && (
              <p className="text-red-500 text-xs mt-1">{errors.role.message}</p>
            )}
          </div>

          {/* Secret Key (Admin only) */}
          {selectedRole === "Admin" && (
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Secret Key
              </label>
              <input
                {...register("secretKey")}
                placeholder="Enter your Secret Key"
                className="mt-1 block w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-[#FFA12B] focus:border-[#FFA12B] outline-none"
              />
              {errors.secretKey && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.secretKey.message}
                </p>
              )}
            </div>
          )}

          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              {...register("name")}
              placeholder="Enter your Name"
              className="mt-1 block w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-[#FFA12B] focus:border-[#FFA12B] outline-none"
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              {...register("email")}
              placeholder="Enter your Email"
              className="mt-1 block w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-[#FFA12B] focus:border-[#FFA12B] outline-none"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="relative">
              <input
                {...register("password")}
                type={showPassword ? "text" : "password"}
                placeholder="Enter Your Password"
                className="mt-1 block w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-[#FFA12B] focus:border-[#FFA12B] outline-none"
              />
              <button
                type="button"
                onClick={togglePassword}
                className="absolute right-3 top-2.5"
              >
                <img
                  src={showPassword ? eyeshow : eyehide}
                  alt=""
                  className="w-4"
                />
              </button>
            </div>
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Terms */}
          <p className="text-xs text-gray-600">
            By Signing Up, you agree to the{" "}
            <a href="#" className="text-[#FFA12B] underline">
              Terms of Use
            </a>{" "}
            and{" "}
            <a href="#" className="text-[#FFA12B] underline">
              Privacy Policy
            </a>
            .
          </p>

          {/* Submit */}
          <motion.button
            className="bg-[#8E512C] w-full rounded-lg py-2 font-semibold text-white hover:bg-[#8E512C] transition"
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
          >
            Create Account
          </motion.button>
        </form>

        {/* Footer */}
        <p className="text-center text-sm mt-4">
          Already have an account?{" "}
          <NavLink to="/login" className="text-[#FFA12B] underline">
            Sign In
          </NavLink>
        </p>
      </div>
    </div>
  );
}

export default SignUpCreate;
