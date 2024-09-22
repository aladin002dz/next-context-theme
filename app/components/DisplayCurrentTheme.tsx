import { useDarkMode } from "../context";

export default function DisplayCurrentTheme() {
    const { isDarkMode } = useDarkMode();
    return (
        <h1 className="text-4xl font-bold">The current theme is {isDarkMode ? 'dark' : 'light'} {isDarkMode ? '🌚' : '🌞'}</h1>
    )
}
