import aboutfounderimg from "../../../assets/images/aboutfounderimg.jpg";
import { AboutPeetamData } from "./AboutPeetamData";

function AboutPeetamComp() {
  return (
    <div className="w-full h-full flex justify-start items-center ">
      <div className="w-3/6 h-full">
        <img
          src={aboutfounderimg}
          alt="aboutfounderimg"
          className="w-full h-full "
        />
      </div>

      <div className="w-3/6 h-full flex flex-col justify-around items-center p-4 text-md leading-7 tracking-wide gap-6 text-[#FFA12B]">
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
