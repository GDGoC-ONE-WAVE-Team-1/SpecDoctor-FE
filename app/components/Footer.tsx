import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full bg-white py-12 border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    {/* Logo & Description */}
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="text-2xl font-black text-indigo-600 italic tracking-tighter">
                            SPEC DOCTOR
                        </Link>
                        <p className="mt-4 text-sm text-gray-400 leading-relaxed">
                            취준생들의 소중한 시간과 열정을 보호하기 위해 탄생한 대외활동 검증 플랫폼입니다.
                        </p>
                    </div>

                    {/* Links Section - Spanning 3 cols on desktop */}
                    <div className="col-span-1 md:col-span-3 grid grid-cols-2 sm:grid-cols-3 gap-8 md:pl-20">
                        {/* Service */}
                        <div>
                            <h3 className="font-bold text-gray-900 mb-4">서비스</h3>
                            <ul className="space-y-3 text-sm text-gray-500">
                                <li><Link href="#" className="hover:text-indigo-600 transition-colors">단체 조회</Link></li>
                                <li><Link href="#" className="hover:text-indigo-600 transition-colors">피해 사례 제보</Link></li>
                                <li><Link href="#" className="hover:text-indigo-600 transition-colors">역량 분석 서비스</Link></li>
                            </ul>
                        </div>

                        {/* Community */}
                        <div>
                            <h3 className="font-bold text-gray-900 mb-4">커뮤니티</h3>
                            <ul className="space-y-3 text-sm text-gray-500">
                                <li><Link href="#" className="hover:text-indigo-600 transition-colors">합격 후기</Link></li>
                                <li><Link href="#" className="hover:text-indigo-600 transition-colors">멘토링 신청</Link></li>
                                <li><Link href="#" className="hover:text-indigo-600 transition-colors">자유게시판</Link></li>
                            </ul>
                        </div>

                        {/* Support */}
                        <div>
                            <h3 className="font-bold text-gray-900 mb-4">고객지원</h3>
                            <ul className="space-y-3 text-sm text-gray-500">
                                <li><Link href="#" className="hover:text-indigo-600 transition-colors">공지사항</Link></li>
                                <li><Link href="#" className="hover:text-indigo-600 transition-colors">자주 묻는 질문</Link></li>
                                <li><Link href="#" className="hover:text-indigo-600 transition-colors">문의하기</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
                    <p>© 2025 SPEC DOCTOR. All rights reserved.</p>

                </div>
            </div>
        </footer>
    );
}
