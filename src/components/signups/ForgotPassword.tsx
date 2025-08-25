// import signinimg from "../../assets/images/signinimg.png";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { UserModuleAPI } from "../../services/AppEndPoints";
const schema = z.object({
  email: z
    .string()
    .nonempty("Email is required")
    .email("Invalid email address"),
});

type FormFields = z.infer<typeof schema>;

function ForgotPassword() {
  const navigate = useNavigate();
  const UserForgotPasswordService = UserModuleAPI.ForgetPasswordPost; // API endpoint for forgot password
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormFields>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormFields) => {
    try {
      const response = await axios.post(UserForgotPasswordService, data);
      if (response.status === 200) {
        localStorage.setItem("userEmail", data.email);
        toast.success("OTP sent to the email");

        navigate("/otp");
      }
      reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("error submittion form ");
    }
  };

  return (
    <div
      className=" lg:mt-[110px] h-screen flex justify-center items-center bg-gradient-to-br from-[#f3d1c1] via-[#e9a17c] to-[#d6785d]"
      // style={{
      //   backgroundImage: `url(${signinimg})`,
      //   backgroundPosition: "center",
      //   backgroundSize: "cover",
      // }}
    >
      <div className="  flex flex-col  lg:w-2/6 w-5/6 md:w-3/6 justify-center items-center bg-white opacity-90 gap-6 p-4 z-10  mx-4 rounded-xl">
        <div className="w-full flex flex-col justify-center items-center gap-2 ">
          <p className="text-2xl  font-semibold self-start py-2">
            Forgot Your Password
          </p>

          <p className="md:text-lg  font-normal text-[#666] text-center">
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
                className="text-sm font-normal text-[#202020]"
              >
                Email Address
              </label>
              <input
                {...register("email")}
                placeholder="Enter your Email"
                id="email"
                  className="text-sm text-[#939393] bg-[#F7F6F4] outline-none w-full    rounded-md px-[20px] py-[12px] bg-transparent"
              />
              {errors.email && (
                <p className="text-red-600 text-sm absolute -bottom-5 left-2">
                  {errors.email.message}
                </p>
              )}
            </div>

            <motion.button
              className="bg-[#8E512C]   w-full mx-auto rounded-md p-2 font-semibold text-white"
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
  );
}

export default ForgotPassword;
