import { db } from "@/config/db";
import { expedition, guide } from "@/schema";
import { eq } from "drizzle-orm";

export async function getExpeditionDetails(expeditionId: string) {
  if (!expeditionId) {
    throw new Error("Please provide an id");
  }

  const [fetchedExpedition] = await db
    .select()
    .from(expedition)
    .where(eq(expedition.id, expeditionId))
    .leftJoin(guide, eq(guide.expeditionId, expeditionId));

  return fetchedExpedition;
}
