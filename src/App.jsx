import React from 'react';
import useScript from './hooks/useScript';

import Header from './components/Header';
import Home from './components/Home';
import Specialty from './components/Specialty';
import Products from './components/Products';

import '../public/App.css';

function App() {
  useScript('./JavaScript/mixitup.min.js');
  useScript('./JavaScript/App.js');

  return (
    <>
      <Header />
      <main>
        <Home />
        <Specialty />
        <Products />
      </main>
    </>
  );
}

export default App;
