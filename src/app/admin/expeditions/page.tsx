/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useEffect, useState } from "react";
import { BiFilter, BiPlus, BiReset, BiUser } from "react-icons/bi";
import { BsWatch } from "react-icons/bs";
import { FaMoneyBill } from "react-icons/fa";
import { FaDoorOpen } from "react-icons/fa6";
import ExpeditionsFilterTable from "./compontents/ExpeditionsFilterTable";
import { useRouter } from "next/navigation";
import {
  categoriesWithValues,
  difficultyLevels,
  statuses,
} from "./compontents/ExpeditionEditor";
import axios from "axios";
import { Expedition, Guide, Schedule, User } from "@/schema";
import toast from "react-hot-toast";

export type ExpeditionWithGuideAndSchedule = {
  expedition: Expedition;
  guide: Guide;
  schedule: Schedule;
  user: User;
  slotsLeft: number;
};

const ExpeditionsPage = () => {
  const [difficulty, setDifficulty] = useState("");
  const [categoriesInput, setCategoriesInput] = useState("");
  const [status, setStatus] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [expeditionWithGuide, setExpeditionWithGuide] = useState<
    ExpeditionWithGuideAndSchedule[]
  >([]);
  const [filteredExpeditions, setFilteredExpeditions] = useState<
    ExpeditionWithGuideAndSchedule[] | null
  >(null);

  const router = useRouter();

  const today = new Date();

  useEffect(() => {
    axios
      .get("/api/admin/expeditions")
      .then(({ data }) => {
        console.log("API Response:", data);

        setExpeditionWithGuide(data.expeditions ?? []);
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  }, []);

  const expeditionsThisMonth =
    expeditionWithGuide.filter((expedition) => {
      const departure = new Date(expedition.expedition.departureDate);

      return (
        departure.getMonth() === today.getMonth() &&
        departure.getFullYear() === today.getFullYear()
      );
    }).length ?? 0;

  const totalExpeditions = expeditionWithGuide.length;
  const fullyBooked =
    expeditionWithGuide.filter((exp) => exp.slotsLeft === 0).length ?? 0;
  const revenueGenerated = 142850;

  const expeditionsStats = [
    {
      icon: BsWatch,
      label: "Total expeditions",
      increase: 12,
      value: totalExpeditions,
    },
    {
      icon: FaDoorOpen,
      label: "Upcoming this month",
      increase: 4.2,
      value: expeditionsThisMonth,
    },
    {
      icon: BiUser,
      label: "Fully booked",
      increase: 2,
      value: fullyBooked,
    },
    {
      icon: FaMoneyBill,
      label: "Revenue Generated",
      increase: 28,
      value: revenueGenerated,
    },
  ];

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  const minDate = tomorrow.toISOString().split("T").at(0);

  const handleApplyFilters = () => {
    const newFilteredExpeditions = expeditionWithGuide.filter((expedition) => {
      const matchesDifficulty =
        !difficulty ||
        expedition.expedition.difficulty === difficulty.toLowerCase();
      const matchesStatus =
        !status || expedition.expedition.status === status.toLowerCase();
      const matchesCategory =
        !categoriesInput ||
        expedition.expedition.category === categoriesInput.toLowerCase();
      const matchesDate =
        !departureDate || expedition.expedition.departureDate === departureDate;
      return (
        matchesDate && matchesDifficulty && matchesStatus && matchesCategory
      );
    });

    return setFilteredExpeditions(newFilteredExpeditions);
  };

  useEffect(() => {
    handleApplyFilters();
  }, [difficulty, status, departureDate, expeditionWithGuide]);

  const handleResetFilters = () => {
    setDifficulty("");
    setDepartureDate("");
    setStatus("");
    setCategoriesInput("");
  };

  useEffect(() => {
    console.log("Filtered expeditions:", filteredExpeditions);
  }, [filteredExpeditions]);

  return (
    <div className="mx-3 my-5 space-y-8">
      {/* header */}
      <div className="flex items-center justify-between w-full ">
        <div className="space-y-1">
          <h1 className="text-3xl text-primary font-semibold leading-relaxed tracking-tight">
            Expeditions
          </h1>
          <p className="text-secondary font-medium text-sm">
            Manage, organize and monitor all hiking expeditions from one place
          </p>
        </div>
        <button
          className="bg-primary text-surface-200 px-5 py-2 rounded-xl text-sm flex items-center font-medium cursor-pointer  gap-2"
          onClick={() => router.push("/admin/expeditions/new")}
        >
          <BiPlus />
          Add new Expeditions
        </button>
      </div>
      {/* content */}
      <div className="">
        {/* left div */}
        <div className="col-span-2  flex flex-col gap-5">
          <div className="flex items-end gap-5 flex-wrap">
            {expeditionsStats.map((stat) => (
              <div
                key={stat.label}
                className="border border-gray-300 rounded-2xl hover:border-secondary p-2 flex-1 space-y-2.5 bg-surface-50 shadow-lg hover:shadow-xl"
              >
                <div className="flex items-center justify-between ">
                  <div className="flex items-center justify-center px-3 py-1 bg-secondary text-surface-100 rounded-xl">
                    <stat.icon className="size-5" />
                  </div>
                  <span
                    className={`${stat.increase > 10 ? "bg-primary/90 " : "bg-red-500"} px-3 py-1 rounded-2xl text-surface-200 text-sm font-semibold`}
                  >
                    {stat.increase}%
                  </span>
                </div>
                <div className="space-y-1 mt-6">
                  <h6 className="text-xs font-medium text-secondary tracking-wide">
                    {stat.label}
                  </h6>
                  <span className="font-semibold text-primary text-lg">
                    {stat.value}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full rounded-2xl bg-surface-50 py-4 px-2 text-sm font-medium text-primary">
            <div className="flex items-end gap-8 flex-wrap px-12">
              {/* difficulty */}
              <div className="space-y-2 flex flex-col">
                <label htmlFor="" className="">
                  Difficulty
                </label>
                <select
                  className="w-full bg-surface-200 rounded-xl px-4 focus:border-primary border border-transparent py-3"
                  value={difficulty}
                  onChange={(e) => setDifficulty(e.target.value)}
                >
                  <option value="">All difficulties</option>
                  {difficultyLevels.map((diff) => (
                    <option value={diff.label} key={diff.label}>
                      {diff.label}
                    </option>
                  ))}
                </select>
              </div>
              {/* Status */}
              <div className="space-y-2 flex flex-col ">
                <label htmlFor="" className="">
                  Status
                </label>
                <select
                  className="w-full bg-surface-200 rounded-xl px-4 focus:border-primary border border-transparent py-3"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option value="">All statues</option>
                  {statuses.map((stat) => (
                    <option value={stat.label} key={stat.label}>
                      {stat.label}
                    </option>
                  ))}
                </select>
              </div>
              {/* categories */}
              <div className="space-y-2 flex flex-col ">
                <label htmlFor="" className="">
                  Categories
                </label>
                <select
                  className="w-full bg-surface-200 rounded-xl px-4 focus:border-primary border border-transparent py-3"
                  value={categoriesInput}
                  onChange={(e) => setCategoriesInput(e.target.value)}
                >
                  <option value="">All Categories</option>
                  {categoriesWithValues.map((cat) => (
                    <option value={cat.value} key={cat.value}>
                      {cat.label}
                    </option>
                  ))}
                </select>
              </div>
              {/* Date */}
              <div className="space-y-2 flex flex-col">
                <label htmlFor="" className="">
                  Date
                </label>
                <input
                  value={departureDate}
                  onChange={(e) => setDepartureDate(e.target.value)}
                  min={minDate}
                  type="date"
                  className="w-full rounded-xl bg-surface-100 border border-border py-3 px-4 text-sm text-primary outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/10"
                />
              </div>
              {/* apply */}
              <div className="flex items-center gap-5">
                <button
                  className="flex  items-center gap-3 px-12 rounded-xl bg-surface-100 border border-border   text-sm text-primary active:bg-surface-200 hover:bg-surface-200/80  h-11 justify-center "
                  onClick={handleApplyFilters}
                >
                  <BiFilter /> Apply Filters
                </button>
                <button
                  className="flex  items-center gap-3 px-10 rounded-xl bg-surface-100 border border-border   text-sm text-primary active:bg-surface-200 hover:bg-surface-200/80  h-11 justify-center "
                  onClick={handleResetFilters}
                >
                  <BiReset className="size-6" /> Reset Filters
                </button>
              </div>
            </div>
          </div>

          {/* the filtered expeditions */}
          <div className="w-full overflow-x-auto rounded-2xl border border-border ">
            {!filteredExpeditions || filteredExpeditions.length === 0 ? (
              <p>There are no expeditions, please clear the filters</p>
            ) : (
              <ExpeditionsFilterTable
                filteredExpeditions={filteredExpeditions}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpeditionsPage;
