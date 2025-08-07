import { useEffect, useRef, useState } from "react";
import LeftYarrow from "../../../assets/svg/ChevronLeft.svg";
import RightYarrow from "../../../assets/svg/ChevronRightSmall.svg";
import { UserModuleAPI } from "../../../services/AppEndPoints";
import footerClaenderImg from "../../../assets/images/footer-calender.svg";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

type FooterEventsType = {
  image: string;
  date: Date;
  title: string;
  description: string;
};
const PujaCard = () => {
  const [footerEventsState, setFooterPostsState] = useState<FooterEventsType[]>(
    []
  );
  const navigate = useNavigate();

  const AllPostService = UserModuleAPI.AllPostsGet;
  useEffect(() => {
    fetch(AllPostService)
      .then((response) => response.json())
      .then((data) => {
        const parsedData = data.map((event: FooterEventsType) => ({
          ...event,
          date: new Date(event.date),
        }));
        setFooterPostsState(parsedData);
      })
      .catch((error) => console.error("Error fetching events data: ", error));
  }, []);

  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  const handleScrollRight = () => {
    scrollContainerRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };

  const handleScrollLeft = () => {
    scrollContainerRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };
  const handleCardClick = (date: Date) => {
    navigate(`/gallery?date=${date.toISOString()}`);
  };

  return (
    <div className="md:p-12 p-6 bg-[#E9E5DF] relative overflow-x-hidden">
      {/* Title */}
      <h1 className="pb-6 md:text-4xl text-2xl font-semibold font-mukta  drop-shadow-md text-center tracking-wide">
       Our Events Gallery
      </h1>

      {/* Arrows */}
      <button
        onClick={handleScrollLeft}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 z-20 bg-white hover:bg-[#ffdf7f] transition-all duration-300 rounded-full p-3 shadow-xl"
      >
        <img src={LeftYarrow} alt="Scroll Left" className="w-5 h-5" />
      </button>

      <button
        onClick={handleScrollRight}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 z-20 bg-white hover:bg-[#ffdf7f] transition-all duration-300 rounded-full p-3 shadow-xl"
      >
        <img src={RightYarrow} alt="Scroll Right" className="w-5 h-5" />
      </button>

      {/* Scrollable Container */}
      <div
        className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar py-4 px-2"
        ref={scrollContainerRef}
      >
        {footerEventsState
          .sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
          ) // Sort newest first
          .map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 max-w-[280px] bg-white rounded-xl shadow-lg transition-transform transform hover:scale-105 duration-300 ease-in-out cursor-pointer"
              onClick={() => handleCardClick(item.date)}
            >
              <div className="p-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="rounded-lg w-full object-cover h-[180px]"
                />
                <div className="mt-4 ">
                  <p className="flex gap-1">
                    <img src={footerClaenderImg} alt="" />
                    <p>{format(new Date(item.date), "dd/MM/yyyy")}</p>
                  </p>
                  <h2 className="text-xl font-semibold font-mukta text-[#D9540F]">
                    {item.title}
                  </h2>

                  <p className="text-sm  mt-1 capitalize font-light leading-relaxed  overflow-y-auto max-h-[8.5rem] leading-snug mt-2 thin-scrollbar text-left">
                    {item.description}
                  </p>
                  <p className="text-[#066FAE] font-normal text-sm mt-2 hover:underline md:text-[16px] tracking-tight">
                     View Gallery →
                  </p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default PujaCard;
