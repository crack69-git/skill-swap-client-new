import dns from "dns";
dns.setServers(["1.1.1.1", "8.8.8.8", "8.8.4.4"]);

import { betterAuth } from "better-auth";

import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGODB_URI);
const db = client.db(process.env.MONGODB_DB_NAME);

export const auth = betterAuth({
  baseURL: process.env.BASE_URL_CLIENT || "http://localhost:3000",
  emailAndPassword: {
    enabled: true,
    rememberMe: true,
  },
  database: mongodbAdapter(db, {
    // Optional: if you don't provide a client, database transactions won't be enabled.
    client,
  }),
  session: {
    cookieCache: {
      enabled: true,
      strategy: "jwt",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    },
  },
  databaseHooks: {
    user: {
      create: {
        before: async (user) => {
          return {
            data: {
              ...user,
              // Fallback to "client" ONLY if no role was provided in the signup data
              role: user.role || "client",
              userState: "unblocked",
            },
          };
        },
      },
    },
  },
  user: {
    additionalFields: {
      role: {
        type: "string",
        default: "client",
      },
      userState: {
        type: "string",
        default: "unblocked",
      },
      bio: {
        type: "string",
        default: "no data",
      },
      hourlyRate: {
        type: "number",
        default: 0,
      },
      skills: {
        type: "string[]",
        default: ["no skills"],
      },
    },
  },
});
