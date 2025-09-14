import React, { useState, useEffect } from 'react';
import styles from '../ProfileComponents.module.css';
import { FaGithub, FaTelegram, FaLinkedin, FaReact, FaHtml5, FaCss3Alt, FaJs, FaGitAlt,
    FaDatabase, FaNpm, FaSass, FaBootstrap, FaNodeJs, FaRocket, FaCode, FaMobile, FaTools,
    FaLayerGroup, FaPalette, FaLightbulb, FaClock, FaHeart, FaStar, FaServer, FaCloud } from 'react-icons/fa';
import { SiTypescript, SiRedux, SiWebpack, SiJest, SiTailwindcss,
    SiMongodb, SiPostgresql, SiExpress, SiNextdotjs, SiDocker } from 'react-icons/si';
import { useTheme } from '../../../context/ThemeContext';

const NikitaProfile = () => {
    const { darkMode } = useTheme();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
        return () => setIsVisible(false);
    }, []);

    return (
        <div className={`${styles.profileContainer} ${darkMode ? styles.dark : styles.light}`}>
            <div className={styles.backgroundElements}>
                <div className={styles.bgCircle1}></div>
                <div className={styles.bgCircle2}></div>
                <div className={styles.bgCircle3}></div>
                <div className={styles.bgGrid}></div>
            </div>

            <div className={`${styles.profileContent} ${isVisible ? styles.visible : ''}`}>
                <header className={styles.profileHeader}>
                    <div className={styles.nameContainer}>
                        <h1 className={styles.profileName}>Никита</h1>

                    </div>
                    <p className={styles.profileRole}>Full Stack JavaScript Developer</p>
                    <div className={styles.socialLinks}>
                        <a
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.socialLink}
                            aria-label="GitHub"
                        >
                            <FaGithub />
                            <span className={styles.socialTooltip}>GitHub</span>
                        </a>
                        <a
                            href="https://t.me"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.socialLink}
                            aria-label="Telegram"
                        >
                            <FaTelegram />
                            <span className={styles.socialTooltip}>Telegram</span>
                        </a>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.socialLink}
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin />
                            <span className={styles.socialTooltip}>LinkedIn</span>
                        </a>
                    </div>
                </header>



                <section className={styles.aboutSection}>
                    <div className={styles.sectionHeader}>
                        <div className={styles.sectionIcon}>
                            <FaLayerGroup />
                        </div>
                        <h2 className={styles.sectionTitle}>О разработчике</h2>
                    </div>
                    <div className={styles.aboutContent}>
                        <p className={styles.aboutText}>
                            Full Stack разработчик с опытом создания полноценных веб-приложений от фронтенда до бэкенда.
                            Специализируюсь на JavaScript экосистеме, включая React, Node.js и современные базы данных.
                            Способен реализовать проект от идеи до развертывания, обеспечивая высокую производительность
                            и масштабируемость на всех уровнях приложения.
                        </p>
                    </div>
                </section>

                <section className={styles.skillsSection}>
                    <div className={styles.sectionHeader}>
                        <div className={styles.sectionIcon}>
                            <FaCode />
                        </div>
                        <h2 className={styles.sectionTitle}>Технические навыки</h2>
                    </div>
                    <div className={styles.skillsGrid}>
                        <div className={styles.skillCategory}>
                            <h3 className={styles.skillCategoryTitle}>Фронтенд</h3>
                            <div className={styles.skillsList}>
                                <div className={styles.skillItem}>
                                    <div className={styles.skillIcon}>
                                        <FaHtml5 />
                                    </div>
                                    <div className={styles.skillInfo}>
                                        <span className={styles.skillName}>HTML5</span>
                                        <div className={styles.skillLevel}>
                                            <div className={styles.skillLevelBar} style={{width: '95%'}}></div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.skillItem}>
                                    <div className={styles.skillIcon}>
                                        <FaCss3Alt />
                                    </div>
                                    <div className={styles.skillInfo}>
                                        <span className={styles.skillName}>CSS3</span>
                                        <div className={styles.skillLevel}>
                                            <div className={styles.skillLevelBar} style={{width: '90%'}}></div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.skillItem}>
                                    <div className={styles.skillIcon}>
                                        <FaJs />
                                    </div>
                                    <div className={styles.skillInfo}>
                                        <span className={styles.skillName}>JavaScript</span>
                                        <div className={styles.skillLevel}>
                                            <div className={styles.skillLevelBar} style={{width: '92%'}}></div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.skillItem}>
                                    <div className={styles.skillIcon}>
                                        <SiTypescript />
                                    </div>
                                    <div className={styles.skillInfo}>
                                        <span className={styles.skillName}>TypeScript</span>
                                        <div className={styles.skillLevel}>
                                            <div className={styles.skillLevelBar} style={{width: '88%'}}></div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.skillItem}>
                                    <div className={styles.skillIcon}>
                                        <FaReact />
                                    </div>
                                    <div className={styles.skillInfo}>
                                        <span className={styles.skillName}>React</span>
                                        <div className={styles.skillLevel}>
                                            <div className={styles.skillLevelBar} style={{width: '90%'}}></div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className={styles.skillCategory}>
                            <h3 className={styles.skillCategoryTitle}>Бэкенд</h3>
                            <div className={styles.skillsList}>
                                <div className={styles.skillItem}>
                                    <div className={styles.skillIcon}>
                                        <FaNodeJs />
                                    </div>
                                    <div className={styles.skillInfo}>
                                        <span className={styles.skillName}>Node.js</span>
                                        <div className={styles.skillLevel}>
                                            <div className={styles.skillLevelBar} style={{width: '90%'}}></div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.skillItem}>
                                    <div className={styles.skillIcon}>
                                        <SiExpress />
                                    </div>
                                    <div className={styles.skillInfo}>
                                        <span className={styles.skillName}>Express.js</span>
                                        <div className={styles.skillLevel}>
                                            <div className={styles.skillLevelBar} style={{width: '88%'}}></div>
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.skillItem}>
                                    <div className={styles.skillIcon}>
                                        <SiPostgresql />
                                    </div>
                                    <div className={styles.skillInfo}>
                                        <span className={styles.skillName}>PostgreSQL</span>
                                        <div className={styles.skillLevel}>
                                            <div className={styles.skillLevelBar} style={{width: '80%'}}></div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.skillItem}>
                                    <div className={styles.skillIcon}>
                                        <FaServer />
                                    </div>
                                    <div className={styles.skillInfo}>
                                        <span className={styles.skillName}>REST API</span>
                                        <div className={styles.skillLevel}>
                                            <div className={styles.skillLevelBar} style={{width: '90%'}}></div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.skillItem}>
                                    <div className={styles.skillIcon}>
                                        <SiDocker />
                                    </div>
                                    <div className={styles.skillInfo}>
                                        <span className={styles.skillName}>Docker</span>
                                        <div className={styles.skillLevel}>
                                            <div className={styles.skillLevelBar} style={{width: '75%'}}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.skillCategory}>
                            <h3 className={styles.skillCategoryTitle}>Инструменты</h3>
                            <div className={styles.skillsList}>
                                <div className={styles.skillItem}>
                                    <div className={styles.skillIcon}>
                                        <FaGitAlt />
                                    </div>
                                    <div className={styles.skillInfo}>
                                        <span className={styles.skillName}>Git</span>
                                        <div className={styles.skillLevel}>
                                            <div className={styles.skillLevelBar} style={{width: '92%'}}></div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.skillItem}>
                                    <div className={styles.skillIcon}>
                                        <SiWebpack />
                                    </div>
                                    <div className={styles.skillInfo}>
                                        <span className={styles.skillName}>Webpack</span>
                                        <div className={styles.skillLevel}>
                                            <div className={styles.skillLevelBar} style={{width: '85%'}}></div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.skillItem}>
                                    <div className={styles.skillIcon}>
                                        <SiJest />
                                    </div>
                                    <div className={styles.skillInfo}>
                                        <span className={styles.skillName}>Jest</span>
                                        <div className={styles.skillLevel}>
                                            <div className={styles.skillLevelBar} style={{width: '80%'}}></div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.skillItem}>
                                    <div className={styles.skillIcon}>
                                        <FaNpm />
                                    </div>
                                    <div className={styles.skillInfo}>
                                        <span className={styles.skillName}>NPM</span>
                                        <div className={styles.skillLevel}>
                                            <div className={styles.skillLevelBar} style={{width: '90%'}}></div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.skillItem}>
                                    <div className={styles.skillIcon}>
                                        <SiTailwindcss />
                                    </div>
                                    <div className={styles.skillInfo}>
                                        <span className={styles.skillName}>Tailwind</span>
                                        <div className={styles.skillLevel}>
                                            <div className={styles.skillLevelBar} style={{width: '85%'}}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className={styles.competenciesSection}>
                    <div className={styles.sectionHeader}>
                        <div className={styles.sectionIcon}>
                            <FaStar />
                        </div>
                        <h2 className={styles.sectionTitle}>Ключевые компетенции</h2>
                    </div>
                    <div className={styles.competenciesGrid}>
                        <div className={styles.competencyCard}>
                            <div className={styles.competencyIcon}>
                                <FaRocket />
                            </div>
                            <h3>Полный цикл разработки</h3>
                            <p>Создание приложений от проектирования архитектуры до развертывания и поддержки</p>
                        </div>
                        <div className={styles.competencyCard}>
                            <div className={styles.competencyIcon}>
                                <FaDatabase />
                            </div>
                            <h3>Работа с базами данных</h3>
                            <p>Проектирование и оптимизация баз данных, написание эффективных запросов</p>
                        </div>
                        <div className={styles.competencyCard}>
                            <div className={styles.competencyIcon}>
                                <FaTools />
                            </div>
                            <h3>Интеграция систем</h3>
                            <p>Обеспечение seamless-взаимодействия между фронтендом и бэкендом</p>
                        </div>
                    </div>
                </section>

                <section className={styles.statsSection}>
                    <div className={styles.sectionHeader}>
                        <div className={styles.sectionIcon}>
                            <FaChartLine />
                        </div>
                        <h2 className={styles.sectionTitle}>Профессиональные достижения</h2>
                    </div>
                    <div className={styles.statsGrid}>
                        <div className={styles.statItem}>
                            <div className={styles.statIcon}>
                                <FaClock />
                            </div>
                            <div className={styles.statNumber}>12+</div>
                            <div className={styles.statLabel}>Завершенных проектов</div>
                        </div>
                        <div className={styles.statItem}>
                            <div className={styles.statIcon}>
                                <FaHeart />
                            </div>
                            <div className={styles.statNumber}>2+</div>
                            <div className={styles.statLabel}>Года опыта</div>
                        </div>
                        <div className={styles.statItem}>
                            <div className={styles.statIcon}>
                                <FaServer />
                            </div>
                            <div className={styles.statNumber}>8+</div>
                            <div className={styles.statLabel}>Backend проектов</div>
                        </div>
                        <div className={styles.statItem}>
                            <div className={styles.statIcon}>
                                <FaLightbulb />
                            </div>
                            <div className={styles.statNumber}>∞</div>
                            <div className={styles.statLabel}>Стремление к совершенству</div>
                        </div>
                    </div>
                </section>


            </div>
        </div>
    );
};

const FaChartLine = () => (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em">
        <path d="M496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zm-16-80V185.94c0-21.38-25.85-32.09-40.97-16.97l-32.4 32.4-96-96c-12.5-12.5-32.76-12.5-45.25 0L192 178.75 43.28 30.03c-6.25-6.25-16.38-6.25-22.63 0L10.03 48.66c-6.25 6.25-6.25 16.38 0 22.63L158.75 220.3c12.5 12.5 32.76 12.5 45.25 0L288 124.68l96 96 32.4-32.4c15.12-15.12 40.97-4.41 40.97 16.97V304h-48z"></path>
    </svg>
);

export default NikitaProfile;