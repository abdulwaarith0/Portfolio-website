import React from "react";
import "./service.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services" >
      <h5 className="service-head">What I Offer</h5>
      <h2>Services</h2>

      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h2 className="h-2">Web Development</h2>
          </div>
          <article className="service_">
          <ul className="service_list">
            <li>
              <BiCheck className="service_check" />
              <p className="text-light">Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <BiCheck className="service_check" />
              <p className="text-light">Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <BiCheck className="service_check" />
              <p className="text-light">Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <BiCheck className="service_check" />
              <p className="text-light">Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <BiCheck className="service_check" />
              <p className="text-light">Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <BiCheck className="service_check" />
              <p className="text-light">Lorem ipsum dolor sit amet consectetur.</p>
            </li>
          </ul>
          </article>
        </article>
      </div>
    </section>
  );
};

export default Services;
