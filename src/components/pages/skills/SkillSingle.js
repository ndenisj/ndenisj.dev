import React, { Fragment } from "react";

const SkillSingle = () => {
  return (
    <Fragment>
      <h3 className="section-item-title-2">
        <i className="fa fa-users"></i>&nbsp;&nbsp; Professional Skills
      </h3>
      <ul className="skills-list">
        <li>
          <div className="progress">
            <div
              className="progress-bar"
              role="progressbar"
              data-percent="70%"
              style={{ width: "70%" }}
            >
              <span className="sr-only">70% Complete</span>
            </div>
            <span className="progress-type">Comunication</span>
            <span className="progress-completed">70%</span>
          </div>
        </li>

        <li>
          <div className="progress">
            <div
              className="progress-bar progress-bar-2"
              role="progressbar"
              data-percent="85%"
              style={{ width: "85%" }}
            >
              <span className="sr-only">85% Complete</span>
            </div>
            <span className="progress-type">Leadership</span>
            <span className="progress-completed">85%</span>
          </div>
        </li>

        <li>
          <div className="progress" title="Doing my best!">
            <div
              className="progress-bar progress-bar-3"
              role="progressbar"
              data-percent="85%"
              style={{ width: "85%" }}
            >
              <span className="sr-only">85% Complete</span>
            </div>
            <span className="progress-type">Confidence</span>
            <span className="progress-completed">85%</span>
          </div>
        </li>
      </ul>
    </Fragment>
  );
};

export default SkillSingle;
