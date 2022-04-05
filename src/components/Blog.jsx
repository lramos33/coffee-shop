import React from 'react';

import blogPosts from '../../public/JavaScript/blogPostData';
import BlogPost from './subcomponents/BlogPost';

function Blog() {
  return (
    <section className="blog section" id="blog">
      <div className="blog__container container">
        <h2 className="section__title">
          Confira nossos posts da semana
        </h2>

        <div className="blog__content grid">
          { blogPosts.map((post) => <BlogPost data={post} key={post.title} />) }
        </div>
      </div>
    </section>
  );
}

export default Blog;
