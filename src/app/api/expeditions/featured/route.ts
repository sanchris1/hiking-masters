import { db } from "@/config/db";
import { expedition } from "@/schema";
import { desc, gt } from "drizzle-orm";
import { NextResponse } from "next/server";
export async function GET() {
  const today = new Date();

  const featuredExpeditions = await db
    .select()
    .from(expedition)
    .limit(6)
    .where(gt(expedition.departureDate, today.toISOString().split("T")[0]))
    .orderBy(desc(expedition.departureDate));

  return NextResponse.json({ expeditions: featuredExpeditions });
}
