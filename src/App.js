import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './app/components/NavBar';
import Men from './app/pages/Men';
import Women from './app/pages/Women';
import Kids from './app/pages/Kids';

function App() {
  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route path="/women" element={<Women />} />
        <Route path="/men" element={<Men />} />
        <Route path="/kids" element={<Kids />} />
      </Routes>
    </div>
  );
}

export default App;
