import React, { createContext, useMemo, useState, ReactNode } from 'react';
import { ThemeProvider as MuiThemeProvider, CssBaseline } from '@mui/material';
import { lightTheme, darkTheme } from './index';
import {IThemeContextType} from "../helpers/types";
import useLocalTheme from "../hooks/useLocalTheme";

export const ThemeContext = createContext<IThemeContextType>({
    toggleTheme: () => {},
    isDarkMode: false,
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {

    // не дает слетать после перезагрузки страницы
    const {localTheme, setLocalTheme} = useLocalTheme()


    const [isDarkMode, setIsDarkMode] = useState<boolean>(localTheme === 'dark');
    const theme = useMemo(() => (isDarkMode ? darkTheme : lightTheme), [isDarkMode]);
    const toggleTheme = () => {
        setIsDarkMode((prevMode) => !prevMode);
        setLocalTheme(localTheme === 'dark' ? 'light' : 'dark')
    };

    return (
        <ThemeContext.Provider value={{ toggleTheme, isDarkMode }}>
            <MuiThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </MuiThemeProvider>
        </ThemeContext.Provider>
    );
};


// useEffect(() => {
//     const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
//     const handleChange = (event: MediaQueryListEvent) => {
//         setIsDarkMode(event.matches);
//     };
//
//     if (mediaQuery.addEventListener) {
//         mediaQuery.addEventListener('change', handleChange);
//     } else if (mediaQuery.addListener) {  // for older browsers
//         mediaQuery.addListener(handleChange);
//     }
//
//     return () => {
//         if (mediaQuery.removeEventListener) {
//             mediaQuery.removeEventListener('change', handleChange);
//         } else if (mediaQuery.removeListener) {  // for older browsers
//             mediaQuery.removeListener(handleChange);
//         }
//     };
// }, []);