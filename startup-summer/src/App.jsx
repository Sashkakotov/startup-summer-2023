import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import './fonts/Inter-Regular.ttf'; //400
import './fonts/Inter-SemiBold.ttf'; //600
import './fonts/Inter-Medium.ttf'; //500
import './fonts/Inter-Bold.ttf'; //700
import './fonts/Poppins-SemiBold.ttf'; //600

import Error from './pages/Error';
import Favorites from './pages/Favorites';
import Home from './pages/Home';
import Navbara from './components/Navbar/Navbar';
import Vacancy from './pages/Vacancy';
import authorization from './API/authorization/authorization';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  const [token, setToken] = useState('');

  const getToken = async () => {
    const token = await authorization();
    if (token) {
      setToken(token);
    }
  };
  useEffect(() => {
    getToken();
  }, []);

  return (
    <BrowserRouter>
      <Navbara />
      <Routes>
        <Route path="/" element={<Home token={token} />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/emptystate" element={<NotFoundPage />} />
        <Route path="/vacancy/:id" element={<Vacancy token={token} />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
