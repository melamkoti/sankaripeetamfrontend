import AboutMePage from "./aboutme/AboutMePage";
import ActivitiesPage from "./activities/ActivitiesPage";
import EventsPage from "./events/EventsPage";
import FounderComp from "./founder/FounderComp";
import OurGoalsPage from "./ourgoals/OurGoalsPage";
import ProductsPage from "./products/ProductsPage";
import Welcome from "./welcome/Welcome";

function Home() {
    return(
        <div>
            <Welcome />
            <FounderComp />
            <AboutMePage />
            <OurGoalsPage />
            <ActivitiesPage />
            <ProductsPage />
            <EventsPage />

        </div>
    )
}

export default Home;