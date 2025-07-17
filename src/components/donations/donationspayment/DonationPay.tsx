import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { UserModuleAPI } from "../../../services/AppEndPoints";

const schema = z.object({
  email: z
    .string()
    .nonempty("Email is required")
    .email("Invalid email address"),
  firstname: z.string().min(3, "Name must be at least 3 letters"),
  lastname: z.string().min(3, "Name must be at least 3 letters"),
  tel: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .regex(/^[0-9]+$/, "Must contain only numbers"),
  category: z.string().nonempty("Please select a category"),
  message: z.string().min(10, "Must contain at least 10 characters"),
  amount: z.string().nonempty("Amount is required"),
  pancard: z.string().min(10, "Must Contain at least 10 characters").optional(),
  terms: z.literal(true, {
    errorMap: () => ({ message: "You must accept the terms and conditions" }),
  }),
});

type FormFields = z.infer<typeof schema>;

function DonationPay() {
  const location = useLocation();
  const { donationTitle } = location.state || {};
  const [panEnabled, setPanEnabled] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
const PersonDetailsPostService = UserModuleAPI.PersonDetailsPost;
const RazarpayDonationPostService = UserModuleAPI.RazarpayDonationPost;

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormFields>({
    resolver: zodResolver(schema),
  });

  const amount = watch("amount");

  // Enable PAN field when amount is >= 2000
  useEffect(() => {
    if (amount && Number(amount) >= 2000) {
      setPanEnabled(true);
    } else {
      setPanEnabled(false);
      setValue("pancard", undefined); // Clear PAN when disabled
    }
  }, [amount, setValue]);

  const onSubmit = async (data: FormFields) => {
    setIsSubmitting(true);

    try {

      
      console.groupEnd();
      // Prepare API payload
      const payload = {
        userId: parseInt(localStorage.getItem("userId") || "guest"), // Fallback to 'guest' if not logged in
        amount: data.amount,
        pancard: panEnabled ? data.pancard : null,
        message: data.message,
        contact: data.tel,
        category: data.category,
        email: data.email,
        name: `${data.firstname} ${data.lastname}`,
      };

      // Uncomment to enable actual API call
      const response = await axios.post(
        PersonDetailsPostService,
        payload
      );
      console.log("🚀 API Response:", response.data);

      // For demo purposes - simulate API success
      console.log("📤 Simulated API Payload:", payload);
    } catch (error) {
      console.error("❌ Donation submission failed:", error);
      alert("Donation failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-8 p-4 lg:p-12 lg:w-[60vw] mx-2 lg:mx-auto my-4 bg-white rounded-lg shadow-lg"
    >
      {/* Donation Amount Section */}
      <div className="flex flex-col gap-6">
        <p className="text-2xl font-bold text-gray-800 text-center">
          Making Donation:{" "}
          <span className="text-orange-500 text-2xl md:text-3xl">
            {donationTitle}
          </span>
        </p>

        <div className="flex flex-col gap-1">
          <label className="text-black">Select Category</label>
          <select
            {...register("category")}
            defaultValue={
              [
                "Annadanam",
                "TempleSeva",
                "GoSeva",
                "Orphans",
                "VivekaVidyalaya",
                "SoilRejuvenation",
              ].find(
                (opt) =>
                  opt.toLowerCase() ===
                  donationTitle?.toLowerCase().replace(/\s+/g, "")
              ) || ""
            }
            className="border-2 p-3 rounded-lg outline-none focus:border-orange-500"
          >
            <option value="">Select a category</option>
            <option value="Annadanam">Annadanam</option>
            <option value="TempleSeva">Temple Seva</option>
            <option value="GoSeva">Go Seva</option>
            <option value="Orphans">Orphans</option>
            <option value="VivekaVidyalaya">Viveka Vidyalaya</option>
            <option value="SoilRejuvenation">Soil Rejuvenation</option>
          </select>
          {errors.category && (
            <p className="text-red-500 text-sm">{errors.category.message}</p>
          )}
        </div>

        <p className="text-2xl font-bold text-gray-800">Donation Amount</p>

        <div className="flex flex-col">
          <div className="flex items-center">
            <div className="bg-orange-600 text-white font-semibold text-xl rounded-l-lg p-3 px-4">
              ₹
            </div>
            <input
              {...register("amount")}
              className="outline-none border-orange-600 border-2 p-3 rounded-r-lg w-full md:w-1/2"
              placeholder="Enter amount"
              type="number"
              min="1"
            />
          </div>
          {panEnabled && (
            <p className="text-sm text-gray-500 mt-1">
              PAN card required for donations ≥ ₹2000
            </p>
          )}
          {errors.amount && (
            <p className="text-red-500 text-sm mt-1">{errors.amount.message}</p>
          )}
        </div>
      </div>

      {/* PAN Card Section */}
      {panEnabled && (
        <div className="flex flex-col gap-2">
          <label className="text-lg text-gray-600">
            PAN Card <span className="text-red-500">*</span>
            <span className="text-sm text-gray-500">
              {" "}
              (required for donations ≥ ₹2000)
            </span>
          </label>
          <input
            {...register("pancard")}
            className="border-2 p-3 rounded-lg outline-none focus:border-orange-500 uppercase"
            placeholder="ABCDE1234F"
            maxLength={10}
            style={{ textTransform: "uppercase" }}
          />
          {errors.pancard && (
            <p className="text-red-500 text-sm">{errors.pancard.message}</p>
          )}
        </div>
      )}

      {/* Personal Details Section */}
      <div className="flex flex-col gap-6">
        <p className="text-2xl font-bold text-gray-800">Personal Details</p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-1">
            <label className="text-gray-600">
              First Name <span className="text-red-500">*</span>
            </label>
            <input
              {...register("firstname")}
              className="border-2 p-3 rounded-lg outline-none focus:border-orange-500"
              placeholder="John"
            />
            {errors.firstname && (
              <p className="text-red-500 text-sm">{errors.firstname.message}</p>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-gray-600">
              Last Name <span className="text-red-500">*</span>
            </label>
            <input
              {...register("lastname")}
              className="border-2 p-3 rounded-lg outline-none focus:border-orange-500"
              placeholder="Doe"
            />
            {errors.lastname && (
              <p className="text-red-500 text-sm">{errors.lastname.message}</p>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-gray-600">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            {...register("email")}
            type="email"
            className="border-2 p-3 rounded-lg outline-none focus:border-orange-500"
            placeholder="john@example.com"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-gray-600">
            Contact <span className="text-red-500">*</span>
          </label>
          <input
            {...register("tel")}
            type="tel"
            className="border-2 p-3 rounded-lg outline-none focus:border-orange-500"
            placeholder="9876543210"
          />
          {errors.tel && (
            <p className="text-red-500 text-sm">{errors.tel.message}</p>
          )}
        </div>
      </div>

      {/* Message Section */}
      <div className="flex flex-col gap-1">
        <label className="text-gray-600">
          Purpose of Donation <span className="text-red-500">*</span>
        </label>
        <textarea
          {...register("message")}
          className="border-2 p-3 rounded-lg outline-none focus:border-orange-500 h-32"
          placeholder="Tell us why you're donating..."
        />
        {errors.message && (
          <p className="text-red-500 text-sm">{errors.message.message}</p>
        )}
      </div>

      {/* Terms and Conditions */}
      <div className="flex items-start gap-3 cursor-pointer">
        <input
          type="checkbox"
          id="terms"
          {...register("terms")}
          className="mt-1"
        />
        <label htmlFor="terms" className="text-gray-600">
          I agree to the{" "}
          <a
            href="/terms&conditions"
            className="text-orange-600 hover:underline"
          >
            Terms and Conditions
          </a>{" "}
          and{" "}
          <a href="/privacy&policy" className="text-orange-600 hover:underline">
            Privacy Policy
          </a>{" "}
          <span className="text-red-500">*</span>
        </label>
      </div>
      {errors.terms && (
        <p className="text-red-500 text-sm">{errors.terms.message}</p>
      )}

      {/* Submit Button */}
      <motion.button
        type="submit"
        disabled={isSubmitting}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`py-3 px-6 rounded-full text-lg font-bold transition-colors ${
          isSubmitting
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-orange-600 text-white hover:bg-orange-700"
        }`}
      >
        {isSubmitting ? "Processing..." : "Donate Now"}
      </motion.button>
    </form>
  );
}

export default DonationPay;
