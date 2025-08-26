// import signinimg from "../../assets/images/signinimg.png";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import axios from "axios";
import { useState, useContext } from "react";
import eyehide from "../../assets/svg/eyehide.svg";
import eyeshow from "../../assets/svg/eyeshow.svg";
// import googleicon from "../../assets/svg/googleicon.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../auth/AuthContext";
import { UserModuleAPI } from "../../services/AppEndPoints";
const schema = z.object({
  email: z
    .string()
    .nonempty("Email is required")
    .email("Invalid email address"),
  password: z.string().min(6, "must contain 6 characters"),
});

type FormFields = z.infer<typeof schema>;
function SignUpCreate() {
  const authContext = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const UserLoginApiService = UserModuleAPI.SingInPost; // API endpoint for user login
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormFields>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormFields) => {
    try {
      const response = await axios.post(UserLoginApiService, data);
      if (response.status === 200) {
        const { token, email, name, role, userId } = response.data;

        if (authContext) {
          authContext.login(token, email, name, role, userId);
        }
        toast.success("successfully Signed In");
        // Navigate based on user role
        if (role === "Admin") {
          navigate("/admin/");
          toast.success("welcome to admin page");
        } else {
          navigate("/donationpayment");
        }
      }
      reset();
    } catch (error: any) {
      if (axios.isAxiosError(error) && error.response) {
        if (error.response.status === 404) {
          toast.error("User not found");
        } else if (error.response.status === 401) {
          toast.error("Invalid credentials");
        } else {
          toast.error("Sign-in failed. Please try again.");
        }
      } else {
        toast.error("Something went wrong.");
      }
    }
  };

  function togglepassword() {
    setShowPassword(!showPassword);
  }

  return (
    <div
      className=" lg:mt-[110px] h-screen flex justify-center items-center bg-gradient-to-br from-[#f3d1c1] via-[#e9a17c] to-[#d6785d]"
      // style={{
      //   backgroundImage: `url(${signinimg})`,
      //   backgroundPosition: "center",
      //   backgroundSize: "cover",
      // }}
    >
      <div className="flex flex-col  lg:w-2/6 w-5/6 md:w-3/6 justify-center items-center bg-white opacity-90 gap-2 p-4 z-10  mx-4 rounded-xl ">
        <p className=" text-2xl font-semibold self-start py-2">Sign In</p>

        <div className=" w-full ">
          <form
            className="w-full flex flex-col md:gap-2"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col gap-2">
              <div className="flex flex-col gap-1 relative">
                <label
                  htmlFor="email"
                  className="text-sm font-normal text-[#202020]"
                >
                  Email Address
                </label>
                <input
                  {...register("email")}
                  placeholder="Enter your Email"
                  id="email"
                  className="text-sm  text-[#939393] bg-[#F7F6F4] outline-none w-full    rounded-md px-[20px] py-[12px] "
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
                  className="text-sm font-normal text-[#202020]"
                >
                  Password
                </label>

                <div className="relative">
                  <input
                    {...register("password")}
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter Your Password"
                    id="password"
                    className="text-sm outline-none text-[#939393] bg-[#F7F6F4]   w-full  rounded-md px-[20px] py-[12px] "
                  />
                  <button
                    type="button"
                    onClick={togglepassword}
                    className="absolute right-4 bottom-3.5 "
                  >
                    <img
                      src={showPassword ? eyeshow : eyehide}
                      alt=""
                      className="w-4"
                    />
                  </button>
                </div>

                {errors.password && (
                  <p className="text-red-600 text-xs absolute bottom-2 left-1">
                    {errors.password.message}
                  </p>
                )}
                <div className="flex justify-end">
                  <NavLink
                    to="/forgot"
                    className="text-[#FFA12B] text-sm underline underline-offset-2  w-fit"
                  >
                    Forgot your Password?
                  </NavLink>
                </div>
              </div>
            </div>

            <div className="w-full flex flex-col justify-center items-center gap-1">
              <motion.button
                className="bg-[#8E512C] w-full  rounded-md p-2 font-semibold text-white mt-2"
                type="submit"
                whileHover={{ scale: 1.04, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.95, transition: { duration: 0.1 } }}
              >
                Sign In
              </motion.button>

              <p className="mx-auto md:mt-4  text-sm md:text-sm">
                Don't have an account?{" "}
                <NavLink
                  to={"/signup"}
                  className="text-[#FFA12B] underline underline-offset-2"
                >
                  Sign Up
                </NavLink>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUpCreate;
