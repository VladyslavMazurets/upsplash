import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Editorial from './pages/Editorial';

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        {/* <Route path="/editorial" element={<Editorial />}/> */}
      </Routes>
    </>
  );
}

export default App;
