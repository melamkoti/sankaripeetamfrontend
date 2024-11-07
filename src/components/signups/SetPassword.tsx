import signinimg from "../../assets/images/signinimg.png";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import axios from "axios";
import backbtn from "../../assets/svg/backbtn.svg";
import eyehide from "../../assets/svg/eyehide.svg";
import eyeshow from "../../assets/svg/eyeshow.svg";
import { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

const schema = z.object({
  newpassword: z.string().min(6, "must contain 6 characters"),
});

type FormFields = z.infer<typeof schema>;

function SetPassword() {
  const [showPassword, setShowPassword] = useState(false);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const token = searchParams.get("token");
  const email = searchParams.get("email");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormFields>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormFields) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/user/reset-password",
        {
          token,
          email,
          password: data.newpassword,
        }
      );
      if (response.status === 200) {
        navigate("/complete");
      }
      console.log("Response:", response.data);

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
    <div className=" h-screen main_head">
      <div
        className="h-screen flex justify-end items-center "
        style={{
          backgroundImage: `url(${signinimg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="flex flex-col  lg:w-2/6 w-4/6 md:w-3/6 justify-center items-center bg-white opacity-90 gap-6 p-8 z-10 md:mr-32 m-6 rounded-xl">
          <button type="button" className="absolute left-12 top-6">
            <img src={backbtn} alt="backbtn" className="w-6" />
          </button>
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
                  htmlFor="newpassword"
                  className="text-lg font-normal text-[#666]"
                >
                  Password
                </label>

                <div className="relative">
                  <input
                    {...register("newpassword")}
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter Your Password"
                    id="newpassword"
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

                {errors.newpassword && (
                  <p className="text-red-600 text-xs absolute -bottom-4 left-1">
                    {errors.newpassword.message}
                  </p>
                )}
              </div>

              <motion.button
                type="submit"
                className="bg-[#FFA12B] md:w-3/6 w-full mx-auto rounded-3xl p-2 font-semibold text-white"
                whileHover={{ scale: 1.04, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.95, transition: { duration: 0.1 } }}
              >
                Set New Password
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SetPassword;
