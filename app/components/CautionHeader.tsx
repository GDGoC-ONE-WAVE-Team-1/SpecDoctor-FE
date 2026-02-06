export default function CautionHeader({ activityData }: { activityData: any }) {
    return (
        <div className="w-full pt-12 pb-6">
            <div className="max-w-5xl mx-auto px-4">
                {/* Tags */}
                <div className="flex gap-2 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[13px] font-bold bg-red-50 text-[#E03030] border border-red-100/50 shadow-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                            <path fillRule="evenodd" d="M9.401 3.003c1.155-2 3.9-2 5.055 0l9.541 16.56c1.155 2-.292 4.5-2.527 4.5H2.387c-2.235 0-3.682-2.5-2.527-4.5L9.401 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
                        </svg>
                        실시간 위험 주의보
                    </span>
                </div>

                {/* Title */}
                <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-2 tracking-tight">
                    {activityData?.name ?? "활동명"}
                </h1>
            </div>
        </div>
    );
}
