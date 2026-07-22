import { db } from "@/config/db";
import { booking, expedition, schedule } from "@/schema";
import { and, asc, eq, gte } from "drizzle-orm";
import { getCurrentSession } from "./getCurrentSession";

export async function getUserNextExpedition() {
  const session = await getCurrentSession();
  if (!session) return null;

  const today = new Date().toISOString().split("T")[0];

  const [nextExpedition] = await db
    .select()
    .from(booking)
    .innerJoin(expedition, eq(booking.expeditionId, expedition.id))
    .leftJoin(schedule, eq(schedule.expeditionId, expedition.id))
    .where(
      and(
        eq(booking.userProfileId, session.user.id),
        gte(expedition.departureDate, today),
      ),
    )
    .orderBy(asc(expedition.departureDate))
    .limit(1);

  return { expedition: nextExpedition };
}
