import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from '../../context/ThemeContext';
import styles from './ProfileSlider.module.css';

const ProfileSlider = ({ profiles, activeProfile, onProfileChange }) => {
    const { darkMode } = useTheme();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [prevIndex, setPrevIndex] = useState(null);
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
            handleProfileChange(index, 'right'); 
        }
    }, [activeProfile]);

    const handleProfileChange = (newIndex, animDirection) => {
        if (isAnimating) return;

        setDirection(animDirection);
        setPrevIndex(currentIndex);
        setIsAnimating(true);
        
        setTimeout(() => {
            setCurrentIndex(newIndex);
            onProfileChange(profiles[newIndex]);
            
            setTimeout(() => {
                setIsAnimating(false);
                setPrevIndex(null);
            }, 600);
        }, 50);
    };

    const goToPrevious = () => {
        const newIndex = currentIndex === 0 ? profiles.length - 1 : currentIndex - 1;
        handleProfileChange(newIndex, 'left'); 
    };

    const goToNext = () => {
        const newIndex = currentIndex === profiles.length - 1 ? 0 : currentIndex + 1;
        handleProfileChange(newIndex, 'right'); 
    };

    const goToProfile = (index) => {
        if (isAnimating || index === currentIndex) return;
        const animDirection = index > currentIndex ? 'right' : 'left';
        handleProfileChange(index, animDirection);
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
                    disabled={isAnimating}
                >
                    <svg className={styles.arrowIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>

                <div className={styles.slider}>
                    {isAnimating && prevIndex !== null && (
                        <div className={`${styles.slide} ${styles[`slide-exit-${direction}`]}`}>
                            <div className={styles.profileCard}>
                                <div className={styles.profileImage}>
                                    <img
                                        src={profiles[prevIndex].image}
                                        alt={profiles[prevIndex].name}
                                        loading="lazy"
                                    />
                                </div>
                                <div className={styles.profileInfo}>
                                    <div className={styles.nameContainer}>
                                        <h2 className={styles.profileName}>{profiles[prevIndex].name}</h2>
                                    </div>
                                    <p className={styles.profileRole}>{profiles[prevIndex].role}</p>
                                    <div className={styles.profileSkills}>
                                        {profiles[prevIndex].skills.map((skill, index) => (
                                            <span key={index} className={styles.skillTag}>{skill}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    
                    <div className={`${styles.slide} ${isAnimating ? styles[`slide-enter-${direction}`] : styles.slideActive}`}>
                        <div className={styles.profileCard}>
                            <div className={styles.profileImage}>
                                <img
                                    src={profiles[currentIndex].image}
                                    alt={profiles[currentIndex].name}
                                    loading="lazy"
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
                    disabled={isAnimating}
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
                        disabled={isAnimating}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProfileSlider;