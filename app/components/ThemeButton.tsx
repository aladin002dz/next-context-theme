'use client';
import { useDarkMode } from '../context';

export default function ThemeButton() {
    const { isDarkMode, toggleDarkMode } = useDarkMode();
    return (
        <button onClick={toggleDarkMode} className='outline-indigo-500 shadow-md text-2xl font-bold py-2 px-4 rounded'>
            Switch to {isDarkMode ? 'light' : 'dark'} mode {isDarkMode ? '🌞' : '🌚'}
        </button>
    )
}
