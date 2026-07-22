import { NextResponse } from "next/server";
import { db } from "@/config/db";
import { booking, expedition, guide, schedule, user } from "@/schema";
import { eq, sql } from "drizzle-orm";
import { getCurrentSession } from "@/server-actions/getCurrentSession";

export async function GET() {
  const session = await getCurrentSession();

  if (!session || session.user.role !== "admin") {
    return NextResponse.json({ message: "Not Authorized" });
  }

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
    .leftJoin(schedule, eq(schedule.expeditionId, expedition.id));

  const results = allExpeditions.map((exp) => ({
    ...exp,
    slotsLeft: exp.expedition.capacity - exp.bookedParticipants,
  }));

  return NextResponse.json({ expeditions: results });
}
