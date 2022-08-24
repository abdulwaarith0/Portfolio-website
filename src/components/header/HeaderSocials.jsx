import React from "react";
import { BsLinkedin, BsGithub, BsTwitter } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header_socials">
      <a
        href="https://www.linkedin.com/in/abdulwaarith-zakariyya-825562234/"
        target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/abdulwaarith0" target="_blank">
        <BsGithub />
      </a>
      <a href="https://twitter.com/abdulwaarith_z" target="_blank">
        <BsTwitter />
      </a>
    </div>
  );
};

export default HeaderSocials;
