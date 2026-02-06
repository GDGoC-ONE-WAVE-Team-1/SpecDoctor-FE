import Image from "next/image";
import SearchInput from "./SearchInput";
import Header from "./header";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[linear-gradient(135deg,#EEF2FF_0%,#FFFFFF_35%,#F5F3FF_100%)]">
      <div className="pointer-events-none absolute right-[80px] hidden md:block opacity-30">
        <Image src="/images/hero_icon.png" alt="Hero Section Background" width={520} height={520} />
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
      <span className="h-2 w-2 rounded-full bg-[#FF4D4D]" />
      <span className="text-[13px] font-semibold text-[#0B1220]">
        실시간 가짜 동아리 주의보 발령 중
      </span>
    </div>
  );
}



