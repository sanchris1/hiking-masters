import { headers } from "next/headers";
import { auth } from "../../utils/auth";
import { db } from "@/config/db";
import { favorites } from "@/schema";
import { and, eq } from "drizzle-orm";

export async function toggleFavoritesServerAction(expeditionId: string) {
  const session = await auth.api.getSession({ headers: await headers() });

  if (!session) throw new Error("Session not found");

  const [fav] = await db
    .select()
    .from(favorites)
    .where(
      and(
        eq(favorites.userId, session.user.id),
        eq(favorites.expeditionId, expeditionId),
      ),
    );

  const isFav = !!fav;

  if (isFav) {
    await db
      .delete(favorites)
      .where(
        and(
          eq(favorites.userId, session.user.id),
          eq(favorites.expeditionId, expeditionId),
        ),
      );

    return {
      isFav: false,
      message: "Removed from the favorites",
    };
  }

  await db.insert(favorites).values({
    expeditionId,
    userId: session.user.id,
  });

  return {
    isFav: true,
    message: "Added to favorites",
  };
}
