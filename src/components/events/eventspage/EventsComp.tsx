import EventsCard from "./EventsCard";
import { EventsData } from "./EventsData";
export default function EventsComp() {
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
