import signinimg from "../../assets/images/signinimg.png";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import axios from "axios";
import { useState } from "react";
import eyehide from "../../assets/svg/eyehide.svg";
import eyeshow from "../../assets/svg/eyeshow.svg";
import googleicon from "../../assets/svg/googleicon.svg"

const schema = z.object({
  email: z
    .string()
    .nonempty("Email is required")
    .email("Invalid email address"),
  name: z.string().min(3, "Name must be atleast 3 letters"),
  password: z.string().min(6, "must contain 6 characters"),
});

type FormFields = z.infer<typeof schema>;

function SignUpCreate() {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormFields>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormFields) => {
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        data
      );
      console.log("Response:", response);
      reset();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  function togglepassword() {
    setShowPassword(!showPassword);
  }

  return (
    <div className="flex h-screen">
      <div
        className="w-3/6 "
        style={{
          backgroundImage: `url(${signinimg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></div>

      <div className="flex flex-col w-3/6  justify-center items-center gap-6 p-24 ">
        <p className="text-3xl font-semibold">Sign In</p>

        <div className="w-full flex flex-col gap-2">
          <form
            className="w-full flex flex-col gap-8"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1 relative">
                <label
                  htmlFor="email"
                  className="text-lg font-normal text-[#666]"
                >
                  Email Address
                </label>
                <input
                  {...register("email")}
                  placeholder="Enter your Email"
                  id="email"
                  className=" border-2 outline-none border-slate-400 focus:border-[#FFA12B]  rounded-lg p-2 bg-transparent"
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
                  className="text-lg font-normal text-[#666]"
                >
                  Password
                </label>

                <div className="relative">
                  <input
                    {...register("password")}
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter Your Password"
                    id="password"
                    className="border-2 outline-none border-slate-400 focus:border-[#FFA12B] w-full p-2 rounded-lg bg-transparent "
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
                <a
                  className="text-[#FFA12B] text-sm underline underline-offset-2 text-right"
                  href="#"
                >
                  Forgot your Password?
                </a>
              </div>
            </div>

            <div className="w-full flex flex-col justify-center items-center gap-1">
              <motion.button
                className="bg-[#FFA12B] w-3/6 mx-auto rounded-3xl p-2 font-semibold text-white"
                onSubmit={handleSubmit(onSubmit)}
                whileHover={{ scale: 1.04, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.95, transition: { duration: 0.1 } }}
              >
                Sign In
              </motion.button>

              <p className="mx-auto">
                Don't have an account?{" "}
                <a
                  href="#"
                  className="text-[#FFA12B] underline underline-offset-2"
                >
                  Sign Up
                </a>
              </p>
            </div>
          </form>
        </div>

        <div className="flex items-center w-full">
          <hr className="flex-1 border-t-2 border-gray-300" />
          <span className="mx-4 font-semibold text-xl text-[#666]">OR</span>
          <hr className="flex-1 border-t-2 border-gray-300" />
        </div>

        <motion.button type="submit"  whileHover={{ scale: 1.04, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.95, transition: { duration: 0.1 } }} className=" border-2 border-[#FFA12B] w-full flex justify-center items-center gap-4 rounded-3xl p-2 shadow-xl">
          <img src={googleicon} alt="googleicon" className="w-6" />
          <p className="text-xl text-[#363636] font-bold">Continue with Google</p> 


        </motion.button>

      </div>
    </div>
  );
}

export default SignUpCreate;
