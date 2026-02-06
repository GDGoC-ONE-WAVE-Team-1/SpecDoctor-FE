import ReviewSection from "./components/ReviewSection";
import VerificationCenterCard from "./components/VerificationCenterCard";
import HeroSection from "./components/HeroSection";

export default function Home() {
  const reviews = [
    {
      name: "김*준",
      role: "서버 개발 파트",
      date: "2024.12 작성",
      rating: 5,
      content: "단순히 코딩만 하는 게 아니라 기획, 디자인 파트와 협업하며 '진짜 서비스'를 만드는 경험이 정말 좋았습니다. 커리큘럼이 꽤 빡세지만 그만큼 얻어가는 게 많아요. 특히 네트워킹 데이 때 현직자 선배님들께 피드백 받았던 게 취업 준비할 때 큰 자산이 되었습니다.",
      tags: ["협업역량", "네트워킹"],
      isCertified: false,
    },
    {
      name: "이*은",
      role: "서비스 기획 파트",
      date: "2025.01 작성",
      rating: 4, // 4.5 visually but using 4 stars for simplicity/based on image showing 1 empty
      content: "기획자로서 데이터 기반으로 의사결정하는 법을 배울 수 있었습니다. 앱 런칭까지의 프로세스를 A to Z로 경험해보고 싶은 분들께 강력 추천해요. 다만, 학기 중에 병행하기엔 과제량이 상당하니 시간 확보가 필수입니다.",
      tags: ["실무프로세스", "성장통"],
      isCertified: true,
      certificationText: "33기 수료생 인증"
    }
  ];

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
            <ReviewSection />
          </div>
        </div>
      </div>
    </main>
  );
}