import { useState } from "react";
import { useForm } from "react-hook-form";
import DonationReceipt from "../../../components/donations/donationspayment/DonationReceipt";
import { UserModuleAPI } from "../../../services/AppEndPoints";
import { motion } from "framer-motion";

const AdminManualReceipt = () => {
  interface FormData {
    firstname: string;
    lastname: string;
    email: string;
    phone: string;
    pancard: string;
    category: string;
    message: string;
    amount: number;
    userId: number; // Admin can set or select this (or use null/0 if not available)
    currency?: string;
  }

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const [receiptData, setReceiptData] = useState<any>(null);
  const [paymentError, setPaymentError] = useState<string | null>(null);

  const userId = localStorage.getItem("userId");

  const amount = watch("amount");
  const panEnabled = amount && Number(amount) >= 2000;

  const DontaionDetailsPostService = UserModuleAPI.PersonDetailsPost;
  const GetLastReceiptDonationIdService =
    UserModuleAPI.LastReceiptOfDonationIdGet;

  const onSubmit = async (data: FormData) => {
    try {
      setPaymentError(null);

      // 1. Get next donation ID (optional)
      const lastReceiptRes = await fetch(GetLastReceiptDonationIdService);
      const lastReceipt = await lastReceiptRes.json();
      const nextDonationId = lastReceipt?.donationId
        ? lastReceipt.donationId + 1
        : 1;

      // 2. Build payload in backend's expected shape
      const payload = {
        id: nextDonationId, // Use next ID or let backend assign
        userId, // Set accordingly, or remove if not needed by backend
        amount: data.amount,
        currency: data.currency || "INR",
        donationDetails: {
          category: data.category,
          name: `${data.firstname} ${data.lastname}`,
          email: data.email,
          phone: data.phone,
          message: data.message,
          pancard: panEnabled ? data.pancard : undefined,
        },
        // Optionally send donationId or date if your backend uses them
      };

      // 3. POST to backend
      const res = await fetch(DontaionDetailsPostService, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error("Failed to create manual receipt");
      }

      const saved = await res.json();
      setReceiptData(saved);
    } catch (err: any) {
      console.error("Receipt error:", err);
      setPaymentError(err.message || "Error creating manual receipt");
    }
  };

  if (receiptData) {
    // Adjust this block if your receiptData is now nested, e.g. receiptData.donation
    return (
      <DonationReceipt
        donationData={{
          donationId: receiptData.donationId,
          amount: receiptData.donation?.amount,
          currency: "INR",
          donationDetails: {
            category: receiptData.donation.category,
            name: receiptData.donation.donorName,
            email: receiptData.donation.donorEmail,
            phone: receiptData.donation.donorPhone,
            message: receiptData.donation.message,
            pancard: receiptData.donation.pancard,
          },
        }}
        paymentData={{
          razorpay_payment_id: "manual",
          razorpay_order_id: "manual",
          razorpay_signature: "manual",
          date:
            receiptData.donation?.createdAt ||
            receiptData.createdAt ||
            new Date().toISOString(),
        }}
        onClose={() => setReceiptData(null)}
      />
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-8 p-4 lg:p-12 lg:w-[60vw] mx-2 lg:mx-auto my-4 bg-white rounded-lg shadow-lg"
    >
      {/* Category */}
      <div className="flex flex-col gap-1">
        <label className="text-black">Select Category</label>
        <select
          {...register("category", { required: "Category is required" })}
          className="border-2 p-3 rounded-lg outline-none focus:border-orange-500"
        >
          <option value="">Select a category</option>
          <option value="Annadanam">Annadanam</option>
          <option value="TempleSeva">Temple Seva</option>
          <option value="GoSeva">Go Seva</option>
          <option value="Orphans">Orphans</option>
          <option value="VivekaVidyalaya">Viveka Vidyalaya</option>
          <option value="BhuSeva">Bhu Seva</option>
          <option value="VrukshaSeva">Vruksha Seva</option>
        </select>
        {errors.category && (
          <p className="text-red-500 text-sm">{errors.category.message}</p>
        )}
      </div>

      {/* Amount */}
      <div className="flex flex-col">
        <label className="text-lg font-bold">Donation Amount (INR)</label>
        <div className="flex items-center">
          <div className="bg-orange-600 text-white font-semibold text-xl rounded-l-lg p-3 px-4">
            ₹
          </div>
          <input
            {...register("amount", {
              required: "Amount is required",
              min: { value: 1, message: "Amount must be at least ₹1" },
            })}
            type="number"
            className="outline-none border-orange-600 border-2 p-3 rounded-r-lg w-full md:w-1/2"
            placeholder="Enter amount"
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

      {/* PAN */}
      {panEnabled && (
        <div className="flex flex-col gap-1">
          <label className="text-lg text-gray-600">
            PAN Card <span className="text-red-500">*</span>
          </label>
          <input
            {...register("pancard", {
              required: "PAN card is required",
              pattern: {
                value: /[A-Z]{5}[0-9]{4}[A-Z]{1}/,
                message: "Invalid PAN format",
              },
            })}
            className="border-2 p-3 rounded-lg outline-none focus:border-orange-500 uppercase"
            placeholder="ABCDE1234F"
            maxLength={10}
          />
          {errors.pancard && (
            <p className="text-red-500 text-sm">{errors.pancard.message}</p>
          )}
        </div>
      )}

      {/* Personal Details */}
      <p className="text-2xl font-bold text-gray-800">Personal Details</p>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-1">
          <label className="text-gray-600">First Name *</label>
          <input
            {...register("firstname", { required: "First name required" })}
            className="border-2 p-3 rounded-lg outline-none focus:border-orange-500"
          />
          {errors.firstname && (
            <p className="text-red-500 text-sm">{errors.firstname.message}</p>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-gray-600">Last Name *</label>
          <input
            {...register("lastname", { required: "Last name required" })}
            className="border-2 p-3 rounded-lg outline-none focus:border-orange-500"
          />
          {errors.lastname && (
            <p className="text-red-500 text-sm">{errors.lastname.message}</p>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-gray-600">Email *</label>
        <input
          {...register("email", { required: "Email required" })}
          type="email"
          className="border-2 p-3 rounded-lg outline-none focus:border-orange-500"
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-gray-600">Phone *</label>
        <input
          {...register("phone", { required: "Phone required" })}
          type="tel"
          className="border-2 p-3 rounded-lg outline-none focus:border-orange-500"
        />
        {errors.phone && (
          <p className="text-red-500 text-sm">{errors.phone.message}</p>
        )}
      </div>

      {/* Purpose */}
      <div className="flex flex-col gap-1">
        <label className="text-gray-600">Purpose of Donation *</label>
        <textarea
          {...register("message", { required: "Purpose required" })}
          className="border-2 p-3 rounded-lg outline-none focus:border-orange-500 h-32"
        />
        {errors.message && (
          <p className="text-red-500 text-sm">{errors.message.message}</p>
        )}
      </div>
      {/* Notice */}
      {paymentError && (
        <div className="text-red-600 text-center p-2 rounded bg-red-50">
          {paymentError}
        </div>
      )}
      {/* Submit */}
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
        {isSubmitting ? "Processing..." : `Generate Receipt`}
      </motion.button>
    </form>
  );
};

export default AdminManualReceipt;
