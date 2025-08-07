import PariharaPoojaBanner from "../../../assets/images/pariharapujabanner.png";
import lampImg from "../../../assets/images/pariharapujacornerimage.png";
import { PariharaPoojaData } from "./PariharaPoojaData";
export default function PariharaPoojaComp() {
  return (
    <>
      <div className="flex justify-center items-center py-4 bg-[#E9E5DF] ">
        <div
          className="w-[90%] rounded-xl bg-center bg-cover bg-no-repeat 
             h-[200px] sm:h-[300px] md:h-[500px] lg:h-[740px] relative"
          style={{
            backgroundImage: `url(${PariharaPoojaBanner})`,
          }}
        ></div>
      </div>
      <div className="text-center flex flex-col gap-5 pt-16 px-4 font-bold">
        <div className="flex flex-col gap-4 ">
          <p>సత్యాను సారిణీ లక్ష్మీ | కీర్తి: త్యాగాను సారిణీ ||</p>
          <p>అభ్యాసాను సారిణీ విద్యా | బుద్ధి: కర్మాను సారిణీ ||</p>
        </div>
        <div className="flex flex-col gap-2 px-4 font-light">
          <p>Sathyanusarini Lakshmi | Keerthihi Tyaganusarini ||</p>
          <p>Abhyasanusarini Vidyaa | Buddhihi Karmanusarini ||</p>
        </div>
        <h1 className="text-xl md:text-[32px] font-semibold  tracking-wider z-10 ">
          Parihara Puja
        </h1>
      </div>
      <div className="flex flex-col items-center gap-4 p-4 md:p-6 rounded-xl">
        {PariharaPoojaData.map((item, index) => {
          return (
            <div
              className="flex flex-col md:flex-row items-start gap-4 p-4 md:p-6 bg-white rounded-md shadow-md hover:shadow-xl transition-shadow duration-300 w-full max-w-[95%] md:max-w-[85%]"
              key={index}
            >
              {/* Icon Section */}
              <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full bg-orange-50 shadow-inner flex-shrink-0 mx-auto md:mx-0">
                <img
                  src={lampImg}
                  alt="lamp"
                  className="w-16 h-16 md:w-20 md:h-20 object-cover rounded-full"
                />
              </div>

              {/* Text Section */}
              <div className="flex flex-col gap-2 text-center md:text-left">
                <h1 className="text-[#D9540F] font-semibold text-base md:text-lg tracking-wide">
                  {index + 1}. {item.title}
                </h1>
                <p className="text-gray-800 text-sm md:text-base">
                  {item.content}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center w-full p-3">
        <p className="italic text-[#4B381A] text-center px-6 py-4 text-base bg-[#FED99F] w-[90%] border-l-4 border-l-[#BB7404] rounded-sm">
          <span className="italic ">NOTE :</span> Puja will be conducted as per
          your request. While we pray for your wishes to be fulfilled, ultimate
          outcomes depend on divine grace. The management cannot guarantee
          results and is not responsible for unmet expectations.
        </p>
      </div>
    </>
  );
}
