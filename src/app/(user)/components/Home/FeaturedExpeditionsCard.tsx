"use client";
import { difficultyColors } from "@/lib/utils";

import { Expedition } from "@/schema";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { CiLocationOn } from "react-icons/ci";
import { FaPeopleGroup } from "react-icons/fa6";
import { MdDateRange } from "react-icons/md";

const FeaturedExpeditionsCard = ({ hike }: { hike: Expedition }) => {
  function getDuration(departureDate: string, returnDate: string) {
    const depDate = new Date(departureDate);
    const retDate = new Date(returnDate);

    const difference = retDate.getTime() - depDate.getTime();

    return Math.ceil(difference / (1000 * 60 * 60 * 24));
  }

  const difficulty =
    difficultyColors[
      hike.difficulty.toLowerCase() as keyof typeof difficultyColors
    ];

  const router = useRouter();

  return (
    <div className="w-full shadow-2xl rounded-2xl overflow-hidden bg-white">
      <div className="w-full h-96 md:h-84 lg:h-64  relative">
        <Image
          src={hike.image}
          alt={hike.title}
          fill
          className="object-cover `"
        />
        <span
          className={`absolute top-4 right-4 rounded-2xl px-3 py-0.5 text-sm font-medium ${difficulty.bg} ${difficulty.border} ${difficulty.text}`}
        >
          {hike.difficulty}
        </span>
      </div>
      <div className="my-5  mx-4 space-y-2.5">
        <div className="flex items-center justify-between">
          <h6 className="text-primary font-medium text-[17px] leading-relaxed ">
            {hike.title}
          </h6>
          <span className="text-accent font-semibold text-[18px]">
            KSH: {hike.price.toLocaleString()}
          </span>
        </div>
        <span className="flex items-center gap-1 text-secondary text-sm ">
          <CiLocationOn /> {hike.location}
        </span>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 text-secondary text-sm">
            <MdDateRange />{" "}
            {getDuration(hike.departureDate, hike.returnDate) === 0
              ? 1
              : getDuration(hike.departureDate, hike.returnDate)}{" "}
            day(s)
          </div>
          <div className="flex items-center gap-2 text-secondary text-sm">
            <FaPeopleGroup /> {hike.slotsLeft} slots left
          </div>
        </div>
        <div className="w-full h-px bg-gray-400 my-4" />
        <div className="flex items-center justify-between ">
          <div
            className="px-4 cursor-pointer py-1.5 text-sm font-semibold text-surface-100 bg-primary/95 hover:bg-primary hover:text-surface-200 rounded-xl transition-all duration-500 active:bg-primary/80"
            onClick={() => router.push(`/explore/${hike.id}`)}
          >
            View Details
          </div>
          <div className="px-4 cursor-pointer py-1.5 text-sm font-semibold text-surface-100 bg-primary/95 hover:bg-primary hover:text-surface-200 rounded-xl transition-all duration-500 active:bg-primary/80">
            Book Now
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedExpeditionsCard;
