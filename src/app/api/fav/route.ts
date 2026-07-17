import { headers } from "next/headers";
import { auth } from "../../../../utils/auth";
import { NextResponse } from "next/server";
import { db } from "@/config/db";
import { favorites } from "@/schema";
import { eq } from "drizzle-orm";

export async function GET() {
  const session = await auth.api.getSession({ headers: await headers() });

  if (!session) {
    return NextResponse.json({ message: "Please authenticate" });
  }

  const userFavorites = await db
    .select()
    .from(favorites)
    .where(eq(favorites.userId, session.user.id));

  return NextResponse.json({ favorites: userFavorites });
}
