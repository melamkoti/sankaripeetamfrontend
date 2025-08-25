import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import axios from "axios";
import backbtn from "../../assets/svg/backbtn.svg";
import OTPInput from "./OtpInput";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { UserModuleAPI } from "../../services/AppEndPoints";
import { useState } from "react";

const schema = z.object({
  otp: z.string().length(4, "OTP must be 4 digits long"),
  email: z.string().email(),
});

type FormFields = z.infer<typeof schema>;

function OTPPage() {
  const navigate = useNavigate();
  const [, setOtp] = useState("");

  const OtpVerifyPostService = UserModuleAPI.VerifyOTPPost;
  const OtpResendPostService = UserModuleAPI.ForgetPasswordPost;

  const email = localStorage.getItem("userEmail");

  const {
    formState: { errors },
  } = useForm<FormFields>({ resolver: zodResolver(schema) });

  const handleOtpChange = async (value: string) => {
    setOtp(value);

    const payload = {
      email,
      otp: value,
    };
    if (value.length === 4) {
      try {
        const response = await axios.post(OtpVerifyPostService, payload);
        console.log("API Response:", response.data);
        toast.success("OTP Verified Successfully!");
        localStorage.setItem("OTP",value)

        navigate("/setpassword");
      } catch (error) {
        console.error("OTP verification failed:", error);
        toast.error("Invalid OTP, please try again.");
      }
    }
  };

  const handleResendOTP = async () => {
    try {
      const response = await axios.post(OtpResendPostService, { email });

      if (response.status === 200) {
        toast.success("OTP Resent Successfully 🚀");
      }
    } catch (error) {
      console.error("Error resending OTP:", error);
      toast.error("Failed to resend OTP ❌");
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
      <div className="flex flex-col  lg:w-2/6 w-5/6 md:w-3/6 justify-center items-center bg-white opacity-90 gap-6 p-4 z-10  mx-4 rounded-xl ">
        <button type="button" className="absolute left-12 top-6">
          <img src={backbtn} alt="backbtn" className="w-6" />
        </button>
        <div className="w-full flex flex-col justify-center items-center gap-2 ">
          <p className="text-2xl font-semibold self-start py-2">
            Enter Your OTP
          </p>
          <p className="md:text-lg font-normal text-[#666] md:text-center">
            We sent a four-digit code to{" "}
            <a href="#" className="text-[#333] italic">
              {email}
            </a>
          </p>
        </div>

        <div className="w-full flex flex-col gap-2">
          <div className="w-full flex flex-col gap-6">
            <div className="flex flex-col justify-center items-center  gap-2">
              <OTPInput onChange={handleOtpChange} />
              {errors.otp && (
                <p className="text-red-600 text-sm">{errors.otp.message}</p>
              )}
            </div>
            <p className="mx-auto ">
              Didn't receive the OTP?{" "}
              <button
                className="text-[#fdae51] underline underline-offset-2"
                onClick={handleResendOTP}
              >
                Resend OTP
              </button>
            </p>

            <motion.button
              type="submit"
              className="bg-[#8E512C] w-full mx-auto rounded-md p-2 font-semibold text-white"
              whileHover={{ scale: 1.04, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.95, transition: { duration: 0.1 } }}
            >
              Continue
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OTPPage;
