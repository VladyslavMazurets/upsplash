import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={''}>
        </Route>
      </Routes>
    </>
  );
}

export default App;
