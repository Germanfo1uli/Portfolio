import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import MainPage from "./Components/MainPage/MainPage";
import { ThemeProvider } from './context/ThemeContext';
import ProfileProgers from "./Components/ProfileProgers/ProfileProgers";

function App() {
    return (
        <ThemeProvider>
            <Router>
                <div className="App">
                    <Routes>
                        <Route path="/" element={<MainPage />} />

                        {/*ЗДЕСЬ БУДЕТ НЕ МОЙ ПРОФИЛЬ ДЛЯ ПЕРЕХОДА В КОНТАКТЫ, А ОТДЕЛЬНЫЙ КОМПОНЕНТ ГДЕ БУДУТ ВСЕ КОНТАКТЫ!!!
                    ЭТО ВРЕМЕННАЯ ЗАГЛУШКА!!!!!!!*/}
                        <Route path="/contacts" element={<ProfileProgers />} />
                    </Routes>
                </div>
            </Router>
        </ThemeProvider>
    );
}

export default App;

