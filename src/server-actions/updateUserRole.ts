"use server";

import { isAdminEmail } from "@/helpers/admin";
import { db } from "..";
import { user } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function assignUserRole(userId: string, email: string) {
  const role = isAdminEmail(email) ? "admin" : "user";

  const roleAssigned = await db
    .update(user)
    .set({ role })
    .where(eq(user.id, userId))
    .returning();

  console.log("Role assigned", roleAssigned);
}
