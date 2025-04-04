import { NextResponse } from "next/server";

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // If the path starts with "/dashboard", let it go to its actual route
  if (pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/dashboard/admin/home", request.url));
  }

  // if (pathname.startsWith("/")) {
  //   return NextResponse.redirect(new URL("/home", request.url));
  // }

  return NextResponse.next();
}

// Apply middleware to all routes
export const config = {
  matcher: ["/"],
  matcher: ["/admin"], // This makes middleware run for all routes
};
