import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};

export const ThemeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme ? savedTheme === 'dark' : true;
    });
    const [isTransitioning, setIsTransitioning] = useState(false);

    useEffect(() => {
        localStorage.setItem('theme', darkMode ? 'dark' : 'light');

        setIsTransitioning(true);
        const timer = setTimeout(() => {
            setIsTransitioning(false);
        }, 800); // Match animation duration in CSS

        if (darkMode) {
            document.body.classList.add('dark-theme');
            document.body.classList.remove('light-theme');
        } else {
            document.body.classList.add('light-theme');
            document.body.classList.remove('dark-theme');
        }

        return () => clearTimeout(timer);
    }, [darkMode]);

    const toggleTheme = () => {
        setDarkMode(prev => !prev);
    };

    const value = {
        darkMode,
        toggleTheme,
        setDarkMode
    };

    return (
        <ThemeContext.Provider value={value}>
            {children}
            {isTransitioning && (
                <div className={`theme-transition-overlay ${darkMode ? 'dark-to-light' : 'light-to-dark'}`} />
            )}
        </ThemeContext.Provider>
    );
};