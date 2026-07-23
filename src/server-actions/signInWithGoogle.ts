import { authClient } from "../../utils/auth-client";

export async function signInWithGoogle() {
  await authClient.signIn.social({ provider: "google" });
}
