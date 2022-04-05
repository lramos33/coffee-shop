import React from 'react';

function Quality() {
  return (
    <section className="quality section" id="premium">
      <div className="quality__container container">
        <h2 className="section__title">
          Oferecemos um café premiado e de ótima qualidade!
        </h2>

        <div className="quality__content grid">
          <div className="quality__images">
            <img src="./Images/quality1.png" alt="" className="quality__img-big" />
            <img src="./Images/quality2.png" alt="" className="quality__img-small" />
          </div>

          <div className="quality__data">
            <h1 className="quality__title">Café Premium</h1>
            <h2 className="quality__price">R$64.90</h2>
            <span className="quality__special">Preço Especial</span>
            <p className="quality__description">
              Lorem ipsum dolor sit amet, consectetur adipi scing elit. Etiam cursus
              a odio sed imperdiet. Class aptent taciti sociosqu ad litora torquent
              per conubia nostra, per inceptos.
            </p>

            <div className="quality__buttons">
              <button type="button" className="button">
                Comprar
              </button>

              <a href="#home" className="quality__button">
                Saiba Mais
                <i className="bx bx-right-arrow-alt" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Quality;
