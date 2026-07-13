"use client";

import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  monthlyRevenueData,
  weeklyRevenueData,
  yearlyRevenueData,
} from "@/items/admin.dummy";
import { dummyUpcomingExpeditions } from "@/items/experditions";
import { useState } from "react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import AdminUpcomingExpedition from "./AdminUpcomingExpedition";

const AdminChart = () => {
  const [dataFilter, setDataFilter] = useState<"weekly" | "monthly" | "yearly">(
    "weekly",
  );

  const today = new Date();

  const hike =
    dummyUpcomingExpeditions
      .filter((exp) => new Date(exp.departureDate) >= today)
      .sort(
        (a, b) =>
          new Date(a.departureDate).getTime() -
          new Date(b.departureDate).getTime(),
      )[0] ?? [];

  const dataFilterItems = ["weekly", "monthly", "yearly"] as const;

  const weeklyChartConfig = {
    day: {
      label: "Day",
      color: "#2563eb",
    },
    revenue: {
      label: "Revenue",
      color: "#60a5fa",
    },
  } satisfies ChartConfig;

  const monthlyChartConfig = {
    month: {
      label: "Month",
      color: "#2563eb",
    },
    revenue: {
      label: "Revenue",
      color: "#60a5fa",
    },
  } satisfies ChartConfig;

  const yearlyChartConfig = {
    year: {
      label: "Year",
      color: "#2563eb",
    },
    revenue: {
      label: "Revenue",
      color: "#60a5fa",
    },
  } satisfies ChartConfig;

  const neededData =
    dataFilter === "weekly"
      ? weeklyRevenueData
      : dataFilter === "monthly"
        ? monthlyRevenueData
        : yearlyRevenueData;

  const neededConfig =
    dataFilter === "weekly"
      ? weeklyChartConfig
      : dataFilter === "monthly"
        ? monthlyChartConfig
        : yearlyChartConfig;

  return (
    <div className="flex gap-6 ">
      <div
        className={`bg-surface-50 p-5  min-w-0  rounded-2xl shadow-xl flex-1`}
      >
        <div className="flex items-center justify-between">
          {/* heading */}
          <div className="space-y-1">
            <h4 className="text-2xl font-medium text-primary tracking-tight">
              Financial Performance
            </h4>
            <p className="text-sm font-medium text-secondary tracking-wide">
              Total revenue and booking trends
            </p>
          </div>
          <div className="flex items-center gap-2 bg-surface-200 px-4 py-1 rounded-2xl">
            {dataFilterItems.map((item) => (
              <button
                key={item}
                onClick={() => setDataFilter(item)}
                className={`cursor-pointer ${dataFilter === item ? "text-primary bg-surface-100 " : "text-primary/70"} px-3 py-1 text-sm font-semibold rounded-xl`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="h-auto">
          <ChartContainer config={neededConfig} className="h-140 w-full">
            <BarChart accessibilityLayer data={neededData}>
              <CartesianGrid />
              <XAxis dataKey="label" />
              <ChartTooltip content={<ChartTooltipContent />} />
              <ChartLegend content={<ChartLegendContent />} />

              <Bar dataKey="revenue" fill="var(--color-primary)" radius={20} />
            </BarChart>
          </ChartContainer>
        </div>
      </div>
      <div className="w-96 shrink-0">
        <AdminUpcomingExpedition
          hike={hike}
          today={hike.departureDate === today.toString()}
        />
      </div>
    </div>
  );
};

export default AdminChart;
