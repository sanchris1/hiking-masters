import { db } from "@/config/db";
import { booking, expedition, guide, schedule, user } from "@/schema";
import { desc, eq, gt, sql } from "drizzle-orm";
import { NextResponse } from "next/server";
export async function GET() {
  const today = new Date();

  const allExpeditions = await db
    .select({
      expedition,
      bookedParticipants: sql<number>`COALESCE(SUM(${booking.participants}),0)`,
    })
    .from(expedition)
    .leftJoin(booking, eq(expedition.id, booking.expeditionId))
    .groupBy(expedition.id)
    .leftJoin(guide, eq(expedition.id, guide.expeditionId))
    .leftJoin(user, eq(guide.userId, user.id))
    .leftJoin(schedule, eq(schedule.expeditionId, expedition.id))
    .limit(6)
    .where(gt(expedition.departureDate, today.toISOString().split("T")[0]))
    .orderBy(desc(expedition.departureDate));

  const results = allExpeditions.map((exp) => ({
    ...exp,
    slotsLeft: exp.expedition.capacity - exp.bookedParticipants,
  }));

  return NextResponse.json({ expeditions: results });
}
