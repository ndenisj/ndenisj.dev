import React, { Fragment } from "react";
import BlogSingle from "./BlogSingle";
import BlogItem from "./BlogItem";

const Blog = () => {
  return (
    <Fragment>
      <div className="section-vcardbody section-page" id="page-blog">
        <div className="section-blog">
          <h2 className="section-title">Blog</h2>

          <div className="blog-posts">
            <BlogItem />
          </div>

          <div className="section-pagination">
            <div className="row">
              <div className="col-xs-12">
                <span className="pagination-numbers">
                  <a href="#">1</a>
                  <a href="#">2</a>
                  <a href="#">3</a>
                  <a href="#">4</a>
                  <a href="#">5</a>
                  <a href="#">6</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BlogSingle />
    </Fragment>
  );
};

export default Blog;
