const ContactUs = () => {
  return (
    <div className="p-6 px-4 max-w-4xl mx-auto text-gray-800 leading-relaxed pt-[100px]">
      <h1 className="text-2xl font-bold mb-6">Contact Us</h1>

      <p>
        We're here to help! If you have any questions, feedback, or inquiries regarding our services, donations, or policies, feel free to reach out to us.
      </p>

      <div className="mt-6 space-y-4">
        <div>
          <h2 className="font-semibold">📍 Address:</h2>
          <p>
            Sankaripeetam Charitable Trust
            <br />
            Brahmasri Nemmikanti, Narsaiahcharya No: 8-411A, Back side,
            <br />
           Anjaneya Swamy Temple, Sundar nagar, Mangamur road, Ongole, Prakasam District, Andhra Pradesh - 523002.
            <br />
            India
          </p>
        </div>

        <div>
          <h2 className="font-semibold">📞 Phone:</h2>
          <p>+91-9553670202</p>
        </div>

        <div>
          <h2 className="font-semibold">📧 Email:</h2>
          <p>trust.sspc@gmail.com</p>
        </div>

        <div>
          <h2 className="font-semibold">🌐 Website:</h2>
          <p>www.sankaripeetam.org</p>
        </div>

        <div>
          <h2 className="font-semibold">🕒 Office Hours:</h2>
          <p>
            Monday – Sunday: 9:00 AM to 6:00 PM  
            <br />
          </p>
        </div>
      </div>

      <hr className="my-8 border-t" />

      <h2 className="text-xl font-semibold mb-4">💬 Contact Form</h2>
      <form className="space-y-4">
        <div>
          <label className="block font-medium mb-1">Full Name</label>
          <input
            type="text"
            className="w-full border border-gray-300 px-4 py-2 rounded-md"
            placeholder="Your Name"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Email Address</label>
          <input
            type="email"
            className="w-full border border-gray-300 px-4 py-2 rounded-md"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Subject</label>
          <input
            type="text"
            className="w-full border border-gray-300 px-4 py-2 rounded-md"
            placeholder="Subject"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Message</label>
          <textarea
            className="w-full border border-gray-300 px-4 py-2 rounded-md"
            rows={5}
            placeholder="Your message..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Send Message
        </button>
      </form>

      <p className="mt-6 text-sm text-gray-500">
        We aim to respond to all queries within 24–48 hours.
      </p>
    </div>
  );
};

export default ContactUs;
