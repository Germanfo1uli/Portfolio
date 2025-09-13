import React from 'react';
import { FaUsers, FaArrowRight, FaCode, FaLightbulb } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styles from './RecomViewPage.module.css';

const RecomViewPage = ({ isDarkMode }) => {
    return (
        <div className={`${styles.recomSection} ${isDarkMode ? styles.dark : styles.light}`}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.textContent}>
                        <div className={styles.iconWrapper}>
                            <FaLightbulb className={styles.mainIcon} />
                        </div>
                        <h2 className={styles.title}>Заинтересованы нашими проектами?</h2>
                        <p className={styles.description}>
                            Наша команда талантливых разработчиков готова воплотить ваши идеи в жизнь.
                            Мы создаем современные, интуитивные и высокопроизводительные веб-приложения,
                            используя передовые технологии и лучшие практики разработки.
                        </p>
                        <div className={styles.features}>
                            <div className={styles.featureItem}>
                                <FaCode className={styles.featureIcon} />
                                <span>Современные технологии</span>
                            </div>
                            <div className={styles.featureItem}>
                                <FaUsers className={styles.featureIcon} />
                                <span>Профессиональная команда</span>
                            </div>
                        </div>
                        <Link to="/contacts" className={styles.ctaButton}>
                            <span>Познакомиться с разработчиками</span>
                            <FaArrowRight className={styles.arrowIcon} />
                        </Link>
                    </div>
                    <div className={styles.visualContent}>
                        <div className={styles.codeElements}>
                            <div className={styles.codeSnippet}>
                                <div className={styles.codeLine}>
                                    <span className={styles.codeComment}>// Наш подход к разработке</span>
                                </div>
                                <div className={styles.codeLine}>
                                    <span className={styles.codeKeyword}>function</span> createSolution(
                                    <span className={styles.codeParam}>clientIdeas</span>) {'{'}
                                </div>
                                <div className={styles.codeLine}>
                                    &nbsp;&nbsp;<span className={styles.codeKeyword}>return</span>
                                    <span className={styles.codeBracket}> {'{'}</span>
                                </div>
                                <div className={styles.codeLine}>
                                    &nbsp;&nbsp;&nbsp;&nbsp;innovation: <span className={styles.codeValue}>true</span>,
                                </div>
                                <div className={styles.codeLine}>
                                    &nbsp;&nbsp;&nbsp;&nbsp;design: <span className={styles.codeString}>"modern"</span>,
                                </div>
                                <div className={styles.codeLine}>
                                    &nbsp;&nbsp;&nbsp;&nbsp;performance: <span className={styles.codeString}>"excellent"</span>
                                </div>
                                <div className={styles.codeLine}>
                                    &nbsp;&nbsp;<span className={styles.codeBracket}>{'}'}</span>;
                                </div>
                                <div className={styles.codeLine}>
                                    {'}'}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecomViewPage;