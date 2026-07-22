import { db } from "@/config/db";
import { expedition, favorites } from "@/schema";
import { eq } from "drizzle-orm";
import { getCurrentSession } from "./getCurrentSession";

export async function getUserFavoriteExpeditions() {
  const session = await getCurrentSession();
  if (!session) return null;

  const fav = await db
    .select()
    .from(favorites)
    .where(eq(favorites.userId, session.user.id))
    .innerJoin(expedition, eq(favorites.expeditionId, expedition.id));

  if (!fav) return { message: "Please make sure to have some favorites" };

  return { favorites: fav };
}
