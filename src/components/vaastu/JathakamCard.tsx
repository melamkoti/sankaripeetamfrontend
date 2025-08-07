import jathakamBanner from "../../assets/images/jathakamm.jpeg";

const JathakamCard = () => {
  return (
    <div className="flex justify-center items-center py-4 bg-[#E9E5DF] ">
      <div
        className="w-[90%] rounded-xl bg-center bg-cover bg-no-repeat 
             h-[200px] sm:h-[300px] md:h-[500px] lg:h-[740px] relative"
        style={{
          backgroundImage: `url(${jathakamBanner})`,
        }}
      >
        {" "}
        <h1 className="md:text-6xl text-xl tracking-wider font-semibold text-white z-10 absolute bottom-4 left-1/2 transform -translate-x-1/2">
          వాస్తు సంగ్రహం
        </h1>
      </div>
    </div>
  );
};

export default JathakamCard;
