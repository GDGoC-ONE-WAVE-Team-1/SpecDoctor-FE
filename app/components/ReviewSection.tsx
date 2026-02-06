import ReviewCard, { ReviewCardProps } from "./ReviewCard";

export default function ReviewSection({ disableWriteReview = false }: { disableWriteReview?: boolean }) {
    // Mock Data based on screenshot
    const reviews: ReviewCardProps[] = [
        {
            author: "김*준",
            part: "서버 개발 파트",
            date: "2024.12 작성",
            rating: 5,
            content: "단순히 코딩만 하는 게 아니라 기획, 디자인 파트와 협업하며 '진짜 서비스'를 만드는 경험이 정말 좋았습니다. 커리큘럼이 꽤 빡세지만 그만큼 얻어가는 게 많아요. 특히 네트워킹 데이 때 현직자 선배님들께 피드백 받았던 게 취업 준비할 때 큰 자산이 되었습니다.",
            tags: [],
            isVerified: false
        },
        {
            author: "이*은",
            part: "서비스 기획 파트",
            date: "2025.01 작성",
            rating: 4,
            content: "기획자로서 데이터 기반으로 의사결정하는 법을 배울 수 있었습니다. 앱 런칭까지의 프로세스를 A to Z로 경험해보고 싶은 분들께 강력 추천해요. 다만, 학기 중에 병행하기엔 과제량이 상당하니 시간 확보가 필수입니다.",
            tags: ["실무프로세스", "성장통"],
            isVerified: true
        }
    ];


    console.log(disableWriteReview)

    return (
        <div className="w-full pb-12">
            <div className="max-w-6xl mx-auto px-4 md:px-8">

                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
                    <div className="flex items-center gap-2">
                        <h2 className="text-2xl font-bold text-gray-900">실제 활동 멤버 후기</h2>
                        <div className="flex items-center gap-2 bg-yellow-50 px-3 py-1 rounded-full">
                            <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <span className="font-bold text-gray-900">4.8</span>
                            <span className="text-sm text-yellow-600 font-medium">(124개 리뷰)</span>
                        </div>
                    </div>

                    {!disableWriteReview && (
                        <button className="px-5 py-2.5 border border-gray-200 rounded-lg text-sm font-bold text-gray-700 hover:bg-gray-50 transition-colors">
                            후기 작성하기
                        </button>
                    )}
                </div>

                {/* Review Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                    {reviews.map((review, index) => (
                        <ReviewCard key={index} {...review} />
                    ))}
                </div>

                {/* More Button */}
                <div className="text-center">
                    <button className="inline-flex items-center gap-1 text-gray-500 font-bold hover:text-gray-900 transition-colors">
                        리뷰 122개 더보기
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                </div>

            </div>
        </div>
    );
}
