"use server";

import { isAdminEmail } from "@/helpers/admin";
import { eq } from "drizzle-orm";
import { user } from "@/schema";
import { db } from "@/config/db";

export async function assignUserRole(userId: string, email: string) {
  const role = isAdminEmail(email) ? "admin" : "user";

  const roleAssigned = await db
    .update(user)
    .set({ role })
    .where(eq(user.id, userId))
    .returning();

  console.log("Role assigned", roleAssigned);
}
