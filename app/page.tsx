import ReviewCard from "./components/ReviewCard";

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
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-8 font-sans">

      {/* Section Container */}
      <div className="w-full max-w-7xl mx-auto flex flex-col gap-6">

        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">실제 활동 멤버 후기</h2>
            <div className="flex items-center gap-1.5 bg-yellow-50 px-3 py-1.5 rounded-full border border-yellow-100">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-orange-400">
                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
              </svg>
              <span className="text-orange-600 font-bold text-sm">4.8</span>
              <span className="text-orange-400 text-sm">(124개 리뷰)</span>
            </div>
          </div>

          <button className="hidden sm:block px-5 py-2.5 bg-white border border-gray-200 rounded-xl text-gray-600 font-medium hover:bg-gray-50 transition-colors">
            후기 작성하기
          </button>
        </div>

        {/* Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((review, i) => (
            <ReviewCard key={i} {...review} />
          ))}
        </div>

      </div>
    </div>
  );
}
