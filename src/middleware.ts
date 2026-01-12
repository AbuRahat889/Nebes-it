import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;
  const role = req.cookies.get("role")?.value;

  const { pathname } = req.nextUrl;

  // 1. If no token → send to login
  if (!token) {
    return NextResponse.redirect(new URL("/auth/login", req.url));
  }

  // 2. If role missing → logout and force login
  if (!role) {
    const res = NextResponse.redirect(new URL("/auth/login", req.url));
    res.cookies.delete("token");
    res.cookies.delete("role");
    return res;
  }

  // Allowed routes based on role
  const roleRoutes: Record<string, string[]> = {
    // SUPERADMIN: [
    //   "/",
    //   "/partners",
    //   "/calendar",
    //   "/venues",
    //   "/games",
    //   "/users",
    //   "/payments",
    //   "/notifications",
    //   "/settings",
    // ],
    // PARTNER: [
    //   "/partner-dashboard",
    //   "/games",
    //   "/venues",
    //   "/payments",
    //   "/recurring-venue",
    // ],
  };

  const allowed = roleRoutes[role] ?? [];

  // 3. Check if user is accessing restricted route
  if (!allowed.includes(pathname)) {
    // If restricted → redirect to default page for that role
    return NextResponse.redirect(new URL(allowed[0] || "/", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // "/",
    // "/partners",
    // "/calendar",
    // "/venues",
    // "/games",
    // "/users",
    // "/payments",
    // "/notifications",
    // "/settings",
    // "/recurring-venue",
  ],
};
