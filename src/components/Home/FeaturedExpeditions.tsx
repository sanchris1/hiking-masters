import Button from "@/app/ui/Button";
import { hikingTours } from "@/items/featured";
import FeaturedHikesCard from "../hikes/FeaturedHikesCard";

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
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5">
          {hikingTours.map((tour) => (
            <FeaturedHikesCard
              key={tour.id}
              id={tour.id}
              image={tour.image}
              title={tour.title}
              description={tour.description}
              category={tour.category}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedExpeditions;
