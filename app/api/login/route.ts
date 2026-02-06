import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { idToken } = await req.json();

    console.log("Received Google ID token from client:", idToken);

    // TODO: 실제 백엔드 API로 idToken을 전달하세요
    // const backendUrl = process.env.BACKEND_URL || "http://localhost:8080";
    // const backendRes = await fetch(`${backendUrl}/login`, {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ idToken }),
    // });
    // const backendData = await backendRes.json();
    // return NextResponse.json(backendData, { status: backendRes.status });

    // 임시 더미 응답 (백엔드 API 형식에 맞춤)
    const mockResponse = {
      accessToken: "mock-access-token-" + Date.now(),
      username: "test-user",
    };

    return NextResponse.json(mockResponse, { status: 200 });
  } catch (error) {
    console.error("Login API error:", error);
    return NextResponse.json(
      {
        message: "로그인에 실패했어요.",
      },
      { status: 400 }
    );
  }
}

