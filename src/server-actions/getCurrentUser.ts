import { headers } from "next/headers";
import { auth } from "../../utils/auth";
import { eq } from "drizzle-orm";
import { user, userProfile } from "@/schema";
import { db } from "@/config/db";

export const getCurrentUser = async () => {
  const session = await auth.api.getSession({ headers: await headers() });

  if (!session?.user.id) {
    return null;
  }

  const [currentUser] = await db
    .select()
    .from(user)
    .where(eq(user.id, session.user?.id))
    .leftJoin(userProfile, eq(user.id, userProfile.userId));

  return currentUser ?? null;
};
