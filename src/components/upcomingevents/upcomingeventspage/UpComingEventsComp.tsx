import UpComingEventsCard from "./UpComingEventsCard";
import { useState, useEffect } from "react";

type EventsType = {
  title: string;
  description: string;
  image: string;
  eventDate: Date;
  youtubeLink: string;
};

export default function EventsComp() {
  const [upEvents, setUpEvents] = useState<EventsType[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/event/upcoming-events")
      .then((response) => response.json())
      .then((data: EventsType[]) => {
        const parsedData = data.map((event: EventsType) => ({
          ...event,
          eventDate: new Date(event.eventDate),
        }));
        setUpEvents(parsedData);
      })
      .catch((error) => console.error("Error fetching events data: ", error));
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 p-6 gap-8">
      {upEvents.map((item, index) => {
        return (
          <div className="flex shadow-lg" key={index}>
            <UpComingEventsCard item={item} index={index} />
          </div>
        );
      })}
    </div>
  );
}
