import ActivitiesPage from "./activities/ActivitiesPage";
import AdythaAshramPage from "./construtionCard/CardSlider";
import EventsPage from "./events/EventsPage";
import FounderComp from "./founder/FounderComp";
import SlokamComp from "./founder/Slokam";
 import CardSlider from "./cardSlider/CardSlider";
import Welcome from "./welcome/Welcome";

function Home() {
  return (
    <div className="main_head lg:mt-[130px] ">
      <Welcome />
      <SlokamComp />
      <FounderComp />
      <CardSlider />

      <ActivitiesPage />

      <EventsPage />
      <AdythaAshramPage />
    </div>
  );
}

export default Home;
