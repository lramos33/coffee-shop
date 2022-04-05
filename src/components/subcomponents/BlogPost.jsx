import React from 'react';
import PropTypes from 'prop-types';

function BlogPost(props) {
  const {
    data: {
      img, link, title, description, comments, views,
    },
  } = props;

  return (
    <article className="blog__card">
      <div className="blog__image">
        <img src={img} alt="" className="blog__img" />
        <a href={link} className="blog__button">
          <i className="bx bx-right-arrow-alt" />
        </a>
      </div>

      <div className="blog__data">
        <h2 className="blog__title">{title}</h2>
        <p className="blog__description">{description}</p>

        <div className="blog__footer">
          <div className="blog__reaction">
            <i className="bx bx-comment" />
            <span>{comments}</span>
          </div>
          <div className="blog__reaction">
            <i className="bx bx-show" />
            <span>{views}</span>
          </div>
        </div>
      </div>
    </article>
  );
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    img: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    comments: PropTypes.number.isRequired,
    views: PropTypes.string.isRequired,
  }).isRequired,
};

export default BlogPost;
