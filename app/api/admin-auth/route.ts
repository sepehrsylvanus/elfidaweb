import { NextResponse } from "next/server";
import { getSessionToken, verifyPassword } from "@/lib/admin-auth";
import { SESSION_COOKIE } from "@/constants";

export const POST = async (req: Request) => {
  try {
    const { password } = await req.json();
    const isValid = await verifyPassword(password);
    if (!isValid) {
      return NextResponse.json({ error: "Yetkisiz" }, { status: 401 });
    }

    const response = NextResponse.json({ success: true });
    response.cookies.set(SESSION_COOKIE, await getSessionToken(), {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24,
      path: "/",
    });

    return response;
  } catch (error) {
    console.error("Admin kimlik dogrulamada hata:", error);
    return NextResponse.json(
      { error: `Sunucu ic hatasi: ${error}` },
      { status: 500 },
    );
  }
};
