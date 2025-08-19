import contactusmain from "../../../assets/images/contact.jpg";

import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

function ContactMain() {
  return (
    <>
      <div className="flex justify-center items-center py-4  ">
        <div
          className="w-[90%] rounded-xl bg-center bg-cover bg-no-repeat 
             h-[200px] sm:h-[300px] md:h-[500px] lg:h-[740px] relative"
          style={{
            backgroundImage: `url(${contactusmain})`,
          }}
        >
          {" "}
        </div>
      </div>

      <section className=" py-8 px-4">
        <div className="max-w-6xl mx-auto grid gap-6 sm:grid-cols-1 md:grid-cols-12">
          {/* Address Card */}
          <div className="bg-[#e7d1d1] rounded-lg p-6 flex flex-col items-center text-center shadow-md md:col-span-6 sm:col-span-1 opacity-60">
            <div className="bg-[#dcbcbc] p-3 rounded-full mb-4">
              <FaMapMarkerAlt size={20} className="text-black" />
            </div>
            <p className="text-sm text-black">
              Brahmasri Nemmikanti Narsaiahcharya
              <br />
              No: 8-411A, Back side Anjaneya Swamy Temple, Sundar nagar,
              <br />
              Mangamur Road, Ongole, Prakasam District,
              <br />
              Andhra Pradesh – 523002
            </p>
          </div>

          {/* Phone Card */}
          <div className="bg-[#e2dcad] rounded-lg p-6 flex flex-col items-center text-center shadow-md md:col-span-3 sm:col-span-1 opacity-60">
            <div className="bg-[#d4cc86] p-3 rounded-full mb-4">
              <FaPhoneAlt size={20} className="text-black" />
            </div>
            <p className="text-sm text-black">
              +91 9989492655
              <br />
              +91 9705752677
            </p>
          </div>

          {/* Email Card */}
          <div className="bg-[#d4cdf2] rounded-lg p-6 flex flex-col items-center text-center shadow-md md:col-span-3 sm:col-span-1 opacity-60">
            <div className="bg-[#c0b6ec] p-3 rounded-full mb-4">
              <FaEnvelope size={20} className="text-black" />
            </div>
            <p className="text-sm text-black">turst.sspc@gmail.com</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactMain;
