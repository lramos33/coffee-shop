import React from 'react';

function Home() {
  return (
    <section className="home grid" id="home">
      <div className="home__container">
        <div className="home__content container">
          <h1 className="home__title">
            Escolha Seu Café Favorito e Aproveite
            <span>.</span>
          </h1>
          <p className="home__description">
            Compre os melhores e mais saborosos cafés.
          </p>

          <div className="home__data">
            <div className="home__data-group">
              <h2 className="home__data-number">120K</h2>
              <h3 className="home__data-title">Depoimentos</h3>
              <p className="home__data-description">
                São mais de 100 mil depoimentos de clientes de todo o país que confiam em nós.
              </p>
            </div>

            <div className="home__data-group">
              <h2 className="home__data-number">340+</h2>
              <h3 className="home__data-title">Produtos</h3>
              <p className="home__data-description">
                Mais de 300 produtos preparados com os melhores ingredientes.
              </p>
            </div>
          </div>

          <a href="#specialty">
            <img src="./Images/scroll.png" alt="" className="home__scroll" />
          </a>
        </div>
      </div>

      <img src="./Images/home.png" alt="" className="home__img" />
    </section>
  );
}

export default Home;
