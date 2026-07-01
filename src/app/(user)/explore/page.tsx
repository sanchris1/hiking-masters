import ExploreFeaturedAdventures from "./components/ExploreFeaturedAdventures";
import ExploreHero from "./components/Hero";
import VisitAreasComponent from "./components/VisitAreas";

const ExplorePage = () => {
  return (
    <div className="">
      <ExploreHero />
      <VisitAreasComponent />
      <ExploreFeaturedAdventures />
    </div>
  );
};

export default ExplorePage;
