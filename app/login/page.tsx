"use client";

import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { api } from "@/lib/apiClient";

const GOOGLE_CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || "";

interface LoginResponse {
  accessToken: string;
  username: string;
}

export default function LoginPage() {
  const router = useRouter();

  const setCookie = (name: string, value: string, days: number = 7) => {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Lax`;
  };

  const handleSuccess = async (credentialResponse: any) => {
    const idToken = credentialResponse.credential;

    try {
      const data = await api.get<LoginResponse>(`/login?code=${idToken}`);

      console.log("Login success. Username:", data.username);
      console.log("Access token received:", data.accessToken);

      // 쿠키에 저장 (7일 유효)
      setCookie("accessToken", data.accessToken, 7);
      
      // 홈으로 리다이렉트
      router.push("/");
    } catch (error) {
      console.error(error);
      alert("로그인에 실패했어요. 다시 시도해 주세요.");
    }
  };

  const handleError = () => {
      alert("로그인에 실패했어요. 다시 시도해 주세요.");
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

