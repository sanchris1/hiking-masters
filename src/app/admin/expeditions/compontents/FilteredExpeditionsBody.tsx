/* eslint-disable @next/next/no-img-element */
"use client";
import { BiUser } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { ExpeditionWithGuideAndSchedule } from "../page";

const FilteredExpeditionsBody = ({
  expedition,
  handleOpenActionMenu,
}: {
  expedition: ExpeditionWithGuideAndSchedule;
  handleOpenActionMenu: (
    e: React.MouseEvent<HTMLButtonElement>,
    expedition: ExpeditionWithGuideAndSchedule,
  ) => void;
}) => {
  const difficultyColors: Record<string, string> = {
    Easy: "bg-emerald-100 text-emerald-700 border border-emerald-200",

    Beginner: "bg-lime-100 text-lime-700 border border-lime-200",

    Intermediate: "bg-amber-100 text-amber-700 border border-amber-200",

    Advanced: "bg-orange-100 text-orange-700 border border-orange-200",

    Expert: "bg-red-100 text-red-700 border border-red-200",
  };

  // const statusColors: Record<string, string> = {
  //   Open: "bg-emerald-100 text-emerald-700 border border-emerald-200",

  //   Upcoming: "bg-sky-100 text-sky-700 border border-sky-200",

  //   Limited: "bg-amber-100 text-amber-700 border border-amber-200",

  //   "Almost Full": "bg-orange-100 text-orange-700 border border-orange-200",

  //   "Fully Booked": "bg-red-100 text-red-700 border border-red-200",

  //   Closed: "bg-red-100 text-red-700 border border-red-200",

  //   Cancelled: "bg-gray-100 text-gray-700 border border-gray-200",
  // };

  return (
    <tr className="border-t border-border hover:bg-surface-100 py-5  transition-colors">
      <td className="w-90 px-5 py-6">
        <div className="flex items-center px-1 gap-2">
          <img
            src={expedition.expedition.image}
            alt={expedition.expedition.title}
            className="h-14 w-14 rounded-xl object-cover"
          />
          <div className="">
            <p className="text-sm font-semibold text-primary ">
              {expedition.expedition.title}
            </p>
            <span className="font-medium text-secondary text-xs">
              {expedition.expedition.location}
            </span>
          </div>
        </div>
      </td>
      <td>
        <div className="flex flex-col">
          <span className="text-sm text-secondary ">
            {expedition.expedition.departureDate}
          </span>
          {/* <span className="text-sm text-secondary ">{expedition.duration}</span> */}
        </div>
      </td>
      <td>
        <div className="flex items-center  gap-2">
          <BiUser className="size-5 " />
          <p className="text-sm font-semibold text-primary ">
            {expedition.user?.name}
          </p>
        </div>
      </td>
      <td>
        <span
          className={`text-sm font-medium px-2 py-1 rounded-2xl ${difficultyColors[expedition.expedition.difficulty]}} `}
        >
          {expedition.expedition.difficulty}
        </span>
      </td>
      {/* slots */}
      <td>
        <div className="flex flex-col gap-1">
          <div className="h-2 rounded-full bg-surface-200">
            <div
              className="h-full rounded-full bg-primary"
              style={{
                width: `${((expedition.expedition.capacity - expedition.slotsLeft) / expedition.expedition.capacity) * 100}%`,
              }}
            />
          </div>
          <p className="text-xs text-secondary">
            {expedition.slotsLeft}/{expedition.expedition.capacity} left
          </p>
        </div>
      </td>
      {/* status */}
      <td>
        {" "}
        <span className={`text-sm font-medium px-2 py-1 rounded-2xl  `}>
          {expedition.expedition.status}
        </span>
      </td>
      {/* action */}
      <td>
        <button
          className="rounded-lg p-2 hover:bg-surface-200 transition "
          onClick={(e) => handleOpenActionMenu(e, expedition)}
        >
          <BsThreeDotsVertical />
        </button>
      </td>
    </tr>
  );
};

export default FilteredExpeditionsBody;
