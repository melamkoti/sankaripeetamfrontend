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
    
    <div className="relative w-full overflow-hidden bg-gradient-to-b from-[#fff9e6] to-[#fefae0] shadow-inner py-6">
  {/* Title */}
  <h1 className="text-center text-2xl lg:text-4xl font-semibold font-mukta text-red-700 tracking-wide mb-6">
    ADVYTHA ASHRAM CONSTRUCTION ONGOING...
  </h1>

  {/* Slider Container */}
  <div
    className="flex transition-transform duration-700 ease-in-out"
    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
  >
    {cards.map((card) => (
      <div
        key={card.id}
        className="w-full shrink-0 flex justify-center items-center relative"
      >
        {/* Prev Button */}
        <button
          onClick={handlePrev}
          className={`absolute left-2 md:left-8 top-1/2 transform -translate-y-1/2 z-20 bg-[#FFD700] text-red-800 p-2 rounded-full shadow-md hover:scale-110 transition-all ${
            activeButton === "prev" ? "scale-125" : ""
          }`}
        >
          &#10094;
        </button>

        {/* Card */}
        <Card card={card} />

        {/* Next Button */}
        <button
          onClick={handleNext}
          className={`absolute right-2 md:right-8 top-1/2 transform -translate-y-1/2 z-20 bg-[#FFD700] text-red-800 p-2 rounded-full shadow-md hover:scale-110 transition-all ${
            activeButton === "next" ? "scale-125" : ""
          }`}
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
