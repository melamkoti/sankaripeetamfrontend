import { useState } from "react";
import { cards } from "./CardData";
import { Card } from "./Card";

const CardSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [activeButton, setActiveButton] = useState<string | null>(null);

  const handleNext = () => {
    setActiveButton("next");

    setCurrentIndex((prevIndex) =>
      prevIndex <= cards.length - 2 ? prevIndex + 1 : prevIndex
    );
    setTimeout(() => setActiveButton(null), 500);
  };
  function handlePrev() {
    setActiveButton("prev");

    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
    setTimeout(() => setActiveButton(null), 500);
  }

  return (
    <div className="relative w-full overflow-hidden    ">
      <h1 className="text-center lg:text-4xl text-2xl font-semibold	 font-mukta ">
        ADVYTHA ASHRAM CONSTRUCTION ONGOING...
      </h1>
      <div
        className="flex transition-transform ease-in-out duration-500 "
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {cards.map((card) => (
          <div
            key={card.id}
            className="w-full  shrink-0 flex justify-center items-center "
          >
            <button
              onClick={handlePrev}
              className={` md:w-[2%] w-[5%] mx-auto  transform -translate-y-1/2 z-10 py-1 bg-gray-300 text-white rounded-full hover:bg-gray-500   ${
                activeButton === "prev" ? "scale-150" : ""
              }`}
            >
              &#10094;
            </button>
            <Card card={card} />
            <button
              className={`md:w-[2%] w-[5%] mx-auto  transform -translate-y-1/2 py-1 bg-gray-300  text-white rounded-full hover:bg-gray-500  ${
                activeButton === "next" ? "scale-150" : ""
              }`}
              onClick={handleNext}
            >
              &#10095;
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardSlider;
