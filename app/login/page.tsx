"use client";

import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import Image from "next/image";
import { api } from "@/lib/apiClient";

const GOOGLE_CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || "";

interface LoginResponse {
  ok: boolean;
  user?: {
    id: string;
    name: string;
  };
  message?: string;
}

interface LoginRequestBody {
  idToken: string;
}

export default function LoginPage() {
  const handleSuccess = async (credentialResponse: any) => {
    const idToken = credentialResponse.credential;

    try {
      const data = await api.post<LoginResponse, LoginRequestBody>("/api/login", {
        idToken,
      });

      if (!data.ok) {
        throw new Error(data.message || "로그인 요청이 실패했어요.");
      }

      console.log("Login success. User:", data.user);

      // TODO: 여기에서 홈으로 이동하거나, 전역 상태에 로그인 정보를 저장하세요.
      // 예: router.push("/");
    } catch (error) {
      console.error(error);
      alert("로그인에 실패했어요. 다시 시도해 주세요.");
    }
  };

  const handleError = () => {
    console.error("로그인에 실패했어요!");
  };

  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <div className="min-h-screen flex items-center justify-center bg-neutral-50">
        <div className="w-full max-w-md rounded-4xl bg-white px-8 py-10 shadow-lg shadow-gray-200">
          <div className="flex flex-col items-center text-center">
            <Image
              src="/images/spec_doctor_logo.png"
              width={150}
              height={150}
              alt="logo"
              className="mb-4"
            />
            <span className="h-5"></span>
            <h1 className="text-3xl font-bold text-neutral-900 mb-5">
              반가워요! 스펙닥터예요.
            </h1>
            <p className="text-l text-neutral-500 mb-8">
              검증된 데이터로 당신의 열정을 보호하세요.
            </p>

            <div className="flex justify-center">
              <GoogleLogin onSuccess={handleSuccess} onError={handleError} />
            </div>
          </div>
        </div>
      </div>
    </GoogleOAuthProvider>
  );
}

