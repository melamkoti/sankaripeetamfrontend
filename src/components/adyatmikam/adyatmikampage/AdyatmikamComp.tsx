import AdyatmikamBanner from "../../../assets/images/adyathmikam.png";
import { AdyatmikamData } from "./AdyatmikamData";
export default function AdyatmikamComp() {
  return (
    <div>
      <div className="flex justify-center items-center py-4 bg-[#E9E5DF] ">
        <div
          className="w-[90%] rounded-xl bg-center bg-cover bg-no-repeat 
             h-[200px] sm:h-[300px] md:h-[500px] lg:h-[740px] relative"
          style={{
            backgroundImage: `url(${AdyatmikamBanner})`,
          }}
        ></div>
      </div>
      <div className="text-center flex flex-col gap-5 pt-16 font-bold">
        <div className="flex flex-col gap-4">
          <p>కామః క్రోధశ్చ, లోభశ్చ దేహే తిష్ఠతి తస్కరాః ||</p>
          <p>జ్ఞాన రత్నాపహారాయ | తస్మాత్ జాగ్రత జాగ్రత ||</p>
        </div>
        <div className="flex flex-col gap-2 font-thin">
          <p>Kamah Krodascha Lobhascha Dehae Thishtathi Thaskaraah |</p>
          <p>Gnana Ratnapahaaraaya Tasmath Jagratha Jagratha ||</p>
        </div>
      </div>
      <div className="flex flex-col gap-3 md:pt-24 md:px-24 p-4 pt-14 text-base font-thin text-justify">
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
      {/* <div className="text-center flex flex-col gap-5 pt-16 font-bold">
        <div className="flex flex-col gap-4">
          <p>కామః క్రోధశ్చ, లోభశ్చ దేహే తిష్ఠతి తస్కరాః ||</p>
          <p>జ్ఞాన రత్నాపహారాయ | తస్మాత్ జాగ్రత జాగ్రత ||</p>
        </div>
        <div className="flex flex-col gap-2">
          <p>Kamah Krodascha Lobhascha Dehae Thishtathi Thaskaraah |</p>
          <p>Gnana Ratnapahaaraaya Tasmath Jagratha Jagratha ||</p>
        </div>
      </div> */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 p-6 md:p-16 max-w-6xl mx-auto">
        {AdyatmikamData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-3 text-center"
          >
            {/* Circular Border Container */}
            <div
              className={`w-24 h-24 md:w-28 md:h-28 rounded-full border-2 flex items-center justify-center`}
              style={{ borderColor: item.color }}
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-14 h-14 object-contain"
              />
            </div>

            {/* Title */}
            <h1
              className="text-sm md:text-sm font-semibold"
              style={{ color: "#D9540F" }}
            >
              {index + 1}. {item.title}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
}
