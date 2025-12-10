"use server"

import { cookies } from "next/headers"

const ADMIN_PASSWORD = "elfida2024" // Change this to your secure password
const SESSION_COOKIE = "admin_session"

export async function verifyPassword(password: string) {
  return password === ADMIN_PASSWORD
}

export async function createSession() {
  const cookieStore = await cookies()
  cookieStore.set(SESSION_COOKIE, "authenticated", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24, // 24 hours
  })
}

export async function destroySession() {
  const cookieStore = await cookies()
  cookieStore.delete(SESSION_COOKIE)
}

export async function isAuthenticated() {
  const cookieStore = await cookies()
  return cookieStore.has(SESSION_COOKIE)
}
