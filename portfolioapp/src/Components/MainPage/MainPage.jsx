import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './MainPage.module.css';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';
import AboutUs from '../AboutUs/AboutUs';
import WorksPage from '../Works/WorksPage';
import { useTheme } from '../../context/ThemeContext';
import Footer from "../Footer/Footer";
import RecomViewPage from "../RecomViewPage/RecomViewPage";

const MainPage = () => {
    const { darkMode, toggleTheme} = useTheme();
    const [isVisible, setIsVisible] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const canvasRef = useRef(null);
    const particlesRef = useRef([]);
    const animationFrameRef = useRef(null);
    const location = useLocation();

    const initParticles = useCallback(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        if (animationFrameRef.current) {
            cancelAnimationFrame(animationFrameRef.current);
        }
        const ctx = canvas.getContext('2d');
        const particleCount = 100;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;


        particlesRef.current = [];
        for (let i = 0; i < particleCount; i++) {
            particlesRef.current.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: Math.random() * 2 + 1,
                speedX: (Math.random() - 0.5) * 0.5,
                speedY: (Math.random() - 0.5) * 0.5,
                color: darkMode ? `rgba(200, 200, 200, ${Math.random() * 0.5})` : `rgba(50, 50, 50, ${Math.random() * 0.5})`
            });
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);


            particlesRef.current.forEach(particle => {
                particle.x += particle.speedX;
                particle.y += particle.speedY;
                if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
                if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;

                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
                ctx.fillStyle = particle.color;
                ctx.fill();
            });

            ctx.strokeStyle = darkMode ? 'rgba(150, 150, 150, 0.1)' : 'rgba(50, 50, 50, 0.1)';
            ctx.lineWidth = 0.5;

            for (let i = 0; i < particlesRef.current.length; i++) {
                for (let j = i + 1; j < particlesRef.current.length; j++) {
                    const dx = particlesRef.current[i].x - particlesRef.current[j].x;
                    const dy = particlesRef.current[i].y - particlesRef.current[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    if (distance < 100) {
                        ctx.beginPath();
                        ctx.moveTo(particlesRef.current[i].x, particlesRef.current[i].y);
                        ctx.lineTo(particlesRef.current[j].x, particlesRef.current[j].y);
                        ctx.stroke();
                    }
                }
            }

            animationFrameRef.current = requestAnimationFrame(animate);
        };

        animate();
    }, [darkMode]);

    useEffect(() => {
        setIsVisible(true);
        initParticles();

        const handleResize = () => {
            if (canvasRef.current) {
                canvasRef.current.width = window.innerWidth;
                canvasRef.current.height = window.innerHeight;
                initParticles();
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
            window.removeEventListener('resize', handleResize);
        };
    }, [initParticles]);


    useEffect(() => {
        initParticles();
    }, [darkMode, initParticles]);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <div className={`${styles.container} ${darkMode ? styles.dark : styles.light}`}>
            <canvas ref={canvasRef} className={styles.particlesCanvas} />
            <div className={styles.abstractShape1}></div>
            <div className={styles.abstractShape2}></div>
            <div className={styles.abstractShape3}></div>
            <div className={styles.floatingOrbs}>
                <div className={styles.orb1}></div>
                <div className={styles.orb2}></div>
                <div className={styles.orb3}></div>
            </div>
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
            <div className={styles.contentWrapper}>
                <main className={styles.mainContent}>
                    <div className={`${styles.hero} ${isVisible ? styles.slideUp : ''}`}>
                        <div className={styles.titleWrapper}>
                            <h1 className={styles.title}>
                                <span className={styles.titleLine}>
                                    <span className={styles.titleMask}>Мы создаём</span>
                                </span>
                                <span className={styles.titleLine}>
                                    <span className={styles.titleMask}>
                                        <span className={styles.highlight}>решения </span>ваших
                                    </span>
                                </span>
                                <span className={styles.titleLine}>
                                    <span className={styles.titleMask}>проблем</span>
                                </span>
                            </h1>
                        </div>
                        <p className={`${styles.subtitle} ${isVisible ? styles.fadeInUp : ''}`}>
                            Команда экспертов, специализирующихся на инновационных веб-технологиях,
                            дизайне и разработке программного обеспечения.
                        </p>
                        <div className={styles.buttons}>
                            <AboutUs isDarkMode={darkMode} />
                        </div>
                    </div>
                </main>
                <div className={styles.scrollIndicator}>
                    <div className={styles.scrollLine}></div>
                    <span>Scroll</span>
                </div>
            </div>
            <WorksPage isDarkMode={darkMode} />
            <RecomViewPage isDarkMode={darkMode} />
            <Footer isDarkMode={darkMode}/>
        </div>
    );
};

export default MainPage;