import { FavoritesWithExpeditions } from "@/server-actions/getUserFavoriteExpeditions";
import Image from "next/image";
import { FaHeart } from "react-icons/fa6";
import { PiMapPinAreaFill } from "react-icons/pi";

type FavoriteExpeditionCardProps = {
  expedition: FavoritesWithExpeditions;
};

const FavoriteExpeditionCard = ({
  expedition,
}: FavoriteExpeditionCardProps) => {
  const favExp = expedition.expedition;

  return (
    <div className="w-full h-auto bg-white rounded-xl overflow-hidden">
      <div className="w-full h-64 relative">
        <Image
          fill
          className="object-cover overflow-hidden"
          alt={favExp.title}
          src={favExp.image}
        />
        <span className="text-accent bg-white rounded-full p-2 absolute top-4 right-4">
          <FaHeart />
        </span>
      </div>
      <div className="px-2 my-3">
        <div className="flex items-center justify-between">
          <h4 className="text-lg font-semibold text-primary tracking-tight">
            {favExp.title}
          </h4>
          <span className="text-xs bg-surface-50 px-2 py-0.5 uppercase text-secondary rounded">
            {favExp.difficulty}
          </span>
        </div>
        <span className="flex items-center gap-3 text-secondary text-sm">
          <PiMapPinAreaFill /> {favExp.location}
        </span>
      </div>
    </div>
  );
};

export default FavoriteExpeditionCard;
