import founder from "../../../assets/images/founder.png";



function FounderComp() {
   
   
  return (
  <div className="w-full bg-[#C9DDD0] px-6 py-8 md:py-0 md:pt-10 md:px-12  flex flex-col md:flex-row items-center gap-16 overflow-hidden">
  
  {/* Left Column - Image */}
  <div className="md:w-1/2 flex justify-center ">
    <img
      src={founder} // replace with your founder image path
      alt="Brahmasri Nemmikanti Narsaiah Acharya"
      className="w-4/6 md:w-[600px] md:h-[600px] object-contain"
    />
  </div>

  {/* Right Column - Content */}
  <div className="md:w-1/2 flex flex-col gap-4 ">
  <div className="text-center lg:text-left">
    <h2 className="text-[#004771] text-[20px] md:text-[32px] font-semibold tracking-wide">
      Brahmasri Nemmikanti <br /> Narasaiah Acharya
    </h2>
    <p className="text-[16px] font-normal md:font-medium md:text-[20px]">
      Founder and Peethadhipathi
    </p>
    </div>
    <p className=" text-[16px] font-normal md:text-[18px] leading-relaxed text-justify">
      Sri Brahmasri Nemmikanti Narsaiahcharyulu has shown interest in both Chowdeswari Upasana as well as sculptor. As time passed, he fully pledged his time to upasana for deities of Chowdeswari, Lalita Parameswari, Dhakshina Kali and mastered Jyothishyam, Vastu and Shastra, thereby giving suggestions and directions for the needy people along with his students and became a Sathguru.
    </p>
    <div className="flex flex-col gap-2 my-4">
      <a href="/about/peetadhipathi" className="text-[#066FAE] font-normal text-[16px]  lg:text-[18px]">
        About Peethadhipathi &gt;
      </a>
      <a href="/about/peetam" className="text-[#066FAE] font-normal text-[16px] lg:text-[18px]">
        About Sanathana Sankari Peetam &gt;
      </a>
    </div>
  </div>

</div>


  );
}

export default FounderComp;
