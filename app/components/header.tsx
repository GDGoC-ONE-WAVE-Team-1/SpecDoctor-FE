import Image from "next/image";

type HeaderProps = {
  /** 로그인 여부 */
  isLoggedIn?: boolean;
  /** 프로필 이미지가 없을 때 표시할 이니셜 */
  profileInitial?: string;
};

export default function Header({
  isLoggedIn = false,
  profileInitial = "U",
}: HeaderProps) {
  return (
    <div className="flex h-14 w-full items-center justify-between px-10 text-xs text-neutral-800">
      {/* 로고 영역 */}
      <div className="flex items-center">
        <Image src="/images/spec_doctor_logo.png" alt="SPEC DOCTOR" width={160} height={100} />
      </div>

      {/* 로그인 / 프로필 영역 */}
      <div className="flex items-center justify-end min-w-[80px]">
        {!isLoggedIn ? (
          <div className="flex items-center gap-3">
            <div className="relative h-8 w-8 overflow-hidden rounded-full border border-neutral-300 bg-neutral-100">
                <span className="flex h-full w-full items-center justify-center text-xs font-medium text-neutral-700">
                  {profileInitial}
                </span>
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

