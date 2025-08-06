import AboutMain from "./aboutmain/AboutPeetamMainBanner";
import AboutPeetamComp from "./aboutpeetam/AboutPeetamComp";

function AboutPage() {
  return (
    <div className="main_head lg:mt-[110px]">
      <AboutMain />
      <AboutPeetamComp />
    </div>
  );
}

export default AboutPage;
