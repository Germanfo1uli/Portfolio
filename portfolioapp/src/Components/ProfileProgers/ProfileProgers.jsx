import React, { useState } from 'react';
import GermanProfile from "./GermanProfile/GermanProfile";
import NikitaProfile from "./NikitaProfile/NikitaProfile";
import { useTheme } from '../../context/ThemeContext';
import styles from '../MainPage/MainPage.module.css';
import ProfileNavigation from "./ProfileNavigation";
import Footer from "../MoreComponents/Footer/Footer";
import EvgenyProfile from "./EvgenyProfile/EvgenyProfile";
import ProfileSlider from "./ProfileSlider";


const ProfileProgers = () => {
    const { darkMode } = useTheme();
    const [activeProfile, setActiveProfile] = useState({
        id: 'german',
        name: 'Герман',
        role: 'Frontend разработчик',
        image: '/src/Components/ProfileProgers/avaGerman.jpg',
        skills: ['React', 'JavaScript', 'CSS', 'HTML']
    });
    const profiles = [
        {
            id: 'german',
            name: 'Герман',
            role: 'Frontend разработчик',
            image: '/images/german.jpg',
            skills: ['React', 'JavaScript', 'CSS', 'HTML']
        },
        {
            id: 'nikita',
            name: 'Никита',
            role: 'Скотина',
            image: '/images/nikita.jpg',
            skills: ['React', 'Node.js', 'MongoDB', 'Express']
        },
        {
            id: 'evgeny',
            name: 'Евгений',
            role: 'Backend разработчик',
            image: '/images/evgeny.jpg',
            skills: ['.NET', 'C++', 'PostgreSQL', 'Docker']
        }
    ];

    const handleProfileChange = (profile) => {
        setActiveProfile(profile);
    };

    const renderProfile = () => {
        switch(activeProfile.id) {
            case 'german':
                return <GermanProfile />;
            case 'nikita':
                return <NikitaProfile />;
            case 'evgeny':
                return <EvgenyProfile />;
            default:
                return <GermanProfile />;
        }
    };

    return (
        <div className={`${styles.container} ${darkMode ? styles.dark : styles.light}`}>
            <ProfileNavigation />
            <ProfileSlider
                profiles={profiles}
                activeProfile={activeProfile}
                onProfileChange={handleProfileChange}
            />
            <div className={styles.contentWrapper}>
                {renderProfile()}
                <Footer/>
            </div>
        </div>
    );
};

export default ProfileProgers;