'use client';

import {
    createContext,
    ReactNode,
    useEffect,
    useState
} from 'react';


type ThemeContextType = {
    theme: string;
    setTheme: (theme: string) => void;
};
const initialTheme = "dark";
export const ThemeContext = createContext<ThemeContextType>({ theme: initialTheme, setTheme: () => { } });


export function ThemeProvider({
    children
}: {
    children: ReactNode
}) {

    let [theme, setTheme] = useState<string>(initialTheme);

    useEffect(() => {
        setTheme(initialTheme);
    }, [initialTheme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}