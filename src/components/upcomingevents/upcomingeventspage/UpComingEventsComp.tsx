import UpComingEventsCard from "./UpComingEventsCard";
import { useState, useEffect } from "react";
import { UserModuleAPI } from "../../../services/AppEndPoints";

type EventType = {
  title: string;
  description: string;
  image: string;
  eventDate: Date;
  youtubeLink: string;
};

type ApiResponse = EventType[];

export default function EventsComp() {
  const [upEvents, setUpEvents] = useState<EventType[]>([]);

  const EventApiService = UserModuleAPI.UpcomingEventsGet;

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch(EventApiService);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data: ApiResponse = await response.json();

        const parsedData = data.map((event) => ({
          ...event,
          eventDate: new Date(event.eventDate),
        }));

        setUpEvents(parsedData);
      } catch (err) {
        console.error("Error fetching events data: ", err);
      }
    };

    fetchEvents();
  }, [EventApiService]);


  

  return (
    <>
      <div className="flex flex-col md:gap-2 justify-center items-center">
        <p className="text-3xl md:text-4xl font-bold text-[#44233B] tracking-wider my-6 relative inline-block">
          <span className="relative z-10 px-2"> CURRENT EVENTS</span>
          <span className="absolute bottom-1 left-0 w-full h-2 bg-[#FFD700] opacity-60 z-0"></span>
        </p>
      </div>
      {upEvents.length === 0 ? (
        <div className=" flex flex-col items-center justify-center ">
          <p className="text-[#44233B] text-lg text-center">
            There are no upcoming events at the moment.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 p-6 gap-8">
          {upEvents.map((item, index) => (
            <div className="flex shadow-lg" key={`${item.title}-${index}`}>
              <UpComingEventsCard item={item} index={index} />
            </div>
          ))}
        </div>
      )}
    </>
  );
}
