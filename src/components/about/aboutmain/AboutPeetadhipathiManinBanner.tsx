import aboutusmain from "../../../assets/images/aboutusmain.png";

function AboutPeetadhiPathiMain() {
  return (
    <div
      className="flex justify-center items-end p-12 h-[90vh] min-w-screen radix-lg"
      style={{
        backgroundImage: `url(${aboutusmain})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <p className="text-2xl md:text-4xl font-semibold text-white tracking-wider text-center">
        ABOUT  PEETADHIPATHI
      </p>
    </div>
  );
}

export default AboutPeetadhiPathiMain;
