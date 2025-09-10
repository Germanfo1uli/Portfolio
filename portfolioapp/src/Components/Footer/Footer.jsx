import React from 'react';
import { FaGithub, FaTelegram, FaSteam, FaArrowUp } from 'react-icons/fa';
import { useTheme } from '../../context/ThemeContext';
import styles from './Footer.module.css';

const Footer = () => {
    const { darkMode } = useTheme();

    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <footer className={`${styles.footer} ${darkMode ? styles.dark : styles.light}`}>
            <div className={styles.footerContent}>

                <button className={styles.logoButton} onClick={scrollToTop} aria-label="Наверх">
                    <div className={styles.footerLogo}>
                        <span className={darkMode ? styles.logoDark : styles.logoLight}>
                            WebCatDev
                        </span>
                        <FaArrowUp className={styles.arrowIcon} />
                        <div className={`${styles.logoDot} ${darkMode ? styles.dotDark : styles.dotLight}`}></div>
                    </div>
                </button>

                <div className={styles.socialLinks}>
                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.socialLink}
                        aria-label="GitHub"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="https://t.me"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.socialLink}
                        aria-label="Telegram"
                    >
                        <FaTelegram />
                    </a>
                    <a
                        href="https://store.steampowered.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.socialLink}
                        aria-label="Steam"
                    >
                        <FaSteam />
                    </a>
                </div>


                <div className={styles.copyright}>
                    <p className={styles.copyrightText}>
                        © {currentYear} WebCatDev. Все права защищены
                    </p>
                    <p className={styles.madeWithText}>
                        Создано с профессионализмом и вниманием к деталям
                    </p>
                </div>
            </div>
            <div className={styles.footerOrb1}></div>
            <div className={styles.footerOrb2}></div>
        </footer>
    );
};

export default Footer;