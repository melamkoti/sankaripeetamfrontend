import PariharaPoojaBanner from "../../../assets/images/pariharapooja.jpg";
import lampImg from "../../../assets/images/lamp.png";
import { PariharaPoojaData } from "./PariharaPoojaData";
export default function PariharaPoojaComp() {
  return (
    <div>
      <div
        className="h-[80vh] flex justify-center items-center"
        style={{
          backgroundImage: `url(${PariharaPoojaBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
        }}
      >
       <h1 className="text-2xl md:text-4xl font-semibold md:font-bold tracking-wider z-10 text-red-600">
  PARIHARA POOJA
</h1>

      </div>
      <div className="text-center flex flex-col gap-5 pt-16 px-4 font-bold">
        <div className="flex flex-col gap-4">
          <p>సత్యాను సారిణీ లక్ష్మీ | కీర్తి: త్యాగాను సారిణీ ||</p>
          <p>అభ్యాసాను సారిణీ విద్యా | బుద్ధి: కర్మాను సారిణీ ||</p>
        </div>
        <div className="flex flex-col gap-2 px-4">
          <p>Sathyanusarini Lakshmi | Keerthihi Tyaganusarini ||</p>
          <p>Abhyasanusarini Vidyaa | Buddhihi Karmanusarini ||</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 p-5 md:p-24 gap-10 shadow-lg">
        {PariharaPoojaData.map((item, index) => {
          return (
            <div className="flex gap-3 shadow-lg p-3 rounded-xl" key={index}>
              <div className="md:min-w-16 min-w-10">
                <img className="md:w-16 w-10" src={lampImg} alt="" />
              </div>
              <div className=" flex flex-col gap-2">
                <h1 className="text-md font-semibold ">
                  {index + 1 + ". " + item.title}
                </h1>

                <p className="text-sm leading-7 tracking-wide">
                  {item.content}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <p className="italic text-red-600 text-center p-4 semibold text-2xl bg-red-50">
        <span className="italic text-red-500 text-2xl bold">NOTE :</span> " puja
        will conduct as per your request While we pray for your wishes to be
        fulfilled, ultimate outcomes depend on divine grace. The management
        cannot guarantee results and is not responsible for unmet expectations."
      </p>
    </div>
  );
}
