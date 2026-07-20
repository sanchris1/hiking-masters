import { headers } from "next/headers";
import { auth } from "../../utils/auth";
import { db } from "@/config/db";
import { expedition, favorites } from "@/schema";
import { eq } from "drizzle-orm";

export async function getUserFavoriteExpeditions() {
  const session = await auth.api.getSession({ headers: await headers() });

  if (!session?.user.id) {
    return null;
  }

  const fav = await db
    .select()
    .from(favorites)
    .where(eq(favorites.userId, session.user.id))
    .innerJoin(expedition, eq(favorites.expeditionId, expedition.id));

  if (!fav) return { message: "Please make sure to have some favorites" };

  return { favorites: fav };
}
