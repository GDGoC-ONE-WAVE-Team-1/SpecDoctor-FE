"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useUser } from "@/hooks/useUser";

export default function Header() {
  const router = useRouter();
  const { user, isLoggedIn, loading } = useUser();

  const handleLoginClick = () => {
    router.push("/login");
  };

  const getInitial = () => {
    if (!user?.username) return "U";
    return user.username.charAt(0).toUpperCase();
  };

  if (loading) {
    return (
      <div className="flex h-14 w-full items-center justify-between px-10 text-xs text-neutral-800">
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/images/spec_doctor_logo.png"
              alt="SPEC DOCTOR"
              width={160}
              height={100}
            />
          </Link>
        </div>
        <div className="min-w-[80px]" />
      </div>
    );
  }

  return (
    <div className="flex h-14 w-full items-center justify-between px-10 text-xs text-neutral-800">
      {/* 로고 영역 */}
      <div className="flex items-center">
        <Link href="/">
          <Image
            src="/images/spec_doctor_logo.png"
            alt="SPEC DOCTOR"
            width={160}
            height={100}
          />
        </Link>
      </div>

      {/* 로그인 / 프로필 영역 */}
      <div className="flex items-center justify-end min-w-[80px]">
        {isLoggedIn && user ? (
          <div className="flex items-center gap-3">
            <div className="relative h-8 w-8 overflow-hidden rounded-full border border-neutral-300 bg-neutral-100">
              <span className="flex h-full w-full items-center justify-center text-xs font-medium text-neutral-700">
                {getInitial()}
              </span>
            </div>
          </div>
        ) : (
          <button
            onClick={handleLoginClick}
            type="button"
            className="text-sm font-medium text-neutral-700"
          >
            로그인
          </button>
        )}
      </div>
    </div>
  );
}

