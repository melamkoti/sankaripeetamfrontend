import jathakamBanner from "../../assets/images/jathakamm.jpeg";

const JathakamCard = () => {
  return (
    <div>
      <div
        className="md:h-[90vh] h-[60vh] flex justify-center items-center "
        style={{
          backgroundImage: `url(${jathakamBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1 className="md:text-6xl text-4xl tracking-wider font-semibold text-white z-10">
          జాతక చక్రం{" "}
        </h1>
      </div>
    </div>
  );
};

export default JathakamCard;
