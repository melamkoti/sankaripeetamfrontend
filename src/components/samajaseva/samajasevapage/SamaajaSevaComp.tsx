import samajasevaBanner from "../../../assets/images/samajaseva-banner.jpeg";
import { SamajasevaData } from "./SamajasevaData";
// import { AdyatmikamData } from "./AdyatmikamData";
export default function SamaajaSevaComp() {
  return (
    <div>
      <div
        className="h-[100vh] flex justify-center items-center"
        style={{
          backgroundImage: `url(${samajasevaBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1 className="text-4xl tracking-wider font-semibold text-[#FF6600] py-3">
          SAMAAJA SEVA
        </h1>
      </div>
      <div className="flex flex-col gap-3 pt-24 px-36 text-base  ">
        <h1 className="text-xl font-semibold">SAMAAJA SEVA (Service towards Society)</h1>
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

      <div className="grid grid-cols-3 p-24 gap-20  mx-auto">
        {SamajasevaData.map((item, index) => {
          return (
            <div className="flex flex-col gap-3" key={index}>
              <div className=" ">
                <img className="" src={item.img} alt="" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
