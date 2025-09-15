import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from '../MainPage/MainPage.module.css';
import { FaSun, FaMoon, FaBars, FaTimes, FaHome } from 'react-icons/fa';
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
        <nav className={`${styles.navbar} ${isVisible ? styles.fadeIn : ''} ${darkMode ? styles.dark : styles.light}`}>
            <div className={styles.logo}>
                <span>WebCatDev</span>
                <div className={styles.logoDot}></div>
            </div>
            <div className={`${styles.navLinks} ${mobileMenuOpen ? styles.navOpen : ''}`}>
                <Link
                    to="/"
                    className={styles.homeLink}
                    onClick={() => setMobileMenuOpen(false)}
                >
                    <FaHome />
                    <span>Вернуться на главную</span>
                </Link>
                <button
                    className={styles.themeToggle}
                    onClick={toggleTheme}
                    aria-label="Сменить тему"
                >
                    {darkMode ? <FaSun /> : <FaMoon />}
                </button>
            </div>
            <button
                className={styles.mobileMenuBtn}
                onClick={toggleMobileMenu}
                aria-label="Меню"
            >
                {mobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
        </nav>
    );
};

export default ProfileNavigation;