import aboutusmain from "../../../assets/images/aboutusmain.png";

function AboutMain() {
  return (
    <div
      className="flex justify-center items-end p-12 h-[70vh] min-w-screen"
      style={{
        backgroundImage: `url(${aboutusmain})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <p className="text-2xl md:text-4xl font-semibold text-white tracking-wider">
        ABOUT SANATANA SANKARI PEETAM
      </p>
    </div>
  );
}

export default AboutMain;
