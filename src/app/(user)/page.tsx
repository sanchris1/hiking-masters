import EmailSubmit from "./components/Home/EmailSubmit";
import FeaturedExpeditions from "./components/Home/FeaturedExpeditions";
import Hero from "./components/Home/Hero";
import Standards from "./components/Home/Standards";

const HomePage = () => {
  return (
    <div className="flex flex-col space-y-20">
      <Hero />
      <FeaturedExpeditions />
      <Standards />
      <EmailSubmit />
    </div>
  );
};

export default HomePage;
