import Image from "next/image";

const OurStory = () => {
  return (
    <section className="bg-surface-50">
      <div className="max-w-7xl mx-auto p-5 flex flex-col items-center gap-5 lg:flex-row">
        <div className=" w-full lg:w-1/2">
          {/* left-image */}
          <div className="w-full h-96 relative rounded-2xl overflow-hidden">
            <Image
              alt="story-image"
              fill
              className="object-cover"
              src={"/about/story.png"}
            />
          </div>
        </div>
        {/* right info */}
        <div className="w-full lg:w-1/2 space-y-6">
          <p className="uppercase text-accent text-lg tracking-wider ">
            Our Story
          </p>
          <h2 className="text-wrap font-semibold text-4xl lg:text-5xl  text-primary ">
            Elevating the African Trailing Experience
          </h2>
          <p className="text-sm text-secondary font-medium">
            <span className="font-semibold text-primary">Super Hikers </span>{" "}
            began with three friends and a shared love for the outdoors. What
            started as weekend hike through the rolling trails of Ngong Hills
            soon became a tradition, with every adventure inspiring us to
            explore more of Kenya&apos;s incredible landscapes. <br />
            <br />
            As our passion grew, so did the number of friends, families, and
            fellow adventurers joining our hikes. Today,{" "}
            <span className="font-semibold text-primary">
              Super Hikers{" "}
            </span>{" "}
            exists to share that same spirit of exploration by creating safe,
            professionally guided experiences that help people discover the
            beauty of nature, challenge themselves, and build lasting memories
            together.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
