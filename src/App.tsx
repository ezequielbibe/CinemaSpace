import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { SideBar } from './components/index';
import { Home, Cartelera, Estrenos, Contacto } from './sections/index';
import './sass/App.css';

function App() {
  return (
    <div className='App'>
      <SideBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cartelera' element={<Cartelera />} />
        <Route path='/estrenos' element={<Estrenos />} />
        <Route path='/contacto' element={<Contacto />} />
      </Routes>
    </div>
  );
}

export default App;
