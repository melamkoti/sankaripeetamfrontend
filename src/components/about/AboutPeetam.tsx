import AboutMain from "./aboutmain/AboutPeetamMainBanner";
import AboutPeetamComp from "./aboutpeetam/AboutPeetamComp";

function AboutPage() {
  return (
    <div className="main_head lg:mt-[140px] max-w-[1280px] mx-auto">
      <AboutMain />
      <AboutPeetamComp />
    </div>
  );
}

export default AboutPage;
