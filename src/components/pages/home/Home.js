import React from "react";

const Home = () => {
  return (
    <div className="section-vcardbody section-home" id="section-home">
      <div className="vcard-profile-pic">
        <img src="img/profile2.jpg" id="profile2" alt="" />
        <img
          src="img/profile.jpg"
          id="profile1"
          className="profileActive"
          alt=""
        />
      </div>
      <div className="vcard-profile-description">
        <h1 className="profile-title">
          Hi, i'm <span className="color1">Denis John!</span>
        </h1>
        <h2 className="profile-subtitle">Web & Mobile Developer</h2>
        <hr className="hr1" />
        <div className="vcard-profile-description-text">
          <p>
            Founder of Codestorm. Professional mobile app developer and web app
            developer based in Nigeria. Sometimes works as a freelancer.
          </p>
        </div>
        <div className="vcard-profile-description-feature">
          <div className="vcard-profile-description-ft-item">
            <p>
              email: denis.john.ndarake@gmail.com <br /> phone +234 816 1535 219
              or +234 816 1678 810
            </p>
          </div>
        </div>
      </div>
      <div className="vcard-footer">
        <div className="footer-social-icons">
          <a href="#">
            <i className="fab fa-github"></i>
          </a>
          <a href="#">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="#">
            <i className="fab fa-youtube"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
