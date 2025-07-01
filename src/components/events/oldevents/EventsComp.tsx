import { useState, useEffect } from "react";
import EventsCard from "./EventsCard";
import axios from "axios";

import { UserModuleAPI } from "../../../services/AppEndPoints";
type PastEventsType = {
  title: string;
  image: string;
  eventDate: Date;
  description: string;
  youtubeLink: string;
};

interface EventData {
  title: string;
  image: string;
  eventDate: string;
  description: string;
  youtubeLink: string;
}

export default function EventsComp() {
  const [pastEventsState, setPastEventsState] = useState<PastEventsType[]>([]);
  const PastEventsApiService = UserModuleAPI.OldEventsGet;

  
  useEffect(() => {
    axios
      .get<EventData[]>(PastEventsApiService)
      .then((response) => {
        const parsedData: PastEventsType[] = response.data.map((event) => ({
          title: event.title,
          image: event.image,
          eventDate: new Date(event.eventDate),
          description: event.description,
          youtubeLink: event.youtubeLink,
        }));
        setPastEventsState(parsedData);
      })
      .catch((error) => {
        console.error("Error fetching events data: ", error);
      });
  }, []);

 return (
  <>
    <div className="flex flex-col md:gap-2 justify-center items-center">
      <p className="text-3xl md:text-4xl font-bold text-[#44233B] tracking-wider mb-6 relative inline-block">
        <span className="relative z-10 px-2"> OLD EVENTS</span>
        <span className="absolute bottom-1 left-0 w-full h-2 bg-[#FFD700] opacity-60 z-0"></span>
      </p>
    </div>

    {pastEventsState.length === 0 ? (
      <div className="flex flex-col items-center justify-center">
        <p className="text-[#44233B] text-lg text-center">
          There are no Old events at the moment.
        </p>
      </div>
    ) : (
      <div className="grid grid-cols-1 lg:grid-cols-2 p-6 gap-8 rounded-lg">
        {pastEventsState.map((item, index) => (
          <div className="flex shadow-lg rounded-lg" key={index}>
            <EventsCard item={item} index={index} />
          </div>
        ))}
      </div>
    )}
  </>
);
}