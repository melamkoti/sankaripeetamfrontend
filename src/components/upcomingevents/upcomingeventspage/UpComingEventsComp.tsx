import { useState, useEffect } from "react";
import { UserModuleAPI } from "../../../services/AppEndPoints";
import UpComingEventsCard from "./UpComingEventsCard";
import EventsImage from "../../../assets/images/aboutpeetam.png";

type EventType = {
  title: string;
  description: string;
  image: string;
  eventDate: Date;
  youtubeLink: string;
};

type ApiResponse = EventType[];

export default function EventsComp() {
  const [events, setEvents] = useState<EventType[]>([]);
  const [activeTab, setActiveTab] = useState<"upcoming" | "past">("upcoming");

  const EventApiService = UserModuleAPI.UpcomingEventsGet;
  const PastEventsApiService = UserModuleAPI.OldEventsGet;

  // Fetch events whenever activeTab changes
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const apiUrl =
          activeTab === "upcoming" ? EventApiService : PastEventsApiService;

        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data: ApiResponse = await response.json();
        const parsedData = data.map((event) => ({
          ...event,
          eventDate: new Date(event.eventDate),
        }));

        setEvents(parsedData);
      } catch (err) {
        console.error("Error fetching events data: ", err);
      }
    };

    fetchEvents();
  }, [activeTab, EventApiService, PastEventsApiService]);

  return (
    <div className=" min-h-screen  ">
      {/* Header Image */}
      <div className="flex justify-center items-center p-4 ">
        <div
          className="w-[1280px] rounded-xl bg-center bg-cover bg-no-repeat 
             h-[200px] sm:h-[300px] md:h-[500px] lg:h-[740px]"
          style={{
            backgroundImage: `url(${EventsImage})`,
          }}
        ></div>
      </div>

      {/* Title & Subtitle */}
      <div className="text-center mt-16 pb-4">
        <h1 className="text-3xl font-bold ">Events</h1>
        <p className="text-black">
          {" "}
          {activeTab === "upcoming"
            ? "Upcoming Events and Workshops"
            : "Past Events and Workshops"}{" "}
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-between mt-6 w-full max-w-[1280px] mx-auto px-4 sm:px-6 md:px-4">
        <button
          onClick={() => setActiveTab("upcoming")}
          className={`text-[16px] md:text-[20px] px-2 sm:px-20 py-2 font-medium transition w-[48%] ${
            activeTab === "upcoming"
              ? "text-[#D9540F] border-b-[2px] border-[#D9540F]"
              : "text-[#7D7D7D] hover:text-gray-600 border-b-[1px] border-[#7D7D7D]"
          }`}
        >
          Upcoming Events
        </button>
        <button
          onClick={() => setActiveTab("past")}
          className={`text-[16px] md:text-[20px] px-2 sm:px-20 py-2 font-medium transition w-[48%] ${
            activeTab === "past"
              ? "text-[#D9540F] border-b-[2px] border-[#D9540F]"
              : "text-[#7D7D7D] hover:text-gray-600 border-b-[1px] border-[#7D7D7D]"
          }`}
        >
          Past Events
        </button>
      </div>

      {/* Event Cards */}

      <div className="grid grid-cols-1 gap-6 mt-6 px-4 sm:px-6 md:px-0 py-6  w-full max-w-[1280px] mx-auto">
        {events.length > 0 ? (
          events.map((item, index) => (
            <UpComingEventsCard
              item={item}
              key={index}
              activeTab={activeTab}
              index={0}
            />
          ))
        ) : (
          <p className="text-center text-gray-500 py-10">
            No {activeTab} events available.
          </p>
        )}
      </div>
    </div>
  );
}
