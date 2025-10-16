"use server"

import { auth } from "../auth"
import { headers } from "next/headers";

export const signUp = async (email: string, password: string, name: string) => {
    const res = await auth.api.signUpEmail({
        body: {
            email,
            password,
            name,
            callbackURL: `${process.env.NEXTAUTH_URL}/dashboard`,
        },
    });

    return res;
}

export const signIn = async (email: string, password: string) => {
    const res = await auth.api.signInEmail({
        body: {
            email,
            password,
            callbackURL: `${process.env.NEXTAUTH_URL}/dashboard`,
        },
    });

    return res;
}

export const signOut =  async () => {
    const res = await auth.api.signOut({ headers: await headers() });
    return res;
}