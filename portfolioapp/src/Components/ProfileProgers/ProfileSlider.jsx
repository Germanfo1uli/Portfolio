import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from '../../context/ThemeContext';
import styles from './ProfileSlider.module.css';

const ProfileSlider = ({ profiles, activeProfile, onProfileChange }) => {
    const { darkMode } = useTheme();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState('right');
    const [isVisible, setIsVisible] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const timeoutRef = useRef(null);


    useEffect(() => {
        setIsVisible(true);
    }, []);


    useEffect(() => {
        const index = profiles.findIndex(profile => profile.id === activeProfile.id);
        if (index !== -1 && index !== currentIndex && !isAnimating) {
            setDirection(index > currentIndex ? 'right' : 'left');
            setCurrentIndex(index);
        }
    }, [activeProfile, profiles, currentIndex, isAnimating]);

    const goToPrevious = () => {
        if (isAnimating) return;

        const newIndex = currentIndex === 0 ? profiles.length - 1 : currentIndex - 1;
        setDirection('left');
        changeProfile(newIndex);
    };

    const goToNext = () => {
        if (isAnimating) return;

        const newIndex = currentIndex === profiles.length - 1 ? 0 : currentIndex + 1;
        setDirection('right');
        changeProfile(newIndex);
    };

    const goToProfile = (index) => {
        if (isAnimating || index === currentIndex) return;

        setDirection(index > currentIndex ? 'right' : 'left');
        changeProfile(index);
    };

    const changeProfile = (newIndex) => {
        setIsAnimating(true);
        setCurrentIndex(newIndex);
        onProfileChange(profiles[newIndex]);


        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        timeoutRef.current = setTimeout(() => {
            setIsAnimating(false);
        }, 500);
    };

    return (
        <div className={`${styles.sliderContainer} ${darkMode ? styles.dark : styles.light} ${isVisible ? styles.visible : ''}`}>

            <div className={styles.backgroundElements}>
                <div className={styles.bgGrid}></div>
            </div>

            <div className={styles.sliderWrapper}>
                <button
                    className={styles.sliderArrow}
                    onClick={goToPrevious}
                    aria-label="Предыдущий профиль"
                >
                    <svg className={styles.arrowIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>

                <div className={styles.slider}>
                    <div className={`${styles.slide} ${isAnimating ? styles[direction] : ''}`}>
                        <div className={styles.profileCard}>
                            <div className={styles.profileImage}>
                                <img
                                    src={profiles[currentIndex].image}
                                    alt={profiles[currentIndex].name}
                                />
                            </div>
                            <div className={styles.profileInfo}>
                                <div className={styles.nameContainer}>
                                    <h2 className={styles.profileName}>{profiles[currentIndex].name}</h2>
                                </div>
                                <p className={styles.profileRole}>{profiles[currentIndex].role}</p>
                                <div className={styles.profileSkills}>
                                    {profiles[currentIndex].skills.map((skill, index) => (
                                        <span key={index} className={styles.skillTag}>{skill}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <button
                    className={styles.sliderArrow}
                    onClick={goToNext}
                    aria-label="Следующий профиль"
                >
                    <svg className={styles.arrowIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
            </div>

            <div className={styles.dotsContainer}>
                {profiles.map((_, index) => (
                    <button
                        key={index}
                        className={`${styles.dot} ${index === currentIndex ? styles.active : ''}`}
                        onClick={() => goToProfile(index)}
                        aria-label={`Перейти к профилю ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProfileSlider;