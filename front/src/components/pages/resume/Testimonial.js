import React from "react";

const Testimonial = () => {
  return (
    <div className="testimonial-item">
      <div className="testimonial-content">
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          consequat malesuada aliquet. Morbi vulputate nisl eget adipiscing
          consequat. Cras arcu tortor, ornare vel libero et, sagittis adipiscing
          leo. Aenean eget."
        </p>
      </div>

      <div className="testimonial-credits">
        <div className="testimonial-picture">
          <img src="img/team2.jpg" alt="" />
        </div>

        <p className="testimonial-author">Melissa Alvarez</p>
        <p className="testimonial-firm">Trexus Co.</p>
      </div>
    </div>
  );
};

export default Testimonial;
