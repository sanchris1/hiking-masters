/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { dummyUpcomingExpeditions } from "@/items/experditions";
import { UpcomingExpedition } from "@/types/types";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { BiHeart } from "react-icons/bi";
import { BsArrowRight, BsStarFill } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";

const ExploreDetailsPage = () => {
  const params = useParams<{ exploreId: string }>();

  const [loading, setLoading] = useState(false);
  const [exploreEventDetails, setExploreEventDetails] =
    useState<UpcomingExpedition | null>(null);

  useEffect(() => {
    setLoading(true);
    const hike =
      dummyUpcomingExpeditions.find((hike) => hike.id === params.exploreId) ??
      null;

    setExploreEventDetails(hike);
    setLoading(false);
  }, [params.exploreId]);

  if (!params.exploreId || !exploreEventDetails) {
    return null;
  }

  return (
    <div className="bg-background w-full min-h-screen ">
      <div className="max-w-6xl mx-auto p-3 space-y-5">
        {/* heading */}
        <div className="space-y-1.5">
          <h2 className="text-3xl font-semibold text-primary leading-relaxed">
            Adventure awaits
          </h2>
          <p className="max-w-xl text-secondary text-sm tracking-tight">
            Discover hand-picked expeditions designed for the modern explorer.
            From the peaks of the Kenyan highlands to the depths of the rift
            valley
          </p>
        </div>

        {/* content */}
        <div className="flex flex-col lg:flex-row gap-3 items-center ">
          {/* left  */}
          <div className="w-full h-full shadow-2xl rounded-2xl lg:w-4/7 overflow-hidden space-y-8 hover:scale-95 transition-all duration-700 hover:shadow-xl">
            <div className="relative w-full  h-96 lg:h-120 overflow-hidden ">
              <Image
                alt={exploreEventDetails.title}
                src={exploreEventDetails.image}
                className="object-cover aspect-square hover:scale-110 transition-all duration-500 "
                fill
              />
              <div className="absolute top-5  left-0 right-0 flex items-center justify-between px-5">
                {/* difficulty */}
                <span
                  className={` ${exploreEventDetails.difficulty.toLowerCase() === "easy" ? "bg-surface-100/50 backdrop-blur-xl border border-border " : exploreEventDetails.difficulty.toLowerCase() === "beginner" ? "bg-primary" : exploreEventDetails.difficulty.toLowerCase() === "intermediate" ? "bg-orange-600" : "bg-red-700"} rounded-full text-surface-200  py-1  text-xs font-semibold px-3`}
                >
                  {exploreEventDetails.difficulty}
                </span>
                {/* fav badge */}
                <span className="p-1 rounded-full border-border/90 border bg-secondary/70 text-surface-200 ">
                  <BiHeart size={20} />
                </span>
              </div>
            </div>
            <div className="mt-3 px-5 space-y-6">
              <div className="flex justify-between w-full ">
                <h3 className="text-2xl leading-relaxed text-secondary font-semibold">
                  {exploreEventDetails.title}
                </h3>
                <span className="bg-secondary/30 px-4 py-1 rounded-xl text-accent flex items-center gap-2">
                  <BsStarFill />
                  <span className="font-semibold text-primary">
                    {exploreEventDetails.rating}
                  </span>
                </span>
              </div>
              <p className="flex items-center gap-3 text-primary tracking-wide text-sm">
                <CiLocationOn />
                {exploreEventDetails.location}
              </p>
              <p className="text-sm font-normal max-w-xl text-secondary/80">
                {exploreEventDetails.description}
              </p>
              <div className="flex justify-between  px-12  mb-5">
                <div className="space-y-1 bg-secondary/30 px-3 py-1 rounded-br-2xl rounded-tl-2xl">
                  <span className="text-xs text-secondary">
                    Status for bookng
                  </span>
                  <p className="text-sm font-semibold text-primary text-center">
                    {exploreEventDetails.status}
                  </p>
                </div>
                <div className="space-y-1 bg-accent/30 px-3 py-1 rounded-br-2xl rounded-tl-2xl">
                  <span className="text-xs text-secondary ">Slots left</span>
                  <p className="text-sm font-semibold text-primary text-center">
                    {exploreEventDetails.slotsLeft} out of{" "}
                    {exploreEventDetails.capacity}
                  </p>
                </div>
              </div>
              <div className="flex justify-between  px-12  mb-5">
                <div className="space-y-1 bg-secondary/30 px-3 py-1 rounded-br-2xl rounded-tl-2xl">
                  <span className="text-xs text-secondary">Departure date</span>
                  <p className="text-sm font-semibold text-primary text-center">
                    {new Date(exploreEventDetails.departureDate).toLocaleString(
                      "en-GB",
                      { day: "numeric", month: "long", year: "numeric" },
                    )}
                  </p>
                </div>
                <div className="space-y-1 bg-accent/30 px-3 py-1 rounded-br-2xl rounded-tl-2xl">
                  <span className="text-xs text-secondary ">
                    Distance from Nairobi
                  </span>
                  <p className="text-sm font-semibold text-primary text-center">
                    {exploreEventDetails.distanceFromNairobi}
                  </p>
                </div>
              </div>
              <div className="space-y-2 w-full bg-primary/10 p-2  rounded-2xl">
                <span className="text-sm text-secondary ">Price</span>
                <p className="text-2xl font-semibold text-primary ">
                  KSH: {exploreEventDetails.price.toLocaleString()}
                  <span className="text-secondary font-medium text-sm">
                    (transport to and fro included)
                  </span>
                </p>
              </div>
              <button className="my-3 bg-accent px-8 py-2 text-surface-100 font-semibold text-lg rounded-2xl flex items-center gap-3 hover:gap-4 transition-all duration-700">
                Book Expedition <BsArrowRight className="size-6" />
              </button>
            </div>
          </div>
          {/* right */}
          <div className=""></div>
        </div>
      </div>
    </div>
  );
};

export default ExploreDetailsPage;
