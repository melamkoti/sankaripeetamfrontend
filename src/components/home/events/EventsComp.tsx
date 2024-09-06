import { EventsData } from "./EventsData";
import calender from "../../../assets/svg/calendar.png";
import { motion } from "framer-motion";

function EventsComp() {
  return (
    <div className="bg-[#FFF0E3] p-8 md:p-12 flex flex-col justify-center items-center gap-6">
      <div className="flex flex-col md:gap-2 justify-center items-center">
        <p className="text-lg text-[#44233B] tracking-widest font-medium">
          EVENTS
        </p>
        <p className="text-xl md:text-3xl text-[#6EC1E4] font-semibold ">
          Upcoming Events and Workshops
        </p>
      </div>

      <div className="flex w-full lg:w-5/6 flex-col justify-center items-center gap-4">
        {EventsData.map((item, idx) => {
          return (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.02 }}
              className="w-full h-full flex flex-col md:flex-row gap-4 md:gap-0 bg-white justify-center items-center rounded-xl p-4"
            >
              <div className="w-5/6 flex flex-col items-center justify-center  md:flex-row gap-4 md:gap-8">
                <div className="w-4/6 md:w-1/6 md:h-3/6 overflow-hidden rounded-xl">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    src={item.img}
                    alt="img"
                    className="w-full rounded-xl max-h-1/6 object-cover object-center"
                  />
                </div>

                <div className="w-full flex flex-col justify-center items-center md:items-start gap-2 lg:gap-4">
                  <p className="text-[#44233B] text-xl font-semibold">
                    {item.title}
                  </p>

                  <div className="flex gap-2 w-full md:gap-4">
                    <img
                      src={calender}
                      alt="calender"
                      className="w-4 md:w-6 object-cover object-center"
                    />
                    <p className="text-[#FD8F8F]">{item.date}</p>
                  </div>
                </div>
              </div>

              <div className="w-3/6  flex justify-end">
                <motion.button
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#61CE70] w-full md:w-4/6 lg:w-3/6 rounded-full p-2 px-4"
                >
                  join us
                </motion.button>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#44233B] rounded-full w-full text-white p-3 px-6"
        >
          More Events
        </motion.button>
      </div>
    </div>
  );
}

export default EventsComp;
