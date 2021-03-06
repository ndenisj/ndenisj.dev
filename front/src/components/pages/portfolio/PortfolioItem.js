import React from "react";

const PortfolioItem = () => {
  return (
    <div className="project-item">
      <a
        href="img/portfolio/p1.jpg"
        className="project-thumbnail nivobox"
        data-lightbox-gallery="portfolio"
        style={{ backgroundImage: "url('img/portfolio/thumb-p1.jpg')" }}
      >
        <div className="project-description-wrapper">
          <div className="project-description">
            <h2 className="project-title">Project Title</h2>

            <span className="see-more">Project Tags</span>
          </div>
        </div>
      </a>
    </div>
  );
};

export default PortfolioItem;
