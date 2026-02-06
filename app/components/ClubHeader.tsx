import Link from "next/link";

export default function ClubHeader({ activityData }: { activityData: any }) {
    return (
        <div className="w-full py-16 px-4">
            <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row justify-between items-start gap-8">

                {/* Left Side: Info */}
                <div className="flex-1">
                    <div className="flex flex-wrap gap-2 mb-4">
                        <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-[13px] font-bold bg-green-50 text-green-600 border border-green-100/50 shadow-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                            공식 검증 완료
                        </span>
                        <span className="inline-flex items-center px-3 py-1.5 rounded-full text-[13px] font-bold bg-indigo-50 text-indigo-600 border border-indigo-100/50 shadow-sm">
                            {activityData.category}
                        </span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight leading-tight">
                        {activityData.name}
                    </h1>
                    <p className="text-gray-500 text-lg font-medium leading-relaxed max-w-2xl">
                        {activityData.description}
                    </p>
                </div>

                {/* Right Side: Action */}
                <div className="md:sticky md:top-24">
                    {activityData.link ? (
                        <Link
                            href={activityData.link.startsWith('http') ? activityData.link : `https://${activityData.link}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center bg-[#0B1220] text-white text-[15px] font-bold py-4 px-8 rounded-2xl hover:bg-gray-800 transition-all shadow-[0_10px_30px_rgba(11,18,32,0.15)] hover:shadow-[0_15px_35px_rgba(11,18,32,0.2)] hover:-translate-y-1 active:scale-95 ease-in-out duration-300"
                        >
                            공식 홈페이지 방문
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </Link>
                    ) : (
                        <div className="bg-gray-50 text-gray-400 text-sm font-bold py-4 px-8 rounded-2xl border border-gray-100">
                            공식 홈페이지 정보 없음
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
}
