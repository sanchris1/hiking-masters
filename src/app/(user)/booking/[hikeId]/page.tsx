/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";

const BookingPage = () => {
  const { hikeId } = useParams();
  const router = useRouter();

  useEffect(() => {
    if (!hikeId || hikeId === "no-hike") {
      setTimeout(() => router.push("/explore"), 2000);
    }
  }, [hikeId]);

  if (!hikeId || hikeId === "no-hike") {
    return (
      <div className="flex items-center justify-center w-full h-full min-h-screen flex-col space-y-5">
        <h2 className="text-center font-bold text-primary text-5xl">
          No hike has been selected.
        </h2>
        <p className="text-secondary text-lg font-medium">
          Please select some hike to book your session
        </p>
        <button
          onClick={() => router.push("/explore")}
          className="bg-accent px-8 text-surface-100 rounded font-medium py-2 cursor-pointer"
        >
          Explore Expeditions
        </button>
      </div>
    );
  }

  return <div>BookingPage</div>;
};

export default BookingPage;
