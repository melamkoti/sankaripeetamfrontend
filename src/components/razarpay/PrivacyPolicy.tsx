const PrivacyPolicy = () => {
  return (
    <div className=" max-w-3xl mx-auto text-gray-800 leading-relaxed pt-[100px] pb-6 px-4 main_head lg:mt-[130px]">
      <h1 className="text-2xl font-bold mb-4">Privacy Policy</h1>

      <p>
        At <strong>sankaripeetam</strong>, we value your privacy and are committed to protecting your personal data.
      </p>

      <ol className="list-decimal ml-6 mt-4 space-y-3">
        <li>
          <strong>Information We Collect:</strong> We may collect your name, email, phone number, and payment details (if applicable).
        </li>
        <li>
          <strong>How We Use Your Information:</strong> To process donations/purchases, respond to queries, and improve our services.
        </li>
        <li>
          <strong>Data Security:</strong> We use secure methods to store and protect your data.
        </li>
        <li>
          <strong>Third-Party Services:</strong> We may use third-party services (e.g., Razorpay) to process payments. These services may collect data per their own policies.
        </li>
        <li>
          <strong>Contact Us:</strong> If you have any concerns or questions, contact us at: <strong>trust.sspc@gmail.com</strong>
        </li>
      </ol>

      <p className="mt-4">
        <strong>Effective Date:</strong> [16/06/2025]
      </p>
    </div>
  );
};

export default PrivacyPolicy;
