import { GiMoneyStack } from "react-icons/gi";
import { ExpeditionProps } from "./ExploreDetailsHero";
import { HiArrowTrendingUp } from "react-icons/hi2";
import { IoPeople } from "react-icons/io5";
import { MdMeetingRoom, MdOutlineControlPoint } from "react-icons/md";
import { BiSolidTime, BiSolidTimeFive } from "react-icons/bi";
import { HiStatusOnline } from "react-icons/hi";

const ExploreDetailsBody = ({
  expedition,
  guide,
  schedule,
}: ExpeditionProps) => {
  return (
    <div className="w-full lg:w-7/12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-6 ">
        <div className="flex items-start gap-4 border border-border bg-white  text-secondary p-2 rounded-2xl">
          <span className="flex items-center justify-center p-1 bg-red-600/20 rounded-full">
            {" "}
            <HiArrowTrendingUp className="size-8" />
          </span>
          <div className="">
            <span className="text-sm font-medium">Difficulty</span>
            <p className="text-nowrap font-semibold text-primary">
              {expedition.difficulty}
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4 border border-border bg-white  text-secondary p-2 rounded-2xl">
          <span className="flex items-center justify-center p-1 bg-green-500/20 rounded-full">
            {" "}
            <MdOutlineControlPoint className="size-8" />
          </span>
          <div className="">
            <span className="text-sm font-medium">Guide</span>
            <p className="text-nowrap font-semibold text-primary">
              {guide?.contact}
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4 border border-border bg-white  text-secondary p-2 rounded-2xl">
          <span className="flex items-center justify-center p-1 bg-green-500/20 rounded-full">
            {" "}
            <IoPeople className="size-8" />
          </span>
          <div className="">
            <span className="text-sm font-medium">Group Size</span>
            <p className="text-nowrap font-semibold text-primary">
              {expedition.capacity}
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4 border border-border bg-white  text-secondary p-2 rounded-2xl">
          <span className="flex items-center justify-center p-1 bg-green-500/20 rounded-full">
            {" "}
            <MdMeetingRoom className="size-8" />
          </span>
          <div className="">
            <span className="text-sm font-medium">Meeting Point</span>
            <p className="text-nowrap font-semibold text-primary">
              {schedule?.meetingPoint}
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4 border border-border bg-white  text-secondary p-2 rounded-2xl">
          <span className="flex items-center justify-center p-1 bg-red-600/20 rounded-full">
            {" "}
            <HiStatusOnline className="size-8" />
          </span>
          <div className="">
            <span className="text-sm font-medium">Status</span>
            <p className="text-nowrap font-semibold text-primary">
              {expedition.status}
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4 border border-border bg-white  text-secondary p-2 rounded-2xl">
          <span className="flex items-center justify-center p-1 bg-green-500/20 rounded-full">
            {" "}
            <GiMoneyStack className="size-8" />
          </span>
          <div className="">
            <span className="text-sm font-medium">Price</span>
            <p className="text-nowrap font-semibold text-primary">
              KSH: {expedition.price.toLocaleString()}
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4 border border-border bg-white  text-secondary p-2 rounded-2xl">
          <span className="flex items-center justify-center p-1 bg-green-500/20 rounded-full">
            {" "}
            <BiSolidTime className="size-8" />
          </span>
          <div className="">
            <span className="text-sm font-medium">Meeting Time</span>
            <p className="text-nowrap font-semibold text-primary">
              {schedule?.meetingTime}
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4 border border-border bg-white  text-secondary p-2 rounded-2xl">
          <span className="flex items-center justify-center p-1 bg-green-500/20 rounded-full">
            {" "}
            <BiSolidTimeFive className="size-8" />
          </span>
          <div className="">
            <span className="text-sm font-medium">Departure Time</span>
            <p className="text-nowrap font-semibold text-primary">
              {schedule?.departureTime}
            </p>
          </div>
        </div>
      </div>
      <div className="my-5">
        <h2 className="text-3xl font-semibold text-primary uppercase leading-relaxed">
          The journey
        </h2>
        <p className="text-sm text-secondary">{expedition.description}</p>
      </div>
    </div>
  );
};

export default ExploreDetailsBody;
