import { CardProps } from "../../utils/types/Types";

export const Card: React.FC<{ card: CardProps }> = ({ card }) => {
  return (
    <div className="md:flex md:flex-row flex flex-col    w-full max-w-7xl   mx-auto p-4 space-x-4 bg-white  rounded-lg m-6  shadow-lg ">
      {/* Left side: 4-image grid */}
      <div className="grid grid-cols-2 grid-rows-2 gap-4 md:w-1/2 ">
        {card.images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`img-${index}`}
            className={`w-full h-auto object-cover rounded-md shadow-lg md:hover:scale-150 hover:scale-110 duration-700	 hover:z-10 `}
          />
        ))}
      </div>

      {/* Right side: Related content */}
      <div className="md:w-1/2 flex flex-col justify-center items-center mt-2  ">
        <div className="border-l-4 border-t border-[#AD3501] shadow-lg py-4 px-2 rounded-lg">
          <h3 className="text-xl font-bold px-2">{card.content.title}</h3>
          <p className="mt-2 text-gray-600 px-2">{card.content.description}</p>
        </div>
      </div>
    </div>
  );
};
