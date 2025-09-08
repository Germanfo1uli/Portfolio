import React, { useState, useEffect } from 'react';
import styles from './GermanProfile.module.css';
import { FaGithub, FaTelegram, FaSteam, FaCode, FaLaptopCode, FaTools, FaHeart } from 'react-icons/fa';
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiTypescript, SiNodedotjs, SiGit, SiFigma } from 'react-icons/si';

const GermanProfile = ({ isDarkMode }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
        return () => setIsVisible(false);
    }, []);

    return (
        <div className={`${styles.container} ${isDarkMode ? styles.dark : styles.light} ${isVisible ? styles.visible : ''}`}>
            <div className={styles.profileCard}>

                <div className={styles.profileHeader}>

                    <h1 className={styles.name}>German</h1>
                    <p className={styles.title}>Frontend Developer</p>

                    <div className={styles.socialLinks}>
                        <a href="#" className={`${styles.socialLink} ${styles.github}`} aria-label="GitHub">
                            <FaGithub />
                        </a>
                        <a href="#" className={`${styles.socialLink} ${styles.telegram}`} aria-label="Telegram">
                            <FaTelegram />
                        </a>
                        <a href="#" className={`${styles.socialLink} ${styles.steam}`} aria-label="Steam">
                            <FaSteam />
                        </a>
                    </div>
                </div>

                <div className={styles.aboutSection}>
                    <h2 className={styles.sectionTitle}>
                        <FaHeart className={styles.titleIcon} />
                        Обо мне
                    </h2>
                    <p className={styles.aboutText}>
                        Привет! Я - фронтенд разработчик, увлеченный созданием интуитивных и визуально привлекательных интерфейсов.
                        В постоянном поиске новых вызовов и возможностей для роста. Готов воплощать идеи в чистый и эффективный код.
                    </p>
                </div>

                <div className={styles.skillsSection}>
                    <h2 className={styles.sectionTitle}>
                        <FaTools className={styles.titleIcon} />
                        Навыки & Умения
                    </h2>
                    <div className={styles.skillsGrid}>
                        <div className={styles.skillItem}>
                            <div className={styles.skillHeader}>
                                <div className={styles.skillIcon}>
                                    <SiHtml5 />
                                </div>
                                <span className={styles.skillName}>HTML</span>
                                <span className={styles.skillPercent}>95%</span>
                            </div>
                            <div className={styles.skillBar}>
                                <div className={styles.skillProgress} style={{width: '95%'}} data-percent="95%"></div>
                            </div>
                        </div>

                        <div className={styles.skillItem}>
                            <div className={styles.skillHeader}>
                                <div className={styles.skillIcon}>
                                    <SiCss3 />
                                </div>
                                <span className={styles.skillName}>CSS3</span>
                                <span className={styles.skillPercent}>90%</span>
                            </div>
                            <div className={styles.skillBar}>
                                <div className={styles.skillProgress} style={{width: '90%'}} data-percent="90%"></div>
                            </div>
                        </div>

                        <div className={styles.skillItem}>
                            <div className={styles.skillHeader}>
                                <div className={styles.skillIcon}>
                                    <SiJavascript />
                                </div>
                                <span className={styles.skillName}>JavaScript</span>
                                <span className={styles.skillPercent}>50%</span>
                            </div>
                            <div className={styles.skillBar}>
                                <div className={styles.skillProgress} style={{width: '50%'}} data-percent="50%"></div>
                            </div>
                        </div>

                        <div className={styles.skillItem}>
                            <div className={styles.skillHeader}>
                                <div className={styles.skillIcon}>
                                    <SiReact />
                                </div>
                                <span className={styles.skillName}>React</span>
                                <span className={styles.skillPercent}>60%</span>
                            </div>
                            <div className={styles.skillBar}>
                                <div className={styles.skillProgress} style={{width: '60%'}} data-percent="60%"></div>
                            </div>
                        </div>

                        <div className={styles.skillItem}>
                            <div className={styles.skillHeader}>
                                <div className={styles.skillIcon}>
                                    <SiTypescript />
                                </div>
                                <span className={styles.skillName}>TypeScript</span>
                                <span className={styles.skillPercent}>1%</span>
                            </div>
                            <div className={styles.skillBar}>
                                <div className={styles.skillProgress} style={{width: '1%'}} data-percent="1%"></div>
                            </div>
                        </div>

                        <div className={styles.skillItem}>
                            <div className={styles.skillHeader}>
                                <div className={styles.skillIcon}>
                                    <SiGit />
                                </div>
                                <span className={styles.skillName}>Git</span>
                                <span className={styles.skillPercent}>85%</span>
                            </div>
                            <div className={styles.skillBar}>
                                <div className={styles.skillProgress} style={{width: '85%'}} data-percent="85%"></div>
                            </div>
                        </div>


                    </div>
                </div>

                <div className={styles.extraSection}>
                    <h2 className={styles.sectionTitle}>
                        <FaLaptopCode className={styles.titleIcon} />
                        Достижения
                    </h2>
                    <div className={styles.factsGrid}>
                        <div className={styles.factCard}>
                            <div className={styles.factIcon}>
                                <FaCode />
                            </div>
                            <h3>2 проекта</h3>
                            <p>Успешно завершенных веб-приложений</p>
                        </div>

                        <div className={styles.factCard}>
                            <div className={styles.factIcon}>
                                <FaHeart />
                            </div>
                            <h3>Специализация</h3>
                            <p>React и современный фронтенд</p>
                        </div>

                        <div className={styles.factCard}>
                            <div className={styles.factIcon}>
                                <FaTools />
                            </div>
                            <h3>Инструменты</h3>
                            <p>WebStorm, React, Git, Webpack</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GermanProfile;