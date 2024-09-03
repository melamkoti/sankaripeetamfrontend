import UpComingEventsCard from "./UpComingEventsCard";
import { UpComingEventsData } from "./UpComingEventsData";
export default function EventsComp() {
  return (
    <div className="grid grid-cols-1  lg:grid-cols-2 p-6 gap-8">
      {UpComingEventsData.map((item, index) => {
        return (
          <div className="flex shadow-lg" key={index}>
            <UpComingEventsCard item={item} index={index} />
          </div>
        );
      })}
    </div>
  );
}
