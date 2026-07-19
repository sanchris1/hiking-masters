import { db } from "@/config/db";
import { booking, expedition, guide, schedule } from "@/schema";
import { eq, sql } from "drizzle-orm";

export async function getExpeditionDetails(expeditionId: string) {
  const [result] = await db
    .select()
    .from(expedition)
    .leftJoin(guide, eq(guide.expeditionId, expedition.id))
    .leftJoin(schedule, eq(schedule.expeditionId, expedition.id))
    .where(eq(expedition.id, expeditionId));

  const [{ bookedParticipants }] = await db
    .select({
      bookedParticipants: sql<number>`COALESCE(SUM(${booking.participants}), 0)`,
    })
    .from(booking)
    .where(eq(booking.expeditionId, expeditionId));

  if (!result) return null;

  return {
    ...result,
    expedition: {
      ...result.expedition,
      slotsLeft: result.expedition.capacity - bookedParticipants,
    },
  };
}
