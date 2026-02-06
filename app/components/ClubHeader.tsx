import Link from "next/link";

export default function ClubHeader() {
    return (
        <div className="w-full bg-white py-12">
            <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">

                {/* Left Side: Info */}
                <div>
                    <div className="flex gap-2 mb-3">
                        <span className="inline-flex items-center px-2 py-1 rounded text-xs font-bold bg-green-100 text-green-600">
                            ✔ 실제 확인됨
                        </span>
                        <span className="inline-flex items-center px-2 py-1 rounded text-xs font-bold bg-indigo-100 text-indigo-600">
                            IT/벤처 창업
                        </span>
                    </div>
                    <h1 className="text-4xl font-extrabold text-gray-900 mb-2">
                        SOPT (솝트)
                    </h1>
                    <p className="text-gray-500 font-medium">
                        대학생 연합 IT 벤처 창업 동아리
                    </p>
                </div>

                {/* Right Side: Action */}
                <div>
                    <Link
                        href="#"
                        className="inline-block bg-[#1A1B23] text-white font-bold py-3 px-6 rounded-lg hover:bg-gray-900 transition-colors"
                    >
                        공식 홈페이지 방문
                    </Link>
                </div>

            </div>
        </div>
    );
}
