import { DonationPayData } from "./DonationPayData";
import tickred from "../../../assets/svg/tickred.svg";
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
  family: z
    .array(
      z.object({
        value1: z.string().min(1, "Relation is required"),
        value2: z.string().min(3, "Name must be at least 3 letters"),
      })
    )
    .min(1, "At least one family member must be added"),
});

type FormFields = z.infer<typeof schema>;

type InputField = {
  value1: string;
  value2: string;
};

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

  const [inputFields, setInputFields] = useState([{ value1: "", value2: "" }]);

  const handleAddFields = () => {
    setInputFields([...inputFields, { value1: "", value2: "" }]);
  };

  const handleChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    const newInputFields = [...inputFields];
    newInputFields[index][name as keyof InputField] = value;
    setInputFields(newInputFields);
  };
  const handleRemoveFields = (index: number) => {
    const newInputFields = inputFields.filter((_, i) => i !== index);
    setInputFields(newInputFields);
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
    <div className="flex flex-col gap-8 p-4 lg:p-12 lg:w-[60vw] mx-auto">
      <p>{DonationPayData[0].maindescp}</p>

      {/* content */}
      <div className="flex flex-col gap-4 ">
        <p className="text-2xl font-medium ">Content </p>

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
      <div className="w-full md:w-5/6 p-2">
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
                  className="outline-none border-[#E26900] border-e-2 p-2 border-y-2 rounded-r-lg w-full md:w-3/6"
                />
              </div>
              {errors.amount && (
                <p className="text-red-600 text-xs mt-1">
                  {errors.amount.message}
                </p>
              )}
            </div>

            <div className="flex flex-wrap gap-2 ">
              {DonationPayData[0].donationPrices.map((item, idx) => {
                return (
                  <motion.button
                    type="button"
                    onClick={() => amountUpdate(item.price)}
                    key={idx}
                    className="rounded-xl py-2 px-4 border-2 border-[#797979]"
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    &#8377;{item.price}
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* PersonalDetails */}
          <div className="w-full flex flex-col gap-8">
            <p className="text-2xl font-medium">Personal Details</p>

            <div className="flex flex-col gap-8 justify-start">
              <div className="flex md:w-3/6 flex-col gap-1 relative">
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
                  className="border-2 outline-none border-slate-400 focus:border-[#FFA12B]  rounded-lg p-2"
                />
                {errors.firstname && (
                  <p className="text-red-600 text-xs absolute -bottom-4 left-1">
                    {errors.firstname.message}
                  </p>
                )}
              </div>

              <p className="text-xl font-medium">
                Enter Details of your family
              </p>

              <div>
                {inputFields.map((fields, index) => (
                  <div
                    key={index}
                    className="flex flex-col md:flex-row w-full items-start gap-2 mb-4"
                  >
                    <div className="w-full md:w-2/6 flex flex-col ">
                      <input
                        {...register(`family.${index}.value1`)}
                        type="text"
                        value={fields.value1}
                        onChange={(event) => handleChange(index, event)}
                        placeholder="Relation"
                        className="border-2 w-full p-2 rounded outline-none border-slate-400 focus:border-[#FFA12B]"
                      />
                      {errors.family?.[index]?.value1 && (
                        <p className="text-red-600 text-xs mt-1 ">
                          {errors.family[index].value1.message}
                        </p>
                      )}
                    </div>

                    <div className="w-full flex flex-col md:w-2/6 ">
                      <input
                        {...register(`family.${index}.value2`)} // Register Name
                        type="text"
                        value={fields.value2}
                        onChange={(event) => handleChange(index, event)}
                        placeholder="Name"
                        className="border-2 w-full p-2 rounded outline-none border-slate-400 focus:border-[#FFA12B]"
                      />
                      {errors.family?.[index]?.value2 && (
                        <p className="text-red-600 text-xs mt-1">
                          {errors.family[index].value2.message}
                        </p>
                      )}
                    </div>

                    <div className="flex gap-2 mt-1 ">
                      <button
                        type="button"
                        onClick={handleAddFields}
                        className="border-2 px-1  border-slate-500 text-black p-1 md:text-xl font-semibold text-center rounded-lg"
                      >
                        +
                      </button>
                      {inputFields.length > 1 && (
                        <button
                          type="button"
                          onClick={() => handleRemoveFields(index)}
                          className="p-1 px-2 border-2 border-red-500 text-black text-xl font-bold rounded-lg"
                        >
                          -
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full md:w-3/6">
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
                  className="border-2 outline-none border-slate-400 focus:border-[#FFA12B]  rounded-lg p-2"
                />
                {errors.email && (
                  <p className="text-red-600 text-xs absolute -bottom-4 left-1">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>

            <div className="md:w-5/6 lg:w-3/6 flex">
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
              className="w-3/6 md:w-2/6 p-2 text-white rounded-full bg-[#7E4555] mx-auto "
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
