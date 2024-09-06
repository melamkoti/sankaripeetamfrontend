import aboutfounderimg from "../../../assets/images/aboutfounderimg.jpg";
import { AboutPeetamData } from "./AboutPeetamData";

function AboutPeetamComp() {
  return (
    <div className="w-full lg:h-full flex flex-col lg:flex-row justify-start items-center p-6 md:p-12 lg:p-0 gap-4 md:gap-12 lg:gap-0 ">
      <div className="w-3/6 md:max-w-1/6 lg:h-full">
        <img
          src={aboutfounderimg}
          alt="aboutfounderimg"
          className="w-full lg:max-w-3/6  "
        />
      </div>

      <div className="lg:w-3/6 h-full flex flex-col justify-around items-center p-4 text-base gap-6 text-center md:text-justify  text-[#FFA12B]">
        <p>{AboutPeetamData[0].p1}</p>
        <p>{AboutPeetamData[0].p2}</p>
        <p>{AboutPeetamData[0].p3}</p>
        <p>{AboutPeetamData[0].p4}</p>
        <p>{AboutPeetamData[0].p5}</p>
        <p>{AboutPeetamData[0].p6}</p>
      </div>
    </div>
  );
}

export default AboutPeetamComp;
