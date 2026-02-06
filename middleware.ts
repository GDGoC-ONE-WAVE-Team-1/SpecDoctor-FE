import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 로그인 페이지에 접근할 때
  if (pathname === "/login") {
    const accessToken = request.cookies.get("accessToken");

    // 이미 로그인되어 있으면 홈으로 리다이렉트
    if (accessToken) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  return NextResponse.next();
}

// 미들웨어가 실행될 경로 설정
export const config = {
  matcher: "/login",
};
