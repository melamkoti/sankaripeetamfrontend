// import { useState } from "react";


// const RazorpayPayment = () => {
//   const [amount, setAmount] = useState<string>("");
//   const [paymentError, setPaymentError] = useState<string | null>(null);
//   const [isLoading, setIsLoading] = useState<boolean>(false);

//   const createOrder = async (amount: string): Promise<string | null> => {
//     setIsLoading(true);
//     setPaymentError(null); // Reset error state
//     console.log("Creating order with amount:", amount); // Debug log

//     try {
//       const response = await fetch("http://localhost:3000/api/create-order", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ amount, currency: "INR" }),
//       });

//       console.log("Order creation response status:", response.status); // Debug log

//       if (!response.ok) {
//         const errorData = await response.json();
//         console.error(
//           "Order creation failed with status:",
//           response.status,
//           errorData
//         );
//         throw new Error(errorData.error || "Failed to create order");
//       }

//       const data = await response.json();
//       console.log("Order creation success:", data); // Debug log

//       if (!data?.order_id) {
//         throw new Error("Invalid order ID received");
//       }

//       return data.order_id; // Ensure we're using the correct property name
//     } catch (error) {
//       console.error("Order creation error:", error);
//       setTimeout(() => {
//         setPaymentError("Payment session expired");
//       }, 15 * 60 * 1000); // 15 minutes
//       return null;
//     } finally {
//       setIsLoading(false);
//     }
//   };
// // Call your backend to verify the order
// const verifyOrder = async (orderId: string): Promise<boolean> => {
//   try {
//     const response = await fetch("http://localhost:3000/api/verify-order", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ orderId }),
//     });
//     if (!response.ok) {
//       throw new Error("Order verification failed");
//     }
//     const data = await response.json();
//     return data.valid === true;
//   } catch (error) {
//     console.error("Order verification failed:", error);
//     return false;
//   }
// };
// const handlePayment = async () => {
//     console.log("1. Payment initiated"); // Debug log

//     if (!amount || isNaN(Number(amount))) {
//       setPaymentError("Please enter a valid amount.");
//       return;
//     }
//     // 1. Create order
//   const orderId = await createOrder(amount);
//   if (!orderId) return;

//   // 2. Verify order exists
//   const orderValid = await verifyOrder(orderId); // Call to your backend
//   if (!orderValid) {
//     setPaymentError("Payment session expired. Please try again.");
//     return;
//   }

//     const options = {
//       key: "rzp_live_88hZZOQLZQF4tC", // Your Razorpay key
//       amount: Number(amount) * 100, // Convert to paise (₹1 = 100 paise)
//       currency: "INR",
//       name: "Sankaripeetam",
//       description: "Donation",
//       order_id: orderId,
//       handler: (response: any) => {
//         alert(
//           `Payment Successful! Payment ID: ${response.razorpay_payment_id}`
//         );
//       },
//       prefill: {
//         name: "narasaiah acharya",
//         email: "narasaiah@gmail.com",
//         contact: "9999999999", // Required field
//       },
//       theme: { color: "#F37254" },
//       modal: {
//         ondismiss: () => setPaymentError("Payment cancelled by user."),
//       },
//     };

//     try {
//       // Check if Razorpay is already loaded
//       if (!(window as any).Razorpay) {
//         await new Promise<void>((resolve, reject) => {
//           const script = document.createElement("script");
//           script.src = "https://checkout.razorpay.com/v1/checkout.js";
//           script.async = true;
//           // script.onload = () => resolve();
//           script.onload = () => {
//             console.log("Razorpay script loaded successfully");
//             resolve();
//           };
//           // script.onerror = () =>
//           //   reject(new Error("Failed to load Razorpay script"));
//           script.onerror = () => {
//             console.error("Failed to load Razorpay script");
//             reject();
//           };
//           document.body.appendChild(script);
//         });
//       }

//       const rzp = new (window as any).Razorpay(options);

//       rzp.on("payment.failed", (response: any) => {
//         setPaymentError(`Payment failed: ${response.error.description}`);
//         console.error("Payment failed:", response.error);
//       });

//       rzp.open();
//     } catch (err) {
//       console.error("Razorpay initialization error:", err);
//       setPaymentError("Failed to initialize payment. Please try again.");
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto my-[80px] p-5 border border-gray-200 rounded-lg shadow-sm">
//       <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
//         Make a Donation
//       </h2>
//       <input
//         type="number"
//         placeholder="Enter Amount (INR)"
//         value={amount}
//         onChange={(e) => {
//           setAmount(e.target.value);
//           setPaymentError(null);
//         }}
//         className="w-full px-3 py-2 border border-gray-300 rounded-md mb-4"
//         min="1"
//       />
//       {paymentError && (
//         <div className="text-red-600 mb-4 text-sm">{paymentError}</div>
//       )}
//       <button
//         onClick={handlePayment}
//         disabled={isLoading || !amount || isNaN(Number(amount))}
//         className={`w-full py-2 px-4 rounded-md text-white font-medium ${
//           isLoading || !amount || isNaN(Number(amount))
//             ? "bg-gray-400 cursor-not-allowed"
//             : "bg-orange-500 hover:bg-orange-600"
//         }`}
//       >
//         {isLoading ? "Processing..." : `Pay ₹${amount || "0"}`}
//       </button>
//     </div>
//   );
// };

// export default RazorpayPayment;
