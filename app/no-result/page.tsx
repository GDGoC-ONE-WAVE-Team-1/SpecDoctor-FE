"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import Header from "../components/header";
import SearchInput from "../components/SearchInput";

function NoResultContent() {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("q") || "";

  return (
    <div className="flex-1 flex items-center justify-center px-6 py-20">
      <div className="w-full max-w-2xl mx-auto text-center">
        {/* 아이콘 또는 이미지 */}
        <div className="mb-8 flex justify-center">
          <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center">
            <svg
              className="w-12 h-12 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        {/* 메시지 */}
        <h1 className="text-3xl md:text-4xl font-bold text-[#0B1220] mb-4">
          검색 결과가 없어요
        </h1>
        <p className="text-lg text-[#9AA4B2] mb-2">
          다시 검색해주세요
        </p>

        {/* 검색어 표시 */}
        {searchQuery && (
          <div className="mb-8">
            <p className="text-sm text-[#9AA4B2] mb-2">검색어:</p>
            <p className="text-base font-semibold text-[#0B1220]">
              &quot;{searchQuery}&quot;
            </p>
          </div>
        )}

        {/* 검색 입력 */}
        <div className="mt-10 max-w-xl mx-auto">
          <SearchInput />
        </div>

        {/* 안내 메시지 */}
        <p className="mt-8 text-sm text-[#9AA4B2]">
          다른 키워드로 검색해보시거나, 정확한 활동명을 입력해주세요.
        </p>
      </div>
    </div>
  );
}

export default function NoResultPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="min-h-screen bg-white flex flex-col">
        {/* 헤더 */}
        <header className="w-full">
          <Header />
        </header>

        {/* 메인 컨텐츠 */}
        <Suspense fallback={
          <div className="flex-1 flex items-center justify-center">
            <div className="text-[#9AA4B2]">로딩 중...</div>
          </div>
        }>
          <NoResultContent />
        </Suspense>
      </div>
    </main>
  );
}
