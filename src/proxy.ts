import { NextRequest, NextResponse } from "next/server";
import { getCurrentSession } from "./server-actions/getCurrentSession";

export async function proxy(request: NextRequest) {
  const session = await getCurrentSession();
  if (!session) return null;

  if (!session) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (session && session.user.role !== "admin") {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/admin",
};
