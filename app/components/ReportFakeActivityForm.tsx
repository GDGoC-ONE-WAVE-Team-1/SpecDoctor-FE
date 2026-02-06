"use client";

import { api } from "@/lib/apiClient";
import { useState } from "react";

export default function ReportFakeActivityForm({ onClose }: { onClose: () => void }) {
    const [activityName, setActivityName] = useState("");
    const [reason, setReason] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            if (!activityName.trim() || !reason.trim()) {
                alert("활동명과 신고 사유를 모두 입력해주세요.");
                return;
            }

            await api.post("/api/v1/report", {
                name: activityName,
                message: reason,
            });

            alert("신고가 성공적으로 접수되었어요!");
            onClose();
        } catch (error) {
            console.error(error);
            alert("신고 접수 중 오류가 발생했습니다.");
        }
    };

    return (
        <div className="w-full max-w-lg bg-white rounded-[32px] p-8 shadow-xl mx-auto border border-gray-100 font-sans relative">
            {/* Header Section */}
            <div className="text-center mb-8">
                {/* Badge */}
                <div className="inline-flex items-center gap-1.5 bg-red-50 px-3 py-1.5 rounded-full mb-4">
                    <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-white">
                        <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <span className="text-xs font-bold text-red-600">가짜 대외활동 신고</span>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-2">대외활동 신고하기</h2>
                <p className="text-xs text-gray-500 leading-relaxed">
                    클린한 스펙 준비 환경을 위해 가짜 대외활동을 신고해 주세요.<br />
                    허위 신고는 별도 안내 없이 삭제될 수 있습니다.
                </p>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
                {/* Activity Name */}
                <div>
                    <label className="block text-xs font-bold text-gray-700 mb-2 pl-1">신고하는 대외활동명</label>
                    <input
                        type="text"
                        value={activityName}
                        onChange={(e) => setActivityName(e.target.value)}
                        placeholder="활동명을 입력하세요"
                        className="w-full bg-gray-50 text-gray-800 px-4 py-3.5 rounded-xl text-sm font-medium border-none focus:outline-none focus:ring-2 focus:ring-red-800 placeholder-gray-400"
                    />
                </div>

                {/* Reason */}
                <div>
                    <label className="block text-xs font-bold text-gray-700 mb-2 pl-1">상세 신고 사유</label>
                    <textarea
                        value={reason}
                        onChange={(e) => setReason(e.target.value)}
                        className="w-full bg-gray-50 p-4 rounded-xl text-sm border-none focus:outline-none focus:ring-2 focus:ring-red-800 focus:bg-white transition-all min-h-[160px] resize-none placeholder-gray-400"
                        placeholder="구체적인 신고 사유를 적어주세요 (최소 20자 이상)"
                    ></textarea>
                </div>

                {/* Actions */}
                <div className="flex gap-3 pt-2">
                    <button type="button" onClick={onClose} className="flex-[0.4] bg-gray-100 text-gray-500 font-bold py-3.5 rounded-xl hover:bg-gray-200 transition-colors text-sm">
                        취소
                    </button>
                    <button type="submit" className="flex-1 bg-[#e04138] text-white font-bold py-3.5 rounded-xl hover:bg-[#c93028] transition-colors shadow-lg shadow-red-100 text-sm">
                        신고 접수하기
                    </button>
                </div>
            </form>
        </div>
    );
}
