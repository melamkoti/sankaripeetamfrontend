// import { OurGoalsData } from "./OurGoalsData";
import founder from "../../../assets/images/image3.png";

function OurGoalsPage() {
  // const responsibilities = [
  //   "Teaching spiritual knowledge and guiding disciples",
  //   "Organizing religious activities, rituals, donations, and spiritual events",
  //   "Guiding devotees on the path of dharma and spirituality",
  // ];

  return (
    <div className="w-full px-6 py-10 lg:px-16 flex flex-col gap-10">
      {/* Founder & Intro */}
      <div className="flex flex-col lg:flex-row gap-10 items-center">
        <div className="w-full lg:w-1/2">
          <img
            src={founder}
            alt="Founder"
            className="w-3/4 mx-auto object-cover rounded-xl "
          />
        </div>
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-2xl lg:text-5xl font-bold text-red-700 mb-4">
            About the Peethadhipathi
          </h2>
          <p className="lg:text-2xl  text-1xl text-gray-700 ">
            Peethadhipathi of Sanathana Saankari Peetam,<br />
            <strong>Brahmasri Nemmikanti Narsaiah Acharya</strong>, is a highly
            revered Vedic scholar, spiritual teacher, and guide to thousands of
            devotees. His life is dedicated to preserving Vedic tradition and
            spreading dharma through teaching, rituals, and compassionate
            service to society.
          </p>
        </div>
      </div>

      {/* <div>
        <h3 className="text-xl lg:text-2xl font-semibold text-red-500 mb-4">
          Responsibilities
        </h3>
        <div className="flex gap-4 overflow-x-auto snap-x scroll-smooth pb-4">
          {responsibilities.map((item, index) => (
            <div
              key={index}
              className="min-w-[250px] snap-start shrink-0 bg-white rounded-lg shadow-md p-4 text-sm border border-red-100"
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xl lg:text-2xl font-semibold text-red-500 mb-4">
          His Goals
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.entries(OurGoalsData[0]).map(([, value], index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-4 text-sm border border-red-100"
            >
              {value}
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
}

export default OurGoalsPage;
