import { FounderData } from "./FounderData";
import founder from "../../../assets/images/founder.png";
// import quotation from "../../../assets/svg/quotation.svg";
// import LotusFramer from "./LotusFramer";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";


function FounderComp() {
    const ref = useRef(null);

   const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // Starts when it enters bottom, ends when it leaves top
  });

  // Scale and opacity based on scroll
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 1], [0, 1, 1]);

  return (
    <div className="w-full h-full px-6 py-20 md:px-12 md:py-32 flex flex-col md:flex-row justify-center items-center gap-16 bg-[#f7b90c] relative overflow-hidden">
  {/* Founder Image Section */}
  <div className="md:w-1/2 flex flex-col gap-10 items-center justify-center">
     <div ref={ref} className="w-4/6 md:w-3/6">
      <motion.img
        style={{ scale, opacity }}
        src={founder}
        alt="Founder"
        className="w-full h-auto "
      />
    </div>
  

    {/* Founder Name & Titles */}
    <div className="flex flex-col gap-3 justify-center items-center text-[#771700]">
      <div className="text-center font-ponnala">
        <p className="font-medium text-xs md:text-sm">{FounderData[0].nameheadlinetel}</p>
        <p className="font-bold text-lg md:text-2xl">{FounderData[0].nametel}</p>
      </div>
      <div className="text-center font-ponnala mt-2">
        <p className="text-sm font-medium">{FounderData[0].nameheadlineeng}</p>
        <p className="font-bold text-lg md:text-2xl">{FounderData[0].nameeng}</p>
      </div>
     
    </div>
  </div>

  {/* Optional Quote/Poem Section (you had commented out) */}
  {/* 
  <div className="md:w-1/2 flex flex-col items-center gap-6">
    <div className="text-center">
      <img src={quotation} alt="quotation" className="w-6 md:w-8 mx-auto mb-2" />
      <p className="text-[#771700] text-base md:text-xl font-semibold lg:w-4/6 mx-auto">
        {FounderData[0].poemtel}
      </p>
    </div>
    <p className="text-[#771700] text-base md:text-xl font-semibold text-center lg:w-5/6 mx-auto">
      {FounderData[0].poemeng}
    </p>
  </div>
  */}
</div>

  );
}

export default FounderComp;
