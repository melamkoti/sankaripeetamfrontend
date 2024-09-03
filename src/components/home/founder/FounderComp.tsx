import { FounderData } from "./FounderData";
import founder from "../../../assets/images/founder.png";
import quotation from "../../../assets/svg/quotation.svg";
import LotusFramer from "./LotusFramer";

function FounderComp() {
  return (
    <div className="w-full h-full bg-white p-12 py-32 flex justify-center items-center">
      <div className="w-1/2 h-full flex flex-col gap-6 ">
        <div className="h-4/6  relative w-full flex justify-center items-center ">
        <div className="w-full absolute -bottom-28 -right-5 transform ">

        <LotusFramer />
        </div>

        
          <img
            src={founder}
            alt="founder"
            className="w-3/6 z-50 flex justify-center items-center "
          />
        </div>

        <div className="h-2/6 flex flex-col gap-3 justify-center items-center text-[#771700]">
          <div className="flex flex-col justify-center gap-1 items-center">
            <p className="font-semibold text-sm">
              {FounderData[0].nameheadlinetel}
            </p>
            <p className="font-semibold text-xl">{FounderData[0].nametel}</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-1">
            <p className="font-medium">{FounderData[0].nameheadlineeng}</p>
            <p className="font-semibold text-xl">{FounderData[0].nameeng}</p>
          </div>
        </div>
      </div>

      <div className="w-1/2 flex flex-col gap-6 justify-center items-center  ">
        <div className="flex flex-col gap-1 justify-center items-center">
          <img src={quotation} alt="quotation" className="w-8" />
          <p className="w-4/6 text-center text-[#771700] text-xl font-semibold">
            {FounderData[0].poemtel}
          </p>
        </div>
        <p className="w-5/6 text-center text-[#771700] text-xl font-semibold">
          {FounderData[0].poemeng}
        </p>
      </div>
    </div>
  );
}

export default FounderComp;