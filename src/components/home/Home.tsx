import AboutMePage from "./aboutme/AboutMePage";
import ActivitiesPage from "./activities/ActivitiesPage";
import CardSlider from "./construtionCard/CardSlider";
import EventsPage from "./events/EventsPage";
import FounderComp from "./founder/FounderComp";
import OurGoalsPage from "./ourgoals/OurGoalsPage";
// import ProductsPage from "./products/ProductsPage";
import PujaCard from "./pujacards/PujaCard";
// import Welcome from "./welcome/Welcome";
import welcomeTwo from "../../assets/images/welcomemainimg.png";

import videoMP4 from "../../assets/images/peetam-video.mp4";
import Founder1 from "../../assets/images/image3.png";

function Home() {
  return (
    <div className="main_head">
      <div className="w-full h-[100vh] md:h-screen relative overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
           poster={welcomeTwo}
          className="absolute top-1/2 left-1/2 w-full min-h-full -translate-x-1/2 -translate-y-1/2 object-cover"
        >
          <source src={videoMP4} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Content Overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 text-white p-4">
          <div className="text-center max-w-2xl">
            {/* <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Welcome to Sankaripeetam
            </h1> */}
            <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold text-white select-none font-ponnala mt-12 tracking-wide sm:tracking-wider drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] hover:drop-shadow-[0_4px_8px_rgba(255,255,255,0.3)] transition-all duration-300">
              సనాతన శాంకరీ పీఠం
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl font-ponnala text-white/90 tracking-wider drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] leading-relaxed">
              Spiritual Enlightenment and Divine Blessings
            </p>
          </div>
        </div>
        <div className="absolute top-4 left-4 z-1 flex flex-wrap sm:flex-nowrap gap-4">
          {[1, 2, 3].map((_, i) => (
            <div
              key={i}
              className="w-[80px] h-[80px] sm:w-[108px] sm:h-[108px] border-2 border-white rounded-full shadow-lg p-1"
            >
              <img
                src={Founder1}
                alt={`Founder ${i + 1}`}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          ))}
        </div>
      </div>

      {/* <Welcome /> */}
      <FounderComp />
      <OurGoalsPage />
      <PujaCard />

      <AboutMePage />
      <ActivitiesPage />
      <CardSlider />

      <EventsPage />
    </div>
  );
}

export default Home;
