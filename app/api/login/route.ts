import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { idToken } = await req.json();
    
    console.log("Received Google ID token from client:", idToken);

    // 더미 유저 정보 (나중에 백엔드 응답으로 교체)
    const mockUser = {
      id: "temp-user-id",
      name: "Google User",
    };

    return NextResponse.json(
      {
        ok: true,
        user: mockUser,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Login API error:", error);
    return NextResponse.json(
      {
        ok: false,
        message: "로그인에 실패했어요.",
      },
      { status: 400 }
    );
  }
}

