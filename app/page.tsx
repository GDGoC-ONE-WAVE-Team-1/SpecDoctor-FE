import ReviewSection from "./components/ReviewSection";
import VerificationCenterCard from "./components/VerificationCenterCard";
import HeroSection from "./components/HeroSection";

export default function Home() {

  return (
    <main className="min-h-screen bg-white">

      <div className="min-h-screen bg-white flex flex-col">
        {/* 상단 헤더 */}
        <div className="w-full">
          <header className="w-full">
            <HeroSection />
          </header>
          <div className="px-6 py-15">
            <VerificationCenterCard />
          </div>
          <div>
            <ReviewSection disableWriteReview={true} />
          </div>
        </div>
      </div>
    </main>
  );
}