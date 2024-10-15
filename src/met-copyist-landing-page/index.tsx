import React from "react";
import "./met-copyist-landing-page.css";

import SkullIcon from "../images/skull-icon.jpg";
import InstagramIcon from "../images/instagram-icon.svg";
import CaraIcon from "../images/cara-icon.svg";

const MetCopyistLandingPage = () => {
  return (
    <div className="met-copyist-landing-page-outer">
      <div className="met-copyist-landing-page-inner">
        <div className="met-copyist-header">
          <img className="icon-img" src={SkullIcon} alt="icon" />
          <h1>Kate Lawrence</h1>
          <p>
            Hello! I'm Kate, an artist from Brooklyn. I'm currently copying
            Georges de la Tour's{" "}
            <em>
              <a
                className="text-link"
                href="https://www.metmuseum.org/art/collection/search/436839"
                target="_blank"
                rel="noreferrer"
              >
                The Penitent Magdalen
              </a>
            </em>{" "}
            as a part of the Met's Copyist Program. You can find more
            information about me and the program at the links below!
          </p>
        </div>
        <div className="met-copyist-body">
          <a
            className="met-copyist-link"
            target="_blank"
            rel="noreferrer"
            href="https://www.metmuseum.org/events/programs/met-creates/copyist-program"
          >
            The Met Copyist Program
          </a>
          <a
            target="_blank"
            className="met-copyist-link"
            rel="noreferrer"
            href="https://www.instagram.com/katelawrence.art/"
          >
            See more of my work on Instagram
          </a>
          <a
            target="_blank"
            className="met-copyist-link"
            rel="noreferrer"
            href="https://ko-fi.com/katelawrenceart"
          >
            Like what I'm doing? Buy me a coffee!
          </a>
        </div>
      </div>
      <div className="met-copyist-footer">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.instagram.com/katelawrence.art/"
        >
          <img className="social-icon" alt="Instagram" src={InstagramIcon} />
        </a>
        <a
          target="_blank"
          className="social-icon"
          rel="noreferrer"
          href="https://cara.app/katelawrence"
        >
          <img className="social-icon" alt="Cara" src={CaraIcon} />
        </a>
      </div>
    </div>
  );
};

export default MetCopyistLandingPage;
