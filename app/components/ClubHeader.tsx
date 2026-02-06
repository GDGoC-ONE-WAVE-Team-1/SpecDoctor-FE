import Link from "next/link";

export default function ClubHeader({ activityData }: { activityData: any }) {
    console.log(activityData)
    return (
        <div className="w-full py-12">
            <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-start md:items-start gap-6">

                {/* Left Side: Info */}
                <div>
                    <div className="flex gap-2 mb-3">
                        <span className="inline-flex items-center px-2 py-1 rounded text-xs font-bold bg-green-100 text-green-600">
                            ✔ 실제 확인됨
                        </span>
                        <span className="inline-flex items-center px-2 py-1 rounded text-xs font-bold bg-indigo-100 text-indigo-600">
                            {activityData.category}
                        </span>
                    </div>
                    <h1 className="text-5xl font-extrabold text-gray-900 mb-2">
                        {activityData.name}
                    </h1>
                    <p className="text-gray-500 font-medium">
                        {activityData.description}
                    </p>
                </div>

                {/* Right Side: Action */}
                <div className="min-w-[140px]">
                    {activityData.link ? (
                        <Link
                            href={activityData.link.startsWith('http') ? activityData.link : `https://${activityData.link}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-[#1A1B23] text-white text-sm font-bold py-3 px-4 rounded-[16px] hover:bg-gray-900 transition-colors"
                        >
                            공식 홈페이지 방문
                        </Link>
                    ) : (
                        <button
                            disabled
                            className="inline-block bg-gray-300 text-white font-bold py-3 px-6 rounded-lg cursor-not-allowed"
                        >
                            공식 홈페이지 정보 없음
                        </button>
                    )}
                </div>

            </div>
        </div>
    );
}
