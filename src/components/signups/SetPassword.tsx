import signinimg from "../../assets/images/signinimg.png";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import axios from "axios";
import backbtn from "../../assets/svg/backbtn.svg"
import eyehide from "../../assets/svg/eyehide.svg";
import eyeshow from "../../assets/svg/eyeshow.svg";
import { useState } from "react";

const schema = z.object({

  password: z.string().min(6, "must contain 6 characters"),
  repassword: z.string().min(6, "must contain 6 characters"),
}).refine(data => data.password === data.repassword, {
    message: "Passwords must match",
    path: ["repassword"],
});

type FormFields = z.infer<typeof schema>;

function SetPassword() {
    const [showPassword, setShowPassword] = useState(false);
    const [showRePassword, setShowRePassword] = useState(false);


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
  function toggleRepassword() {
    setShowRePassword(!showRePassword);
  }

  return (
    <div className="flex h-screen">
      <div
        className="w-3/6"
        style={{
          backgroundImage: `url(${signinimg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></div>

      <div className="flex flex-col w-3/6  justify-center items-center gap-8 p-24 relative">
      <button type="button" className="absolute left-12 top-6"><img src={backbtn} alt="backbtn" className="w-6"/></button>
        <div className="w-full flex flex-col justify-center items-center gap-2 ">
          <p className="text-3xl font-semibold">Set New Password</p>
          <p className="text-lg text-[#666] font-normal">
            Password must be atleast 6 characters
          </p>
        </div>

        <div className="w-full flex flex-col gap-2">
          <form
            className="w-full flex flex-col gap-6"
            onSubmit={handleSubmit(onSubmit)}
          >
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
                    className="border-2 outline-none border-slate-400 focus:border-[#FFA12B]  w-full p-2 rounded-lg bg-transparent "
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
                  <p className="text-red-600 text-xs absolute -bottom-4 left-1">
                    {errors.password.message}
                  </p>
                )}
                
              </div>

              <div className="flex flex-col gap-1 relative">
                <label
                  htmlFor="Repassword"
                  className="text-lg font-normal text-[#666]"
                >
                  Re-Enter Password
                </label>

                <div className="relative">
                  <input
                    {...register("repassword")}
                    type={showRePassword ? "text" : "password"}
                    placeholder="Enter the same Password"
                    id="repassword"
                    className={`border-2 outline-none border-slate-400 focus:border-[#FFA12B] w-full p-2 rounded-lg bg-transparent `}
                  />
                  <button
                    type="button"
                    onClick={toggleRepassword}
                    className="absolute right-4 bottom-3.5 "
                  >
                    <img
                      src={showRePassword ? eyeshow : eyehide}
                      alt=""
                      className="w-4"
                    />
                  </button>
                </div>

                {errors.repassword && (
                  <p className="text-red-600 text-xs absolute -bottom-4 left-1">
                    {errors.repassword.message}
                  </p>
                )}
                
              </div>

            <motion.button
              className="bg-[#FFA12B] w-3/6 mx-auto rounded-3xl p-2 font-semibold text-white"
              onSubmit={handleSubmit(onSubmit)}
              whileHover={{ scale: 1.04, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.95, transition: { duration: 0.1 } }}
            >
              Set New Password
            </motion.button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SetPassword;
