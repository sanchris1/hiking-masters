"use client";
import UpcomingExpeditionCard from "./UpcomingExpeditionCard";
import axios from "axios";
import { useState } from "react";
import { ExpeditionWithSlotsLeft } from "../[exploreId]/components/ExploreDetailsHero";

const UpcomingExpeditions = () => {
  const [expedition, setExpedition] = useState<ExpeditionWithSlotsLeft[]>([]);

  axios
    .get("/api/expeditions")
    .then(({ data }) => {
      setExpedition(data.expeditions);
    })
    .catch((error) => {
      console.log(error);
    });
  return (
    <section className="w-full bg-linear-to-tr from-secondary via-text-accent to-teal-950 p-4 lg:p-8 xl:p-12 my-12 space-y-6">
      <h2 className="text-surface-200 text-3xl font-semibold leading-tight">
        Upcoming Expeditions
      </h2>
      {/* the expeditions cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-12">
        {expedition.slice(0, 4).map((exp) => (
          <UpcomingExpeditionCard key={exp.id} expedition={exp} />
        ))}
      </div>
    </section>
  );
};

export default UpcomingExpeditions;
