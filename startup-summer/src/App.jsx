import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';

import Error from './pages/Error';
import Favorites from './pages/Favorites';
import Home from './pages/Home';
import Navbara from './components/Navbar/Navbar';

function App() {
  // const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Navbara />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        {/* <Route path="/vacancy" element={<Vacancy />} /> */}
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
