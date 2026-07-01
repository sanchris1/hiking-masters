import Button from "@/app/ui/Button";
import ExploreFeaturedAdventuresCard from "@/app/(user)/explore/cards/ExploreFeaturedAdventuresCard";
import { dummyUpcomingExpeditions } from "@/items/experditions";

const FeaturedExpeditions = () => {
  return (
    <section className="bg-surface-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto">
        {/* heading */}
        <div className="flex lg:justify-between lg:items-end items-start gap-5 lg:flex-row flex-col">
          <div className="space-y-5">
            <h2 className="text-4xl font-semibold text-text-accent ">
              Featured Expeditions
            </h2>
            <p className="max-w-3xl text-lg text-text-accent">
              Curated paths for every level of experience, from alpine meadows
              to technical ridge lines. Each journey is limited to small groups
              for intimacy and safety.
            </p>
          </div>
          <Button type="button">View all the expeditions</Button>
        </div>

        {/* the expeditions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-6">
          {dummyUpcomingExpeditions.map((hike) => (
            <ExploreFeaturedAdventuresCard key={hike.id} hike={hike} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedExpeditions;
