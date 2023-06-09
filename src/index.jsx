import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import { smartHomeData } from './smartHomeData.js';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { useState } from 'react';

const App = () => {
  return (
    <div className="container">
      <Header title="Chytrý dům" />
      <Dashboard data={smartHomeData} />
    </div>
  );
};

createRoot(document.querySelector('#app')).render(<App />);
