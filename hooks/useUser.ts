"use client";

import { useState, useEffect } from "react";
import { getUserInfo, isLoggedIn, type UserInfo } from "@/lib/auth";

/**
 * 유저 정보를 읽어오는 간단한 훅
 * 쿠키에서 읽어오므로 전역 상태 관리 없이 사용 가능
 */
export function useUser() {
  const [user, setUser] = useState<UserInfo | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const userInfo = getUserInfo();
    setUser(userInfo);
    setLoading(false);
  }, []);

  return {
    user,
    isLoggedIn: isLoggedIn(),
    loading,
  };
}
