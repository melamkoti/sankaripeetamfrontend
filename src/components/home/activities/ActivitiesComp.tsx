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
    <div
      className=" flex flex-col justify-start w-full p-8 md:p-12 lg:p-20 gap-12 bg-[#f7b90c]"
      // style={{
      //   backgroundImage: ` url(${activitiesbg})`,
      //   backgroundPosition: "center",
      //   backgroundSize: "cover",
      // }}
    >
      <div className="flex flex-col md:w-1/6 justify-center md:justify-start items-center md:items-start ">
        <p className="text-red-700 text-4xl font-semibold ">Activities</p>
        <p className=" text-xl font-semibold text-white">Description</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 text-white w-full gap-8 lg:gap-6 h-full ">
        {activitiesState.map((item, idx) => {
          return (
            <motion.div
              key={idx}
              whileHover={{
                scale: 1.05,
                transition: {
                  duration: 0.25,
                },
              }}
              className={`flex flex-col items-center md:items-start justify-around gap-4 rounded-xl  lg:w-5/6 h-full p-4 lg:px-6 
 ${
   item.isEnable
     ? "opacity-100 pointer-events-auto cursor-pointer hover:shadow-lg transition-shadow duration-300"
     : "opacity-30 pointer-events-none cursor-not-allowed"
 }

                	 ${item.color === "#ffffff" ? "text-[#44233B]" : ""}  `}
              style={{ backgroundColor: item.color }}
            >
              <img
                src={item.image}
                alt={item.title}
                style={{ maxWidth: "100%", height: "auto" }}
              />

              <div className="text-center md:text-left">
                <p>{item.title}</p>
                <p>{item.description}</p>
              </div>

              <a href="/activities/parihara">
                For More Details go to Activities &#8594;
              </a>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default ActivitiesComp;
