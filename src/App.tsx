import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Editorial from './pages/Editorial';
import PhotoCard from './pages/PhotoCard';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Editorial />} />
        <Route path="photos/:id" element={<PhotoCard />} />
      </Routes>
    </>
  );
}

export default App;
