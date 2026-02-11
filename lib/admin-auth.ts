"use server";

import { SESSION_COOKIE } from "@/constants";
import { cookies } from "next/headers";

const ADMIN_PASSWORD = process.env.ADMINPASS ?? "";
const ADMIN_SESSION_TOKEN = process.env.ADMIN_SESSION_TOKEN ?? "";

if (!ADMIN_PASSWORD) {
  throw new Error("Missing ADMINPASS in environment variables.");
}

if (!ADMIN_SESSION_TOKEN) {
  throw new Error("Missing ADMIN_SESSION_TOKEN in environment variables.");
}

export async function verifyPassword(password: string) {
  return password === ADMIN_PASSWORD;
}

export async function createSession() {
  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE, ADMIN_SESSION_TOKEN, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24,
  });
}

export async function destroySession() {
  const cookieStore = await cookies();
  cookieStore.delete(SESSION_COOKIE);
}

export async function isAuthenticated() {
  const cookieStore = await cookies();
  const sessionValue = cookieStore.get(SESSION_COOKIE)?.value;
  return sessionValue === ADMIN_SESSION_TOKEN;
}
