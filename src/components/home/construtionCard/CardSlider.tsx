import aboutusmain from "../../../assets/images/contraction.png";

const CardSlider: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden bg-[#E9E5DF] py-16">
      <div className="text-center">
        <h2 className="text-2xl md:text-[32px] font-semibold ">
          Ashram Projects
        </h2>
        <p className=" text-sm md:text-[20px] font-normal mt-2 mb-2">
          {" "}
          On going Projects{" "}
        </p>
      </div>
      
      <div className="flex justify-center items-center p-4 bg-[#E9E5DF]">
      <div
        className="w-[1280px] rounded-xl bg-center bg-cover bg-no-repeat 
             h-[200px] sm:h-[300px] md:h-[500px] lg:h-[740px]"
        style={{
          backgroundImage: `url(${aboutusmain})`,
        }}
      ></div>
    </div>
      <div className=" md:px-16 lg:px-20 px-4 py-6 flex flex-col justify-between md:text-left ">
        <h3 className="text-xl md:text-[24px] font-semibold text-[#D9540F]">
          Advytha Ashram
        </h3>
        <p className=" text-sm md:text-base mt-2 leading-[150%] text-[18px] font-normal text-justify">
          Sri Brahmasri Nemmikanti Narasaiahcharyulu has shown interest in both
          Chowdeswari Upasana as well as sculptor. As time passed, he fully
          pledged his time to upasana for dieties of Chowdeswari, Lalita
          Parameswari, Dhakshina Kali and mastered Jyothishyam, Vastu and Mantra
          Shastra, thereby giving suggestions and directions for the needy
          people along with his students and became a Sathguru.{" "}
        </p>
        <a
            href="/advythaashram"
            className="text-[#066FAE] font-normal text-sm mt-2  md:text-[18px] tracking-tight"
          >
            For More Details →
          </a>
      </div>
      
    </div>
  );
};

export default CardSlider;
