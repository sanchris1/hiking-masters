"use client";

import Button from "@/app/ui/Button";
import SocialMediaComponent from "@/components/SocialMedia";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Hero = () => {
  const router = useRouter();

  return (
    <section className="relative w-full h-screen ">
      <Image
        src={"/hike-3.jpg"}
        alt="nature image"
        fill
        className="object-cover "
      />
      {/* overlay */}
      <div className="bg-linear-to-r from-primary/70 via-primary/50 to-transparent absolute inset-0" />

      {/* content */}
      <div className="absolute inset-0 flex items-center justify-start max-w-7xl  mx-auto">
        <div className="flex flex-col gap-12 lg:gap-8  items-center lg:items-start  max-w-3xl">
          {/* badge paragraph */}
          <p className="px-2 border border-border text-surface-200 bg-surface-50/20 rounded-md py-1 uppercase">
            Elevate your adventure
          </p>
          {/* main title */}
          <h1 className="text-5xl  lg:text-6xl font-bold text-surface-50  text-center lg:text-left">
            The Summit is just the beginning.
          </h1>
          {/* text paragraph */}
          <p className="text-sm font-medium text-surface-100/70 max-w-2xl text-center lg:text-left">
            Expert-led expeditions into the world&apos;s most breathtaking
            wilderness. We provide the gear, the guidance, and the grit. You
            bring the spirit.
          </p>
          {/* buttons */}
          <SocialMediaComponent />
          <div className="flex items-center gap-5 lg:gap-8">
            <Button
              className=""
              type="button"
              onClick={() => router.push("/explore")}
            >
              Upcoming hikes
            </Button>
            <Button
              onClick={() => router.push(`/booking/${"no-hike"}`)}
              type="button"
              className="bg-surface-200/10 border border-surface-50/30  backdrop-blur-3xl"
            >
              Book your space
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
