


export default function CautionHeader({ activityData }: { activityData: any }) {
    return (
        <div className="w-full pt-12 pb-6">
            <div className="max-w-5xl mx-auto px-4">
                {/* Tags */}
                <div className="flex gap-2 mb-3">
                    <span className="inline-flex items-center px-2 py-1 rounded text-xs font-bold bg-red-100 text-red-600 border border-red-200">
                        ⚠️ 위험
                    </span>
                </div>

                {/* Title */}
                <h1 className="text-4xl font-black text-gray-900 mb-2 tracking-tight">
                    {activityData?.name ?? "활동명"}
                </h1>
            </div>
        </div>
    );
}
