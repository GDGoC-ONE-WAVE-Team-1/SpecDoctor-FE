import VerificationCenterCard from "./components/VerificationCenterCard";
import ReviewPromoCard from "./components/ReviewPromoCard";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-8">
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
    </div>
  );
}
