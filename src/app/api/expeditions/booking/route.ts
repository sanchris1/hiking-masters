import { NextRequest, NextResponse } from "next/server";

import { db } from "@/config/db";
import { booking, userProfile } from "@/schema";
import { and, eq } from "drizzle-orm";
import { getCurrentSession } from "@/server-actions/getCurrentSession";

export async function POST(request: NextRequest) {
  const session = await getCurrentSession();

  const formData = await request.formData();

  if (!session) return;

  const phoneNumber = formData.get("phoneNumber") as string;
  const expeditionId = formData.get("expeditionId") as string;
  const gender = (formData.get("gender") as "male" | "female").toLowerCase();
  const specialRequest = formData.get("specialRequest") as string | null;
  const participants = formData.get("participants") as string;

  if (gender !== "male" && gender !== "female") {
    return NextResponse.json({ message: "Invalid gender" }, { status: 400 });
  }

  if ([phoneNumber, gender, participants].some((item) => !item)) {
    return NextResponse.json({ message: "Please add all the inputs" });
  }

  const [existingBooking] = await db
    .select()
    .from(booking)
    .where(
      and(
        eq(booking.userProfileId, session.user.id),
        eq(booking.expeditionId, expeditionId),
      ),
    );

  if (existingBooking) {
    return NextResponse.json({
      message: "Booking already exists,please select another",
    });
  }

  await db.insert(booking).values({
    participants: Number(participants),
    expeditionId,
    userProfileId: session.user.id,
    specialRequest,
  });

  const [existingProfile] = await db
    .select()
    .from(userProfile)
    .where(eq(userProfile.userId, session.user.id));

  if (existingProfile) {
    await db.update(userProfile).set({
      gender,
      phoneNumber,
    });
  } else {
    await db.insert(userProfile).values({
      userId: session.user.id,
      phoneNumber,
      gender,
    });
  }

  return NextResponse.json({ message: "Booking added, proceed to payment..." });
}
