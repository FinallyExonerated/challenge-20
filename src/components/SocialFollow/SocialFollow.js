import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTwitter,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";

function SocialFollow() {
  return (
    <div class="social-container">
      <h3>Github</h3>
      <a href="https://github.com/FinallyExonerated"
        className="github social">
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <div class="social-container">
        <h3>Twitter</h3>
        <a href="https://twitter.com/FinallyTechMade"
          className="twitter social">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <div class="social-container">
          <h3>Linkedin</h3>
          <a href="https://www.linkedin.com/in/jordan-smith-8281b1237"
            className="linkedin social">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default SocialFollow;









