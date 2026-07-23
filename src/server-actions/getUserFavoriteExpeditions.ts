import { db } from "@/config/db";
import { expedition, favorites } from "@/schema";
import { eq } from "drizzle-orm";
import { getCurrentSession } from "./getCurrentSession";

export type FavoritesWithExpeditions = {
  userId: string;
  expeditionId: string;
  expedition: {
    id: string;
    title: string;
    image: string;
    difficulty: string;
    location: string;
  };
};

export async function getUserFavoriteExpeditions(): Promise<
  FavoritesWithExpeditions[]
> {
  try {
    const session = await getCurrentSession();
    if (!session) return [];

    const result = await db
      .select()
      .from(favorites)
      .where(eq(favorites.userId, session.user.id))
      .innerJoin(expedition, eq(favorites.expeditionId, expedition.id));

    return result.map((row) => ({
      ...row.favorites,
      expedition: row.expedition,
    }));
  } catch (error) {
    console.log(error);
    return [];
  }
}
