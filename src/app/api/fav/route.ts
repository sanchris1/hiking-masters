import { headers } from "next/headers";
import { auth } from "../../../../utils/auth";
import { NextRequest, NextResponse } from "next/server";
import { db } from "@/config/db";
import { favorites } from "@/schema";
import { and, eq } from "drizzle-orm";

export async function GET() {
  const session = await auth.api.getSession({ headers: await headers() });

  if (!session) {
    return NextResponse.json({ message: "Please authenticate" });
  }

  const userFavorites = await db
    .select({ expeditionId: favorites.expeditionId })
    .from(favorites)
    .where(eq(favorites.userId, session.user.id));

  const userFavoritesIds = userFavorites.map((fav) => fav.expeditionId);

  return NextResponse.json({ favorites: userFavoritesIds });
}

export async function PATCH(request: NextRequest) {
  const { expeditionId }: { expeditionId: string } = await request.json();

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

    return NextResponse.json({
      message: "Removed from the favorites",
    });
  }

  await db.insert(favorites).values({
    expeditionId,
    userId: session.user.id,
  });

  return NextResponse.json({
    message: "Added to favorites",
  });
}
