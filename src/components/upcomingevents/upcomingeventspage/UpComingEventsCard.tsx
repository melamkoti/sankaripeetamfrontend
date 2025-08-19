import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
import Location from "../../../assets/svg/location-pin-svgrepo-com.svg";
import PastLocation from "../../../assets/svg/location-past-events.svg";

interface UpComingEventsCardProps {
  item: {
    title: string;
    image?: string; // Optional image
    description: string;
    eventDate: Date;
  };
  index: number;
  activeTab: string;
}

export default function UpComingEventsCard({
  activeTab,
  item,
  index,
}: UpComingEventsCardProps) {
  const navigate = useNavigate();
  return (
    <div
      className="w-full  flex flex-col gap-6 md:p-4 "
      key={`${item.title}-${index}`}
    >
      <div
        className={`${
          activeTab === "past" ? "bg-[#F6F6F6]" : "bg-white"
        } rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row`}
      >
        {/* Image */}
        {/* <div className=" md:w-3/5 h-full w-full lg:h-[300px] overflow-hidden">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover"
          />
        </div> */}
        <div className="w-full md:w-3/5 h-[200px] md:h-[350px] lg:h-[300px] overflow-hidden ">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Content */}
        <div className=" p-4 lg:p-0 lg:px-8 lg:pt-6 flex flex-col justify-between w-full relative">
          <div>
            <h3 className="text-xl md:text-[24px] font-semibold text-[#D9540F]">
              {item.title}
            </h3>
            <p
              className={` ${
                activeTab === "past" && " text-[#A2A2A2]"
              } text-sm md:text-base mt-2 leading-snug text-[18px] font-normal max-h-30 overflow-y-auto`}
            >
              {item.description}
            </p>
          </div>

          {/* Date & Location */}
          <div className="flex flex-col lg:flex-row lg:items-center gap-4 text-sm md:text-base mt-4">
            <div className="flex items-center gap-2 ">
              {activeTab === "upcoming" && (
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
              )}
              {activeTab === "past" && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="24"
                  viewBox="0 0 21 24"
                  fill="none"
                >
                  <path
                    d="M0 21.75C0 22.9922 1.00781 24 2.25 24H18.75C19.9922 24 21 22.9922 21 21.75V9H0V21.75ZM15 12.5625C15 12.2531 15.2531 12 15.5625 12H17.4375C17.7469 12 18 12.2531 18 12.5625V14.4375C18 14.7469 17.7469 15 17.4375 15H15.5625C15.2531 15 15 14.7469 15 14.4375V12.5625ZM15 18.5625C15 18.2531 15.2531 18 15.5625 18H17.4375C17.7469 18 18 18.2531 18 18.5625V20.4375C18 20.7469 17.7469 21 17.4375 21H15.5625C15.2531 21 15 20.7469 15 20.4375V18.5625ZM9 12.5625C9 12.2531 9.25313 12 9.5625 12H11.4375C11.7469 12 12 12.2531 12 12.5625V14.4375C12 14.7469 11.7469 15 11.4375 15H9.5625C9.25313 15 9 14.7469 9 14.4375V12.5625ZM9 18.5625C9 18.2531 9.25313 18 9.5625 18H11.4375C11.7469 18 12 18.2531 12 18.5625V20.4375C12 20.7469 11.7469 21 11.4375 21H9.5625C9.25313 21 9 20.7469 9 20.4375V18.5625ZM3 12.5625C3 12.2531 3.25312 12 3.5625 12H5.4375C5.74687 12 6 12.2531 6 12.5625V14.4375C6 14.7469 5.74687 15 5.4375 15H3.5625C3.25312 15 3 14.7469 3 14.4375V12.5625ZM3 18.5625C3 18.2531 3.25312 18 3.5625 18H5.4375C5.74687 18 6 18.2531 6 18.5625V20.4375C6 20.7469 5.74687 21 5.4375 21H3.5625C3.25312 21 3 20.7469 3 20.4375V18.5625ZM18.75 3H16.5V0.75C16.5 0.3375 16.1625 0 15.75 0H14.25C13.8375 0 13.5 0.3375 13.5 0.75V3H7.5V0.75C7.5 0.3375 7.1625 0 6.75 0H5.25C4.8375 0 4.5 0.3375 4.5 0.75V3H2.25C1.00781 3 0 4.00781 0 5.25V7.5H21V5.25C21 4.00781 19.9922 3 18.75 3Z"
                    fill="#A2A2A2"
                  />
                </svg>
              )}
              <span
                className={` text-md md:text-[18px]  ${
                  activeTab === "past" && "line-through text-[#A2A2A2]"
                } `}
              >
                {format(new Date(item.eventDate), "dd/MM/yyyy")}
              </span>
            </div>
            <div className="flex items-center gap-2 md:text-[18px]">
              {activeTab === "upcoming" && (
                <img
                  src={Location}
                  alt="Location icon"
                  className="w-5 h-5 flex-shrink-0" // Set fixed dimensions
                />
              )}
              {activeTab === "past" && (
                <img
                  src={PastLocation}
                  alt="Location icon"
                  className="w-5 h-5 flex-shrink-0" // Set fixed dimensions
                />
              )}
              <span
                className={`font-medium text-md md:text-[18px] truncate ${
                  activeTab === "past"
                    ? "line-through text-[#A2A2A2]"
                    : "text-current"
                }`}
              >
                Sankari Peetam, Hyderabad
              </span>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row gap-3 justify-center lg:justify-start    lg:border-t-[1px] lg:border-[#D9B886] py-6">
            {activeTab === "upcoming" && (
              <>
                <div className="flex flex-col  md:flex-row gap-3 justify-center lg:justify-start    w-full">
                  <button
                    onClick={() => navigate("/contactus")}
                    className="bg-[#8E512C] hover:bg-[#6f3510] text-white py-[12px] px-[32px] md:rounded-md "
                  >
                    Contact Us
                  </button>
                  <button
                    onClick={() => navigate("/donate")}
                    className="bg-[#8E512C] hover:bg-[#6f3510] text-white py-[12px] px-[32px] md:rounded-md"
                  >
                    Donate
                  </button>
                  <button
                    onClick={() => navigate("/contactus")}
                    className="bg-[#8E512C] hover:bg-[#6f3510] text-white py-[12px] px-[32px] md:rounded-md"
                  >
                    Join Us
                  </button>
                </div>
              </>
            )}
            {activeTab === "past" && (
              <div className="  bg-[#F3C2C2] text-[#CD4513] px-8 py-2 rounded-md font-medium text-[15px]">
                Event happened on{" "}
                {new Date(item.eventDate).toLocaleDateString()}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
