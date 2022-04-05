import React from 'react';
import useScript from './hooks/useScript';

import Header from './components/Header';
import Home from './components/Home';
import Specialty from './components/Specialty';
import Products from './components/Products';
import Quality from './components/Quality';
import Blog from './components/Blog';

import '../public/App.css';
import Footer from './components/Footer';

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
        <Quality />
        <Blog />
      </main>
      <Footer />

      <a href="#home" className="scrollup" id="scroll-up">
        <i className="bx bx-up-arrow-alt" />
      </a>
    </>
  );
}

export default App;
