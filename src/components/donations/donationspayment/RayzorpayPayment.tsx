import { useState } from "react";
import { useRazorpay, RazorpayOrderOptions } from "react-razorpay";

const RazorpayPayment = () => {
  const { error, isLoading, Razorpay } = useRazorpay();
  const [amount, setAmount] = useState<string>("");
  const [paymentError, setPaymentError] = useState<string | null>(null);

  const handlePayment = async () => {
    if (!amount || isNaN(Number(amount))) {
      setPaymentError("Please enter a valid amount");
      return;
    }

    const options: RazorpayOrderOptions = {
      key: "YOUR_RAZORPAY_KEY",
      amount: Number(amount) * 100,
      currency: "INR",
      name: "Sankaripeetam",
      description: "Donation",
      image: "https://example.com/your_logo.png",
      order_id: "",
      handler: (response: any) => {
        console.log("Payment success:", response);
        alert(
          `Payment Successful! Payment ID: ${response.razorpay_payment_id}`
        );
      },
      prefill: {
        name: "John Doe",
        email: "john.doe@example.com",
        contact: "9999999999",
      },
      notes: JSON.stringify({ address: "Razorpay Corporate Office" }), // ✅ Fixed here

      theme: {
        color: "#F37254",
      },
      modal: {
        ondismiss: () => {
          console.log("Payment modal dismissed");
          setPaymentError("Payment was cancelled");
        },
      },
    };

    try {
      const razorpayInstance = new Razorpay(options);
      razorpayInstance.on("payment.failed", (response: any) => {
        console.error("Payment failed:", response.error);
        setPaymentError(`Payment failed: ${response.error.description}`);
      });
      razorpayInstance.open();
    } catch (err) {
      console.error("Error initializing Razorpay:", err);
      setPaymentError("Error initializing payment gateway");
    }
  };

  return (
    <div className="max-w-md mx-auto p-5 border border-gray-200 rounded-lg shadow-sm">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
        Make a Donation
      </h2>

      <div className="mb-4">
        <label
          htmlFor="amount"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Amount (INR)
        </label>
        <input
          id="amount"
          type="number"
          placeholder="Enter Amount"
          value={amount}
          onChange={(e) => {
            setAmount(e.target.value);
            setPaymentError(null);
          }}
          min="1"
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
        />
      </div>

      {paymentError && (
        <div className="mb-4 text-red-600 text-sm">{paymentError}</div>
      )}
      {error && <div className="mb-4 text-red-600 text-sm">{error}</div>}

      <button
        onClick={handlePayment}
        disabled={isLoading || !amount || isNaN(Number(amount))}
        className={`w-full py-2 px-4 rounded-md text-white font-medium ${
          isLoading || !amount || isNaN(Number(amount))
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-orange-500 hover:bg-orange-600 focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
        } transition-colors duration-200`}
      >
        {isLoading ? (
          <span className="flex items-center justify-center">
            <svg
              className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Processing...
          </span>
        ) : (
          `Pay ₹${amount || "0"}`
        )}
      </button>
    </div>
  );
};

export default RazorpayPayment;
