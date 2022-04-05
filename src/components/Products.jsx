import React from 'react';

import { newProducts, coffees, desserts } from '../../public/JavaScript/productsData';
import ProductCard from './subcomponents/ProductCard';

function Products() {
  return (
    <section className="products section" id="products">
      <div className="products__container container">
        <h2 className="section__title">
          Escolha um de nossos deliciosos produtos
        </h2>

        <ul className="products__filters">
          <li className="products__item products__line active-product" data-filter=".new">
            <h3 className="products__title">Novidades</h3>
            <span className="products__stock">3 produtos</span>
          </li>

          <li className="products__item products__line" data-filter=".coffee">
            <h3 className="products__title">Cafés quentes</h3>
            <span className="products__stock">4 produtos</span>
          </li>

          <li className="products__item" data-filter=".dessert">
            <h3 className="products__title">Sobremesas</h3>
            <span className="products__stock">4 produtos</span>
          </li>
        </ul>

        <div className="products__content grid">
          { newProducts.map((product) => <ProductCard data={product} key={product.name} />) }
          { coffees.map((coffee) => <ProductCard data={coffee} key={coffee.name} />) }
          { desserts.map((dessert) => <ProductCard data={dessert} key={dessert.name} />) }
        </div>
      </div>
    </section>
  );
}

export default Products;
