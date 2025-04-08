import { NextResponse } from "next/server";
import { jwtDecode } from "jwt-decode";

export function middleware(request) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get('auth_token')?.value;
  console.log(token)

  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url))
  }

  try {
    const decodedToken = jwtDecode(token);
    if (decodedToken.userType === "Admin" || decodedToken.userType === "Superadmin") {
      if (pathname == '/dashboard') {
        return NextResponse.redirect(new URL("/dashboard/admin/home", request.url));
      }
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL("/login", request.url));
    }

  } catch (error) {
    console.log("Invalid Token:", error)
    return NextResponse.redirect(new URL("/login", request.url));
  }

}

// Apply middleware to all dashboard routes
export const config = {
  matcher: ["/dashboard/:path*"],
};
