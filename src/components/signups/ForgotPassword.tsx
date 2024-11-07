import signinimg from "../../assets/images/signinimg.png";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import axios from "axios";
import backbtn from "../../assets/svg/backbtn.svg";
import { useNavigate } from "react-router-dom";

const schema = z.object({
  email: z
    .string()
    .nonempty("Email is required")
    .email("Invalid email address"),
});

type FormFields = z.infer<typeof schema>;

function ForgotPassword() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormFields>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormFields) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/user/forgot-password",
        data
      );
      console.log("Response:", response);
      if (response.status === 200) {
        navigate("/setpassword");
      }
      reset();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

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
            <p className="text-3xl   font-semibold">Forgot Your Password</p>
            <p className="md:text-lg  font-normal text-[#666]">
              Enter your email to send you an OTP for verification
            </p>
          </div>

          <div className="w-full flex flex-col gap-2">
            <form
              className="w-full flex flex-col gap-6"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="flex flex-col gap-2 relative">
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
                  className="w-full border-2 outline-none border-slate-400 focus:border-[#FFA12B]  rounded-lg p-3 bg-transparent"
                />
                {errors.email && (
                  <p className="text-red-600 text-sm absolute -bottom-5 left-2">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <motion.button
                className="bg-[#FFA12B]   w-full mx-auto rounded-3xl p-2 font-semibold text-white"
                onSubmit={handleSubmit(onSubmit)}
                whileHover={{ scale: 1.04, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.95, transition: { duration: 0.1 } }}
              >
                Send to Email
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
