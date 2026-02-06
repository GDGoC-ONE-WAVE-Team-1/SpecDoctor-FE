import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="w-full bg-white py-12 border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    {/* Logo & Description */}
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="inline-block">
                            <Image
                                src="/images/spec_doctor_logo.png"
                                alt="Spec Doctor Logo"
                                width={160}
                                height={40}
                                className="object-contain"
                                priority
                            />
                        </Link>

                        <p className="mt-4 text-sm text-gray-400 leading-relaxed">
                            취준생들의 소중한 시간과 열정을 보호하기 위해 탄생한 대외활동 검증 플랫폼입니다.
                        </p>
                        <p className="mt-4 text-xs text-gray-400 leading-relaxed">
                            BE : 김예찬 , 김민경 <br /> FE : 윤효정 , 유가영
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
