import React from 'react';

function Header() {
  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a href="#" className="nav__logo">
          <img src="./Images/logo.png" alt="" className="nav__logo-img" />
          Coffee.
        </a>

        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home" className="nav__link active-link">Home</a>
            </li>
            <li className="nav__item">
              <a href="#products" className="nav__link">Products</a>
            </li>
            <li className="nav__item">
              <a href="#premium" className="nav__link">Premium</a>
            </li>
            <li className="nav__item">
              <a href="#blog" className="nav__link">Blog</a>
            </li>
          </ul>

          <div className="nav__close" id="nav-close">
            <i className="bx bx-x" />
          </div>
        </div>

        <div className="nav__toggle" id="nav-toggle">
          <i className="bx bx-grid-alt" />
        </div>
      </nav>
    </header>
  );
}

export default Header;
