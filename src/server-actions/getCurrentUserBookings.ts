import { headers } from "next/headers";
import { auth } from "../../utils/auth";
import { db } from "@/config/db";
import { booking, expedition } from "@/schema";
import { eq } from "drizzle-orm";

export async function getCurrentUserBookings() {
  const session = await auth.api.getSession({ headers: await headers() });

  if (!session?.user.id) {
    return [];
  }

  const currentUserBookings = await db
    .select()
    .from(booking)
    .where(eq(booking.userProfileId, session.user.id))
    .leftJoin(expedition, eq(expedition.id, booking.expeditionId));

  return currentUserBookings;
}
