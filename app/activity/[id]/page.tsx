"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Header from "@/app/components/header";
import SearchInput from "@/app/components/SearchInput";
import ClubHeader from "@/app/components/ClubHeader";
import CautionHeader from "@/app/components/CautionHeader";
import DangerReport from "@/app/components/DangerReport";
import ReviewPromoCard from "@/app/components/ReviewPromoCard";
import ReviewSection from "@/app/components/ReviewSection";

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
        <div className="flex justify-center w-full px-4">
          <div className="my-20 w-full max-w-5xl">
            <SearchInput />
          </div>
        </div>

        <div className="flex-1 px-6 py-8 bg-[#F8FAFC]">
          <div className="max-w-7xl mx-auto">

            {activityData?.isValid === true && <div className="max-w-5xl mx-auto">
              <ClubHeader activityData={activityData} />
              <ReviewSection />
            </div>}
            {activityData?.isValid === false && <div className="max-w-5xl mx-auto">
              <CautionHeader activityData={activityData} />
              <DangerReport activityData={activityData} />
            </div>}
          </div>
        </div>
      </div>
    </main>
  );
}
