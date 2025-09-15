import React from 'react';
import GermanProfile from "./GermanProfile/GermanProfile";
import NikitaProfile from "./NikitaProfile/NikitaProfile";
import { useTheme } from '../../context/ThemeContext';
import styles from '../MainPage/MainPage.module.css';
import ProfileNavigation from "./ProfileNavigation";

const ProfileProgers = () => {
    const { darkMode } = useTheme();

    return (
        <div className={`${styles.container} ${darkMode ? styles.dark : styles.light}`}>
            <ProfileNavigation />
            <div className={styles.contentWrapper}>
                <GermanProfile/>
                <NikitaProfile/>
            </div>
        </div>
    );
};

export default ProfileProgers;