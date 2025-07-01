interface UpComingEventsCardProps {
  item: {
    title: string;
    image?: string; // Optional image
    description: string;
    eventDate: Date;
  };
  index: number;
}

export default function UpComingEventsCard({
  item,
  index,
}: UpComingEventsCardProps) {
  return (
    <div
  className="relative w-full flex flex-col md:flex-row gap-6 p-6 bg-white shadow-lg rounded-2xl border border-gray-200 hover:shadow-xl transition duration-300"
  key={index}
>
  {/* Left: Title + Image */}
  <div className="flex flex-col items-start gap-4 md:w-1/2">
    <h2 className="text-2xl font-bold text-[#44233B]">{item.title}</h2>
    <div className="w-full h-auto max-h-60 overflow-hidden rounded-xl">
      <img
        className="w-full h-full object-cover rounded-xl"
        src={item.image}
        alt="event"
      />
    </div>
  </div>

  {/* Right: Description + Date + Button */}
  <div className="relative flex flex-col gap-4 md:w-1/2  p-4 rounded-xl">

  {/* Event Date Badge at top */}
  <div className="absolute top-2 right-2 bg-green-100 text-green-800 px-3 py-1 rounded-lg flex items-center gap-2 text-sm shadow-sm">
    <span>Event is on</span>
    <strong>{new Date(item.eventDate).toLocaleDateString()}</strong>
  </div>

  {/* Description */}
  <p className="text-gray-700 text-base leading-relaxed mt-6">
    {item.description}
  </p>

  {/* Donate Button */}
  <button className="mt-auto w-fit bg-[#F26F29] text-white font-semibold text-sm px-5 py-2 rounded-full shadow hover:bg-orange-600 transition">
    DONATE NOW
  </button>
</div>

</div>

  );
}
