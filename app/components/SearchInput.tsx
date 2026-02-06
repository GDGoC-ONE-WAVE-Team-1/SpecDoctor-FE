"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { api } from "@/lib/apiClient";

interface SearchRequest {
  activityName: string;
}

interface SearchResponse {
  isValid: boolean;
  result: any;
}

export default function SearchInput() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async () => {
    if (!searchQuery.trim()) {
      setError("검색어를 입력해주세요.");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await api.get<SearchResponse>(
        `/api/v1/activity/search?activityName=${searchQuery.trim()}`,
      );

      if (response.result) {
        const dataToSave = {
          ...response.result,
          isValid: response.isValid
        };
        sessionStorage.setItem('activityResult', JSON.stringify(dataToSave));

        const activityName = response.result.name;
        router.push(`/activity/${activityName}`);
      } else {
        router.push(`/no-result?q=${encodeURIComponent(searchQuery.trim())}`);
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "검색 중 오류가 발생했습니다.";
      setError(errorMessage);
      console.error("검색 오류:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !isLoading) {
      handleSearch();
    }
  };

  return (
    <div className="flex w-full flex-col gap-2">
      <div className="flex w-full items-center gap-4">
        <div className="flex h-12 flex-1 items-center gap-3 rounded-[18px] bg-white px-5 shadow-[0_10px_30px_rgba(15,23,42,0.08)] ring-1 ring-black/5 transition focus-within:ring-2 focus-within:ring-[#4B6BFF]/40">
          <Image src="/icons/search_icon.svg" alt="Search Icon" width={20} height={20} />
          <input
            className="w-full bg-transparent text-[15px] text-[#0B1220] placeholder:text-[#9AA4B2] focus:outline-none"
            placeholder="동아리명, 부트캠프명 등 대외활동명을 검색해 보세요"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            disabled={isLoading}
          />
        </div>
        <button
          type="button"
          onClick={handleSearch}
          disabled={isLoading}
          className="h-12 whitespace-nowrap rounded-full bg-[#0B1220] px-7 text-[15px] font-semibold text-white shadow-[0_10px_30px_rgba(15,23,42,0.18)] hover:bg-[#0B1220]/50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isLoading && (
            <svg
              className="animate-spin h-4 w-4 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          )}
          {isLoading ? "AI가 진단 중이에요" : "진단하기"}
        </button>
      </div>
      {error && (
        <p className="text-sm text-red-500 px-1">{error}</p>
      )}
    </div>
  );
}