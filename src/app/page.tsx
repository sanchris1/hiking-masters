import FeaturedExpeditions from "@/components/Home/FeaturedExpeditions";
import Hero from "@/components/Home/Hero";

const HomePage = () => {
  return (
    <div className="flex flex-col space-y-20">
      <Hero />
      <FeaturedExpeditions />
    </div>
  );
};

export default HomePage;
