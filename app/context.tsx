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
        const userChoice = localStorage.getItem('darkMode');
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        if (userChoice !== null) {
            const currentUserChoice = JSON.parse(userChoice);
            if (currentUserChoice) {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
            setIsDarkMode(currentUserChoice);
        } else {
            // If not in localStorage, check system preference
            setIsDarkMode(mediaQuery.matches);
        }

        const handler = () => {
            if (localStorage.getItem('darkMode') === null) {
                setIsDarkMode(mediaQuery.matches);
            }
        };
        mediaQuery.addEventListener('change', handler);
        return () => mediaQuery.removeEventListener('change', handler);
    }, []);



    const toggleDarkMode = () => {
        // Toggle dark mode
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        // Save to localStorage
        localStorage.setItem('darkMode', isDarkMode.toString());
        setIsDarkMode(prev => !prev);
    };

    return (
        <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    );
}