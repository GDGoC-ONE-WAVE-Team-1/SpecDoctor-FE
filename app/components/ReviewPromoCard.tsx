import React from 'react';

export default function ReviewPromoCard() {
    return (
        <div className="w-full max-w-[480px] h-full bg-blue-50/50 rounded-2xl p-6 md:p-8 flex flex-col border border-blue-200 relative overflow-visible">
            {/* Floating Avatar - Positioned absolutely to hang off the top right */}

            <div className="flex flex-col gap-6 h-full">
                <div className="flex items-center gap-3">
                    {/* Warning Icon (styled differently for this card) */}
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
                    <h2 className="text-xl md:text-2xl font-bold text-blue-600">
                        리뷰를 작성해 보세요!
                    </h2>
                </div>

                {/* Description */}
                <div className="space-y-1 text-gray-600 text-sm md:text-base leading-relaxed">
                    <p>
                        리뷰 1개를 쓸 때마다 <span className="font-bold text-gray-800">진료권 1매를 드립니다!</span></p>
                    <p>획득한 진료권으로 궁금했던 대외활동의 검증 유무와 실제 수료생 후기를 무료로 열람하세요.
                    </p>

                </div>

                {/* Spacer to fill height if needed or just empty space as per design */}
                <div className="flex-grow"></div>
            </div>
        </div >
    );
}
