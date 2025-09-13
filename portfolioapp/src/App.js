import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import MainPage from "./Components/MainPage/MainPage";
import GermanProfile from "./Components/ProfileProgers/GermanProfile/GermanProfile";
import { ThemeProvider } from './context/ThemeContext';

function App() {
    return (
        <ThemeProvider>
            <Router>
                <div className="App">
                    <Routes>
                        <Route path="/" element={<MainPage />} />

                        {/*ЗДЕСЬ БУДЕТ НЕ МОЙ ПРОФИЛЬ ДЛЯ ПЕРЕХОДА В КОНТАКТЫ, А ОТДЕЛЬНЫЙ КОМПОНЕНТ ГДЕ БУДУТ ВСЕ КОНТАКТЫ!!!
                    ЭТО ВРЕМЕННАЯ ЗАГЛУШКА!!!!!!!*/}
                        <Route path="/contacts" element={<GermanProfile />} />
                    </Routes>
                </div>
            </Router>
        </ThemeProvider>
    );
}

export default App;

