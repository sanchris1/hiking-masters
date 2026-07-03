import React from "react";
import AboutPageHero from "./components/Hero";
import OurStory from "./components/OurStory";
import Values from "./components/Values";

const AboutPage = () => {
  return (
    <div className="flex flex-col gap-8">
      <AboutPageHero />
      <OurStory />
      <Values />
    </div>
  );
};

export default AboutPage;
