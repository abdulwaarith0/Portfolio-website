import React from "react";
import "./about.css";
import "./aboutMedia.css";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get TO Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me_img">
            <img src={ME} alt="" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>1+ Year Working</small>
            </article>

            <article className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h5>Projects</h5>
              <small>10+ Completed Projects</small>
            </article>

            {/* <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>1+ Year Working</small>
            </article> */}
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quis consectetur nemo at molestiae voluptatem pariatur numquam veritatis saepe. Consequuntur soluta vero reiciendis veritatis neque expedita nulla deleniti, voluptatem voluptas!
          </p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  );
};

export default About;
