"use client";

import Image from "next/image";
import SearchInput from "./SearchInput";
import Header from "./header";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[linear-gradient(135deg,#EEF2FF_0%,#FFFFFF_35%,#F5F3FF_100%)]">
      <div className="pointer-events-none absolute right-[80px] hidden md:block opacity-30 z-10">
        <Image src="/images/hero_icon.png" alt="Hero Section Background" width={520} height={520} />
      </div>

      {/* EKG Heartbeat Animation */}
      <div className="absolute top-[60%] right-0 w-1/2 -translate-y-1/2 opacity-10 pointer-events-none overflow-hidden z-20">
        <svg
          viewBox="0 0 1200 150"
          fill="none"
          className="w-full h-40 stroke-[#4B6BFF]"
          preserveAspectRatio="none"
        >
          <path
            d="M0,75 L200,75 L220,70 L240,80 L260,75 L300,75 L320,68 L340,35 L360,115 L380,75 L420,75 L440,70 L460,80 L480,75 L600,75 L620,55 L640,0 L660,145 L680,75 L720,75 L740,70 L760,80 L780,75 L900,75 L920,68 L940,35 L960,115 L980,75 L1200,75"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="ekg-path"
          />
        </svg>
      </div>
      <Header />
      <div className="mx-auto flex w-full max-w-6xl flex-col px-6 pb-20 pt-10 md:pt-14">
        <Badge />

        <div className="mt-8 max-w-2xl">
          <h1 className="text-[44px] font-extrabold leading-[1.15] tracking-[-0.03em] text-[#0B1220] md:text-[56px]">
            AI로{" "}
            <span className="text-[#4B6BFF]">가짜 스펙</span>을
            <br />
            시간 낭비 없이 진단해 보세요.
          </h1>

          <div className="mt-8 w-full max-w-xl">
            <SearchInput />
          </div>
        </div>
      </div>
    </section>
  );
}

function Badge() {
  return (
    <div className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#0B1220] shadow-[0_10px_30px_rgba(15,23,42,0.08)] ring-1 ring-black/5">
      <span className="relative flex h-2.5 w-2.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF4D4D] opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#FF4D4D]"></span>
      </span>
      <span className="text-[13px] font-semibold text-[#0B1220]">
        실시간 가짜 대외활동 주의보 발령 중
      </span>
    </div>
  );
}



