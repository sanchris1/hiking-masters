import { getUserNextExpedition } from "@/server-actions/getUserNextExpedition";
import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineDepartureBoard } from "react-icons/md";

const NextExpedition = async () => {
  const nextExpedition = await getUserNextExpedition();

  if (!nextExpedition)
    return (
      <div>
        <h1 className="">No Expedition</h1>
        <span className="">Please book with us and enjoy one</span>
      </div>
    );

  return (
    <div className="space-y-4 w-full overflow-hidden bg-white  rounded-xl shadow border-border border">
      <div className="flex flex-col lg:flex-row items-center gap-3">
        <div className="w-full lg:w-1/2 h-80 relative">
          <Image
            fill
            className="overflow-hidden object-cover aspect-square"
            alt={nextExpedition.expedition.expedition.title}
            src={nextExpedition.expedition.expedition.image}
          />
        </div>

        <div className="space-y-3">
          {" "}
          <span className="text-xs text-secondary uppercase">
            Next Expedition
          </span>
          <h3 className="text-primary text-xl font-semibold">
            {nextExpedition.expedition.expedition.title}
          </h3>
          <div className="flex items-center gap-3 text-primary text-[15px] ">
            <MdOutlineDepartureBoard /> Departure:{" "}
            <span className="font-semibold">
              {" "}
              {nextExpedition.expedition.expedition.departureDate}
            </span>
          </div>
          <div className="flex items-center gap-3 text-primary text-[15px] ">
            <FaLocationDot /> Meeting Point:{" "}
            <span className="font-semibold">
              {" "}
              {nextExpedition.expedition.schedule?.meetingPoint}
            </span>
          </div>
          <button className="bg-primary text-white font-medium px-3 py-1.5 rounded-xl ">
            View Booking Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default NextExpedition;
