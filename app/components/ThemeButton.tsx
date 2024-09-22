'use client';
import { useContext } from 'react';
import { ThemeContext } from '../context';

export default function ThemeButton() {
    const { theme, setTheme } = useContext(ThemeContext);
    return (
        <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className='outline-indigo-500 shadow-md text-2xl font-bold py-2 px-4 rounded'>
            Switch to {theme} mode {theme === 'dark' ? '🌞' : '🌚'}
        </button>
    )
}
