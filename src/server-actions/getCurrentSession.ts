import { headers } from "next/headers";
import { auth } from "../../utils/auth";
import { cache } from "react";

export const getCurrentSession = cache(async () => {
  try {
    return await auth.api.getSession({ headers: await headers() });
  } catch (error) {
    console.error("getting the user session failed", error);
    throw error;
  }
});
