import { useState, useEffect } from "react";
import { format } from "date-fns";
import { UserModuleAPI } from "../../../services/AppEndPoints";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Location from "../../../assets/svg/location-pin-svgrepo-com.svg";
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
    <div className="bg-[#E9E5DF] p-4 md:px-8 flex flex-col items-center gap-4  ">
      {/* Header */}

      <div className="text-center my-4 md:my-6">
        <h2 className="text-2xl md:text-[32px] font-semibold ">Events</h2>
        <p className=" text-sm md:text-[20px] font-normal mt-2">
          {" "}
          Upcoming Events and Workshops
        </p>
      </div>

      {isLoading ? (
        <div className="w-full flex justify-center items-center py-10">
          <p className="text-lg font-medium text-[#44233B]">
            Loading events...
          </p>
        </div>
      ) : eventsState.length === 0 ? (
        <div className="w-full flex justify-center items-center py-10">
          <p className="text-[#44233B] text-lg font-medium">
            There are no upcoming events at the moment.
          </p>
        </div>
      ) : (
        <>
          <div className="flex flex-col gap-6   max-w-[1280px]">
            {eventsState.slice(0, 4).map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[10px] shadow-lg overflow-hidden flex flex-col lg:flex-row lg:min-h-[300px] transition-all duration-300  "
              >
                {/* Image Section */}
                <div className=" w-full lg:w-[400px] h-[300px] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                

                {/* Content Section */}
                <div className="p-4 lg:p-0 lg:px-8 lg:pt-6 flex flex-col justify-between lg:w-3/4">
                  <div>
                    <h3 className="text-2xl font-bold text-[#D9540F]">
                      {item.title}
                    </h3>
                    <p className="text-sm md:text-base mt-2 leading-snug text-[18px] font-normal max-h-30  font-anek 
              line-clamp-3 overflow-hidden text-ellipsis">
                      {item.description}
                    </p>
                  </div>

                  {/* Date & Location */}
                  <div className="flex flex-col lg:flex-row lg:items-center gap-2 text-sm md:text-base mt-4">
                    <div className="flex items-center gap-2 ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="21"
                        height="24"
                        viewBox="0 0 21 24"
                        fill="none"
                      >
                        <path
                          d="M0 21.75C0 22.9922 1.00781 24 2.25 24H18.75C19.9922 24 21 22.9922 21 21.75V9H0V21.75ZM15 12.5625C15 12.2531 15.2531 12 15.5625 12H17.4375C17.7469 12 18 12.2531 18 12.5625V14.4375C18 14.7469 17.7469 15 17.4375 15H15.5625C15.2531 15 15 14.7469 15 14.4375V12.5625ZM15 18.5625C15 18.2531 15.2531 18 15.5625 18H17.4375C17.7469 18 18 18.2531 18 18.5625V20.4375C18 20.7469 17.7469 21 17.4375 21H15.5625C15.2531 21 15 20.7469 15 20.4375V18.5625ZM9 12.5625C9 12.2531 9.25313 12 9.5625 12H11.4375C11.7469 12 12 12.2531 12 12.5625V14.4375C12 14.7469 11.7469 15 11.4375 15H9.5625C9.25313 15 9 14.7469 9 14.4375V12.5625ZM9 18.5625C9 18.2531 9.25313 18 9.5625 18H11.4375C11.7469 18 12 18.2531 12 18.5625V20.4375C12 20.7469 11.7469 21 11.4375 21H9.5625C9.25313 21 9 20.7469 9 20.4375V18.5625ZM3 12.5625C3 12.2531 3.25312 12 3.5625 12H5.4375C5.74687 12 6 12.2531 6 12.5625V14.4375C6 14.7469 5.74687 15 5.4375 15H3.5625C3.25312 15 3 14.7469 3 14.4375V12.5625ZM3 18.5625C3 18.2531 3.25312 18 3.5625 18H5.4375C5.74687 18 6 18.2531 6 18.5625V20.4375C6 20.7469 5.74687 21 5.4375 21H3.5625C3.25312 21 3 20.7469 3 20.4375V18.5625ZM18.75 3H16.5V0.75C16.5 0.3375 16.1625 0 15.75 0H14.25C13.8375 0 13.5 0.3375 13.5 0.75V3H7.5V0.75C7.5 0.3375 7.1625 0 6.75 0H5.25C4.8375 0 4.5 0.3375 4.5 0.75V3H2.25C1.00781 3 0 4.00781 0 5.25V7.5H21V5.25C21 4.00781 19.9922 3 18.75 3Z"
                          fill="#D14747"
                        />
                      </svg>
                      <span className=" font-normal lg:font-medium text-[16px] md:text-[18px]">
                        {format(new Date(item.eventDate), "dd/MM/yyyy")}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 md:text-[18px]">
                      <img src={Location} />
                      <span className=" font-normal lg:font-medium  text-[16px] md:text-[18px] ">
                        Sankari Peetam, Hyderabad
                      </span>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col lg:flex lg:flex-row gap-3  justify-center lg:justify-start    w-full lg:border-t-[1px] lg:border-[#D9B886] py-6">
                    <button
                      onClick={() => navigate("/contactus")}
                      className="bg-[#8E512C] hover:bg-[#6f3510] text-white py-[12px] px-[32px] lg:rounded-md"
                    >
                      Contact Us
                    </button>
                    <button
                      onClick={() => navigate("/donate")}
                      className="bg-[#8E512C] hover:bg-[#6f3510] text-white py-[12px] px-[32px] lg:rounded-md"
                    >
                      Donate
                    </button>
                    <button
                      onClick={() => navigate("/contactus")}
                      className="bg-[#8E512C] hover:bg-[#6f3510] text-white py-[12px] px-[32px] lg:rounded-md"
                    >
                      Join Us
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {/* View All Events Button */}
      <button
        onClick={() => navigate("/events")}
        className="bg-[#8E512C] hover:bg-[#6f3510] text-white w-full rounded-md py-[12px] shadow-md text-[16px] max-w-[1280px] mt-4"
      >
        View All Events →
      </button>
    </div>
  );
}

export default EventsComp;
