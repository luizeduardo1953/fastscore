import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { nextCookies } from "better-auth/next-js";
import { PrismaClient } from "./generated/prisma";


const prisma = new PrismaClient()

export const auth = betterAuth({
  database: prismaAdapter(prisma, {provider: "mysql"}),
  emailAndPassword: {
    enabled: true,
  },
  plugins: [nextCookies()], //exclusivo do next
  secret: process.env.BETTER_AUTH_SECRET!,
  trustedOrigins: [process.env.NEXTAUTH_URL || "http://localhost:3000"],
});