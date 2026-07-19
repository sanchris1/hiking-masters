/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import ExploreFeaturedAdventuresCard, {
  ExpeditionWithSlots,
} from "../cards/ExploreFeaturedAdventuresCard";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import LeftExploreSide from "./LeftExploreSide";

const ExploreFeaturedAdventures = () => {
  const [expeditions, setExpeditions] = useState<ExpeditionWithSlots[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchAllExpeditions = async () => {
    try {
      setLoading(true);

      const { data: allExpeditions } = await axios.get("/api/expeditions");
      console.log("All expeditions from EFA page:", allExpeditions.expeditions);

      if (allExpeditions.length === 0 || !allExpeditions)
        return toast.error("No, expeditions found");

      setExpeditions(allExpeditions.expeditions);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllExpeditions();
  }, []);

  const today = new Date();
  const upcomingExpedition = expeditions
    .filter((expedition) => new Date(expedition.departureDate) >= today)
    .sort(
      (a, b) =>
        new Date(a.departureDate).getTime() -
        new Date(b.departureDate).getTime(),
    )[0];

  console.log(expeditions);

  return (
    <section className="my-12 bg-white ">
      <div className="max-w-7xl mx-auto p-3 space-y-3">
        {/* heading */}
        <div className="space-y-1 ">
          <h2 className="text-2xl font-semibold text-primary">
            Featured Adventures
          </h2>
          <p className="text-sm text-secondary">
            Hand-picked adventures for every type of hiker
          </p>
        </div>
        {/* adventures arrays of cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="space-y-3 lg:col-span-8">
            {expeditions?.map((hike) => (
              <ExploreFeaturedAdventuresCard key={hike.id} hike={hike} />
            ))}
          </div>
          <aside className="lg:col-span-4">
            <LeftExploreSide upcomingExpedition={upcomingExpedition} />
          </aside>
        </div>
      </div>
    </section>
  );
};

export default ExploreFeaturedAdventures;
