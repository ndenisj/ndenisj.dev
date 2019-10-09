import React from "react";
import Education from "./Education";
import Work from "./Work";
import Testimonial from "./Testimonial";

const Resume = () => {
  return (
    <div className="section-vcardbody section-page" id="page-resume">
      <div className="section-education">
        <h2 className="section-title">Resume</h2>

        <div className="resume-buttons header-page-buttons">
          <a
            href="https://docs.google.com/document/d/1h3SG2dZd4DZ9McC4RUccj7Ga01rttRExpTDz7VactN4/edit?usp=sharing"
            target="_blank"
            className="btn btn-default btn-default2"
          >
            <i className="fa fa-download"></i>&nbsp; Download my resume
          </a>

          <a
            href="#page-contact"
            className="btn btn-default btn-default2 link-page"
          >
            <i className="fa fa-download"></i>&nbsp; Get in Touch
          </a>
        </div>

        <h2 className="section-title2">
          <i className="fa fa-university"></i>&nbsp; Education
        </h2>

        <Education />
      </div>

      <div className="section-education">
        <h2 className="section-title2">
          <i className="fa fa-flag"></i>&nbsp; Work Experience
        </h2>

        <Work />
      </div>

      <h2 className="section-title2">
        <i className="fa fa-commenting"></i>&nbsp; Testimonials
      </h2>

      <div className="testimonials">
        <div className="testimonial-slides" id="testimonial-carousel">
          <Testimonial />
        </div>
      </div>

      <div className="page-footer">
        <div className="resume-buttons">
          <a
            href="https://docs.google.com/document/d/1h3SG2dZd4DZ9McC4RUccj7Ga01rttRExpTDz7VactN4/edit?usp=sharing"
            target="_blank"
            className="btn btn-default btn-default2"
          >
            <i className="fa fa-download"></i>&nbsp; Download my resume
          </a>
          <a
            href="#page-contact"
            className="btn btn-default btn-default2 link-page"
          >
            <i className="fa fa-download"></i>&nbsp; Get in Touch
          </a>
        </div>
        <p className="footer-quote">
          "What we do to survive does not define who we are" <br />
          <i>Denis John</i> <br />
          "The best way to predict the future is to create it" <br />
          <i>Abraham Lincoln</i>
        </p>
      </div>
    </div>
  );
};

export default Resume;
