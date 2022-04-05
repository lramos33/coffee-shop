import React from 'react';
import PropTypes from 'prop-types';

function ProductCard(props) {
  const {
    data: {
      filter, img, price, name,
    },
  } = props;

  return (
    <article className={`products__card ${filter}`}>
      <div className="products__shape">
        <img src={img} alt="" className="products__img" />
      </div>

      <div className="products__data">
        <h2 className="products__price">{price}</h2>
        <h3 className="products__name">{name}</h3>

        <button type="button" className="button products__button">
          <i className="bx bx-shopping-bag" />
        </button>
      </div>
    </article>
  );
}

ProductCard.propTypes = {
  data: PropTypes.shape({
    filter: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductCard;
