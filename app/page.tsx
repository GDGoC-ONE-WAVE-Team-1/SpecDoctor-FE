import Header from "./components/header";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 font-sans dark:bg-black">
      <header className="w-full">
        {/* TODO: 실제 로그인 상태에 따라 isLoggedIn, profileImageUrl 전달 */}
        <Header isLoggedIn={false} />
      </header>
      <main className="flex flex-1 items-center justify-center">
        {/* 메인 콘텐츠는 추후 구현 */}
      </main>
    </div>
  );
}

