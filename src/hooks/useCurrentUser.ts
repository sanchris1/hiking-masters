import { authClient } from "../../utils/auth-client";

export function useCurrentUser() {
  const { data: session, isPending } = authClient.useSession();

  if (!session || isPending) return null;

  return session?.user as
    | (typeof session.user & {
        role: "admin" | "user";
      })
    | undefined;
}
