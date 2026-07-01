import React from "react";
import {
  GiFamilyHouse,
  GiForest,
  GiMountains,
  GiSunrise,
  GiWaterfall,
} from "react-icons/gi";
import { SiAnimalplanet } from "react-icons/si";
import { SlCalender } from "react-icons/sl";

const VisitAreasComponent = () => {
  const visitAreas = [
    {
      label: "Mountains",
      icon: GiMountains,
    },
    {
      label: "Forest Trails",
      icon: GiForest,
    },
    {
      label: "Waterfalls",
      icon: GiWaterfall,
    },
    {
      label: "Sunrise Hikes",
      icon: GiSunrise,
    },
    {
      label: "Wildlife",
      icon: SiAnimalplanet,
    },
    {
      label: "Family Friendly",
      icon: GiFamilyHouse,
    },
    {
      label: "Weekend",
      icon: SlCalender,
    },
  ];

  return (
    <section className="bg-surface-50 w-full p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center overflow-y-auto gap-28 justify-between">
          {visitAreas.map((areas) => (
            <div className="flex flex-col gap-3 items-center" key={areas.label}>
              <div className="bg-surface-200 p-3 rounded-full  flex items-center justify-center">
                <areas.icon className="size-6" />
              </div>
              <span className="font-semibold text-secondary text-sm">
                {areas.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisitAreasComponent;
