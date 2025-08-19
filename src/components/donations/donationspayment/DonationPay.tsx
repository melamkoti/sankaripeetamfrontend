import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { UserModuleAPI } from "../../../services/AppEndPoints";
import DonationReceipt from "./DonationReceipt";
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
  const [donationId, setDonationId] = useState(null); // Store donation ID

  const [panEnabled, setPanEnabled] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [paymentError, setPaymentError] = useState<string | null>(null);
  const RazarpayverifyOrderPostService = UserModuleAPI.RazarpayVerifyOrderPost;
  const RazarpayDonationPostService = UserModuleAPI.RazarpayDonationPost;
  const DontaionDetailsPostService = UserModuleAPI.PersonDetailsPost;

  const [selectedCategory, setSelectedCategory] = useState(donationTitle || "");
  // In your payment page component
  const [showReceipt, setShowReceipt] = useState(false);
  type ReceiptData = {
    donationData: {
      amount: string;
      currency: string;
      donationDetails: {
        category: string;
        name: string;
        email: string;
        phone: string;
        message: string;
        pancard: string | null;
      };
    };
    paymentData: {
      razorpay_payment_id: string;
      razorpay_order_id: string;
      razorpay_signature: string;
      date: string;
    };
  };

  const [receiptData, setReceiptData] = useState<ReceiptData | null>(null);
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormFields>({
    resolver: zodResolver(schema),
  });
  const userId = localStorage.getItem("userId");
  const amount = watch("amount");

  const handleCategoryChange = (e: any) => {
    const value = e.target.value;
    setSelectedCategory(value);
    // If you're using react-hook-form, you might also want to set the form value:
    setValue("category", value);
  };

  // Enable PAN field when amount is >= 2000
  useEffect(() => {
    if (amount && Number(amount) >= 2000) {
      setPanEnabled(true);
    } else {
      setPanEnabled(false);
      setValue("pancard", undefined);
    }
  }, [amount, setValue]);

  const loadRazorpayScript = async () => {
    return new Promise<void>((resolve, reject) => {
      if ((window as any).Razorpay) {
        return resolve();
      }

      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.async = true;
      script.onload = () => resolve();
      script.onerror = () =>
        reject(new Error("Failed to load Razorpay script"));
      document.body.appendChild(script);
    });
  };

  // const handlePaymentSuccess = async (response: any, formData: FormFields) => {
  //   try {
  //     const verificationResponse = await axios.post(
  //       RazarpayverifyOrderPostService,
  //       {
  //         razorpay_payment_id: response.razorpay_payment_id,
  //         razorpay_order_id: response.razorpay_order_id,
  //         razorpay_signature: response.razorpay_signature,
  //         donationData: {
  //           ...formData,
  //           name: `${formData.firstname} ${formData.lastname}`,
  //           amount: formData.amount,
  //         },
  //       }
  //     );

  //     if (verificationResponse.data.success) {
  //       // Prepare receipt data
  //       setReceiptData({
  //         donationData: {
  //           amount: formData.amount,
  //           currency: "INR",
  //           donationDetails: {
  //             category: formData.category,
  //             name: `${formData.firstname} ${formData.lastname}`,
  //             email: formData.email,
  //             phone: formData.tel,
  //             message: formData.message,
  //             pancard: panEnabled ? formData.pancard ?? null : null,
  //           },
  //         },
  //         paymentData: {
  //           razorpay_payment_id: response.razorpay_payment_id,
  //           razorpay_order_id: response.razorpay_order_id,
  //           razorpay_signature: response.razorpay_signature,
  //           date: new Date().toISOString(),
  //         },
  //       });

  //       setShowReceipt(true);
  //     } else {
  //       setPaymentError(
  //         verificationResponse.data.error || "Payment verification failed"
  //       );
  //     }
  //   } catch (error) {
  //     console.error("Payment verification error:", error);
  //     let errorMessage = "Payment verification failed";

  //     if (axios.isAxiosError(error)) {
  //       errorMessage = error.response?.data?.error || errorMessage;
  //     }

  //     setPaymentError(errorMessage);
  //   }
  // };
  console.log(donationId)
  const handlePaymentSuccess = async (response: any, formData: FormFields,donationId:string) => {
    try {
      // 1. First verify the payment with your backend
      const verificationResponse = await axios.post(
        RazarpayverifyOrderPostService,
        {
          razorpay_payment_id: response.razorpay_payment_id,
          razorpay_order_id: response.razorpay_order_id,
          razorpay_signature: response.razorpay_signature,
          donationId: donationId, // This should be from your donation creation response
        }
      );

      if (verificationResponse.data.success) {
        // 2. Prepare receipt data
        setReceiptData({
          donationData: {
            amount: formData.amount,
            currency: "INR",
            donationDetails: {
              category: formData.category,
              name: `${formData.firstname} ${formData.lastname}`,
              email: formData.email,
              phone: formData.tel,
              message: formData.message,
              pancard: panEnabled ? formData.pancard ?? null : null,
            },
          },
          paymentData: {
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_order_id: response.razorpay_order_id,
            razorpay_signature: response.razorpay_signature,
            date: new Date().toISOString(),
          },
        });

        setShowReceipt(true);
        setPaymentError(null);
      } else {
        setPaymentError(
          verificationResponse.data.error || "Payment verification failed"
        );
      }
    } catch (error) {
      console.error("Payment verification error:", error);
      let errorMessage = "Payment verification failed";

      if (axios.isAxiosError(error)) {
        errorMessage = error.response?.data?.error || errorMessage;
      }

      setPaymentError(errorMessage);

      // Optionally update donation as failed in your backend
      // try {
      //   await axios.patch(`${DontaionDetailsPostService}/${donationId}`, {
      //     paymentStatus: "FAILED",
      //     error: errorMessage,
      //   });
      // } catch (updateError) {
      //   console.error("Failed to update donation status:", updateError);
      // }
    }
  };

  const initiateRazorpayPayment = async (orderId: string, data: FormFields,donationId:string) => {
    try {
      await loadRazorpayScript();

      const options = {
        key: "rzp_live_88hZZOQLZQF4tC", // Replace with your Razorpay key
        amount: Number(data.amount) * 100, // Amount in paise
        currency: "INR",
        name: "SANKARIPEETAM",
        description: `Donation for ${data.category}`,
        order_id: orderId,
        handler: (response: any) => handlePaymentSuccess(response, data,donationId),

        prefill: {
          name: `${data.firstname} ${data.lastname}`,
          email: data.email,
          contact: data.tel,
        },
        notes: {
          donationFor: data.category,
          message: data.message,
        },
        theme: {
          color: "#F37254",
        },
        modal: {
          ondismiss: () => {
            setPaymentError("Payment window closed");
          },
        },
      };

      const rzp = new (window as any).Razorpay(options);
      rzp.on("payment.failed", (response: any) => {
        setPaymentError(`Payment failed: ${response.error.description}`);
      });
      rzp.open();
    } catch (error) {
      console.error("Razorpay initialization error:", error);
      setPaymentError("Failed to initialize payment gateway");
    }
  };

  const onSubmit = async (data: FormFields) => {
    setIsSubmitting(true);
    setPaymentError(null);

    try {

       // 1. FIRST create the donation record in your database
    const donationResponse = await axios.post(DontaionDetailsPostService, {
      userId, // From auth context
      amount: data.amount,
      currency: "INR",
      donationDetails: {
        category: data.category,
        name: `${data.firstname} ${data.lastname}`,
        email: data.email,
        phone: data.tel,
        message: data.message,
        pancard: panEnabled ? data.pancard : null,
      },
    }); 
  // Get the donation ID from the database response
    const donationId = donationResponse.data.donationId;
    setDonationId(donationId); // Store for verification later
    console.log("Donation created with ID:", donationId);


      // First create the order on your backend
      const orderResponse = await axios.post(RazarpayDonationPostService, {
        amount: data.amount,
        currency: "INR",
        donationDetails: {
          category: data.category,
          name: `${data.firstname} ${data.lastname}`,
          email: data.email,
          phone: data.tel,
          message: data.message,
          pancard: panEnabled ? data.pancard : null,
        },
      });
      
    

      // store the details to the database

     
      if (!orderResponse.data.order_id) {
        throw new Error("Failed to create payment order");
      }

      // Then initiate Razorpay payment
      await initiateRazorpayPayment(orderResponse.data.order_id, data, donationId,
      );
    } catch (error) {
      console.error("Donation submission failed:", error);
      let errorMessage = "Donation failed. Please try again.";
      if (typeof error === "object" && error !== null && "response" in error) {
        const err = error as { response?: { data?: { message?: string } } };
        if (err.response?.data?.message) {
          errorMessage = err.response.data.message;
        }
      }
      setPaymentError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="p-2 lg:p-8">
      {showReceipt && receiptData ? (
        <DonationReceipt
          donationData={receiptData.donationData}
          paymentData={receiptData.paymentData}
          onPrintComplete={() => {
            // Optional: Add any post-print logic
          }}
          onClose={() => {
            // Optional: Add logic to return to form
            setShowReceipt(false);
            console.log("clickid", setShowReceipt(false))
          }}
        />
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-8 p-4 lg:p-12 lg:w-[60vw] mx-2 lg:mx-auto my-4 bg-white rounded-lg shadow-lg"
        >
          {/* Donation Amount Section */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-6">
              <p className="text-2xl font-bold text-gray-800 text-center">
                Making Donation:{" "}
                <span className="text-orange-500 text-2xl md:text-3xl">
                  {selectedCategory || donationTitle}
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
                      "BhuSeva",
                    ].find(
                      (opt) =>
                        opt.toLowerCase() ===
                        donationTitle?.toLowerCase().replace(/\s+/g, "")
                    ) || ""
                  }
                  onChange={handleCategoryChange} // Add this handler
                  value={selectedCategory} // Controlled component
                  className="border-2 p-3 rounded-lg outline-none focus:border-orange-500"
                >
                  <option value="">Select a category</option>
                  <option value="Annadanam">Annadanam</option>
                  <option value="TempleSeva">Temple Seva</option>
                  <option value="GoSeva">Go Seva</option>
                  <option value="Orphans">Orphans</option>
                  <option value="VivekaVidyalaya">Viveka Vidyalaya</option>
                  <option value="BhuSeva">Bhu Seva</option>
                </select>
                {errors.category && (
                  <p className="text-red-500 text-sm">
                    {errors.category.message}
                  </p>
                )}
              </div>
            </div>
            <p className="text-2xl font-bold text-gray-800">
              Donation Amount (INR)
            </p>

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
                <p className="text-red-500 text-sm mt-1">
                  {errors.amount.message}
                </p>
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
                  <p className="text-red-500 text-sm">
                    {errors.firstname.message}
                  </p>
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
                  <p className="text-red-500 text-sm">
                    {errors.lastname.message}
                  </p>
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
                placeholder="+91 90123 45678"
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
              <a
                href="/privacy&policy"
                className="text-orange-600 hover:underline"
              >
                Privacy Policy
              </a>{" "}
              <span className="text-red-500">*</span>
            </label>
          </div>
          {errors.terms && (
            <p className="text-red-500 text-sm">{errors.terms.message}</p>
          )}

          {/* Payment Error Message */}
          {paymentError && (
            <div className="text-red-600 text-center p-2 rounded bg-red-50">
              {paymentError}
            </div>
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
            {isSubmitting ? "Processing..." : `Donate ₹${amount || "0"}`}
          </motion.button>
        </form>
      )}
    </div>
  );
}

export default DonationPay;

// const sendEmailReceipt = async () => {
//   try {
//     await axios.post('/api/send-receipt', {
//       email: receiptData.donationData.donationDetails.email,
//       receiptData: receiptData
//     });
//   } catch (error) {
//     console.error('Error sending email receipt:', error);
//   }
// };

// // Call this after setReceiptData
// sendEmailReceipt();
