import ExploreFeaturedAdventures from "./components/ExploreFeaturedAdventures";
import ExploreHero from "./components/Hero";
import UpcomingExpeditions from "./components/UpcomingExpeditions";
import VisitAreasComponent from "./components/VisitAreas";

const ExplorePage = () => {
  return (
    <div className="">
      <ExploreHero />
      <VisitAreasComponent />
      <ExploreFeaturedAdventures />
      <UpcomingExpeditions />
    </div>
  );
};

export default ExplorePage;
