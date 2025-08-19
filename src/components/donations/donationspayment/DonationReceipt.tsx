// import { motion } from "framer-motion";
// import { useReactToPrint } from "react-to-print";
// import Logo from "../../../assets/images/footer-logo.svg";
// import { useRef,   } from "react";

// interface ReceiptData {
//   donationData: {
//     amount: string;
//     currency: string;
//     donationDetails: {
//       category: string;
//       name: string;
//       email: string;
//       phone: string;
//       message: string;
//       pancard?: string | null;
//     };
//   };
//   paymentData: {
//     razorpay_payment_id: string;
//     razorpay_order_id: string;
//     razorpay_signature: string;
//     date: string;
//   };
// }

// const DonationReceipt =({
//   donationData,
//   paymentData,

//   // donationData = {
//   //   amount: "0",
//   //   currency: "INR",
//   //   donationDetails: {
//   //     category: "Annadhanam",
//   //     name: "koti",
//   //     email: "melamkotivenkateswarlu@gmail.com",
//   //     phone: "7732037931",
//   //     message: "i donate for food",
//   //     pancard: null,
//   //   },
//   // },
//   // paymentData = {
//   //   razorpay_payment_id: "",
//   //   razorpay_order_id: "",
//   //   razorpay_signature: "",
//   //   date: new Date().toISOString(),
//   // },
//   onClose = () => {},
// }: {
//   donationData?: ReceiptData["donationData"];
//   paymentData?: ReceiptData["paymentData"];

//   onPrintComplete?: () => void;
//   onClose?: () => void;
// }) => {
//   const contentRef = useRef<HTMLDivElement>(null);

//   const handlePrint = useReactToPrint({
//     content: () => contentRef.current ,
//     documentTitle: `Donation_Receipt`,
//     pageStyle: `
//       @page { size: A4; margin: 10mm; }
//       @media print {
//         body { -webkit-print-color-adjust: exact; }
//         .no-print { display: none !important; }
//         .receipt-content { padding: 0; }
//       }
//     `,
//   }as unknown as Parameters<typeof useReactToPrint>[0]);

//   // 👇 safest print handler

//   const formatDate = (dateString?: string) => {
//     if (!dateString) return "N/A";
//     const options: Intl.DateTimeFormatOptions = {
//       year: "numeric",
//       month: "short",
//       day: "numeric",
//     };
//     return new Date(dateString).toLocaleDateString("en-IN", options);
//   };

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50  ">
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
//       >
//         <div ref={contentRef} className="p-4 sm:p-6 md:p-8  receipt-content">
//           {/* Header with contact info */}
//           <div className="text-center text-xs sm:text-sm mb-3 border-b pb-2">
//             <p>
//               <span className="font-semibold">Contact</span>: +91 9705752677 |
//               +91 9898492655 | <span className="font-semibold">Email</span>:
//               trust.sspc@gmail.com
//             </p>
//           </div>

//           {/* Trust Name and Logo */}
//           <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4 mb-4">
//             <div className="w-16 sm:w-20">
//               <img src={Logo} alt="Sankari Peetam Logo" className="w-full" />
//             </div>
//             <div className="text-center">
//               <h1 className="text-xl sm:text-2xl md:text-3xl font-bold uppercase text-orange-600 tracking-tight">
//                 SANATHANA SANKARI PEETAM
//               </h1>
//               <p className="text-lg sm:text-xl md:text-2xl font-bold text-orange-600 tracking-tight">
//                 CHARITABLE TRUST
//               </p>
//             </div>
//           </div>

//           {/* Addresses */}
//           <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 text-[10px] sm:text-xs mb-4">
//             <div className="text-center sm:text-left">
//               <p>REGD. NO. 106/2019</p>
//               <p>PAN : AAYTS2349L</p>
//             </div>
//             <div className="text-center sm:text-left">
//               <p>8-411A Sundar Nagar</p>
//               <p>Manganuru Road, ONGOLE, 2</p>
//               <p>Prakasam Dist, ANDHRA PRADESH</p>
//             </div>
//             <div className="text-center sm:text-right">
//               <p>Adytha Ashramam Alkumathi Lake View,</p>
//               <p>Shu, Esau and Bhik Kuhnoh Road,</p>
//               <p>S. N. Palem, ANDHRA PRADESH</p>
//             </div>
//           </div>

//           {/* Receipt Header */}
//           <div className="text-center mb-4 border-b pb-2">
//             <h2 className="text-lg sm:text-xl font-bold underline">
//               DONATION RECEIPT
//             </h2>
//             <p className="text-xs sm:text-sm text-gray-500 mt-1">
//               Transaction ID: {paymentData?.razorpay_payment_id || "N/A"}
//             </p>
//           </div>

//           {/* Payment and Donor Info */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6">
//             {/* Payment Details */}
//             <div className="border rounded-lg p-3 sm:p-4">
//               <h3 className="text-base sm:text-lg font-semibold text-orange-600 mb-2">
//                 Payment Details
//               </h3>
//               <div className="space-y-2 text-sm sm:text-base">
//                 <div className="flex justify-between">
//                   <span className="font-medium">Amount:</span>
//                   <span>₹{donationData?.amount || "0"}</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="font-medium">Date:</span>
//                   <span>{formatDate(paymentData?.date)}</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="font-medium">Status:</span>
//                   <span className="text-green-600">Completed</span>
//                 </div>
//               </div>
//             </div>

//             {/* Donor Information */}
//             <div className="border rounded-lg p-3 sm:p-4">
//               <h3 className="text-base sm:text-lg font-semibold text-orange-600 mb-2">
//                 Donor Information
//               </h3>
//               <div className="space-y-2 text-sm sm:text-base">
//                 <div className="flex justify-between">
//                   <span className="font-medium">Name:</span>
//                   <span>{donationData?.donationDetails?.name || "N/A"}</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="font-medium">Email:</span>
//                   <span>{donationData?.donationDetails?.email || "N/A"}</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="font-medium">Phone:</span>
//                   <span>{donationData?.donationDetails?.phone || "N/A"}</span>
//                 </div>
//                 {donationData?.donationDetails?.pancard && (
//                   <div className="flex justify-between">
//                     <span className="font-medium">PAN:</span>
//                     <span>{donationData.donationDetails.pancard}</span>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>

//           {/* Donation Details */}
//           <div className="border rounded-lg p-3 sm:p-4 mb-6">
//             <h3 className="text-base sm:text-lg font-semibold text-orange-600 mb-2">
//               Donation Details
//             </h3>
//             <div className="space-y-2 text-sm sm:text-base">
//               <div className="flex justify-between">
//                 <span className="font-medium">Category:</span>
//                 <span>{donationData?.donationDetails?.category || "N/A"}</span>
//               </div>
//               <div>
//                 <p className="font-medium">Purpose:</p>
//                 <p className="mt-1 text-gray-700 text-sm sm:text-base">
//                   {donationData?.donationDetails?.message || "N/A"}
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Footer */}
//           <div className="border-t border-gray-200 pt-3 text-center text-xs sm:text-sm">
//             <p className="text-gray-600">
//               This is an official receipt for your donation. Thank you for your
//               generous support.
//             </p>
//             <p className="text-gray-600 mt-1">
//               For any queries, please contact support@sankaripeetam.org
//             </p>
//             <div className="mt-3 text-gray-500 text-[10px] sm:text-xs">
//               <p>Generated on: {new Date().toLocaleString()}</p>
//             </div>
//           </div>
//         </div>

//         {/* Action buttons (not printed) */}
//         <div className="p-3 sm:p-4 border-t border-gray-200 flex justify-center gap-3 sm:gap-4 ">
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             onClick={handlePrint}
//             className="px-4 sm:px-6 py-2 bg-orange-600 text-white rounded-lg shadow text-sm sm:text-base no-print"
//           >
//             Print Receipt
//           </motion.button>
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             onClick={onClose}
//             className="px-4 sm:px-6 py-2 bg-gray-200 text-gray-800 rounded-lg shadow text-sm sm:text-base"
//           >
//             Close
//           </motion.button>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default DonationReceipt;

import { motion } from "framer-motion";
import Logo from "../../../assets/images/footer-logo.svg";
import { useRef } from "react";
import html2pdf from "html2pdf.js";

interface ReceiptData {
  donationData: {
    amount: string;
    currency: string;
    donationDetails: {
      category: string;
      name: string;
      email: string;
      phone: string;
      message: string;
      pancard?: string | null;
    };
  };
  paymentData: {
    razorpay_payment_id: string;
    razorpay_order_id: string;
    razorpay_signature: string;
    date: string;
  };
}

const DonationReceipt = ({
  // donationData,
  // paymentData,

  donationData = {
    amount: "0",
    currency: "INR",
    donationDetails: {
      category: "Annadhanam",
      name: "koti",
      email: "melamkotivenkateswarlu@gmail.com",
      phone: "7732037931",
      message: "i donate for food",
      pancard: null,
    },
  },
  paymentData = {
    razorpay_payment_id: "",
    razorpay_order_id: "",
    razorpay_signature: "",
    date: new Date().toISOString(),
  },
  onClose ,
}: {
  donationData?: ReceiptData["donationData"];
  paymentData?: ReceiptData["paymentData"];

  onPrintComplete?: () => void;
  onClose?: () => void;
}) => {
  const contentRef = useRef<HTMLDivElement>(null);

  const handlePrint = async () => {
    const element = contentRef.current;
    if (!element) return;

    const opt = {
      margin: 0.5,
      filename: "Donation_Receipt.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
    };
    try {
      const pdf = await html2pdf().from(element).set(opt).toPdf().get("pdf");

      const blobUrl = pdf.output("bloburl");
      const pdfWindow = window.open(blobUrl, "_blank");

      if (pdfWindow) {
        // Add slight delay to ensure PDF loads before printing
        setTimeout(() => {
          pdfWindow.print();
          // Clean up blob URL after printing
          URL.revokeObjectURL(blobUrl);
        }, 500);
      } else {
        // Fallback to download if popup blocked
        console.warn("Popup blocked - downloading instead");
        pdf.save("donation-receipt.pdf");
      }
    } catch (error) {
      console.error("Printing failed:", error);
      // Show user-friendly error message
      alert(
        "Could not open print dialog. Please check your browser settings or try downloading instead."
      );
    }
  };

  const handleDownload = () => {
    const element = contentRef.current;
    if (!element) return;

    const currentDate = new Date();
    const formattedDate = currentDate
      .toISOString()
      .replace(/T/, "_")
      .replace(/:/g, "-")
      .split(".")[0];

    const opt = {
      margin: 0.5,
      filename: `Donation_Receipt_${formattedDate}.pdf`,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
    };

    html2pdf().from(element).set(opt).save();
  };

  // 👇 safest print handler

  const formatDate = (dateString?: string) => {
    if (!dateString) return "N/A";
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "short",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString("en-IN", options);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50  ">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
      >
        <div ref={contentRef} className="p-4 sm:p-6 md:p-8  receipt-content">
          {/* Header with contact info */}
          <div className="text-center text-xs sm:text-sm mb-3 border-b pb-2">
            <p>
              <span className="font-semibold">Contact</span>: +91 9705752677 |
              +91 9898492655 | <span className="font-semibold">Email</span>:
              trust.sspc@gmail.com
            </p>
          </div>

          {/* Trust Name and Logo */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4 mb-4">
            <div className="w-16 sm:w-20">
              <img src={Logo} alt="Sankari Peetam Logo" className="w-full" />
            </div>
            <div className="text-center">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold uppercase text-orange-600 tracking-tight">
                SANATHANA SANKARI PEETAM
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl font-bold text-orange-600 tracking-tight">
                CHARITABLE TRUST
              </p>
            </div>
          </div>

          {/* Addresses */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 text-[10px] sm:text-xs mb-4">
            <div className="text-center sm:text-left">
              <p>REGD. NO. 106/2019</p>
              <p>PAN : AAYTS2349L</p>
            </div>
            <div className="text-center sm:text-left">
              <p>8-411A Sundar Nagar</p>
              <p>Manganuru Road, ONGOLE, 2</p>
              <p>Prakasam Dist, ANDHRA PRADESH</p>
            </div>
            <div className="text-center sm:text-right">
              <p>Adytha Ashramam Alkumathi Lake View,</p>
              <p>Shu, Esau and Bhik Kuhnoh Road,</p>
              <p>S. N. Palem, ANDHRA PRADESH</p>
            </div>
          </div>

          {/* Receipt Header */}
          <div className="text-center mb-4 border-b pb-2">
            <h2 className="text-lg sm:text-xl font-bold underline">
              DONATION RECEIPT
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              Transaction ID: {paymentData?.razorpay_payment_id || "N/A"}
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-4 sm:gap-6 mb-6">
            {/* Payment Details */}
            <div className="flex-1 border rounded-lg p-3 sm:p-4">
              <h3 className="text-base sm:text-lg font-semibold text-orange-600 mb-2">
                Payment Details
              </h3>
              <div className="space-y-2 text-sm sm:text-base">
                <div className="flex justify-between">
                  <span className="font-medium">Amount:</span>
                  <span>₹{donationData?.amount || "0"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Date:</span>
                  <span>{formatDate(paymentData?.date)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Status:</span>
                  <span className="text-green-600">Completed</span>
                </div>
              </div>
            </div>

            {/* Donor Information */}
            <div className="flex-1 border rounded-lg p-3 sm:p-4">
              <h3 className="text-base sm:text-lg font-semibold text-orange-600 mb-2">
                Donor Information
              </h3>
              <div className="space-y-3 text-sm sm:text-base">
                <div className="flex flex-col sm:flex-row sm:justify-between">
                  <span className="font-medium">Name:</span>
                  <span className="break-words">
                    {donationData?.donationDetails?.name || "N/A"}
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between">
                  <span className="font-medium">Email:</span>
                  <span className="break-words">
                    {donationData?.donationDetails?.email || "N/A"}
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between">
                  <span className="font-medium">Phone:</span>
                  <span>{donationData?.donationDetails?.phone || "N/A"}</span>
                </div>
                {donationData?.donationDetails?.pancard && (
                  <div className="flex flex-col sm:flex-row sm:justify-between">
                    <span className="font-medium">PAN:</span>
                    <span>{donationData.donationDetails.pancard}</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Donation Details */}
          <div className="border rounded-lg p-3 sm:p-4 mb-6">
            <h3 className="text-base sm:text-lg font-semibold text-orange-600 mb-2">
              Donation Details
            </h3>
            <div className="space-y-2 text-sm sm:text-base">
              <div className="flex flex-col sm:flex-row sm:justify-between">
                <span className="font-medium">Category:</span>
                <span>{donationData?.donationDetails?.category || "N/A"}</span>
              </div>
              <div>
                <p className="font-medium">Purpose:</p>
                <p className="mt-1 text-gray-700 text-sm sm:text-base">
                  {donationData?.donationDetails?.message || "N/A"}
                </p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="border-t border-gray-200 pt-3 text-center text-xs sm:text-sm">
            <p className="text-gray-600">
              This is an official receipt for your donation. Thank you for your
              generous support.
            </p>
            <p className="text-gray-600 mt-1">
              For any queries, please contact support@sankaripeetam.org
            </p>
            <div className="mt-3 text-gray-500 text-[10px] sm:text-xs">
              <p>Generated on: {new Date().toLocaleString()}</p>
            </div>
          </div>
        </div>

        {/* Action buttons (not printed) */}

        <div className="p-3 sm:p-4 border-t border-gray-200 flex justify-center gap-3 sm:gap-4">
          {/* Print Receipt */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handlePrint}
            className="px-4 sm:px-6 py-2 bg-green-600 text-white rounded-lg shadow text-sm sm:text-base no-print"
          >
            Print Receipt
          </motion.button>
          {/* Save Receipt */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleDownload}
            className="px-4 sm:px-6 py-2 bg-orange-600 text-white rounded-lg shadow text-sm sm:text-base no-print"
          >
            Dowload Receipt
          </motion.button>

          {/* Close */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onClose}
            className="px-4 sm:px-6 py-2 bg-gray-200 text-gray-800 rounded-lg shadow text-sm sm:text-base"
          >
            Close
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default DonationReceipt;
