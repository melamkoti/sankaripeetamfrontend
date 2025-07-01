import { CardData } from "./CardData";
import { useRef } from "react";

const PujaCard = () => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  const handleScrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };
  return (
    <div className="md:p-12 p-6 bg-[#f7b90c] relative overflow-x-hidden ">
      <h1 className="text-end pb-6 md:text-4xl text-2xl font-semibold font-mukta md:px-44 text-white">
        SWAMIJI PREVIOUS PUJA & PRATISTA
      </h1>

      {/* Absolute overlay div */}
      <div className="bg-[#f7b90c] absolute z-10 top-0 bottom-0 left-0  lg:w-[500px] border-none flex justify-center items-center">
        {/* Overlay space for the starting position of the scroll */}{" "}
        <button
          onClick={handleScrollRight}
          className="absolute top-1/2 left-1  lg:left-12 bg-white rounded-full p-2 shadow-lg z-10 cursor-pointer"
        >
          <span className="text-xl font-bold">{"<"}</span>
        </button>
      </div>

      {/* Scrollable cards container */}
      <div
        className="flex gap-5 lg:pl-[500px] overflow-x-auto hide-scrollbar "
        ref={scrollContainerRef}
      >
        {CardData.map((item, index) => (
          <div
            className="flex-shrink-0 flex flex-col justify-center items-center gap-2 w-[250px] m-4 rounded-md shadow-lg bg-white"
            key={index}
          >
            <div className="m-6 rounded-lg">
              <img
                src={item.image}
                alt={item.title}
                className="rounded-lg w-full hover:scale-105 ease-out"
              />
            </div>
            <div className="flex flex-col justify-center items-center">
              <h2 className="text-2xl font-mukta font-light">{item.title}</h2>
              <p className="p-2 text-sm text-center capitalize">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PujaCard;
