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
      className="relative text-black w-full flex items-center flex-col md:flex-row p-5 gap-8 shadow-lg rounded-lg "
      key={index}
    >
      <div className="flex flex-col  items-start justify-start gap-3 ">
        <p className="text-2xl font-semibold">{item.title}</p>
        <div className="w-3/4 h-1/3 ">
          <img
            className=" object-cover rounded-lg "
            src={`http://localhost:3000${item.image}`}
            alt=""
          />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <p className="text-base font-semibold">{item.description}</p>
        <div className="flex items-center gap-2 md:absolute  md:right-2 -top-3 text-slate-900 p-2 rounded-lg bg-green-300">
          <p className="text-sm">event is on</p>
          <p className="text-sm  font-semibold">
            {item.eventDate.toLocaleDateString()}
          </p>
        </div>
        <button className=" bg-[#F26F29] mx-auto text-sm py-1 mt-5 px-4 rounded-lg">
          DONATE NOW
        </button>
      </div>
    </div>
  );
}
