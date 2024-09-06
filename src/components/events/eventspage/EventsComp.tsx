import EventsCard from "./EventsCard";
import { EventsData } from "./EventsData";
import {useState,useEffect} from "react";
type PastEventsType = {
  title: string;
  image: string;
  date: string;
  description: string;
};
export default function EventsComp() {
  const [pastEventsState, setPastEventsState] = useState<PastEventsType[]>([]);
  useEffect(() => {
    fetch("http://localhost:3000/event")
      .then((response) => response.json())
      .then((data) => setPastEventsState(data))
      .catch((error) => console.error("Error fetching events data: ", error));
  }, []);
  return (
    <div className="grid grid-cols-1  lg:grid-cols-2 p-6 gap-8 rounded-lg">
      {EventsData.map((item, index) => {
        return (
          <div className="flex shadow-lg rounded-lg" key={index}>
            <EventsCard item={item} index={index} />
          </div>
        );
      })}
    </div>
  );
}
