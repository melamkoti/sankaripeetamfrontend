// import activitiesbg from "../../../assets/images/activitiesbg.jpg";
import { useState, useEffect } from "react";
import axios from "axios";
import { UserModuleAPI } from "../../../services/AppEndPoints";
type ActivitiesType = {
  color: string;
  image: string;
  title: string;
  description: string;
  isEnable: boolean;
};
function ActivitiesComp() {
  const [activitiesState, setActivitiesState] = useState<ActivitiesType[]>([]);

  const ActivitiesApiService = UserModuleAPI.AllActivityGet;

  useEffect(() => {
    axios
      .get(ActivitiesApiService)
      .then((response) => setActivitiesState(response.data))
      .catch((error) => console.error("Error fetching events data: ", error));
  }, []);

  return (
    <div className="flex flex-col w-full p-4 md:p-12 lg:p-20 gap-4 ">
      {/* Heading */}
      <div className="text-center my-4 md:my-6">
        <h2 className="text-2xl md:text-[32px] font-semibold ">
          Sanathana Sankari Peetam - Activities
        </h2>
        <p className=" text-sm md:text-[20px] font-normal mt-2">
          Abhayam – Vijayam
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 place-items-center max-w-[1280px]">
        {activitiesState.map((item, idx) => (
          <div
            key={idx}
            className={`flex flex-col md:flex-row items-center md:items-start justify-between gap-4 rounded-xl w-full md:w-6/6 h-full p-8 bg-white shadow-md transition-all duration-300 min-h-[364px] md:min-h-[240px]  
        ${
          item.isEnable
            ? "opacity-100 pointer-events-auto cursor-pointer hover:shadow-lg"
            : "opacity-30 pointer-events-none cursor-not-allowed"
        }
        
      `}
          >
            {/* Image */}
            <div className="flex-shrink-0 w-24 h-24 md:w-40 md:h-40 overflow-hidden rounded-full  shadow">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text Content - Modified this container */}
            <div className="flex flex-col justify-between h-full text-center md:text-left gap-4 flex-grow">
              <div>
                <h3 className="text-lg font-semibold text-[#D9540F] md:text-[24px] font-anek">
                  {item.title}
                </h3>
                <p
                  className="font-medium text-sm leading-[30px] md:text-[16px] tracking-wider pr-2  
              line-clamp-3 overflow-hidden text-ellipsis"
                >
                  {item.description}
                </p>
              </div>

              <a
                href={item.color}
                className="text-[#066FAE] font-normal text-sm hover:underline md:text-[18px] tracking-tight self-center md:self-start"
              >
                For More Details →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ActivitiesComp;
