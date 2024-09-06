export default function UpComingEventsCard({ item, index }) {
  return (
    <div
      className="relative text-black w-full flex items-center flex-col md:flex-row p-5 gap-8 shadow-lg rounded-lg"
      key={index}
    >
      <div className="flex flex-col  items-start justify-start gap-3">
        <p className="text-2xl font-semibold">{item.name}</p>
        <img className="w-full rounded-lg" src={item.img} alt="" />
      </div>
      <div className="flex flex-col gap-3">
        <p className="text-base font-semibold">{item.description}</p>
        <div className="flex items-center gap-2 md:absolute  md:right-2 -top-3 text-slate-900 p-2 rounded-lg bg-green-300">
          <p className="text-sm ">{item.tag}</p>
          <p className="text-sm  font-semibold">{item.date}</p>
        </div>
        <button className=" bg-[#F26F29] w-1/2 text-sm py-1 mt-5 rounded-lg">
          DONATE NOW
        </button>
      </div>
    </div>
  );
}
