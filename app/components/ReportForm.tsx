"use client";

import { useState } from "react";

type ReportFormProps = {
  /** 모달 닫기 핸들러 */
  onClose: () => void;
  /** 신고 제출 핸들러 */
  onSubmit?: (data: { activityName: string; reason: string }) => void;
};

export default function ReportForm({ onClose, onSubmit }: ReportFormProps) {
  const [activityName, setActivityName] = useState("");
  const [reason, setReason] = useState("");
  const [errors, setErrors] = useState<{
    activityName?: string;
    reason?: string;
  }>({});

  const validate = () => {
    const newErrors: typeof errors = {};

    if (!activityName.trim()) {
      newErrors.activityName = "활동명을 입력해주세요.";
    }

    if (!reason.trim()) {
      newErrors.reason = "신고 사유를 입력해주세요.";
    } else if (reason.trim().length < 20) {
      newErrors.reason = "신고 사유는 최소 20자 이상 입력해주세요.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    onSubmit?.({
      activityName: activityName.trim(),
      reason: reason.trim(),
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-lg rounded-2xl bg-white p-8 shadow-xl">
        {/* 헤더 섹션 */}
        <div className="mb-6 flex flex-col items-center text-center">
          <div className="mb-3 flex items-center gap-2">
            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-orange-500">
              <span className="text-xs font-bold text-white">!</span>
            </div>
            <span className="text-sm font-medium text-red-600">
              가짜 대외활동 신고
            </span>
          </div>

          <h2 className="mb-2 text-2xl font-bold text-neutral-900">
            대외활동 신고하기
          </h2>
          <p className="text-sm text-neutral-600">
            클린한 스펙 준비 환경을 위해 가짜 대외활동을 신고해 주세요.
            <br />
            검토 후 영업일 기준 3일 이내에 반영돼요.
          </p>
        </div>

        {/* 폼 */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* 활동명 입력 */}
          <div>
            <label
              htmlFor="activity-name"
              className="mb-2 block text-sm font-medium text-neutral-900"
            >
              신고하는 대외활동명
            </label>
            <input
              id="activity-name"
              type="text"
              value={activityName}
              onChange={(e) => setActivityName(e.target.value)}
              placeholder="활동명을 입력하세요"
              className={`w-full rounded-lg border-2 px-4 py-3 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-red-500/20 ${
                errors.activityName
                  ? "border-red-500 bg-red-50"
                  : "border-red-300 bg-white"
              }`}
            />
            {errors.activityName && (
              <p className="mt-1 text-xs text-red-600">{errors.activityName}</p>
            )}
          </div>

          {/* 상세 신고 사유 */}
          <div>
            <label
              htmlFor="reason"
              className="mb-2 block text-sm font-medium text-neutral-900"
            >
              상세 신고 사유
            </label>
            <textarea
              id="reason"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              placeholder="구체적인 신고 사유를 적어주세요 (최소 20자 이상)"
              rows={5}
              className={`w-full rounded-lg border-2 px-4 py-3 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-red-500/20 ${
                errors.reason
                  ? "border-red-500 bg-red-50"
                  : "border-neutral-200 bg-neutral-50"
              }`}
            />
            <div className="mt-1 flex items-center justify-between">
              {errors.reason && (
                <p className="text-xs text-red-600">{errors.reason}</p>
              )}
              <p
                className={`ml-auto text-xs ${
                  reason.length < 20 ? "text-neutral-400" : "text-neutral-600"
                }`}
              >
                {reason.length}자 / 최소 20자
              </p>
            </div>
          </div>

          {/* 버튼 */}
          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 rounded-lg border border-neutral-300 bg-white px-6 py-3 text-sm font-medium text-neutral-700 transition-colors hover:bg-neutral-50"
            >
              취소
            </button>
            <button
              type="submit"
              className="flex-1 rounded-lg bg-red-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-red-700"
            >
              신고 접수하기
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
