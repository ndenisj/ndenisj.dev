import React from "react";

const BlogItem = () => {
  return (
    <div className="blog-item">
      <div className="blog-item-wrapper">
        <div className="blog-item-thumb">
          <a href="single.html" className="loadPost">
            <img src="img/blog1.jpg" alt="" />
          </a>
        </div>

        <div className="blog-item-infos">
          <div className="blog-item-title-wrapper">
            <h2 className="blog-item-title title-border">
              <a href="single.html" className="loadPost">
                How to succeed in meetings
              </a>
            </h2>
          </div>

          <div className="blog-item-description">
            <p>
              <a href="single.html" className="loadPost">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                sodales varius sagittis. Proin a arcu vitae turpis congue
                facilisis. Quisque a lectus pretium, sagittis augue in,
                fringilla risus....
              </a>
            </p>
          </div>

          <div className="blog-item-link">
            <a href="single.html" className="btn btn-default loadPost">
              See More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
