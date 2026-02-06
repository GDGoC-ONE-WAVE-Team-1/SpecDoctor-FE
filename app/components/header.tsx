import Image from "next/image";

type HeaderProps = {
  /** 로그인 여부 */
  isLoggedIn?: boolean;
  /** 프로필 이미지 URL (로그인 상태에서 사용) */
  profileImageUrl?: string;
  /** 프로필 이미지가 없을 때 표시할 이니셜 */
  profileInitial?: string;
};

export default function Header({
  isLoggedIn = false,
  profileImageUrl,
  profileInitial = "U",
}: HeaderProps) {
  return (
    <div className="flex h-14 w-full items-center justify-between px-8 text-xs text-neutral-800">
      {/* 로고 영역 */}
      <div className="flex items-center gap-3">
        <span className="h-6 w-[2px] bg-[#4B6BFF]" />
        <span className="text-sm font-semibold tracking-[0.25em] text-[#4B6BFF]">
          SPEC DOCTOR
        </span>
      </div>

      {/* 내비게이션 탭 */}
      <nav className="flex items-center gap-8">
        <button
          type="button"
          className="text-sm font-semibold text-neutral-900"
        >
          단체 검색
        </button>
        <button
          type="button"
          className="text-sm font-medium text-neutral-600"
        >
          실시간 검증
        </button>
        <button
          type="button"
          className="text-sm font-medium text-neutral-600"
        >
          역량 분석
        </button>
      </nav>

      {/* 로그인 / 프로필 영역 */}
      <div className="flex items-center justify-end min-w-[80px]">
        {isLoggedIn ? (
          <div className="flex items-center gap-3">
            <div className="relative h-8 w-8 overflow-hidden rounded-full border border-neutral-300 bg-neutral-200">
              {profileImageUrl ? (
                <Image
                  src={profileImageUrl}
                  alt="프로필 이미지"
                  fill
                  sizes="32px"
                  className="object-cover"
                />
              ) : (
                <span className="flex h-full w-full items-center justify-center text-xs font-medium text-neutral-700">
                  {profileInitial}
                </span>
              )}
            </div>
          </div>
        ) : (
          <button
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

