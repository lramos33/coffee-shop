import React from 'react';

function Specialty() {
  return (
    <div className="specialty section container" id="specialty">
      <div className="specialty__container">
        <div className="specialty__box">
          <h2 className="section__title">
            Cafés especiais que proporcionam uma verdadeira experiência!
          </h2>

          <div>
            <a href="#home" className="button specialty__button">Saiba Mais</a>
          </div>
        </div>

        <div className="specialty__category">
          <div className="specialty__group specialty__line">
            <img src="./Images/specialty1.png" alt="" className="specialty__img" />

            <h3 className="specialty__title">Cafés Selecionados</h3>
            <p className="specialty__description">
              Selecionamos o melhor café premium, para um verdadeiro sabor.
            </p>
          </div>

          <div className="specialty__group specialty__line">
            <img src="./Images/specialty2.png" alt="" className="specialty__img" />

            <h3 className="specialty__title">Cookies Maravilhosos</h3>
            <p className="specialty__description">
              Aproveite nossos cafés com deliciosos cookies.
            </p>
          </div>

          <div className="specialty__group">
            <img src="./Images/specialty3.png" alt="" className="specialty__img" />

            <h3 className="specialty__title">Aproveite em Casa</h3>
            <p className="specialty__description">
              Desfrute do melhor café no conforto da sua casa.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Specialty;
