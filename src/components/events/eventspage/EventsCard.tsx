import React from "react";
import { NavLink } from "react-router-dom";

interface EventItem {
  image: string;
  title: string;
  description: string;
  eventDate: Date;
  youtubeLink: string;
}

interface EventsCardProps {
  item: EventItem;
  index: number;
}

const EventsCard: React.FC<EventsCardProps> = ({ item, index }) => {
  return (
    <div
      className="relative text-black w-full flex items-center p-5 rounded-lg"
      key={index}
    >
      <div className="absolute inset-0 bg-[#eeeee4] backdrop-blur-3xl opacity-95 z-10 rounded-lg"></div>
      <div className="relative z-20 flex flex-col w-full items-center gap-4 md:flex-row">
        <div className="w-1/2">
          <img
            className="w-full rounded-lg opacity-60"
            src={`http://localhost:3000${item.image}`}
            alt=""
          />
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-2xl font-bold">{item.title}</p>
          <p className="text-base font-semibold">{item.description}</p>
          <div className="md:absolute md:right-0 top-3 2xl:top-3 lg:-top-6 flex items-center gap-2 p-2 text-white bg-[#AD3501] rounded-lg opacity-60">
            <p className="text-[14px]">event happened on</p>
            <p className="text-[14px]">{item.eventDate.toLocaleDateString()}</p>
          </div>
          <div>
            <NavLink className="text-[#AD3501] underline" to={item.youtubeLink}>
              Watch it on YOUTUBE
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsCard;
