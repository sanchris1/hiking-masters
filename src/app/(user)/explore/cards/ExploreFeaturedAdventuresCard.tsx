"use client";

import { UpcomingExpedition } from "@/types/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { BiHeart, BiMoney, BiTimer } from "react-icons/bi";
import { BsStarFill } from "react-icons/bs";

interface ExploreFeaturedAdventuresCardProps {
  hike: UpcomingExpedition;
}

const ExploreFeaturedAdventuresCard = ({
  hike,
}: ExploreFeaturedAdventuresCardProps) => {
  const router = useRouter();

  function getHikeTime(date: string) {
    const today = new Date().getTime();
    const departureDate = new Date(date).getTime();

    const remainingDays = departureDate - today;

    return Math.ceil(remainingDays / (1000 * 60 * 60 * 24));
  }

  return (
    <div className=" shadow-[4px_4px_12px_rgba(0,0,0,0.3)] rounded-2xl  overflow-hidden">
      {/* top for the image */}
      <div
        className="relative w-full h-80 overflow-hidden"
        onClick={() => router.push(`/explore/${hike.id}`)}
      >
        <Image
          alt={hike.title}
          src={hike.image}
          className="object-cover aspect-square hover:scale-110 transition-all duration-500 cursor-pointer "
          fill
        />
        <div className="absolute top-5  left-0 right-0 flex items-center justify-between px-5">
          {/* difficulty */}
          <span
            className={` ${hike.difficulty.toLowerCase() === "easy" ? "bg-surface-100/50 backdrop-blur-xl border border-border " : hike.difficulty.toLowerCase() === "beginner" ? "bg-primary" : hike.difficulty.toLowerCase() === "intermediate" ? "bg-orange-600" : "bg-red-700"} rounded-full text-surface-200  py-1  text-xs font-semibold px-3`}
          >
            {hike.difficulty}
          </span>
          {/* fav badge */}
          <span className="p-1 rounded-full border-border/90 border bg-secondary/70 text-surface-200 ">
            <BiHeart size={20} />
          </span>
        </div>
      </div>

      {/* bottom for the writing */}
      <div className="px-5 py-2 flex flex-col items-center gap-5">
        <div className="flex items-center justify-between w-full">
          <h3 className="text-xl text-secondary font-semibold">{hike.title}</h3>
          <span className="flex  items-center gap-1 text-accent ">
            <BsStarFill /> {hike.rating}
          </span>
        </div>
        <div className="flex items-center  gap-2 text-xs">
          <p className="flex  flex-col md:flex-row items-center gap-1  text-secondary">
            <BiTimer />
            <span className="">
              {getHikeTime(hike.departureDate)} Days to hike
            </span>
          </p>
          |
          <p className="flex flex-col md:flex-row items-center gap-1  text-secondary">
            <BiMoney /> From KES {hike.price.toLocaleString()}
            <span className="">Only</span>
          </p>
        </div>

        <button
          className="w-full py-2 rounded-xl border-secondary  bg-secondary/20 text-sm font-medium hover:bg-secondary/15 border-2 cursor-pointer transition duration-500 text-primary"
          onClick={() => router.push(`/booking/${hike.id}`)}
        >
          Book now
        </button>
      </div>
    </div>
  );
};

export default ExploreFeaturedAdventuresCard;
