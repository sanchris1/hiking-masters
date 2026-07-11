import { authClient } from "../../utils/auth-client";

export async function signInWithGoogle() {
  const data = await authClient.signIn.social({ provider: "google" });

  console.log(data);
}
