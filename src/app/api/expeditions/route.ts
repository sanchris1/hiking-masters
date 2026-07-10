import { NextRequest, NextResponse } from "next/server";
import { auth } from "../../../../utils/auth";
import { db } from "@/config/db";
import { expedition, guide, schedule } from "@/schema";
import { uploadToCloudinary } from "@/helpers/uploadToCloudinary";
import { headers } from "next/headers";

export async function POST(req: NextRequest) {
  const currentUser = await auth.api.getSession({
    headers: await headers(),
  });

  if (!currentUser || currentUser.user.role !== "admin") {
    return NextResponse.json({ message: "Unauthorized!!" });
  }

  console.log(currentUser);

  const formData = await req.formData();

  const title = formData.get("title") as string;
  const image = formData.get("image") as File;
  const departureDate = formData.get("departureDate") as string;
  const returnDate = formData.get("returnDate") as string;
  const difficulty = formData.get("difficulty") as string;
  const price = formData.get("price") as string;
  const capacity = formData.get("capacity") as string;
  const category = formData.get("category") as string;
  const status = formData.get("status") as string;
  const description = formData.get("description") as string;
  const location = formData.get("location") as string;
  const distanceFromNairobi = formData.get("distanceFromNairobi") as string;
  const departureTime = formData.get("departureTime") as string;
  const returnTime = formData.get("returnTime") as string;
  const meetingPoint = formData.get("meetingPoint") as string;
  const contact = formData.get("contact") as string;
  const guideId = formData.get("guideId") as string;
  const meetingTime = formData.get("meetingTime") as string;
  const tagline = formData.get("tagline") as string;

  if (
    [
      title,
      image,
      departureDate,
      returnDate,
      difficulty,
      price,
      tagline,
      capacity,
      category,
      status,
      description,
      location,
      distanceFromNairobi,
      meetingTime,
      departureTime,
      returnTime,
      meetingPoint,
      guideId,
      contact,
    ].some((item) => !item)
  ) {
    return NextResponse.json({ message: "Add all inputs" }, { status: 403 });
  }

  const imageFile = await uploadToCloudinary(image);
  const imageUrl = imageFile.secure_url;

  const [newExpedition] = await db
    .insert(expedition)
    .values({
      image: imageUrl,
      departureDate,
      returnDate,
      difficulty,
      price: Number(price),
      capacity: Number(capacity),
      category,
      status,
      description,
      tagline,
      location,
      title,
      distanceFromNairobi: Number(distanceFromNairobi),
    })
    .returning();

  await db
    .insert(guide)
    .values({ expeditionId: newExpedition.id, contact, userId: guideId });

  await db.insert(schedule).values({
    expeditionId: newExpedition.id,
    departureTime,
    returnTime,
    meetingPoint,
    meetingTime,
  });

  return NextResponse.json(
    { message: "Expedition added successfully" },
    { status: 201 },
  );
}
