/**
 * 인증 관련 유틸리티 함수들
 * 쿠키 기반으로 가볍게 유저 정보 관리
 */

/**
 * 쿠키에 값 저장
 */
export function setCookie(name: string, value: string, days: number = 7) {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${encodeURIComponent(value)};expires=${expires.toUTCString()};path=/;SameSite=Lax`;
}

/**
 * 쿠키에서 값 읽기
 */
export function getCookie(name: string): string | null {
  if (typeof document === "undefined") return null;

  const nameEQ = name + "=";
  const ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0)
      return decodeURIComponent(c.substring(nameEQ.length, c.length));
  }
  return null;
}

/**
 * 쿠키 삭제
 */
export function deleteCookie(name: string) {
  document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`;
}

/**
 * 유저 정보 타입
 */
export interface UserInfo {
  accessToken: string;
  username: string;
}

/**
 * 로그인 정보 저장
 */
export function saveUserInfo(userInfo: UserInfo) {
  setCookie("accessToken", userInfo.accessToken, 7);
  setCookie("username", userInfo.username, 7);
}

/**
 * 저장된 유저 정보 읽기
 */
export function getUserInfo(): UserInfo | null {
  const accessToken = getCookie("accessToken");
  const username = getCookie("username");

  if (!accessToken || !username) {
    return null;
  }

  return { accessToken, username };
}

/**
 * 로그아웃 (쿠키 삭제)
 */
export function logout() {
  deleteCookie("accessToken");
  deleteCookie("username");
}

/**
 * 로그인 여부 확인
 */
export function isLoggedIn(): boolean {
  return getCookie("accessToken") !== null;
}
