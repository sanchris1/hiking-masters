"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const AboutPageHero = () => {
  const aboutSectionAcc = [
    {
      label: "Qualified guides",
      take: "Expert Safety",
    },
    {
      label: "50+",
      take: "Happy Hikers",
    },
    {
      label: "20+",
      take: "Successful Expeditions",
    },
  ];

  const router = useRouter();

  return (
    <header className="w-full h-screen relative border border-b ">
      <Image
        alt="about-us-hero-image"
        src={"/hike-4.jpg"}
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-linear-to-t from-surface-50 via-surface-50/50 to-transparent " />
      <div className="relative inset-0 flex items-center justify-center flex-col gap-6 h-full max-w-6xl mx-auto p-4">
        <h1 className="text-primary font-bold  tracking-wide text-3xl md:text-4xl lg:text-5xl xl:text-6xl max-w-3xl text-center">
          Adventure begins with one step.
        </h1>
        <p className=" text-center font-medium text-secondary text-sm">
          We create safe, unforgettable hiking adventures that connect people
          with Kenya&apos;s most breathtaking landscapes.
        </p>
        <div className="flex items-center gap-5">
          <button
            className="text-sm font-semibold text-text-accent  px-5  py-2 bg-accent rounded-2xl hover:scale-105 transition-all duration-500 hover:shadow-2sm cursor-pointer"
            onClick={() => router.push("/explore")}
          >
            Explore expeditions
          </button>
          <button
            onClick={() => router.push("/contact")}
            className="text-sm font-semibold text-text-accent  px-5  py-2 bg-surface-50/20 backdrop-blur-lg border border-border rounded-2xl hover:scale-105 transition-all duration-500 hover:shadow-2sm cursor-pointer"
          >
            Contact Us
          </button>
        </div>
        <div className="max-w-7xl w-full h-0.5 bg-primary rounded-full" />
        <div className="flex items-center justify-center gap-6">
          {aboutSectionAcc.map((acc) => (
            <div
              className="flex flex-col items-center flex-wrap gap-2 bg-surface-200/30 p-3 backdrop-blur-3xl rounded-2xl"
              key={acc.take}
            >
              <span className="text-xs lg:text-sm font-semibold  text-secondary">
                {acc.label}
              </span>
              <span className="tracking-tighter font-medium text-primary text-sm lg:text-[18px] uppercase">
                {acc.take}
              </span>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};

export default AboutPageHero;
