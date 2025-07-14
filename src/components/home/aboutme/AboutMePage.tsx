import { AboutMeData } from "./AboutMeData";
import footerLogo from "../../../assets/images/footer-logo.svg";

function AboutMePage() {
  return (
   <div className="w-full p-6 md:p-10 lg:p-16 bg-gradient-to-b from-[#fffbe6] to-[#fffdf4]">
  {/* Page Title */}
  <h1 className="text-3xl md:text-4xl font-bold text-center text-[#b91c1c] font-mukta tracking-wide">
    About the Peetam
  </h1>

  {/* Divider */}
  <div className="w-24 h-1 bg-[#FFD700] mx-auto mt-2 mb-8 rounded-full shadow-md" />

  {/* Main Content */}
  <div className="w-full flex flex-col md:flex-row gap-16 lg:gap-0 justify-center items-center">
    {/* Founder Image */}
    <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={footerLogo}
          alt="founder"
          className="lg:w-3/6 w-[250px] object-cover object-center rounded-lg"
        />
    </div>

    {/* Content Section */}
    <div className="w-full md:w-1/2 flex flex-col justify-around items-center md:items-start gap-10">
      {/* Section Card */}
      {[
        // { title: "His Thoughts", content: AboutMeData[0].aboutcontent },
        // { title: "His Ashramam", content: AboutMeData[0].aashramcontent },
        {  content: AboutMeData[0].peetamcontent },
      ].map((item, index) => (
        <div
          key={index}
          className="  w-full"
        >
          
          <p className=" text-1xl lg:text-2xl text-gray-700 text-justify  font-light font-sans">
            {item.content}
          </p>
        </div>
      ))}
    </div>
  </div>
</div>

  );
}

export default AboutMePage;
