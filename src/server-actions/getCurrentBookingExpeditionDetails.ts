import { headers } from "next/headers";
import { auth } from "../../utils/auth";
import { db } from "@/config/db";
import { booking, expedition } from "@/schema";
import { and, desc, eq } from "drizzle-orm";

export async function getCurrentBookingExpeditionsDetails(
  expeditionId: string,
) {
  const session = await auth.api.getSession({ headers: await headers() });

  if (!session) {
    return null;
  }

  const [bookedExpedition] = await db
    .select()
    .from(expedition)
    .where(eq(expedition.id, expeditionId))
    .leftJoin(
      booking,
      and(
        eq(booking.expeditionId, expedition.id),
        eq(booking.userProfileId, session.user.id),
      ),
    )
    .limit(1)
    .orderBy(desc(booking.createdAt));

  return bookedExpedition;
}
