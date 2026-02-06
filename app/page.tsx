import VerificationCenterCard from "./components/VerificationCenterCard";
import ReviewPromoCard from "./components/ReviewPromoCard";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-8">
      {/* Centered Layout */}
      <div className="w-full max-w-4xl flex justify-center">
        {/* Verification Center Card - Full width in container */}
        <div className="w-full">
          <VerificationCenterCard />
        </div>
      </div>
    </div>
  );
}
