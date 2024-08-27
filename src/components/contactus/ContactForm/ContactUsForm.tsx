import phonecall from "../../../assets/svg/phonecall.svg";
import email from "../../../assets/svg/email.svg";
import location from "../../../assets/svg/location.svg";
import insta from "../../../assets/svg/insta.svg";
import twitter from "../../../assets/svg/twitter.svg";
import discord from "../../../assets/svg/discord.svg";
import { motion } from "framer-motion";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import axios from "axios";
import kite from "../../../assets/images/kite.png"


const options = ["General Enquiry 1", "General Enquiry 2", "General Enquiry 3", "General Enquiry 4"] as const;


const schema = z.object({
  email: z
    .string()
    .nonempty("Email is required")
    .email("Invalid email address"),
  firstname: z.string().min(3, "Name must be at least 3 letters"),
  message: z.string().min(10, "Must contain at least 10 characters"),
  lastname: z.string().min(3, "Name must be at least 3 letters"),
  phonenum: z
    .string()
    .length(10, "Phone number must contain 10 digits")
    .regex(/^\d{10}$/, "Phone number must be digits only"),
    selectedOption: z.enum(options, {
      required_error: "Please select an option",
    }),
});

type FormFields = z.infer<typeof schema>;

function ContactUsForm() {
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
  

  return (
    <div className="flex flex-col justify-center items-center p-20 px-28 gap-8 bg-[#f8f8f8]">
      <p className="text-lg text-[#717171] tracking-wide">
        Any question or remarks? Just write us a message!
      </p>

      <div className="flex rounded-xl bg-white w-full p-2">
        <div className="w-2/6 border-2 bg-[#7E4555] text-white flex flex-col justify-evenly items-start p-12 rounded-xl shadow-lg  gap-12">
          <div className="gap-2">
            <p className="text-2xl font-semibold tracking-wide">
              Contact Information
            </p>
            <p className="text-lg font-light tracking-wider">
              Say something to start a live chat!
            </p>
          </div>

          <div className="flex flex-col items-start justify-center gap-8 w-full">
            <div className="flex gap-2 justify-center items-center ">
              <img src={phonecall} alt="phonecall" className="w-6" />
              <p>+91 9705752677</p>
            </div>
            <div className="flex gap-2 justify-center items-center ">
              <img src={email} alt="phonecall" className="w-6 flex items-start" />
              <p>guruji@sankaripeetam.in turst.sspc@gmail.com</p>
            </div>
            <div className="flex gap-2 justify-center items-start">
              <img
                src={location}
                alt="phonecall"
                className="w-6 flex items-start mt-1"
              />
              <p className="text-sm">
                Brahmasri Nemmikanti Narsaiahcharya No: 8-411A, Back side
                Anjaneya Swamy Temple, Sundar nagar, Mangamur Road, Ongole,
                Prakasam District, Andhra Pradesh - 523002
              </p>
            </div>
          </div>

          <div className="flex gap-4 justify-center items-center">
            <motion.div
              className="p-2 bg-[#ffb600] rounded-full"
              whileHover={{ scale: 1.2 }}
            >
              <motion.img
                src={insta}
                alt="insta"
                className="w-6"
                whileHover={{ scale: 1.1 }}
              />
            </motion.div>
            <motion.div
              className="p-2 bg-[#ffb600] rounded-full"
              whileHover={{ scale: 1.2 }}
            >
              <motion.img
                src={twitter}
                alt="insta"
                className="w-6"
                whileHover={{ scale: 1.1 }}
              />
            </motion.div>
            <motion.div
              className="p-2 bg-[#ffb600] rounded-full"
              whileHover={{ scale: 1.2 }}
            >
              <motion.img
                src={discord}
                alt="insta"
                className="w-6"
                whileHover={{ scale: 1.1 }}
              />
            </motion.div>
          </div>
        </div>

        <div className="w-4/6 relative">
        <img src={kite} alt="kite" className="absolute bottom-1/4 z-10 right-1/3" />
          <form className="flex flex-col gap-12 p-4" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex w-full justify-around items-center gap-2 ">
              <div className="flex w-2/6 flex-col gap-1 relative">
                <label
                  htmlFor="name"
                  className="text-lg font-normal text-[#666]"
                >
                  First Name
                </label>
                <input
                  {...register("firstname")}
                  placeholder="Enter your First Name"
                  id="firstname"
                  className="border-b-2 border-slate-700 outline-none p-2 "
                />
                {errors.firstname && (
                  <p className="text-red-600 text-xs absolute -bottom-4 left-1">
                    {errors.firstname.message}
                  </p>
                )}
              </div>
              <div className="flex w-2/6 flex-col gap-1 relative">
                <label
                  htmlFor="name"
                  className="text-lg font-normal text-[#666]"
                >
                  Last Name
                </label>
                <input
                  {...register("lastname")}
                  placeholder="Enter your First Name"
                  id="lastname"
                  className="border-b-2 border-black outline-none p-2 "
                />
                {errors.lastname && (
                  <p className="text-red-600 text-xs absolute -bottom-4 left-1">
                    {errors.lastname.message}
                  </p>
                )}
              </div>
            </div>
            <div className="flex w-full justify-around items-center gap-2">
              <div className="flex w-2/6 flex-col gap-1 relative">
                <label
                  htmlFor="email"
                  className="text-lg font-normal text-[#666]"
                >
                  Email
                </label>
                <input
                  {...register("email")}
                  placeholder="Enter your Email"
                  id="email"
                  className="border-b-2 border-slate-700 outline-none p-2 "
                />
                {errors.email && (
                  <p className="text-red-600 text-xs absolute -bottom-4 left-1">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div className="flex w-2/6 flex-col gap-1 relative">
                <label
                  htmlFor="phonenum"
                  className="text-lg font-normal  text-[#666]"
                >
                  Phone Number
                </label>
                <input
                  {...register("phonenum")}
                  placeholder="Enter your phone number"
                  id="phonenum"
                  className="border-b-2 border-black outline-none p-2 "
                />
                {errors.phonenum && (
                  <p className="text-red-600 text-xs absolute -bottom-4 left-1">
                    {errors.phonenum.message}
                  </p>
                )}
              </div>
            </div>

            <div className="flex flex-col w-full px-12 gap-4 relative">
              <p className="text-xl ml-3 font-semibold">Select Category</p>
              <div className="flex justify-around items-center ">
                {options.map((option, index) => (
                  <label key={index} className="flex items-center">
                    <input
                      type="radio"
                      value={option}
                      {...register("selectedOption")}
                      className="mr-2 z-20"
                    />
                    {option}
                  </label>
                ))}
              </div>
              {errors.selectedOption && (
                <p className="text-red-600 text-xs left-16 -bottom-4 absolute">
                  {errors.selectedOption.message}
                </p>
              )}
            </div>

            <div className="flex w-5/6 mx-auto flex-col gap-1 relative">
                <label
                  htmlFor="message"
                  className="text-lg font-normal text-[#666]"
                >
                  Message
                </label>
                <input
                  {...register("message")}
                  placeholder="text message here"
                  id="message"
                  className="border-b-2 border-slate-700 outline-none p-2 "
                />
                {errors.message && (
                  <p className="text-red-600 text-xs absolute -bottom-4 left-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <div className="flex justify-end p-2">
                <motion.button whileHover={{scale: 1.12}} whileTap={{scale: 0.93}} onClick={handleSubmit(onSubmit)} className="rounded-xl p-2 px-4 bg-[#7E4555] text-white">Send Message</motion.button >
              </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUsForm;



