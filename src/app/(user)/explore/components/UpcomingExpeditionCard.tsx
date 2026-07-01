"use client";

import { UpcomingExpedition } from "@/types/types";
import { useRouter } from "next/navigation";
import { BiUser } from "react-icons/bi";

const UpcomingExpeditionCard = ({
  expedition,
}: {
  expedition: UpcomingExpedition;
}) => {
  const router = useRouter();
  const date = expedition.departureDate;
  const formattedDate = new Date(date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const today = new Date();
  const expeditionDate = new Date(date);

  const difference = expeditionDate.getTime() - today.getTime();

  const daysLeft = Math.ceil(difference / (1000 * 60 * 60 * 24));
  return (
    <div className="flex items-center  gap-2">
      <div className="flex flex-col items-center h-full">
        <div className="w-8 h-5 relative  rounded-full bg-orange-500 flex items-center justify-center text-xs font-semibold text-surface-200 ">
          <span className="animate-ping bg-accent absolute inset-0 rounded-full" />{" "}
          {expedition.slotsLeft}
        </div>

        <div className="w-0.5 flex-1 bg-green-700 mt-2" />
      </div>

      <div
        onClick={() => router.push(`/booking/${expedition.id}`)}
        className="bg-surface-50/30 backdrop-blur-sm border border-border rounded-xl p-2 flex items-center justify-between w-full gap-2"
      >
        <div className="flex flex-col gap-3">
          <span className="text-xs font-medium text-orange-600">
            {formattedDate}
          </span>
          <h5 className="text-sm font-semibold text-surface-200">
            {expedition.title}
          </h5>
          <div className="flex items-center gap-1.5">
            <span className="w-7 h-7 rounded-full bg-surface-50/30 text-accent flex items-center justify-center">
              <BiUser />
            </span>
            <div className="flex flex-col text-xs ">
              <span className="text-surface-200 font-light"> Teams Guide</span>
              <span className="font-medium text-text-accent">
                {expedition.guide}
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 text-xs ">
          <span className="text-[10px]  text-surface-50/80 font-light text-nowrap">
            Starts in...
          </span>
          <span className="text-surface-200 font-medium">{daysLeft} days</span>
          <p className="text-surface-50/70 font-medium">
            {expedition.capacity - expedition.slotsLeft} /{" "}
            <span className="text-orange-600">{expedition.capacity}</span> seats
            taken
          </p>
        </div>
      </div>
    </div>
  );
};

export default UpcomingExpeditionCard;
