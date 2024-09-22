'use client'
import DisplayCurrentTheme from "./components/DisplayCurrentTheme";
import ThemeButton from "./components/ThemeButton";

export default function Home() {

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start" >
        <DisplayCurrentTheme />
        <ThemeButton />
      </main>

    </div>
  );
}
