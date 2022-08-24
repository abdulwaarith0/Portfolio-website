import React from "react";
import CTA from "./CTA";
import "./header.css";
import ME from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";
import "./headerMedia.css";

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Abdulwaarith Zakariyya</h1>
        <h5 className="text-light">A Passionate Front-end Web Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="my_img" />
        </div>
        <a href="#foo-ter" className="scroll_down">
          scroll Down
        </a>


      </div>
    </header>
  );
};

export default Header;
