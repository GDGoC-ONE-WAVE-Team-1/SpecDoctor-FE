import React from 'react';

export default function ReviewPromoCard() {
    return (
        <div className="w-full max-w-[480px] h-full bg-blue-50/50 rounded-2xl p-6 md:p-8 flex flex-col border border-blue-200 relative overflow-visible">
            {/* Floating Avatar - Positioned absolutely to hang off the top right */}

            <div className="flex flex-col gap-6 h-full">
                <div className="flex items-center gap-3">
                    {/* Warning Icon (styled differently for this card) */}
                    <div className="text-yellow-500">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-8 h-8"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
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