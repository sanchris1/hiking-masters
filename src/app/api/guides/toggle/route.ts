import { user } from "@/schema";
import { NextRequest, NextResponse } from "next/server";
import { auth } from "../../../../../utils/auth";
import { db } from "@/config/db";
import { eq } from "drizzle-orm";
import { headers } from "next/headers";

export async function PATCH(req: NextRequest) {
  const { userId } = await req.json();

  console.log("user id", userId);

  const session = await auth.api.getSession({ headers: await headers() });

  if (!session || session.user.role !== "admin")
    return NextResponse.json({ message: "Unauthorized" });

  const [is_user] = await db.select().from(user).where(eq(user.id, userId));

  if (!is_user) return NextResponse.json({ message: "Not user" });

  await db
    .update(user)
    .set({ isGuide: !is_user.isGuide })
    .where(eq(user.id, userId));

  return NextResponse.json({ message: "User updated successfully" });
}
