import "./link-page.css";

import SkullIcon from "../images/Strawberries.jpg";
import InstagramLogo from "../images/instagram-logo.svg";
import CaraLogo from "../images/cara-logo.svg";
import TikTokLogo from "../images/tiktok-logo.svg";
import SubstackLogo from "../images/icons8-substack.svg";

const LinkPage = () => {
  return (
    <div className="link-page-outer">
      <div className="link-page-inner">
        <div className="link-page-header">
          <img className="icon-img" src={SkullIcon} alt="icon" />
          <h1>Kate Lawrence</h1>
        </div>
        <div className="link-page-body">
          <a
            target="_blank"
            className="link-page-link"
            rel="noreferrer"
            href="https://www.instagram.com/katelawrence.art/"
          >
            <img
              className="link-page-link-icon"
              alt="Instagram"
              src={InstagramLogo}
            />
            Instagram
          </a>
          <a
            target="_blank"
            className="link-page-link"
            rel="noreferrer"
            href="https://katelawrenceart.substack.com/"
          >
            <img
              className="link-page-link-icon"
              alt="Substack"
              src={SubstackLogo}
            />
            Substack
          </a>
          <a
            target="_blank"
            className="link-page-link"
            rel="noreferrer"
            href="https://www.tiktok.com/@k88lawrence"
          >
            <img
              className="link-page-link-icon"
              alt="TikTok"
              src={TikTokLogo}
            />
            TikTok
          </a>
          <a
            target="_blank"
            className="link-page-link"
            rel="noreferrer"
            href="https://cara.app/katelawrence"
          >
            <img className="link-page-link-icon" alt="Cara" src={CaraLogo} />
            Cara
          </a>
          <a
            target="_blank"
            className="link-page-link"
            rel="noreferrer"
            href="https://ko-fi.com/katelawrenceart"
          >
            Like my work? Buy me a coffee!
          </a>
        </div>
      </div>
      <div className="link-page-footer">{/* <Socials /> */}</div>
    </div>
  );
};

export default LinkPage;
