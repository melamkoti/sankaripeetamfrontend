import AdyatmikamBanner from "../../../assets/images/adyatmikam.jpeg";
import { AdyatmikamData } from "./AdyatmikamData";
export default function AdyatmikamComp() {
  return (
    <div>
      <div
        className="h-[100vh] flex justify-center items-end"
        style={{
          backgroundImage: `url(${AdyatmikamBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1 className="text-4xl tracking-wider font-semibold text-white py-3">
          ADHYATMIKAM
        </h1>
      </div>
      <div className="flex flex-col gap-3 pt-24 px-24 text-base font-semibold ">
        <p>
          Adhyatmikam (Spirituality) is something that is beyond the material
          possessions, society and one's physical being. But at the same time it
          is embedded in everything. Simply it means that which is related to
          the Aatma (Spirit).From one perspective there is nothing that belongs
          to Aatma, similarly Aatma doesn't belong to anything.
        </p>
        <p>
          People who are interested in Spirituality, are guided keeping in view
          their situations, psychological inclination, their professions or
          businesses, etc., and while practicing the various aspects of
          attaining Spiritual Knowledge one is supported to improve their
          physical well-being, to improve their ways of life, to improve their
          surroundings by themselves, to attain the capacity to recognize and
          respect the value of every living being. Whatever the Sadhana is, as
          one progresses he or she will be guided to assimilate this knowledge,
          thereby we can say that the good of the society is invariably linked
          to Sprituality.
        </p>
        <p>
          As part of this effort, Deeksha is bestowed and taught to practice by
          different Gurus belonging to different methods.Speeches, Bhajans,
          Paarayana and Sathsang are conducted in this regard. Especially, the
          eligible candidates are given Mantra Deeksha by Guruji himself. Also,
          facilities are provided so that one can practice the Deeksha by
          staying at the Ashram not exceeding 10 days.
        </p>
        <p>All this is done totally free of cost.</p>
      </div>
      <div className="text-center flex flex-col gap-5 pt-16 font-bold">
        <div className="flex flex-col gap-4">
          <p>కామః క్రోధశ్చ, లోభశ్చ దేహే తిష్ఠతి తస్కరాః ||</p>
          <p>జ్ఞాన రత్నాపహారాయ | తస్మాత్ జాగ్రత జాగ్రత ||</p>
        </div>
        <div className="flex flex-col gap-2">
          <p>Kamah Krodascha Lobhascha Dehae Thishtathi Thaskaraah |</p>
          <p>Gnana Ratnapahaaraaya Tasmath Jagratha Jagratha ||</p>
        </div>
      </div>
      <div className="grid grid-cols-3 p-24 gap-10 w-[70vw] mx-auto">
        {AdyatmikamData.map((item, index) => {
          return (
            <div className="flex flex-col gap-3" key={index}>
              <div className="min-w-16 ">
                <img className="w-16" src={item.img} alt="" />
              </div>
              <div className=" flex flex-col">
                <h1 className="text-md font-semibold ">
                  {index + 1 + ". " + item.title}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
