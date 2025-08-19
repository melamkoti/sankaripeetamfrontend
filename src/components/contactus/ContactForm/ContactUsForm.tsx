// import phonecall from "../../../assets/svg/phonecall.svg";
// import email from "../../../assets/svg/email.svg";
// import location from "../../../assets/svg/location.svg";
// import insta from "../../../assets/svg/insta.svg";
// import twitter from "../../../assets/svg/twitter.svg";
// import discord from "../../../assets/svg/discord.svg";

// import { motion } from "framer-motion";
// import { z } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import axios from "axios";
// import { UserModuleAPI } from "../../../services/AppEndPoints";
// import { toast } from "react-toastify";
// import { NavLink } from "react-router-dom";

// const schema = z.object({
//   email: z
//     .string()
//     .nonempty("Email is required")
//     .email("Invalid email address"),
//   firstName: z.string().min(3, "Name must be at least 3 letters"),
//   message: z.string().min(10, "Must contain at least 10 characters"),
//   lastName: z.string().min(3, "Name must be at least 3 letters"),
//   phoneNumber: z
//     .string()
//     .length(10, "Phone number must contain 10 digits")
//     .regex(/^\d{10}$/, "Phone number must be digits only"),
// });

// type FormFields = z.infer<typeof schema>;

// function ContactUsForm() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     reset,
//   } = useForm<FormFields>({ resolver: zodResolver(schema) });
//   const ContactApiService = UserModuleAPI.AllContactDetailsPost;
//   const onSubmit = async (data: FormFields) => {
//     try {
//       const response = await axios.post(ContactApiService, data);

//       if (response.status === 201) {
//         toast.success("Contact details sent successfully!");
//         console.log("Response:", response.data);
//         reset();
//       } else {
//         toast.warning(
//           response.data.message || "Something unexpected happened."
//         );
//       }
//     } catch (error: any) {
//       // Check for backend error message
//       if (error.response) {
//         const status = error.response.status;
//         const message = error.response.data?.message || "Server error occurred";

//         if (status === 400) {
//           toast.warning(message); // e.g., Email already exists
//         } else if (status === 500) {
//           toast.error("Internal server error. Please try again later.");
//         } else {
//           toast.error(message);
//         }
//       } else {
//         // Network or unexpected error
//         toast.error("Unable to submit the form. Please check your internet.");
//       }

//       console.error("Error submitting form:", error);
//     }
//   };

//   return (
//     <div className="flex flex-col justify-center items-center lg:p-20 lg:px-28  md:p-4 gap-8 bg-[#f8f8f8] ">
//       <p className="text-lg text-[#717171] tracking-wide p-2">
//         Any question or remarks? Just write us a message!
//       </p>

//       <div className="flex flex-col lg:flex-row rounded-xl bg-white w-full p-2">
//         <div className="lg:w-2/6 md:min-w-[350px] p-3 w-full border-2 bg-[#7E4555] text-white flex flex-col justify-evenly items-start lg:p-12  shadow-lg  gap-12">
//           <div className="gap-2">
//             <p className="text-2xl font-semibold tracking-wide">
//               Contact Information
//             </p>
//             <p className="text-lg font-light tracking-wider">
//               Say something to start a live chat!
//             </p>
//           </div>

//           <div className="flex flex-col items-start justify-center gap-8 w-full">
//             <div className="flex gap-2 justify-center items-center ">
//               <img src={phonecall} alt="phonecall" className="w-6" />
//               <div className="flex flex-col">
//                 {" "}
//                 <p>+91 9989492655</p>
//                 <p>+91 9705752677</p>
//               </div>
//             </div>
//             <div className="flex gap-2 justify-center items-center ">
//               <img
//                 src={email}
//                 alt="phonecall"
//                 className="w-6 flex items-start"
//               />
//               <p>turst.sspc@gmail.com</p>
//             </div>
//             <div className="flex gap-2 justify-center items-start">
//               <img
//                 src={location}
//                 alt="phonecall"
//                 className="w-6 flex items-start mt-1"
//               />
//               <p className="text-sm">
//                 Brahmasri Nemmikanti Narsaiahcharya No: 8-411A, Back side
//                 Anjaneya Swamy Temple, Sundar nagar, Mangamur Road, Ongole,
//                 Prakasam District, Andhra Pradesh - 523002
//               </p>
//             </div>
//           </div>

//           <div className="flex gap-4 justify-center items-center">
//             <motion.div
//               className="p-2 bg-[#ffb600] rounded-full"
//               whileHover={{ scale: 1.2 }}
//             >
//               <NavLink
//                 to="https://www.instagram.com/sankaripeetam/#"
//                 target="_blank"
//                 className="cursor-pointer"
//               >
//                 <motion.img
//                   src={insta}
//                   alt="Instagram"
//                   className="w-6"
//                   whileHover={{ scale: 1.1 }}
//                 />
//               </NavLink>
//             </motion.div>

//             <NavLink
//               to="https://www.facebook.com/people/Sanathana-Sankari-Peetam/61556567276927/?mibextid=LQQJ4d"
//               target="_blank"
//               className="cursor-pointer"
//             >
//               <motion.div
//                 className="p-2 bg-[#ffb600] rounded-full"
//                 whileHover={{ scale: 1.2 }}
//               >
//                 <motion.img
//                   src={twitter} // Note: You might want to rename this to 'facebook' if that's what it represents
//                   alt="Facebook"
//                   className="w-6"
//                   whileHover={{ scale: 1.1 }}
//                 />
//               </motion.div>
//             </NavLink>

//             <NavLink
//               to="https://www.youtube.com/@SankariPeetam"
//               target="_blank"
//               className="cursor-pointer"
//             >
//               <motion.div
//                 className="p-2 bg-[#ffb600] rounded-full"
//                 whileHover={{ scale: 1.2 }}
//               >
//                 <motion.img
//                   src={discord} // Note: You might want to rename this to 'youtube' if that's what it represents
//                   alt="YouTube"
//                   className="w-6"
//                   whileHover={{ scale: 1.1 }}
//                 />
//               </motion.div>
//             </NavLink>
//           </div>
//         </div>
//         <div className="w-full lg:w-2/3 p-8 md:p-14">
//           <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
//             <div className="grid md:grid-cols-2 gap-6">
//               <div className="flex flex-col gap-2 relative">
//                 <label
//                   htmlFor="firstName"
//                   className="text-lg font-medium text-[#333]"
//                 >
//                   First Name
//                 </label>
//                 <input
//                   {...register("firstName")}
//                   placeholder="Your first name"
//                   id="firstName"
//                   className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#7E4555]"
//                 />
//                 {errors.firstName && (
//                   <p className="text-xs text-red-600">
//                     {errors.firstName.message}
//                   </p>
//                 )}
//               </div>

//               <div className="flex flex-col gap-2 relative">
//                 <label
//                   htmlFor="lastName"
//                   className="text-lg font-medium text-[#333]"
//                 >
//                   Last Name
//                 </label>
//                 <input
//                   {...register("lastName")}
//                   placeholder="Your last name"
//                   id="lastName"
//                   className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#7E4555]"
//                 />
//                 {errors.lastName && (
//                   <p className="text-xs text-red-600">
//                     {errors.lastName.message}
//                   </p>
//                 )}
//               </div>
//             </div>

//             <div className="grid md:grid-cols-2 gap-6">
//               <div className="flex flex-col gap-2 relative">
//                 <label
//                   htmlFor="email"
//                   className="text-lg font-medium text-[#333]"
//                 >
//                   Email
//                 </label>
//                 <input
//                   {...register("email")}
//                   placeholder="Your email"
//                   id="email"
//                   className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#7E4555]"
//                 />
//                 {errors.email && (
//                   <p className="text-xs text-red-600">{errors.email.message}</p>
//                 )}
//               </div>

//               <div className="flex flex-col gap-2 relative">
//                 <label
//                   htmlFor="phoneNumber"
//                   className="text-lg font-medium text-[#333]"
//                 >
//                   Phone
//                 </label>
//                 <input
//                   {...register("phoneNumber")}
//                   placeholder="Your phone number"
//                   id="phoneNumber"
//                   className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#7E4555]"
//                 />
//                 {errors.phoneNumber && (
//                   <p className="text-xs text-red-600">
//                     {errors.phoneNumber.message}
//                   </p>
//                 )}
//               </div>
//             </div>

//             <div className="flex flex-col gap-2 relative">
//               <label
//                 htmlFor="message"
//                 className="text-lg font-medium text-[#333]"
//               >
//                 Message
//               </label>
//               <textarea
//                 {...register("message")}
//                 placeholder="Type your message here..."
//                 id="message"
//                 rows={4}
//                 className=" border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#7E4555]"
//               />
//               {errors.message && (
//                 <p className="text-xs text-red-600">{errors.message.message}</p>
//               )}
//             </div>

//             <div className="flex justify-end">
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 type="submit"
//                 className="bg-[#7E4555] text-white px-6 py-3 rounded-lg shadow-md hover:bg-[#672b3f] transition"
//               >
//                 Send Message
//               </motion.button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ContactUsForm;


import { motion } from "framer-motion";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import axios from "axios";
import { UserModuleAPI } from "../../../services/AppEndPoints";
import { toast } from "react-toastify";

const schema = z.object({
  email: z
    .string()
    .nonempty("Email is required")
    .email("Invalid email address"),
  firstName: z.string().min(3, "Name must be at least 3 letters"),
  message: z.string().min(10, "Must contain at least 10 characters"),
  lastName: z.string().min(3, "Name must be at least 3 letters"),
  phoneNumber: z
    .string()
    .length(10, "Phone number must contain 10 digits")
    .regex(/^\d{10}$/, "Phone number must be digits only"),
});

type FormFields = z.infer<typeof schema>;

function ContactUsForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormFields>({ resolver: zodResolver(schema) });
  const ContactApiService = UserModuleAPI.AllContactDetailsPost;
  const onSubmit = async (data: FormFields) => {
    try {
      const response = await axios.post(ContactApiService, data);

      if (response.status === 201) {
        toast.success("Contact details sent successfully!");
        console.log("Response:", response.data);
        reset();
      } else {
        toast.warning(
          response.data.message || "Something unexpected happened."
        );
      }
    } catch (error: any) {
      // Check for backend error message
      if (error.response) {
        const status = error.response.status;
        const message = error.response.data?.message || "Server error occurred";

        if (status === 400) {
          toast.warning(message); // e.g., Email already exists
        } else if (status === 500) {
          toast.error("Internal server error. Please try again later.");
        } else {
          toast.error(message);
        }
      } else {
        // Network or unexpected error
        toast.error("Unable to submit the form. Please check your internet.");
      }

      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center lg:p-20 lg:px-28  md:p-4 gap-8   ">
      <div className="flex flex-col lg:flex-row rounded-xl  w-full p-2">
        <div className="w-full bg-[#e6e0da]  px-4 rounded-md">
          <div className="  w-full md:max-w-3xl md:mx-auto  p-2 md:p-8 rounded-lg ">
            <p className=" sm:text-lg  tracking-wide pb-6 text-center ">
              Any question or remarks? Just write us a message!
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 ">
              {/* Name Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
                <div className="flex flex-col gap-2">
                  <input
                    {...register("firstName")}
                    placeholder="First Name"
                    id="firstName"
                    className="border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#7E4555]"
                  />
                  {errors.firstName && (
                    <p className="text-xs text-red-600">
                      {errors.firstName.message}
                    </p>
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <input
                    {...register("lastName")}
                    placeholder="Last Name"
                    id="lastName"
                    className="border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#7E4555]"
                  />
                  {errors.lastName && (
                    <p className="text-xs text-red-600">
                      {errors.lastName.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Email & Phone Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <input
                    {...register("email")}
                    placeholder="Email"
                    id="email"
                    className="border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#7E4555]"
                  />
                  {errors.email && (
                    <p className="text-xs text-red-600">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <input
                    {...register("phoneNumber")}
                    placeholder="Phone Number"
                    id="phoneNumber"
                    className="border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#7E4555]"
                  />
                  {errors.phoneNumber && (
                    <p className="text-xs text-red-600">
                      {errors.phoneNumber.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <textarea
                  {...register("message")}
                  placeholder="Message"
                  id="message"
                  rows={4}
                  className="border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#7E4555]"
                />
                {errors.message && (
                  <p className="text-xs text-red-600">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Button Centered */}
              <div className="flex justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="bg-[#8e512c] text-white px-12 py-3 rounded shadow-md hover:bg-[#BB4F27] transition"
                >
                  Send Message
                </motion.button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUsForm;