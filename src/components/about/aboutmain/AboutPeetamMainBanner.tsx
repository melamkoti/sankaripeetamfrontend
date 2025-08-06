import aboutusmain from "../../../assets/images/aboutpeetam.png";

function AboutPeetamMain() {
  return (
    <div className="flex justify-center items-center py-4 bg-[#E9E5DF]">
      <div
        className="w-[90%] rounded-xl bg-center bg-cover bg-no-repeat 
             h-[200px] sm:h-[300px] md:h-[500px] lg:h-[740px]"
        style={{
          backgroundImage: `url(${aboutusmain})`,
        }}
      ></div>
    </div>
  );
}

export default AboutPeetamMain;
