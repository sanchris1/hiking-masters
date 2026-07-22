import { headers } from "next/headers";
import { auth } from "../../utils/auth";
import { cache } from "react";

export const getCurrentSession = cache(async () => {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    return session;
  } catch (error) {
    console.error("getting the user session failed", error);
    throw error;
  }
});
