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
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
                    <p>© 2026 SPEC DOCTOR. All rights reserved.</p>

                </div>
            </div>
        </footer>
    );
}
