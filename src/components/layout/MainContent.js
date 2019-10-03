import React, { Fragment } from "react";
import MainMenu from "./MainMenu";
import Home from "../pages/home/Home";
import Resume from "../pages/resume/Resume";
import Skills from "../pages/skills/Skills";
import Portfolio from "../pages/portfolio/Portfolio";
import Blog from "../pages/blog/Blog";
import Contact from "../pages/contact/Contact";

const MainContent = () => {
  return (
    <Fragment>
      <section id="body" className="">
        <div className="container">
          <MainMenu />
          <Home />
          <Resume />
          <Skills />
          <Portfolio />
          <Blog />
          <Contact />
        </div>
      </section>
    </Fragment>
  );
};

export default MainContent;
