import calender from "../../../assets/svg/calendar.png";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { format } from "date-fns";
import { UserModuleAPI } from "../../../services/AppEndPoints";
import axios from "axios";
import { useNavigate } from "react-router-dom";
interface ApiEventResponse {
  title: string;
  description: string;
  image: string;
  eventDate: string;
}

type EventsType = {
  title: string;
  description: string;
  image: string;
  eventDate: Date;
};

function EventsComp() {
  const [eventsState, setEventsState] = useState<EventsType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const EventApiService = UserModuleAPI.UpcomingEventsGet;
const navigate = useNavigate();
  useEffect(() => {
    axios
      .get<ApiEventResponse[]>(EventApiService)
      .then((response) => {
        const parsedData = response.data.map((event) => ({
          ...event,
          eventDate: new Date(event.eventDate),
        }));
        setEventsState(parsedData);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching events data: ", error);
        setIsLoading(false);
      });
  }, []);

  return (
   <div className="bg-[#FFF0E3] p-8 md:p-12 flex flex-col justify-center items-center gap-10">
  {/* Header */}
  <div className="flex flex-col gap-4 justify-center items-center text-center">
    <p className="text-3xl md:text-4xl font-bold text-[#44233B] tracking-wide relative inline-block">
      <span className="relative z-10 px-2">EVENTS</span>
      <span className="absolute bottom-1 left-0 w-full h-2 bg-[#FFD700] opacity-60 z-0"></span>
    </p>
    <p className="text-xl md:text-2xl text-[#6EC1E4] font-semibold">
      Upcoming Events and Workshops
    </p>
  </div>

  {/* Content */}
  {isLoading ? (
    <div className="w-full flex justify-center items-center py-10">
      <p className="text-lg font-medium text-[#44233B]">Loading events...</p>
    </div>
  ) : eventsState.length === 0 ? (
    <div className="w-full flex justify-center items-center py-10">
      <p className="text-[#44233B] text-lg font-medium">
        There are no upcoming events at the moment.
      </p>
    </div>
  ) : (
    <>
      {/* Event Cards */}
      <div className="w-full lg:w-5/6 flex flex-col gap-6">
        {eventsState.map((item, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.015 }}
            className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl p-6 flex flex-col md:flex-row gap-6"
          >
            {/* Image */}
            <div className="w-full md:w-[220px] h-[220px] flex-shrink-0 overflow-hidden rounded-xl mx-auto md:mx-0">
              <motion.img
                whileHover={{ scale: 1.05 }}
                src={item.image}
                alt="Event"
                className="w-full h-full object-cover object-center rounded-xl"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col justify-between gap-4 w-full">
              <div>
                <h3 className="text-2xl text-[#44233B] font-bold mb-1">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <img
                  src={calender}
                  alt="calendar"
                  className="w-5 h-5 md:w-6 md:h-6"
                />
                <p className="text-[#FD8F8F] text-sm md:text-base font-medium">
                  {format(new Date(item.eventDate), "dd/MM/yyyy")}
                </p>
              </div>

              <div className="w-full flex justify-end">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#61CE70] text-white font-semibold py-2 px-6 rounded-full shadow-md hover:bg-[#4bb75d] transition"
                >
                  Join Us
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* More Events Button */}
      <div className="mt-8">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/events/upcomingevents")}
          className="bg-[#44233B] text-white text-base md:text-lg font-medium rounded-full px-6 py-3 shadow-md hover:bg-[#2f1727] transition"
        >
          More Events
        </motion.button>
      </div>
    </>
  )}
</div>

  );
}

export default EventsComp;
