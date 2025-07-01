import { OurGoalsData } from "./OurGoalsData";
import founder from "../../../assets/images/founder.png";

function OurGoalsPage() {
  return (
    <div className="w-full flex flex-col md:flex-row gap-16 lg:gap-0 justify-center items-center p-8 lg:p-16">
      <div className="w-full md:w-1/2 md:order-2">
        <img
          src={founder}
          alt="founder"
          className="lg:w-4/6 mx-auto object-cover object-center"
        />
      </div>

      <div className="w-full md:w-1/2 flex flex-col justify-around items-center gap-8 md:order-1">
        <div className="flex flex-col gap-2 justify-center items-center md:items-start">
          <p className="text-2xl font-semibold">My Goals</p>
          <ul className="text-xs lg:text-sm text-justify md:text-left font-normal">
            <li>{OurGoalsData[0].p1}</li>
            <li>{OurGoalsData[0].p2}</li>
            <li>{OurGoalsData[0].p3}</li>
            <li>{OurGoalsData[0].p4}</li>
            <li>{OurGoalsData[0].p5}</li>
            <li>{OurGoalsData[0].p6}</li>
            <li>{OurGoalsData[0].p7}</li>
            <li>{OurGoalsData[0].p8}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default OurGoalsPage;
