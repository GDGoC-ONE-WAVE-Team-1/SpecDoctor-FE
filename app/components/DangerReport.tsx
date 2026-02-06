export enum CautionType {
    operationEntity = "정체불명 운영진",
    finance = "증빙 없는 불투명 회계",
    financeOpen = "깜깜이 회비 운영",
    leaderSelection = "낙하산/독재형 리더십",
}

export default function DangerReport({ activityData }: { activityData: any }) {
    return (
        <div className="w-full pb-16">
            <div className="max-w-5xl mx-auto px-4">
                {/* Main Card Container */}
                <div className="bg-white rounded-[32px] p-8 md:p-10 shadow-[0_20px_50px_rgba(224,48,48,0.08)] border border-red-100 relative overflow-hidden">
                    {/* Decorative Background Element */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-red-50 rounded-full blur-[100px] -mr-32 -mt-32 opacity-60"></div>

                    {/* Header */}
                    <div className="flex items-center gap-3 mb-10 relative z-10">
                        <div className="w-2 h-8 bg-[#E03030] rounded-full"></div>
                        <h2 className="text-2xl font-black text-gray-900 tracking-tight">
                            스펙닥터 <span className="text-[#E03030]">위험 정보 리포트</span>
                        </h2>
                    </div>

                    <div className="relative z-10">
                        {/* Danger Items Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12">

                            {/* Item 1 - OperationEntity */}
                            {activityData.operationEntity && (
                                <div className="group flex flex-col h-full">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-red-50 to-red-100 flex items-center justify-center text-red-600 shadow-sm transition-transform group-hover:scale-110 duration-300">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                                            </svg>
                                        </div>
                                        <h3 className="font-bold text-gray-900 text-lg tracking-tight">{CautionType.operationEntity}</h3>
                                    </div>
                                    <div className="bg-[#fdf2f2] rounded-3xl p-6 border border-red-50/50 transition-all hover:bg-red-50 hover:shadow-md duration-300 flex-1">
                                        <p className="text-gray-700 leading-relaxed font-medium">
                                            {activityData.operationEntity}
                                        </p>
                                    </div>
                                </div>
                            )}

                            {/* Item 2 - Finance */}
                            {activityData.finance && (
                                <div className="group flex flex-col h-full">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-orange-50 to-orange-100 flex items-center justify-center text-orange-600 shadow-sm transition-transform group-hover:scale-110 duration-300">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <h3 className="font-bold text-gray-900 text-lg tracking-tight">{CautionType.finance}</h3>
                                    </div>
                                    <div className="bg-[#fff7ed] rounded-3xl p-6 border border-orange-50/50 transition-all hover:bg-orange-50 hover:shadow-md duration-300 flex-1">
                                        <p className="text-gray-700 leading-relaxed font-medium">
                                            {activityData.finance}
                                        </p>
                                    </div>
                                </div>
                            )}

                            {/* Item 3 - FinanceOpen */}
                            {activityData.financeOpen && (
                                <div className="group flex flex-col h-full">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-amber-50 to-amber-100 flex items-center justify-center text-amber-600 shadow-sm transition-transform group-hover:scale-110 duration-300">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                            </svg>
                                        </div>
                                        <h3 className="font-bold text-gray-900 text-lg tracking-tight">{CautionType.financeOpen}</h3>
                                    </div>
                                    <div className="bg-[#fffbeb] rounded-3xl p-6 border border-amber-50/50 transition-all hover:bg-amber-50 hover:shadow-md duration-300 flex-1">
                                        <p className="text-gray-700 leading-relaxed font-medium">
                                            {activityData.financeOpen}
                                        </p>
                                    </div>
                                </div>
                            )}

                            {/* Item 4 - LeaderSelection */}
                            {activityData.leaderSelection && (
                                <div className="group flex flex-col h-full">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 flex items-center justify-center text-purple-600 shadow-sm transition-transform group-hover:scale-110 duration-300">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                            </svg>
                                        </div>
                                        <h3 className="font-bold text-gray-900 text-lg tracking-tight">{CautionType.leaderSelection}</h3>
                                    </div>
                                    <div className="bg-[#f5f3ff] rounded-3xl p-6 border border-purple-50/50 transition-all hover:bg-purple-50 hover:shadow-md duration-300 flex-1">
                                        <p className="text-gray-700 leading-relaxed font-medium">
                                            {activityData.leaderSelection}
                                        </p>
                                    </div>
                                </div>
                            )}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

