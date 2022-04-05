import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Coffee.</h1>

        <div className="footer__content grid">
          <div className="footer__data">
            <p className="footer__description">
              Se inscreva na nossa newsletter
            </p>

            <div className="footer__newsletter">
              <input type="email" placeholder="Seu email" className="footer__input" />
              <button type="button" className="footer__button">
                <i className="bx bx-right-arrow-alt" />
              </button>
            </div>
          </div>

          <div className="footer__data">
            <h2 className="footer__subtitle">Endereço</h2>
            <p className="footer__information">
              Avenida Fictícia 1234
              <br />
              Cidade, Estado, Brasil 🇧🇷
            </p>
          </div>

          <div className="footer__data">
            <h2 className="footer__subtitle">Contato</h2>
            <p className="footer__information">
              12 9 9999-9999
              <br />
              coffee@email.com
            </p>
          </div>

          <div className="footer__data">
            <h2 className="footer__subtitle">Horários</h2>
            <p className="footer__information">
              Segunda - Sábado
              <br />
              9h00 - 18h00
            </p>
          </div>
        </div>

        <div className="footer__group">
          <ul className="footer__social">
            <a href="#home" className="footer__social-link">
              <i className="bx bxl-facebook" />
            </a>
            <a href="#home" className="footer__social-link">
              <i className="bx bxl-instagram" />
            </a>
            <a href="#home" className="footer__social-link">
              <i className="bx bxl-twitter" />
            </a>
          </ul>

          <span className="footer__copy">
            &#169; Coffee. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
