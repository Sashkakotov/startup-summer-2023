import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Error from './pages/Error/Error';
import Favorites from './pages/Favorites/Favorites';
import Home from './pages/Home/Home';
import Navbara from './components/Navbar/Navbar';
import Vacancy from './pages/Vacancy/Vacancy';
import authorization from './API/authorization';
import NotFoundPage from './pages/NotFound/NotFoundPage';

import './styles/App.css';
import './fonts/Inter-Regular.ttf';
import './fonts/Inter-SemiBold.ttf';
import './fonts/Inter-Medium.ttf';
import './fonts/Inter-Bold.ttf';
import './fonts/Poppins-SemiBold.ttf';

function App() {
  const [token, setToken] = useState('');

  const getToken = async () => {
    const getTokenFromLS =
      localStorage.getItem('authToken') && JSON.parse(localStorage.getItem('authToken'));

    if (getTokenFromLS && getTokenFromLS.ttl > Date.now() / 1000) {
      setToken(getTokenFromLS.access_token);
    } else {
      const token = await authorization();
      if (token) {
        localStorage.setItem('authToken', JSON.stringify(token));
        setToken(token.access_token);
      }
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
