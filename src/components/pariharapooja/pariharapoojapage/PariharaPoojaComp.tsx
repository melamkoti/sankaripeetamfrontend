import PariharaPoojaBanner from "../../../assets/images/pariharapujabanner.png";
import lampImg from "../../../assets/images/pariharapujacornerimage.png";
import { PariharaPoojaData } from "./PariharaPoojaData";
export default function PariharaPoojaComp() {
  return (
    <>
      <div className="flex justify-center items-center p-4 md:py-4 md:px-2 lg:px-0 max-w-[1280px] mx-auto">
        <div
          className="w-full rounded-xl bg-center bg-cover bg-no-repeat 
             h-[200px] sm:h-[300px] md:h-[500px] lg:h-[740px] relative"
          style={{
            backgroundImage: `url(${PariharaPoojaBanner})`,
          }}
        ></div>
      </div>
      <h1 className="text-xl md:text-[32px] font-semibold  tracking-wider z-10 text-center pt-12">
        Parihara Puja
      </h1>
     
      <div className="w-full h-full px-6 py-20 md:px-12 md:py-32 flex flex-col md:flex-row justify-center items-center gap-16 bg-[#E9E5DF] relative overflow-hidden">
        {/* Optional Quote/Poem Section (you had commented out) */}

        <div className="md:w-1/2 flex flex-col items-center gap-8">
          <div className="text-center">
            <p className="text-[12px] md:text-[20px] font-semibold md:font-bold lg:w-4/6 mx-auto font-anek tracking-wider">
              సత్యాను సారిణీ లక్ష్మీ | కీర్తి: త్యాగాను సారిణీ || అభ్యాసాను
              సారిణీ విద్యా | బుద్ధి: కర్మాను సారిణీ ||
            </p>
          </div>
          <p className="text-base md:text-xl font-medium text-center  mx-auto ">
           Sathyanusarini Lakshmi | Keerthihi Tyaganusarini || <br />{" "}
            Abhyasanusarini Vidyaa | Buddhihi Karmanusarini ||{" "}
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-8 p-4 md:px-2  rounded-xl max-w-[1280px] mx-auto ">
        {PariharaPoojaData.map((item, index) => {
          return (
            <div
              className="flex flex-col md:flex-row items-start gap-6 p-6  bg-white rounded-md shadow-md hover:shadow-xl transition-shadow duration-300 w-full  "
              key={index}
            >
              {/* Icon Section */}
              <div className="w-24 h-24 md:w-40 md:h-40 flex items-center justify-center rounded-full bg-orange-50 shadow-inner flex-shrink-0 mx-auto md:mx-0">
                <img
                  src={lampImg}
                  alt="lamp"
                  className="w-24 h-24 md:w-full md:h-full object-cover rounded-full"
                />
              </div>

              {/* Text Section */}
              <div className="flex flex-col gap-2 text-center md:text-left pl-4">
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
