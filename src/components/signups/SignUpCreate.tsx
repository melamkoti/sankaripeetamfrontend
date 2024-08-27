import signinimg from "../../assets/images/signinimg.png";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import axios from "axios";
import { useState } from "react";
import eyehide from "../../assets/svg/eyehide.svg";
import eyeshow from "../../assets/svg/eyeshow.svg";


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
      console.log(data);
      const response = await axios.post('http://localhost:3000/user/signup', data);
      console.log("Response:", response);

      reset();
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  function togglepassword() {
    setShowPassword (!showPassword)
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
        <p className="text-3xl font-semibold">Create an account</p>

        <div className="w-full flex flex-col gap-2">
          <form
            className="w-full flex flex-col gap-6"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1 relative">
                <label
                  htmlFor="name"
                  className="text-lg font-normal text-[#666]"
                >
                  Full Name
                </label>
                <input
                  {...register("name")}
                  placeholder="Enter your Name"
                  id="name"
                  className="border-2 outline-none border-slate-400 focus:border-[#FFA12B]  rounded-lg p-2 bg-transparent"
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


                <div className="relative" >
 
                <input 
                {...register("password")}
                type={showPassword ? "text" : "password"}
                placeholder="Enter Your Password"
                id="password"
                className="border-2 outline-none border-slate-400 focus:border-[#FFA12B]  w-full p-2 rounded-lg bg-transparent "  
                             
                />
                <button type="button" onClick={togglepassword} className="absolute right-4 bottom-3.5 ">
                    <img src={showPassword ? eyeshow : eyehide} alt="" className="w-4" />
                </button>
                </div>


                {errors.password && (<p className="text-red-600 text-xs absolute -bottom-4 left-1">{errors.password.message}</p>)}
              </div>
            </div>

            <p className="mt-4 ">
              By Signing Up, you agree to the{" "}
              <a href="#" className="text-[#FFA12B] underline underline-offset-2">
                Terms of use
              </a>{" "}
              and{" "}
              <a href="#" className="text-[#FFA12B] underline underline-offset-2">
                Privacy Policy
              </a>
            </p>
            <motion.button
              className="bg-[#FFA12B] w-full rounded-3xl p-2 font-semibold text-white"
              onSubmit={handleSubmit(onSubmit)}
              whileHover={{ scale: 1.04, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.95, transition: { duration: 0.1 } }}
            >
              Create Account
            </motion.button>
          </form>
        </div>

        <p className="mt-3">
          Already have an account?{" "}
          <a href="#" className="text-[#FFA12B] underline underline-offset-2">
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
}

export default SignUpCreate;