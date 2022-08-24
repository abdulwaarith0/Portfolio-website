import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import "./experience.css";
import "./experienceMedia.css";

const Experience = () => {
  return (
    <section id="experience">
      <h5 className="skill">What Skills I Have </h5>
      <h2>My Experience</h2>

      <div className="container experience_container">
        <div className="experience_frontend">
          <h3 className="h-3">Front-end Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsPatchCheckFill className= "experience_details_icons" />
              <div>
              <h4>HTML</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className= "experience_details_icons" />
              <div>
              <h4>CSS</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className= "experience_details_icons" />
              <div>
              <h4>BOOTSTRAP</h4>
              <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className= "experience_details_icons" />
              <div>
              <h4>SASS</h4>
              <small className="text-light">Basic</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className= "experience_details_icons" />
              <div>
              <h4>JAVASCRIPT</h4>
              <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className= "experience_details_icons" />
              <div>
              <h4>REACT</h4>
              <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className= "experience_details_icons" />
              <div><h4>React </h4>
              <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className= "experience_details_icons" />
              <div>
              <h4>REACTJs</h4>
              <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className= "experience_details_icons" />
              <div>
              <h4>REACTJs</h4>
              <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        </div>
  

    </section>
  );
};

export default Experience;
