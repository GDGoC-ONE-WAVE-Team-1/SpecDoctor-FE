import Image from "next/image";

export default function SearchInput() {
    return (
      <div className="flex w-full items-center gap-4">
        <div className="flex h-12 flex-1 items-center gap-3 rounded-[18px] bg-white px-5 shadow-[0_10px_30px_rgba(15,23,42,0.08)] ring-1 ring-black/5 transition focus-within:ring-2 focus-within:ring-[#4B6BFF]/40">
          <Image src="/icons/search_icon.svg" alt="Search Icon" width={20} height={20} />
          <input
            className="w-full bg-transparent text-[15px] text-[#0B1220] placeholder:text-[#9AA4B2] focus:outline-none"
            placeholder="동아리명, 부트캠프명 등 대외활동명을 검색해 보세요"
          />
        </div>
        <button
          type="button"
          className="h-12 whitespace-nowrap rounded-full bg-[#0B1220] px-7 text-[15px] font-semibold text-white shadow-[0_10px_30px_rgba(15,23,42,0.18)] hover:bg-[#0B1220]/50 transition-colors"
        >
          진단하기
        </button>
      </div>
    );
  }