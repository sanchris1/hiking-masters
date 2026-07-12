import { NextResponse } from "next/server";
import { auth } from "../../../../utils/auth";
import { headers } from "next/headers";
import { db } from "@/config/db";
import { guide, user, userProfile } from "@/schema";
import { eq } from "drizzle-orm";

export async function GET() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (session?.user.role !== "admin")
    return NextResponse.json({ message: "Unauthorized" }, { status: 400 });

  // i want to fetch all the users then later update them to guide

  const allUsers = await db
    .select()
    .from(user)
    .leftJoin(userProfile, eq(user.id, userProfile.userId))
    .leftJoin(guide, eq(user.id, guide.userId));

  return NextResponse.json({ users: allUsers });
}
