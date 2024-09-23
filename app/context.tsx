'use client';

import {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useState
} from 'react';


type DarkModeContextType = {
    isDarkMode: boolean | null;
    toggleDarkMode: () => void;
};

export const DarkModeContext = createContext<DarkModeContextType>({ isDarkMode: null, toggleDarkMode: () => { } });
export const useDarkMode = () => useContext(DarkModeContext);

export function ThemeProvider({ children }: { children: ReactNode }) {
    const [isDarkMode, setIsDarkMode] = useState<boolean | null>(null);
    useEffect(() => {

        // Check system preference
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        setIsDarkMode(mediaQuery.matches);
        const handler = () => {
            setIsDarkMode(mediaQuery.matches);
        };
        mediaQuery.addEventListener('change', handler);
        return () => mediaQuery.removeEventListener('change', handler);
    }, []);

    useEffect(() => {
        if (isDarkMode === true) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
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