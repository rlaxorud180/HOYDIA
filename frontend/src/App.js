/* eslint-disable import/order */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Login from 'pages/loginPage';
import { Route, Routes } from 'react-router-dom';
import MainPage from 'pages/mainPage';
import MusicPlayer from 'components/MusicPlayer';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/mainPage" element={<MainPage />} />
        <Route path="/music" element={<MusicPlayer />} />
      </Routes>
    </div>
  );
}

export default App;
