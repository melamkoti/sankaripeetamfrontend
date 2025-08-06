import aboutusmain from "../../../assets/images/contraction.png";

const CardSlider: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden bg-[#E9E5DF] py-6">
      <div className="text-center">
        <h2 className="text-2xl md:text-[32px] font-semibold ">
          Ashram Projects
        </h2>
        <p className=" text-sm md:text-[20px] font-normal mt-2">
          {" "}
          On going Projects{" "}
        </p>
      </div>
      <div className="flex justify-center items-center p-6 bg-[#E9E5DF]">
        <div
          className=" rounded-xl"
          style={{
            backgroundImage: `url(${aboutusmain})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "1316px",
            height: "740px",
            flexShrink: 0,
            aspectRatio: "313 / 176",
          }}
        ></div>
      </div>
      <div className="px-32 py-6 flex flex-col justify-between ">
        <h3 className="text-xl md:text-[24px] font-semibold text-[#D9540F]">
          Advytha Ashram
        </h3>
        <p className=" text-sm md:text-base mt-2 leading-snug text-[18px] font-normal">
          Sri Brahmasri Nemmikanti Narasaiahcharyulu has shown interest in both
          Chowdeswari Upasana as well as sculptor. As time passed, he fully
          pledged his time to upasana for dieties of Chowdeswari, Lalita
          Parameswari, Dhakshina Kali and mastered Jyothishyam, Vastu and Mantra
          Shastra, thereby giving suggestions and directions for the needy
          people along with his students and became a Sathguru.{" "}
        </p>
        <a
            href="/activities/parihara"
            className="text-[#066FAE] font-normal text-sm mt-2 hover:underline md:text-[18px] tracking-tight"
          >
            For More Details →
          </a>
      </div>
      
    </div>
  );
};

export default CardSlider;
