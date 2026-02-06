export enum CautionType {
    operationEntity = "정체불명 운영진",
    finance = "증빙 없는 불투명 회계",
    financeOpen = "깜깜이 회비 운영",
    leaderSelection = "낙하산/독재형 리더십",
}


export default function DangerReport({ activityData }: { activityData: any }) {
    return (
        <div className="w-full pb-12">
            <div className="max-w-5xl mx-auto px-4">
                {/* Main Card Container */}
                <div className="border-2 border-red-200 rounded-3xl p-8 bg-white relative">

                    {/* Header */}
                    <div className="flex justify-between items-start mb-8">
                        <h2 className="text-xl font-extrabold text-[#E03030]">
                            스펙닥터 위험 정보 리포트
                        </h2>

                    </div>


                    <div>
                        {/* Danger Items Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                            {/* Item 1 - OperationEntity */}
                            {activityData.operationEntity && <div>
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center text-xl">
                                        🚫
                                    </div>
                                    <h3 className="font-bold text-gray-900 text-lg">{CautionType.operationEntity}</h3>
                                </div>
                                <div className="bg-red-50 rounded-2xl p-6 border border-red-100">
                                    <p className="text-gray-700 leading-relaxed font-medium">
                                        {activityData.operationEntity}
                                    </p>
                                </div>
                            </div>}


                            {/* Item 2 - Finance */}
                            {activityData.finance && <div>
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center text-xl">
                                        💰
                                    </div>
                                    <h3 className="font-bold text-gray-900 text-lg">{CautionType.finance}</h3>
                                </div>
                                <div className="bg-orange-50 rounded-2xl p-6 border border-orange-100">
                                    <p className="text-gray-700 leading-relaxed font-medium">
                                        {activityData.finance}
                                    </p>
                                </div>
                            </div>}

                            {/* Item 3 - FinanceOpen */}
                            {activityData.financeOpen && <div>
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center text-xl">
                                        🧾
                                    </div>
                                    <h3 className="font-bold text-gray-900 text-lg">{CautionType.financeOpen}</h3>
                                </div>
                                <div className="bg-amber-50 rounded-2xl p-6 border border-amber-100">
                                    <p className="text-gray-700 leading-relaxed font-medium">
                                        {activityData.financeOpen}
                                    </p>
                                </div>
                            </div>}

                            {/* Item 4 - LeaderSelection */}
                            {activityData.leaderSelection && <div>
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center text-xl">
                                        👑
                                    </div>
                                    <h3 className="font-bold text-gray-900 text-lg">{CautionType.leaderSelection}</h3>
                                </div>
                                <div className="bg-purple-50 rounded-2xl p-6 border border-purple-100">
                                    <p className="text-gray-700 leading-relaxed font-medium">
                                        {activityData.leaderSelection}
                                    </p>
                                </div>
                            </div>}

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
