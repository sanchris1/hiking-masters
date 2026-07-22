import { eq } from "drizzle-orm";
import { user, userProfile } from "@/schema";
import { db } from "@/config/db";
import { getCurrentSession } from "./getCurrentSession";

export const getCurrentUser = async () => {
  const session = await getCurrentSession();
  if (!session) return null;

  const [currentUser] = await db
    .select()
    .from(user)
    .where(eq(user.id, session.user?.id))
    .leftJoin(userProfile, eq(user.id, userProfile.userId));

  return currentUser ?? null;
};
