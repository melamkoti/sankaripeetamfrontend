// import activitiesbg from "../../../assets/images/activitiesbg.jpg";
import { motion } from "framer-motion";
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
    
   <div className="flex flex-col w-full p-4 md:p-12 lg:p-20 gap-12 bg-[#E9E5DF]">
  {/* Heading */}
  <div className="text-center">
    <h2 className="text-2xl md:text-[32px] font-semibold ">
      Sanathana Sankari Peetam - Activities
    </h2>
    <p className=" text-sm md:text-[20px] font-normal mt-2">Abhayam – Vijayam</p>
  </div>

  {/* Cards */}
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 place-items-center">
    {activitiesState.map((item, idx) => (
      <motion.div
        key={idx}
        whileHover={{ scale: 1.03, transition: { duration: 0.25 } }}
        className={`flex flex-col md:flex-row items-center md:items-start justify-around gap-4 rounded-xl w-full md:w-5/6 h-full p-6 bg-white shadow-md transition-all duration-300
          ${
            item.isEnable
              ? "opacity-100 pointer-events-auto cursor-pointer hover:shadow-lg"
              : "opacity-30 pointer-events-none cursor-not-allowed"
          }
          ${item.color === "#ffffff" ? "text-[#44233B]" : ""}
        `}
        style={{ backgroundColor: item.color }}
      >
        {/* Image */}
        <div className="flex-shrink-0 w-20 h-20 md:w-40 md:h-40 overflow-hidden rounded-full border-4 border-white shadow">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="flex flex-col text-center md:text-left gap-4">
          <h3 className="text-lg font-semibold text-[#D9540F] md:text-[24px]">
            {item.title}
          </h3>
          <p className="font-medium text-sm leading-[30px] md:text-[18px] tracking-wider">
            {item.description}
          </p>
          <a
            href="/activities/parihara"
            className="text-[#066FAE] font-normal text-sm mt-2 hover:underline md:text-[18px] tracking-tight"
          >
            For More Details →
          </a>
        </div>
      </motion.div>
    ))}
  </div>
</div>

  );
}

export default ActivitiesComp;
