import AboutMePage from "./aboutme/AboutMePage";
import ActivitiesPage from "./activities/ActivitiesPage";
import CardSlider from "./construtionCard/CardSlider";
import EventsPage from "./events/EventsPage";
import FounderComp from "./founder/FounderComp";
import OurGoalsPage from "./ourgoals/OurGoalsPage";
// import ProductsPage from "./products/ProductsPage";
import PujaCard from "./pujacards/PujaCard";
import Welcome from "./welcome/Welcome";
// import Welcome from "./welcome/Welcome";

function Home() {
  return (
    <div className="main_head">
      <Welcome />
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
