import Link from "next/link";

export default function CautionHeader() {
    return (
        <div className="w-full bg-white pt-12 pb-6">
            <div className="max-w-4xl mx-auto px-4">
                {/* Tags */}
                <div className="flex gap-2 mb-3">
                    <span className="inline-flex items-center px-2 py-1 rounded text-xs font-bold bg-red-100 text-red-600 border border-red-200">
                        ⚠️ 위험: 실체 불분명
                    </span>
                    <span className="inline-flex items-center px-2 py-1 rounded text-xs font-bold bg-gray-100 text-gray-500 border border-gray-200">
                        활동 미인증 단체
                    </span>
                </div>

                {/* Title */}
                <h1 className="text-4xl font-black text-gray-900 mb-2 tracking-tight">
                    청년 IT 글로벌 마스터즈
                </h1>

                {/* Warning Message */}
                <p className="text-red-500 font-bold text-sm">
                    주의: 다수의 피해 사례 및 포교 활동 의심 제보가 접수된 단체입니다.
                </p>
            </div>
        </div>
    );
}
