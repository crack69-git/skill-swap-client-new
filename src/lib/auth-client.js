import { jwtClient } from "better-auth/client/plugins";
import { createAuthClient } from "better-auth/react";
export const authClient = createAuthClient({
  /** The base URL of the server (optional if you're using the same domain) */
  baseURL: process.env.BASE_URL_CLIENT,
  plugins: [jwtClient()],
});
export const { signIn, signUp, useSession } = authClient;
