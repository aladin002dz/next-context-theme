'use client';

import {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useState
} from 'react';


type DarkModeContextType = {
    isDarkMode: boolean;
    toggleDarkMode: () => void;
};

export const DarkModeContext = createContext<DarkModeContextType>({ isDarkMode: false, toggleDarkMode: () => { } });
export const useDarkMode = () => useContext(DarkModeContext);

export function ThemeProvider({
    children
}: {
    children: ReactNode
}) {

    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

    useEffect(() => {
        // Check system preference
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const savedMode = localStorage.getItem('darkMode');
        if (savedMode !== null) {
            setIsDarkMode(savedMode === 'true');
        } else {
            // If not in localStorage, check system preference
            setIsDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
        }

        const handler = () => {
            if (localStorage.getItem('darkMode') === null) {
                setIsDarkMode(mediaQuery.matches);
            }
        };
        mediaQuery.addEventListener('change', handler);
        return () => mediaQuery.removeEventListener('change', handler);
    }, []);

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        // Save to localStorage
        localStorage.setItem('darkMode', isDarkMode.toString());
    }, [isDarkMode]);

    const toggleDarkMode = () => {
        setIsDarkMode(prev => !prev);
    };

    return (
        <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    );
}