'use client'
import { useContext } from "react";
import DisplayCurrentTheme from "./components/DisplayCurrentTheme";
import ThemeButton from "./components/ThemeButton";
import { ThemeContext } from "./context";

export default function Home() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]" data-theme={theme}>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start" >
        <DisplayCurrentTheme />
        <ThemeButton />
      </main>

    </div>
  );
}
