import { NextResponse } from "next/server";
import { db } from "@/config/db";
import { user, userProfile } from "@/schema";
import { eq } from "drizzle-orm";
import { getCurrentSession } from "@/server-actions/getCurrentSession";

export async function GET() {
  const session = await getCurrentSession();

  if (session?.user.role !== "admin")
    return NextResponse.json({ message: "Unauthorized" }, { status: 400 });

  // i want to fetch all the users then later update them to guide

  const allUsers = await db
    .select()
    .from(user)
    .leftJoin(userProfile, eq(user.id, userProfile.userId));

  return NextResponse.json({ users: allUsers });
}
