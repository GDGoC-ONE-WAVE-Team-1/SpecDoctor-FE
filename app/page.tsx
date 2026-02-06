import VerificationCenterCard from "./components/VerificationCenterCard";
import ReviewPromoCard from "./components/ReviewPromoCard";
import Header from "./components/header";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* 상단 헤더 */}
      <header className="w-full">
        {/* TODO: 실제 로그인 상태에 맞게 isLoggedIn, profileImageUrl 등을 전달 */}
        <Header isLoggedIn={false} />
      </header>

      {/* 메인 콘텐츠 */}
      <main className="flex flex-1 flex-col items-center justify-center p-8">
        {/* Forced horizontal layout with flex-row */}
        <div className="flex flex-row gap-8 max-w-6xl w-full justify-center items-start">
          {/* Verification Center Card */}
          <div className="flex flex-col items-center gap-4 w-full md:w-auto">
            <VerificationCenterCard />
          </div>

          {/* Review Promo Card */}
          <div className="flex flex-col items-center gap-4 w-full md:w-auto">
            <ReviewPromoCard />
          </div>
        </div>
      </main>
    </div>
  );
}

