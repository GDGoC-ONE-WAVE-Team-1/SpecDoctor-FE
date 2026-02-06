import React from 'react';

export default function VerificationCenterCard() {
    return (
        <div className="w-full bg-red-50 rounded-2xl p-6 md:p-8 flex flex-col gap-6">
            {/* Header Section */}
            <div className="flex items-center gap-3">
                {/* Warning Icon */}
                <div className="text-red-600">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-8 h-8"
                    >
                        <path
                            fillRule="evenodd"
                            d="M9.401 3.003c1.155-2 3.9-2 5.055 0l9.541 16.56c1.155 2-.292 4.5-2.527 4.5H2.387c-2.235 0-3.682-2.5-2.527-4.5L9.401 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                            clipRule="evenodd"
                        />
                    </svg>
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-red-700">
                    가짜 동아리 검증 센터
                </h2>
            </div>

            {/* Description */}
            <div className="space-y-1 text-gray-600 text-sm md:text-base leading-relaxed">
                <p>
                    스펙닥터의 <span className="font-bold text-gray-800">AI 검증 알고리즘</span>이 실시간으로 가짜 동아리와
                    사기 단체를 색출합니다.
                </p>
                <p>회비 갈취, 허위 홍보, 개인정보 유출 위험을 사전에 차단하세요.</p>
            </div>

            {/* Stats Section */}
            <div className="flex gap-4">
                <div className="flex-1 bg-white rounded-xl p-4 shadow-sm border border-red-100/50">
                    <p className="text-sm text-gray-600 font-medium mb-1">누적 검증 완료</p>
                    <p className="text-2xl font-bold text-green-600">1,847건</p>
                </div>
                <div className="flex-1 bg-white rounded-xl p-4 shadow-sm border border-red-100/50">
                    <p className="text-sm text-gray-600 font-medium mb-1">누적 검증 완료</p>
                    <p className="text-2xl font-bold text-red-600">1,847건</p>
                </div>
            </div>

            {/* Action Button */}
            <button className="w-full bg-[#cb2d26] hover:bg-[#b0221c] text-white font-bold py-4 rounded-xl transition-colors shadow-sm">
                피해 사례 신고하기
            </button>
        </div>
    );
}
