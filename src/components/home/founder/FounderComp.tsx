import { FounderData } from "./FounderData";
import founder from "../../../assets/images/founder.png";
import quotation from "../../../assets/svg/quotation.svg";
import LotusFramer from "./LotusFramer";
import { motion } from "framer-motion";

function FounderComp() {
  return (
    <div className="w-full h-full bg-white p-8 py-28 md:p-12 md:py-32 gap-16 lg:gap-0 flex flex-col md:flex-row justify-center items-center">
      <div className="md:w-1/2 h-full flex flex-col gap-6 ">
        <div className="md:h-4/6  relative w-full flex justify-center items-center ">
          <div className="w-full absolute -bottom-64 -right-2 md:-bottom-52 md:-right-2  lg:-bottom-28 lg:-right-5 transform ">
            <LotusFramer />
          </div>

          <motion.img
            whileHover={{
              scale: 1.05,
              transition: {
                duration: 0.3,
              },
            }}
            src={founder}
            alt="founder"
            className="w-4/6 md:w-3/6 z-10 flex justify-center items-center "
          />
        </div>

        <div className="h-2/6 flex flex-col gap-3 justify-center items-center text-[#771700]">
          <div className="flex flex-col justify-center gap-1 items-center">
            <p className="font-semibold text-xs lg:text-sm">
              {FounderData[0].nameheadlinetel}
            </p>
            <p className="font-semibold lg:text-xl">{FounderData[0].nametel}</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-1">
            <p className="text-sm lg:font-medium">
              {FounderData[0].nameheadlineeng}
            </p>
            <p className="font-semibold text-center lg:text-xl">
              {FounderData[0].nameeng}
            </p>
          </div>
        </div>
      </div>

      <div className="md:w-1/2 flex flex-col gap-6 justify-center items-center  ">
        <div className="flex flex-col gap-1 justify-center items-center">
          <img src={quotation} alt="quotation" className="w-6 md:w-8" />
          <p className="lg:w-4/6 text-center text-[#771700] lg:text-xl font-semibold">
            {FounderData[0].poemtel}
          </p>
        </div>
        <p className="lg:w-5/6 text-center text-[#771700] lg:text-xl font-semibold">
          {FounderData[0].poemeng}
        </p>
      </div>
    </div>
  );
}

export default FounderComp;
