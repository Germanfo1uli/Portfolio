import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './ProfileNavigation.module.css';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';
import { useTheme } from '../../context/ThemeContext';

const ProfileNavigation = () => {
    const { darkMode, toggleTheme } = useTheme();
    const [isVisible, setIsVisible] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <nav className={`${styles.profileNav} ${isVisible ? styles.profileNavFadeIn : ''} ${darkMode ? styles.profileNavDark : styles.profileNavLight}`}>
            <div className={styles.profileNavLogo}>
                <span>WebCatDev</span>
                <div className={styles.profileNavLogoDot}></div>
            </div>
            <div className={`${styles.profileNavLinks} ${mobileMenuOpen ? styles.profileNavOpen : ''}`}>
                <Link
                    to="/"
                    className={styles.profileNavHomeLink}
                    onClick={() => setMobileMenuOpen(false)}
                >
                    <span>Вернуться на главную</span>
                </Link>
                <button
                    className={styles.profileNavThemeToggle}
                    onClick={toggleTheme}
                    aria-label="Сменить тему"
                >
                    {darkMode ? <FaSun /> : <FaMoon />}
                </button>
            </div>
            <button
                className={styles.profileNavMobileMenuBtn}
                onClick={toggleMobileMenu}
                aria-label="Меню"
            >
                {mobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
        </nav>
    );
};

export default ProfileNavigation;