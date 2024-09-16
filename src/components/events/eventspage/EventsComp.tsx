import { useState, useEffect } from "react";
import EventsCard from "./EventsCard";

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

  useEffect(() => {
    fetch("http://localhost:3000/event/old-events")
      .then((response) => response.json())
      .then((data: EventData[]) => {
        const parsedData: PastEventsType[] = data.map((event) => ({
          title: event.title,
          image: event.image,
          eventDate: new Date(event.eventDate),
          description: event.description,
          youtubeLink: event.youtubeLink,
        }));
        setPastEventsState(parsedData);
      })
      .catch((error) => console.error("Error fetching events data: ", error));
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 p-6 gap-8 rounded-lg">
      {pastEventsState.map((item, index) => (
        <div className="flex shadow-lg rounded-lg" key={index}>
          <EventsCard item={item} index={index} />
        </div>
      ))}
    </div>
  );
}
