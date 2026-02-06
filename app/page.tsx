import ClubHeader from "./components/ClubHeader";
import ReviewSection from "./components/ReviewSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Club Header Section */}
      <ClubHeader />

      {/* Review Section */}
      <ReviewSection />
    </main>
  );
}
