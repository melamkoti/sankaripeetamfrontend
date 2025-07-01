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
  className="relative w-full text-black rounded-xl overflow-hidden shadow-lg p-4 md:p-6"
  key={index}
>
  {/* Blurred background overlay */}
  <div className="absolute inset-0 bg-[#eeeee4] backdrop-blur-2xl opacity-90 z-10 rounded-xl"></div>

  {/* Foreground content */}
  <div className="relative z-20 flex flex-col md:flex-row items-center gap-6">
    
    {/* Image */}
    <div className="w-full md:w-1/2 rounded-xl overflow-hidden">
      <img
        className="w-full h-full object-cover rounded-xl opacity-80 transition hover:opacity-100"
        src={item.image}
        alt="event"
      />
    </div>

    {/* Textual Content */}
    <div className="flex flex-col gap-4 w-full md:w-1/2 relative">
      
      {/* Title */}
      <p className="text-2xl font-bold text-[#44233B]">{item.title}</p>

      {/* Description */}
      <p className="text-base font-medium text-gray-700 leading-relaxed">{item.description}</p>

      {/* Event Date Badge */}
      <div className="absolute top-0 right-0 bg-[#AD3501] text-white px-3 py-1 rounded-full text-xs shadow opacity-90">
        Event happened on {new Date(item.eventDate).toLocaleDateString()}
      </div>

      {/* YouTube Link */}
      <div>
        <NavLink
          to={item.youtubeLink}
          className="text-[#AD3501] underline font-semibold hover:text-[#8a2c00] transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          Watch it on YOUTUBE
        </NavLink>
      </div>
    </div>
  </div>
</div>

  );
};

export default EventsCard;
