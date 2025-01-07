import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const isAuthenticated = request.cookies.has("auth");

  if (!isAuthenticated && request.nextUrl.pathname.startsWith("/projects")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/projects/:path*",
};
