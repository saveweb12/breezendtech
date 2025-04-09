// import { NextResponse } from "next/server";
// import { decodedToken } from '@/helpers/auth'

// export function middleware(request) {
//   const { pathname } = request.nextUrl;
//   const user = decodedToken();

//   if (!user) {
//     return NextResponse.redirect(new URL("/login", request.url));
//   }

//   if (user.userType === "Admin" || user.userType === "Superadmin") {
//     if (pathname == '/dashboard') {
//       return NextResponse.redirect(new URL("/dashboard/admin/home", request.url));
//     }
//     return NextResponse.next();
//   } else {
//     return NextResponse.redirect(new URL("/login", request.url));
//   }

// }

// // Apply middleware to all dashboard routes
// export const config = {
//   matcher: ["/dashboard/:path*"],
// };




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



// import { NextResponse, NextRequest } from "next/server";
// import { jwtDecode } from "jwt-decode";

// export async function middleware(request) {

//   const { pathname } = request.nextUrl;

//   if (pathname === "/dashboard") {
//     return NextResponse.redirect(new URL("/dashboard/admin/home", request.url));
//   }
// console.log("Cookies received in middleware:", request.cookies.getAll());

// const token = request.cookies.get("token")?.value
// console.log("Token from cookie:", token)

// if (!token) {
//   return NextResponse.redirect(new URL('/login', request.url));
// }

// try {
//   const decodedToken = jwtDecode(token);
//   console.log("decodedTOken", decodedToken)
//   if (decodedToken.userType === "Admin" || decodedToken.userType === "Superadmin") {
//     if (pathname === "/dashboard") {
//       return NextResponse.redirect(new URL("/dashboard/admin/home", request.url));
//     }
//     return NextResponse.next();
//   } else {
//     return NextResponse.redirect(new URL("/login", request.url));
//   }
// } catch (error) {
//   console.error("Invalid Token:", error);
//   return NextResponse.redirect(new URL("/login", request.url));
// }
// }

// Run middleware on all dashboard routes
// export const config = {
//   matcher: ["/dashboard/:path*"],
// };

