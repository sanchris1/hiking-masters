import SocialMediaComponent from "@/components/SocialMedia";
import Image from "next/image";

const ExploreHero = () => {
  return (
    <header className="w-full min-h-screen relative">
      <Image src={"/hike-2.jpg"} alt="" fill className="object-cover" />
      <div className="inset-0 w-full h-full bg-primary/40 absolute" />
      <div className="inset-0 absolute flex items-center justify-center gap-5 flex-col p-12">
        <h1 className="text-surface-50 font-semibold text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center leading-relaxed">
          Explore Kenya&apos;s most <br />
          beautiful hiking adventures
        </h1>
        <p className="text-sm font-medium text-surface-200 max-w-4xl text-center">
          Find unforgettable hiking experiences from the rugged summits of
          Kenyan Highlands to the scenic rugged lines of the great Rift Valley
        </p>
        <SocialMediaComponent />
        <div className="flex items-center gap-5">
          <button className="px-4 py-2 text-sm text-surface-100 font-medium cursor-pointer rounded-full bg-accent/80 backdrop-blur-sm hover:bg-accent/95 duration-500 transition-all">
            Explore Hikes
          </button>
          <button className="px-4 py-2 text-sm text-surface-100 font-medium cursor-pointer rounded-full bg-surface-200/20 backdrop-blur-lg border border-border/60 hover:bg-surface-200/30 transition duration-500 ">
            Upcoming Adventures
          </button>
        </div>
      </div>
    </header>
  );
};

export default ExploreHero;
