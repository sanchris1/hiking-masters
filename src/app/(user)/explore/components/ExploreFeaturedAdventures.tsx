import { dummyFeaturedHikes } from "@/items/explore";
import ExploreFeaturedAdventuresCard from "../cards/ExploreFeaturedAdventuresCard";

const ExploreFeaturedAdventures = () => {
  return (
    <section className="my-12 bg-white ">
      <div className="max-w-7xl mx-auto p-3">
        {/* heading */}
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold text-primary">
            Featured Adventures
          </h2>
          <p className="text-sm text-secondary">
            Hand-picked adventures for every type of hiker
          </p>
        </div>
        {/* adventures arrays of cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
          {dummyFeaturedHikes.slice(0, 6).map((hike) => (
            <ExploreFeaturedAdventuresCard key={hike.id} hike={hike} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreFeaturedAdventures;
