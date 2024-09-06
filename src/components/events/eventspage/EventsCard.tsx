import { NavLink } from "react-router-dom";
export default function EventsCard({ item, index }) {
  return (
    <div
      className="relative text-black w-full flex items-center p-5 rounded-lg"
      key={index}
    >
      <div className="absolute inset-0 bg-[#eeeee4] backdrop-blur-3xl opacity-95 z-10 roudned-lg"></div>
      <div className="relative z-20 flex flex-col w-full items-center gap-4 md:flex-row">
        <div className="w-1/2">
          <img className="w-full rounded-lg opacity-60" src={item.img} alt="" />
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-2xl font-bold">{item.name}</p>
          <p className="text-base font-semibold">{item.description}</p>
          <div className="md:absolute md:right-0 flex items-center gap-2 p-2 text-white bg-[#AD3501] rounded-lg opacity-60">
            <p className="text-[14px] ">{item.tag}</p>
            <p className="text-[14px] ">{item.date}</p>
          </div>
          <div>
            <NavLink className='text-[#AD3501] underline'  to ="/">Watch it on YOUTUBE </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
