import { db } from "@/config/db";
import { booking, expedition } from "@/schema";
import { desc, eq } from "drizzle-orm";
import { getCurrentSession } from "./getCurrentSession";

export async function getCurrentUserBookings() {
  const session = await getCurrentSession();
  if (!session) return null;

  const currentUserBookings = await db
    .select()
    .from(booking)
    .where(eq(booking.userProfileId, session.user.id))
    .leftJoin(expedition, eq(expedition.id, booking.expeditionId))
    .orderBy(desc(expedition.departureDate));

  return currentUserBookings;
}
