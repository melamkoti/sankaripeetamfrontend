// import { useForm } from "react-hook-form";
// import { z } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { motion } from "framer-motion";
// import axios from "axios";
// import signinimg from "../../assets/images/signinimg.png";
// import backbtn from "../../assets/svg/backbtn.svg";
// import OTPInput from "./OtpInput";
// import { useNavigate } from "react-router-dom";

// const schema = z.object({
//   otp: z.string().length(4, "OTP must be 4 digits long"),
// });

// type FormFields = z.infer<typeof schema>;

// function OTPPage() {
//   const navigate = useNavigate();
//   const {
//     handleSubmit,
//     formState: { errors },
//     reset,
//     setValue,
//   } = useForm<FormFields>({ resolver: zodResolver(schema) });

//   const onSubmit = async (data: FormFields) => {
//     try {
//       const response = await axios.post(
//         "http://localhost:3000/user/verifyotp",
//         data
//       );
//       console.log("Response:", response);
//       if (response.status === 200) {
//         navigate("/setpassword");
//       }
//       reset();
//     } catch (error) {
//       console.error("Error submitting form:", error);
//     }
//   };

//   const handleOTPChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setValue("otp", e.target.value);
//   };

//   return (
//     <div className=" h-screen main_head">
//       <div
//         className="h-screen flex justify-end items-center  border border-black"
//         style={{
//           backgroundImage: `url(${signinimg})`,
//           backgroundPosition: "center",
//           backgroundSize: "cover",
//         }}
//       >
//         <div className="flex flex-col  lg:w-2/6 w-4/6 md:w-3/6 justify-center items-center bg-white opacity-90 gap-6 p-8 z-10 md:mr-32 m-6 rounded-xl ">
//           <button type="button" className="absolute left-12 top-6">
//             <img src={backbtn} alt="backbtn" className="w-6" />
//           </button>
//           <div className="w-full flex flex-col justify-center items-center gap-2 ">
//             <p className="text-3xl font-semibold">Enter Your OTP</p>
//             <p className="text-lg font-normal text-[#666] md:text-center">
//               We sent a four-digit code to{" "}
//               <a href="#" className="font-bold">
//                 abc@gmail.com
//               </a>
//             </p>
//           </div>

//           <div className="w-full flex flex-col gap-2">
//             <form
//               className="w-full flex flex-col gap-6"
//               onSubmit={handleSubmit(onSubmit)}
//             >
//               <div className="flex flex-col justify-center items-center  gap-2">
//                 <OTPInput onChange={handleOTPChange} />
//                 {errors.otp && (
//                   <p className="text-red-600 text-sm">{errors.otp.message}</p>
//                 )}
//               </div>
//               <p className="mx-auto ">
//                 Didn't receive the OTP?{" "}
//                 <a
//                   href="#"
//                   className="text-[#FFA12B] underline underline-offset-2"
//                 >
//                   Resend OTP
//                 </a>
//               </p>

//               <motion.button
//                 type="submit" // Change from `onSubmit` to `type="submit"`
//                 className="bg-[#FFA12B] w-full mx-auto rounded-3xl p-2 font-semibold text-white"
//                 whileHover={{ scale: 1.04, transition: { duration: 0.2 } }}
//                 whileTap={{ scale: 0.95, transition: { duration: 0.1 } }}
//               >
//                 Continue
//               </motion.button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default OTPPage;

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import axios from "axios";
import signinimg from "../../assets/images/signinimg.png";
import backbtn from "../../assets/svg/backbtn.svg";
import OTPInput from "./OtpInput";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const schema = z.object({
  otp: z.string().length(4, "OTP must be 4 digits long"),
  email: z.string().email(),
});

type FormFields = z.infer<typeof schema>;

function OTPPage() {
  const navigate = useNavigate();
  const {
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<FormFields>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormFields) => {
    try {
      const payload = {
        email: "melamkotivenkateswarlu@gmail.com",
        otp: data.otp,
      }; // Replace with dynamic email if needed

      const response = await axios.post(
        "http://localhost:3000/user/verifyotp",
        payload
      );

      console.log("Response:", response);
      if (response.status === 200) {
        toast.success("OTP Submit  Successfully ");
        navigate("/setpassword");
      }
      reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("OTP Not Matched ");
    }
  };

  const handleOTPChange = (otp: string) => {
    setValue("otp", otp);
  };

  return (
    <div className=" h-screen main_head">
      <div
        className="h-screen flex justify-end items-center  border border-black"
        style={{
          backgroundImage: `url(${signinimg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="flex flex-col  lg:w-2/6 w-4/6 md:w-3/6 justify-center items-center bg-white opacity-90 gap-6 p-8 z-10 md:mr-32 m-6 rounded-xl ">
          <button type="button" className="absolute left-12 top-6">
            <img src={backbtn} alt="backbtn" className="w-6" />
          </button>
          <div className="w-full flex flex-col justify-center items-center gap-2 ">
            <p className="text-3xl font-semibold">Enter Your OTP</p>
            <p className="text-lg font-normal text-[#666] md:text-center">
              We sent a four-digit code to{" "}
              <a href="#" className="font-bold">
                ***gmail.com
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
                <button
                  type="submit"
                  className="text-[#FFA12B] underline underline-offset-2"
                >
                  Resend OTP
                </button>
              </p>

              <motion.button
                type="submit"
                className="bg-[#FFA12B] w-full mx-auto rounded-3xl p-2 font-semibold text-white"
                whileHover={{ scale: 1.04, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.95, transition: { duration: 0.1 } }}
              >
                Continue
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OTPPage;
