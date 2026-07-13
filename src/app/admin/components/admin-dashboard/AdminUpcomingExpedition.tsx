import { UpcomingExpedition } from "@/types/types";
import Image from "next/image";

const AdminUpcomingExpedition = ({
  hike,
  today,
}: {
  hike: UpcomingExpedition;
  today: boolean;
}) => {
  return (
    <div className="flex-1 bg-white rounded-xl shadow-lg h-full">
      <h4
        className={`text-lg m-3 font-semibold px-2 py-1 text-center rounded-full ${today ? "text-primary bg-accent/30" : "text-orange-700 bg-primary/30"}`}
      >
        {today ? "Today's hike" : "Upcoming hike"}
      </h4>
      <div className="w-full h-1/2 relative rounded-xl overflow-hidden">
        <Image
          alt={hike.title}
          fill
          className="object-cover aspect-square overflow-hidden"
          src={hike.image}
        />
      </div>
      <div className="my-2 mx-6 bg-surface-200/20 rounded-2xl p-3 shadow-2xl space-y-3">
        <h3 className="leading-relaxed font-bold tracking-wide text-2xl text-primary">
          {hike.title}
        </h3>
        {/* <p className="">{hike.description}</p> */}
        <div className="flex items-center justify-between">
          <p className="text-sm text-secondary font-medium">Difficulty:</p>
          <span className="text-sm text-primary font-semibold">
            {hike.difficulty}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-sm text-secondary font-medium">Meeting point:</p>
          <span className="text-sm text-primary font-semibold">
            {hike.meetingPoint}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-sm text-secondary font-medium">Tour guide:</p>
          <span className="text-sm text-primary font-semibold">
            {hike.guide}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-sm text-secondary font-medium">Slots left:</p>
          <span className="text-sm text-primary font-semibold">
            {hike.slotsLeft}/{hike.capacity}
          </span>
        </div>
      </div>
    </div>
  );
};

export default AdminUpcomingExpedition;
