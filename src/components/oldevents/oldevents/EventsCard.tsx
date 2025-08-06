import React from "react";

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
      className=" bg-gray-100 relative w-full flex flex-col md:flex-row gap-6 p-6  shadow-lg rounded-2xl  hover:shadow-xl transition duration-300"
      key={index}
    >
      {/* Left: Title + Image */}
      <div className="flex flex-col items-start gap-4 md:w-1/2">
        <h2 className="text-2xl font-bold text-[#44233B]">{item.title}</h2>
        <div className="w-full h-auto max-h-60 overflow-hidden rounded-xl">
          <img
            className="w-full h-full object-cover rounded-xl opacity-30"
            src={item.image}
            alt="event"
          />
        </div>
      </div>

      {/* Right: Description + Date + Button */}
      <div className="relative flex flex-col gap-4 md:w-1/2  p-4 rounded-xl">
        {/* Event Date Badge at top */}

        <div className="absolute top-0 right-0 bg-[#AD3501] text-white px-3 py-1 rounded-full text-xs shadow opacity-90">
          Event happened on {new Date(item.eventDate).toLocaleDateString()}
        </div>

        {/* Description */}

        <p className=" text-gray-700 text-base leading-relaxed mt-6  md:text-lg overflow-y-auto max-h-[10.5rem] leading-snug thin-scrollbar">
          {item.description}
        </p>
      </div>
    </div>
  );
};

export default EventsCard;
