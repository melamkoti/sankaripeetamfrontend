import AdyatmikamBanner from "../../../assets/images/adyathmikam.png";
import { AdyatmikamData } from "./AdyatmikamData";
export default function AdyatmikamComp() {
  return (
    <>
      <div className="flex justify-center items-center  p-4 md:py-4 md:px-2 lg:px-0 max-w-[1280px] mx-auto">
        <div
          className="w-full rounded-xl bg-center bg-cover bg-no-repeat 
             h-[200px] sm:h-[300px] md:h-[500px] lg:h-[740px] relative"
          style={{
            backgroundImage: `url(${AdyatmikamBanner})`,
          }}
        ></div>
      </div>
     
       <h1 className="text-xl md:text-[32px] font-semibold  tracking-wider z-10 text-center pt-12">
       Adhyatmikam
      </h1>
      <div className="w-full h-full px-6 py-20 md:px-12 md:py-32 flex flex-col md:flex-row justify-center items-center gap-16 bg-[#E9E5DF] relative overflow-hidden">
        {/* Optional Quote/Poem Section (you had commented out) */}

        <div className="md:w-1/2 flex flex-col items-center gap-8">
          <div className="text-center">
            <p className="text-[12px] md:text-[20px] font-semibold md:font-bold lg:w-4/6 mx-auto font-anek tracking-wider">
              కామః క్రోధశ్చ, లోభశ్చ దేహే తిష్ఠతి తస్కరాః || జ్ఞాన రత్నాపహారాయ |
              తస్మాత్ జాగ్రత జాగ్రత ||
            </p>
          </div>
          <p className="text-base md:text-xl font-medium text-center  mx-auto ">
            Kamah Krodascha Lobhascha Dehae Thishtathi Thaskaraah |  <br />{" "}
          Gnana Ratnapahaaraaya Tasmath Jagratha Jagratha ||{" "}
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-3 md:pt-6 md:px-24 p-4 pt-8 text-base  text-justify ">
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
     
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 p-6 md:py-12 max-w-[1280px] mx-auto">
        {AdyatmikamData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-2 text-center"
          >
            {/* Circular Border Container */}
            <div
              className={`w-24 h-24 md:w-36 md:h-36 rounded-full border-2 flex items-center justify-center`}
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
    </>
  );
}
