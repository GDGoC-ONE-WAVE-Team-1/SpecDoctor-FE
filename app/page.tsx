import CautionHeader from "./components/CautionHeader";
import DangerReport from "./components/DangerReport";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Caution Header Section */}
      <CautionHeader />

      {/* Danger Report Section */}
      <DangerReport />
    </main>
  );
}