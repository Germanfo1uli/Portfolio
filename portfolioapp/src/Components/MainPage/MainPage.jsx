import React, { useState, useEffect, useRef } from 'react';
import styles from './MainPage.module.css';
import { FaGithub, FaTelegram, FaSteam, FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';
import AboutUs from '../AboutUs/AboutUs';
import GermanProfile from "../GermanProfile/GermanProfile";

const MainPage = () => {
    const [darkMode, setDarkMode] = useState(true);
    const [isVisible, setIsVisible] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const canvasRef = useRef(null);

    useEffect(() => {
        setIsVisible(true);
        initParticles();

        return () => {
            if (canvasRef.current) {
                cancelAnimationFrame(canvasRef.current.animationFrame);
            }
        };
    }, []);

    const toggleTheme = () => {
        setDarkMode(!darkMode);
    };

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const initParticles = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        const particles = [];
        const particleCount = 100;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        for (let i = 0; i < particleCount; i++) {
            particles.push({
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

            particles.forEach(particle => {
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

            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 100) {
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }

            canvas.animationFrame = requestAnimationFrame(animate);
        };

        animate();

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    };

    return (
        <div className={`${styles.container} ${darkMode ? styles.dark : styles.light}`}>
            <canvas
                ref={canvasRef}
                className={styles.particlesCanvas}
            />

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
                    <a href="#experiments" onClick={() => setMobileMenuOpen(false)}>Эксперименты</a>
                    <a href="#contacts" onClick={() => setMobileMenuOpen(false)}>Контакты</a>
                    <a href="#cases" onClick={() => setMobileMenuOpen(false)}>Кейсы</a>
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
                                <span className={styles.titleLine}><span className={styles.titleMask}>Мы создаём</span></span>
                                <span className={styles.titleLine}><span className={styles.titleMask}><span className={styles.highlight}>цифровые</span> решения</span></span>
                                <span className={styles.titleLine}><span className={styles.titleMask}>будущего</span></span>
                            </h1>
                        </div>

                        <p className={styles.subtitle}>
                            Команда экспертов, специализирующихся на инновационных веб-технологиях,
                            дизайне и разработке программного обеспечения.
                        </p>

                        <div className={styles.buttons}>
                            <AboutUs isDarkMode={darkMode} />

                            <div className={styles.socials}>
                                <a href="#" className={styles.socialLink} aria-label="GitHub">
                                    <FaGithub />
                                    <span className={styles.tooltip}>GitHub</span>
                                </a>
                                <a href="#" className={styles.socialLink} aria-label="Telegram">
                                    <FaTelegram />
                                    <span className={styles.tooltip}>Telegram</span>
                                </a>
                                <a href="#" className={styles.socialLink} aria-label="Steam">
                                    <FaSteam />
                                    <span className={styles.tooltip}>Steam</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </main>

                <div className={styles.scrollIndicator}>
                    <div className={styles.scrollLine}></div>
                    <span>Scroll</span>
                </div>
            </div>

            <GermanProfile isDarkMode={darkMode} />
        </div>
    );
};

export default MainPage;