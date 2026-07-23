"use client";

import { FavoritesWithExpeditions } from "@/server-actions/getUserFavoriteExpeditions";
import { ArrowRight } from "lucide-react";
import FavoriteExpeditionCard from "./FavoriteExpeditionCard";
import { useRouter } from "next/navigation";

type FavoriteExpeditionsProps = {
  favorites?: FavoritesWithExpeditions[];
};

const FavoriteExpeditions = ({ favorites = [] }: FavoriteExpeditionsProps) => {
  const router = useRouter();

  if (favorites.length === 0 || !favorites) {
    return (
      <p className="text-muted">
        Please like some expeditions to see them here.
      </p>
    );
  }
  return (
    <div className="bg-surface-100 px-4 py-6 rounded-xl ">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-medium text-primary tracking-wide leading-relaxed">
          Favorite Expeditions
        </h3>
        <span
          onClick={() => router.push("/saved")}
          className="flex items-center gap-2 hover:underline hover:gap-3 cursor-pointer transition-all duration-500 text-secondary hover:text-primary font-medium text-sm"
        >
          View All Favorites <ArrowRight />
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
        {favorites.slice(0, 3).map((fav) => (
          <FavoriteExpeditionCard key={fav.expedition.id} expedition={fav} />
        ))}
      </div>
    </div>
  );
};

export default FavoriteExpeditions;
