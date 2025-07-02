import { CardData } from "./CardData";
import { useRef } from "react";
import LeftYarrow from "../../../assets/svg/ChevronLeft.svg";
import RightYarrow from "../../../assets/svg/ChevronRightSmall.svg";

const PujaCard = () => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  const handleScrollRight = () => {
    scrollContainerRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };

  const handleScrollLeft = () => {
    scrollContainerRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };

  return (
    <div className="md:p-12 p-6 bg-gradient-to-b from-[#f7b90c] to-[#fff9db] relative overflow-x-hidden">
      {/* Title */}
      <h1 className="pb-6 md:text-4xl text-2xl font-semibold font-mukta text-white drop-shadow-md text-center tracking-wide">
        SWAMIJI PREVIOUS PUJA & PRATISTA
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
        {CardData.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[250px] bg-white rounded-xl shadow-lg transition-transform transform hover:scale-105 duration-300 ease-in-out"
          >
            <div className="p-4">
              <img
                src={item.image}
                alt={item.title}
                className="rounded-lg w-full object-cover h-[180px]"
              />
              <div className="mt-4 text-center">
                <h2 className="text-xl font-semibold font-mukta text-[#b91c1c]">
                  {item.title}
                </h2>
                <p className="text-sm text-gray-700 mt-1 capitalize font-light">
                  {item.description}
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
