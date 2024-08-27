// import { DonationPayData } from "./DonationPayData";
// import tickred from "../../assets/svg/tickred.svg";
// import { useState } from "react";
// import { motion } from "framer-motion";
// import { z } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import axios from "axios";


// const schema = z.object({
//   email: z
//     .string()
//     .nonempty("Email is required")
//     .email("Invalid email address"),
//   firstname: z.string().min(3, "Name must be at least 3 letters"),
//   lastname: z.string().min(3, "Name must be at least 3 letters"),
//   message: z.string().min(10, "Must contain at least 10 characters"),
  
//   amount: z
//     .string().nonempty("Amount is required"),
    
//   paymentMethod: z.enum(["Online", "Offline"], {
//     required_error: "Please select a payment method",
//   }),
// });

// type FormFields = z.infer<typeof schema>;

// function DonationPay() {
//   const [amount, setAmount] = useState("");

//   const {
//     register,
//     handleSubmit,
//     setValue,
//     formState: { errors },
//     reset,
//   } = useForm<FormFields>({ resolver: zodResolver(schema) });

//   const onSubmit = async (data: FormFields) => {
//     try {
//         console.log(data)
//       const response = await axios.post(
//         "https://jsonplaceholder.typicode.com/posts",
//         data
//       );
//       console.log("Response:", response);
//       reset();
//     } catch (error) {
//       console.error("Error submitting form:", error);
//     }
//   };


//   function amountUpdate(newAmount) {
//     setAmount(newAmount);
//     setValue("amount", newAmount);
//   }

//   function clearAmount() {
//     setAmount("");
//     setValue("amount", "");
//   }

//   return (
//     <div className="flex flex-col gap-8 p-12">
//       <p>{DonationPayData[0].maindescp}</p>

//       {/* content */}
//       <div className="flex flex-col gap-4">
//         <p className="text-2xl font-medium">Content</p>

//         <ul className="flex flex-col gap-2">
//           {DonationPayData[0].list.map((item, idx) => {
//             return (
//               <div key={idx} className="flex gap-2">
//                 <img src={tickred} alt="tickred" className="w-4" />
//                 <p>{item.li}</p>
//               </div>
//             );
//           })}
//         </ul>
//       </div>

//       {/* donation input */}
//       <div className="w-4/6 p-2">
//         <form
//           className="w-full flex flex-col gap-8"
//           onSubmit={handleSubmit(onSubmit)}
//         >
//           {/* amount */}
//           <div className="flex flex-col gap-6">
//             <p className="text-2xl font-medium">Donation Amount</p>

//             <div className="flex w-full flex-col">
//               {" "}
//               <div className="flex">
//                 <div className="bg-[#E26900] text-white font-semibold text-xl rounded-l-lg p-2 px-4">
//                   &#8377;{" "}
//                 </div>
//                 <input
//                   value={amount}
//                   {...register("amount")} 
//                   onChange={(e) => setAmount(e.target.value)}
//                   onFocus={clearAmount}
//                   className="outline-none border-[#E26900] border-e-2 p-2 border-y-2 rounded-r-lg w-full"
//                 />
//               </div>
//               {errors.amount && (
//                 <p className="text-red-600 text-xs mt-1">
//                   {errors.amount.message}
//                 </p>
//               )}
//             </div>

//             <div className="flex gap-6 w-full">
//               {DonationPayData[0].donationPrices.map((item, idx) => {
//                 return (
//                   <motion.button
//                     type="button"
//                     onClick={() => amountUpdate(item.price)}
//                     key={idx}
//                     className="rounded-3xl p-2 px-4 border-2 border-[#797979]"
//                     whileHover={{ scale: 1.08 }}
//                     whileTap={{ scale: 0.98 }}
//                   >
//                     &#8377;{item.price}
//                   </motion.button>
//                 );
//               })}
//             </div>
//           </div>

//           {/* paymentmode */}
//           <div className="flex flex-col gap-4">
//             <p className="text-2xl font-medium">Select Payment Mode</p>
//             <div className="flex gap-8 items-center">
//               <label className="text-lg font-normal">
//                 <input
//                   type="radio"
//                   {...register("paymentMethod")} 
//                   value="Online"
//                   className="form-radio w-4"
//                 />{" "}
//                 Online Payment
//               </label>
//               <label className="text-lg font-normal">
//                 <input
//                   type="radio"
//                   {...register("paymentMethod")} 
//                   value="Offline"
//                   className="form-radio w-4"
//                 />{" "}
//                 Offline Payment
//               </label>
//               {errors.paymentMethod && (
//                 <p className="text-red-600 text-xs mt-1">
//                   {errors.paymentMethod.message}
//                 </p>
//               )}
//             </div>
//           </div>

//           {/* PersonalDetails */}
//           <div className="w-full flex flex-col gap-8">
//             <p className="text-2xl font-medium">Personal Details</p>

//             <div className="flex gap-8 justify-around">
//               <div className="flex w-3/6 flex-col gap-1 relative">
//                 <label
//                   htmlFor="firstname"
//                   className="text-lg font-normal text-[#666]"
//                 >
//                   First Name
//                 </label>
//                 <input
//                   {...register("firstname")}
//                   placeholder="Enter your First Name"
//                   id="firstname"
//                   className="border-2 border-slate-700 rounded-lg outline-none p-2"
//                 />
//                 {errors.firstname && (
//                   <p className="text-red-600 text-xs absolute -bottom-4 left-1">
//                     {errors.firstname.message}
//                   </p>
//                 )}
//               </div>
//               <div className="flex w-3/6 flex-col gap-1 relative">
//                 <label
//                   htmlFor="lastname"
//                   className="text-lg font-normal text-[#666]"
//                 >
//                   Last Name
//                 </label>
//                 <input
//                   {...register("lastname")}
//                   placeholder="Enter your Last Name"
//                   id="lastname"
//                   className="border-2 border-slate-700 rounded-lg outline-none p-2"
//                 />
//                 {errors.lastname && (
//                   <p className="text-red-600 text-xs absolute -bottom-4 left-1">
//                     {errors.lastname.message}
//                   </p>
//                 )}
//               </div>
//             </div>

//             <div className="w-full">
//               <div className="flex flex-col gap-1 relative">
//                 <label
//                   htmlFor="email"
//                   className="text-lg font-normal text-[#666]"
//                 >
//                   Email
//                 </label>
//                 <input
//                   {...register("email")}
//                   placeholder="Enter your Email"
//                   id="email"
//                   className="border-2 border-slate-700 rounded-lg outline-none p-2"
//                 />
//                 {errors.email && (
//                   <p className="text-red-600 text-xs absolute -bottom-4 left-1">
//                     {errors.email.message}
//                   </p>
//                 )}
//               </div>
//             </div>

//             <div className="w-2/6 flex">
//               <div className="rounded-l-lg text-center p-2 w-3/6 bg-[#E26900]">
//                 Donation Total:
//               </div>
//               <div className="rounded-r-lg w-3/6 border-2 border-[#e26900] flex items-center px-2 text-black">
//                 <p>{amount}</p>
//               </div>
//             </div>

//             <motion.button
//             // type="submit"
//             onClick={handleSubmit(onSubmit)}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="w-1/6 p-2 text-white rounded-full bg-[#7E4555]"
//             >
//               Donate Now
//             </motion.button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default DonationPay;


import { DonationPayData } from "./DonationPayData";
import tickred from "../../assets/svg/tickred.svg";
import { useState } from "react";
import { motion } from "framer-motion";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import axios from "axios";

const schema = z.object({
  email: z
    .string()
    .nonempty("Email is required")
    .email("Invalid email address"),
  firstname: z.string().min(3, "Name must be at least 3 letters"),
  lastname: z.string().min(3, "Name must be at least 3 letters"),
  message: z.string().min(10, "Must contain at least 10 characters"),
  amount: z.string().nonempty("Amount is required"),
  paymentMethod: z.enum(["Online", "Offline"], {
    required_error: "Please select a payment method",
  }),
});

type FormFields = z.infer<typeof schema>;

function DonationPay() {
  const [amount, setAmount] = useState("");

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm<FormFields>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormFields) => {
    try {
      console.log(data);
      console.log("data");
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

  function amountUpdate(newAmount: string) {
    setAmount(newAmount);
    setValue("amount", newAmount);
  }

  function clearAmount() {
    setAmount("");
    setValue("amount", "");
  }

  return (
    <div className="flex flex-col gap-8 p-12">
      <p>{DonationPayData[0].maindescp}</p>

      {/* content */}
      <div className="flex flex-col gap-4">
        <p className="text-2xl font-medium">Content</p>

        <ul className="flex flex-col gap-2">
          {DonationPayData[0].list.map((item, idx) => {
            return (
              <div key={idx} className="flex gap-2">
                <img src={tickred} alt="tickred" className="w-4" />
                <p>{item.li}</p>
              </div>
            );
          })}
        </ul>
      </div>

      {/* donation input */}
      <div className="w-4/6 p-2">
        <form
          className="w-full flex flex-col gap-8"
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* amount */}
          <div className="flex flex-col gap-6">
            <p className="text-2xl font-medium">Donation Amount</p>

            <div className="flex w-full flex-col">
              <div className="flex">
                <div className="bg-[#E26900] text-white font-semibold text-xl rounded-l-lg p-2 px-4">
                  &#8377;{" "}
                </div>
                <input
                  value={amount}
                  {...register("amount")} // Registering the donation amount for validation
                  onChange={(e) => setAmount(e.target.value)}
                  onFocus={clearAmount}
                  className="outline-none border-[#E26900] border-e-2 p-2 border-y-2 rounded-r-lg w-full"
                />
              </div>
              {errors.amount && (
                <p className="text-red-600 text-xs mt-1">
                  {errors.amount.message}
                </p>
              )}
            </div>

            <div className="flex gap-6 w-full">
              {DonationPayData[0].donationPrices.map((item, idx) => {
                return (
                  <motion.button
                    type="button"
                    onClick={() => amountUpdate(item.price)}
                    key={idx}
                    className="rounded-3xl p-2 px-4 border-2 border-[#797979]"
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    &#8377;{item.price}
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* paymentmode */}
          <div className="flex flex-col gap-4">
            <p className="text-2xl font-medium">Select Payment Mode</p>
            <div className="flex gap-8 items-center">
              <label className="text-lg font-normal">
                <input
                  type="radio"
                  {...register("paymentMethod")} 
                  value="Online"
                  className="form-radio w-4"
                />{" "}
                Online Payment
              </label>
              <label className="text-lg font-normal">
                <input
                  type="radio"
                  {...register("paymentMethod")} 
                  value="Offline"
                  className="form-radio w-4"
                />{" "}
                Offline Payment
              </label>
              {errors.paymentMethod && (
                <p className="text-red-600 text-xs mt-1">
                  {errors.paymentMethod.message}
                </p>
              )}
            </div>
          </div>

          {/* PersonalDetails */}
          <div className="w-full flex flex-col gap-8">
            <p className="text-2xl font-medium">Personal Details</p>

            <div className="flex gap-8 justify-around">
              <div className="flex w-3/6 flex-col gap-1 relative">
                <label
                  htmlFor="firstname"
                  className="text-lg font-normal text-[#666]"
                >
                  First Name
                </label>
                <input
                  {...register("firstname")}
                  placeholder="Enter your First Name"
                  id="firstname"
                  className="border-2 border-slate-700 rounded-lg outline-none p-2"
                />
                {errors.firstname && (
                  <p className="text-red-600 text-xs absolute -bottom-4 left-1">
                    {errors.firstname.message}
                  </p>
                )}
              </div>
              <div className="flex w-3/6 flex-col gap-1 relative">
                <label
                  htmlFor="lastname"
                  className="text-lg font-normal text-[#666]"
                >
                  Last Name
                </label>
                <input
                  {...register("lastname")}
                  placeholder="Enter your Last Name"
                  id="lastname"
                  className="border-2 border-slate-700 rounded-lg outline-none p-2"
                />
                {errors.lastname && (
                  <p className="text-red-600 text-xs absolute -bottom-4 left-1">
                    {errors.lastname.message}
                  </p>
                )}
              </div>
            </div>

            <div className="w-full">
              <div className="flex flex-col gap-1 relative">
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
                  className="border-2 border-slate-700 rounded-lg outline-none p-2"
                />
                {errors.email && (
                  <p className="text-red-600 text-xs absolute -bottom-4 left-1">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>

            <div className="w-2/6 flex">
              <div className="rounded-l-lg text-center p-2 w-3/6 bg-[#E26900]">
                Donation Total:
              </div>
              <div className="rounded-r-lg w-3/6 border-2 border-[#e26900] flex items-center px-2 text-black">
                <p>{amount}</p>
              </div>
            </div>

            <motion.button
              type="submit"
              onClick={handleSubmit(onSubmit)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-1/6 p-2 text-white rounded-full bg-[#7E4555]"
            >
              Donate Now
            </motion.button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default DonationPay;
