import samajasevaBanner from "../../../assets/images/samajaseva-banner.jpeg";
import { SamajasevaData } from "./SamajasevaData";

export default function SamaajaSevaComp() {
  return (
    <>
      <div className="flex justify-center items-center p-4 md:py-4 md:px-2 lg:px-0 max-w-[1280px] mx-auto ">
        <div
          className="w-full rounded-xl bg-center bg-cover bg-no-repeat 
             h-[200px] sm:h-[300px] md:h-[500px] lg:h-[740px] relative"
          style={{
            backgroundImage: `url(${samajasevaBanner})`,
          }}
        ></div>
      </div>
      <h1 className="text-xl md:text-[32px] font-semibold  tracking-wider z-10 text-center pt-12">
        Samaaja Seva (Service towards Society)
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
            Kamah Krodascha Lobhascha Dehae Thishtathi Thaskaraah | <br /> Gnana
            Ratnapahaaraaya Tasmath Jagratha Jagratha ||{" "}
          </p>
        </div>
      </div>

      <div className="flex flex-col  lg:pt-6 lg:px-24 md:pt-10 md:px-20 px-4 pt-10 text-base text-justify ">
        <p>
          Bhu seva (Service towards Land), Jala seva (Service towards Water),
          Jeeva seva (Serving the Living), Vidya seva (Service for Education),
          Annadanam (Free meals), Anadha seva (Orphan Welfare) are the main
          branches of Samaaja Seva.
        </p>
        <p>
          We are part of this society, so it becomes our responsibility to not
          only safeguard this land and this nature but also works towards
          healing the already damaged. Sanathana Sankari Peetam Charitable
          Trust, on its part has worked for these goals through a set of planned
          programs in different places on different occasions. We plan to do so
          in future as well with increased fervor.
        </p>
        <p>
          To protect the environment and the living beings in it is as important
          as the Sadhana(Practice) for Spiritual Knowledge(Adhyatmikam) and
          one's own physical well-being. Similarly, providing food, nutrition
          and education to people who are living in remote areas or those who
          are left alone because of various reasons are parts of our seva
          program.
        </p>
        <p>
          Next is our endeavor to make land fertile by using natural means of
          agriculture, thereby reducing the expenditure incurred for farming and
          further reducing the chemical footprint in the water, vegetation,
          flowers, fruits and vegetables. We expect to deliver chemical free
          fruits and vegetables in the near future thereby preventing harmful
          diseases like cancer from effecting the society.
        </p>
        <p>
          We are also working towards correcting the changing food habits that
          have given rise to ailments like diabetes, blood pressure, paralysis
          caused by blood clots. By consuming good and organic food these health
          problems can be prevented and even cured.
        </p>
        <p>
          Keeping this in view, we should work through properly planned programs
          to get rid of all the harmful waste, starting from our neighborhood to
          our streets to villages and cities, to our Nation and to our World as
          well.
        </p>
      </div>

      {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:w-[70vw] sm:p-10 p-5 lg:gap-20 gap-10 mx-auto ">
        {SamajasevaData.map((item, index) => {
          return (
            <div className="flex flex-col gap-3 mx-auto rounded-md text-center" key={index}>
              <div className="rounded-md ">
                <img className="rounded-md" src={item.img} alt="" />
              </div>
              <h2>{item.title}</h2>
            </div>
          );
        })}
      </div> */}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 md:py-10 max-w-[1280px] mx-auto">
        {SamajasevaData.map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center text-center rounded-md overflow-hidden transition duration-300 h-[272px] lg:w-[405px]"
            >
              {/* Image */}
              <img
                src={item.img}
                alt={item.title}
                className="rounded-md w-full h-48 object-cover"
              />

              {/* Title */}
              <h2 className="text-[#D9540F] font-medium text-sm sm:text-base mt-2">
                {item.title}
              </h2>
            </div>
          );
        })}
      </div>
    </>
  );
}
