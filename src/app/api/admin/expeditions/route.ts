import { headers } from "next/headers";
import { auth } from "../../../../../utils/auth";
import { NextResponse } from "next/server";
import { db } from "@/config/db";
import { expedition, guide, schedule, user } from "@/schema";
import { eq } from "drizzle-orm";

export async function GET() {
  const session = await auth.api.getSession({ headers: await headers() });

  if (!session || session.user.role !== "admin") {
    return NextResponse.json({ message: "Not Authorized" });
  }

  const allExpeditions = await db
    .select()
    .from(expedition)
    .leftJoin(guide, eq(expedition.id, guide.expeditionId))
    .leftJoin(user, eq(guide.userId, user.id))
    .leftJoin(schedule, eq(schedule.expeditionId, expedition.id));

  return NextResponse.json({ expeditions: allExpeditions });
}
