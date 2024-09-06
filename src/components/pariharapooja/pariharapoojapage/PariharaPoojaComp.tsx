import PariharaPoojaBanner from "../../../assets/images/pariharapooja-banner.png";
import lampImg from '../../../assets/images/lamp.png'
import { PariharaPoojaData } from "./PariharaPoojaData";
export default function PariharaPoojaComp() {
  return (
    <div>
      <div
        className="h-[60vh] flex justify-center items-center"
        style={{
          backgroundImage: `url(${PariharaPoojaBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1 className="text-4xl tracking-wider font-semibold">
          PARIHARA POOJA
        </h1>
      </div>
      <div className="text-center flex flex-col gap-5 pt-16 font-bold">
        <div className="flex flex-col gap-4">
          <p>సత్యాను సారిణీ లక్ష్మీ | కీర్తి: త్యాగాను సారిణీ ||</p>
          <p>అభ్యాసాను సారిణీ విద్యా | బుద్ధి: కర్మాను సారిణీ ||</p>
        </div>
        <div className="flex flex-col gap-2">
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
              <h1 className="text-md font-semibold ">{index + 1 + ". " + item.title}</h1>

                <p className="text-sm leading-7 tracking-wide">{item.content}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
