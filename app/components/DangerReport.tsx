export default function DangerReport() {
    return (
        <div className="w-full bg-white pb-12">
            <div className="max-w-4xl mx-auto px-4">
                {/* Main Card Container */}
                <div className="border-2 border-dashed border-indigo-200 rounded-3xl p-8 bg-white relative">

                    {/* Header */}
                    <div className="flex justify-between items-start mb-8">
                        <h2 className="text-xl font-extrabold text-[#E03030]">
                            스펙닥터 위험 정보 리포트
                        </h2>
                        <div className="text-right">
                            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">최종 업데이트</p>
                            <p className="text-sm font-bold text-gray-900">2026.02.03</p>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-8 items-stretch">
                        {/* Left Column: Danger Items */}
                        <div className="flex-1 space-y-4">

                            {/* Item 1 */}
                            <div className="bg-red-50 rounded-xl p-5 border border-red-100 relative">
                                {/* Overlay Badge (Purple "Yun" circle from screenshot - optional decoration or user avatar?) 
                           The screenshot shows a purple circle with "윤" overlapping. I'll add it as a decorative element.
                        */}


                                <div className="flex items-center gap-2 mb-3">
                                    <div className="w-5 h-5 rounded-full bg-[#E03030] flex items-center justify-center text-white text-xs font-bold">
                                        x
                                    </div>
                                    <h3 className="font-bold text-gray-800">운영 주체 정보 부제</h3>
                                </div>
                                <p className="text-xs text-gray-600 leading-relaxed">
                                    운영 주체가 불분명합니다. 학생 자치 단체를 표방하고 있으나 실제로는 특정 기업이나 외부 단체가 개입된 정황이 발견되었으며, 이를 명확히 공개하지 않고 있습니다.
                                </p>
                            </div>

                            {/* Item 2 */}
                            <div className="bg-yellow-50 rounded-xl p-5 border border-yellow-100">
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="text-lg">💰</span>
                                    <h3 className="font-bold text-gray-800">불투명한 비용 요구</h3>
                                </div>
                                <p className="text-xs text-gray-600 leading-relaxed">
                                    가입 시 수십만 원 상당의 '교재비' 혹은 '대관료' 명목의 현금을 요구하며, 환불 규정이 명시되지 않은 것으로 파악되었습니다.
                                </p>
                            </div>

                        </div>

                        {/* Right Column: Image */}
                        <div className="flex-1 relative min-h-[300px] md:min-h-auto rounded-3xl overflow-hidden bg-gray-900">
                            {/* Placeholder for the hallway image */}
                            {/* In a real app, use next/image. Here using a colored div to simulate the dark overlay */}
                            <div className="absolute inset-0 bg-[#4A1515] opacity-90"></div>

                            {/* Content Overlay */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6 text-center">
                                <div className="w-16 h-16 rounded-full border-4 border-white/30 flex items-center justify-center mb-4">
                                    <div className="w-12 h-1 bg-white rotate-45 absolute"></div>
                                    <div className="w-10 h-10 rounded-full border-2 border-white"></div>
                                </div>
                                <h3 className="text-2xl font-bold mb-2">검증 실패</h3>
                                <p className="text-xs text-white/70">
                                    실체 확인을 위한 조사 결과<br />
                                    운영 주체를 명확히 밝히고 있지 않음
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

