import { Expedition } from "@/schema";
import Image from "next/image";
import { Backpack, Dumbbell, Leaf } from "lucide-react";

const LeftExploreSide = ({
  upcomingExpedition,
}: {
  upcomingExpedition: Expedition;
}) => {
  const explorersHandbook = [
    {
      title: "Seasonal Packing",
      description:
        "Always layer up. Even in warm months, mountain temperatures drop drastically at night.",
      icon: Backpack,
    },
    {
      title: "Fitness Prep",
      description:
        "Cardio is key. Aim for 30 minutes of incline walking daily at least 2 weeks prior.",
      icon: Dumbbell,
    },
    {
      title: "Leave No Trace",
      description:
        "Pack it in, pack it out. Help us keep our wild spaces pristine for the next generation.",
      icon: Leaf,
    },
  ];
  return (
    <div className="w-full flex flex-col gap-6">
      {/* upcoming hikes */}
      <div className="space-y-3 bg-white shadow-lg p-4 rounded-lg">
        <p className="text-secondary uppercase leading-relaxed text-sm my-2">
          Expedition of the month
        </p>

        <div className="w-full lg:h-72 md:h-84 sm:h-96 h-120  relative">
          <Image
            src={upcomingExpedition?.image}
            alt={upcomingExpedition?.title}
            fill
            className="object-cover rounded-2xl"
          />
        </div>
        <h5 className="text-primary text-xl leading-relaxed  font-semibold tracking-wider">
          {upcomingExpedition?.title}
        </h5>
        <p className="text-primary text-sm ">{upcomingExpedition?.tagline}</p>
        <div className="flex items-center justify-between ">
          <span className="text-lg text-accent tracking-wider font-medium">
            KSH: {upcomingExpedition?.price.toLocaleString()}
          </span>
          <span className="cursor-pointer hover:underline text-primary font-semibold text-sm">
            Explore Now
          </span>
        </div>
      </div>

      {/* explorers handbook */}
      <div className="space-y-3 bg-primary shadow-lg p-4 rounded-lg">
        <h4 className="text-[16px] uppercase font-medium text-surface-50">
          Explorers handbook{" "}
        </h4>
        <div className="space-y-2">
          {explorersHandbook.map((exp) => (
            <div
              key={exp.title}
              className="flex items-start gap-4 text-accent "
            >
              <exp.icon className="size-12" />
              <div className=" ">
                <h4 className="text-[15px] text-surface-50 font-semibold">
                  {exp.title}
                </h4>
                <p className="text-surface-200 font-light">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeftExploreSide;
