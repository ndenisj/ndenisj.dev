import React from "react";
import PortfolioItem from "./PortfolioItem";

const Portfolio = () => {
  return (
    <div className="section-vcardbody section-page" id="page-portfolio">
      <div className="section-portfolio">
        <h2 className="section-title">Portfolio</h2>

        <div className="projects-list">
          <PortfolioItem />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
