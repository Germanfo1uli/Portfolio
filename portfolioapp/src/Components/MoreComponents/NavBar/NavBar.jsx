import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from '../../MainPage/MainPage.module.css';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';
import { useTheme } from '../../../context/ThemeContext';

const Navigation = () => {
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
        <nav className={`${styles.navbar} ${isVisible ? styles.fadeIn : ''}`}>
            <div className={styles.logo}>
                <span>WebCatDev</span>
                <div className={styles.logoDot}></div>
            </div>
            <div className={`${styles.navLinks} ${mobileMenuOpen ? styles.navOpen : ''}`}>
                <Link to="#experiments" onClick={() => setMobileMenuOpen(false)}>
                    Эксперименты
                </Link>
                <Link to="/contacts" onClick={() => setMobileMenuOpen(false)}>
                    Контакты
                </Link>
                <Link to="#cases" onClick={() => setMobileMenuOpen(false)}>
                    Кейсы
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

export default Navigation;