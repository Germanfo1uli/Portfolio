import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import styles from './AboutUs.module.css';
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaGithub, FaTimes, FaPaperPlane, FaUser, FaEnvelope, FaComment } from 'react-icons/fa';

const AboutUs = ({ isDarkMode }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            // Disable pointer events on main content to prevent background interaction
            document.querySelector('main')?.style.setProperty('pointer-events', 'none');
        } else {
            document.body.style.overflow = 'unset';
            // Re-enable pointer events when modal closes
            document.querySelector('main')?.style.setProperty('pointer-events', 'auto');
        }
        // Cleanup on component unmount
        return () => {
            document.body.style.overflow = 'unset';
            document.querySelector('main')?.style.setProperty('pointer-events', 'auto');
        };
    }, [isOpen]);

    const closeModal = () => {
        setIsClosing(true);
        setTimeout(() => {
            setIsOpen(false);
            setIsClosing(false);
        }, 600);
    };

    const openModal = () => {
        // Scroll to top before opening modal
        window.scrollTo({ top: 0, behavior: 'smooth' });
        // Small delay to ensure scroll completes before modal opens
        setTimeout(() => {
            setIsOpen(true);
            setIsClosing(false);
        }, 300);
    };

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: ''
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .max(50, 'Максимум 50 символов')
                .required('Обязательное поле'),
            email: Yup.string()
                .email('Некорректный email')
                .required('Обязательное поле'),
            message: Yup.string()
                .max(500, 'Максимум 500 символов')
                .required('Обязательное поле')
        }),
        onSubmit: (values, { resetForm }) => {
            console.log('Форма отправлена:', values);
            alert('Сообщение отправлено!');
            resetForm();
        }
    });

    return (
        <>
            <button
                className={`${styles.aboutBtn} ${isDarkMode ? styles.dark : styles.light}`}
                onClick={openModal}
            >
                О нас
            </button>
            {isOpen && (
                <div className={`${styles.modalOverlay} ${isClosing ? styles.closingOverlay : styles.openingOverlay}`} onClick={closeModal}>
                    <div
                        className={`${styles.modalContainer} ${isClosing ? styles.closing : styles.opening}`}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button className={`${styles.closeBtn} ${isDarkMode ? styles.dark : styles.light}`} onClick={closeModal}>
                            <FaTimes />
                        </button>
                        <div className={styles.modalContent}>
                            <div className={`${styles.leftPanel} ${isDarkMode ? styles.dark : styles.light} ${isClosing ? styles.slideLeftOut : styles.slideLeftIn}`}>
                                <div className={styles.panelContent}>
                                    <h2>Наша команда</h2>
                                    <p>
                                        Мы растем вместе с нашими проектами. Начиная с простых сайтов и доходя до полноценных веб-приложений,
                                        мы с энтузиазмом изучаем новые технологии и применяем их на практике. Для нас каждый проект — это шаг вперед
                                        в стремлении к качеству и мастерству.
                                    </p>
                                    <div className={styles.techStack}>
                                        <h3>Наш стек технологий</h3>
                                        <div className={styles.techIcons}>
                                            <div className={styles.techItem}>
                                                <div className={styles.iconWrapper}>
                                                    <FaReact />
                                                </div>
                                                <span>React</span>
                                            </div>
                                            <div className={styles.techItem}>
                                                <div className={styles.iconWrapper}>
                                                    <FaHtml5 />
                                                </div>
                                                <span>HTML5</span>
                                            </div>
                                            <div className={styles.techItem}>
                                                <div className={styles.iconWrapper}>
                                                    <FaCss3Alt />
                                                </div>
                                                <span>CSS3</span>
                                            </div>
                                            <div className={styles.techItem}>
                                                <div className={styles.iconWrapper}>
                                                    <FaJs />
                                                </div>
                                                <span>JavaScript</span>
                                            </div>
                                            <div className={styles.techItem}>
                                                <div className={styles.iconWrapper}>
                                                    <FaGithub />
                                                </div>
                                                <span>GitHub</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`${styles.rightPanel} ${isDarkMode ? styles.dark : styles.light} ${isClosing ? styles.slideRightOut : styles.slideRightIn}`}>
                                <div className={styles.panelContent}>
                                    <h2>Свяжитесь с нами</h2>
                                    <form onSubmit={formik.handleSubmit} className={styles.contactForm}>
                                        <div className={styles.formGroup}>
                                            <div className={styles.inputWrapper}>
                                                <FaUser className={styles.inputIcon} />
                                                <input
                                                    id="name"
                                                    name="name"
                                                    type="text"
                                                    placeholder="Ваше имя"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.name}
                                                    className={formik.touched.name && formik.errors.name ? styles.error : ''}
                                                />
                                            </div>
                                            {formik.touched.name && formik.errors.name ? (
                                                <div className={styles.errorMessage}>{formik.errors.name}</div>
                                            ) : null}
                                        </div>
                                        <div className={styles.formGroup}>
                                            <div className={styles.inputWrapper}>
                                                <FaEnvelope className={styles.inputIcon} />
                                                <input
                                                    id="email"
                                                    name="email"
                                                    type="email"
                                                    placeholder="Ваш email"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.email}
                                                    className={formik.touched.email && formik.errors.email ? styles.error : ''}
                                                />
                                            </div>
                                            {formik.touched.email && formik.errors.email ? (
                                                <div className={styles.errorMessage}>{formik.errors.email}</div>
                                            ) : null}
                                        </div>
                                        <div className={styles.formGroup}>
                                            <div className={styles.inputWrapper}>
                                                <FaComment className={styles.inputIcon} />
                                                <textarea
                                                    id="message"
                                                    name="message"
                                                    placeholder="Ваше сообщение"
                                                    rows="4"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.message}
                                                    className={formik.touched.message && formik.errors.message ? styles.error : ''}
                                                />
                                            </div>
                                            {formik.touched.message && formik.errors.message ? (
                                                <div className={styles.errorMessage}>{formik.errors.message}</div>
                                            ) : null}
                                        </div>
                                        <button type="submit" className={styles.submitBtn}>
                                            <FaPaperPlane />
                                            Отправить сообщение
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default AboutUs;