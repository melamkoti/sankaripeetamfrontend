import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import axios from "axios";
import signinimg from "../../assets/images/signinimg.png";
import backbtn from "../../assets/svg/backbtn.svg";
import OTPInput from "./OtpInput";

const schema = z.object({
  otp: z.string().length(4, "OTP must be 4 digits long"),
});

type FormFields = z.infer<typeof schema>;

function OTPPage() {
  const {
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
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

  const handleOTPChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue("otp", e.target.value);
  };

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

      <div className="flex flex-col w-3/6 justify-center items-center gap-8 p-24 relative">
        <button type="button" className="absolute left-12 top-6">
          <img src={backbtn} alt="backbtn" className="w-6" />
        </button>
        <div className="w-full flex flex-col justify-center items-center gap-2 ">
          <p className="text-3xl font-semibold">Enter Your OTP</p>
          <p className="text-lg font-normal text-[#666]">
            We sent a four-digit code to{" "}
            <a href="#" className="font-bold">
              abc@gmail.com
            </a>
          </p>
        </div>

        <div className="w-full flex flex-col gap-2">
          <form
            className="w-full flex flex-col gap-6"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col justify-center items-center  gap-2">
              <OTPInput onChange={handleOTPChange} />
              {errors.otp && (
                <p className="text-red-600 text-sm">{errors.otp.message}</p>
              )}
            </div>
            <p className="mx-auto ">
              Didn't receive the OTP?{" "}
              <a
                href="#"
                className="text-[#FFA12B] underline underline-offset-2"
              >
                Resend OTP
              </a>
            </p>

            <motion.button
              type="submit" // Change from `onSubmit` to `type="submit"`
              className="bg-[#FFA12B] w-3/6 mx-auto rounded-3xl p-2 font-semibold text-white"
              whileHover={{ scale: 1.04, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.95, transition: { duration: 0.1 } }}
            >
              Continue
            </motion.button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default OTPPage;
