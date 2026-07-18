import { NextRequest, NextResponse } from "next/server";
import { auth } from "../../../../../utils/auth";
import { headers } from "next/headers";
import { db } from "@/config/db";
import { booking, expedition, userProfile } from "@/schema";
import { eq, sql } from "drizzle-orm";

export async function POST(request: NextRequest) {
  const session = await auth.api.getSession({ headers: await headers() });

  const formData = await request.formData();

  if (!session) return;

  const phoneNumber = formData.get("phoneNumber") as string;
  const participants = formData.get("participants") as string;
  const expeditionId = formData.get("expeditionId") as string;
  const gender = (formData.get("gender") as "male" | "female").toLowerCase();
  const specialRequest = formData.get("specialRequest") as string | null;

  console.log(phoneNumber);
  console.log(participants);
  console.log(expeditionId);
  console.log(gender);
  console.log(specialRequest);

  if (gender !== "male" && gender !== "female") {
    return NextResponse.json({ message: "Invalid gender" }, { status: 400 });
  }

  if ([phoneNumber, gender].some((item) => !item)) {
    return NextResponse.json({ message: "Please add all the inputs" });
  }

  await db.insert(booking).values({
    expeditionId,
    userProfileId: session.user.id,
    specialRequest,
  });

  await db.insert(userProfile).values({
    userId: session.user.id,
    phoneNumber,
    gender,
  });

  await db
    .update(expedition)
    .set({
      slotsLeft: sql`${expedition.capacity}-${Number(participants)}`,
    })
    .where(eq(expedition.id, expeditionId));

  return NextResponse.json({ message: "Booking added, proceed to payment..." });
}
