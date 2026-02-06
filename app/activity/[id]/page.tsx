"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Header from "@/app/components/header";

export default function ActivityDetailPage() {
  const params = useParams();
  const activityId = params.id as string;
  const [activityData, setActivityData] = useState<any>(null);

  useEffect(() => {
    // 세션 스토리지에서 검색 결과 데이터 가져오기
    const storedData = sessionStorage.getItem('activityResult');
    if (storedData) {
      try {
        const parsedData = JSON.parse(storedData);
        setActivityData(parsedData);
      } catch (error) {
        console.error('Failed to parse activity data:', error);
      }
    }
  }, []);

  return (
    <main className="min-h-screen bg-white">
      <div className="min-h-screen bg-white flex flex-col">
        {/* 헤더 */}
        <header className="w-full">
          <Header />
        </header>

        {/* 메인 컨텐츠 */}
        <div className="flex-1 px-6 py-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold text-[#0B1220] mb-4">
              활동 상세 페이지
            </h1>
            <p className="text-lg text-[#9AA4B2] mb-4">
              Activity ID: {activityId}
            </p>
            
            {/* 검색 결과 데이터 표시 */}
            {activityData && (
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <h2 className="text-xl font-semibold text-[#0B1220] mb-2">
                  검색 결과 데이터:
                </h2>
                <pre className="text-sm text-[#9AA4B2] overflow-auto">
                  {JSON.stringify(activityData, null, 2)}
                </pre>
              </div>
            )}
            
            {/* TODO: 여기에 활동 상세 정보를 표시하는 컴포넌트들을 추가하세요 */}
          </div>
        </div>
      </div>
    </main>
  );
}
