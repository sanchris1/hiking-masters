import { headers } from "next/headers";
import { auth } from "../../utils/auth";
import { cache } from "react";

export const getCurrentSession = cache(
  async () => await auth.api.getSession({ headers: await headers() }),
);
