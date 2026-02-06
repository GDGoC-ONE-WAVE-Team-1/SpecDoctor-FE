"use client";

import { useState } from "react";

export default function ReviewForm() {
    const [rating, setRating] = useState(4);

    return (
        <div className="w-full max-w-lg bg-white rounded-[32px] p-8 shadow-xl mx-auto my-10 border border-gray-100 font-sans">
            {/* Header */}
            <div className="text-center mb-8">
                <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center mx-auto mb-4 text-indigo-600">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">활동 후기 작성하기</h2>
                <p className="text-xs text-gray-500 leading-relaxed">
                    작성해주신 소중한 후기는 다른 스펙 준비생들에게 큰 도움이 됩니다.<br />
                    활동의 장단점을 솔직하게 공유해 주세요.
                </p>
            </div>

            <form className="space-y-6">

                {/* Activity Name */}
                <div>
                    <label className="block text-xs font-bold text-gray-700 mb-2 pl-1">대외활동명</label>
                    <input
                        type="text"
                        value="SOPT (솝트)"
                        disabled
                        className="w-full bg-gray-50 text-gray-500 px-4 py-3 rounded-xl text-sm font-medium border-none focus:ring-0"
                    />
                </div>

                {/* Role & Date */}
                <div className="flex gap-4">
                    <div className="flex-1">
                        <label className="block text-xs font-bold text-gray-700 mb-2 pl-1">수행 역할</label>
                        <input
                            type="text"
                            placeholder="예: 콘텐츠 기획, 영상 제작"
                            className="w-full bg-white px-4 py-3 rounded-xl text-sm border-2 border-indigo-100 focus:border-indigo-500 focus:outline-none transition-colors placeholder-gray-300 text-gray-800"
                        />
                    </div>
                    <div className="flex-1">
                        <label className="block text-xs font-bold text-gray-700 mb-2 pl-1">활동 기간 (시작일)</label>
                        <input
                            type="text"
                            placeholder="2025.03"
                            className="w-full bg-gray-50/50 px-4 py-3 rounded-xl text-sm border-none focus:ring-1 focus:ring-indigo-200 placeholder-gray-300 text-gray-800"
                        />
                    </div>
                </div>

                {/* Rating */}
                <div className="text-center py-2">
                    <label className="block text-xs font-bold text-gray-700 mb-3">활동 만족도</label>
                    <div className="flex justify-center gap-2 mb-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <button
                                key={star}
                                type="button"
                                onClick={() => setRating(star)}
                                className="focus:outline-none transition-transform hover:scale-110"
                            >
                                <svg
                                    className={`w-10 h-10 ${star <= rating ? 'text-[#6366f1] drop-shadow-sm' : 'text-gray-200'}`}
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            </button>
                        ))}
                    </div>
                    <p className="text-[10px] sm:text-xs font-bold text-[#6366f1]">아주 만족스러워요!</p>
                </div>

                {/* Content */}
                <div>
                    <label className="block text-xs font-bold text-gray-700 mb-2 pl-1">상세 후기</label>
                    <textarea
                        className="w-full bg-gray-50/50 p-4 rounded-xl text-sm border-none focus:ring-1 focus:ring-indigo-200 min-h-[140px] resize-none placeholder-gray-400"
                        placeholder="활동을 통해 얻은 성과, 운영진의 피드백, 분위기 등 구체적으로 적어주세요."
                    ></textarea>
                </div>

                {/* File Upload */}
                <div>
                    <label className="block text-xs font-bold text-gray-700 mb-2 pl-1">활동 증빙자료 첨부</label>
                    <div className="border-2 border-dashed border-gray-200 rounded-2xl p-8 flex flex-col items-center justify-center text-center hover:bg-gray-50 transition-colors cursor-pointer group">
                        <div className="w-8 h-8 bg-gray-200 rounded text-gray-500 flex items-center justify-center mb-3 group-hover:bg-gray-300 transition-colors">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                            </svg>
                        </div>
                        <p className="text-xs font-bold text-gray-500 mb-1">수료증 또는 활동 증명서 업로드</p>
                        <p className="text-[10px] text-gray-400">PDF, JPG, PNG (최대 15MB)</p>
                    </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3 pt-4">
                    <button type="button" className="flex-1 bg-gray-100 text-gray-500 font-bold py-3.5 rounded-xl hover:bg-gray-200 transition-colors text-sm">
                        취소
                    </button>
                    <button type="submit" className="flex-[2] bg-[#6366f1] text-white font-bold py-3.5 rounded-xl hover:bg-[#4f46e5] transition-colors shadow-lg shadow-indigo-200 text-sm">
                        후기 등록하기
                    </button>
                </div>

            </form>
        </div>
    );
}
