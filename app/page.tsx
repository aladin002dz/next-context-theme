'use client'
import DisplayCurrentTheme from "./components/DisplayCurrentTheme";
import Loader from "./components/Loader";
import ThemeButton from "./components/ThemeButton";
import { useDarkMode } from "./context";

export default function Home() {
  const { isDarkMode } = useDarkMode();

  if (isDarkMode === null) {
    return <Loader />;
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start" >
        <DisplayCurrentTheme />
        <ThemeButton />
      </main>

    </div>
  );
}
