"use client";

import { HikingTour } from "@/types/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { MdArrowOutward } from "react-icons/md";

const FeaturedHikesCard = ({
  image,
  category,
  title,
  id,
  description,
}: HikingTour) => {
  const capitalize = (str: string) => str[0].toUpperCase() + str.slice(1);

  const router = useRouter();

  return (
    <div className="bg-card shadow-sm w-full h-100 rounded-2xl overflow-hidden">
      {/* image div */}
      <div className="relative w-full h-full group">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-125 duration-700"
        />
        <div className="absolute inset-0 bg-linear-to-t from-primary via-primary/50 to-transparent" />
        <div
          className={`absolute top-5 left-5 text-surface-50 text-sm font-medium   px-3 rounded-full ${category === "hard" ? "bg-accent" : category === "moderate" ? "bg-text-accent " : "bg-surface-50/30 border border-border"}`}
        >
          {capitalize(category)}
        </div>
        <div className="absolute bottom-0 right-0 left-0 text-surface-50 text-sm font-medium  py-3 px-2 space-y-2">
          <h3 className="font-semibold text-accent text-lg">{title}</h3>
          <p className="text-xs text-surface-50/80 font-light">{description}</p>
          <button
            onClick={() => router.push(`/explore/${id}`)}
            className="text-xs font-light flex items-center gap-2 hover:gap-3 duration-500 bg-surface-50/4 rounded-full px-3"
          >
            View details
            <MdArrowOutward />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedHikesCard;
