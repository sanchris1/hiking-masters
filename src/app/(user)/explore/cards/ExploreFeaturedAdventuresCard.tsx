"use client";

import { difficultyColors } from "@/lib/utils";
import { Expedition } from "@/schema";
import { toggleFavoritesStore } from "@/store/toggleFavoritesStore";
import axios from "axios";
import { LocateIcon, Timer } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";

interface ExploreFeaturedAdventuresCardProps {
  hike: Expedition;
}

const ExploreFeaturedAdventuresCard = ({
  hike,
}: ExploreFeaturedAdventuresCardProps) => {
  const router = useRouter();

  const difficulty =
    difficultyColors[
      hike.difficulty.toLowerCase() as keyof typeof difficultyColors
    ];

  function getDuration(departureDate: string, returnDate: string) {
    const depDate = new Date(departureDate);
    const retDate = new Date(returnDate);

    const difference = retDate.getTime() - depDate.getTime();

    return Math.ceil(difference / (1000 * 60 * 60 * 24));
  }

  const { favorites, toggleFavorites, setFavorites } = toggleFavoritesStore(
    (state) => state,
  );
  async function handleToggleFavorites(expeditionId: string) {
    toggleFavorites(expeditionId);

    await axios.patch("/api/fav", { expeditionId });
  }
  const isFavorite = favorites.includes(hike.id);

  console.log(favorites);

  return (
    <div className="flex rounded-2xl overflow-hidden min-w-0 flex-col md:flex-row bg-white shadow-2xl flex-1 items-center">
      <div className="h-64  relative md:w-96 lg:w-80 w-full overflow-hidden ">
        <Image
          className="object-cover overflow-hidden hover:scale-110 transition-all duration-1000"
          alt={hike.title}
          src={hike.image}
          fill
        />
        <div
          className={`absolute top-5 left-5 px-3 py-1 font-semibold text-sm ${difficulty.bg} ${difficulty.border} ${difficulty.text} rounded-xl`}
        >
          {hike.difficulty}
        </div>
      </div>
      <div className="ml-3 mt-4 space-y-3">
        <div className="flex items-center justify-between gap-8">
          <div className="">
            <h2 className="leading-relaxed text-xl text-primary font-semibold">
              {hike.title}
            </h2>
            <p className="text-sm text-secondary tracking-wide">
              &quot;{hike.tagline}&quot;
            </p>
          </div>{" "}
          <button
            onClick={() => handleToggleFavorites(hike.id)}
            className={` ${isFavorite ? "text-accent " : "text-primary hover:text-accent  "}  text-[20px]  cursor-pointer  `}
          >
            {isFavorite ? (
              <>
                <FaHeart />
              </>
            ) : (
              <>
                {" "}
                <FaRegHeart />
              </>
            )}
          </button>
        </div>
        <div className="flex items-center flex-nowrap justify-between w-full gap-4">
          <div className="flex items-center gap-2 bg-secondary/10 rounded-2xl border-border border py-0.5 px-2">
            <LocateIcon />
            <span className="text-sm font-semibold text-primary">
              {hike.location}
            </span>
          </div>
          |
          <div className="flex items-center gap-2 bg-secondary/10 rounded-2xl border-border border py-0.5 px-2">
            <SlCalender />
            <span className="text-sm font-semibold text-primary">
              {hike.departureDate}
            </span>
          </div>
          |
          <div className="flex items-center gap-2 bg-secondary/10 rounded-2xl border-border border py-0.5 px-2">
            <Timer />
            <span className="text-sm font-semibold text-primary">
              {getDuration(hike.departureDate, hike.returnDate)} days
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          {/* left for rating and reviews */}
          <span className="text-sm font-semibold text-primary mt-2">
            {hike.slotsLeft} slots left
          </span>
        </div>
        <div className="w-full h-0.5 my-4 bg-gray-400 " />
        <div className="flex items-center justify-between ">
          <div className="">
            <span className="text-secondary ">Price</span>
            <p className="text-primary text-xl font-semibold leading-relaxed">
              KSH: {hike.price.toLocaleString()}
            </p>
          </div>
          <div
            className="px-3 py-1 bg-primary/95 text-surface-50 rounded-lg cursor-pointer hover:text-surface-100 hover:bg-primary transition-all duration-300"
            onClick={() => router.push(`/explore/${hike.id}`)}
          >
            View Details
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreFeaturedAdventuresCard;
