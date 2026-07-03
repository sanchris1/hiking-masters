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
            Super Hikers began with friends exploring the scenic trails of Ngong
            Hills on weekends. As our passion for hiking grew, so did our
            community, inspiring us to create unforgettable, professionally
            guided adventures that help others discover the beauty of
            Kenya&apos;s outdoors.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
