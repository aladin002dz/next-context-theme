import { useContext } from "react";
import { ThemeContext } from "../context";

export default function DisplayCurrentTheme() {
    const { theme } = useContext(ThemeContext);
    return (
        <h1 className="text-4xl font-bold">The current theme is {theme} {theme === 'light' ? '🌞' : '🌚'}</h1>
    )
}
