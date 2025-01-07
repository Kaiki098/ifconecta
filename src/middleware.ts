import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const isAuthenticated = request.cookies.has("auth");
  const { pathname } = request.nextUrl;

  // Redirect to projects if authenticated and trying to access login
  if (isAuthenticated && pathname === "/login") {
    return NextResponse.redirect(new URL("/projects", request.url));
  }

  // Redirect to login if not authenticated and trying to access protected routes
  if (!isAuthenticated && pathname.startsWith("/projects")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/login", "/projects"],
};
