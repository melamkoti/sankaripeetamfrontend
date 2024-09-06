import contactusmain from "../../../assets/images/contactusmain.jpg";

function ContactMain() {
  return (
    <div
      className="flex justify-center items-center h-[40vh] max-w-screen"
      style={{
        backgroundImage: `url(${contactusmain})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <p className="text-6xl font-bold text-[#ffffff]">Contact Us</p>
    </div>
  );
}

export default ContactMain;
