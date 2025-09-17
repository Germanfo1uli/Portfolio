import React, { useState } from 'react';
import { FaExternalLinkAlt, FaGithub, FaArrowRight } from 'react-icons/fa';
import styles from './WorksPage.module.css';

const WorksPage = ({ isDarkMode }) => {
    const [activeCard, setActiveCard] = useState(null);

    const works = [
        {
            id: 1,
            title: "Веб-приложение для управления проектами",
            description: "Полнофункциональное приложение с возможностью создания задач, отслеживания прогресса и совместной работы.",
            technologies: ["React", "Node.js", "MongoDB", "Express"],
            image: "https://placehold.co/600x400/1a1a1a/cccccc?text=Project+Management",
            liveUrl: "#",
            githubUrl: "#"
        },
        {
            id: 2,
            title: "Интернет-магазин электроники",
            description: "Электронная коммерция с системой корзины, фильтрами товаров и интеграцией платежной системы.",
            technologies: ["React", "Redux", "Firebase", "Stripe"],
            image: "https://placehold.co/600x400/1a1a1a/cccccc?text=E-commerce",
            liveUrl: "#",
            githubUrl: "#"
        },
        {
            id: 3,
            title: "Платформа для онлайн-обучения",
            description: "Образовательная платформа с видеоуроками, тестами и системой отслеживания прогресса учащихся.",
            technologies: ["Next.js", "TypeScript", "PostgreSQL", "AWS"],
            image: "https://placehold.co/600x400/1a1a1a/cccccc?text=Learning+Platform",
            liveUrl: "#",
            githubUrl: "#"
        },
        {
            id: 4,
            title: "Мобильное приложение для фитнеса",
            description: "Приложение для отслеживания тренировок, питания и достижения фитнес-целей.",
            technologies: ["React Native", "GraphQL", "MongoDB", "Node.js"],
            image: "https://placehold.co/600x400/1a1a1a/cccccc?text=Fitness+App",
            liveUrl: "#",
            githubUrl: "#"
        }
    ];

    return (
        <div className={`${styles.worksPage} ${isDarkMode ? styles.dark : styles.light}`}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h1 className={styles.title}>Наши работы</h1>
                    <p className={styles.subtitle}>
                        Проекты, которые демонстрируют наш подход к разработке и внимание к деталям
                    </p>
                </div>

                <div className={styles.worksGrid}>
                    {works.map((work, index) => (
                        <div
                            key={work.id}
                            className={`${styles.workCard} ${activeCard === work.id ? styles.active : ''}`}
                            onMouseEnter={() => setActiveCard(work.id)}
                            onMouseLeave={() => setActiveCard(null)}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className={styles.cardNumber}>
                                {String(work.id).padStart(2, '0')}
                            </div>

                            <div className={styles.cardImage}>
                                <img src={work.image} alt={work.title} />
                                <div className={styles.imageOverlay}></div>
                            </div>

                            <div className={styles.cardContent}>
                                <h3 className={styles.cardTitle}>{work.title}</h3>
                                <p className={styles.cardDescription}>{work.description}</p>

                                <div className={styles.techStack}>
                                    {work.technologies.map((tech, i) => (
                                        <span key={i} className={styles.techTag}>{tech}</span>
                                    ))}
                                </div>

                                <div className={styles.cardActions}>
                                    <a href={work.githubUrl} className={styles.actionBtn} target="_blank" rel="noopener noreferrer">
                                        <FaGithub /> Код
                                    </a>
                                    <button className={styles.moreBtn}>
                                        <FaArrowRight /> Подробнее
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WorksPage;