/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import Button from "@/app/ui/Button";
import { useEffect, useState } from "react";
import { Expedition } from "@/schema";
import axios from "axios";
import toast from "react-hot-toast";
import FeaturedExpeditionsCard from "./FeaturedExpeditionsCard";
import { useRouter } from "next/navigation";

const FeaturedExpeditions = () => {
  //okay i am thinking of what to display here
  const [loading, setLoading] = useState(false);
  const [featuredExpeditions, setFeaturedExpeditions] = useState<Expedition[]>(
    [],
  );
  const router = useRouter();
  async function fetchFeaturedExpeditions() {
    try {
      setLoading(true);

      const { data } = await axios.get("/api/expeditions/featured");

      setFeaturedExpeditions(data.expeditions);
    } catch (error) {
      console.error(error);
      if (axios.isAxiosError(error)) {
        toast.error(
          error.response?.data.message || "Error fetching featured products",
        );
      }
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchFeaturedExpeditions();
  }, []);

  return (
    <section className="bg-surface-50  py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* heading */}
        <div className="flex lg:justify-between lg:items-end items-start gap-5 lg:flex-row flex-col">
          <div className="space-y-5">
            <h2 className="text-4xl font-semibold text-text-accent ">
              Featured Expeditions
            </h2>
            <p className="max-w-3xl text-sm text-text-accent">
              Curated paths for every level of experience, from alpine meadows
              to technical ridge lines. Each journey is limited to small groups
              for intimacy and safety.
            </p>
          </div>
          <Button type="button" onClick={() => router.push("/explore")}>
            View all the expeditions
          </Button>
        </div>

        {/* the expeditions */}
        {loading && <p className="">Loading expeditions...</p>}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-5">
          {featuredExpeditions.map((hike) => (
            <FeaturedExpeditionsCard key={hike.id} hike={hike} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedExpeditions;
